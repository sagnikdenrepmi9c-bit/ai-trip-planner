import { useState, useEffect } from "react";
import { fetchFlights, fetchHotels, fetchTrains, fetchBuses } from "@/api/mockData";
import type { FlightOffer, HotelOffer, TrainOffer, BusOffer } from "@/api/mockData";
import { Plane, Clock, Star, Users, MapPin } from "lucide-react";

interface SearchResultsProps {
  type: "flights" | "hotels" | "trains" | "buses";
  params: Record<string, string>;
}

const SearchResults = ({ type, params }: SearchResultsProps) => {
  const [flights, setFlights] = useState<FlightOffer[]>([]);
  const [hotels, setHotels] = useState<HotelOffer[]>([]);
  const [trains, setTrains] = useState<TrainOffer[]>([]);
  const [buses, setBuses] = useState<BusOffer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const load = async () => {
      if (type === "flights") setFlights(await fetchFlights());
      else if (type === "hotels") setHotels(await fetchHotels());
      else if (type === "trains") setTrains(await fetchTrains());
      else if (type === "buses") setBuses(await fetchBuses());
      setLoading(false);
    };
    load();
  }, [type, params]);

  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 bg-muted animate-pulse rounded-xl" />
        ))}
      </div>
    );
  }

  if (type === "flights") {
    return (
      <div className="space-y-3">
        <h3 className="font-display text-lg font-bold text-foreground">Available Flights</h3>
        {flights.map((f) => (
          <div key={f.id} className="card-travel p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{f.logo}</span>
              <div>
                <p className="font-semibold text-sm text-foreground">{f.airline}</p>
                <p className="text-xs text-muted-foreground">{f.stops}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="text-center">
                <p className="font-bold text-foreground">{f.departureTime}</p>
                <p className="text-xs text-muted-foreground">{f.from}</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-3 h-3 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">{f.duration}</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-foreground">{f.arrivalTime}</p>
                <p className="text-xs text-muted-foreground">{f.to}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-primary">₹{f.price.toLocaleString()}</p>
              <button className="mt-1 px-4 py-1.5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "hotels") {
    return (
      <div className="space-y-3">
        <h3 className="font-display text-lg font-bold text-foreground">Available Hotels</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotels.map((h) => (
            <div key={h.id} className="card-travel overflow-hidden">
              <div className="relative">
                <img src={h.image} alt={h.name} className="w-full h-40 object-cover" />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-primary text-primary-foreground text-xs font-bold">{h.discount}% off</span>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-foreground text-sm">{h.name}</h4>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><MapPin className="w-3 h-3" /> {h.location}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="px-2 py-0.5 rounded-md bg-secondary/10 text-secondary text-xs font-bold">{h.rating} {h.ratingLabel}</span>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground line-through">₹{h.originalPrice.toLocaleString()}</p>
                    <p className="text-base font-bold text-primary">₹{h.pricePerNight.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "trains") {
    return (
      <div className="space-y-3">
        <h3 className="font-display text-lg font-bold text-foreground">Available Trains</h3>
        {trains.map((t) => (
          <div key={t.id} className="card-travel p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-sm text-foreground">{t.trainName}</p>
              <p className="text-xs text-muted-foreground">#{t.trainNumber} • {t.class}</p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="text-center">
                <p className="font-bold text-foreground">{t.departureTime}</p>
                <p className="text-xs text-muted-foreground">{t.from}</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-3 h-3 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">{t.duration}</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-foreground">{t.arrivalTime}</p>
                <p className="text-xs text-muted-foreground">{t.to}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-primary">₹{t.price.toLocaleString()}</p>
              <p className={`text-xs font-medium ${t.availability.startsWith("Available") ? "text-green-600" : t.availability.startsWith("RAC") ? "text-amber-600" : "text-destructive"}`}>{t.availability}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "buses") {
    return (
      <div className="space-y-3">
        <h3 className="font-display text-lg font-bold text-foreground">Available Buses</h3>
        {buses.map((b) => (
          <div key={b.id} className="card-travel p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-sm text-foreground">{b.operator}</p>
              <p className="text-xs text-muted-foreground">{b.busType}</p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="text-center">
                <p className="font-bold text-foreground">{b.departureTime}</p>
                <p className="text-xs text-muted-foreground">{b.from}</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-3 h-3 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">{b.duration}</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-foreground">{b.arrivalTime}</p>
                <p className="text-xs text-muted-foreground">{b.to}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-primary">₹{b.price.toLocaleString()}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-0.5"><Star className="w-3 h-3 text-amber-500" /> {b.rating}</span>
                <span className="flex items-center gap-0.5"><Users className="w-3 h-3" /> {b.seatsAvailable} seats</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default SearchResults;
