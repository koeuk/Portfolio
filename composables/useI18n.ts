type Language = "en" | "km" | "zh";

interface Translations {
  [key: string]: {
    en: string;
    km: string;
    zh: string;
  };
}

const translations: Translations = {
  // Navbar
  "nav.home": { en: "Home", km: "ទំព័រដើម", zh: "首页" },
  "nav.projects": { en: "Projects", km: "គម្រោង", zh: "项目" },
  "nav.skills": { en: "Skills", km: "ជំនាញ", zh: "技能" },
  "nav.experience": { en: "Experience", km: "បទពិសោធន៍", zh: "经验" },
  "nav.about": { en: "About", km: "អំពី", zh: "关于" },
  "nav.contact": { en: "Contact", km: "ទំនាក់ទំនង", zh: "联系" },
  "nav.blog": { en: "Blog", km: "ប្លក់", zh: "博客" },

  // Hero
  "hero.greeting": { en: "Hi, I'm", km: "សួស្តី ខ្ញុំឈ្មោះ", zh: "你好，我是" },
  "hero.role": {
    en: "Web Developer & Creative Thinker",
    km: "អ្នកបង្កើតវេបសាយ និង អ្នកគិតប្រកបដោយការច្នៃប្រឌិត",
    zh: "网页开发者 & 创意思考者",
  },
  "hero.cta": {
    en: "View My Work",
    km: "មើលការងាររបស់ខ្ញុំ",
    zh: "查看我的作品",
  },

  // Projects
  "projects.title": {
    en: "Featured Projects",
    km: "គម្រោងពិសេស",
    zh: "精选项目",
  },
  "projects.code": { en: "Code", km: "កូដ", zh: "代码" },
  "projects.demo": { en: "Live Demo", km: "សាកល្បង", zh: "在线演示" },

  // Skills
  "skills.title": {
    en: "Skills & Technologies",
    km: "ជំនាញ និង បច្ចេកវិទ្យា",
    zh: "技能与技术",
  },

  // Experience
  "experience.title": {
    en: "Work Experience",
    km: "បទពិសោធន៍ការងារ",
    zh: "工作经验",
  },
  "experience.1.role": {
    en: "Build simple UI YouTube",
    km: "ការកសាង UI YouTube ធម្មតា",
    zh: "构建简单的 YouTube UI",
  },
  "experience.1.company": {
    en: "Java & Oracle Developer",
    km: "អ្នកបង្កើត Java & Oracle",
    zh: "Java & Oracle 开发者",
  },
  "experience.1.description": {
    en: "Developed a desktop-based YouTube interface using Java Swing for the frontend and Oracle SQL for the database management. Focused on creating a robust, high-performance user experience with direct JDBC integration.",
    km: "បានបង្កើតចំណុចប្រទាក់ YouTube ដែលផ្អែកលើ desktop ដោយប្រើ Java Swing សម្រាប់ frontend និង Oracle SQL សម្រាប់ការគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ។ ផ្តោតលើការបង្កើតបទពិសោធន៍អ្នកប្រើប្រាស់ដែលរឹងមាំ និងមានប្រសិទ្ធភាពខ្ពស់ ជាមួយនឹងការតភ្ជាប់ JDBC ផ្ទាល់។",
    zh: "使用 Java Swing 开发桌面端 YouTube 界面，并采用 Oracle SQL 进行数据库管理。专注于创建稳健、高性能的用户体验，实现直接的 JDBC 集成。",
  },
  "experience.2.role": {
    en: "Digital Agency",
    km: "ភ្នាក់ងារឌីជីថល",
    zh: "数字代理公司",
  },
  "experience.2.company": {
    en: "Frontend Developer",
    km: "អ្នកបង្កើត Frontend",
    zh: "前端开发工程师",
  },
  "experience.2.description": {
    en: "Built responsive and performant web applications for diverse clients. Collaborated with designers and backend teams to deliver polished user experiences.",
    km: "បង្កើតកម្មវិធីវេបឆ្លើយតប និងមានប្រសិទ្ធភាពសម្រាប់អតិថិជនផ្សេងៗ។ សហការជាមួយអ្នករចនា និងក្រុម backend ដើម្បីផ្តល់បទពិសោធន៍អ្នកប្រើប្រាស់ល្អ។",
    zh: "为不同客户构建响应式高性能Web应用程序。与设计师和后端团队合作，交付精致的用户体验。",
  },
  "experience.3.role": {
    en: "Innovation Lab",
    km: "មន្ទីរពិសោធន៍ច្នៃប្រឌិត",
    zh: "创新实验室",
  },
  "experience.3.company": {
    en: "UI/UX Engineer",
    km: "វិស្វករ UI/UX",
    zh: "UI/UX 工程师",
  },
  "experience.3.description": {
    en: "Bridged the gap between design and development. Created high-fidelity prototypes and implemented complex UI components with a focus on accessibility.",
    km: "ភ្ជាប់គំលាតរវាងការរចនា និងការអភិវឌ្ឍន៍។ បង្កើតគំរូ prototype កម្រិតខ្ពស់ និងអនុវត្តសមាសភាគ UI ស្មុគស្មាញដោយផ្តោតលើ accessibility។",
    zh: "弥合设计与开发之间的差距。创建高保真原型并实现复杂的 UI 组件，重点关注可访问性。",
  },
  "experience.4.role": {
    en: "Startup Inc",
    km: "ក្រុមហ៊ុន Startup",
    zh: "创业公司",
  },
  "experience.4.company": {
    en: "Junior Web Developer",
    km: "អ្នកបង្កើតវេបសាយវ័យក្មេង",
    zh: "初级Web开发工程师",
  },
  "experience.4.description": {
    en: "Developed and maintained client-facing websites. Gained hands-on experience with modern frontend frameworks and agile development workflows.",
    km: "បង្កើត និងថែទាំវេបសាយសម្រាប់អតិថិជន។ ទទួលបានបទពិសោធន៍ជាក់ស្តែងជាមួយ framework frontend ទំនើប និងការអភិវឌ្ឍន៍ agile។",
    zh: "开发和维护面向客户的网站。获得了现代前端框架和敏捷开发工作流程的实践经验。",
  },
  "experience.5.role": {
    en: "Creative Studio",
    km: "ស្ទីឌីយោច្នៃប្រឌិត",
    zh: "创意工作室",
  },
  "experience.5.company": {
    en: "Web Development Intern",
    km: "កម្មសិក្សាការីអភិវឌ្ឍន៍វេបសាយ",
    zh: "网页开发实习生",
  },
  "experience.5.description": {
    en: "Assisted in the development of responsive landing pages and email templates. Learned industry best practices for clean code and performance optimization.",
    km: "ជួយក្នុងការអភិវឌ្ឍន៍ទំព័រ landing និងគំរូអ៊ីមែល។ រៀនពីការអនុវត្តល្អបំផុតសម្រាប់កូដស្អាត និងការធ្វើឱ្យប្រសើរឡើងនូវប្រសិទ្ធភាព។",
    zh: "协助开发响应式落地页和电子邮件模板。学习了行业在简洁代码和性能优化方面的最佳实践。",
  },
  "experience.6.role": {
    en: "Self-Employed",
    km: "ធ្វើការដោយខ្លួនឯង",
    zh: "自雇",
  },
  "experience.6.company": {
    en: "Freelance Developer",
    km: "អ្នកអភិវឌ្ឍន៍ឯករាជ្យ",
    zh: "自由职业开发者",
  },
  "experience.6.description": {
    en: "Designed and developed custom websites for small businesses. Managed full project lifecycles from initial concept to deployment and maintenance.",
    km: "រចនា និងអភិវឌ្ឍន៍វេបសាយតាមតម្រូវការសម្រាប់អាជីវកម្មខ្នាតតូច។ ដឹកនាំគម្រោងទាំងមូលចាប់ពីគំនិតដំបូងរហូតដល់ការដាក់ឱ្យប្រើប្រាស់ និងការថែទាំ។",
    zh: "为小型企业设计和开发定制网站。管理从最初概念到部署和维护的完整项目生命周期。",
  },
  "experience.7.role": {
    en: "GitHub Community",
    km: "សហគមន៍ GitHub",
    zh: "GitHub 社区",
  },
  "experience.7.company": {
    en: "Open Source Contributor",
    km: "អ្នករួមចំណែក Open Source",
    zh: "开源贡献者",
  },
  "experience.7.description": {
    en: "Contributed to various open-source projects, fixing bugs and implementing new features. Collaborated with developers worldwide and improved code quality.",
    km: "ចូលរួមចំណែកក្នុងគម្រោង open-source ផ្សេងៗ ការកែប្រែកំហុស និងការបង្កើតមុខងារថ្មីៗ។ សហការជាមួយអ្នកអភិវឌ្ឍន៍ជុំវិញពិភពលោក និងលើកកម្ពស់គុណភាពកូដ។",
    zh: "为各种开源项目做出贡献，修复 bug 并实现新功能。与全球开发者合作，提高了代码质量。",
  },

  // About
  "about.title": { en: "About Me", km: "អំពីខ្ញុំ", zh: "关于我" },
  "about.bio": {
    en: "Passionate web developer with expertise in modern JavaScript frameworks. I specialize in building beautiful, responsive websites and applications that solve real-world problems. With a focus on clean code and exceptional user experiences, I bring ideas to life through technology.",
    km: "អ្នកបង្កើតវេបសាយដែលមានចំណង់ចំណូលចិត្តជាមួយនឹងជំនាញក្នុង JavaScript frameworks ទំនើប។ ខ្ញុំមានជំនាញក្នុងការបង្កើតវេបសាយ និងកម្មវិធីដ៏ស្រស់ស្អាត ឆ្លើយតបបានល្អ ដែលដោះស្រាយបញ្ហាក្នុងពិភពពិត។",
    zh: "热情的网页开发者，精通现代JavaScript框架。我专注于构建美观、响应式的网站和应用程序，解决现实世界的问题。注重简洁的代码和卓越的用户体验，通过技术将想法变为现实。",
  },
  "about.keySkills": { en: "Key Skills", km: "ជំនាញសំខាន់ៗ", zh: "核心技能" },
  "about.downloadResume": {
    en: "Download Resume",
    km: "ទាញយក Resume",
    zh: "下载简历",
  },

  // About badges
  "badge.frontend": {
    en: "Frontend Development",
    km: "បង្កើត Frontend",
    zh: "前端开发",
  },
  "badge.responsive": {
    en: "Responsive Design",
    km: "រចនា Responsive",
    zh: "响应式设计",
  },
  "badge.typescript": { en: "TypeScript", km: "TypeScript", zh: "TypeScript" },
  "badge.frameworks": {
    en: "Modern Frameworks",
    km: "Frameworks ទំនើប",
    zh: "现代框架",
  },
  "badge.uiux": { en: "UI/UX Design", km: "រចនា UI/UX", zh: "UI/UX设计" },
  "badge.problemSolving": {
    en: "Problem Solving",
    km: "ដោះស្រាយបញ្ហា",
    zh: "问题解决",
  },

  // Contact
  "contact.title": { en: "Get In Touch", km: "ទាក់ទងមកខ្ញុំ", zh: "联系我" },
  "contact.subtitle": {
    en: "Let's Connect",
    km: "តោះភ្ជាប់ទំនាក់ទំនង",
    zh: "让我们联系",
  },
  "contact.description": {
    en: "I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to work together!",
    km: "ខ្ញុំតែងតែបើកចំហរចំពោះឱកាស និងការសហការថ្មីៗ។ សូមទាក់ទងមកខ្ញុំប្រសិនបើអ្នកចង់ធ្វើការជាមួយគ្នា!",
    zh: "我始终欢迎新的机会和合作。如果您想与我合作，请随时联系！",
  },
  "contact.name": { en: "Your Name", km: "ឈ្មោះរបស់អ្នក", zh: "您的姓名" },
  "contact.email": { en: "Your Email", km: "អ៊ីមែលរបស់អ្នក", zh: "您的邮箱" },
  "contact.message": { en: "Your Message", km: "សារររបស់អ្នក", zh: "您的留言" },
  "contact.send": { en: "Send Message", km: "ផ្ញើសារ", zh: "发送消息" },
  "contact.success": {
    en: "Message sent successfully!",
    km: "សារត្រូវបានផ្ញើដោយជោគជ័យ!",
    zh: "消息发送成功！",
  },
  "contact.error": {
    en: "Something went wrong. Please try again.",
    km: "មានបញ្ហា។ សូមព្យាយាមម្តងទៀត។",
    zh: "出错了，请重试。",
  },

  // Blog
  "blog.title": { en: "Blog", km: "ប្លក់", zh: "博客" },
  "blog.subtitle": {
    en: "Thoughts, tutorials, and insights about web development",
    km: "គំនិត ការបង្រៀន និងការយល់ដឹងអំពីការអភិវឌ្ឍន៍វេប",
    zh: "关于网页开发的想法、教程和见解"
  },
  "blog.comingSoon": {
    en: "Blog posts coming soon...",
    km: "អត្ថបទប្លក់នឹងមកដល់ឆាប់ៗ...",
    zh: "博客文章即将推出..."
  },
  "blog.tab.all": { en: "All", km: "ទាំងអស់", zh: "全部" },
  "blog.tab.laravel": { en: "Laravel", km: "Laravel", zh: "Laravel" },
  "blog.tab.vue": { en: "Vue", km: "Vue", zh: "Vue" },
  "blog.tab.typescript": { en: "TypeScript", km: "TypeScript", zh: "TypeScript" },
  "blog.tab.laravelVue": { en: "Laravel & Vue", km: "Laravel & Vue", zh: "Laravel & Vue" },
  "blog.tab.interview": { en: "Interview", km: "សំភាសន៍", zh: "面试" },
  "blog.tab.database": { en: "Database", km: "មូលដ្ឋានទិន្នន័យ", zh: "数据库" },
  "blog.noResults": {
    en: "No posts found for this filter.",
    km: "រកមិនឃើញអត្ថបទសម្រាប់តម្រងនេះទេ។",
    zh: "未找到此筛选条件的文章。"
  },
  "blog.backToBlog": { en: "Back to Blog", km: "ត្រឡប់ទៅប្លក់", zh: "返回博客" },
  "blog.summary": { en: "Summary", km: "សេចក្តីសង្ខេប", zh: "总结" },

  // Footer
  "footer.rights": {
    en: "All rights reserved.",
    km: "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    zh: "版权所有。",
  },
  "footer.built": {
    en: "Built with Nuxt.js, Vue.js & Tailwind CSS",
    km: "បង្កើតដោយ Nuxt.js, Vue.js & Tailwind CSS",
    zh: "使用 Nuxt.js, Vue.js & Tailwind CSS 构建",
  },

  // Project descriptions
  "project.ecommerce.title": {
    en: "E-Commerce Platform",
    km: "វេទិកាអេឡិចត្រូនិក",
    zh: "电商平台",
  },
  "project.ecommerce.desc": {
    en: "Full-stack e-commerce solution with secure payment integration, inventory management, and modern shopping experience",
    km: "ដំណោះស្រាយអេឡិចត្រូនិកពេញលេញជាមួយនឹងការបង់ប្រាក់សុវត្ថិភាព ការគ្រប់គ្រងស្តុក និងបទពិសោធន៍ទិញទំនិញទំនើប",
    zh: "全栈电商解决方案，包含安全支付集成、库存管理和现代购物体验",
  },
  "project.taskapp.title": {
    en: "Task Management App",
    km: "កម្មវិធីគ្រប់គ្រងភារកិច្ច",
    zh: "任务管理应用",
  },
  "project.taskapp.desc": {
    en: "Collaborative task manager with real-time updates, drag-and-drop functionality, and team collaboration features",
    km: "កម្មវិធីគ្រប់គ្រងភារកិច្ចសហការជាមួយនឹងការធ្វើបច្ចុប្បន្នភាពភ្លាមៗ មុខងារអូសដាក់ និងមុខងារសហការក្រុម",
    zh: "协作任务管理器，具有实时更新、拖放功能和团队协作功能",
  },
  "project.portfolio.title": {
    en: "Portfolio Website",
    km: "វេបសាយ Portfolio",
    zh: "作品集网站",
  },
  "project.portfolio.desc": {
    en: "Clean and modern portfolio showcasing projects with smooth animations and responsive design",
    km: "Portfolio ស្អាត និងទំនើប បង្ហាញគម្រោងជាមួយនឹងចលនារលូន និងការរចនា responsive",
    zh: "简洁现代的作品集，展示项目，具有流畅动画和响应式设计",
  },
  "project.weather.title": {
    en: "Weather Dashboard",
    km: "ផ្ទាំងព័ត៌មានអាកាសធាតុ",
    zh: "天气仪表板",
  },
  "project.weather.desc": {
    en: "Real-time weather application with beautiful visualizations, forecasts, and location-based services",
    km: "កម្មវិធីអាកាសធាតុពេលវេលាពិត ជាមួយនឹងការបង្ហាញស្រស់ស្អាត ការព្យាករណ៍ និងសេវាកម្មផ្អែកលើទីតាំង",
    zh: "实时天气应用，具有精美可视化、天气预报和基于位置的服务",
  },
  "project.social.title": {
    en: "Social Media App",
    km: "កម្មវិធីបណ្តាញសង្គម",
    zh: "社交媒体应用",
  },
  "project.social.desc": {
    en: "Modern social platform with real-time messaging, post sharing, and user interactions",
    km: "វេទិកាសង្គមទំនើប ជាមួយនឹងការផ្ញើសារភ្លាមៗ ការចែករំលែកប្រកាស និងអន្តរកម្មអ្នកប្រើប្រាស់",
    zh: "现代社交平台，具有实时消息、帖子分享和用户互动功能",
  },
  "project.blog.title": {
    en: "Blog Platform",
    km: "វេទិកាប្លក់",
    zh: "博客平台",
  },
  "project.blog.desc": {
    en: "Content management system with markdown support, SEO optimization, and admin dashboard",
    km: "ប្រព័ន្ធគ្រប់គ្រងខ្លឹមសារ ជាមួយនឹងការគាំទ្រ markdown ការធ្វើឱ្យប្រសើរ SEO និងផ្ទាំងគ្រប់គ្រង",
    zh: "内容管理系统，支持Markdown、SEO优化和管理员仪表板",
  },
  "project.fitness.title": {
    en: "Fitness Tracker",
    km: "កម្មវិធីតាមដានសុខភាព",
    zh: "健身追踪器",
  },
  "project.fitness.desc": {
    en: "Health and fitness app with workout tracking, progress charts, and personalized plans",
    km: "កម្មវិធីសុខភាព និងកាយសម្បទា ជាមួយនឹងការតាមដានលំហាត់ប្រាណ តារាងវឌ្ឍនភាព និងផែនការផ្ទាល់ខ្លួន",
    zh: "健康健身应用，具有锻炼追踪、进度图表和个性化计划",
  },
};

export const useI18n = () => {
  const currentLang = useState<Language>("lang", () => "en");

  const setLanguage = (lang: Language) => {
    currentLang.value = lang;
    if (process.client) {
      localStorage.setItem("lang", lang);
    }
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[currentLang.value] || translation.en || key;
  };

  const initLang = () => {
    if (process.client) {
      const saved = localStorage.getItem("lang") as Language | null;
      if (saved && ["en", "km", "zh"].includes(saved)) {
        currentLang.value = saved;
      }
    }
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "km", name: "ខ្មែរ", flag: "🇰🇭" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
  ];

  return {
    currentLang,
    setLanguage,
    t,
    initLang,
    languages,
  };
};
