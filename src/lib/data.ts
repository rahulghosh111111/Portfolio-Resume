import { TimelineItem, ServiceItem } from './types';

export const educationItems: TimelineItem[] = [
  {
    id: 'edu-1',
    title: "B.Tech in Computer Science",
    place: "KIIT University",
    year: "2022 - 2026",
    type: "Full-time",
    category: 'education',
    description: "Focusing on Software Engineering, Data Structures, and System Design. Maintaining a good academic record and participating in tech communities.",
    spanClassName: "md:col-span-2" // Large card, single row height
  },
  {
    id: 'edu-2',
    title: "Higher Secondary",
    place: "Taldangra Fulmati High School, WestBengal",
    year: "2019 - 2021",
    type: "Education",
    category: 'education',
    description: "Completed secondary education with focus on Science (Physics, Chemistry, Math).",
    spanClassName: "md:col-span-1 md:row-span-1"
  },
  {
    id: 'edu-3',
    title: "Secondary Education",
    place: "Taldangra Fulmati High School, WestBengal",
    year: "2010 - 2019",
    type: "Education",
    category: 'education',
    spanClassName: "md:col-span-1 md:row-span-1"
  }
];

export const experienceItems: TimelineItem[] = [
  {
    id: 'exp-1',
    title: "Core Operations Team",
    place: "K-Prep",
    year: "May 2024 - Jul 2024",
    type: "Full-time",
    category: 'experience',
    description: "Managed operations and coordinated events for K-Prep, improving workflow efficiency.",
    spanClassName: "md:col-span-1 md:row-span-1"
  },
  {
    id: 'exp-2',
    title: "Web Developer",
    place: "Coding Ninjas KIIT",
    year: "May 2024 - Jul 2024",
    type: "Part-time",
    category: 'experience',
    description: "Developed and maintained web projects, collaborating with other developers.",
    spanClassName: "md:col-span-1 md:row-span-1",
  }
];

export const certificationItems: TimelineItem[] = [
  {
    id: 'cert-1',
    title: "Java Full Stack Developer",
    place: "Great Learning",
    year: "June 2025 - Aug 2025",
    type: "Certification",
    category: 'certification',
    spanClassName: "md:col-span-1"
  },
  {
    id: 'cert-2',
    title: "Health Systems Policy and Research",
    place: "Coursera, Imperial College London",
    year: "Feb 2025 - Mar 2025",
    type: "Certification",
    category: 'certification',
    spanClassName: "md:col-span-1"
  },
  {
    id: 'cert-3',
    title: "Introduction to Health Systems",
    place: "Coursera, Imperial College London",
    year: "Feb 2025 - Mar 2025",
    type: "Certification",
    category: 'certification',
    spanClassName: "md:col-span-1"
  },
  {
    id: 'cert-4',
    title: "Data Structures and Algorithms",
    place: "Excelr",
    year: "Feb 2024 - Mar 2024",
    type: "Certification",
    category: 'certification',
    spanClassName: "md:col-span-1"
  },
  {
    id: 'cert-5',
    title: "DSA and System Design",
    place: "PW Skills",
    year: "Oct 2023 - Dec 2024",
    type: "Certification",
    category: 'certification',
    spanClassName: "md:col-span-1"
  }
];

export const allTimelineItems = [
  ...educationItems,
  ...experienceItems,
  ...certificationItems
];

export const serviceItems: ServiceItem[] = [
  {
    id: 'ser-1',
    title: "Full Stack Developer",
    description: "Building efficient and scalable Full Stack web applications, ensuring smooth performance and great user experiences.",
    features: [
      "Frontend with React / Next.js & Tailwind CSS",
      "Backend leveraging Java / Spring Boot & Node.js",
      "Robust Database Management (MySQL, MongoDB)",
      "Secure API architecture & documentation"
    ]
  },
  {
    id: 'ser-2',
    title: "Designer",
    description: "Crafting visually stunning and user-friendly designs for seamless digital experiences.",
    features: [
      "UI/UX Wireframing & Prototyping in Figma",
      "Responsive, clean-code web styling design sheets",
      "Component interactions design flows",
      "Color theory and typography consulting"
    ]
  },
  {
    id: 'ser-3',
    title: "Content Creator",
    description: "Vlogging and creating engaging content to share knowledge and insights with the world.",
    features: [
      "Technical video production and editing",
      "Vlogging software design and engineering workflows",
      "Medium/Dev.to blog articles",
      "Engagement strategies"
    ]
  }
];
