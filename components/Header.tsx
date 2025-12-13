import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import Button from './Button';
import { NavItem } from '../types';

const LOGO_URL = "../oudentallogo.PNG";

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
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
          <img 
                src={LOGO_URL} 
                alt="OU Dental Clinic Logo" 
                className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16 md:h-20'}`}
                onError={() => setImageError(true)}
              />
            {!imageError ? (
              <img 
                src={LOGO_URL} 
                alt="OU Dental Clinic Logo" 
                className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16 md:h-20'}`}
                onError={() => setImageError(true)}
              />
            ) : null}
            
            {/* Show text if image fails OR if not scrolled (standard design) */}
            {(imageError || !isScrolled) && (
              <div className={`flex flex-col ${imageError ? 'flex' : 'hidden lg:flex'}`}>
                <span className={`text-brand-maroon font-serif font-bold leading-none tracking-wide ${isScrolled ? 'text-xl' : 'text-2xl'}`}>OU DENTAL CLINIC</span>
                {!isScrolled && <span className="text-black font-script text-xl leading-none mt-1">Oral Care For You</span>}
              </div>
            )}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-brand-maroon' : 'text-gray-800 hover:text-brand-maroon'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a href="tel:+1234567890" className="flex items-center space-x-2 text-brand-gold font-bold hover:text-brand-maroon transition-colors">
              <Phone size={18} />
              <span>(555) 123-4567</span>
            </a>
            <Button variant="primary" className="ml-4 flex items-center gap-2">
              <Calendar size={16} /> Book Now
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-brand-maroon p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 transform origin-top ${
        isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col p-6 space-y-4">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-gray-800 hover:text-brand-maroon border-b border-gray-100 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button variant="primary" fullWidth className="mt-4">
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;