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

export interface ExperienceCategory {
  id: string;
  points: string[];
  subheading?: string;
  period?: string;
  technologies?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  images?: string[];
  categories?: {
    id: string;
    items: ExperienceCategory[];
  }[];
  keyDifferences?: {
    id: string;
  }[];
}

export const useData = () => {
  const personalInfo = {
    name: "Koeuk KOS",
    image: '/images/koeuk.jpg', // ✅ Correct path
    role: "Web Developer",
    email: "koeukkos@gmail.com",
    phone: "090 959 206",
    location: "Phnom Penh, Cambodia",
    github: "https://github.com/koeuk",
    linkedin: "https://www.linkedin.com/in/koeuk-kos-130482299/",
    telegram: "https://t.me/koeuk24",
    facebook: "https://www.facebook.com/koeuk25/",
    bio: "I'm a web developer based in Phnom Penh with over a year of experience building web applications using Laravel and Vue.js. Right now, I'm studying Software Engineering at BELTEI (Year 4). I enjoy creating systems that are easy to use and work well, and I'm always trying to improve my skills and learn new technologies.",
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
    { name: "Bootstrap", icon: "🅱️", category: "frontend" },
    { name: "Vuetify", icon: "💠", category: "frontend" },
    { name: "shadcn/ui", icon: "🧩", category: "frontend" },
    { name: "PHP", icon: "🐘", category: "backend" },
    { name: "Laravel", icon: "🔶", category: "backend" },
    { name: "Inertia.js", icon: "🔗", category: "backend" },
    { name: "MySQL", icon: "🐬", category: "backend" },
    { name: "Git", icon: "📦", category: "tools" },
    { name: "GitHub", icon: "🐙", category: "tools" },
    { name: "VS Code", icon: "💻", category: "tools" },
    { name: "Figma", icon: "🖌️", category: "tools" },
    { name: "Postman", icon: "📮", category: "tools" },
    { name: "Asana", icon: "📋", category: "tools" },
  ];

  const experiences: Experience[] = [
    {
      id: "1",
      role: "YouTube UI Project",
      company: "Build simple UI YouTube",
      period: "2026 - Present",
      description: "Developed a desktop-based YouTube interface using Java Swing for the frontend and Oracle SQL for the database management. Focused on creating a robust, high-performance user experience with direct JDBC integration.",
      technologies: ["Java", "Java Swing", "Oracle SQL"],
      images: [
        "/images/experience/1/login.png",
        "/images/experience/1/dashboard.png",
        "/images/experience/1/manage-users.png",
        "/images/experience/1/user-detail.png",
        "/images/experience/1/manage-videos.png",
        "/images/experience/1/categories.png",
        "/images/experience/1/tags.png",
        "/images/experience/1/comments.png"
      ],
      categories: [
        {
          id: 'web_interface',
          items: [
            {
              id: 'discovery',
              period: 'WEB MODULE',
              subheading: 'Content Delivery Network',
              points: ['homepage', 'search', 'watch_page', 'subscriptions', 'history'],
              technologies: ['Thumbnail Display', 'Video Duration', 'View Counts']
            },
            {
              id: 'interaction',
              period: 'SOCIAL',
              subheading: 'Community Engagement',
              points: ['comments', 'channel_pages'],
              technologies: ['Swing UI', 'Event Listeners']
            },
            {
              id: 'creator_tools',
              period: 'TOOLS',
              subheading: 'Video Management System',
              points: ['upload_video', 'management', 'analytics', 'channel_customization'],
              technologies: ['Oracle BFILEs', 'File I/O']
            }
          ]
        },
        {
          id: 'admin_interface',
          items: [
            {
              id: 'overview',
              period: 'ADMIN',
              subheading: 'Core System Management',
              points: ['global_stats', 'visual_analytics'],
              technologies: ['Admin Dash', 'Chart Logic']
            },
            {
              id: 'user_management',
              period: 'USERS',
              subheading: 'Full Access Control',
              points: ['user_crud', 'access_control', 'role_management'],
              technologies: ['Security', 'CRUD']
            },
            {
              id: 'content_moderation',
              period: 'MODERATION',
              subheading: 'Security & Moderation',
              points: ['video_crud', 'upload_queue', 'metadata_control'],
              technologies: ['Approval Workflow', 'JDBC']
            },
            {
              id: 'system_features',
              period: 'SYSTEM',
              subheading: 'Platform Configuration',
              points: ['theme_toggle', 'interface_switching'],
              technologies: ['Swing Themes', 'State Management']
            }
          ]
        }
      ],
      keyDifferences: [
        { id: 'video_management' },
        { id: 'user_management' },
        { id: 'moderation' },
        { id: 'target_audience' }
      ]
    },
    {
      id: "2",
      role: "Frontend Developer",
      company: "Login & Register with Google",
      period: "2025 - 2026",
      description: "The primary purpose of LaravelLogin_register is to serve as a robust Authentication Boilerplate (or starter kit) for a modern web application.",
      technologies: ["Vue.js", "Inertia.js", "Laravel 12", "Tailwind CSS"],
      images: [
        "/images/experience/2/login.png",
        "/images/experience/2/google-auth.png",
        "/images/experience/2/google-choose-account.png",
        "/images/experience/2/google-auth-confirm.png",
        "/images/experience/2/dashboard.png",
        "/images/experience/2/profile.png"
      ],
      categories: [
        {
          id: 'purpose_section',
          items: [
            {
              id: 'core_purpose',
              subheading: 'Instead of writing an entire login structure from scratch every time you start a new application, this repository provides:',
              points: ['standard_login', 'sso_integration', 'dashboard_profile']
            }
          ]
        },
        {
          id: 'tech_section',
          items: [
            {
              id: 'stack',
              subheading: 'This project is built using the VILT Stack (Vue, Inertia, Laravel, Tailwind), a modern and highly popular tech stack combo:',
              points: ['backend', 'frontend', 'inertia', 'styling', 'auth_pkg', 'bundler']
            }
          ]
        },
        {
          id: 'workflow_section',
          items: [
            {
              id: 'guest_auth',
              subheading: 'A. Guest Access & Authentication. When a guest visits the root URL (/), they are automatically redirected to Login.vue.',
              points: ['standard_choice', 'social_choice', 'social_callback']
            },
            {
              id: 'auth_state',
              subheading: 'B. Authenticated State',
              points: ['dashboard', 'profile_management', 'logout']
            }
          ]
        }
      ]
    },
    {
      id: "3",
      role: "Hotel Booking",
      company: "Hotel Booking System",
      period: "2025 - 2026",
      description: "A full-featured hotel booking and management platform with guest browsing, room availability, payment processing, coupon system, reviews, and a complete admin dashboard with analytics and reports.",
      technologies: ["Laravel 12", "React 18", "Inertia.js", "Tailwind CSS", "Shadcn UI", "MySQL"],
      images: Array.from({ length: 39 }, (_, i) => `/images/hotel-booking/${i + 1}.png`),
    },
  ];

  const badges = [
    "Frontend Development",
    "Responsive Design",
    "TypeScript",
    "Modern Frameworks",
    "UI/UX Design",
    "Problem Solving",
  ];

  const socials = [
    {
      href: personalInfo.github,
      ariaLabel: "GitHub",
      tooltip: "GitHub",
      color: "#24292e",
      path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    },
    {
      href: personalInfo.linkedin,
      ariaLabel: "LinkedIn",
      tooltip: "LinkedIn",
      color: "#0A66C2",
      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      href: personalInfo.telegram,
      ariaLabel: "Telegram",
      tooltip: "Telegram",
      color: "#229ED9",
      path: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
    },
    {
      href: personalInfo.facebook,
      ariaLabel: "Facebook",
      tooltip: "Facebook",
      color: "#1877F2",
      path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    },
  ];

  return {
    personalInfo,
    projects,
    skills,
    experiences,
    badges,
    socials,
  };
};
