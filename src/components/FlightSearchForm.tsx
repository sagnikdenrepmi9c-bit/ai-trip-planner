import { useState } from "react";
import { ArrowRight, Shield } from "lucide-react";
import CityAutocomplete from "./CityAutocomplete";

interface FlightSearchFormProps {
  onSearch: (params: Record<string, string>) => void;
}

const FlightSearchForm = ({ onSearch }: FlightSearchFormProps) => {
  const [tripType, setTripType] = useState<"oneway" | "round">("oneway");
  const [from, setFrom] = useState("New Delhi (DEL)");
  const [to, setTo] = useState("Mumbai (BOM)");
  const [departure, setDeparture] = useState("2026-04-15");
  const [returnDate, setReturnDate] = useState("2026-04-20");
  const [specialFare, setSpecialFare] = useState<string | null>(null);

  const handleSearch = () => {
    onSearch({ from, to, departure, returnDate: tripType === "round" ? returnDate : "", tripType });
  };

  return (
    <div className="space-y-4">
      {/* Trip Type */}
      <div className="flex gap-4">
        <label className="flex items-center gap-2 cursor-pointer text-sm font-medium">
          <input type="radio" checked={tripType === "oneway"} onChange={() => setTripType("oneway")} className="accent-primary" />
          One Way
        </label>
        <label className="flex items-center gap-2 cursor-pointer text-sm font-medium">
          <input type="radio" checked={tripType === "round"} onChange={() => setTripType("round")} className="accent-primary" />
          Round Trip
        </label>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <CityAutocomplete label="From" value={from} onChange={setFrom} />
        <CityAutocomplete label="To" value={to} onChange={setTo} />
        <div className="flex-1">
          <label className="text-xs text-muted-foreground font-medium mb-1 block">Departure</label>
          <input type="date" value={departure} onChange={(e) => setDeparture(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm font-medium text-foreground" />
        </div>
        {tripType === "round" && (
          <div className="flex-1">
            <label className="text-xs text-muted-foreground font-medium mb-1 block">Return</label>
            <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm font-medium text-foreground" />
          </div>
        )}
        <div className="flex-1">
          <label className="text-xs text-muted-foreground font-medium mb-1 block">Travellers & Class</label>
          <select className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm font-medium text-foreground">
            <option>1 Traveller, Economy</option>
            <option>2 Travellers, Economy</option>
            <option>1 Traveller, Business</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <button onClick={handleSearch}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-3 rounded-xl text-base font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
        Search <ArrowRight className="w-5 h-5" />
      </button>

      {/* Special Fares */}
      <div>
        <span className="text-xs text-muted-foreground font-medium">Special Fares (Optional):</span>
        <div className="flex gap-2 mt-2">
          {["Student", "Senior Citizen", "Armed Forces"].map((fare) => (
            <button key={fare} onClick={() => setSpecialFare(specialFare === fare ? null : fare)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                specialFare === fare ? "bg-secondary text-secondary-foreground border-secondary" : "bg-muted text-muted-foreground border-border hover:border-secondary"
              }`}>
              {fare}
            </button>
          ))}
        </div>
      </div>

      {/* Free Cancellation Banner */}
      <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/60 border border-border">
        <input type="checkbox" className="mt-1 accent-primary" />
        <div className="flex-1">
          <span className="text-sm font-semibold text-foreground">Always opt for Free Cancellation</span>
          <div className="flex flex-wrap gap-3 mt-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-primary" /> ₹0 cancellation fee</span>
            <span>Instant refunds</span>
            <span>Priority service</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchForm;
