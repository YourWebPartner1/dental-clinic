"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle, Quote } from "lucide-react";

const reviews = [
  {
    name: "James Anderson",
    initial: "J",
    date: "2 weeks ago",
    text: "The most professional dental experience I've ever had. From the moment I walked in, I felt like a VIP. The porcelain veneer work Dr. Sterling did is absolutely flawless. Highly recommend if you want the best.",
    rating: 5,
    verified: true
  },
  {
    name: "Sophia Martinez",
    initial: "S",
    date: "1 month ago",
    text: "I was always nervous about dentists, but Aura Dental changed everything. Painless treatment, luxury environment, and a team that actually cares. My Invisalign results are already showing amazing progress!",
    rating: 5,
    verified: true
  },
  {
    name: "Robert Wilson",
    initial: "R",
    date: "3 weeks ago",
    text: "Truly a five-star experience. The clinic uses the most advanced technology I've seen. No wait times, transparent pricing, and incredible results. My smile has never looked better. Worth every penny.",
    rating: 5,
    verified: true
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-soft-gray relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.05),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] font-bold text-white">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm font-bold text-primary-light ml-2">
                <span className="text-secondary">4.9/5</span> based on 500+ Google Reviews
              </div>
            </div>
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Patient Trust</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tight">Voices of Satisfaction</h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-border relative group hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Google Style Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-soft-gray flex items-center justify-center text-primary font-bold text-xl border border-gray-border">
                    {review.initial}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="font-bold text-primary">{review.name}</div>
                      {review.verified && (
                        <CheckCircle className="w-4 h-4 text-secondary" />
                      )}
                    </div>
                    <div className="text-xs text-primary-light font-medium">{review.date}</div>
                  </div>
                </div>
                <div className="w-8 h-8 bg-soft-gray rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-primary/20">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-primary-light text-lg leading-relaxed mb-8 relative z-10 font-medium">
                "{review.text}"
              </p>

              <div className="absolute bottom-8 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={60} className="rotate-180" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="text-primary font-bold hover:text-secondary transition-all flex items-center gap-2 mx-auto border-b-2 border-primary/10 pb-1 hover:border-secondary">
            Read all 542 reviews on Google
            <span>→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
