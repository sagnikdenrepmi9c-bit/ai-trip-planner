import { Percent, Headphones, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <span className="text-xl font-display font-bold text-primary">TravelApp</span>
        <div className="flex items-center gap-1 md:gap-3">
          <button className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
            <Percent className="w-4 h-4" />
            Offers
          </button>
          <button className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
            <Headphones className="w-4 h-4" />
            Customer Service
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Log in / Sign up</span>
            <span className="sm:hidden">Log in</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
