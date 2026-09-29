import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Users, Briefcase, Coffee } from 'lucide-react';
import { stats } from '../data/content';

const iconMap = {
  code: Code2,
  users: Users,
  briefcase: Briefcase,
  coffee: Coffee
};

function Counter({ value, exactValue }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = exactValue / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= exactValue) {
          setCount(exactValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, exactValue]);

  // Format big numbers
  const displayValue = count >= 1000000 
    ? (count / 1000000).toFixed(1) + 'M+' 
    : count + (value.includes('+') ? '+' : '');

  return <span ref={ref}>{displayValue}</span>;
}

export default function TrustMetrics() {
  return (
    <section className="py-20 bg-brand-dark/50 border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center text-center group relative p-6 rounded-3xl hover:bg-white/5 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/0 to-transparent opacity-0 group-hover:from-brand-accent/10 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
                
                <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:bg-brand-accent/20 transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-brand-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Icon size={32} className="text-brand-accent group-hover:text-white transition-colors relative z-10" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight group-hover:text-brand-accent transition-colors">
                  <Counter value={stat.value} exactValue={stat.exactValue} />
                </h3>
                <p className="text-gray-400 font-medium text-sm md:text-base uppercase tracking-wider">
                  {stat.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
