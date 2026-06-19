import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiClock, FiCalendar, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    duration: '15 mins',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const text = `Hello LuzeeTech!\nI'd like to book a call:\n\nName: ${formData.name}\nEmail: ${formData.email}\nDate: ${formData.date}\nTime: ${formData.time}\nDuration: ${formData.duration}\n\nCall Details: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919894924809?text=${encodeURIComponent(text)}`;
    
    setTimeout(() => {
      setStatus('success');
      window.open(whatsappUrl, '_blank');
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        duration: '15 mins',
        message: ''
      });
      setTimeout(() => setStatus('idle'), 3000);
    }, 800);
  };

  return (
    <section id="book-call" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Booking Info */}
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 glow-cyan"
            >
              Schedule a Call
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
            >
              Book an <span className="text-primary text-glow-cyan">Appointment</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg mb-12 max-w-lg font-light leading-relaxed"
            >
              Let's align on your business goals, app feature specs, or web layouts. Select your preferred slot for a consultation (Minimum 15 minutes).
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Duration Notice */}
              <div className="flex items-center gap-4 text-gray-300 p-4 rounded-xl glass-panel-light max-w-md border border-primary/20">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FiClock className="text-xl" />
                </div>
                <div>
                  <p className="text-xs text-primary uppercase tracking-wider mb-1 font-semibold">Call Duration</p>
                  <p className="font-bold text-white text-sm sm:text-base">Minimum 15 mins introductory call</p>
                </div>
              </div>

              {/* Email link */}
              <a href="mailto:luzeetek@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group p-4 rounded-xl glass-panel-light max-w-md">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email Us</p>
                  <p className="font-medium text-sm sm:text-base">luzeetek@gmail.com</p>
                </div>
              </a>
              
              {/* Location */}
              <div className="flex items-center gap-4 text-gray-300 p-4 rounded-xl glass-panel-light max-w-md">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="font-medium text-sm sm:text-base">Bangalore, India</p>
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

          {/* Scheduling Form */}
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
                <h3 className="text-2xl font-display font-bold text-white mb-2">Redirecting to WhatsApp!</h3>
                <p className="text-gray-400">Complete and send your appointment booking to our WhatsApp line.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
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
              
              {/* Email */}
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

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date Input */}
                <div className="relative">
                  <input 
                    type="date" 
                    id="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-dark-600/50 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-primary transition-colors peer [color-scheme:dark]"
                  />
                  <label htmlFor="date" className="absolute left-4 top-1.5 text-gray-500 text-[10px] uppercase tracking-wider font-semibold">
                    Preferred Date
                  </label>
                </div>

                {/* Time Input */}
                <div className="relative">
                  <input 
                    type="time" 
                    id="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full bg-dark-600/50 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-primary transition-colors peer [color-scheme:dark]"
                  />
                  <label htmlFor="time" className="absolute left-4 top-1.5 text-gray-500 text-[10px] uppercase tracking-wider font-semibold">
                    Preferred Time
                  </label>
                </div>
              </div>

              {/* Duration Picker */}
              <div className="flex flex-col gap-2">
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Call Duration (Min. 15 Mins)
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {['15 mins', '30 mins', '60 mins'].map((dur) => (
                    <button
                      key={dur}
                      type="button"
                      onClick={() => setFormData({...formData, duration: dur})}
                      className={`py-3 rounded-xl border text-xs font-bold transition-all duration-300 ${
                        formData.duration === dur
                          ? 'border-primary bg-primary/10 text-primary shadow-[0_0_10px_rgba(0,132,255,0.2)]'
                          : 'border-white/10 bg-dark-600/20 text-gray-400 hover:border-white/20'
                      }`}
                    >
                      {dur === '15 mins' ? '15 mins (Min)' : dur}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Message Details */}
              <div className="relative">
                <textarea 
                  id="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-dark-600/50 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-primary transition-colors peer resize-none"
                  placeholder=" "
                ></textarea>
                <label htmlFor="message" className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-focus:text-xs peer-focus:top-2 peer-focus:text-primary peer-valid:text-xs peer-valid:top-2">
                  Call Objectives / Project Details
                </label>
              </div>

              {/* Submit CTA */}
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full py-4 rounded-xl bg-primary text-dark-900 font-bold text-lg hover:bg-white transition-all duration-300 glow-cyan btn-magnetic flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Opening WhatsApp...' : 'Book Call via WhatsApp'} <FiCalendar />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
