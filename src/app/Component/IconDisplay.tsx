"use client";


const icons = [
  { name: "typescript", label: "TypeScript", color: "3178C6" },
  { name: "javascript", label: "JavaScript", color: "F7DF1E" },

  // {name: "java", label: "java", color: "fff" },
  // { name: "visualstudiocode", label: "VS Code", color: "007ACC" },
  { name: "openjdk", label: "Java", color: "007396" }, // Changed from "java" to "openjdk"
  { name: "vercel", label: "Vercel", color: "000000" },
    { name: "springboot", label: "Spring Boot", color: "6DB33F" }, // Added Spring Boot
  { name: "react", label: "React", color: "61DAFB" },
  { name: "html5", label: "HTML5", color: "E34F26" },
  { name: "css3", label: "CSS3", color: "1572B6" }, // CSS already present
  // { name: "nodedotjs", label: "Node.js", color: "339933" },
  // { name: "express", label: "Express.js", color: "c0c0c0" },
  { name: "nextdotjs", label: "Next.js", color: "c0c0c0" },
  // { name: "testinglibrary", label: "Testing Library", color: "E33332" },
  { name: "git", label: "Git", color: "F05032" },
  { name: "github", label: "GitHub", color: "c0c0c0" },
  // { name: "gitlab", label: "GitLab", color: "FC6D26" },
  // { name: "figma", label: "Figma", color: "F24E1E" },
  { name: "mongodb", label: "MongoDB", color: "47A248" },
  { name: "mongoose", label: "Mongoose", color: "880000" },
  { name: "mysql", label: "MySQL", color: "4479A1" },
  { name: "tailwindcss", label: "Tailwind CSS", color: "06B6D4" },
  // { name: "mui", label: "MUI", color: "007FFF" },
  { name: "c", label: "C", color: "A8B9CC" },
  // { name: "cplusplus", label: "C++", color: "00599C" },
  // { name: "canva", label: "Canva", color: "00C4CC" },
  { name: "python", label: "Python", color: "3776AB" },
  { name: "jupyter", label: "Jupyter", color: "F37626" },
  // { name: "postman", label: "Postman", color: "FF6C37" },
  { name: "npm", label: "NPM", color: "CB3837" },
  { name: "vite", label: "Vite", color: "646CFF" },
  // { name: "shadcnui", label: "ShadcnUi", color: "c0c0c0" },
  // { name: "bootstrap", label: "Bootstrap", color: "7952B3" },
  { name: "googlecolab", label: "googlecolab", color: "F9AB00" },
  // { name: "cloudinary", label: "cloudinary", color: "3448C5" }
];

const IconsGrid = () => {
  return (
    <>
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-3xl playfair-display-font font-bold text-center mb-9">Tech Stack & Tools</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
        {icons.map(({ name, label, color }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 group transition-all duration-300"
          >
            <img
              src={`https://cdn.simpleicons.org/${name}/${color}`}
              alt={label}
              className="w-12 h-12 group-hover:scale-110 transition-all duration-300"
              width={48}
              height={48}
            />
            <p className="text-sm text-gray-600 group-hover:text-blue-500">{label}</p>
          </div>
        ))}
      </div>
      
    </div>
          
    </>
  );
};

export default IconsGrid;
