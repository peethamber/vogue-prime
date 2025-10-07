import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const ProductDetail = () => {
  const { gender, id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const menProducts = [
    { id: 1, name: "Classic Oxford Shirt", price: 89.99, image: product1, category: "Shirts", description: "Premium cotton oxford shirt with a classic fit. Perfect for both casual and formal occasions." },
    { id: 2, name: "Tailored Blazer", price: 249.99, image: product2, category: "Outerwear", description: "Sophisticated tailored blazer crafted from fine wool blend. A wardrobe essential." },
    { id: 3, name: "Slim Fit Chinos", price: 79.99, image: product1, category: "Pants", description: "Modern slim fit chinos in premium stretch cotton for all-day comfort." },
    { id: 4, name: "Leather Belt", price: 59.99, image: product2, category: "Accessories", description: "Genuine leather belt with classic buckle. Completes any outfit." },
    { id: 5, name: "Cashmere Sweater", price: 159.99, image: product1, category: "Knitwear", description: "Luxurious cashmere sweater for ultimate warmth and style." },
    { id: 6, name: "Dress Shoes", price: 189.99, image: product2, category: "Footwear", description: "Italian leather dress shoes with superior craftsmanship." },
    { id: 7, name: "Polo Shirt", price: 69.99, image: product1, category: "Shirts", description: "Classic polo shirt in premium pique cotton." },
    { id: 8, name: "Winter Coat", price: 299.99, image: product2, category: "Outerwear", description: "Warm winter coat with modern silhouette." },
  ];

  const womenProducts = [
    { id: 1, name: "Silk Evening Dress", price: 299.99, image: product3, category: "Dresses", description: "Elegant silk evening dress perfect for special occasions. Features a flattering silhouette." },
    { id: 2, name: "Designer Handbag", price: 449.99, image: product4, category: "Accessories", description: "Luxury designer handbag crafted from premium leather with signature detailing." },
    { id: 3, name: "Cashmere Cardigan", price: 179.99, image: product3, category: "Knitwear", description: "Soft cashmere cardigan for effortless elegance." },
    { id: 4, name: "High-Waist Trousers", price: 99.99, image: product4, category: "Pants", description: "Tailored high-waist trousers with modern fit." },
    { id: 5, name: "Leather Ankle Boots", price: 229.99, image: product3, category: "Footwear", description: "Premium leather ankle boots with versatile style." },
    { id: 6, name: "Wool Blazer", price: 269.99, image: product4, category: "Outerwear", description: "Sophisticated wool blazer for professional elegance." },
    { id: 7, name: "Silk Blouse", price: 129.99, image: product3, category: "Tops", description: "Luxurious silk blouse with timeless appeal." },
    { id: 8, name: "Statement Necklace", price: 89.99, image: product4, category: "Jewelry", description: "Bold statement necklace to elevate any outfit." },
  ];

  const products = gender === "men" ? menProducts : womenProducts;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      gender: gender as "men" | "women",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to={`/${gender}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-smooth"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {gender === "men" ? "Men's" : "Women's"} Collection
          </Link>

          <div className="grid md:grid-cols-2 gap-12 animate-fade-in">
            <div className="relative overflow-hidden shadow-elegant">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                  {product.category}
                </p>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-3xl font-bold text-primary mb-6">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full gap-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate("/checkout")}
                >
                  Buy Now
                </Button>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Product Details</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Premium quality materials</li>
                    <li>• Available in multiple sizes</li>
                    <li>• Free shipping on orders over $100</li>
                    <li>• 30-day return policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
