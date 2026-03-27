import { useMemo } from "react";
import { MapPin, Navigation } from "lucide-react";
import type { Activity } from "@/data/mockData";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  activities: Activity[];
  dayLabel: string;
}

const MapView = ({ activities, dayLabel }: Props) => {
  const { points, viewBox, path } = useMemo(() => {
    if (!activities.length) return { points: [], viewBox: "0 0 500 400", path: "" };

    const lats = activities.map((a) => a.lat);
    const lngs = activities.map((a) => a.lng);
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLng = Math.min(...lngs);
    const maxLng = Math.max(...lngs);

    const pad = 0.15;
    const latRange = (maxLat - minLat) || 0.05;
    const lngRange = (maxLng - minLng) || 0.05;

    const w = 500, h = 400;
    const pts = activities.map((a) => ({
      ...a,
      x: ((a.lng - minLng + latRange * pad) / (lngRange + latRange * pad * 2)) * w,
      y: h - ((a.lat - minLat + latRange * pad) / (latRange + latRange * pad * 2)) * h,
    }));

    const pathStr = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");

    return { points: pts, viewBox: `0 0 ${w} ${h}`, path: pathStr };
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

      <div className="flex-1 relative" style={{ background: "linear-gradient(145deg, hsl(210 25% 96%), hsl(200 20% 92%))" }}>
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(210 15% 85%)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Simulated map roads */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <line x1="0" y1="30%" x2="100%" y2="35%" stroke="hsl(210 10% 75%)" strokeWidth="3" />
          <line x1="20%" y1="0" x2="25%" y2="100%" stroke="hsl(210 10% 75%)" strokeWidth="2" />
          <line x1="60%" y1="0" x2="55%" y2="100%" stroke="hsl(210 10% 75%)" strokeWidth="2" />
          <line x1="0" y1="70%" x2="100%" y2="65%" stroke="hsl(210 10% 75%)" strokeWidth="3" />
        </svg>

        {/* Route & Markers */}
        <AnimatePresence mode="wait">
          <motion.svg
            key={dayLabel}
            className="absolute inset-0 w-full h-full"
            viewBox={viewBox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Route line */}
            <motion.path
              d={path}
              fill="none"
              stroke="hsl(17 88% 55%)"
              strokeWidth="3"
              strokeDasharray="8 4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            {/* Marker shadows */}
            {points.map((p) => (
              <circle key={`s-${p.id}`} cx={p.x} cy={p.y + 4} r="16" fill="hsl(220 20% 14% / 0.1)" />
            ))}

            {/* Markers */}
            {points.map((p, i) => (
              <g key={p.id}>
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r="14"
                  fill="hsl(0 0% 100%)"
                  stroke="hsl(17 88% 55%)"
                  strokeWidth="2.5"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                />
                <motion.text
                  x={p.x}
                  y={p.y + 5}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill="hsl(17 88% 55%)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                >
                  {i + 1}
                </motion.text>
              </g>
            ))}
          </motion.svg>
        </AnimatePresence>

        {/* Legend */}
        <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1.5">
          {activities.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
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
