import { useState } from "react";
import { Plane, Building2, Train, Bus } from "lucide-react";
import FlightSearchForm from "./FlightSearchForm";
import HotelSearchForm from "./HotelSearchForm";
import TrainSearchForm from "./TrainSearchForm";
import BusSearchForm from "./BusSearchForm";

type TabType = "flights" | "hotels" | "trains" | "buses";

interface BookingWidgetProps {
  onSearch: (tab: TabType, params: Record<string, string>) => void;
}

const tabs: { id: TabType; label: string; icon: React.ReactNode; badge?: string }[] = [
  { id: "flights", label: "Flights", icon: <Plane className="w-4 h-4" /> },
  { id: "hotels", label: "Hotels", icon: <Building2 className="w-4 h-4" />, badge: "Up to 50% Off" },
  { id: "trains", label: "Trains", icon: <Train className="w-4 h-4" /> },
  { id: "buses", label: "Buses", icon: <Bus className="w-4 h-4" /> },
];

const BookingWidget = ({ onSearch }: BookingWidgetProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("flights");

  return (
    <div className="bg-card rounded-2xl shadow-[var(--shadow-elevated)] border border-border overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold transition-all relative ${
              activeTab === tab.id
                ? "text-secondary border-b-2 border-secondary bg-secondary/5"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
            {tab.badge && (
              <span className="hidden md:inline text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-bold">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Forms */}
      <div className="p-4 md:p-6">
        {activeTab === "flights" && <FlightSearchForm onSearch={(p) => onSearch("flights", p)} />}
        {activeTab === "hotels" && <HotelSearchForm onSearch={(p) => onSearch("hotels", p)} />}
        {activeTab === "trains" && <TrainSearchForm onSearch={(p) => onSearch("trains", p)} />}
        {activeTab === "buses" && <BusSearchForm onSearch={(p) => onSearch("buses", p)} />}
      </div>
    </div>
  );
};

export default BookingWidget;
