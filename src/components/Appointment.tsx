"use client";

import { motion } from "framer-motion";
import { User, Phone, Mail, MessageSquare, Calendar, Stethoscope, Smartphone, MessageCircle } from "lucide-react";

export default function Appointment() {
  const treatments = [
    "Cosmetic Dentistry",
    "Dental Implants",
    "Root Canal",
    "Smile Designing",
    "Braces & Aligners",
    "General Checkup"
  ];

  return (
    <section id="appointment" className="py-24 bg-[url('/hero_background.png')] bg-cover bg-center bg-fixed relative overflow-hidden">
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Side: Content & Quick Contact */}
          <div className="w-full lg:w-1/2 text-white">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
                Direct Booking
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Schedule Your<br/>
                <span className="text-secondary">Exclusive Visit</span>
              </h2>
              <p className="text-gray-300 text-lg mb-12 leading-relaxed max-w-lg">
                Your journey to a perfect smile starts with a private consultation. Choose your preferred contact method or fill out the concierge form.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <a href="tel:+15551234567" className="flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-bold uppercase tracking-tighter">Call Now</div>
                    <div className="text-lg font-bold">(555) 123-4567</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-bold uppercase tracking-tighter">WhatsApp Us</div>
                    <div className="text-lg font-bold">Live Chat</div>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-6 opacity-40">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-gray-400"></div>
                  ))}
                </div>
                <p className="text-sm">Joined by 500+ happy patients this month</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Glassmorphism Form */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass p-8 md:p-12 rounded-[3rem] border border-white/20 shadow-2xl relative overflow-hidden"
            >
              <h3 className="text-3xl font-bold text-primary mb-8">Appointment Request</h3>
              
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-secondary transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/50 border border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    />
                  </div>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-secondary transition-colors" />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/50 border border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative group">
                    <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-secondary transition-colors z-10 pointer-events-none" />
                    <select defaultValue="" className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/50 border border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all appearance-none cursor-pointer">
                      <option value="" disabled>Select Treatment</option>
                      {treatments.map((t, idx) => (
                        <option key={idx} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="relative group">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-secondary transition-colors z-10 pointer-events-none" />
                    <input 
                      type="date" 
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/50 border border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all cursor-pointer"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400 group-focus-within:text-secondary transition-colors" />
                  <textarea 
                    placeholder="Tell us about your dental goals..." 
                    rows={4}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/50 border border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold hover:bg-secondary transition-all shadow-xl hover:shadow-secondary/20 active:scale-95 group flex items-center justify-center gap-3">
                  Confirm Booking
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </form>
              
              <p className="text-[10px] text-center text-primary-light mt-6 font-bold uppercase tracking-widest opacity-60">
                Encrypted & Private Information
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
