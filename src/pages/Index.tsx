import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import BookingWidget from "@/components/BookingWidget";
import SearchResults from "@/components/SearchResults";
import DoMoreSection from "@/components/DoMoreSection";
import PopularRoutes from "@/components/PopularRoutes";
import PopularHotels from "@/components/PopularHotels";
import PopularAirlines from "@/components/PopularAirlines";
import MapView from "@/components/MapView";

type TabType = "flights" | "hotels" | "trains" | "buses";

const Index = () => {
  const [searchResult, setSearchResult] = useState<{ type: TabType; params: Record<string, string> } | null>(null);

  const handleSearch = (tab: TabType, params: Record<string, string>) => {
    setSearchResult({ type: tab, params });
    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero + Booking Widget */}
      <div className="relative bg-gradient-to-br from-secondary/5 via-background to-primary/5 pt-8 pb-12">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Where do you want to <span className="text-primary">go?</span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Search flights, hotels, trains & buses at the best prices
            </p>
          </div>
          <BookingWidget onSearch={handleSearch} />
        </div>
      </div>

      {/* Search Results */}
      <AnimatePresence>
        {searchResult && (
          <motion.div
            id="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto px-4 md:px-6 py-8"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-[3] min-w-0">
                <SearchResults type={searchResult.type} params={searchResult.params} />
              </div>
              <div className="flex-[2] min-w-0">
                <div className="lg:sticky lg:top-20">
                  <MapView />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 space-y-12">
        <DoMoreSection />
        <PopularRoutes />
        <PopularHotels />
        <PopularAirlines />
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © 2026 TravelApp. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
