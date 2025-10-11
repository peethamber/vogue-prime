import { ShoppingBag, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-tight hover:text-primary transition-colors duration-300 cursor-pointer">LUXE</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#collections" className="text-sm font-medium transition-all duration-300 hover:text-accent story-link">
              Collections
            </a>
            <a href="/women" className="text-sm font-medium transition-all duration-300 hover:text-accent story-link">
              Women
            </a>
            <a href="/men" className="text-sm font-medium transition-all duration-300 hover:text-accent story-link">
              Men
            </a>
            <a href="#accessories" className="text-sm font-medium transition-all duration-300 hover:text-accent story-link">
              Accessories
            </a>
            <a href="#sale" className="text-sm font-medium transition-all duration-300 hover:text-accent story-link">
              Sale
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="transition-all duration-300 hover:text-accent hover-scale" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="transition-all duration-300 hover:text-accent hover-scale" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative transition-all duration-300 hover:text-accent hover-scale"
              onClick={() => navigate("/checkout")}
              aria-label="Shopping cart"
            >
              <ShoppingBag className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
                  {totalItems}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover-scale transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border animate-fade-in">
            <a href="/#collections" className="block text-sm font-medium transition-all duration-300 hover:text-accent hover:translate-x-2">
              Collections
            </a>
            <a href="/women" className="block text-sm font-medium transition-all duration-300 hover:text-accent hover:translate-x-2">
              Women
            </a>
            <a href="/men" className="block text-sm font-medium transition-all duration-300 hover:text-accent hover:translate-x-2">
              Men
            </a>
            <a href="#accessories" className="block text-sm font-medium transition-all duration-300 hover:text-accent hover:translate-x-2">
              Accessories
            </a>
            <a href="#sale" className="block text-sm font-medium transition-all duration-300 hover:text-accent hover:translate-x-2">
              Sale
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
