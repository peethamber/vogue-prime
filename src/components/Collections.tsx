import womenCollection from "@/assets/women-collection.jpg";
import menCollection from "@/assets/men-collection.jpg";
import accessoriesCollection from "@/assets/accessories-collection.jpg";

const Collections = () => {
  const collections = [
    {
      title: "Women's Collection",
      image: womenCollection,
      link: "/women",
      alt: "Luxury women's fashion collection featuring premium designer clothing and accessories",
    },
    {
      title: "Men's Collection",
      image: menCollection,
      link: "/men",
      alt: "Premium men's fashion collection with contemporary designer clothing",
    },
    {
      title: "Accessories",
      image: accessoriesCollection,
      link: "#accessories",
      alt: "Designer accessories collection including bags, jewelry, and fashion accessories",
    },
  ];

  return (
    <section id="collections" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary" aria-label="Shop by collection categories">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Shop by Collection</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated selections for every style and occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <a
              key={index}
              href={collection.link}
              className="group relative overflow-hidden shadow-elegant transition-all duration-500 hover:shadow-2xl animate-scale-in hover-scale rounded-lg"
              style={{ animationDelay: `${index * 0.15}s`, opacity: 0, animationFillMode: 'forwards' }}
              aria-label={`Browse ${collection.title}`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex items-end p-6 transition-all duration-500 group-hover:from-primary">
                <h3 className="text-2xl font-bold text-primary-foreground transform transition-all duration-500 group-hover:translate-y-[-4px]">
                  {collection.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
