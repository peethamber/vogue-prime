import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const WomenPage = () => {
  const products = [
    {
      id: 1,
      name: "Silk Evening Dress",
      price: 299.99,
      image: product3,
      category: "Dresses",
    },
    {
      id: 2,
      name: "Designer Handbag",
      price: 449.99,
      image: product4,
      category: "Accessories",
    },
    {
      id: 3,
      name: "Cashmere Cardigan",
      price: 179.99,
      image: product3,
      category: "Knitwear",
    },
    {
      id: 4,
      name: "High-Waist Trousers",
      price: 99.99,
      image: product4,
      category: "Pants",
    },
    {
      id: 5,
      name: "Leather Ankle Boots",
      price: 229.99,
      image: product3,
      category: "Footwear",
    },
    {
      id: 6,
      name: "Wool Blazer",
      price: 269.99,
      image: product4,
      category: "Outerwear",
    },
    {
      id: 7,
      name: "Silk Blouse",
      price: 129.99,
      image: product3,
      category: "Tops",
    },
    {
      id: 8,
      name: "Statement Necklace",
      price: 89.99,
      image: product4,
      category: "Jewelry",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">Women's Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elegance meets sophistication in our exclusive women's collection
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
                <div className="relative overflow-hidden shadow-elegant mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-smooth" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                  <h3 className="font-semibold">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">${product.price}</span>
                    <Button size="sm" className="gap-2">
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

export default WomenPage;
