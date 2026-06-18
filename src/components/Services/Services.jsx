import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMonitor, FiSmartphone, FiLayout, FiLifeBuoy } from 'react-icons/fi';
import companyLogo from '../../assets/logo.png';

const servicesData = [
  {
    title: "Web Development",
    description: "High-performance, scalable web apps built with modern tools.",
    icon: <FiMonitor />,
    color: "text-primary",
    pos: { x: "20%", y: "25%" }
  },
  {
    title: "App Development",
    description: "Cross-platform mobile experiences for Android and iOS.",
    icon: <FiSmartphone />,
    color: "text-secondary",
    pos: { x: "80%", y: "25%" }
  },
  {
    title: "UI/UX Design",
    description: "Clean, modern interfaces that your users will absolutely love.",
    icon: <FiLayout />,
    color: "text-primary",
    pos: { x: "20%", y: "75%" }
  },
  {
    title: "Support & Maintenance",
    description: "Ongoing updates and scaling support for your business.",
    icon: <FiLifeBuoy />,
    color: "text-secondary",
    pos: { x: "80%", y: "75%" }
  }
];

const Services = () => {
  const containerRef = useRef(null);
  const solarSystemRef = useRef(null);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // --- DESKTOP (Pinned Scrubbing) ---
      mm.add("(min-width: 1024px)", () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=150%', // Pin for 1.5 screen heights
            scrub: true,
            pin: true,
            onUpdate: (self) => {
              let newIndex = Math.round(self.progress * 3);
              if(newIndex > 3) newIndex = 3;
              if(newIndex < 0) newIndex = 0;
              setActiveService(newIndex);
            }
          }
        });
      });

      // --- MOBILE (Sticky Pinned Scrubbing) ---
      mm.add("(max-width: 1023px)", () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top', 
            end: '+=150%',
            scrub: true,
            pin: true, // Restored pinning as requested
            onUpdate: (self) => {
              let newIndex = Math.round(self.progress * 3);
              if(newIndex > 3) newIndex = 3;
              if(newIndex < 0) newIndex = 0;
              setActiveService(newIndex);
            }
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="services" className="relative bg-transparent overflow-visible">
      
      {/* Viewport Container (100svh ensures perfect mobile pinning without excess gaps) */}
      <div className="w-full flex flex-col items-center justify-center relative min-h-[100svh] lg:h-screen py-10 lg:py-0">
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

        {/* Header (Absolutely positioned so it doesn't push the Solar System off-center) */}
        <div className="absolute top-8 sm:top-12 left-0 w-full text-center z-50 pointer-events-none">
          <p className="text-primary font-semibold tracking-wider uppercase text-[10px] sm:text-xs lg:text-sm mb-1 sm:mb-2 glow-cyan">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
            Our Ecosystem
          </h2>
          <p className="text-gray-400 mt-2 sm:mt-4 text-[10px] sm:text-xs lg:text-sm max-w-sm mx-auto">
            Scroll down to explore our services
          </p>
        </div>

        {/* ━━━ Static Solar System Wrapper ━━━ */}
        <div className="relative z-30 w-[330px] h-[330px] sm:w-[400px] sm:h-[400px] lg:w-[550px] lg:h-[550px] flex items-center justify-center pointer-events-none">
          
          {/* ━━━ Central Sun (Fixed perfectly in the center of the rings) ━━━ */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full bg-dark-900 border-[2px] border-primary/30 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(11,97,216,0.2),inset_0_0_30px_rgba(11,97,216,0.3)] backdrop-blur-xl transition-all duration-500 pointer-events-auto">
              
              {/* Logo at the top of the center sun */}
              <img src={companyLogo} alt="Luzee Tech Logo" className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-1 sm:mb-4 opacity-90 drop-shadow-[0_0_15px_rgba(11,97,216,0.8)]" />

              {/* Dynamic Content driven by scroll progress */}
              <div className="relative w-full h-[60px] sm:h-[90px] lg:h-[100px]">
                {servicesData.map((service, i) => (
                  <div 
                    key={`content-${i}`}
                    className={`absolute inset-0 flex flex-col items-center justify-center sm:justify-start px-2 sm:px-4 transition-all duration-500 ease-in-out ${activeService === i ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
                  >
                     <h3 className="text-xs sm:text-base lg:text-lg font-bold text-white mb-0 sm:mb-2 text-center leading-tight">
                       {service.title}
                     </h3>
                     <p className="hidden sm:block text-[10px] lg:text-xs text-gray-400 text-center leading-relaxed">
                       {service.description}
                     </p>
                  </div>
                ))}
              </div>
          </div>
          
          {/* Decorative Inner Rings */}
          <div className="absolute inset-0 m-auto rounded-full border border-dashed border-white/5 w-[45%] h-[45%]"></div>
          <div className="absolute inset-0 m-auto rounded-full border border-dashed border-white/10 w-[65%] h-[65%]"></div>
          <div className="absolute inset-0 m-auto rounded-full border border-dashed border-white/20 w-[85%] h-[85%]"></div>

          {/* Main Orbit Ring holding all 4 planets */}
          <div className="absolute inset-0 m-auto rounded-full border-[1.5px] border-dashed border-primary/30 w-[100%] h-[100%] shadow-[inset_0_0_30px_rgba(11,97,216,0.05)]">
            
            {servicesData.map((service, i) => {
               // Position around the circle: Top, Right, Bottom, Left
               let topPos = '50%';
               let leftPos = '50%';
               if (i === 0) { topPos = '0%'; leftPos = '50%'; }
               if (i === 1) { topPos = '50%'; leftPos = '100%'; }
               if (i === 2) { topPos = '100%'; leftPos = '50%'; }
               if (i === 3) { topPos = '50%'; leftPos = '0%'; }
               
               return (
                 <div 
                   key={`planet-${i}`}
                   className="absolute -translate-x-1/2 -translate-y-1/2"
                   style={{ top: topPos, left: leftPos }}
                 >
                   {/* The Planet */}
                   <div 
                     className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full glass-panel border-[2px] flex flex-col items-center justify-center text-xl sm:text-2xl lg:text-3xl transition-all duration-500 ${activeService === i ? 'bg-primary/20 scale-125 border-primary shadow-[0_0_40px_rgba(11,97,216,0.8)] text-primary' : 'border-primary/40 bg-dark-900 opacity-60 text-gray-400'}`}
                   >
                     {service.icon}

                     {/* Text Label (Hidden on mobile to reduce congestion) */}
                     <span className={`hidden sm:block absolute top-[110%] text-[10px] lg:text-xs font-bold tracking-wide whitespace-nowrap bg-dark-900/90 px-3 py-1 rounded-full border transition-all duration-500 ${activeService === i ? 'text-white border-primary/50 shadow-[0_0_15px_rgba(11,97,216,0.5)]' : 'text-gray-400 border-white/10'}`}>
                       {service.title}
                     </span>
                   </div>
                 </div>
               )
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Services;
