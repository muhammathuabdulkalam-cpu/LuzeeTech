import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiBriefcase, FiLayers, FiMail } from 'react-icons/fi';
import companyLogo from '../../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <FiHome className="text-xl" /> },
    { name: 'Services', href: '#services', icon: <FiLayers className="text-xl" /> },
    { name: 'Projects', href: '#projects', icon: <FiBriefcase className="text-xl" /> },
    { name: 'Contact', href: '#contact', icon: <FiMail className="text-xl" /> },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 hidden md:block ${
          scrolled ? 'py-4 glass-panel' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={companyLogo} 
              alt="Luzee Tech Logo" 
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="text-xl md:text-2xl font-display font-bold tracking-tight text-white flex items-center gap-1">
              <span className="text-glow-cyan transition-all duration-300 group-hover:text-primary">Luzee</span>
              <span className="text-primary group-hover:text-white transition-all duration-300">Tech.</span>
            </div>
          </a>

          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8 text-sm font-medium text-gray-300">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-primary transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="px-6 py-2.5 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-dark-900 transition-all duration-300 glow-cyan btn-magnetic text-sm font-semibold">
              Hire Us
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Dock Navbar */}
      <motion.nav 
        initial={{ y: 150, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-5 left-1/2 z-[60] w-[94%] max-w-[400px] md:hidden"
      >
        <div className="relative bg-[#060913]/90 backdrop-blur-2xl border border-white/10 rounded-2xl px-2 py-1 flex items-center shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)] overflow-hidden">
          {navLinks.map((link, idx) => {
            const isActive = activeTab === link.name;
            return (
              <a 
                key={idx} 
                href={link.href} 
                onClick={() => setActiveTab(link.name)}
                className="relative flex flex-col items-center justify-center w-1/4 h-[52px] transition-all duration-300 z-10"
              >
                {/* Animated Top Glow Line */}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute top-0 w-1/2 h-[3px] bg-primary shadow-[0_0_12px_rgba(0,132,255,0.9)] rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                
                {/* Animated Background Glow */}
                {isActive && (
                  <motion.div
                    layoutId="nav-bg"
                    className="absolute inset-0 bg-gradient-to-b from-primary/15 to-transparent opacity-60"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}

                {/* Icon */}
                <div className={`relative z-10 text-[20px] transition-all duration-300 ${isActive ? 'text-primary -translate-y-[2px]' : 'text-zinc-500 hover:text-zinc-400'}`}>
                  {link.icon}
                </div>
                
                {/* Always Visible Name */}
                <span className={`text-[10px] mt-0.5 font-semibold tracking-wide transition-all duration-300 ${isActive ? 'text-white' : 'text-zinc-500'}`}>
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile Top Logo */}
      <div className={`fixed top-0 left-0 w-full z-40 p-5 md:hidden flex justify-center items-center transition-all duration-300 ${scrolled ? 'bg-dark-900/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent'}`}>
        <a href="#home" className="flex items-center gap-2">
          <img 
            src={companyLogo} 
            alt="Luzee Tech Logo" 
            className="h-8 w-auto object-contain transition-transform duration-300" 
          />
          <div className="text-xl font-display font-bold tracking-tight text-white flex items-center gap-1">
            <span className="text-glow-cyan">Luzee</span>
            <span className="text-primary">Tech.</span>
          </div>
        </a>
      </div>
    </>
  );
};

export default Navbar;
