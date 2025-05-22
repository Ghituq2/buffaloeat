import React from "react";
import { Star, Quote } from "lucide-react";

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  image: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Alexandru Popescu",
    date: "15 martie 2024",
    rating: 5,
    comment: "Cel mai bun burger pe care l-am mâncat vreodată în Onești! Carnea este suculentă, iar sosurile sunt făcute în casă. Recomand cu încredere!",
    image: "/images/placeholder.png"
  },
  {
    id: 2,
    name: "Maria Ionescu",
    date: "10 martie 2024",
    rating: 5,
    comment: "Am comandat Double Truffle și a fost o experiență culinară deosebită. Porțiile sunt generoase, iar personalul este foarte amabil.",
    image: "/images/placeholder.png"
  },
  {
    id: 3,
    name: "Andrei Dumitrescu",
    date: "5 martie 2024",
    rating: 5,
    comment: "Buffalo Eat este acum locul meu preferat pentru burgeri! Calitatea și gustul sunt constante, iar prețurile sunt corecte pentru ce oferă.",
    image: "/images/placeholder.png"
  }
];

const Reviews = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-buffalo-black">
            Ce spun <span className="text-buffalo-yellow">clienții</span> noștri
          </h2>
          <p className="text-xl text-gray-600">
            Părerile clienților noștri sunt cea mai bună recomandare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-buffalo-yellow rounded-full p-1">
                    <Quote className="w-4 h-4 text-buffalo-black" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-buffalo-black">{review.name}</h3>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star 
                    key={i}
                    className="w-5 h-5 fill-buffalo-yellow text-buffalo-yellow"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed group-hover:text-buffalo-black transition-colors duration-300">
                {review.comment}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://g.page/r/buffalo-eat-reviews" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-buffalo-yellow text-buffalo-black px-8 py-4 rounded-xl font-bold hover:gap-4 transition-all duration-300 hover:shadow-lg"
          >
            Vezi toate recenziile
            <Star className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
