"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaBlog, FaPhone } from "react-icons/fa";
import { AuroraText } from "@/components/magicui/aurora-text";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

export default function Navbar() {
  const lenisRef = useRef<Lenis | null>(null);
  const [clicked, setClicked] = useState<string | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, {
        offset: -80,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
    setClicked(id);
  };

  const handleAnimationEnd = () => {
    setClicked(null);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed z-50 w-full left-0 top-0 right-0 flex bg-[#0e1b2c] border-white items-center justify-between p-5 md:px-10">
        {/* Logo */}
        <div onClick={() => scrollToSection("Frontpage")} className="text-3xl font-bold cursor-pointer text-logo flex-1 text-center md:text-left">
        <AnimatedGradientText
      speed={1}
      colorFrom="#fff"
      colorTo="black"
      className="text-4xl font-semibold tracking-tight"
    >
      Rahul
    </AnimatedGradientText>
        </div>

        {/* Navbar items (Desktop view) */}
        <div className="hidden md:flex justify-end flex-1">
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => scrollToSection("Frontpage")}
                className={`cursor-pointer Inter-font hover:text-gray-300 ${
                  clicked === "Frontpage" ? "scale-110 transition-transform" : ""
                }`}
                onAnimationEnd={handleAnimationEnd}
              >
                <AuroraText>Home</AuroraText>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("About")}
                className={`cursor-pointer Inter-font hover:text-gray-300 ${
                  clicked === "About" ? "scale-110 transition-transform" : ""
                }`}
                onAnimationEnd={handleAnimationEnd}
              >
                <AuroraText>About</AuroraText>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("Services")}
                className={`cursor-pointer Inter-font hover:text-gray-300 ${
                  clicked === "Services" ? "scale-110 transition-transform" : ""
                }`}
                onAnimationEnd={handleAnimationEnd}
              >
                <AuroraText>Services</AuroraText>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("Projects")}
                className={`cursor-pointer Inter-font hover:text-gray-300 ${
                  clicked === "Projects" ? "scale-110 transition-transform" : ""
                }`}
                onAnimationEnd={handleAnimationEnd}
              >
                <AuroraText>Projects</AuroraText>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("Testimonials")}
                className={`cursor-pointer Inter-font hover:text-gray-300 ${
                  clicked === "Testimonials" ? "scale-110 transition-transform" : ""
                }`}
                onAnimationEnd={handleAnimationEnd}
              >
                <AuroraText>Testimonials</AuroraText>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("Contact")}
                className={`cursor-pointer Inter-font hover:text-gray-300 ${
                  clicked === "Contact" ? "scale-110 transition-transform" : ""
                }`}
                onAnimationEnd={handleAnimationEnd}
              >
                <AuroraText>Contact</AuroraText>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Footer Navbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white flex justify-around p-4 md:hidden z-50">
        <button onClick={() => scrollToSection("Frontpage")} className="flex flex-col items-center text-sm">
          <FaHome className="text-xl" />
        </button>
        <button onClick={() => scrollToSection("About")} className="flex flex-col items-center text-sm">
          <FaUser className="text-xl" />
        </button>
        <button onClick={() => scrollToSection("Services")} className="flex flex-col items-center text-sm">
          <FaBriefcase className="text-xl" />
        </button>
        <button onClick={() => scrollToSection("Projects")} className="flex flex-col items-center text-sm">
          <FaProjectDiagram className="text-xl" />
        </button>
        <button onClick={() => scrollToSection("Testimonials")} className="flex flex-col items-center text-sm">
          <FaBlog className="text-xl" />
        </button>
        <button onClick={() => scrollToSection("Contact")} className="flex flex-col items-center text-sm">
          <FaPhone className="text-xl" />
        </button>
      </div>
    </>
  );
}
