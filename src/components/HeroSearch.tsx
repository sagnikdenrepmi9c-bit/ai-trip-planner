import { useState } from "react";
import { MapPin, Calendar, Sparkles, Plane } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-travel.jpg";

interface HeroSearchProps {
  onSearch: (origin: string, destination: string) => void;
}

const HeroSearch = ({ onSearch }: HeroSearchProps) => {
  const [origin, setOrigin] = useState("Delhi");
  const [destination, setDestination] = useState("Tokyo");
  const [dates, setDates] = useState("Apr 15 – Apr 22");

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Tokyo skyline with Mount Fuji"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-sm px-4 py-1.5 mb-6 border border-primary/30">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">AI-Powered Travel Planning</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4 leading-tight">
            Plan Your Dream
            <br />
            <span className="text-travel-gold">Journey</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-body">
            Let AI craft your perfect itinerary with real-time flights, curated stays, and local experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="bg-card/95 backdrop-blur-xl rounded-2xl p-3 shadow-[var(--shadow-elevated)]"
        >
          <div className="flex flex-col md:flex-row items-stretch gap-2">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/60 hover:bg-muted transition-colors">
              <Plane className="w-5 h-5 text-primary shrink-0" />
              <div className="text-left">
                <label className="text-xs text-muted-foreground font-medium">Origin</label>
                <input
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="block w-full bg-transparent text-foreground font-semibold text-sm outline-none"
                  placeholder="Where from?"
                />
              </div>
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/60 hover:bg-muted transition-colors">
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              <div className="text-left">
                <label className="text-xs text-muted-foreground font-medium">Destination</label>
                <input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="block w-full bg-transparent text-foreground font-semibold text-sm outline-none"
                  placeholder="Where to?"
                />
              </div>
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/60 hover:bg-muted transition-colors">
              <Calendar className="w-5 h-5 text-muted-foreground shrink-0" />
              <div className="text-left">
                <label className="text-xs text-muted-foreground font-medium">Travel Dates</label>
                <input
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  className="block w-full bg-transparent text-foreground font-semibold text-sm outline-none"
                  placeholder="Select dates"
                />
              </div>
            </div>
            <button
              onClick={() => onSearch(origin, destination)}
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold text-primary-foreground transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: "var(--gradient-hero)" }}
            >
              <Sparkles className="w-5 h-5" />
              <span className="whitespace-nowrap">Generate AI Trip</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSearch;
