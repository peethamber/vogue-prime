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
    <section className="py-20 px-4 sm:px-6 lg:px-8" aria-label="Featured products collection">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked pieces that define contemporary elegance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.12}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <div className="relative overflow-hidden mb-4 shadow-elegant transition-all duration-500 hover:shadow-2xl rounded-lg">
                <img
                  src={product.image}
                  alt={`${product.name} - Premium ${product.category} from LUXE Fashion`}
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
              </div>
              
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider transition-colors duration-300 group-hover:text-primary">
                  {product.category}
                </p>
                <h3 className="font-semibold text-lg transition-all duration-300 group-hover:text-primary">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold transition-transform duration-300 group-hover:scale-105">{product.price}</p>
                  <Button 
                    size="sm" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover-scale group/btn"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2 transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-12" />
                    Add
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
