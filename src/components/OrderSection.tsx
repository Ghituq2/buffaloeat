
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const OrderSection = () => {
  const glovoUrl = "https://glovoapp.com/ro/ro/";

  return (
    <section id="order" className="py-20 bg-buffalo-lightBlue">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-buffalo-black mb-6">
            Comandă <span className="text-buffalo-yellow">acum</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Burgerii noștri sunt disponibili pentru livrare prin Glovo sau ridicare personală din locație.
          </p>
          
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <div className="flex flex-col items-center justify-center mb-8">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Glovo_logo.svg/1200px-Glovo_logo.svg.png" 
                alt="Glovo logo" 
                className="h-16 mb-4" 
              />
              <p className="text-gray-600 mb-6">
                Comandă ușor și rapid prin aplicația Glovo și bucură-te de burgerii noștri delicioși direct la tine acasă.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-[#ffca05] hover:bg-[#e0b000] text-black font-bold text-lg px-8 py-6"
              >
                <a href={glovoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ShoppingCart /> Comandă pe Glovo
                </a>
              </Button>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold mb-4">Sau ridică personal:</h3>
              <p className="text-gray-600 mb-2">
                Sună-ne în avans pentru a pregăti comanda ta:
              </p>
              <p className="text-xl font-bold text-buffalo-black mb-6">
                ☎️ 0722 123 456
              </p>
              <Button 
                asChild
                variant="outline"
                className="border-buffalo-yellow text-buffalo-black hover:bg-buffalo-yellow/10"
              >
                <a href="tel:0722123456" className="text-lg font-medium">
                  Sună acum
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
