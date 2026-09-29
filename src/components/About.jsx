import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 bg-brand-dark/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase mb-3">Our Story</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Innovations at its best. <br /> That's what we believe in.
            </h3>
            <div className="space-y-6 text-brand-gray text-lg">
              <p>
                We are a company with multifarious IT services encompassing ERPs, web platforms, mobile applications, and continuous support. 
              </p>
              <p>
                We understand not only our customers deeply but the industry at large. Our primary focus is enhancing the skills and growth of individuals, providing a consistent and captivating digital experience across all platforms.
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 flex gap-6 group hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="shrink-0 relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform relative z-10">
                  <Compass size={28} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Our Vision</h4>
                <p className="text-gray-400 leading-relaxed">
                  To deliver premier web design, development, and marketing solutions. We foster profitable online growth for our clients while continually expanding our roster of satisfied partners globally.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 flex gap-6 group hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="shrink-0 relative">
                <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform relative z-10">
                  <Target size={28} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">Our Mission</h4>
                <p className="text-gray-400 leading-relaxed">
                  We constantly refine our processes and embrace cutting-edge technologies to stay ahead in a shifting digital environment, establishing ourselves as a trustworthy ally for ambitious businesses.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
