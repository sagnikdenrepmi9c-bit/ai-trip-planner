import { Star, MapPin } from "lucide-react";
import { hotels } from "@/data/mockData";

const HotelCards = () => (
  <div>
    <h3 className="font-display text-xl font-semibold text-foreground mb-4">🏨 Recommended Hotels</h3>
    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
      {hotels.map((h) => (
        <div key={h.id} className="card-travel shrink-0 w-64 overflow-hidden">
          <div className="relative h-36">
            <img src={h.image} alt={h.name} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute top-2 right-2 bg-card/90 backdrop-blur-sm text-foreground text-xs font-bold px-2 py-1 rounded-md">
              {h.rating}/10
            </div>
          </div>
          <div className="p-4">
            <h4 className="font-display text-sm font-semibold text-foreground truncate">{h.name}</h4>
            <div className="flex items-center gap-1 my-1">
              {Array.from({ length: h.stars }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-travel-gold text-travel-gold" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3">
              <MapPin className="w-3 h-3" />{h.location}
            </p>
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-primary">₹{h.pricePerNight.toLocaleString()}<span className="text-xs font-normal text-muted-foreground">/night</span></p>
              <button className="px-3 py-1.5 rounded-lg text-xs font-semibold text-accent-foreground transition-all hover:scale-105 active:scale-95" style={{ background: "var(--gradient-teal)" }}>
                View Deal
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HotelCards;
