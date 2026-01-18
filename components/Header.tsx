import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import Button from './Button';
import { NavItem } from '../types';

// The logo is a static asset, we refer to it by its relative path from the root.
// The user specified the filename is oudentallogo.PNG (case-sensitive).
const LOGO_URL = "oudentallogo.png";

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Social', href: '#instagram' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookNow = () => {
    setIsMobileMenuOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/98 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <a href="#" className="flex items-center space-x-3 group relative z-10">
            <img 
              src={LOGO_URL} 
              alt="OU Dental Clinic" 
              className={`transition-all duration-500 object-contain ${isScrolled ? 'h-10 md:h-12' : 'h-16 md:h-20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]'}`}
              loading="eager"
              onError={(e) => {
                console.error("Logo failed to load. Ensure 'oudentallogo.PNG' is in the project root.");
                (e.target as HTMLImageElement).classList.add('hidden');
              }}
            />
            
            <div className={`flex flex-col transition-colors duration-500 ${!isScrolled ? 'text-white' : 'text-brand-maroon'}`}>
              <span className={`font-serif font-bold leading-none tracking-wider ${
                isScrolled ? 'text-xl' : 'text-2xl text-shadow'
              }`}>
                OU DENTAL CLINIC
              </span>
              {!isScrolled && (
                <span className="text-brand-goldLight font-script text-xl leading-none mt-1 text-shadow">
                  Oral Care For You
                </span>
              )}
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative group py-2 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-brand-maroon' 
                      : 'text-white hover:text-brand-gold drop-shadow-md'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-brand-maroon' : 'bg-brand-gold shadow-[0_0_8px_rgba(200,163,88,0.8)]'
                  }`}></span>
                </a>
              ))}
            </div>

            <div className={`h-6 w-px mx-2 ${isScrolled ? 'bg-gray-200' : 'bg-white/20'}`}></div>

            <a 
              href="tel:+918008337083" 
              className={`flex items-center space-x-2 font-bold transition-colors ${
                isScrolled ? 'text-brand-maroon hover:text-brand-gold' : 'text-white hover:text-brand-gold drop-shadow-md'
              }`}
            >
              <Phone size={18} />
              <span className="text-sm tracking-tighter">+91 8008337083</span>
            </a>

            <Button 
              onClick={handleBookNow} 
              variant={isScrolled ? "primary" : "secondary"} 
              className={`ml-4 flex items-center gap-2 px-6 shadow-xl ${!isScrolled ? 'border border-white/20' : ''}`}
            >
              <Calendar size={16} /> Book Now
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-full transition-colors ${
              isScrolled ? 'text-brand-maroon bg-gray-100' : 'text-white bg-black/20 backdrop-blur-sm'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-x-0 top-0 bg-white shadow-2xl transition-all duration-500 transform ease-in-out z-[-1] ${
        isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col p-8 pt-24 space-y-5 h-screen">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-2xl font-serif font-bold text-gray-800 hover:text-brand-maroon border-b border-gray-50 pb-4 flex justify-between items-center group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
              <span className="w-3 h-3 rounded-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
          ))}
          <div className="pt-8 space-y-4">
            <a href="tel:+918008337083" className="flex items-center justify-center space-x-3 text-brand-maroon font-bold text-lg p-5 bg-brand-cream rounded-2xl border border-brand-gold/10">
              <Phone size={22} />
              <span>+91 8008337083</span>
            </a>
            <Button onClick={handleBookNow} variant="primary" fullWidth className="py-5 text-lg shadow-2xl">
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;