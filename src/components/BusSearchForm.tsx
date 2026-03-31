import { useState } from "react";
import { ArrowRight } from "lucide-react";
import CityAutocomplete from "./CityAutocomplete";

interface BusSearchFormProps {
  onSearch: (params: Record<string, string>) => void;
}

const BusSearchForm = ({ onSearch }: BusSearchFormProps) => {
  const [from, setFrom] = useState("Bangalore (BLR)");
  const [to, setTo] = useState("Goa (GOI)");
  const [date, setDate] = useState("2026-04-15");

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <CityAutocomplete label="From" value={from} onChange={setFrom} />
        <CityAutocomplete label="To" value={to} onChange={setTo} />
        <div>
          <label className="text-xs text-muted-foreground font-medium mb-1 block">Travel Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm font-medium text-foreground" />
        </div>
      </div>
      <button onClick={() => onSearch({ from, to, date })}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-3 rounded-xl text-base font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
        Search Buses <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default BusSearchForm;
