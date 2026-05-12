"use client";

import { motion } from "framer-motion";
import { Sparkles, Smile, ShieldPlus, Activity, AlignEndHorizontal, Gem } from "lucide-react";

const services = [
  {
    icon: ShieldPlus,
    title: "Dental Implants",
    description: "Permanent, natural-looking replacements for missing teeth that restore full function and supreme confidence.",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Advanced laser whitening treatments to brighten your smile several shades in just one single luxury session.",
  },
  {
    icon: Activity,
    title: "Root Canal",
    description: "Painless endodontic therapy utilizing the latest microscopic technology to save your natural tooth effortlessly.",
  },
  {
    icon: Smile,
    title: "Smile Designing",
    description: "A customized, digital blueprint of your ideal smile, perfectly crafted to match your facial symmetry.",
  },
  {
    icon: AlignEndHorizontal,
    title: "Braces & Aligners",
    description: "Discreet and comfortable orthodontic solutions, including premium clear aligners for a perfectly straight smile.",
  },
  {
    icon: Gem,
    title: "Cosmetic Dentistry",
    description: "Porcelain veneers and complete smile makeovers designed to elevate your natural beauty to its highest potential.",
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-24 bg-[url('/hero_background.png')] bg-cover bg-center bg-fixed relative">
      {/* Light glassmorphism overlay for the entire section to make text readable and feel premium */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">Premium Treatments</h3>
            <p className="text-lg text-primary-light">
              We offer a comprehensive suite of high-end dental services tailored to your unique needs, combining artistry with cutting-edge medical technology.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="glass p-10 rounded-3xl group hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/60 relative overflow-hidden"
            >
              {/* Animated hover gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:text-secondary group-hover:scale-110 transition-all duration-500">
                  <service.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-primary mb-4">{service.title}</h4>
                <p className="text-primary-light leading-relaxed mb-8">
                  {service.description}
                </p>
                <button className="text-primary font-bold hover:text-secondary transition-colors flex items-center gap-2 group/btn">
                  Learn more 
                  <span className="group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
