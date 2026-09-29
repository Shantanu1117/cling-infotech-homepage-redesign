import React from 'react';
import { motion } from 'framer-motion';
import { timeline } from '../data/content';

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase mb-3">Our History</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">A Journey As Dynamic As Us</h3>
          </motion.div>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-accent/0 via-brand-accent/50 to-brand-accent/0 md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.year} className="relative flex items-center md:justify-between flex-col md:flex-row gap-8 md:gap-0">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-accent md:-translate-x-1/2 z-10"></div>
                  
                  {/* Content Left (Even) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`ml-12 md:ml-0 md:w-[45%] ${isEven ? 'md:text-right md:pr-12' : 'md:order-last md:pl-12'}`}
                  >
                    <div className="glass-card p-6 md:p-8 hover:bg-white/10 transition-colors">
                      <span className="text-5xl font-black text-white/5 mb-4 block">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold text-brand-accent mb-3">{item.title}</h4>
                      <p className="text-brand-gray">{item.description}</p>
                    </div>
                  </motion.div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-[45%]"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
