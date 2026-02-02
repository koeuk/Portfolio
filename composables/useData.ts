export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools";
}

export const useData = () => {
  const personalInfo = {
    name: "Koeuk Dev",
    image: '/images/koeuk.jpg', // ✅ Correct path
    role: "Web Developer & Creative Thinker",
    email: "koeukkos@gmail.com",
    github: "https://github.com/koeuk",
    linkedin: "https://www.linkedin.com/in/koeuk-kos-130482299/",
    telegram: "https://t.me/koeuk24",
    facebook: "https://facebook.com/koeuk24",
    bio: "Passionate web developer with expertise in modern JavaScript frameworks. I specialize in building beautiful, responsive websites and applications that solve real-world problems. With a focus on clean code and exceptional user experiences, I bring ideas to life through technology.",
  };

  const projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with secure payment integration, inventory management, and modern shopping experience",
      image: "/images/projects/ecommerce.jpg",
      technologies: ["Nuxt.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/ecommerce",
      featured: true,
    },
    {
      id: "2",
      title: "Task Management App",
      description:
        "Collaborative task manager with real-time updates, drag-and-drop functionality, and team collaboration features",
      image: "/images/projects/taskapp.jpg",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/taskapp",
      featured: true,
    },
    {
      id: "3",
      title: "Portfolio Website",
      description:
        "Clean and modern portfolio showcasing projects with smooth animations and responsive design",
      image: "/images/projects/portfolio.jpg",
      technologies: ["Nuxt.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/portfolio",
      featured: true,
    },
    {
      id: "4",
      title: "Weather Dashboard",
      description:
        "Real-time weather application with beautiful visualizations, forecasts, and location-based services",
      image: "/images/projects/weather.jpg",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/weather",
      featured: true,
    },
    {
      id: "5",
      title: "Social Media App",
      description:
        "Modern social platform with real-time messaging, post sharing, and user interactions",
      image: "/images/projects/social.jpg",
      technologies: ["Nuxt.js", "Socket.io", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/social",
      featured: true,
    },
    {
      id: "6",
      title: "Blog Platform",
      description:
        "Content management system with markdown support, SEO optimization, and admin dashboard",
      image: "/images/projects/blog.jpg",
      technologies: ["Nuxt.js", "Prisma", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/blog",
      featured: true,
    },
    {
      id: "7",
      title: "Fitness Tracker",
      description:
        "Health and fitness app with workout tracking, progress charts, and personalized plans",
      image: "/images/projects/fitness.jpg",
      technologies: ["Vue.js", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/fitness",
      featured: true,
    },
  ];

  const skills: Skill[] = [
    { name: "HTML5", icon: "🌐", category: "frontend" },
    { name: "CSS3", icon: "🎨", category: "frontend" },
    { name: "JavaScript", icon: "⚡", category: "frontend" },
    { name: "TypeScript", icon: "📘", category: "frontend" },
    { name: "Vue.js", icon: "💚", category: "frontend" },
    { name: "Nuxt.js", icon: "💎", category: "frontend" },
    { name: "Tailwind CSS", icon: "🎯", category: "frontend" },
    { name: "Node.js", icon: "🟢", category: "backend" },
    { name: "Git", icon: "📦", category: "tools" },
    { name: "VS Code", icon: "💻", category: "tools" },
  ];

  const badges = [
    "Frontend Development",
    "Responsive Design",
    "TypeScript",
    "Modern Frameworks",
    "UI/UX Design",
    "Problem Solving",
  ];

  return {
    personalInfo,
    projects,
    skills,
    badges,
  };
};
