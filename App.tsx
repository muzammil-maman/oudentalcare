import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import InstagramFeed from './components/InstagramFeed';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        
        {/* About Section - Inline for simplicity or could be a separate component */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative">
                <div className="absolute top-4 -left-4 w-full h-full border-4 border-brand-gold rounded-3xl z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1609840114035-1c29046a8028?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dr. OU" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full"
                />
              </div>
              <div className="lg:w-1/2">
                <span className="text-brand-maroon font-bold tracking-widest uppercase text-sm mb-2 block">About Us</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-6">We Care About Your Smile</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  At OU Dental Clinic, we believe that a healthy smile is the foundation of confidence. Led by Dr. OU, our team combines years of experience with compassionate care to ensure every patient feels at home.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We utilize the latest digital imaging and painless techniques to provide top-tier dental services. Whether you need a routine cleaning or a complete smile makeover, we are dedicated to excellence.
                </p>
                <div className="flex gap-8">
                  <div>
                    <span className="block text-4xl font-serif font-bold text-brand-maroon">15+</span>
                    <span className="text-gray-500 text-sm uppercase tracking-wide">Years Experience</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-serif font-bold text-brand-maroon">5k+</span>
                    <span className="text-gray-500 text-sm uppercase tracking-wide">Happy Patients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <InstagramFeed />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;