import { useState, useRef, useEffect } from "react";
import { searchCities, type City } from "@/api/mockData";
import { MapPin } from "lucide-react";

interface CityAutocompleteProps {
  label: string;
  value: string;
  onChange: (value: string, city?: City) => void;
  icon?: React.ReactNode;
  placeholder?: string;
}

const CityAutocomplete = ({ label, value, onChange, icon, placeholder }: CityAutocompleteProps) => {
  const [query, setQuery] = useState(value);
  const [results, setResults] = useState<City[]>([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleInput = (val: string) => {
    setQuery(val);
    const r = searchCities(val);
    setResults(r);
    setOpen(r.length > 0);
    onChange(val);
  };

  const handleSelect = (city: City) => {
    const display = `${city.name} (${city.code})`;
    setQuery(display);
    onChange(display, city);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative flex-1">
      <label className="text-xs text-muted-foreground font-medium mb-1 block">{label}</label>
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-input bg-background hover:border-primary/50 transition-colors">
        {icon || <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />}
        <input
          value={query}
          onChange={(e) => handleInput(e.target.value)}
          onFocus={() => { if (results.length > 0) setOpen(true); }}
          placeholder={placeholder || "Search city or airport"}
          className="w-full bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground"
        />
      </div>
      {open && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {results.map((city) => (
            <button
              key={city.code}
              onClick={() => handleSelect(city)}
              className="w-full text-left px-4 py-2.5 hover:bg-muted transition-colors flex items-center gap-3 text-sm"
            >
              <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
              <div>
                <span className="font-semibold text-foreground">{city.name}</span>
                <span className="text-muted-foreground ml-1">({city.code})</span>
                <span className="text-xs text-muted-foreground ml-2">{city.country}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CityAutocomplete;
