"use client"
import React from "react";



export default function Services() {
  const cards = [
    {
      title: "Full Stack Developer",
      description: "Building efficient and scalable Full Stack web applications, ensuring smooth performance and great user experiences",
    },
    {
      title: "Designer",
      description: "Crafting visually stunning and user-friendly designs for seamless digital experiences",
    },
    {
      title: "Content Creator",
      description: "Vlogging and creating engaging content to share knowledge and insights with the world",
    },
  ];

  return (
    <>
      <div className="p-6  flex flex-col items-center justify-center">
        <h2 className="text-4xl playfair-display-font font-bold mb-6">My Services</h2>
        <p className="text-center max-w-2xl poppins-font text-lg text-[#6b8994]">
          I design and develop scalable web applications, ensuring smooth performance and great user experiences. From frontend to backend, I build secure, efficient, and optimized solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-blue-500/50 w-80"
            >
              
              <h3 className="text-2xl font-semibold text-black">{card.title}</h3>
              <p className="text-gray-600 mt-3 text-base">{card.description}</p>
              
            </div>
          ))}
          
        </div>
      </div>
      
    </>
  );
}
