export interface Activity {
  id: string;
  time: string;
  period: "Morning" | "Afternoon" | "Evening";
  name: string;
  description: string;
  icon: string;
  lat: number;
  lng: number;
}

export interface DayItinerary {
  day: number;
  date: string;
  activities: Activity[];
}

export interface Flight {
  id: string;
  airline: string;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  stops: string;
}

export interface Hotel {
  id: string;
  name: string;
  image: string;
  stars: number;
  pricePerNight: number;
  location: string;
  rating: number;
}

export const itineraryData: Record<string, DayItinerary[]> = {
  "3": [
    {
      day: 1, date: "Day 1 — Arrival & Culture",
      activities: [
        { id: "1a", time: "9:00 AM", period: "Morning", name: "Senso-ji Temple", description: "Explore Tokyo's oldest temple in Asakusa with its iconic Thunder Gate.", icon: "Landmark", lat: 35.7148, lng: 139.7967 },
        { id: "1b", time: "1:00 PM", period: "Afternoon", name: "Akihabara District", description: "Dive into the electric town of anime, manga, and electronics.", icon: "Zap", lat: 35.7023, lng: 139.7745 },
        { id: "1c", time: "6:00 PM", period: "Evening", name: "Shibuya Crossing", description: "Experience the world's busiest pedestrian crossing at sunset.", icon: "Users", lat: 35.6595, lng: 139.7004 },
      ],
    },
    {
      day: 2, date: "Day 2 — Modern Tokyo",
      activities: [
        { id: "2a", time: "8:30 AM", period: "Morning", name: "Tsukiji Outer Market", description: "Savor fresh sushi and street food at the famous fish market.", icon: "UtensilsCrossed", lat: 35.6654, lng: 139.7707 },
        { id: "2b", time: "12:30 PM", period: "Afternoon", name: "TeamLab Borderless", description: "Immerse yourself in a digital art museum with no boundaries.", icon: "Palette", lat: 35.6267, lng: 139.7840 },
        { id: "2c", time: "7:00 PM", period: "Evening", name: "Tokyo Tower Night View", description: "Enjoy panoramic city views from the illuminated tower.", icon: "Building", lat: 35.6586, lng: 139.7454 },
      ],
    },
    {
      day: 3, date: "Day 3 — Nature & Departure",
      activities: [
        { id: "3a", time: "7:00 AM", period: "Morning", name: "Meiji Shrine", description: "Walk through the serene forested grounds of this Shinto shrine.", icon: "TreePine", lat: 35.6764, lng: 139.6993 },
        { id: "3b", time: "12:00 PM", period: "Afternoon", name: "Harajuku & Takeshita St", description: "Explore quirky fashion and trendy cafés on Takeshita Street.", icon: "ShoppingBag", lat: 35.6702, lng: 139.7026 },
        { id: "3c", time: "5:00 PM", period: "Evening", name: "Shinjuku Gyoen Garden", description: "Relax in this beautiful national garden before departure.", icon: "Flower2", lat: 35.6852, lng: 139.7100 },
      ],
    },
  ],
  "5": [
    {
      day: 1, date: "Day 1 — Arrival & Culture",
      activities: [
        { id: "1a", time: "9:00 AM", period: "Morning", name: "Senso-ji Temple", description: "Explore Tokyo's oldest temple in Asakusa.", icon: "Landmark", lat: 35.7148, lng: 139.7967 },
        { id: "1b", time: "1:00 PM", period: "Afternoon", name: "Ueno Park & Museum", description: "Visit the National Museum and stroll through the park.", icon: "BookOpen", lat: 35.7146, lng: 139.7744 },
        { id: "1c", time: "6:00 PM", period: "Evening", name: "Ameyoko Market", description: "Experience bustling street food and shopping.", icon: "Store", lat: 35.7089, lng: 139.7748 },
      ],
    },
    {
      day: 2, date: "Day 2 — Electric City",
      activities: [
        { id: "2a", time: "9:00 AM", period: "Morning", name: "Akihabara District", description: "Electronics, anime, and gaming paradise.", icon: "Zap", lat: 35.7023, lng: 139.7745 },
        { id: "2b", time: "1:00 PM", period: "Afternoon", name: "Imperial Palace Gardens", description: "Walk through the East Gardens of the Imperial Palace.", icon: "Castle", lat: 35.6852, lng: 139.7528 },
        { id: "2c", time: "7:00 PM", period: "Evening", name: "Ginza District Dining", description: "Fine dining in Tokyo's upscale shopping district.", icon: "UtensilsCrossed", lat: 35.6717, lng: 139.7650 },
      ],
    },
    {
      day: 3, date: "Day 3 — Modern Art & Views",
      activities: [
        { id: "3a", time: "8:30 AM", period: "Morning", name: "Tsukiji Outer Market", description: "Fresh sushi breakfast and market exploration.", icon: "UtensilsCrossed", lat: 35.6654, lng: 139.7707 },
        { id: "3b", time: "12:30 PM", period: "Afternoon", name: "TeamLab Borderless", description: "Immersive digital art experience.", icon: "Palette", lat: 35.6267, lng: 139.7840 },
        { id: "3c", time: "7:00 PM", period: "Evening", name: "Odaiba Rainbow Bridge", description: "Night views of the Rainbow Bridge and Tokyo Bay.", icon: "Bridge", lat: 35.6308, lng: 139.7753 },
      ],
    },
    {
      day: 4, date: "Day 4 — Harajuku & Shibuya",
      activities: [
        { id: "4a", time: "7:00 AM", period: "Morning", name: "Meiji Shrine", description: "Peaceful morning at this iconic Shinto shrine.", icon: "TreePine", lat: 35.6764, lng: 139.6993 },
        { id: "4b", time: "12:00 PM", period: "Afternoon", name: "Harajuku & Takeshita St", description: "Fashion, crêpes, and quirky shops.", icon: "ShoppingBag", lat: 35.6702, lng: 139.7026 },
        { id: "4c", time: "6:00 PM", period: "Evening", name: "Shibuya Crossing", description: "The world's most famous pedestrian crossing.", icon: "Users", lat: 35.6595, lng: 139.7004 },
      ],
    },
    {
      day: 5, date: "Day 5 — Nature & Farewell",
      activities: [
        { id: "5a", time: "8:00 AM", period: "Morning", name: "Shinjuku Gyoen Garden", description: "A serene escape in the heart of Tokyo.", icon: "Flower2", lat: 35.6852, lng: 139.7100 },
        { id: "5b", time: "1:00 PM", period: "Afternoon", name: "Tokyo Tower", description: "Panoramic views from Tokyo's iconic landmark.", icon: "Building", lat: 35.6586, lng: 139.7454 },
        { id: "5c", time: "5:00 PM", period: "Evening", name: "Roppongi Hills", description: "Sunset views and last-minute shopping.", icon: "Sunset", lat: 35.6605, lng: 139.7292 },
      ],
    },
  ],
  "7": [
    {
      day: 1, date: "Day 1 — Arrival",
      activities: [
        { id: "1a", time: "10:00 AM", period: "Morning", name: "Check-in & Relax", description: "Settle into your hotel in Shinjuku.", icon: "Hotel", lat: 35.6896, lng: 139.6921 },
        { id: "1b", time: "2:00 PM", period: "Afternoon", name: "Shinjuku Exploration", description: "Explore the vibrant neighborhood around your hotel.", icon: "MapPin", lat: 35.6938, lng: 139.7034 },
        { id: "1c", time: "7:00 PM", period: "Evening", name: "Golden Gai", description: "Bar-hop through the tiny atmospheric bars of Golden Gai.", icon: "Wine", lat: 35.6940, lng: 139.7049 },
      ],
    },
    {
      day: 2, date: "Day 2 — Temples & Tradition",
      activities: [
        { id: "2a", time: "8:00 AM", period: "Morning", name: "Senso-ji Temple", description: "Tokyo's oldest Buddhist temple.", icon: "Landmark", lat: 35.7148, lng: 139.7967 },
        { id: "2b", time: "1:00 PM", period: "Afternoon", name: "Ueno Park", description: "Museums and cherry blossom walks.", icon: "TreePine", lat: 35.7146, lng: 139.7744 },
        { id: "2c", time: "6:00 PM", period: "Evening", name: "Sumida River Cruise", description: "Evening boat ride along Tokyo's historic river.", icon: "Ship", lat: 35.7100, lng: 139.8000 },
      ],
    },
    {
      day: 3, date: "Day 3 — Pop Culture",
      activities: [
        { id: "3a", time: "9:00 AM", period: "Morning", name: "Akihabara", description: "Anime, gaming, and electronics.", icon: "Zap", lat: 35.7023, lng: 139.7745 },
        { id: "3b", time: "1:00 PM", period: "Afternoon", name: "Nakano Broadway", description: "Hidden gem for vintage anime merch.", icon: "Store", lat: 35.7068, lng: 139.6648 },
        { id: "3c", time: "7:00 PM", period: "Evening", name: "Robot Restaurant", description: "Wild neon robot show in Shinjuku.", icon: "Bot", lat: 35.6940, lng: 139.7010 },
      ],
    },
    {
      day: 4, date: "Day 4 — Food Tour",
      activities: [
        { id: "4a", time: "7:00 AM", period: "Morning", name: "Tsukiji Market", description: "Freshest sushi breakfast in the world.", icon: "UtensilsCrossed", lat: 35.6654, lng: 139.7707 },
        { id: "4b", time: "12:00 PM", period: "Afternoon", name: "Ramen Street (Tokyo Station)", description: "Sample ramen from Japan's top shops.", icon: "Soup", lat: 35.6812, lng: 139.7671 },
        { id: "4c", time: "6:30 PM", period: "Evening", name: "Yakitori Alley (Yurakucho)", description: "Grilled skewers under the train tracks.", icon: "Flame", lat: 35.6748, lng: 139.7630 },
      ],
    },
    {
      day: 5, date: "Day 5 — Art & Views",
      activities: [
        { id: "5a", time: "9:00 AM", period: "Morning", name: "TeamLab Borderless", description: "Immersive digital art museum.", icon: "Palette", lat: 35.6267, lng: 139.7840 },
        { id: "5b", time: "2:00 PM", period: "Afternoon", name: "Odaiba Seaside", description: "Waterfront shopping and attractions.", icon: "Waves", lat: 35.6308, lng: 139.7753 },
        { id: "5c", time: "7:00 PM", period: "Evening", name: "Tokyo Tower Night", description: "Panoramic illuminated city views.", icon: "Building", lat: 35.6586, lng: 139.7454 },
      ],
    },
    {
      day: 6, date: "Day 6 — Fashion & Nightlife",
      activities: [
        { id: "6a", time: "8:00 AM", period: "Morning", name: "Meiji Shrine", description: "Tranquil start among ancient trees.", icon: "TreePine", lat: 35.6764, lng: 139.6993 },
        { id: "6b", time: "12:00 PM", period: "Afternoon", name: "Harajuku & Omotesando", description: "Fashion-forward streets and designer shops.", icon: "ShoppingBag", lat: 35.6702, lng: 139.7026 },
        { id: "6c", time: "6:00 PM", period: "Evening", name: "Shibuya Crossing & Nightlife", description: "Iconic crossing and vibrant night scene.", icon: "Users", lat: 35.6595, lng: 139.7004 },
      ],
    },
    {
      day: 7, date: "Day 7 — Farewell",
      activities: [
        { id: "7a", time: "8:00 AM", period: "Morning", name: "Shinjuku Gyoen", description: "Final peaceful garden walk.", icon: "Flower2", lat: 35.6852, lng: 139.7100 },
        { id: "7b", time: "12:00 PM", period: "Afternoon", name: "Souvenir Shopping (Ginza)", description: "Last-minute gifts and souvenirs.", icon: "Gift", lat: 35.6717, lng: 139.7650 },
        { id: "7c", time: "4:00 PM", period: "Evening", name: "Departure to Airport", description: "Head to Narita/Haneda for your flight home.", icon: "Plane", lat: 35.7720, lng: 140.3929 },
      ],
    },
  ],
};

