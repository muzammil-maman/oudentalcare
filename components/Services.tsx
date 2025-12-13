import React from 'react';
import { Smile, Zap, Crown, Stethoscope, Baby, ArrowRight, LucideProps } from 'lucide-react';
import { Service } from '../types';

// Helper icon component wrapper matching LucideIcon type
const SparkleIcon = React.forwardRef<SVGSVGElement, LucideProps>((props, ref) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      ref={ref}
      {...props}
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
});
SparkleIcon.displayName = 'SparkleIcon';

const SERVICES: Service[] = [
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, whitening, and aesthetic bonding.',
    icon: SparkleIcon
  },
  {
    title: 'General Care',
    description: 'Routine check-ups, cleanings, and preventative care for long-term health.',
    icon: Stethoscope
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking solutions for missing teeth restoration.',
    icon: Crown
  },
  {
    title: 'Orthodontics',
    description: 'Straighten your teeth with modern aligners or traditional braces.',
    icon: Smile
  },
  {
    title: 'Pediatric Dentistry',
    description: 'Gentle and fun dental care designed specifically for children.',
    icon: Baby
  },
  {
    title: 'Emergency Care',
    description: 'Same-day appointments for urgent dental needs and pain relief.',
    icon: Zap
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-cream relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-maroon font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive Oral Care</h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            From routine checkups to complex smile makeovers, OU Dental Clinic offers a full spectrum of dental services in a comfortable environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-brand-maroon/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-maroon transition-colors duration-300">
                <service.icon className="w-8 h-8 text-brand-maroon group-hover:text-brand-gold transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
              <a href="#" className="inline-flex items-center text-brand-maroon font-semibold hover:text-brand-gold transition-colors text-sm uppercase tracking-wide">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;