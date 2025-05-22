import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-buffalo-black">
      {/* Background cu efect de parallax */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage: `
            linear-gradient(rgba(25, 25, 25, 0.4), rgba(25, 25, 25, 0.4)),
            url('/images/hero.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay pattern */}
      <div 
        className="absolute inset-0 z-1 opacity-10"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
      />

      {/* Container principal cu poziție relativă pentru scroll indicator */}
      <div className="relative min-h-screen">
        {/* Conținut principal */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Coloana text */}
              <div className="text-left slide-in">
                <div className="space-y-6">
                  <h2 className="text-buffalo-yellow font-bold text-xl md:text-2xl uppercase tracking-wider">
                    Smash Burgers & More
                  </h2>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-none tracking-tight">
                    <span className="text-buffalo-yellow">BUFFALO</span>
                    <br />
                    <span className="relative inline-block">
                      EAT
                      <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-buffalo-yellow"></span>
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-xl">
                    Burgeri făcuți cu suflet, pentru pofticioșii adevărați!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      asChild
                      className="bg-buffalo-yellow hover:bg-yellow-400 text-buffalo-black text-lg font-bold px-8 py-6 rounded-md transform hover:scale-105 transition-all"
                      size="lg"
                    >
                      <a href="#order">Comandă acum</a>
                    </Button>
                    <Button 
                      asChild
                      variant="outline"
                      className="bg-white/10 border-2 border-buffalo-yellow text-buffalo-yellow hover:bg-buffalo-yellow hover:text-buffalo-black text-lg font-medium px-8 py-6 rounded-md transform hover:scale-105 transition-all"
                      size="lg"
                    >
                      <a href="#menu">Vezi meniu</a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Coloana dreaptă cu elemente decorative */}
              <div className="hidden lg:block relative">
                <div className="relative w-full h-[600px]">
                  {/* Cercuri decorative animate */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      {/* Cercuri concentrice animate */}
                      <div className="absolute w-[500px] h-[500px] rounded-full border-2 border-buffalo-yellow/20 animate-spin-slow"></div>
                      <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-buffalo-yellow/30 animate-spin-slow-reverse"></div>
                      <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-buffalo-yellow/40"></div>
                      
                      {/* Puncte decorative */}
                      <div className="absolute top-0 left-1/2 w-4 h-4 bg-buffalo-yellow rounded-full animate-pulse"></div>
                      <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-buffalo-yellow rounded-full animate-pulse delay-300"></div>
                      <div className="absolute left-0 top-1/2 w-4 h-4 bg-buffalo-yellow rounded-full animate-pulse delay-500"></div>
                      <div className="absolute right-0 top-1/2 w-4 h-4 bg-buffalo-yellow rounded-full animate-pulse delay-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - poziționat absolut față de container */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-buffalo-yellow text-sm font-medium tracking-wider">Scroll</span>
            <svg 
              className="w-5 h-5 text-buffalo-yellow" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
