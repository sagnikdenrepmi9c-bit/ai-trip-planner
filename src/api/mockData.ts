// ─── Types ───────────────────────────────────────────────────────────────────

export interface City {
  code: string;
  name: string;
  country: string;
  type: "city" | "airport";
  lat: number;
  lng: number;
}

export interface FlightOffer {
  id: string;
  airline: string;
  logo: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  stops: string;
  class: string;
}

export interface HotelOffer {
  id: string;
  name: string;
  image: string;
  location: string;
  rating: number;
  ratingLabel: string;
  pricePerNight: number;
  originalPrice: number;
  discount: number;
  amenities: string[];
  lat: number;
  lng: number;
}

export interface TrainOffer {
  id: string;
  trainName: string;
  trainNumber: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  class: string;
  availability: string;
}

export interface BusOffer {
  id: string;
  operator: string;
  busType: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  rating: number;
  seatsAvailable: number;
}

export interface PopularRoute {
  id: string;
  city: string;
  image: string;
  destinations: string[];
}

export interface Airline {
  name: string;
  code: string;
}

// ─── Mock Data ───────────────────────────────────────────────────────────────

export const cities: City[] = [
  { code: "DEL", name: "New Delhi", country: "India", type: "airport", lat: 28.5562, lng: 77.1000 },
  { code: "BOM", name: "Mumbai", country: "India", type: "airport", lat: 19.0896, lng: 72.8656 },
  { code: "BLR", name: "Bangalore", country: "India", type: "airport", lat: 13.1986, lng: 77.7066 },
  { code: "MAA", name: "Chennai", country: "India", type: "airport", lat: 12.9941, lng: 80.1709 },
  { code: "CCU", name: "Kolkata", country: "India", type: "airport", lat: 22.6520, lng: 88.4463 },
  { code: "GOI", name: "Goa", country: "India", type: "airport", lat: 15.3808, lng: 73.8314 },
  { code: "HYD", name: "Hyderabad", country: "India", type: "airport", lat: 17.2403, lng: 78.4294 },
  { code: "PNQ", name: "Pune", country: "India", type: "airport", lat: 18.5822, lng: 73.9197 },
  { code: "AMD", name: "Ahmedabad", country: "India", type: "airport", lat: 23.0771, lng: 72.6347 },
  { code: "JAI", name: "Jaipur", country: "India", type: "airport", lat: 26.8242, lng: 75.8122 },
  { code: "JFK", name: "New York (JFK)", country: "USA", type: "airport", lat: 40.6413, lng: -73.7781 },
  { code: "LAX", name: "Los Angeles", country: "USA", type: "airport", lat: 33.9416, lng: -118.4085 },
  { code: "LHR", name: "London Heathrow", country: "UK", type: "airport", lat: 51.4700, lng: -0.4543 },
  { code: "CDG", name: "Paris (CDG)", country: "France", type: "airport", lat: 49.0097, lng: 2.5479 },
  { code: "DXB", name: "Dubai", country: "UAE", type: "airport", lat: 25.2532, lng: 55.3657 },
  { code: "SIN", name: "Singapore", country: "Singapore", type: "airport", lat: 1.3644, lng: 103.9915 },
  { code: "HND", name: "Tokyo (Haneda)", country: "Japan", type: "airport", lat: 35.5494, lng: 139.7798 },
  { code: "NRT", name: "Tokyo (Narita)", country: "Japan", type: "airport", lat: 35.7720, lng: 140.3929 },
  { code: "BKK", name: "Bangkok", country: "Thailand", type: "airport", lat: 13.6900, lng: 100.7501 },
  { code: "SYD", name: "Sydney", country: "Australia", type: "airport", lat: -33.9461, lng: 151.1772 },
  { code: "FRA", name: "Frankfurt", country: "Germany", type: "airport", lat: 50.0379, lng: 8.5622 },
  { code: "ICN", name: "Seoul (Incheon)", country: "South Korea", type: "airport", lat: 37.4602, lng: 126.4407 },
  { code: "HKG", name: "Hong Kong", country: "China", type: "airport", lat: 22.3080, lng: 113.9185 },
  { code: "KUL", name: "Kuala Lumpur", country: "Malaysia", type: "airport", lat: 2.7456, lng: 101.7099 },
];

