import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ status: 'idle', errors: {} }); // idle | loading | success

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\+?[\d\s-]{10,}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    let errors = {};
    if (!data.fullName.trim()) errors.fullName = 'Name is required';
    if (!validateEmail(data.email)) errors.email = 'Valid email is required';
    if (!validatePhone(data.phone)) errors.phone = 'Valid phone number is required';
    if (!data.message.trim()) errors.message = 'Message is required';

    if (Object.keys(errors).length > 0) {
      setFormState({ status: 'idle', errors });
      return;
    }

    setFormState({ status: 'loading', errors: {} });
    
    // Simulate API call
    setTimeout(() => {
      setFormState({ status: 'success', errors: {} });
      e.target.reset();
      
      // Reset success state after a few seconds
      setTimeout(() => {
        setFormState({ status: 'idle', errors: {} });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-primary/20 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase mb-3">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to transform your ideas into reality?
            </h3>
            <p className="text-brand-gray text-lg mb-8 max-w-md">
              Send us a message detailing your requirements, and our team of experts will get back to you within 24 hours to discuss how we can help.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-brand-gray hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-brand-accent">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-sm">Email Us</div>
                  <div className="font-semibold text-white">hello@clinginfotech.com</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10"
          >
            {formState.status === 'success' ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-400"
                >
                  <CheckCircle size={40} />
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-brand-gray">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-brand-gray mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="fullName"
                      name="fullName"
                      className={`w-full bg-black/20 border ${formState.errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-brand-accent'} rounded-lg px-4 py-3 text-white outline-none transition-colors focus:ring-1 focus:ring-brand-accent`}
                      placeholder="John Doe"
                    />
                    {formState.errors.fullName && <p className="text-red-500 text-xs mt-1">{formState.errors.fullName}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-gray mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      className={`w-full bg-black/20 border ${formState.errors.email ? 'border-red-500' : 'border-white/10 focus:border-brand-accent'} rounded-lg px-4 py-3 text-white outline-none transition-colors focus:ring-1 focus:ring-brand-accent`}
                      placeholder="john@company.com"
                    />
                    {formState.errors.email && <p className="text-red-500 text-xs mt-1">{formState.errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-gray mb-2">Phone</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      className={`w-full bg-black/20 border ${formState.errors.phone ? 'border-red-500' : 'border-white/10 focus:border-brand-accent'} rounded-lg px-4 py-3 text-white outline-none transition-colors focus:ring-1 focus:ring-brand-accent`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {formState.errors.phone && <p className="text-red-500 text-xs mt-1">{formState.errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-brand-gray mb-2">Company (Optional)</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      className="w-full bg-black/20 border border-white/10 focus:border-brand-accent rounded-lg px-4 py-3 text-white outline-none transition-colors focus:ring-1 focus:ring-brand-accent"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-gray mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows="4"
                    className={`w-full bg-black/20 border ${formState.errors.message ? 'border-red-500' : 'border-white/10 focus:border-brand-accent'} rounded-lg px-4 py-3 text-white outline-none transition-colors focus:ring-1 focus:ring-brand-accent resize-none`}
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {formState.errors.message && <p className="text-red-500 text-xs mt-1">{formState.errors.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={formState.status === 'loading'}
                  className="btn-primary w-full flex justify-center items-center gap-2"
                >
                  {formState.status === 'loading' ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
