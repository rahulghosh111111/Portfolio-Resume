"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0e1b2c] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between">
        
        {/* Left Section: Navigation, Socials, Contact Info */}
        <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col items-center text-center md:items-start md:text-left">
          {/* Navigation Links */}
          <nav className="mb-6">
            <h3 className="text-lg font-bold playfair-display-font text-gray-300 mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400 poppins-font">Home</Link></li>
              <li><Link href="/About" className="hover:text-blue-400 poppins-font">About</Link></li>
              <li><Link href="/Projects" className="hover:text-blue-400 poppins-font">Projects</Link></li>
              <li><Link href="/Contact" className="hover:text-blue-400 poppins-font">Contact</Link></li>
            </ul>
          </nav>

          {/* Social Media Links */}
          <div className="mb-6">
            <h3 className="text-lg font-bold playfair-display-font text-gray-300 mb-2">Connect With Me</h3>
            <div className="flex space-x-5">
              <a href="https://github.com/rahulghosh111111" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/rahul-ghosh-b0b660254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaLinkedin size={22} />
              </a>
              <a href="https://x.com/RahulGhosh9749?t=LDnWgxJP--F2UN4gE5HzWA&s=09er" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaTwitter size={22} />
              </a>
              <a href="mailto:rahulghosh111111@gmail.com" className="hover:text-blue-400">
                <FaEnvelope size={22} />
              </a>
              <a href="https://wa.me/9749000371" className="hover:text-blue-400">
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold playfair-display-font text-gray-300 mb-2">Contact Info</h3>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <FaPhoneAlt /> <span>+91 9749000371</span>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <FaEnvelope /> <span>rahulghosh111111@gmail.com</span>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <FaMapMarkerAlt /> <span>Bhubaneswar, India</span>
            </p>
          </div>
        </div>

        {/* Middle Section: Download resume button */}
        <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col items-center text-center md:items-start md:text-left">
          <h3 className="text-lg font-bold playfair-display-font text-gray-300 mb-4">📬 Stay Tuned</h3>
          <p className="text-[#6b8994] poppins-font text-sm mb-3">This is a raw website with minimal design with the sole purpose of showcasing my personal portfolio!</p>
          <button className="bg-blue-500 mt-5 text-white font-bold p-3 rounded-md transition transform hover:scale-105 active:scale-95 shadow-lg">
            <a 
              href="https://drive.google.com/file/d/1RbMdmwkCKZx5Sdj7WCX4H3sFxQrug3j4/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </button>
        </div>

        {/* Right Section: Google Map  */}
        <div className="md:w-1/3 flex flex-col items-center text-center md:items-start md:text-left">
          <h3 className="text-lg font-bold playfair-display-font text-gray-300 mb-4">📍 Find Me</h3>
          <iframe
            className="w-full h-60 rounded-lg border border-gray-700"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.709851575326!2d85.8193203!3d20.3536017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19094076713875%3A0xb25b0c927e78c50f!2sKIIT%20University!5e0!3m2!1sen!2sin!4v1743103050754!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Copyright & Branding */}
      <div className="text-center text-gray-400 poppins-font text-sm mt-8 mb-3 border-t border-gray-800 pt-4">
        <p>© {new Date().getFullYear()} Rahul Ghosh. All Rights Reserved.</p>
        <p>Made with ❤️ in Next.js</p>
      </div>
    </footer>
  );
};

export default Footer;
