import { useEffect, useState } from "react";
import { fetchAirlines, type Airline } from "@/api/mockData";
import { Plane } from "lucide-react";

const PopularAirlines = () => {
  const [airlines, setAirlines] = useState<Airline[]>([]);

  useEffect(() => {
    fetchAirlines().then(setAirlines);
  }, []);

  return (
    <section>
      <h2 className="font-display text-xl font-bold text-foreground mb-4">Popular Domestic Airlines</h2>
      <div className="card-travel p-4">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {airlines.map((a) => (
            <div key={a.code} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-muted transition-colors cursor-pointer">
              <Plane className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-foreground">{a.name}</span>
              <span className="text-xs text-muted-foreground">({a.code})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularAirlines;
