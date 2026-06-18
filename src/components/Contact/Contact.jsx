import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate sending
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 glow-cyan"
            >
              Get In Touch
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
            >
              Let's Build Something <span className="text-primary text-glow-cyan">Extraordinary.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg mb-12 max-w-lg"
            >
              Have a project in mind? We're ready to bring your vision to life with cutting-edge technology and premium design.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <a href="mailto:luzeetek@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group p-4 rounded-xl glass-panel-light max-w-md">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email Us</p>
                  <p className="font-medium">luzeetek@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-gray-300 p-4 rounded-xl glass-panel-light max-w-md">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="font-medium">Bangalore, India</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex gap-4"
            >
              {[FiTwitter, FiLinkedin, FiInstagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-300">
                  <Icon />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10 rounded-2xl glow-card-cyan relative overflow-hidden"
          >
            {/* Success Overlay */}
            {status === 'success' && (
              <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-md z-10 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4 glow-cyan">
                  <FiSend className="text-2xl" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-dark-600/50 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-primary transition-colors peer"
                  placeholder=" "
                />
                <label htmlFor="name" className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-focus:text-xs peer-focus:top-2 peer-focus:text-primary peer-valid:text-xs peer-valid:top-2">
                  Your Name
                </label>
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-dark-600/50 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-primary transition-colors peer"
                  placeholder=" "
                />
                <label htmlFor="email" className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-focus:text-xs peer-focus:top-2 peer-focus:text-primary peer-valid:text-xs peer-valid:top-2">
                  Email Address
                </label>
              </div>
              
              <div className="relative">
                <textarea 
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-dark-600/50 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-primary transition-colors peer resize-none"
                  placeholder=" "
                ></textarea>
                <label htmlFor="message" className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-focus:text-xs peer-focus:top-2 peer-focus:text-primary peer-valid:text-xs peer-valid:top-2">
                  Project Details
                </label>
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full py-4 rounded-xl bg-primary text-dark-900 font-bold text-lg hover:bg-white transition-all duration-300 glow-cyan btn-magnetic flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'} <FiSend />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
