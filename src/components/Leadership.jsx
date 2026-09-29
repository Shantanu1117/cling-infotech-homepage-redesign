import React from 'react';
import { motion } from 'framer-motion';
import { team } from '../data/content';

export default function Leadership() {
  return (
    <section id="team" className="py-24 bg-brand-dark/50 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase mb-3">Leadership</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Meet the Minds Behind Cling</h3>
            <p className="text-brand-gray text-lg">
              Our executive team brings decades of combined experience in technology, design, and strategic business growth.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl glass-card mb-6">
                <div className="aspect-[4/5] bg-brand-dark/50 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Social hover reveal */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex justify-end">
                    <button className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-white hover:bg-white hover:text-brand-accent transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-white">{member.name}</h4>
                <p className="text-brand-accent font-medium mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
