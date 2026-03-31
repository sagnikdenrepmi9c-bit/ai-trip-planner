import { useEffect, useState } from "react";
import { fetchHotels, type HotelOffer } from "@/api/mockData";
import { MapPin } from "lucide-react";

const PopularHotels = () => {
  const [hotels, setHotels] = useState<HotelOffer[]>([]);

  useEffect(() => {
    fetchHotels().then(setHotels);
  }, []);

  return (
    <section>
      <h2 className="font-display text-xl font-bold text-foreground mb-4">Popular Hotels & Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotels.map((h) => (
          <div key={h.id} className="card-travel overflow-hidden cursor-pointer">
            <div className="relative">
              <img src={h.image} alt={h.name} className="w-full h-40 object-cover" />
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-primary text-primary-foreground text-xs font-bold">
                {h.discount}% off
              </span>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-foreground text-sm">{h.name}</h4>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3" /> {h.location}
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="px-2 py-0.5 rounded-md bg-secondary/10 text-secondary text-xs font-bold">
                  {h.rating} {h.ratingLabel}
                </span>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground line-through">₹{h.originalPrice.toLocaleString()}</p>
                  <p className="text-base font-bold text-primary">₹{h.pricePerNight.toLocaleString()}/night</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularHotels;
