import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Info Side */}
          <div>
            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-2 block">Get in Touch</span>
            <h2 className="font-serif text-4xl font-bold text-brand-maroon mb-6">Visit Our Clinic</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We are accepting new patients! Schedule your appointment today and take the first step towards a healthier, brighter smile.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-maroon">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Address</h4>
                  <p className="text-gray-600">123 Dental Avenue, Suite 101<br />Wellness City, ST 90210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-maroon">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-maroon">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">hello@oudentalclinic.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-maroon">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Hours</h4>
                  <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-t-4 border-brand-gold">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Request Appointment</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon outline-none transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon outline-none transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon outline-none transition-colors" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon outline-none transition-colors">
                  <option>General Checkup</option>
                  <option>Whitening</option>
                  <option>Implants</option>
                  <option>Orthodontics</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon outline-none transition-colors" placeholder="Preferred time, specific concerns..."></textarea>
              </div>

              <Button fullWidth type="submit" className="mt-2">
                Send Request
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;