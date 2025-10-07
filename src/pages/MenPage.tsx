import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";

const MenPage = () => {
  const { addToCart } = useCart();
  
  const products = [
    {
      id: 1,
      name: "Classic Oxford Shirt",
      price: 89.99,
      image: product1,
      category: "Shirts",
    },
    {
      id: 2,
      name: "Tailored Blazer",
      price: 249.99,
      image: product2,
      category: "Outerwear",
    },
    {
      id: 3,
      name: "Slim Fit Chinos",
      price: 79.99,
      image: product1,
      category: "Pants",
    },
    {
      id: 4,
      name: "Leather Belt",
      price: 59.99,
      image: product2,
      category: "Accessories",
    },
    {
      id: 5,
      name: "Cashmere Sweater",
      price: 159.99,
      image: product1,
      category: "Knitwear",
    },
    {
      id: 6,
      name: "Dress Shoes",
      price: 189.99,
      image: product2,
      category: "Footwear",
    },
    {
      id: 7,
      name: "Polo Shirt",
      price: 69.99,
      image: product1,
      category: "Shirts",
    },
    {
      id: 8,
      name: "Winter Coat",
      price: 299.99,
      image: product2,
      category: "Outerwear",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">Men's Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover timeless style and modern elegance in our curated men's collection
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/product/men/${product.id}`}>
                  <div className="relative overflow-hidden shadow-elegant mb-4 cursor-pointer">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-square object-cover transition-smooth group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-smooth" />
                  </div>
                </Link>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                  <Link to={`/product/men/${product.id}`}>
                    <h3 className="font-semibold hover:text-primary transition-smooth cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">${product.price}</span>
                    <Button 
                      size="sm" 
                      className="gap-2"
                      onClick={() => addToCart({ ...product, gender: "men" })}
                    >
                      <ShoppingBag className="h-4 w-4" />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenPage;
