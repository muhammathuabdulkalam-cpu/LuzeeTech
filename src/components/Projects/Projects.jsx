import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiExternalLink, FiSmartphone, FiMonitor } from 'react-icons/fi';

import gymWeb1 from '../../assets/gym-tracker-web-1.png';
import gymWeb2 from '../../assets/gym-tracker-web-2.png';
import gymWeb3 from '../../assets/gym-tracker-web-3.png';
import gymWeb4 from '../../assets/gym-tracker-web-4.png';
import gymWeb5 from '../../assets/gym-tracker-web-5.png';

import gymApp1 from '../../assets/gym-app-1.jpeg';
import gymApp2 from '../../assets/gym-app-2.jpeg';
import gymApp3 from '../../assets/gym-app-3.jpeg';
import gymApp4 from '../../assets/gym-app-4.jpeg';
import gymApp5 from '../../assets/gym-app-5.jpeg';
import gymApp6 from '../../assets/gym-app-6.jpeg';

import gymLandingVideo from '../../assets/gym-landing-page.mov';

// ━━━ Custom Animated Media Carousels ━━━

const WebCarousel = () => {
  const images = [gymWeb1, gymWeb2, gymWeb3, gymWeb4, gymWeb5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length, isInView]);
  
  return (
    <div ref={containerRef} className="w-full relative flex flex-col items-center justify-end pt-8 sm:pt-10 px-4 sm:px-8 bg-[#05050a] group-hover:scale-[1.02] transition-transform duration-1000">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/5 z-0 pointer-events-none"></div>

      {/* CSS MacBook Pro Frame */}
      <div className="relative w-full max-w-[600px] aspect-[16/10] bg-black rounded-t-xl sm:rounded-t-2xl border-4 sm:border-[8px] border-[#111] shadow-2xl flex flex-col z-10 overflow-visible mt-2 sm:mt-0">
        
        {/* MacBook Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-3 sm:h-4 bg-[#111] rounded-b-xl sm:rounded-b-[14px] z-20 flex justify-center items-center">
          <div className="w-1.5 h-1.5 bg-[#0a0a0a] rounded-full shadow-[0_0_2px_rgba(255,255,255,0.2)] border border-white/10"></div>
        </div>
        
        {/* Screen Area */}
        <div className="flex-1 w-full bg-[#111] relative overflow-hidden">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out ${i === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.97]'} z-10`}
            >
              <img 
                src={img} 
                alt={`Web Dashboard Screenshot ${i}`} 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
          
          {/* Progress indicators inside screen */}
          <div className="absolute bottom-2 left-0 w-full flex justify-center gap-2 z-20">
            {images.map((_, i) => (
              <div key={i} className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-6 bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]' : 'w-1.5 bg-white/40'}`}></div>
            ))}
          </div>
        </div>

        {/* MacBook Keyboard Deck Base */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[115%] sm:w-[110%] h-3 sm:h-4 bg-[#9ca3af] rounded-t-[2px] rounded-b-xl sm:rounded-b-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_15px_25px_rgba(0,0,0,0.8)] flex justify-center z-30">
          <div className="w-1/4 h-1 sm:h-1.5 bg-[#4b5563] rounded-b-md shadow-inner"></div>
        </div>
      </div>
      
      {/* Spacer to account for absolute keyboard base */}
      <div className="h-4 sm:h-6"></div>
    </div>
  );
};

