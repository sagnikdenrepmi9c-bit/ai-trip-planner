import { useEffect, useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Navigation } from "lucide-react";
import type { Activity } from "@/data/mockData";
import { motion } from "framer-motion";

// Fix default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const createNumberedIcon = (num: number) =>
  L.divIcon({
    className: "",
    html: `<div style="
      width:32px;height:32px;border-radius:50%;
      background:hsl(17 88% 55%);color:#fff;
      display:flex;align-items:center;justify-content:center;
      font-weight:700;font-size:14px;
      border:3px solid #fff;
      box-shadow:0 2px 8px rgba(0,0,0,0.4);
    ">${num}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

interface FitBoundsProps {
  activities: Activity[];
}

const FitBounds = ({ activities }: FitBoundsProps) => {
  const map = useMap();
  useEffect(() => {
    if (!activities.length) return;
    const bounds = L.latLngBounds(activities.map((a) => [a.lat, a.lng]));
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
  }, [activities, map]);
  return null;
};

interface Props {
  activities: Activity[];
  dayLabel: string;
}

const MapView = ({ activities, dayLabel }: Props) => {
  const positions = useMemo(
    () => activities.map((a) => [a.lat, a.lng] as [number, number]),
    [activities]
  );

  const center = useMemo(() => {
    if (!activities.length) return [35.6762, 139.6503] as [number, number];
    const avgLat = activities.reduce((s, a) => s + a.lat, 0) / activities.length;
    const avgLng = activities.reduce((s, a) => s + a.lng, 0) / activities.length;
    return [avgLat, avgLng] as [number, number];
  }, [activities]);

  return (
    <div className="card-travel overflow-hidden h-full min-h-[500px] flex flex-col">
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Navigation className="w-4 h-4 text-accent" />
          <span className="font-display text-sm font-semibold text-foreground">Route Map</span>
        </div>
        <span className="text-xs text-muted-foreground font-medium">{dayLabel}</span>
      </div>

      <div className="flex-1 relative">
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%", minHeight: "456px" }}
          zoomControl={false}
          attributionControl={false}
        >
          {/* Satellite tile layer */}
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          {/* Road/label overlay */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png"
          />

          <FitBounds activities={activities} />

          {/* Route polyline */}
          {positions.length > 1 && (
            <Polyline
              positions={positions}
              pathOptions={{
                color: "hsl(17, 88%, 55%)",
                weight: 4,
                opacity: 0.9,
                dashArray: "10, 6",
              }}
            />
          )}

          {/* Markers */}
          {activities.map((a, i) => (
            <Marker
              key={a.id}
              position={[a.lat, a.lng]}
              icon={createNumberedIcon(i + 1)}
            />
          ))}
        </MapContainer>

        {/* Legend overlay */}
        <div className="absolute bottom-3 left-3 right-3 z-[1000] flex flex-col gap-1.5">
          {activities.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-2 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs shadow-sm"
            >
              <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-bold shrink-0">
                {i + 1}
              </span>
              <span className="font-medium text-foreground truncate">{a.name}</span>
              <span className="text-muted-foreground ml-auto shrink-0">{a.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapView;
