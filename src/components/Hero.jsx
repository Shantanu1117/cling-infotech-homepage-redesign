import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-brand-dark">
      {/* 1. Stunning Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 mix-blend-screen"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* 2. Adjusted Gradient Overlays to Let Video Show Through */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-dark"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/30 to-transparent"></div>

      {/* 3. Subtle Tech Grid Pattern overlay */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxSDB6bTAgMHY0MGgxVjB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-40"></div>

      {/* 4. Ambient Glowing Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/20 border border-white/10 backdrop-blur-md w-fit shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-blue-100 text-sm font-semibold tracking-wide">Making Your Ideas Happen</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white drop-shadow-2xl">
            Engineering <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-purple-400 animate-gradient drop-shadow-md">
              Digital
            </span> <br /> 
            Excellence
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-300 max-w-xl leading-relaxed drop-shadow-md">
            We are an end-to-end IT solutions provider, building premium web portals, mobile applications, and intelligent ERP systems that drive real business growth.
          </p>
          
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <a href="#contact" className="btn-primary flex items-center gap-2 text-lg shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              Start Your Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="btn-secondary text-lg hover:-translate-y-1 hover:bg-white/5 bg-black/20 backdrop-blur-md">
              Explore Solutions
            </a>
          </div>

          {/* Professional Trust Badge / Voucher */}
          <div className="flex items-center gap-4 pt-6 mt-2 border-t border-white/10 w-fit">
            <div className="flex -space-x-3">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100" alt="Client" className="w-10 h-10 rounded-full border-2 border-brand-dark object-cover" />
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" alt="Client" className="w-10 h-10 rounded-full border-2 border-brand-dark object-cover" />
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100" alt="Client" className="w-10 h-10 rounded-full border-2 border-brand-dark object-cover" />
              <div className="w-10 h-10 rounded-full border-2 border-brand-dark bg-gradient-to-tr from-brand-primary to-brand-accent flex items-center justify-center text-xs font-bold text-white relative shadow-lg">
                350+
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex text-yellow-400 text-sm tracking-widest">
                ★★★★★
              </div>
              <span className="text-xs text-gray-300 font-medium mt-1">Trusted by 350+ Global Clients</span>
            </div>
          </div>

        </motion.div>

        {/* Right Abstract Visual / Floating Vouchers */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block h-[600px] w-full"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-lg mx-auto">
              
              {/* Removed the large abstract rings to let the video's globe shine */}
              
              {/* Top Right Tag - Web Apps */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] right-0 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-blue-400/50 transition-colors w-64"
              >
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]"><Code size={24} /></div>
                <div>
                  <div className="text-sm font-bold text-white">Cloud Web Apps</div>
                  <div className="text-xs text-brand-gray font-medium">Scalable architecture</div>
                </div>
              </motion.div>

              {/* Mid Left Tag - ERP */}
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[40%] -left-[10%] bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-purple-400/50 transition-colors w-64"
              >
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]"><Database size={24} /></div>
                <div>
                  <div className="text-sm font-bold text-white">ERP Systems</div>
                  <div className="text-xs text-brand-gray font-medium">Data synchronization</div>
                </div>
              </motion.div>

              {/* Bottom Right Tag - Mobile */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[15%] right-[5%] bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-emerald-400/50 transition-colors w-64"
              >
                <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-xl text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]"><Smartphone size={24} /></div>
                <div>
                  <div className="text-sm font-bold text-white">Mobile First</div>
                  <div className="text-xs text-brand-gray font-medium">Native experiences</div>
                </div>
              </motion.div>

              {/* Top Left Small AI Voucher */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute top-[15%] left-[5%] bg-white/5 backdrop-blur-xl border border-brand-accent/30 py-2.5 px-4 rounded-full flex items-center gap-3 shadow-[0_5px_20px_rgba(59,130,246,0.2)]"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                <div className="text-sm font-bold text-white">AI-Powered Solutions</div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
