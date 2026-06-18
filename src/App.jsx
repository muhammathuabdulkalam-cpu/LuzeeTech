import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Process from './components/Process/Process';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useLenis } from './hooks/useLenis';

function App() {
  // Initialize smooth scrolling
  useLenis();

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-white selection:bg-primary selection:text-dark-900 relative">
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none z-0"></div>
      <div className="fixed inset-0 noise-bg pointer-events-none z-0"></div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Process />
        <Services />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
