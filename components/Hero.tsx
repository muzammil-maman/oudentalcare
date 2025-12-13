import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
          alt="Modern Dental Clinic" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-maroon/90 to-brand-maroon/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-3xl text-white">
          <div className="flex items-center space-x-2 mb-6 animate-fade-in-up">
            <span className="bg-brand-gold/90 text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Top Rated Dental Care
            </span>
            <div className="flex text-brand-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 shadow-black drop-shadow-lg">
            Experience the <span className="text-brand-gold italic font-serif">Art</span> of <br />
            Modern Dentistry
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light max-w-xl leading-relaxed">
            OU Dental Clinic provides world-class oral care tailored just for you. 
            Gentle treatments, advanced technology, and a smile you'll love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" className="group">
              <span className="flex items-center gap-2">
                Book Your Visit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-maroon">
              View Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] text-brand-cream fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;