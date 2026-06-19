import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiDatabase, FiCpu } from 'react-icons/fi';
import profileImg from '../../assets/afzal_logo.jpeg';

export default function About() {
  const skills = [
    {
      icon: <FiCode className="text-primary text-xl" />,
      title: "Frontend & Web Apps",
      desc: "Creating pixel-perfect, highly responsive interfaces using React, TailwindCSS, and modern web frameworks.",
    },
    {
      icon: <FiSmartphone className="text-secondary text-xl" />,
      title: "Mobile App Development",
      desc: "Building native cross-platform mobile apps for iOS & Android with React Native and Expo.",
    },
    {
      icon: <FiDatabase className="text-primary text-xl" />,
      title: "Backend & Databases",
      desc: "Designing fast, secure RESTful APIs and microservices using Node.js, Express, and MongoDB.",
    },
    {
      icon: <FiCpu className="text-secondary text-xl" />,
      title: "Deployment & Scaling",
      desc: "Deploying production-ready products on secure hosting providers (Vercel, Render, AWS) with CI/CD.",
    },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-transparent">
      {/* Glow Effects */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-primary font-semibold tracking-wider uppercase text-[10px] sm:text-xs lg:text-sm mb-2 glow-cyan">
            Meet The Creator
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
            About Our Developer
          </h2>
          <p className="text-gray-400 mt-4 text-xs sm:text-sm max-w-md mx-auto">
            Combining engineering and design to build digital products that drive results.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Holographic Profile Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative flex items-center justify-center w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px]">
              
              {/* Decorative Tech Rings & Glows */}
              <div className="absolute inset-[-8px] sm:inset-[-12px] rounded-full border border-dashed border-primary/40 animate-spin [animation-duration:35s]"></div>
              <div className="absolute inset-[-16px] sm:inset-[-24px] rounded-full border border-dotted border-secondary/30 animate-spin [animation-duration:50s] [animation-direction:reverse]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-secondary/10 blur-xl pointer-events-none"></div>

              {/* Profile Image Frame */}
              <div className="relative w-full h-full rounded-full border-[3px] border-primary/80 overflow-hidden shadow-[0_0_40px_rgba(0,132,255,0.3),inset_0_0_20px_rgba(0,132,255,0.2)] bg-black">
                <img
                  src={profileImg}
                  alt="Muhammathu Abdulkalam M"
                  className="w-full h-full object-cover scale-110 hover:scale-120 transition-transform duration-700"
                  style={{ objectPosition: 'center 15%' }}
                />
                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none"></div>
              </div>

              {/* Decorative Node Dots */}
              <div className="absolute w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,132,255,1)] top-[10%] right-[10%]"></div>
              <div className="absolute w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(11,97,216,1)] bottom-[10%] left-[10%]"></div>
            </div>
          </div>

          {/* Right Column: Profile Info & Solutions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-4"
            >
              Full-Stack Architect
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-2 leading-tight"
            >
              Muhammathu Abdulkalam M
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary text-sm sm:text-base font-semibold tracking-wider uppercase mb-6"
            >
              Web & App Developer / Freelancer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mb-8"
            >
              I deliver custom, high-performance freelance software solutions that transform complex concepts into smooth, production-ready web and mobile products. Utilizing modern frameworks, clean architectures, and eye-catching designs, I provide end-to-end engineering that elevates brands and streamlines business workflows.
            </motion.p>

            {/* Core Capability Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                  className="p-5 rounded-2xl glass-panel border-white/5 hover:border-primary/20 hover:bg-white/[0.03] transition-all duration-300 flex gap-4 text-left group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-primary/20 transition-all duration-300">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-display font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                      {skill.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-light">
                      {skill.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