const flightsMock: FlightOffer[] = [
  { id: "f1", airline: "IndiGo", logo: "✈️", from: "DEL", to: "BOM", departureTime: "06:15", arrivalTime: "08:30", duration: "2h 15m", price: 4299, stops: "Non-stop", class: "Economy" },
  { id: "f2", airline: "Air India", logo: "🛫", from: "DEL", to: "BOM", departureTime: "09:00", arrivalTime: "11:20", duration: "2h 20m", price: 5100, stops: "Non-stop", class: "Economy" },
  { id: "f3", airline: "SpiceJet", logo: "🔶", from: "DEL", to: "BOM", departureTime: "14:30", arrivalTime: "16:50", duration: "2h 20m", price: 3850, stops: "Non-stop", class: "Economy" },
  { id: "f4", airline: "Vistara", logo: "🌟", from: "DEL", to: "BOM", departureTime: "18:45", arrivalTime: "21:00", duration: "2h 15m", price: 6200, stops: "Non-stop", class: "Economy" },
  { id: "f5", airline: "Akasa Air", logo: "🟠", from: "DEL", to: "BOM", departureTime: "22:00", arrivalTime: "00:15+1", duration: "2h 15m", price: 3600, stops: "Non-stop", class: "Economy" },
  { id: "f6", airline: "IndiGo", logo: "✈️", from: "BOM", to: "GOI", departureTime: "07:00", arrivalTime: "08:10", duration: "1h 10m", price: 3200, stops: "Non-stop", class: "Economy" },
  { id: "f7", airline: "Air India", logo: "🛫", from: "DEL", to: "BLR", departureTime: "10:30", arrivalTime: "13:15", duration: "2h 45m", price: 5500, stops: "Non-stop", class: "Economy" },
  { id: "f8", airline: "IndiGo", logo: "✈️", from: "CCU", to: "DEL", departureTime: "05:45", arrivalTime: "08:00", duration: "2h 15m", price: 4100, stops: "Non-stop", class: "Economy" },
];

