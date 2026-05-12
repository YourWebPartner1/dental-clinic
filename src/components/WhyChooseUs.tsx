"use client";

import { motion } from "framer-motion";
import { Coffee, ShieldCheck, Clock, HeartHandshake, Sparkle } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Coffee,
      title: "Spa-Like Comfort",
      description: "Enjoy our relaxation menu including noise-canceling headphones, warm neck pillows, and complimentary beverages."
    },
    {
      icon: Clock,
      title: "Respect For Your Time",
      description: "We never double-book. Your appointment time is reserved exclusively for you with zero wait times."
    },
    {
      icon: ShieldCheck,
      title: "Advanced Technology",
      description: "From 3D imaging to painless laser treatments, we invest in the best tech for superior results."
    },
    {
      icon: HeartHandshake,
      title: "Transparent Pricing",
      description: "Clear, upfront treatment plans with no hidden fees. We also assist with insurance coordination."
    }
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] opacity-10"
      >
        <Sparkle size={120} />
      </motion.div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent skew-x-12 translate-x-32 hidden lg:block"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[40%]"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
              The Aura Standard
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Dentistry,<br/>
              <span className="text-secondary">Redefined.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              We've redesigned the entire patient journey. From the moment you step into our boutique lounge to the post-treatment care, expect a level of service rarely found in medicine.
            </p>
            <button className="group bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-secondary hover:text-white transition-all shadow-xl flex items-center gap-3">
              Book Your Visit
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>

          <div className="w-full lg:w-[60%] grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-dark p-10 rounded-[2.5rem] border border-white/5 hover:border-secondary/30 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary/20 transition-colors duration-500">
                  <feature.icon className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
