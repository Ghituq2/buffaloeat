
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Buffalo Burger",
    description: "Smash burger clasic cu carne de vită, brânză cheddar, ceapă, bacon și sos special",
    image: "/lovable-uploads/693d8711-0720-48df-929c-cfe5966c8517.png",
    price: "29 lei"
  },
  {
    id: 2,
    name: "Cheese Smash",
    description: "Dublu smash burger cu brânză topită, ceapă caramelizată și sos Buffalo",
    image: "/lovable-uploads/0dc0bfd3-e96e-4125-9e3b-f44884425e59.png",
    price: "35 lei"
  },
  {
    id: 3,
    name: "Buffalo Special",
    description: "Burger premium cu carne de vită, brânză cheddar, bacon crispy și sos BBQ",
    image: "/lovable-uploads/40fde683-7c2a-4707-8eb9-cfe490d4b796.png",
    price: "39 lei"
  },
  {
    id: 4,
    name: "Buffalo Burger Deluxe",
    description: "Burger deluxe cu dublu strat de carne, brânză, ceapă roșie, salată și sos aioli",
    image: "/lovable-uploads/dd893fd3-bed1-44f0-97df-e8f09b59cefe.png",
    price: "42 lei"
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-buffalo-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-buffalo-black mb-4">
            Meniul <span className="text-buffalo-yellow">nostru</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Burgeri făcuți cu pasiune, din ingrediente proaspete și de calitate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white rounded-xl">
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-2/5 h-60 md:h-auto relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="w-full md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-buffalo-black mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-xl text-buffalo-yellow">{item.price}</span>
                    <button className="text-buffalo-black font-medium hover:underline">
                      Adaugă în coș
                    </button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
