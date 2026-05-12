"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Stethoscope, HeartPulse } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Image & Animated Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_background.png"
          alt="Modern Dental Clinic"
          fill
          className="object-cover opacity-50 mix-blend-luminosity"
          priority
        />
        {/* Soft glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20 backdrop-blur-[2px]"></div>
        
        {/* Animated Gradient Effects */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary-light/60 rounded-full blur-[100px] mix-blend-multiply"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] mix-blend-multiply"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-[55%] pt-12 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white font-medium text-sm mb-6 shadow-md">
              <ShieldCheck className="w-4 h-4 text-secondary-light" />
              <span>Trusted by 5,000+ Patients</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-primary leading-[1.1] mb-6 tracking-tight">
              Advanced Dental Care for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Confident Smiles</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-light mb-10 max-w-lg leading-relaxed">
              Experience professional dental care designed around your comfort. We combine advanced technology with compassionate expertise to build lasting patient trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-light transition-all flex items-center justify-center gap-2 shadow-[0_8px_30px_rgb(15,23,42,0.2)] hover:shadow-[0_8px_30px_rgb(15,23,42,0.4)] hover:-translate-y-1">
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="glass text-primary px-8 py-4 rounded-full font-medium hover:bg-white hover:text-green-600 transition-all flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </button>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex flex-wrap gap-8 pt-8 border-t border-gray-border/60"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-secondary" />
              </div>
              <div className="font-bold text-primary text-sm leading-tight">Experienced<br/>Doctors</div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-secondary" />
              </div>
              <div className="font-bold text-primary text-sm leading-tight">Modern<br/>Equipment</div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-secondary" />
              </div>
              <div className="font-bold text-primary text-sm leading-tight">Patient<br/>Satisfaction</div>
            </div>
          </motion.div>
        </div>

        {/* Floating Glassmorphism UI Elements */}
        <div className="w-full md:w-[45%] relative h-[550px] hidden md:block">
          <motion.div
            animate={{ y: [0, -25, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-16 right-10 glass p-6 rounded-3xl max-w-[240px] shadow-2xl backdrop-blur-md border border-white/40"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
              <Stethoscope className="w-6 h-6 text-primary" />
            </div>
            <div className="font-bold text-primary text-lg">Expert Care</div>
            <div className="text-sm text-primary-light mt-1">Leading specialists in cosmetic & restorative dentistry.</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 25, 0], x: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-24 left-4 glass p-6 rounded-3xl max-w-[260px] shadow-2xl backdrop-blur-md border border-white/40"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-soft-gray border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
                    <Image src="/doctor_portrait.png" alt="Patient" width={40} height={40} className="object-cover scale-150" />
                  </div>
                ))}
              </div>
              <div className="font-bold text-primary text-xl">5.0 ★</div>
            </div>
            <div className="text-sm font-medium text-primary-light">"The most relaxing dental visit I've ever had."</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
