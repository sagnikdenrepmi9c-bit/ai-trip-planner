import { useEffect, useState } from "react";
import { fetchPopularRoutes, type PopularRoute } from "@/api/mockData";

const PopularRoutes = () => {
  const [routes, setRoutes] = useState<PopularRoute[]>([]);

  useEffect(() => {
    fetchPopularRoutes().then(setRoutes);
  }, []);

  return (
    <section>
      <h2 className="font-display text-xl font-bold text-foreground mb-4">Popular Flight Routes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {routes.map((route) => (
          <div key={route.id} className="card-travel p-4 flex items-start gap-3 cursor-pointer">
            <img src={route.image} alt={route.city} className="w-14 h-14 rounded-xl object-cover shrink-0" />
            <div>
              <h3 className="font-semibold text-sm text-foreground">{route.city}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                To: {route.destinations.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRoutes;
