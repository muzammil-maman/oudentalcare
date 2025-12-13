import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Patient since 2019",
    content: "I used to be terrified of the dentist, but Dr. Ou and the team completely changed that. Their gentle approach and calming atmosphere make every visit a breeze. My smile has never looked better!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Invisalign Patient",
    content: "The results from my Invisalign treatment are incredible. The process was explained clearly, and the staff was always supportive. Highly recommend OU Dental for anyone looking to perfect their smile.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Mother of two",
    content: "My kids actually look forward to going to the dentist now! The pediatric team is fantastic at making it fun and educational. It's a relief to know their oral health is in such good hands.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="py-24 bg-brand-maroon relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Patient Stories</h2>
          <p className="text-brand-gold text-lg">Real smiles, real experiences.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-brand-gold p-4 rounded-full shadow-lg">
              <Quote className="text-white w-8 h-8 fill-current" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 mt-6">
              {/* Image */}
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <img 
                  src={TESTIMONIALS[currentIndex].image} 
                  alt={TESTIMONIALS[currentIndex].name} 
                  className="w-full h-full object-cover rounded-full border-4 border-brand-cream shadow-md"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-3">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-lg md:text-xl italic mb-6 leading-relaxed">
                  "{TESTIMONIALS[currentIndex].content}"
                </p>
                <div>
                  <h4 className="font-serif text-xl font-bold text-brand-maroon">{TESTIMONIALS[currentIndex].name}</h4>
                  <p className="text-gray-400 text-sm">{TESTIMONIALS[currentIndex].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8 md:absolute md:bottom-12 md:right-12 md:mt-0">
              <button 
                onClick={prev}
                className="p-2 rounded-full border border-gray-200 hover:bg-brand-maroon hover:text-white hover:border-brand-maroon transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={next}
                className="p-2 rounded-full border border-gray-200 hover:bg-brand-maroon hover:text-white hover:border-brand-maroon transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;