"use client";
import { ShineBorder } from "../../components/magicui/shine-border";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const cardContent = [
  { hoverText: "Kareer-Grow(Job Portal)", bgImage: "/KareerGrow.png", githubLink: "https://github.com/rahulghosh111111/Kareer-Grow", websiteLink: "https://github.com/rahulghosh111111/Kareer-Grow", defaultText: "" },
  { hoverText: "Zensium Social Media", bgImage: "/zensium.png", githubLink: "#", websiteLink: "https://zensium.vercel.app/login", defaultText: "" },
  { hoverText: "Code-Colab", bgImage: "/codecolab.png", githubLink: "#", websiteLink: "https://code-colab-pro.onrender.com//", defaultText: "" },
  { hoverText: "AI-Playground", bgImage: "/AI_Playgroung.png", githubLink: "https://ai-playground-delta-six.vercel.app/", websiteLink: "https://ai-playground-delta-six.vercel.app/", defaultText: "" },
  { hoverText: "CodingNinjas Kiit", bgImage: "/cnkiit.png", githubLink: "#", websiteLink: "https://www.cnkiit.in/", defaultText: "" },
  { hoverText: "Rubix-Solver", bgImage: "/Rubix.png", githubLink: "https://rubix-solver.vercel.app/", websiteLink: "https://rubix-solver.vercel.app/", defaultText: "" },
  { hoverText: "Uni-Events", bgImage: "/Uni-Events.png", githubLink: "https://uni-events-sigma.vercel.app/", websiteLink: "https://uni-events-sigma.vercel.app/", defaultText: "" },
  { hoverText: "Ragoon AI", bgImage: "/RAGOON.ai.png", githubLink: "https://ragoon-ai.vercel.app/", websiteLink: "https://ragoon-ai.vercel.app/", defaultText: "" },
  { hoverText: "Weather Dashboard", bgImage: "/WeatherDashboard.png", githubLink: "https://github.com/rahulghosh111111/Weather-Dashboard", websiteLink: "https://weather-dashboard-99sk.vercel.app/", defaultText: "" }
];

const CardComponent: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-center playfair-display-font text-5xl font-bold aurora-text">Projects</h1>
        <h2 className="text-center text-xl italic mt-4 text-blue-400/80">&quot;Turning ideas into reality through code.&quot;</h2>
        <p className="text-center poppins-font max-w-3xl mx-auto mt-6 text-slate-400 leading-relaxed">
          A collection of my work showcasing web development, Java applications, and data-driven solutions. Each project reflects my problem-solving skills and technical expertise. From intuitive user interfaces to efficient backend logic, I strive to create seamless digital experiences.
        </p>
      </motion.div>

      <div className="flex justify-center mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl">
          {cardContent.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative w-full aspect-video sm:w-[360px] sm:h-56 group cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image with Zoom */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{ backgroundImage: `url(${content.bgImage})` }}
                animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
              />

              {/* Advanced Overlay */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-20"
                  >
                    <motion.p 
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-white text-xl font-bold mb-4"
                    >
                      {content.hoverText}
                    </motion.p>
                    <div className="flex gap-6">
                      <motion.a 
                        whileHover={{ scale: 1.2, color: "#10b981" }}
                        href={content.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white"
                      >
                        <FaGithub size={28} />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.2, color: "#3b82f6" }}
                        href={content.websiteLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white"
                      >
                        <FaExternalLinkAlt size={26} />
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Shine Border Integration */}
              <div className="absolute inset-0 z-10 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity">
                <ShineBorder duration={15} shineColor={["#3b82f6", "#8b5cf6", "#3b82f6"]} />
              </div>

              {/* Card Label (Default State) */}
              <div className="absolute bottom-4 left-4 z-10 text-white/40 text-sm font-medium group-hover:opacity-0 transition-opacity">
                {content.hoverText.split('(')[0]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardComponent;
