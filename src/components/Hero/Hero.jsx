import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import profileImg from '../../assets/afzal_logo.jpeg';
import { FiArrowRight, FiCode } from 'react-icons/fi';

/* ─── Ultra-Premium Minimalist Floating Badge ─── */
function FloatingBadge({ icon, label, value, delay, positionClass }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute z-30 flex items-center gap-2 sm:gap-3
                  bg-dark-900/80 border border-white/10 backdrop-blur-2xl
                  px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                  ${positionClass}`}
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center text-sm sm:text-xl shadow-inner">
        {icon}
      </div>
      <div className="leading-tight text-left">
        <p className="text-white font-display font-bold text-[10px] sm:text-sm">{value}</p>
        <p className="text-gray-400 text-[8px] sm:text-[10px] uppercase tracking-widest mt-0.5">{label}</p>
      </div>
    </motion.div>
  );
}

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Tech Rings animations matching the portfolio
      gsap.to('.tech-ring-1', { rotation: 360, duration: 20, repeat: -1, ease: 'linear' });
      gsap.to('.tech-ring-2', { rotation: -360, duration: 30, repeat: -1, ease: 'linear' });
      gsap.to('.tech-ring-3', { rotation: 360, duration: 45, repeat: -1, ease: 'linear' });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-start lg:justify-center pt-24 lg:pt-20 pb-24 lg:pb-12 overflow-hidden" ref={containerRef}>

      {/* Ultra-smooth ambient background glows */}
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* RESPONSIVE LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center text-center lg:text-left mt-0 lg:mt-0">

        {/* ━━━ 1. Typography & Stats (Left Column on Desktop, Top on Mobile) ━━━ */}
        <div className="flex flex-col items-center lg:items-start order-1 w-full">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-4 lg:mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Premium Freelance Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[1.8rem] min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-2 lg:mb-6 leading-tight whitespace-nowrap lg:whitespace-normal"
          >
            <span className="text-white">CODE. </span>
            <span className="text-primary drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">CREATE. </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">CONNECT.</span>
          </motion.h1>

          {/* Short 2-line description visible on all devices */}
          {/* Short 2-line description visible on all devices */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-[13px] sm:text-sm lg:text-lg max-w-[310px] sm:max-w-md lg:max-w-xl font-light leading-relaxed mb-6 lg:mb-12 mx-auto lg:mx-0"
          >
            Freelance services for <span className="text-primary font-semibold">Web & App</span> development. <br className="hidden sm:block" />
            <span className="text-white font-medium">Direct Message us today</span> to build your next project!
          </motion.p>

          {/* Number of Projects / Stats (Desktop Only, or shown neatly on mobile if needed. User asked for "desktop mode at left side number of projects") */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex items-center gap-8 border-t border-white/10 pt-8 mt-auto"
          >
            <div>
              <p className="text-4xl font-display font-bold text-white">3+</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 font-semibold">Projects Done</p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <p className="text-4xl font-display font-bold text-primary text-glow-cyan">100%</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 font-semibold">Client Success</p>
            </div>
          </motion.div>

        </div>

        {/* ━━━ 2. Holographic Circle Interface & Buttons (Right Column on Desktop, Middle/Bottom on Mobile) ━━━ */}
        <div className="flex flex-col items-center justify-center w-full order-2">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="relative flex items-center justify-center w-full min-h-[300px] sm:min-h-[450px] lg:min-h-[500px] overflow-visible my-4 lg:mb-12"
          >
            <div className="relative flex items-center justify-center w-[280px] h-[280px] min-[400px]:w-[300px] min-[400px]:h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] transform-gpu perspective-[2000px]">

              {/* Hologram Frame */}
              <div className="absolute inset-[-5px] sm:inset-[-10px] lg:inset-[-20px] rounded-full border-2 border-primary/30 animate-pulse z-0"></div>

              {/* Tech Ring 3 (Outer) */}
              <div className="absolute w-[290px] h-[290px] min-[400px]:w-[350px] min-[400px]:h-[350px] sm:w-[440px] sm:h-[440px] lg:w-[540px] lg:h-[540px] rounded-full border border-dotted border-primary/50 tech-ring-3 z-0"></div>

              {/* Tech Ring 2 (Middle) */}
              <div className="absolute w-[260px] h-[260px] min-[400px]:w-[310px] min-[400px]:h-[310px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full border-2 border-secondary/20 tech-ring-2 z-0"></div>

              {/* Tech Ring 1 (Inner) */}
              <div className="absolute w-[230px] h-[230px] min-[400px]:w-[270px] min-[400px]:h-[270px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full border border-dashed border-primary/30 tech-ring-1 z-0"></div>

              {/* Tech Nodes */}
              <div className="absolute w-2 h-2 lg:w-3 lg:h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(0,240,255,1)] top-[10%] right-[10%] z-10"></div>
              <div className="absolute w-2 h-2 lg:w-3 lg:h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(0,240,255,1)] bottom-[15%] left-[5%] z-10"></div>
              <div className="absolute w-2 h-2 lg:w-3 lg:h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(0,240,255,1)] top-[50%] -left-[10px] lg:-left-[20px] z-10"></div>

              {/* Profile Illustration Image */}
              <div className="hero-illustration relative w-[200px] h-[200px] min-[400px]:w-[240px] min-[400px]:h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px] rounded-full border-[3px] lg:border-4 border-primary overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.4),inset_0_0_20px_rgba(0,240,255,0.2)] lg:shadow-[0_0_60px_rgba(0,240,255,0.4),inset_0_0_40px_rgba(0,240,255,0.2)] bg-black z-10">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  style={{ objectPosition: 'center 25%', filter: 'contrast(1.1) brightness(1.1) saturate(1.1)' }}
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none"></div>
              </div>

              {/* Exactly 2 Badges mirroring the portfolio layout */}
              <FloatingBadge
                icon="🚀"
                label="Delivery"
                value="Ultra Fast"
                delay={0.8}
                positionClass="top-[5%] -left-[5%] sm:top-[0%] sm:-left-[10%] lg:-left-[15%]"
              />
              <FloatingBadge
                icon="⭐"
                label="Quality"
                value="Premium"
                delay={1.0}
                positionClass="bottom-[5%] -right-[5%] sm:bottom-[0%] sm:-right-[10%] lg:-right-[15%]"
              />

            </div>
          </motion.div>

          {/* ━━━ 3. Buttons (Under the profile on both Mobile and Desktop) ━━━ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-[90%] sm:w-[80%] lg:w-full mt-2 lg:mt-4"
          >
            <a href="#contact" className="w-full sm:w-[220px] justify-center px-8 py-3.5 sm:py-4 rounded-full bg-primary text-dark-900 font-bold text-sm sm:text-base hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-2">
              Start Project <FiArrowRight />
            </a>
            <a href="#projects" className="w-full sm:w-[220px] justify-center px-8 py-3.5 sm:py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-all flex items-center gap-2">
              View Work <FiCode />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
