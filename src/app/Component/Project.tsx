"use client";
import { ShineBorder } from "../../components/magicui/shine-border";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


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
    <>

      <h1 className="text-center playfair-display-font text-4xl font-bold">Projects</h1>
      <h2 className="text-center text-lg italic mt-2">&quot;Turning ideas into reality through code.&quot;</h2>
      <h2 className="text-center poppins-font max-w-2xl mx-auto mt-2 text-[#6b8994]">
        A collection of my work showcasing web development, Java applications, and data-driven solutions. Each project reflects my problem-solving skills and technical expertise. From intuitive user interfaces to efficient backend logic, I strive to create seamless digital experiences.
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-3">
          {cardContent.map((content, index) => (
            <div
              key={index}
              className="w-[336px] h-52 flex items-center justify-center text-xl font-semibold rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105  hover:text-blue-600  bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url(${content.bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-opacity-10 backdrop-blur-lg rounded-md flex flex-col items-center justify-center">
                  <p className="text-xl font-semibold">{content.hoverText}</p>
                  <div className="flex gap-5 mt-2">
                    <a href={content.githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-600">
                      <FaGithub size={24} />
                    </a>
                    <a href={content.websiteLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                      <FaExternalLinkAlt size={22} />
                    </a>
                  </div>
                </div>
              )}
              <div className="relative z-10 bg-opacity-50 w-full h-full flex items-center justify-center pointer-events-none rounded-md">
                {hoveredIndex === index ? "" : content.defaultText}
              </div>
              <ShineBorder duration={15} shineColor={["#FE8FB5", "#A07CFE", "#FE8FB5", "#FFBE7B", "#A07CFE"]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardComponent;
