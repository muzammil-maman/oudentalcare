/**
 * GOOGLE APPS SCRIPT FOR OU DENTAL CLINIC
 * ---------------------------------------
 * 1. Create a Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Paste this code:
 * 
 * function doPost(e) {
 *   const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   const data = JSON.parse(e.postData.contents);
 *   const timestamp = new Date();
 *   
 *   // 1. Append to Sheet (Columns: Date, First Name, Last Name, Email, Phone, Service, Message)
 *   sheet.appendRow([
 *     timestamp, 
 *     data.firstName, 
 *     data.lastName, 
 *     data.email, 
 *     "'" + data.phone, // Adding ' to force string in Sheets
 *     data.service, 
 *     data.message
 *   ]);
 *   
 *   const officialEmail = "oudentalclinics@gmail.com";
 *   
 *   // 2. Email to Management
 *   MailApp.sendEmail({
 *     to: officialEmail,
 *     subject: "New Appointment: " + data.firstName + " " + data.lastName,
 *     body: `New appointment request received from website:\n\n` +
 *           `Patient: ${data.firstName} ${data.lastName}\n` +
 *           `Email: ${data.email}\n` +
 *           `Phone: ${data.phone}\n` +
 *           `Service: ${data.service}\n` +
 *           `Message: ${data.message}\n\n` +
 *           `Received at: ${timestamp.toLocaleString()}`
 *   });
 *   
 *   // 3. Confirmation Email to Patient
 *   MailApp.sendEmail({
 *     to: data.email,
 *     subject: "We've Received Your Request - OU Dental Clinic",
 *     body: `Dear ${data.firstName},\n\nThank you for choosing OU Dental Clinic. We have received your request for ${data.service}. Our team will contact you at ${data.phone} shortly to confirm your appointment time.\n\nBest regards,\nOU Dental Clinic Team`
 *   });
 *   
 *   return ContentService.createTextOutput(JSON.stringify({result: "success"})).setMimeType(ContentService.MimeType.JSON);
 * }
 */

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import Button from './Button';

// REPLACE THIS with your deployed Google Apps Script URL
const SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      // If SCRIPT_URL is placeholder, simulate success for demo
      if (SCRIPT_URL.includes("YOUR_SCRIPT_ID")) {
        console.warn("Using demo simulation. Please set a real SCRIPT_URL in Contact.tsx for Google Sheets integration.");
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
      } else {
        const response = await fetch(SCRIPT_URL, {
          method: 'POST',
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          setStatus('success');
          setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
        } else {
          throw new Error("Submission failed");
        }
      }
    } catch (err) {
      console.error("Form error:", err);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-2 block">Connect With Us</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-6 leading-tight">Your Smile Transformation Starts Here</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
                We are currently accepting new patients. Fill out the form, and our treatment coordinator will reach out to you within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {[
                { icon: MapPin, label: "Address", val: "8-1-248/OU/143, Shop No.1, Opp. OU Community Hall, OU Colony, Shaikpet - 500008." },
                { icon: Phone, label: "Phone", val: "+91 8008337083, +91 8309487912" },
                { icon: Mail, label: "Email", val: "oudentalclinics@gmail.com" },
                { icon: Clock, label: "Hours", val: "Mon - Sun: 11:00 AM - 9:00 PM" }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 bg-white/50 p-4 rounded-2xl border border-brand-gold/10">
                  <div className="bg-brand-maroon text-white p-3 rounded-xl shadow-md">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">{item.label}</h4>
                    <p className="text-gray-600 text-sm mt-1">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full -z-0"></div>
            
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center animate-fade-in relative z-10">
                <div className="bg-green-100 p-6 rounded-full mb-6">
                  <CheckCircle className="w-16 h-16 text-green-600" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">Request Sent!</h3>
                <p className="text-gray-600 text-lg max-w-xs mx-auto mb-8">
                  We've received your appointment request. We'll contact you shortly at your provided phone number.
                </p>
                <Button onClick={() => setStatus('idle')} variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white">
                  Send Another Request
                </Button>
              </div>
            ) : (
              <div className="relative z-10">
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-2">Request Appointment</h3>
                <p className="text-gray-500 mb-8">Personalized dental care tailored to your schedule.</p>
                
                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl flex items-center gap-3 animate-shake">
                    <AlertCircle className="shrink-0" />
                    <p className="text-sm">Something went wrong. Please try again or call us at +91 8008337083.</p>
                  </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 ml-1">First Name</label>
                      <input 
                        required 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all" 
                        placeholder="John" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 ml-1">Last Name</label>
                      <input 
                        required 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 ml-1">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all" 
                        placeholder="john@example.com" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 ml-1">Phone Number</label>
                      <input 
                        required 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all" 
                        placeholder="+91 1234567890" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 ml-1">Service Required</label>
                    <select 
                      required 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all appearance-none"
                    >
                      <option value="">Select a service...</option>
                      <option>Cosmetic Consultation</option>
                      <option>General Checkup & Cleaning</option>
                      <option>Dental Implants</option>
                      <option>Invisalign / Orthodontics</option>
                      <option>Pediatric Dentistry</option>
                      <option>Emergency Care</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 ml-1">Your Message (Optional)</label>
                    <textarea 
                      rows={2} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all resize-none" 
                      placeholder="Special concerns..."
                    ></textarea>
                  </div>

                  <Button 
                    fullWidth 
                    type="submit" 
                    className="mt-2 py-4 text-base flex items-center justify-center gap-3 shadow-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : 'Confirm Appointment Request'}
                  </Button>
                  
                  <p className="text-center text-gray-400 text-[10px] mt-2 italic leading-tight">
                    By submitting, you agree to our privacy policy. Your data is sent directly to our official clinic email and Google Sheet.
                  </p>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;