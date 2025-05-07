"use client"
import {  useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

import Testimonial from "./Component/Testimonial";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Services from "./Component/Services";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Timeline from "./Component/Timeline";
import IconDisplay from "./Component/IconDisplay";
import Footer from "./Component/Footer";
import Frontpage from "./Component/Frontpage";
import FloatingMenu from "./Component/FloatingMenu";

// Reusable animation variant
const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  useEffect(() => {
    // Disable scroll restoration to prevent scrolling behavior issues
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"; // Disable scroll restoration
    }

    // Reset the scroll position to the top of the page
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true, // Keep smoothWheel if supported
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Delay the initialization slightly to avoid initial scroll issues
    setTimeout(() => {
      requestAnimationFrame(raf);
    }, 100); // 100ms delay

    // Cleanup the Lenis instance when the component unmounts
    return () => {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "auto"; // Reset scroll restoration to default
      }
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Animated Sections */}
        <motion.section
          id="Frontpage"
          className="pt-10"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Frontpage />
        </motion.section>

        <motion.section
          id="About"
          className="pt-16"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <About />
        </motion.section>

        <motion.section
          className="pt-16"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <IconDisplay />
        </motion.section>

        <motion.section
          className="pt-16"
          variants={revealVariants}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Timeline />
        </motion.section>

        <motion.section
          id="Services"
          className="pt-12"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Services />
        </motion.section>

        <motion.section
          id="Projects"
          className="pt-14"
          variants={revealVariants}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Project />
        </motion.section>

        <motion.section
          id="Testimonials"
          className="pt-8"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Testimonial />
        </motion.section>

        <motion.section
          id="Contact"
          className="pt-16"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Contact />
        </motion.section>
        <FloatingMenu />
      </main>

      <Footer />
    </>
  );
}
