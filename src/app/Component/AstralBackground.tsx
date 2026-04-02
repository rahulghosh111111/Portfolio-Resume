"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// Shooting Star Component
const ShootingStar = () => {
  const [star, setStar] = useState<{ x: number; y: number; angle: number } | null>(null);

  useEffect(() => {
    const launchStar = () => {
      setStar({
        x: Math.random() * 80 + 10,
        y: Math.random() * 40 + 10,
        angle: Math.random() * 45 + 135, // Diagonal downwards
      });
      setTimeout(() => setStar(null), 1000);
    };

    const interval = setInterval(launchStar, 8000 + Math.random() * 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {star && (
        <motion.div
          initial={{ x: `${star.x}%`, y: `${star.y}%`, opacity: 0, scale: 0 }}
          animate={{ x: `${star.x - 20}%`, y: `${star.y + 20}%`, opacity: [0, 1, 0.4, 0], scale: [0, 1, 0.8, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute z-[-1] pointer-events-none"
        >
          <div className="h-[2px] w-[80px] bg-gradient-to-r from-blue-400 to-transparent blur-[1px]" 
               style={{ transform: `rotate(${star.angle}deg)` }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const AstralBackground = () => {
  const { scrollYProgress } = useScroll();
  const [isMounted, setIsMounted] = useState(false);
  const [stars, setStars] = useState<any[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Parallax star movement
  const starParallax1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const starParallax2 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const starParallax3 = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  useEffect(() => {
    setIsMounted(true);
    // Generate random stars on mount to avoid Hydration Mismatch
    const generatedStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isMounted) return <div className="fixed inset-0 -z-50 bg-[#020202]" />;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#020202]">
      {/* 1. Base Layer (The Void) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#020202] to-[#0a0a0a]" />

      {/* 2. Advanced Light Beams (Flare Layer) */}
      <motion.div
        animate={{
          rotate: [0, 10, 0],
          x: [-200, 100, -200],
          y: [-100, 50, -100],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[20%] w-[150%] h-[150%] opacity-20 pointer-events-none"
      >
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <radialGradient id="beam1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#2e5c8e" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#1e3a5f" stopOpacity="0.1" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="400" cy="400" rx="600" ry="200" fill="url(#beam1)" transform="rotate(-45 400 400)" />
        </svg>
      </motion.div>

      {/* 3. Parallax Starfield with Vertical "Dropping" Movement */}
      <motion.div style={{ y: starParallax1 }} className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div 
          animate={{ y: [0, -20, 0] }} // Very subtle float
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          {stars.slice(0, 50).map((star) => (
            <motion.div
              key={star.id}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: star.duration, repeat: Infinity, delay: star.delay }}
              className="absolute rounded-full bg-white/60 blur-[0.5px]"
              style={{ left: `${star.x}%`, top: `${star.y}%`, width: star.size, height: star.size }}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.div style={{ y: starParallax2 }} className="absolute inset-0 pointer-events-none opacity-30">
        <motion.div 
          animate={{ y: [0, 500, 0] }} // Constant dropping/raising rain effect
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          style={{ height: '200%' }}
        >
           {stars.slice(50, 100).map((star) => (
            <motion.div
              key={star.id}
              initial={{ opacity: 0.05 }}
              animate={{ opacity: [0.05, 0.4, 0.05] }}
              transition={{ duration: star.duration * 2, repeat: Infinity, delay: star.delay }}
              className="absolute rounded-full bg-blue-300/40 blur-[1px]"
              style={{ left: `${star.x}%`, top: `${star.y}%`, width: star.size * 0.8, height: star.size * 0.8 }}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.div style={{ y: starParallax3 }} className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          animate={{ y: [0, 800, 0] }} // Deep rain dropping
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
          style={{ height: '300%' }}
        >
          {stars.slice(100, 150).map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-indigo-200/30"
              style={{ left: `${star.x}%`, top: `${star.y}%`, width: 1, height: 1 }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* 4. Shooting Stars (Meteors) */}
      <ShootingStar />
      <ShootingStar />

      {/* 5. Interactive Cursor Pulse */}
      <motion.div
        animate={{
          left: mousePos.x,
          top: mousePos.y,
          scale: [1, 1.1, 1],
        }}
        transition={{ scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }, left: { duration: 0.1 }, top: { duration: 0.1 } }}
        className="pointer-events-none fixed h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]"
      />

      {/* 6. Advanced Micro-Grain Texture Layer */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] grayscale contrast-125 mix-blend-overlay">
        <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <filter id="astralNoise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#astralNoise)" />
        </svg>
      </div>

      {/* Subtle Depth Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  );
};

export default AstralBackground;
