import { ShoppingBag, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-tight">LUXE</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#collections" className="text-sm font-medium transition-smooth hover:text-accent">
              Collections
            </a>
            <a href="/women" className="text-sm font-medium transition-smooth hover:text-accent">
              Women
            </a>
            <a href="/men" className="text-sm font-medium transition-smooth hover:text-accent">
              Men
            </a>
            <a href="#accessories" className="text-sm font-medium transition-smooth hover:text-accent">
              Accessories
            </a>
            <a href="#sale" className="text-sm font-medium transition-smooth hover:text-accent">
              Sale
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="transition-smooth hover:text-accent">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="transition-smooth hover:text-accent">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="transition-smooth hover:text-accent">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border animate-fade-in">
            <a href="/#collections" className="block text-sm font-medium transition-smooth hover:text-accent">
              Collections
            </a>
            <a href="/women" className="block text-sm font-medium transition-smooth hover:text-accent">
              Women
            </a>
            <a href="/men" className="block text-sm font-medium transition-smooth hover:text-accent">
              Men
            </a>
            <a href="#accessories" className="block text-sm font-medium transition-smooth hover:text-accent">
              Accessories
            </a>
            <a href="#sale" className="block text-sm font-medium transition-smooth hover:text-accent">
              Sale
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
