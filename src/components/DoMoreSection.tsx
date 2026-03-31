import { Radar, CreditCard, Globe, Users, Map, Bell } from "lucide-react";

const items = [
  { icon: <Radar className="w-6 h-6 text-secondary" />, label: "Flight Tracker" },
  { icon: <CreditCard className="w-6 h-6 text-secondary" />, label: "Credit Card" },
  { icon: <Globe className="w-6 h-6 text-secondary" />, label: "Book Visa" },
  { icon: <Users className="w-6 h-6 text-secondary" />, label: "Group Booking" },
  { icon: <Map className="w-6 h-6 text-secondary" />, label: "Plan" },
  { icon: <Bell className="w-6 h-6 text-secondary" />, label: "Fare Alerts" },
];

const DoMoreSection = () => (
  <section>
    <h2 className="font-display text-xl font-bold text-foreground mb-4">Do More With Us</h2>
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
      {items.map((item) => (
        <button key={item.label} className="card-travel flex flex-col items-center justify-center gap-2 p-4 hover:border-secondary/30 cursor-pointer">
          {item.icon}
          <span className="text-xs font-semibold text-foreground text-center">{item.label}</span>
        </button>
      ))}
    </div>
  </section>
);

export default DoMoreSection;
