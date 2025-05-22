
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ReviewType {
  id: number;
  name: string;
  rating: number;
  content: string;
  date: string;
  source: "Google" | "Facebook";
}

const reviews: ReviewType[] = [
  {
    id: 1,
    name: "Alexandru M.",
    rating: 5,
    content: "Cei mai buni burgeri din oraș! Carnea este suculentă, ingredientele proaspete, iar sosul special este incredibil. Recomand cu încredere!",
    date: "12 mai",
    source: "Google"
  },
  {
    id: 2,
    name: "Maria D.",
    rating: 4,
    content: "Burgerii sunt delicioși, iar personalul foarte amabil. Singurul minus ar fi timpul de așteptare, dar merită până la urmă!",
    date: "3 aprilie",
    source: "Facebook"
  },
  {
    id: 3,
    name: "Cristian P.",
    rating: 5,
    content: "Buffalo Eat face cei mai buni smash burgeri din zona Onești. Am comandat prin Glovo și au ajuns calzi și perfect ambalați. Voi reveni cu siguranță!",
    date: "27 martie",
    source: "Google"
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-buffalo-black mb-4">
            Recenzii <span className="text-buffalo-yellow">Clienți</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ce spun clienții noștri despre Buffalo Eat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-bold text-buffalo-black">{review.name}</p>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span 
                        key={i} 
                        className={`text-lg ${i < review.rating ? "text-yellow-500" : "text-gray-300"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 flex-grow mb-4">{review.content}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                  <span>{review.date}</span>
                  <span className={`${review.source === "Google" ? "text-blue-500" : "text-blue-600"}`}>
                    {review.source}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <a 
            href="https://www.instagram.com/buffaloeatonesti/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-medium text-buffalo-black hover:text-buffalo-yellow transition-colors"
          >
            <svg className="h-6 w-6 text-pink-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Urmărește-ne pe @buffaloeatonesti
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
