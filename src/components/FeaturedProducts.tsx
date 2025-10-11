import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Premium Leather Jacket",
      price: "$299",
      image: product1,
      category: "Outerwear",
    },
    {
      id: 2,
      name: "Silk Blouse",
      price: "$149",
      image: product2,
      category: "Tops",
    },
    {
      id: 3,
      name: "Classic Denim",
      price: "$129",
      image: product3,
      category: "Bottoms",
    },
    {
      id: 4,
      name: "Trench Coat",
      price: "$349",
      image: product4,
      category: "Outerwear",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked pieces that define contemporary elegance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden mb-4 shadow-elegant transition-smooth group-hover:shadow-xl">
                <img
                  src={product.image}
                  alt={`${product.name} - Premium ${product.category} from LUXE Fashion`}
                  className="w-full h-auto object-cover transition-smooth group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-smooth" />
              </div>
              
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </p>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold">{product.price}</p>
                  <Button 
                    size="sm" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth group/btn"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-smooth" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
