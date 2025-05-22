
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-buffalo-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Despre <span className="text-buffalo-yellow">Buffalo Eat</span>
            </h2>
            <p className="text-lg mb-6">
              Buffalo Eat este un concept nou de smash burgers în orașul Onești, creat cu pasiune de o echipă de tineri entuziaști care își doresc să aducă preparate de calitate pentru iubitorii de burgeri.
            </p>
            <p className="text-lg mb-6">
              Ne-am propus să oferim un produs artizanal, făcut cu ingrediente proaspete și rețete autentice, pentru a satisface cele mai pretențioase gusturi.
            </p>
            <div className="rounded-lg bg-buffalo-yellow/10 border border-buffalo-yellow/30 p-6">
              <h3 className="text-2xl font-bold mb-2 text-buffalo-yellow">Misiunea noastră</h3>
              <p className="italic text-lg">
                "Burgeri făcuți cu suflet, pentru pofticioșii adevărați!"
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-buffalo-yellow">
                <img 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" 
                  alt="Buffalo Burger" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-buffalo-yellow text-buffalo-black w-28 h-28 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <p className="font-bold text-sm">100%</p>
                  <p className="font-extrabold">HAND<br/>MADE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
