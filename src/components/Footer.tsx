import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: "Women's Collection", href: "#women" },
      { name: "Men's Collection", href: "#men" },
      { name: "Accessories", href: "#accessories" },
      { name: "Sale", href: "#sale" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Sustainability", href: "#sustainability" },
      { name: "Press", href: "#press" },
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "Shipping Info", href: "#shipping" },
      { name: "Returns", href: "#returns" },
      { name: "Size Guide", href: "#size-guide" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Mail, href: "#email", label: "Email" },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LUXE</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Premium fashion for the modern individual. Elevate your style with our curated collections.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-smooth hover:bg-accent hover:text-accent-foreground"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-smooth hover:text-accent"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-smooth hover:text-accent"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-smooth hover:text-accent"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 LUXE Fashion. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#privacy" className="text-sm text-muted-foreground transition-smooth hover:text-accent">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-muted-foreground transition-smooth hover:text-accent">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
