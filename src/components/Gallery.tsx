"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ComparisonCardProps {
  beforeImg: string;
  afterImg: string;
  title: string;
  category: string;
}

function ComparisonCard({ beforeImg, afterImg, title, category }: ComparisonCardProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isResizing) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isResizing) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleUp = () => setIsResizing(false);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);
    return () => {
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative"
    >
      <div 
        ref={containerRef}
        className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden cursor-ew-resize select-none shadow-xl border border-gray-border bg-soft-gray"
        onMouseDown={() => setIsResizing(true)}
        onTouchStart={() => setIsResizing(true)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image */}
        <Image
          src={afterImg}
          alt={`${title} After`}
          fill
          className="object-cover"
        />

        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-0 z-10 border-r border-white/50 shadow-2xl"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImg}
            alt={`${title} Before`}
            fill
            className="object-cover"
          />
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 z-20 w-1 bg-white flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center border-2 border-primary/10">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-secondary/40 rounded-full"></div>
              <div className="w-1 h-3 bg-secondary/40 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Floating Labels */}
        <div className="absolute top-4 left-4 z-30 pointer-events-none">
          <span className="glass px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest">Before</span>
        </div>
        <div className="absolute top-4 right-4 z-30 pointer-events-none">
          <span className="glass px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest">After</span>
        </div>
      </div>

      <div className="mt-6 px-2">
        <span className="text-secondary text-xs font-bold uppercase tracking-widest block mb-2">{category}</span>
        <h4 className="text-xl font-bold text-primary">{title}</h4>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const transformations = [
    {
      beforeImg: "/smile_before.png",
      afterImg: "/smile_after.png",
      title: "Signature Smile Design",
      category: "Cosmetic Restoration"
    },
    {
      beforeImg: "/implants_before.png",
      afterImg: "/implants_after.png",
      title: "Full Arch Implants",
      category: "Restorative"
    },
    {
      beforeImg: "/ortho_before.png",
      afterImg: "/ortho_after.png",
      title: "Precision Aligners",
      category: "Orthodontics"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">The Gallery</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tight">Artistry in Every Detail</h3>
            <p className="text-lg text-primary-light leading-relaxed">
              Explore our portfolio of life-changing transformations. Our precision-focused approach ensures every smile is a masterpiece of function and beauty.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block bg-soft-gray p-6 rounded-3xl border border-gray-border"
          >
            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Patient Feedback</div>
            <div className="text-secondary font-bold text-2xl">99.2%</div>
            <div className="text-primary-light text-xs">Transformation Satisfaction</div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {transformations.map((item, idx) => (
            <ComparisonCard key={idx} {...item} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <button className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-secondary transition-all shadow-xl hover:-translate-y-1">
            Explore All Transformations
            <span className="text-xl">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
