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
    { name: "ACASĂ", href: "#" },
    { name: "DESPRE", href: "#about" },
    { name: "LOCAȚIE", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-[#191919] shadow-lg" 
          : "py-4 bg-[#191919]"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img 
            src="/images/logo.png" 
            alt="Buffalo Eat Logo" 
            className="h-16 md:h-20" 
          />
          <div className="hidden sm:block">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-none tracking-tight">
              <span className="text-buffalo-yellow">BUFFALO</span>
              <br />
              <span className="relative inline-block">
                EAT
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-buffalo-yellow"></span>
              </span>
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-white font-bold hover:text-buffalo-yellow transition-colors group tracking-wider text-base"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-buffalo-yellow transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <Button
            asChild
            className="bg-buffalo-yellow text-buffalo-black font-bold hover:bg-yellow-400 transition-colors relative overflow-hidden group tracking-wider text-base px-5 py-2.5"
          >
            <a href="#order" className="relative z-10">
              <span className="relative z-10">COMANDĂ ACUM</span>
              <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-buffalo-yellow"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={22} />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#191919] py-3 px-4 shadow-lg">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white font-bold hover:text-buffalo-yellow transition-colors relative group text-base tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-buffalo-yellow transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button
              asChild
              className="bg-buffalo-yellow text-buffalo-black font-bold hover:bg-yellow-400 w-full group relative overflow-hidden text-base py-2.5"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#order" className="relative z-10">
                <span className="relative z-10">COMANDĂ ACUM</span>
                <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
