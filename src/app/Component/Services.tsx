"use client"
import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const cards = [
    {
      title: "Full Stack Developer",
      description: "Building efficient and scalable Full Stack web applications, ensuring smooth performance and great user experiences",
      icon: "💻"
    },
    {
      title: "Designer",
      description: "Crafting visually stunning and user-friendly designs for seamless digital experiences",
      icon: "🎨"
    },
    {
      title: "Content Creator",
      description: "Vlogging and creating engaging content to share knowledge and insights with the world",
      icon: "📸"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="p-6 py-20 flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute -z-10 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"
      />

      <h2 className="text-5xl font-bold mb-6 aurora-text text-center tracking-tight">My Services</h2>
      <p className="text-center max-w-2xl poppins-font text-lg text-slate-400 mb-12">
        I design and develop scalable web applications, ensuring smooth performance and great user experiences. From frontend to backend, I build secure, efficient, and optimized solutions.
      </p>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4 w-full max-w-6xl"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(59, 130, 246, 0.4)"
            }}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              {card.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
              {card.title}
            </h3>
            
            <p className="text-slate-400 text-base leading-relaxed">
              {card.description}
            </p>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
