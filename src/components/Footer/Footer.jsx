import React from 'react';
import { FiHeart } from 'react-icons/fi';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="pt-8 pb-28 md:py-8 border-t border-white/5 relative z-10 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-1 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            <img src={logo} alt="LuzeeTech Logo" className="w-full h-full object-contain" />
          </div>
          <div className="text-2xl font-display font-bold tracking-tight text-white flex items-center gap-1">
            <span className="text-glow-cyan">Luzee</span>
            <span className="text-primary">Tech.</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm flex items-center gap-2">
          © {new Date().getFullYear()} LuzeeTech. Crafted with <FiHeart className="text-accent-pink animate-pulse" /> in Bangalore, India.
        </p>

        <div className="flex items-center gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
