import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import CityAutocomplete from "./CityAutocomplete";

interface HotelSearchFormProps {
  onSearch: (params: Record<string, string>) => void;
}

const HotelSearchForm = ({ onSearch }: HotelSearchFormProps) => {
  const [destination, setDestination] = useState("New Delhi (DEL)");
  const [checkin, setCheckin] = useState("2026-04-15");
  const [checkout, setCheckout] = useState("2026-04-18");

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <CityAutocomplete label="Destination" value={destination} onChange={setDestination} icon={<MapPin className="w-4 h-4 text-muted-foreground" />} />
        <div>
          <label className="text-xs text-muted-foreground font-medium mb-1 block">Check-in</label>
          <input type="date" value={checkin} onChange={(e) => setCheckin(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm font-medium text-foreground" />
        </div>
        <div>
          <label className="text-xs text-muted-foreground font-medium mb-1 block">Check-out</label>
          <input type="date" value={checkout} onChange={(e) => setCheckout(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm font-medium text-foreground" />
        </div>
        <div>
          <label className="text-xs text-muted-foreground font-medium mb-1 block">Rooms & Guests</label>
          <select className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm font-medium text-foreground">
            <option>1 Room, 2 Guests</option>
            <option>2 Rooms, 4 Guests</option>
            <option>3 Rooms, 6 Guests</option>
          </select>
        </div>
      </div>
      <button onClick={() => onSearch({ destination, checkin, checkout })}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-3 rounded-xl text-base font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
        Search Hotels <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HotelSearchForm;
