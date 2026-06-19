import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 pb-24 overflow-hidden">

      {/* Ultra-smooth ambient background glows */}
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* RESPONSIVE LAYOUT */}
      <div className="max-w-4xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">

        {/* ━━━ Typography & Stats ━━━ */}
        <div className="flex flex-col items-center w-full">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Premium Freelance Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[2.2rem] min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-4 leading-tight"
          >
            <span className="text-white">CODE. </span>
            <span className="text-primary drop-shadow-[0_0_15px_rgba(0,132,255,0.4)]">CREATE. </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">CONNECT.</span>
          </motion.h1>

          {/* Short 2-line description visible on all devices */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-[14px] sm:text-base lg:text-lg max-w-xl font-light leading-relaxed mb-10 mx-auto"
          >
            Freelance services for <span className="text-primary font-semibold">Web & App</span> development. <br className="hidden sm:block" />
            <span className="text-white font-medium">Book your appointment today</span> to build your project!
          </motion.p>

          {/* Buttons (Centrally located below description) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12"
          >
            <a href="#book-call" className="w-full sm:w-[200px] justify-center px-8 py-3.5 sm:py-4 rounded-full bg-primary text-dark-900 font-bold text-sm sm:text-base hover:bg-white hover:text-dark-900 transition-all shadow-[0_0_20px_rgba(0,132,255,0.3)] flex items-center gap-2">
              Book a Call <FiArrowRight />
            </a>
            <a href="#projects" className="w-full sm:w-[200px] justify-center px-8 py-3.5 sm:py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-all flex items-center gap-2">
              View Work <FiCode />
            </a>
          </motion.div>

          {/* Number of Projects / Stats (Shown neatly centered on all screens) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center gap-8 md:gap-12 border-t border-white/10 pt-8 w-full max-w-sm"
          >
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-white">3+</p>
              <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-1 font-semibold">Projects Done</p>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary text-glow-cyan">100%</p>
              <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-1 font-semibold">Client Success</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
