import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiSearch, FiPenTool, FiCode, FiSend, FiLayout, FiActivity } from 'react-icons/fi';

export default function Process() {
  const containerRef = useRef(null);
  const gridRef      = useRef(null);

  /* ─────────────── Feature copy ─────────────── */
  const processData = [
    {
      title: 'Our Methodology',
      desc:  'A streamlined, four-step process designed to turn your ideas into high-performing digital realities. Scroll to explore.',
      accent: 'text-primary',
      icon:   <FiActivity size={22} />,
    },
    {
      title:  '1. Discovery & Strategy',
      desc:   'We start by understanding your goals, target audience, and technical requirements to create a bulletproof roadmap.',
      accent: 'text-primary',
      icon:   <FiSearch size={22} />,
    },
    {
      title:  '2. UI/UX Design',
      desc:   'Our design team crafts pixel-perfect, conversion-optimized interfaces that resonate with your brand identity.',
      accent: 'text-secondary',
      icon:   <FiPenTool size={22} />,
    },
    {
      title:  '3. Full-Stack Development',
      desc:   'We write clean, scalable code using the latest tech stacks (React, Node.js) to build robust web and mobile apps.',
      accent: 'text-primary',
      icon:   <FiCode size={22} />,
    },
    {
      title:  '4. Testing & Delivery',
      desc:   'Rigorous QA testing ensures a bug-free experience. We deploy your project seamlessly and offer ongoing support.',
      accent: 'text-secondary',
      icon:   <FiSend size={22} />,
    },
  ];

  /* ─────────────── GSAP SETUP ─────────────── */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.config({ ignoreMobileResize: true });

    const isMobileDevice = window.innerWidth < 768;
    if (isMobileDevice) {
      ScrollTrigger.normalizeScroll(true);
    }

    const leftSlides = gsap.utils.toArray('.process-left-slide');
    gsap.set(leftSlides.slice(1), { opacity: 0, y: 30, display: 'none' });

    /* Helper: transition text slides */
    const swapText = (tl, hideIdx, showIdx, label) => {
      tl.to(leftSlides[hideIdx], { opacity: 0, y: -20, display: 'none', duration: 0.4 }, label);
      tl.to(leftSlides[showIdx], { display: 'flex', opacity: 1, y: 0,   duration: 0.5 }, `${label}+=0.4`);
    };

    /* Helper: activate stepper dot */
    const activateDot = (tl, idx, color, label) => {
      tl.to(`.step-indicator-${idx}`, { backgroundColor: color, scale: 1.3, boxShadow: `0 0 10px ${color}`, duration: 0.5 }, label);
      tl.to(`.step-label-${idx}`,     { color: '#ffffff', duration: 0.5 }, label);
    };
    const deactivateDot = (tl, idx, label) => {
      tl.to(`.step-indicator-${idx}`, { backgroundColor: 'rgba(255,255,255,0.12)', scale: 1, boxShadow: 'none', duration: 0.5 }, label);
      tl.to(`.step-label-${idx}`,     { color: 'rgba(255,255,255,0.28)', duration: 0.5 }, label);
    };

    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      const { isMobile } = context.conditions;

      const focusScale = isMobile ? 1.85 : 1.25;
      const explodeScale = isMobile ? 0.9 : 0.95;
      const card0ExplodeX = -80;
      const card0ExplodeY = -60;
      const card1ExplodeX = 80;
      const card1ExplodeY = -60;
      const card2ExplodeX = -80;
      const card2ExplodeY = 60;
      const card3ExplodeX = 80;
      const card3ExplodeY = 60;

      /* ── Main pinned timeline ── */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger:       containerRef.current,
          start:         'top top',
          end:           '+=500%',
          pin:           true,
          scrub:         isMobile ? 0.35 : 1,
          anticipatePin: 1,
        },
      });

      /* STEP 1 — Explode */
      tl.add('explode')
        .to('.proc-card-0', { x: card0ExplodeX, y: card0ExplodeY, scale: explodeScale, rotateY:  15, duration: 1 }, 'explode')
        .to('.proc-card-1', { x: card1ExplodeX, y: card1ExplodeY, scale: explodeScale, rotateY: -15, duration: 1 }, 'explode')
        .to('.proc-card-2', { x: card2ExplodeX, y: card2ExplodeY, scale: explodeScale, rotateY:  15, duration: 1 }, 'explode')
        .to('.proc-card-3', { x: card3ExplodeX, y: card3ExplodeY, scale: explodeScale, rotateY: -15, duration: 1 }, 'explode')
        .to({}, { duration: 0.5 });

      /* STEP 2 — Focus card 0 */
      tl.add('focus-0');
      swapText(tl, 0, 1, 'focus-0');
      activateDot(tl, 1, '#00F0FF', 'focus-0');
      tl.to('.proc-card-0', { x: 135, y: 135, scale: focusScale, rotateY: 0, z: 150, opacity: 1, zIndex: 50, duration: 1.2 }, 'focus-0');
      tl.to('.proc-card-1', { opacity: 0, scale: 0.85, z: -100, duration: 1 }, 'focus-0');
      tl.to('.proc-card-2', { opacity: 0, scale: 0.85, z: -100, duration: 1 }, 'focus-0');
      tl.to('.proc-card-3', { opacity: 0, scale: 0.85, z: -100, duration: 1 }, 'focus-0');
      tl.to({}, { duration: 0.6 });

      /* STEP 3 — Focus card 1 */
      tl.add('focus-1');
      swapText(tl, 1, 2, 'focus-1');
      deactivateDot(tl, 1, 'focus-1');
      activateDot(tl, 2, '#007DFF', 'focus-1');
      tl.to('.proc-card-0', { x: card0ExplodeX, y: card0ExplodeY, scale: explodeScale, rotateY: 15, z: 0, opacity: 0, zIndex: 10, duration: 1.2 }, 'focus-1');
      tl.to('.proc-card-1', { x: -135, y: 135, scale: focusScale, rotateY: 0, z: 150, opacity: 1, zIndex: 50, duration: 1.2 }, 'focus-1');
      tl.to('.proc-card-2', { opacity: 0, scale: 0.85, z: -100, duration: 1 }, 'focus-1');
      tl.to('.proc-card-3', { opacity: 0, scale: 0.85, z: -100, duration: 1 }, 'focus-1');
      tl.to({}, { duration: 0.6 });

      /* STEP 4 — Focus card 2 */
      tl.add('focus-2');
      swapText(tl, 2, 3, 'focus-2');
      deactivateDot(tl, 2, 'focus-2');
      activateDot(tl, 3, '#00F0FF', 'focus-2');
      tl.to('.proc-card-0', { opacity: 0, scale: 0.85, z: -100, duration: 1 }, 'focus-2');
      tl.to('.proc-card-1', { x: card1ExplodeX, y: card1ExplodeY, scale: explodeScale, rotateY: -15, z: 0, opacity: 0, zIndex: 10, duration: 1.2 }, 'focus-2');
      tl.to('.proc-card-2', { x: 135, y: -135, scale: focusScale, rotateY: 0, z: 150, opacity: 1, zIndex: 50, duration: 1.2 }, 'focus-2');
      tl.to('.proc-card-3', { opacity: 0, scale: 0.85, z: -100, duration: 1 }, 'focus-2');
      tl.to({}, { duration: 0.6 });

      /* STEP 5 — Focus card 3 */
      tl.add('focus-3');
      swapText(tl, 3, 4, 'focus-3');
      deactivateDot(tl, 3, 'focus-3');
      activateDot(tl, 4, '#007DFF', 'focus-3');
      tl.to('.proc-card-0', { opacity: 0, scale: 0.85, z: -100, duration: 1 }, 'focus-3');
      tl.to('.proc-card-1', { opacity: 0, scale: 0.85, z: -100, duration: 1 }, 'focus-3');
      tl.to('.proc-card-2', { x: card2ExplodeX, y: card2ExplodeY, scale: explodeScale, rotateY: 15, z: 0, opacity: 0, zIndex: 10, duration: 1.2 }, 'focus-3');
      tl.to('.proc-card-3', { x: -135, y: -135, scale: focusScale, rotateY: 0, z: 150, opacity: 1, zIndex: 50, duration: 1.2 }, 'focus-3');
      tl.to({}, { duration: 0.6 });

      /* STEP 6 — Reassemble */
      tl.add('assemble')
        .to('.proc-card-0', { x: 0, y: 0, scale: 1, rotateY: 0, z: 0, opacity: 1, zIndex: 10, duration: 1.2 }, 'assemble')
        .to('.proc-card-1', { x: 0, y: 0, scale: 1, rotateY: 0, z: 0, opacity: 1, zIndex: 10, duration: 1.2 }, 'assemble')
        .to('.proc-card-2', { x: 0, y: 0, scale: 1, rotateY: 0, z: 0, opacity: 1, zIndex: 10, duration: 1.2 }, 'assemble')
        .to('.proc-card-3', { x: 0, y: 0, scale: 1, rotateY: 0, z: 0, opacity: 1, zIndex: 10, duration: 1.2 }, 'assemble')
        .to({}, { duration: 0.5 });
    });

    return () => {
      mm.revert();
      ScrollTrigger.normalizeScroll(false);
    };
  }, []);

  /* ─────────────── RENDER ─────────────── */
  return (
    <section
      ref={containerRef}
      id="process"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden z-20"
      style={{ perspective: 1200 }}
    >
      <div className="max-w-6xl w-full h-full flex flex-col md:flex-row items-center justify-center px-5 md:px-12 gap-6 md:gap-0">

        {/* ━━━ LEFT: Description + Stepper ━━━ */}
        <div className="w-full md:w-[44%] flex flex-col justify-center z-20 order-2 md:order-1 pb-4 md:pb-0">

          <div className="relative h-[180px] sm:h-[220px] md:h-[260px] w-full">
            {processData.map((item, idx) => (
              <div
                key={idx}
                className="process-left-slide absolute inset-0 flex flex-col justify-center"
                style={{ display: idx === 0 ? 'flex' : 'none' }}
              >
                <div className="flex items-center gap-3 mb-3 md:mb-5">
                  <div className={`w-9 h-9 md:w-11 md:h-11 rounded-xl bg-white/5 border border-white/10
                                   flex items-center justify-center ${item.accent}`}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 font-display">
                    {idx === 0 ? 'OVERVIEW' : `STEP 0${idx}`}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white mb-3 leading-none">
                  {item.title}
                </h2>
                <p className="text-gray-400 font-medium leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 md:gap-3.5 border-t border-white/5 pt-4 md:pt-6 mt-2 md:mt-4">
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-gray-600 block mb-1">
              Methodology Index
            </span>
            {processData.slice(1).map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className={`step-indicator-${idx + 1} w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white/10 transition-all duration-300`} />
                <span className={`step-label-${idx + 1} text-[10px] md:text-xs font-bold uppercase tracking-wider text-white/30 transition-colors duration-300 font-display`}>
                  {item.title.split('. ')[1]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ━━━ RIGHT: 3-D Exploded card grid ━━━ */}
        <div
          className="w-full md:w-[52%] relative order-1 md:order-2 z-10
                     h-[260px] sm:h-[310px] md:h-[520px]"
          style={{ transformStyle: 'preserve-3d', overflow: 'visible' }}
        >
          <div
            ref={gridRef}
            className="absolute w-[520px] h-[520px]
                       scale-[0.44] xs:scale-[0.54] sm:scale-[0.66] md:scale-[0.87] lg:scale-100"
            style={{
              transformStyle:  'preserve-3d',
              transformOrigin: 'center center',
              top:             '50%',
              left:            '50%',
              marginTop:       '-260px',
              marginLeft:      '-260px',
            }}
          >
            {/* Box 1: Discovery */}
            <div className="proc-card-0 absolute top-0 left-0 w-[250px] h-[250px] p-2" style={{ transformStyle: 'preserve-3d', zIndex: 20, willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}>
              <div className="w-full h-full rounded-3xl glass-panel glow-card-cyan flex flex-col items-center justify-center p-6 text-center border-primary/20">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-4 border border-primary/20 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <FiSearch />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-display">Discovery</h3>
                <p className="text-xs text-gray-400">Research & Architecture</p>
              </div>
            </div>

            {/* Box 2: Design */}
            <div className="proc-card-1 absolute top-0 right-0 w-[250px] h-[250px] p-2" style={{ transformStyle: 'preserve-3d', zIndex: 20, willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}>
              <div className="w-full h-full rounded-3xl glass-panel glow-card-blue flex flex-col items-center justify-center p-6 text-center border-secondary/20">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-3xl mb-4 border border-secondary/20 shadow-[0_0_15px_rgba(0,125,255,0.3)]">
                  <FiLayout />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-display">UI/UX Design</h3>
                <p className="text-xs text-gray-400">Wireframes & Prototyping</p>
              </div>
            </div>

            {/* Box 3: Develop */}
            <div className="proc-card-2 absolute bottom-0 left-0 w-[250px] h-[250px] p-2" style={{ transformStyle: 'preserve-3d', zIndex: 20, willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}>
              <div className="w-full h-full rounded-3xl glass-panel glow-card-cyan flex flex-col items-center justify-center p-6 text-center border-primary/20">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-4 border border-primary/20 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <FiCode />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-display">Development</h3>
                <p className="text-xs text-gray-400">Frontend & Backend</p>
              </div>
            </div>

            {/* Box 4: Deploy */}
            <div className="proc-card-3 absolute bottom-0 right-0 w-[250px] h-[250px] p-2" style={{ transformStyle: 'preserve-3d', zIndex: 20, willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}>
              <div className="w-full h-full rounded-3xl glass-panel glow-card-blue flex flex-col items-center justify-center p-6 text-center border-secondary/20">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-3xl mb-4 border border-secondary/20 shadow-[0_0_15px_rgba(0,125,255,0.3)]">
                  <FiSend />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-display">Deployment</h3>
                <p className="text-xs text-gray-400">Testing & Launch</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
