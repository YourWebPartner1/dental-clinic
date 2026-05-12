"use client";

import { motion, animate, useInView } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Award, BookOpen } from "lucide-react";
import { useEffect, useRef } from "react";

function AnimatedCounter({ from = 0, to, duration = 2, suffix = "", prefix = "" }: { from?: number, to: number, duration?: number, suffix?: string, prefix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const node = nodeRef.current;
      if (node) {
        const controls = animate(from, to, {
          duration,
          ease: "easeOut",
          onUpdate(value) {
            node.textContent = prefix + Math.round(value).toLocaleString() + suffix;
          },
        });
        return () => controls.stop();
      }
    }
  }, [from, to, duration, inView, suffix, prefix]);

  return <span ref={nodeRef} className="tabular-nums">{prefix}{from}{suffix}</span>;
}

export default function AboutDoctor() {
  const qualifications = [
    { icon: Award, text: "Harvard School of Dental Medicine" },
    { icon: BookOpen, text: "FAACD Certified Specialist" },
    { icon: CheckCircle2, text: "Award-winning Cosmetic Dentist" },
  ];

  const stats = [
    { value: 5000, suffix: "+", label: "Happy Patients" },
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "%", label: "Advanced Technology" },
  ];

  return (
    <section id="about" className="py-24 bg-soft-gray relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-light/40 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side - Premium Card Layout */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
              <Image
                src="/doctor_portrait.png"
                alt="Dr. Alexander Sterling"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Experience Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 md:-right-12 glass-dark text-white p-6 rounded-3xl shadow-2xl max-w-[200px]"
            >
              <div className="text-3xl font-bold text-secondary mb-1">
                <AnimatedCounter to={10} suffix="+" />
              </div>
              <div className="text-sm text-gray-300 leading-tight">Years of Transforming Smiles</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Meet Your Specialist</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">Dr. Alexander Sterling</h3>
            <h4 className="text-xl text-primary-light mb-8 italic">DMD, FAACD</h4>
            
            {/* Professional Bio */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-border mb-10">
              <p className="text-lg text-primary-light leading-relaxed mb-6">
                Dr. Sterling is a globally recognized cosmetic dentist dedicated to redefining the standard of modern dental care. With a philosophy rooted in minimally invasive techniques and uncompromising aesthetics, he creates smiles that are as healthy as they are beautiful.
              </p>
              
              <div className="space-y-4">
                {qualifications.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-primary font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Statistics with Animated Counters */}
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + (idx * 0.1) }}
                  className="text-center md:text-left"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-medium text-primary-light leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
