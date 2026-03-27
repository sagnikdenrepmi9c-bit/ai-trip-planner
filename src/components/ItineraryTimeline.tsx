import { motion } from "framer-motion";
import { icons } from "lucide-react";
import type { DayItinerary } from "@/data/mockData";

interface Props {
  days: DayItinerary[];
  selectedDay: number;
  onSelectDay: (day: number) => void;
}

const periodColors: Record<string, string> = {
  Morning: "bg-travel-gold/15 text-travel-gold border-travel-gold/30",
  Afternoon: "bg-primary/10 text-primary border-primary/30",
  Evening: "bg-accent/10 text-accent border-accent/30",
};

const ItineraryTimeline = ({ days, selectedDay, onSelectDay }: Props) => {
  const currentDay = days.find((d) => d.day === selectedDay) || days[0];

  return (
    <div>
      {/* Day selector */}
      <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide pb-2">
        {days.map((d) => (
          <button
            key={d.day}
            onClick={() => onSelectDay(d.day)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              selectedDay === d.day
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Day {d.day}
          </button>
        ))}
      </div>

      <h3 className="font-display text-xl font-semibold text-foreground mb-6">{currentDay.date}</h3>

      {/* Timeline */}
      <div className="relative pl-8">
        <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-border" />
        {currentDay.activities.map((activity, i) => {
          const IconComponent = (icons as Record<string, any>)[activity.icon] || icons.MapPin;
          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative mb-6 last:mb-0"
            >
              <div className="absolute -left-5 top-3 w-4 h-4 rounded-full bg-primary border-2 border-card shadow" />
              <div className="card-travel p-5">
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border ${periodColors[activity.period]}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-muted-foreground">{activity.time}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${periodColors[activity.period]}`}>
                        {activity.period}
                      </span>
                    </div>
                    <h4 className="font-display text-base font-semibold text-foreground">{activity.name}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{activity.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ItineraryTimeline;