const hotelsMock: HotelOffer[] = [
  { id: "h1", name: "The Hosteller Delhi", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop", location: "Paharganj, New Delhi", rating: 8.7, ratingLabel: "Excellent", pricePerNight: 3510, originalPrice: 4130, discount: 15, amenities: ["WiFi", "AC", "Breakfast"], lat: 28.6448, lng: 77.2167 },
  { id: "h2", name: "Saltstayz Select - Nehru Place", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop", location: "Nehru Place, Delhi", rating: 6.0, ratingLabel: "Good", pricePerNight: 6169, originalPrice: 7850, discount: 21, amenities: ["WiFi", "Pool", "Gym"], lat: 28.5494, lng: 77.2530 },
  { id: "h3", name: "East Park Inn", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop", location: "Karol Bagh, Delhi", rating: 8.4, ratingLabel: "Excellent", pricePerNight: 4865, originalPrice: 5950, discount: 18, amenities: ["WiFi", "Restaurant", "Parking"], lat: 28.6519, lng: 77.1905 },
  { id: "h4", name: "Taj Palace Mumbai", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop", location: "Colaba, Mumbai", rating: 9.4, ratingLabel: "Outstanding", pricePerNight: 12500, originalPrice: 15000, discount: 17, amenities: ["WiFi", "Pool", "Spa", "Sea View"], lat: 18.9217, lng: 72.8332 },
  { id: "h5", name: "ITC Gardenia Bangalore", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=300&fit=crop", location: "Residency Road, Bangalore", rating: 9.1, ratingLabel: "Outstanding", pricePerNight: 9800, originalPrice: 12000, discount: 18, amenities: ["WiFi", "Pool", "Spa", "Restaurant"], lat: 12.9716, lng: 77.5946 },
  { id: "h6", name: "Radisson Blu Goa", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop", location: "Cavelossim, Goa", rating: 8.9, ratingLabel: "Excellent", pricePerNight: 7200, originalPrice: 9000, discount: 20, amenities: ["WiFi", "Beach", "Pool", "Bar"], lat: 15.1726, lng: 73.9453 },
];

const trainsMock: TrainOffer[] = [
  { id: "t1", trainName: "Rajdhani Express", trainNumber: "12301", from: "New Delhi", to: "Mumbai Central", departureTime: "16:55", arrivalTime: "08:35+1", duration: "15h 40m", price: 2135, class: "3A", availability: "Available 42" },
  { id: "t2", trainName: "Shatabdi Express", trainNumber: "12002", from: "New Delhi", to: "Bhopal", departureTime: "06:15", arrivalTime: "14:30", duration: "8h 15m", price: 1345, class: "CC", availability: "Available 120" },
  { id: "t3", trainName: "Duronto Express", trainNumber: "12213", from: "Mumbai Central", to: "New Delhi", departureTime: "23:00", arrivalTime: "15:50+1", duration: "16h 50m", price: 1890, class: "2A", availability: "RAC 5" },
  { id: "t4", trainName: "Garib Rath", trainNumber: "12909", from: "New Delhi", to: "Ahmedabad", departureTime: "15:40", arrivalTime: "05:30+1", duration: "13h 50m", price: 795, class: "3A", availability: "WL 12" },
  { id: "t5", trainName: "Vande Bharat Express", trainNumber: "22436", from: "New Delhi", to: "Varanasi", departureTime: "06:00", arrivalTime: "14:00", duration: "8h 00m", price: 1885, class: "CC", availability: "Available 85" },
];

const busesMock: BusOffer[] = [
  { id: "b1", operator: "VRL Travels", busType: "Volvo Multi-Axle A/C Sleeper", from: "Bangalore", to: "Goa", departureTime: "21:30", arrivalTime: "07:00+1", duration: "9h 30m", price: 1200, rating: 4.5, seatsAvailable: 18 },
  { id: "b2", operator: "Orange Travels", busType: "Bharat Benz A/C Seater", from: "Hyderabad", to: "Bangalore", departureTime: "22:00", arrivalTime: "06:30+1", duration: "8h 30m", price: 850, rating: 4.2, seatsAvailable: 32 },
  { id: "b3", operator: "SRS Travels", busType: "Volvo A/C Sleeper", from: "Mumbai", to: "Pune", departureTime: "06:00", arrivalTime: "10:00", duration: "4h 00m", price: 450, rating: 4.0, seatsAvailable: 25 },
  { id: "b4", operator: "Neeta Travels", busType: "Mercedes Multi-Axle Semi Sleeper", from: "Mumbai", to: "Ahmedabad", departureTime: "20:00", arrivalTime: "05:30+1", duration: "9h 30m", price: 950, rating: 4.3, seatsAvailable: 12 },
  { id: "b5", operator: "KSRTC", busType: "Airavat Club Class A/C", from: "Bangalore", to: "Chennai", departureTime: "23:00", arrivalTime: "05:30+1", duration: "6h 30m", price: 780, rating: 3.9, seatsAvailable: 40 },
];

const popularRoutesMock: PopularRoute[] = [
  { id: "r1", city: "Mumbai Flights", image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=200&h=200&fit=crop", destinations: ["Goa", "Delhi", "Bangalore", "Ahmedabad"] },
  { id: "r2", city: "Delhi Flights", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=200&h=200&fit=crop", destinations: ["Mumbai", "Goa", "Bangalore", "Pune"] },
  { id: "r3", city: "Kolkata Flights", image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=200&h=200&fit=crop", destinations: ["Mumbai", "Delhi", "Bangalore"] },
  { id: "r4", city: "Bangalore Flights", image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=200&h=200&fit=crop", destinations: ["Delhi", "Mumbai", "Chennai", "Hyderabad"] },
  { id: "r5", city: "Chennai Flights", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=200&h=200&fit=crop", destinations: ["Delhi", "Mumbai", "Bangalore", "Kolkata"] },
  { id: "r6", city: "Hyderabad Flights", image: "https://images.unsplash.com/photo-1572621952023-90932f9219d7?w=200&h=200&fit=crop", destinations: ["Delhi", "Mumbai", "Bangalore", "Chennai"] },
];

const airlinesMock: Airline[] = [
  { name: "IndiGo", code: "6E" },
  { name: "Air India", code: "AI" },
  { name: "Air India Express", code: "IX" },
  { name: "Akasa Air", code: "QP" },
  { name: "Alliance Air", code: "9I" },
  { name: "SpiceJet", code: "SG" },
  { name: "Vistara", code: "UK" },
];

// ─── API-like Fetch Functions ────────────────────────────────────────────────

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchFlights(from?: string, to?: string): Promise<FlightOffer[]> {
  await delay(400);
  if (from && to) {
    return flightsMock.filter(
      (f) => f.from.toLowerCase() === from.toLowerCase() && f.to.toLowerCase() === to.toLowerCase()
    );
  }
  return flightsMock;
}

export async function fetchHotels(location?: string): Promise<HotelOffer[]> {
  await delay(500);
  if (location) {
    return hotelsMock.filter((h) => h.location.toLowerCase().includes(location.toLowerCase()));
  }
  return hotelsMock;
}

export async function fetchTrains(from?: string, to?: string): Promise<TrainOffer[]> {
  await delay(400);
  return trainsMock;
}

export async function fetchBuses(from?: string, to?: string): Promise<BusOffer[]> {
  await delay(400);
  return busesMock;
}

export async function fetchPopularRoutes(): Promise<PopularRoute[]> {
  await delay(300);
  return popularRoutesMock;
}

export async function fetchAirlines(): Promise<Airline[]> {
  await delay(200);
  return airlinesMock;
}

export function searchCities(query: string): City[] {
  if (!query || query.length < 1) return [];
  const q = query.toLowerCase();
  return cities.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q) ||
      c.country.toLowerCase().includes(q)
  ).slice(0, 8);
}
