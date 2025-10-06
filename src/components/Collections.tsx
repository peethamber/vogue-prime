import womenCollection from "@/assets/women-collection.jpg";
import menCollection from "@/assets/men-collection.jpg";
import accessoriesCollection from "@/assets/accessories-collection.jpg";

const Collections = () => {
  const collections = [
    {
      title: "Women's Collection",
      image: womenCollection,
      link: "#women",
    },
    {
      title: "Men's Collection",
      image: menCollection,
      link: "#men",
    },
    {
      title: "Accessories",
      image: accessoriesCollection,
      link: "#accessories",
    },
  ];

  return (
    <section id="collections" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
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
              className="group relative overflow-hidden shadow-elegant transition-smooth hover:shadow-xl animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-primary-foreground">
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
