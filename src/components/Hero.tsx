
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      className="min-h-screen bg-buffalo-black flex items-center justify-center relative pt-16 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="slide-in">
          <img 
            src="/lovable-uploads/9d27e115-c99f-4e4f-950d-0635383c2a85.png" 
            alt="Buffalo Eat Logo"
            className="mx-auto w-48 md:w-64 mb-8 animate-float" 
          />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            <span className="text-buffalo-yellow">SMASH</span> BURGERS
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Burgeri făcuți cu suflet, pentru pofticioșii adevărați!
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button 
              asChild
              className="bg-buffalo-yellow hover:bg-yellow-400 text-buffalo-black text-lg font-bold px-8 py-6 rounded-md"
              size="lg"
            >
              <a href="#order">Comandă acum</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg font-medium px-8 py-6 rounded-md"
              size="lg"
            >
              <a href="#menu">Vezi meniu</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
