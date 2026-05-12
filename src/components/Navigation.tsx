"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Menu, X, Sparkles } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-secondary" />
          <span className="text-2xl font-bold text-primary tracking-tight">
            Aura<span className="font-light">Dental</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-primary-light hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 text-sm font-medium text-primary-light hover:text-secondary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>(555) 123-4567</span>
          </a>
          <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-light transition-all hover:shadow-lg hover:-translate-y-0.5">
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass-dark flex flex-col p-6 gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-lg font-medium hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-secondary text-white px-6 py-3 rounded-full text-sm font-medium mt-4">
            Book Appointment
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
