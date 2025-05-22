import React from "react";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-buffalo-black text-white overflow-hidden">
      {/* Main footer content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img 
                src="/images/logo.png" 
                alt="Buffalo Eat Logo" 
                className="h-16" 
              />
              <div>
                <h3 className="text-2xl font-extrabold leading-none">
                  <span className="text-buffalo-yellow">BUFFALO</span>
                  <br />
                  <span className="relative inline-block">
                    EAT
                    <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-buffalo-yellow"></span>
                  </span>
                </h3>
              </div>
            </div>
            <p className="text-gray-400">
              Burgeri făcuți cu suflet, pentru pofticioșii adevărați!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-buffalo-yellow mb-6">Link-uri Rapide</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-buffalo-yellow transition-colors">
                  Acasă
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-buffalo-yellow transition-colors">
                  Produse
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-buffalo-yellow transition-colors">
                  Despre Noi
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-buffalo-yellow transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-buffalo-yellow mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-buffalo-yellow" />
                <span className="text-gray-400">Strada Cireșoaia 1A, Onești</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-buffalo-yellow" />
                <a href="tel:0722123456" className="text-gray-400 hover:text-buffalo-yellow transition-colors">
                  0722 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-buffalo-yellow" />
                <a href="mailto:contact@buffaloeat.ro" className="text-gray-400 hover:text-buffalo-yellow transition-colors">
                  contact@buffaloeat.ro
                </a>
              </li>
            </ul>
          </div>

          {/* Program */}
          <div>
            <h4 className="text-lg font-bold text-buffalo-yellow mb-6">Program</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-buffalo-yellow" />
                <div>
                  <p className="text-gray-400">Luni - Vineri</p>
                  <p className="font-medium text-white">11:00 - 22:00</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-buffalo-yellow" />
                <div>
                  <p className="text-gray-400">Sâmbătă - Duminică</p>
                  <p className="font-medium text-white">12:00 - 23:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Buffalo Eat - Smash Burgers. Toate drepturile rezervate.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-buffalo-yellow transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/buffaloeatonesti/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-buffalo-yellow transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