export const flights: Flight[] = [
  { id: "f1", airline: "ANA", departure: "DEL", arrival: "NRT", departureTime: "23:45", arrivalTime: "11:20+1", duration: "8h 35m", price: 42500, stops: "Non-stop" },
  { id: "f2", airline: "Japan Airlines", departure: "DEL", arrival: "HND", departureTime: "01:15", arrivalTime: "13:05", duration: "8h 50m", price: 45200, stops: "Non-stop" },
  { id: "f3", airline: "Air India", departure: "DEL", arrival: "NRT", departureTime: "18:30", arrivalTime: "06:15+1", duration: "8h 45m", price: 38900, stops: "Non-stop" },
  { id: "f4", airline: "Singapore Airlines", departure: "DEL", arrival: "NRT", departureTime: "22:00", arrivalTime: "14:30+1", duration: "12h 30m", price: 36800, stops: "1 stop (SIN)" },
  { id: "f5", airline: "Cathay Pacific", departure: "DEL", arrival: "NRT", departureTime: "20:15", arrivalTime: "13:45+1", duration: "13h 30m", price: 34500, stops: "1 stop (HKG)" },
];

export const hotels: Hotel[] = [
  { id: "h1", name: "Park Hyatt Tokyo", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop", stars: 5, pricePerNight: 28500, location: "Shinjuku", rating: 9.4 },
  { id: "h2", name: "Shinjuku Granbell Hotel", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop", stars: 4, pricePerNight: 8900, location: "Shinjuku", rating: 8.7 },
  { id: "h3", name: "The Gate Hotel Asakusa", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop", stars: 4, pricePerNight: 12400, location: "Asakusa", rating: 9.1 },
  { id: "h4", name: "Cerulean Tower Tokyu", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop", stars: 5, pricePerNight: 22000, location: "Shibuya", rating: 9.0 },
  { id: "h5", name: "Dormy Inn Akihabara", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=300&fit=crop", stars: 3, pricePerNight: 6200, location: "Akihabara", rating: 8.5 },
];
