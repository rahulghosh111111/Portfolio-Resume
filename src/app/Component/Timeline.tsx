import React from 'react';
import Image from 'next/image';
import { FaGraduationCap, FaCertificate, FaStar } from "react-icons/fa";
import { educationItems, experienceItems, certificationItems } from '../../lib/data';
import { TimelineItem } from '../../lib/types';

const BentoCard = ({ item }: { item: TimelineItem }) => {
  const { title, place, year, type, category, description, spanClassName, image, link } = item;

  // Resolve icon based on category or type
  let icon = <FaGraduationCap size={20} />;
  if (category === 'experience' || type === 'Internship') {
    icon = <FaStar size={20} />;
  } else if (category === 'certification') {
    icon = <FaCertificate size={20} />;
  }

  return (
    <div className={`group relative p-6 rounded-2xl bg-neutral-900/40 border border-white/5 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-white/10 hover:shadow-2xl hover:shadow-cyan-500/5 flex flex-col justify-start gap-4 overflow-hidden ${spanClassName || "col-span-1"}`}>
      {/* Background Glow Effect on Hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div>
        <div className="flex justify-between items-start">
          <div className="p-3 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-800/40 border border-white/5 text-cyan-400 group-hover:text-cyan-300 transition-colors flex items-center justify-center w-11 h-11">
            {image ? (
              <Image src={image} alt={title} width={24} height={24} className="object-contain" />
            ) : (
              icon
            )}
          </div>
          {category === 'certification' ? (
            <a 
              href={link || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-medium px-4 py-1.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 hover:text-cyan-300 transition-all duration-300 cursor-pointer flex items-center gap-1 shadow-md shadow-cyan-500/5 hover:shadow-cyan-500/10 hover:scale-105 active:scale-95"
              onClick={(e) => e.stopPropagation()}
            >
              <FaCertificate size={12} className="text-cyan-400/80" /> {type}
            </a>
          ) : (
            <span className="text-xs font-medium px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/5 rounded-full text-neutral-400 group-hover:text-neutral-300 transition-colors">
              {type}
            </span>
          )}
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all duration-300">{title}</h3>
          <p className="text-neutral-400 text-sm mt-1">{place}</p>
        </div>
      </div>
      
      <div className="mt-5">
        {description && (
          <p className="text-neutral-500 text-sm mb-4 leading-relaxed group-hover:text-neutral-400 transition-colors">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between mt-auto">
            <p className="text-cyan-500/80 text-xs font-mono tracking-wider">{year}</p>
            {category === 'education' && <span className="text-xs text-neutral-600">Graduation</span>}
        </div>
      </div>
      {/* Background Watermark Logo */}
      {image && (
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-[0.04] overflow-hidden pointer-events-none">
          <div className="w-72 h-72 relative">
            <Image src={image} alt="" fill className="object-contain" />
          </div>
        </div>
      )}
    </div>
  );
};

const EducationExperience = () => {
  const experiencesAndCerts = [...experienceItems, ...certificationItems];

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl playfair-display-font font-bold text-center mb-16 text-white aurora-text">
        Education <span>&</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
      </h2>

      {/* Education Section */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <FaGraduationCap className="text-cyan-400" /> Education
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {educationItems.map((item) => (
            <BentoCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Experience & Certifications Section */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <FaStar className="text-cyan-400" /> Experience & Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {experiencesAndCerts.map((item) => (
            <BentoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;

