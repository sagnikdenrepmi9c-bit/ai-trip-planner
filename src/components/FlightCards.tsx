import { Plane, Clock, ArrowRight } from "lucide-react";
import { flights } from "@/data/mockData";

const FlightCards = () => (
  <div>
    <h3 className="font-display text-xl font-semibold text-foreground mb-4">✈️ Available Flights</h3>
    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
      {flights.map((f) => (
        <div key={f.id} className="card-travel shrink-0 w-72 p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Plane className="w-4 h-4 text-primary" />
            </div>
            <span className="font-semibold text-foreground text-sm">{f.airline}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-center">
              <p className="text-lg font-bold text-foreground">{f.departureTime}</p>
              <p className="text-xs text-muted-foreground">{f.departure}</p>
            </div>
            <div className="flex flex-col items-center px-2">
              <p className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{f.duration}</p>
              <div className="flex items-center gap-1 my-1">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="w-12 h-px bg-border" />
                <ArrowRight className="w-3 h-3 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">{f.stops}</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-foreground">{f.arrivalTime}</p>
              <p className="text-xs text-muted-foreground">{f.arrival}</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
            <p className="text-lg font-bold text-primary">₹{f.price.toLocaleString()}</p>
            <button className="px-4 py-1.5 rounded-lg text-sm font-semibold text-primary-foreground transition-all hover:scale-105 active:scale-95" style={{ background: "var(--gradient-hero)" }}>
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FlightCards;
