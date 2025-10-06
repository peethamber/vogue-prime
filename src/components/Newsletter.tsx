import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
            <Mail className="h-8 w-8 text-accent-foreground" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold">Stay in Style</h2>
          
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, style tips, and first access to new collections
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-8">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-primary-foreground text-primary border-0 h-12"
            />
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-smooth h-12 px-8"
            >
              Subscribe
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/60 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
