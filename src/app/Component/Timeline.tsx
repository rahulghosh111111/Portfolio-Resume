import React from 'react';

import { FaBriefcase, FaGraduationCap, FaCertificate, FaStar } from "react-icons/fa";

const education = [
  { title: "B.Tech in Computer Science", place: "KIIT University", year: "2022 - 2026", type: "Full-time" },
  { title: "Higher Secondary", place: "Taldangra Fulmati High School, WestBengal", year: "2019 - 2021", type: "Education" },
  { title: "Secondary Education", place: "Taldangra Fulmati High School, WestBengal", year: "2010 - 2019", type: "Education" },
];

// const experience = [
//   { title: "Full Stack Intern", place: "RNPsoft", year: "Sept 2024 - Dec 2024", type: "Internship" },
//   { title: "Web Developer Intern", place: "Synexoo Technologies", year: "May 2024 - Jul 2024", type: "Internship" },
// ];

const certification = [
  { title: "Health Systems Development: Health systems,Policy and Research", place: "Coursera, Imperial College London", year: "Feb 2025 - Mar 2025", type: "Certification" },
  { title: " Health Systems Development: Introduction to Health Systems", place: "Coursera, Imperial College London", year: "Feb 2025 - Mar 2025", type: "Certification" },
  { title: "Data Structures and Algorithms", place: "Excelr", year: "Feb 2024 - Mar 2024", type: "Certification" },
  { title: "DSA and System Design", place: "PW Skills", year: "Oct 2023 - Dec 2024", type: "Certification" },
];

const extracurricular = [
  { title: "Core Operations Team", place: "K-Prep", year: "May 2024 - Jul 2024", type: "Full-time" },
  { title: "Web Developer", place: "Coding Ninjas KIIT", year: "May 2024 - Jul 2024", type: "Part-time" },
];

// Updated Card component
const Card = ({
  title,
  place,
  year,
  type,
  icon,
}: {
  title: string;
  place: string;
  year: string;
  type: string;
  icon: React.ReactNode; // Updated the type for icon to React.ReactNode
}) => (
  <div className="relative p-6 bg-white shadow-md rounded-lg border border-gray-200 transition-transform transform hover:scale-105 hover:border-blue-500 hover:shadow-lg flex items-center gap-4 sm:flex-row flex-col text-center sm:text-left">
    {/* Badge */}
    <span
      className={`absolute top-2 right-2 text-xs font-semibold px-3 py-1 rounded-full ${
        type === "Internship"
          ? "bg-blue-100 text-blue-600"
          : type === "Full-time"
          ? "bg-green-100 text-green-600"
          : type === "Certification"
          ? "bg-purple-100 text-purple-600"
          : "bg-gray-100 text-gray-600"
      }`}
    >
      {type}
    </span>

    {/* Icon */}
    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg">
      {icon}
    </div>

    {/* Content */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{place}</p>
      <p className="text-sm text-gray-500">{year}</p>
    </div>
  </div>
);

const EducationExperience = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-3xl playfair-display-font font-bold text-center mb-8">Education & Experience</h2>

      {/* Education Section */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-[#6b8994] mb-4">🎓 Education</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card key={index} {...edu} icon={<FaGraduationCap />} />
          ))}
        </div>
      </div>
      {/* Extracurricular Section */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-[#6b8994] mb-4">💼 Experience</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {extracurricular.map((cert, index) => (
            <Card key={index} {...cert} icon={<FaStar />} />
          ))}
        </div>
      </div>

      {/* Experience Section */}
      {/* <div className="mb-12">
        <h3 className="text-xl font-semibold text-[#6b8994] mb-4">extracurricular</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {experience.map((exp, index) => (
            <Card key={index} {...exp} icon={<FaBriefcase />} />
          ))}
        </div>
      </div> */}

      {/* Certification Section */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-[#6b8994] mb-4">📃 Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certification.map((cert, index) => (
            <Card key={index} {...cert} icon={<FaCertificate />} />
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default EducationExperience;
