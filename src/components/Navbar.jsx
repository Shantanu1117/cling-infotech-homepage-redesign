import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { navigation } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/60 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Conceptual abstract logo for the tech company */}
          <div className="w-8 h-8 bg-gradient-to-tr from-brand-primary to-brand-accent rounded-lg flex items-center justify-center font-bold text-white shadow-lg">
            C
          </div>
          <span className="text-xl font-bold tracking-tight">Cling Info Tech</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-brand-gray hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary py-2 px-5 text-sm flex items-center gap-2">
            Start a Project <ChevronRight size={16} />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-brand-gray hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className="text-lg font-medium text-brand-light p-2 rounded-lg hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full text-center flex justify-center items-center gap-2"
              >
                Start a Project <ChevronRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
