import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground" aria-label="Newsletter signup">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4 animate-scale-in">
            <Mail className="h-8 w-8 text-accent-foreground animate-pulse" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>Stay in Style</h2>
          
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            Subscribe to our newsletter for exclusive offers, style tips, and first access to new collections
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-8 animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-primary-foreground text-primary border-0 h-12 transition-transform duration-300 focus:scale-105"
              aria-label="Email address for newsletter"
            />
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 h-12 px-8 hover-scale"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/60 mt-4 animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
