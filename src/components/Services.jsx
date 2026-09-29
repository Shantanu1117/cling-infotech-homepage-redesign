import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/content';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase mb-3">Our Core Capabilities</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Solutions that drive business</h3>
            <p className="text-brand-gray text-lg">
              We specialize in delivering high-performance digital products tailored to your specific operational needs and market goals.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative glass-card p-8 hover:bg-white/10 transition-all duration-300"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/0 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                
                <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${service.color}`} />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h4>
                <p className="text-brand-gray leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <button className="flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-white transition-colors mt-auto">
                  Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
