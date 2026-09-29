import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Cling Info Tech completely transformed our digital presence. Their attention to detail and technical expertise helped us scale our operations seamlessly.",
    author: "Sarah Jenkins",
    role: "Operations Director",
    company: "TechFlow Inc."
  },
  {
    text: "The ERP system they developed for us streamlined everything. The team was responsive, professional, and delivered beyond our expectations.",
    author: "David Chen",
    role: "CEO",
    company: "Global Logistics Ltd."
  },
  {
    text: "Their mobile app development is top-notch. They took our concept and built an intuitive, beautiful app that our users love.",
    author: "Emily Martinez",
    role: "Product Manager",
    company: "HealthSync"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-dark/50 border-t border-white/5">
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase mb-3">Client Feedback</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Your Voice, Our Pride!</h3>
            <p className="text-brand-gray text-lg">
              Dive into the heartfelt accounts of our valued patrons. From life-changing experiences to exceptional service, their stories illuminate the essence of our commitment.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 relative group hover:bg-white/10 transition-colors"
            >
              <Quote className="text-brand-accent/20 w-16 h-16 absolute top-6 right-6 group-hover:text-brand-accent/40 transition-colors" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex gap-1 text-brand-accent mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-brand-gray mb-8 text-lg italic leading-relaxed flex-grow">"{t.text}"</p>
                
                <div className="mt-auto">
                  <h4 className="text-white font-bold">{t.author}</h4>
                  <p className="text-sm text-brand-gray">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
