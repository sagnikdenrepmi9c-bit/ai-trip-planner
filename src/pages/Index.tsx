import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import HeroSearch from "@/components/HeroSearch";
import ItineraryTimeline from "@/components/ItineraryTimeline";
import FlightCards from "@/components/FlightCards";
import HotelCards from "@/components/HotelCards";
import MapView from "@/components/MapView";
import { itineraryData } from "@/data/mockData";

type TripDuration = "3" | "5" | "7";

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [tripDuration, setTripDuration] = useState<TripDuration>("3");
  const [selectedDay, setSelectedDay] = useState(1);

  const days = itineraryData[tripDuration];
  const currentDay = days.find((d) => d.day === selectedDay) || days[0];

  const handleSearch = () => {
    setShowDashboard(true);
    setSelectedDay(1);
  };

  const handleDurationChange = (d: TripDuration) => {
    setTripDuration(d);
    setSelectedDay(1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-3 flex items-center justify-between bg-card/80 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-hero)" }}>
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold text-foreground">Wanderly</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a className="hover:text-foreground transition-colors cursor-pointer">Explore</a>
          <a className="hover:text-foreground transition-colors cursor-pointer">My Trips</a>
          <a className="hover:text-foreground transition-colors cursor-pointer">Deals</a>
        </div>
        <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
          Sign In
        </button>
      </nav>

      {/* Hero */}
      <HeroSearch onSearch={handleSearch} />

      {/* Dashboard */}
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-7xl mx-auto px-4 md:px-6 py-10"
            id="dashboard"
          >
            {/* Trip Duration Tabs */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-sm font-medium text-muted-foreground mr-2">Trip Duration:</span>
              {(["3", "5", "7"] as TripDuration[]).map((d) => (
                <button
                  key={d}
                  onClick={() => handleDurationChange(d)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    tripDuration === d
                      ? "text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                  style={tripDuration === d ? { background: "var(--gradient-hero)" } : undefined}
                >
                  {d}-Day Trip
                </button>
              ))}
            </div>

            {/* Two column layout */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column */}
              <div className="flex-[3] min-w-0 space-y-10">
                <ItineraryTimeline
                  days={days}
                  selectedDay={selectedDay}
                  onSelectDay={setSelectedDay}
                />
                <FlightCards />
                <HotelCards />
              </div>

              {/* Right Column - Sticky Map */}
              <div className="flex-[2] min-w-0">
                <div className="lg:sticky lg:top-20">
                  <MapView
                    activities={currentDay.activities}
                    dayLabel={currentDay.date}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
