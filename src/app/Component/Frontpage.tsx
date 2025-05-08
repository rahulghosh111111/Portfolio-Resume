import { IconCloud } from "../../components/magicui/icon-cloud";



const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "testinglibrary",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "mongoosedotws",
  "mongodb",
  "mongoose",
  "mysql",
  "tailwindcss",
  "mui",
  "c",
  "cplusplus",
  "canva",
  "python",
  "jupyter",
  "postman",
  "npm",
];

export default function Home() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  // 👇 Add scrollToSection here
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row mt-8 min-h-screen bg-[#0b0c10]">
        {/* Left: Text Content */}
        <div className="flex flex-col items-center justify-center w-full text-center px-4 py-8 lg:px-10">
          <div className="text-white text-4xl text-center aurora-text font-bold">
            Dream. Develop. Disrupt.
          </div>
          <h2 className="text-center mt-2 text-xl">I'm Rahul Ghosh</h2>
          <p className="text-center max-w-2xl mx-auto mt-3 poppins-font text-[#6b8994] px-2">
            A driven engineer committed to lifelong learning, crafting impactful solutions,
            and approaching real-world challenges with innovation and attention to detail.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
            <button
              onClick={() => scrollToSection("About")}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 group-hover:from-green-500 group-hover:via-blue-600 group-hover:to-purple-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-800 shadow-lg active:scale-95 transition-transform duration-150"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#0b0c10] rounded-md group-hover:bg-opacity-0">
                Get Started
              </span>
            </button>

            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-800 shadow-lg active:scale-95 transition-transform duration-150">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#0b0c10] rounded-md group-hover:bg-opacity-0">
                <a
                  href="https://drive.google.com/file/d/1RbMdmwkCKZx5Sdj7WCX4H3sFxQrug3j4/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </span>
            </button>
          </div>
        </div>

        {/* Right: IconCloud */}
        <div className="relative flex justify-center items-center w-full h-full sm:h-[400px] md:h-[500px] lg:h-auto overflow-hidden">
          <IconCloud images={images} />
        </div>
      </div>

    </>
  );
}

