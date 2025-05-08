"use client";

import { useState, useEffect, useRef } from "react";
import { NumberTicker } from "../../components/magicui/number-ticker";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sudeep Kumar manna",
    comment: "Always reliable during projects, easy to work with, and quick to figure things out.",
    image: "https://res.cloudinary.com/due7g7gky/image/upload/v1746691106/zrhu8rz6yon3anjxg1bj.jpg",
  },
  {
    id: 2,
    name: "Soumyadeep Maity",
    comment: "Good at solving issues calmly,open to suggestions, and made team work smoother. ",
    image: "https://res.cloudinary.com/due7g7gky/image/upload/v1746691106/m5wi7jtsnkne0mczvkzt.jpg",
  },
  {
    id: 3,
    name: "Indulekha Dash",
    comment: "Balanced independent work with team coordination, and remained open to new ideas.",
    image: "https://res.cloudinary.com/due7g7gky/image/upload/v1746683841/czidg3rhczsyvahcoldu.jpg",
  },
  {
    id: 3,
    name: "Gaurav Thakur",
    comment: "Focused during tasks, and always ready to discuss ideas without rushing things.",
    image: "https://res.cloudinary.com/dgzfetdxv/image/upload/f_auto,q_auto/p0ovkwavrtyegkk7l2ys",
  },
];

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTicker, setStartTicker] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Auto Carousel Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const { name, comment, image } = testimonials[currentIndex];

  // Observer to Start Number Ticker When in View
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTicker(true);
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Testimonials Section */}
      <h1 className="text-white playfair-display-font text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-5 mt-6 sm:mt-9">
        Colleague Testimonials
      </h1>
      <h2 className="text-center text-lg sm:text-2xl italic mt-1 sm:mt-2">
        &ldquo;Collaboration is key to success.&rdquo;
      </h2>
      <h2 className="text-[#6b8994] poppins-font text-sm sm:text-lg text-center mb-4 sm:mb-5 mt-2 max-w-md sm:max-w-2xl mx-auto">
        These testimonials highlight my contributions, work ethic, and ability to work seamlessly within a team to achieve our goals.
      </h2>

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-5 sm:p-8 flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0 transition-all duration-500 ease-in-out w-[90%] sm:w-auto">
        {/* Left: Circular Image */}
        <Image
          src={image}
          alt={name}
          className="w-16 sm:w-24 h-16 sm:h-24 rounded-full border-2 sm:border-4 border-blue-500"
          width={96} // width of the image
          height={96} // height of the image
        />

        {/* Right: Comment */}
        <div className="text-center sm:text-left border-l flex-1 px-4 sm:px-6">
          <p className="text-gray-700 text-sm sm:text-xl font-semibold">&ldquo;{comment}&rdquo;</p>
          <p className="text-gray-500 mt-1 sm:mt-2 text-xs sm:text-md">- {name}</p>
        </div>
      </div>

      {/* Stats Section (Number Ticker) */}
      <div ref={statsRef} className="text-white py-8 sm:py-10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16">
          {/* Stat 1 */}
          <div className="text-center">
            <NumberTicker
              value={startTicker ? 2 : 0}
              className="text-3xl sm:text-4xl font-medium tracking-tighter text-white dark:text-black"
            />
            <p className="text-xs sm:text-sm text-gray-400 mt-1">&ldquo;Years of Experience&rdquo;</p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <NumberTicker
              value={startTicker ? 7 : 0}
              className="text-3xl sm:text-4xl font-medium tracking-tighter text-white dark:text-black"
            />
            <p className="text-xs sm:text-sm text-gray-400 mt-1">&ldquo;Satisfied Clients&rdquo;</p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <NumberTicker
              value={startTicker ? 15 : 0}
              className="text-3xl sm:text-4xl font-medium tracking-tighter text-white dark:text-black"
            />
            <p className="text-xs sm:text-sm text-gray-400 mt-1">&ldquo;Finished Projects&rdquo;</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
