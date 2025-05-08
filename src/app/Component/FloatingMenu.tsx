"use client";

import { useState, useRef } from "react";
import { FaInstagram, FaWhatsapp, FaTwitter, FaGithub, FaBars, FaTimes, FaLinkedin } from "react-icons/fa";

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 24, y: 80 }); // 🛠️ increased initial 'y' to lift it up
  const isDragging = useRef(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDragStart = () => {
    isDragging.current = true;
  };

  const handleDragMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      const touch = e.touches[0];
      setPosition({
        x: window.innerWidth - touch.clientX - 24,
        y: window.innerHeight - touch.clientY - 24,
      });
    }
  };

  const handleDragEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="fixed z-50 flex flex-col items-center"
      style={{
        bottom: position.y,
        right: position.x,
      }}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      {/* Icons container */}
      <div
        className={`flex flex-col items-center space-y-3 mb-3 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 p-2 rounded-full hover:bg-pink-600"
        >
          <FaInstagram className="text-white text-lg" />
        </a>
        <a
          href="https://wa.me/9749000371"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-2 rounded-full hover:bg-green-600"
        >
          <FaWhatsapp className="text-white text-lg" />
        </a>
        <a
          href="https://x.com/RahulGhosh9749?t=LDnWgxJP--F2UN4gE5HzWA&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 p-2 rounded-full hover:bg-blue-500"
        >
          <FaTwitter className="text-white text-lg" />
        </a>
        <a
          href="https://github.com/rahulghosh111111/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
        >
          <FaGithub className="text-white text-lg" />
        </a>
        <a
          href="www.linkedin.com/in/rahul-ghosh-rg0371"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 p-2 rounded-full hover:bg-gray-700"
        >
          <FaLinkedin className="text-white text-lg" />
        </a>
      </div>

      {/* Floating Button */}
      <button
        onClick={toggleMenu}
        className="bg-[#0e1b2c] hover:bg-blue-700 p-3 rounded-full shadow-lg focus:outline-none"
      >
        {isOpen ? (
          <FaTimes className="text-white text-xl" />
        ) : (
          <FaBars className="text-white text-xl" />
        )}
      </button>
    </div>
  );
}
