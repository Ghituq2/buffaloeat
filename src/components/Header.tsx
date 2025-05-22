
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Acasă", href: "#" },
    { name: "Menu", href: "#menu" },
    { name: "Despre noi", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-2 bg-buffalo-black/95 bg-blur shadow-lg" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/9d27e115-c99f-4e4f-950d-0635383c2a85.png" 
            alt="Buffalo Eat Logo" 
            className="h-12 md:h-14" 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white font-medium hover:text-buffalo-yellow transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button
            asChild
            className="bg-buffalo-yellow text-buffalo-black font-bold hover:bg-yellow-400 transition-colors"
          >
            <a href="#order">Comandă acum</a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-buffalo-yellow"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-buffalo-black py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white font-medium hover:text-buffalo-yellow transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              asChild
              className="bg-buffalo-yellow text-buffalo-black font-bold hover:bg-yellow-400 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#order">Comandă acum</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
