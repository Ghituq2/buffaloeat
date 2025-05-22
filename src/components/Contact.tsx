
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-buffalo-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-buffalo-black mb-4">
            Contactează-<span className="text-buffalo-yellow">ne</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Suntem bucuroși să te ajutăm cu orice întrebare sau comandă
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-buffalo-black">Informații de contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-buffalo-yellow p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-buffalo-black" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-buffalo-black">Adresa</h4>
                  <p className="text-gray-600">Strada Cireșoaia 1A, Onești, Județul Bacău</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-buffalo-yellow p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-buffalo-black" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-buffalo-black">Telefon</h4>
                  <p className="text-gray-600">
                    <a href="tel:0722123456" className="hover:text-buffalo-yellow transition-colors">
                      0722 123 456
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-buffalo-yellow p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-buffalo-black" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-buffalo-black">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:contact@buffaloeat.ro" className="hover:text-buffalo-yellow transition-colors">
                      contact@buffaloeat.ro
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-buffalo-yellow p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-buffalo-black" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-buffalo-black">Program</h4>
                  <p className="text-gray-600">Luni - Vineri: 11:00 - 22:00</p>
                  <p className="text-gray-600">Sâmbătă - Duminică: 12:00 - 23:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-96 md:h-full rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2765.353689310188!2d26.7482807!3d46.2536706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b5905f32cbd569%3A0xffae25814254f06b!2sStrada%20Cire%C8%99oaia%201A%2C%20One%C8%99ti!5e0!3m2!1sro!2sro!4v1716325342884!5m2!1sro!2sro" 
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
