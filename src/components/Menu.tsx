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
    name: "Big Buffalo Burger",
    description: "Burgerul nostru iconic, în varianta XL cu carne de vită premium, brânză cheddar, legume proaspete și sosul nostru special Buffalo",
    image: "/images/placeholder.png",
    price: "55 lei"
  },
  {
    id: 2,
    name: "Double Truffle Gold Burger",
    description: "Experiență culinară de lux cu dublu strat de carne de vită, sos special cu trufe și brânză premium topită",
    image: "/images/placeholder.png",
    price: "45 lei"
  },
  {
    id: 3,
    name: "El Diablo Burger (Double)",
    description: "Pentru iubitorii de senzații tari: dublu strat de carne, jalapenos, sos picant special și brânză cheddar topită",
    image: "/images/placeholder.png",
    price: "45 lei"
  },
  {
    id: 4,
    name: "Big Cheeseburger",
    description: "Paradisul iubitorilor de brânză: burger generos cu carne de vită, mix special de brânzeturi și sos secret",
    image: "/images/placeholder.png",
    price: "55 lei"
  },
  {
    id: 5,
    name: "Double Fire Roasted Burger",
    description: "Savoare intensă cu carne dublă la grătar, legume coapte la foc și sos special de casă",
    image: "/images/placeholder.png",
    price: "45 lei"
  },
  {
    id: 6,
    name: "14 Aripioare Asian Zinc",
    description: "Aripioare crocante cu un twist asiatic special, servite cu sos unic Asian Zinc",
    image: "/images/placeholder.png",
    price: "48 lei"
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-buffalo-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-buffalo-black mb-4">
            Produsele noastre <span className="text-buffalo-yellow">preferate</span>
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
                    <span className="font-bold text-xl text-buffalo-black">{item.price}</span>
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
