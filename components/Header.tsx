import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import Button from './Button';
import { NavItem } from '../types';

// Using relative path to ensure compatibility across different hosting environments
const LOGO_URL = "oudentallogo.PNG";

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
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <a href="#" className="flex items-center space-x-3 group relative z-10">
            <img 
              src={LOGO_URL} 
              alt="OU Dental Clinic Logo" 
              className={`transition-all duration-500 object-contain drop-shadow-md ${isScrolled ? 'h-10 md:h-12' : 'h-16 md:h-20'}`}
              loading="eager"
              style={{ display: 'block' }}
              onError={(e) => {
                console.error("Logo failed to load at path:", LOGO_URL);
                // Fallback styling if image truly doesn't exist
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            
            <div className={`flex flex-col transition-colors duration-500 ${!isScrolled ? 'text-white' : 'text-brand-maroon'}`}>
              <span className={`font-serif font-bold leading-none tracking-wider ${
                isScrolled ? 'text-xl' : 'text-2xl drop-shadow-lg'
              }`}>
                OU DENTAL CLINIC
              </span>
              {!isScrolled && (
                <span className="text-brand-goldLight font-script text-xl leading-none mt-1 drop-shadow-md">
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
                    isScrolled ? 'text-gray-700 hover:text-brand-maroon' : 'text-white/90 hover:text-brand-gold'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-brand-maroon' : 'bg-brand-gold'
                  }`}></span>
                </a>
              ))}
            </div>

            <div className="h-6 w-px bg-current opacity-20 mx-2"></div>

            <a 
              href="tel:+918008337083" 
              className={`flex items-center space-x-2 font-bold transition-colors ${
                isScrolled ? 'text-brand-maroon hover:text-brand-gold' : 'text-brand-gold hover:text-white'
              }`}
            >
              <Phone size={18} />
              <span className="text-sm tracking-tighter">+91 8008337083</span>
            </a>

            <Button 
              onClick={handleBookNow} 
              variant={isScrolled ? "primary" : "secondary"} 
              className="ml-4 flex items-center gap-2 px-6"
            >
              <Calendar size={16} /> Book Now
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-full transition-colors ${
              isScrolled ? 'text-brand-maroon bg-gray-100' : 'text-white bg-white/10'
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
        <div className="flex flex-col p-8 pt-24 space-y-5">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-xl font-serif font-bold text-gray-800 hover:text-brand-maroon border-b border-gray-50 pb-3 flex justify-between items-center group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
              <span className="w-2 h-2 rounded-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
          ))}
          <div className="pt-6 space-y-4">
            <a href="tel:+918008337083" className="flex items-center justify-center space-x-3 text-brand-maroon font-bold text-lg p-4 bg-brand-cream rounded-2xl">
              <Phone size={20} />
              <span>+91 8008337083</span>
            </a>
            <Button onClick={handleBookNow} variant="primary" fullWidth className="py-4 shadow-xl">
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;