const MobileCarousel = () => {
  const images = [gymApp1, gymApp2, gymApp3, gymApp4, gymApp5, gymApp6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length, isInView]);
  
  return (
    <div ref={containerRef} className="w-full relative flex items-center justify-center py-6 sm:py-8 px-4 bg-[#0a0514] group-hover:scale-[1.02] transition-transform duration-1000">
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-purple-500/5 z-0 pointer-events-none"></div>
      
      {/* CSS iPhone 17 Pro Max Frame */}
      <div className="relative w-[65%] sm:w-[55%] max-w-[280px] aspect-[9/19.5] bg-black rounded-[2rem] sm:rounded-[2.5rem] border-[3px] sm:border-[4px] border-[#4a4a52] shadow-[0_0_0_1px_#111,0_20px_40px_rgba(0,0,0,0.6)] p-[3px] sm:p-1 z-10 box-content">
        
        {/* Dynamic Island */}
        <div className="absolute top-2.5 sm:top-3 left-1/2 -translate-x-1/2 w-[35%] h-4 sm:h-5 bg-black rounded-full z-30 flex items-center justify-between px-1.5">
           <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#111] border border-white/5"></div>
           <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-blue-900/40"></div>
        </div>
        
        {/* Screen Area */}
        <div className="w-full h-full bg-[#111] rounded-[1.7rem] sm:rounded-[2.2rem] relative overflow-hidden">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out ${i === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.97]'} z-10`}
            >
              <img 
                src={img} 
                alt={`Mobile App Screenshot ${i}`} 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}

          {/* Progress indicators inside screen */}
          <div className="absolute bottom-2 sm:bottom-3 left-0 w-full flex justify-center gap-1.5 z-20">
            {images.map((_, i) => (
              <div key={i} className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-4 bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]' : 'w-1.5 bg-white/40'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoBanner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(e => console.log("Video play error:", e));
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.2 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full relative flex flex-col items-center justify-end pt-8 sm:pt-12 px-4 sm:px-8 bg-[#02040a] group-hover:scale-[1.02] transition-transform duration-1000">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/5 z-0 pointer-events-none"></div>

      {/* CSS MacBook Pro Frame (Larger for full width) */}
      <div className="relative w-full max-w-[800px] aspect-[16/10] bg-black rounded-t-xl sm:rounded-t-[1.5rem] border-4 sm:border-[10px] border-[#111] shadow-[0_30px_60px_rgba(0,0,0,0.9)] flex flex-col z-10 overflow-visible mt-2 sm:mt-0">
        
        {/* MacBook Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-32 h-3.5 sm:h-5 bg-[#111] rounded-b-xl sm:rounded-b-[18px] z-20 flex justify-center items-center">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0a0a0a] rounded-full shadow-[0_0_2px_rgba(255,255,255,0.2)] border border-white/10"></div>
        </div>
        
        {/* Screen Area */}
        <div className="flex-1 w-full bg-[#000] relative overflow-hidden rounded-sm sm:rounded-lg border border-white/5">
          <video 
            ref={videoRef}
            src={gymLandingVideo} 
            loop 
            muted 
            playsInline
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover opacity-95"
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e18]/80 via-transparent to-[#0d0e18]/20 pointer-events-none mix-blend-overlay"></div>
      </div>

      {/* MacBook Keyboard Deck Base */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[115%] sm:w-[110%] h-3.5 sm:h-5 bg-[#9ca3af] rounded-t-[2px] rounded-b-xl sm:rounded-b-[1.5rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_15px_25px_rgba(0,0,0,0.8)] flex justify-center z-30">
        <div className="w-1/4 h-1.5 sm:h-2 bg-[#4b5563] rounded-b-md shadow-inner"></div>
      </div>
    </div>
    
    {/* Spacer to account for absolute keyboard base */}
    <div className="h-4 sm:h-8"></div>
  </div>
);
}


const projectsData = [
  {
    title: "Tranzio - Web Platform",
    description: "A complete fitness ecosystem featuring workout tracking, diet logging, and progress analytics. Full-featured dashboard built with React and Tailwind CSS.",
    tags: ["React", "Tailwind", "Node.js", "Vite"],
    links: [
      { name: "Launch Web App", icon: <FiMonitor />, url: "https://gym-tracker-1-8n34.onrender.com/" }
    ],
    banner: <WebCarousel />,
    colSpan: "md:col-span-2 lg:col-span-2",
    glowColor: "rgba(168,85,247,0.25)" // Purple glow
  },
  {
    title: "Tranzio Mobile App",
    description: "Standalone mobile application offering seamless on-the-go tracking and personalized workout plans. Built for iOS and Android.",
    tags: ["React Native", "Expo", "Redux"],
    links: [
      { name: "Download Expo Build", icon: <FiSmartphone />, url: "https://expo.dev/accounts/muhammathuabdulkalam/projects/GYM-APP/builds/ffadc944-1814-420d-8a3b-1ca49cca8179" }
    ],
    banner: <MobileCarousel />,
    colSpan: "md:col-span-1 lg:col-span-1",
    glowColor: "rgba(236,72,153,0.2)" // Pink glow
  },
  {
    title: "Tranzio Landing Page",
    description: "High-performance marketing website designed to showcase the Tranzio fitness ecosystem, featuring cinematic video backgrounds and smooth scrolling.",
    tags: ["React", "Vite", "GSAP", "Tailwind"],
    links: [
      { name: "View Live Site", icon: <FiExternalLink />, url: "https://gym-tracker-website-six.vercel.app/" }
    ],
    banner: <VideoBanner />,
    colSpan: "md:col-span-3 lg:col-span-3", // Full width bottom row
    glowColor: "rgba(0,240,255,0.2)" // Cyan glow
  }
];

const BentoCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Update dynamic spotlight position
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(800px circle at ${x}px ${y}px, ${project.glowColor}, transparent 60%)`;
    }
  };

  const handleMouseLeave = () => {
    // Reset spotlight to center-top
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(800px circle at 50% 0%, ${project.glowColor}, transparent 60%)`;
    }
  };

  return (
  <div 
    ref={cardRef}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    className={`bento-card-${index} group relative rounded-3xl bg-[#0d0e18] border border-white/[0.07] hover:border-white/15 transition-colors duration-500 flex flex-col ${project.colSpan || ''}`}
  >
    {/* Inner wrapper with hidden overflow for the banners, but allowing 3D pop */}
    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0">
      {/* Hover spotlight glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl z-10"
        style={{ background: `radial-gradient(800px circle at 50% 0%, ${project.glowColor}, transparent 60%)` }}
      />
    </div>
    
    {/* Top accent line */}
    <div
      className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 rounded-t-3xl"
      style={{ background: `linear-gradient(90deg, transparent, ${project.glowColor.replace('0.25', '0.8').replace('0.2', '0.8')}, transparent)` }}
    />
    
    {/* Banner Section */}
    <div className="w-full border-b border-white/[0.05] relative z-10 rounded-t-3xl overflow-hidden">
      {project.banner}
    </div>

    {/* Content Section */}
    <div className="p-6 sm:p-8 flex-1 flex flex-col relative z-20 bg-[#0d0e18] rounded-b-3xl">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl sm:text-2xl font-display font-bold text-white transition-colors">
          {project.title}
        </h3>
      </div>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag, i) => (
          <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10 shadow-lg">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        {project.links.map((link, i) => (
          <a 
            key={i} 
            href={link.url}
            target={link.url !== "#" ? "_blank" : "_self"}
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all shadow-xl hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
          >
            {link.icon} {link.name}
          </a>
        ))}
      </div>
    </div>
  </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Desktop animations
        gsap.fromTo('.bento-card-0',
          { x: -150, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.bento-card-0', start: 'top 80%', toggleActions: 'play none none none' } }
        );
        gsap.fromTo('.bento-card-1',
          { x: 150, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.bento-card-1', start: 'top 80%', toggleActions: 'play none none none' } }
        );
        gsap.fromTo('.bento-card-2',
          { y: 150, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.bento-card-2', start: 'top 80%', toggleActions: 'play none none none' } }
        );
      });

      mm.add("(max-width: 767px)", () => {
        // Mobile animations (smooth fade-in from bottom)
        gsap.fromTo('.bento-card-0',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0, ease: 'power2.out', scrollTrigger: { trigger: '.bento-card-0', start: 'top 85%', toggleActions: 'play none none none' } }
        );
        gsap.fromTo('.bento-card-1',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0, ease: 'power2.out', scrollTrigger: { trigger: '.bento-card-1', start: 'top 85%', toggleActions: 'play none none none' } }
        );
        gsap.fromTo('.bento-card-2',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0, ease: 'power2.out', scrollTrigger: { trigger: '.bento-card-2', start: 'top 85%', toggleActions: 'play none none none' } }
        );
      });

      // Section title reveal
      gsap.fromTo('.project-title',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.85, stagger: 0.1, ease: 'power4.out',
          scrollTrigger: { trigger: '.project-header', start: 'top 88%' },
        }
      );

      // Typewriter effect for "Crafted by LuzeeTech"
      gsap.from('.typing-text-container', {
        width: 0,
        duration: 1.5,
        ease: "steps(20)", // Typewriter style
        delay: 0.2, // Let it fade up first
        scrollTrigger: { trigger: '.project-header', start: 'top 88%' }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-10 lg:py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header (Removed portfolio links, completely business focused) */}
        <div className="project-header flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="overflow-hidden whitespace-nowrap typing-text-container w-max mb-2">
              <div className="flex items-center gap-1.5 border-r-2 border-transparent pr-1">
                <span className="text-gray-400 font-semibold tracking-wider uppercase text-sm">Crafted by</span>
                <div className="font-display font-bold tracking-tight text-white flex items-center text-[15px] mt-[-2px]">
                  <span className="text-glow-cyan">Luzee</span>
                  <span className="text-primary">&nbsp;Tech.</span>
                  {/* <span className="inline-block w-[2px] h-[18px] ml-1.5 bg-primary animate-pulse"></span> */}
                </div>
              </div>
            </div>
            <h2 className="project-title text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Our Projects
            </h2>
            <p className="project-title text-gray-400 text-sm max-w-md">
              A selection of premium, high-performance applications delivered by the LuzeeTech team.
            </p>
          </div>
        </div>

        {/* Bento Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 perspective-[1000px]">
          {projectsData.map((project, index) => (
            <BentoCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
