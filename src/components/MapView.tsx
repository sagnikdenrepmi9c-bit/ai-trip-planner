import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapMarker {
  lat: number;
  lng: number;
  label: string;
}

interface MapViewProps {
  markers?: MapMarker[];
  center?: [number, number];
  zoom?: number;
}

const MapView = ({ markers = [], center = [20.5937, 78.9629], zoom = 5 }: MapViewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const map = L.map(containerRef.current, {
      center, zoom, zoomControl: true, attributionControl: false,
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);
    layerRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;

    return () => { map.remove(); mapRef.current = null; };
  }, []);

  useEffect(() => {
    if (!mapRef.current || !layerRef.current) return;
    layerRef.current.clearLayers();

    if (markers.length === 0) return;

    markers.forEach((m, i) => {
      const icon = L.divIcon({
        className: "",
        html: `<div style="background:hsl(24 95% 53%);color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3);">${i + 1}</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });
      L.marker([m.lat, m.lng], { icon }).addTo(layerRef.current!).bindPopup(m.label);
    });

    if (markers.length > 1) {
      const coords = markers.map((m) => [m.lat, m.lng] as [number, number]);
      L.polyline(coords, { color: "hsl(220, 70%, 50%)", weight: 3, opacity: 0.6, dashArray: "8 6" }).addTo(layerRef.current);
      mapRef.current.fitBounds(L.latLngBounds(coords), { padding: [40, 40] });
    } else {
      mapRef.current.setView([markers[0].lat, markers[0].lng], 12);
    }
  }, [markers]);

  return (
    <div className="card-travel overflow-hidden">
      <div ref={containerRef} className="w-full h-[400px] lg:h-[500px]" />
    </div>
  );
};

export default MapView;
