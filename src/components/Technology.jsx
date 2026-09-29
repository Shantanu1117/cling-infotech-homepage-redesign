import React from 'react';
import { motion } from 'framer-motion';
import { capabilities } from '../data/content';

export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-brand-dark relative border-t border-white/5">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase mb-3">Technology & AI</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">Next-Generation Capabilities</h3>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-gray max-w-md"
          >
            We push boundaries with cutting-edge tech, integrating Artificial Intelligence and immersive 3D experiences to give your brand an unfair advantage.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            
            // Alternating bento layout
            let colSpan = '';
            if (index === 0) colSpan = 'md:col-span-2 lg:col-span-2';
            else if (index === 1) colSpan = 'md:col-span-1 lg:col-span-1';
            else if (index === 2) colSpan = 'md:col-span-1 lg:col-span-1';
            else if (index === 3) colSpan = 'md:col-span-2 lg:col-span-2';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card overflow-hidden group ${colSpan}`}
              >
                <div className="p-8 h-full flex flex-col relative z-10">
                  <div className="mb-6 flex-grow">
                    <div className="w-12 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent/20 transition-all">
                      <Icon size={24} />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">{cap.title}</h4>
                    <p className="text-gray-400 max-w-md leading-relaxed">{cap.description}</p>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center text-sm font-semibold text-brand-gray group-hover:text-white transition-colors">
                    Explore Capabilities
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
