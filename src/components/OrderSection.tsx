import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin, ArrowRight, Mail } from "lucide-react";

const OrderSection = () => {
  const deliveryOptions = [
    {
      title: "Livrare",
      icon: <Phone className="w-8 h-8" />,
      description: "Comandă direct la tine acasă",
      action: "Sună acum",
      phone: "0742 978 948",
      email: "buffalosmashburgers@gmail.com",
      highlight: true
    },
    {
      title: "Program",
      icon: <Clock className="w-8 h-8" />,
      description: "Marți - Duminică",
      details: "12:00 - 22:00",
      action: "Vezi meniul"
    },
    {
      title: "Locație",
      icon: <MapPin className="w-8 h-8" />,
      description: "Strada Cireșoaia 1A",
      details: "Onești",
      action: "Vezi pe hartă",
      mapUrl: "https://maps.google.com/?q=Strada+Cireșoaia+1A,+Onești"
    }
  ];

  return (
    <section id="order" className="py-20 bg-buffalo-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comandă <span className="text-buffalo-yellow">acum</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Alege metoda preferată de comandă și bucură-te de cei mai buni burgeri din oraș
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {deliveryOptions.map((option, index) => (
            <div 
              key={option.title}
              className={`
                relative group overflow-hidden rounded-2xl 
                ${option.highlight 
                  ? 'bg-buffalo-yellow text-buffalo-black' 
                  : 'bg-white/5 text-white hover:bg-white/10'
                }
                transition-all duration-300 p-8
              `}
            >
              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6">
                  {React.cloneElement(option.icon, { 
                    className: `w-12 h-12 ${option.highlight ? 'text-buffalo-black' : 'text-buffalo-yellow'}`
                  })}
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                <p className={`text-lg mb-2 ${option.highlight ? 'text-buffalo-black/80' : 'text-gray-300'}`}>
                  {option.description}
                </p>
                
                {option.details && (
                  <p className={`text-lg font-medium ${option.highlight ? 'text-buffalo-black/90' : 'text-gray-300'}`}>
                    {option.details}
                  </p>
                )}

                {option.phone && (
                  <div className="space-y-2 my-4">
                    <p className="text-2xl font-bold">
                      {option.phone}
                    </p>
                    <div className="flex items-center gap-2 text-buffalo-black/80">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${option.email}`} className="text-sm hover:underline">
                        {option.email}
                      </a>
                    </div>
                  </div>
                )}

                <div className="mt-auto">
                  <Button
                    asChild
                    className={`
                      group/button relative overflow-hidden
                      ${option.highlight 
                        ? 'bg-buffalo-black text-buffalo-yellow hover:bg-buffalo-black/80' 
                        : 'bg-buffalo-yellow text-buffalo-black hover:bg-yellow-400'
                      }
                      w-full text-lg font-bold py-6 rounded-xl
                    `}
                  >
                    <a 
                      href={
                        option.title === "Livrare" 
                          ? `tel:${option.phone?.replace(/\s/g, '')}` 
                          : option.title === "Locație" 
                            ? option.mapUrl 
                            : "#menu"
                      }
                      target={option.title === "Locație" ? "_blank" : undefined}
                      rel={option.title === "Locație" ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between"
                    >
                      {option.action}
                      <ArrowRight className="w-5 h-5 transform group-hover/button:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
