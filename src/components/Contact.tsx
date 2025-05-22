import React from "react";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-buffalo-black text-white overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Hai să <span className="text-buffalo-yellow">vorbim</span>
          </h2>
          <p className="text-xl text-gray-400">
            Suntem aici să răspundem la toate întrebările tale și să primim feedback-ul tău
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact Cards */}
          <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Locație Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="bg-buffalo-yellow p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-buffalo-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Locație</h3>
                  <p className="text-gray-400 mb-4">Strada Cireșoaia 1A, Onești, Județul Bacău</p>
                  <a 
                    href="https://maps.google.com/?q=Strada+Cireșoaia+1A,+Onești" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-buffalo-yellow hover:gap-2 transition-all"
                  >
                    Vezi pe hartă <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>

            {/* Program Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-buffalo-yellow p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-buffalo-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Program</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-gray-400">Luni - Vineri</p>
                      <p className="font-medium">11:00 - 22:00</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Sâmbătă - Duminică</p>
                      <p className="font-medium">12:00 - 23:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Direct Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-buffalo-yellow p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-buffalo-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Contact Direct</h3>
                  <div className="space-y-2">
                    <a 
                      href="tel:0722123456" 
                      className="block text-gray-400 hover:text-buffalo-yellow transition-colors"
                    >
                      0722 123 456
                    </a>
                    <a 
                      href="mailto:contact@buffaloeat.ro" 
                      className="block text-gray-400 hover:text-buffalo-yellow transition-colors"
                    >
                      contact@buffaloeat.ro
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden h-[600px] shadow-2xl relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2765.353689310188!2d26.7482807!3d46.2536706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b5905f32cbd569%3A0xffae25814254f06b!2sStrada%20Cire%C8%99oaia%201A%2C%20One%C8%99ti!5e1!3m2!1sro!2sro!4v1716325342884!5m2!1sro!2sro" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
