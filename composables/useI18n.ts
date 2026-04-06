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
  "nav.github": { en: "GitHub", km: "GitHub", zh: "GitHub" },
  "nav.personalProjects": { en: "Projects", km: "គម្រោង", zh: "项目" },
  "nav.workExperience": { en: "Experience", km: "បទពិសោធន៍", zh: "经验" },
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
    en: "Personal Projects",
    km: "គម្រោងផ្ទាល់ខ្លួន",
    zh: "个人项目",
  },
  "projects.code": { en: "Code", km: "កូដ", zh: "代码" },
  "projects.demo": { en: "Live Demo", km: "សាកល្បង", zh: "在线演示" },
  "projects.seeMore": { en: "See More", km: "មើលបន្ថែម", zh: "查看更多" },

  // Skills
  "skills.title": {
    en: "Skills & Technologies",
    km: "ជំនាញ និង បច្ចេកវិទ្យា",
    zh: "技能与技术",
  },
  "skills.seeMore": {
    en: "See More",
    km: "មើលបន្ថែម",
    zh: "查看更多",
  },
  "skills.all": {
    en: "All Skills & Technologies",
    km: "ជំនាញ និង បច្ចេកវិទ្យាទាំងអស់",
    zh: "所有技能与技术",
  },
  "skills.frontend": {
    en: "Frontend",
    km: "ផ្នែកខាងមុខ",
    zh: "前端",
  },
  "skills.backend": {
    en: "Backend",
    km: "ផ្នែកខាងក្រោយ",
    zh: "后端",
  },
  "skills.tools": {
    en: "Tools",
    km: "ឧបករណ៍",
    zh: "工具",
  },
  "skills.backHome": {
    en: "Back to Home",
    km: "ត្រឡប់ទំព័រដើម",
    zh: "返回首页",
  },

  // Experience
  "experience.title": {
    en: "Personal Projects",
    km: "គម្រោងផ្ទាល់ខ្លួន",
    zh: "个人项目",
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
  "experience.1.web_interface.title": {
    en: "🌐 Web Interface (User/Creator)",
    km: "🌐 ផ្ទាំងបណ្តាញ (អ្នកប្រើប្រាស់/អ្នកបង្កើត)",
    zh: "🌐 Web 界面（用户/创作者）",
  },
  "experience.1.web_interface.discovery.label": {
    en: "1. Discovery & Viewing",
    km: "1. ស្វែងរក និង កម្សាន្ត",
    zh: "1. 发现与观看",
  },
  "experience.1.web_interface.discovery.period": {
    en: "WEB MODULE",
    km: "ផ្នែក Web",
    zh: "WEB 模块",
  },
  "experience.1.web_interface.discovery.subheading": {
    en: "Content Delivery Network",
    km: "បណ្តាញចែកចាយមាតិកា",
    zh: "内容分发网络",
  },
  "experience.1.web_interface.discovery.homepage": {
    en: "Homepage: Browse a 4-column grid of videos with thumbnails, durations, and view counts.",
    km: "ទំព័រដើម: មើលវីដេអូជាក្រឡាចត្រង្គ៤ជួរ ជាមួយនឹងរូបភាពតំណាង រយៈពេល និងចំនួនអ្នកមើល។",
    zh: "首页：浏览4列视频网格，包含缩略图、时长和观看次数。",
  },
  "experience.1.web_interface.discovery.search": {
    en: "Search: Filter videos by keywords in titles and descriptions.",
    km: "ស្វែងរក: ត្រងវីដេអូតាមពាក្យគន្លឹះនៅក្នុងចំណងជើងនិងការពិពណ៌នា។",
    zh: "搜索：按标题和描述中的关键字过滤视频。",
  },
  "experience.1.web_interface.discovery.watch_page": {
    en: "Watch Page: Play videos, toggle Likes/Dislikes, and share video URLs to the clipboard.",
    km: "ទំព័រមើល: លេងវីដេអូ, ចូលចិត្ត/មិនចូលចិត្ត, និងចែករំលែកតំណបណ្ដាញទៅក្ដារតម្បៀតខ្ទាស់។",
    zh: "观看页面：播放视频，切换喜欢/不喜欢，并将视频URL分享到剪贴板。",
  },
  "experience.1.web_interface.discovery.subscriptions": {
    en: "Subscriptions: Follow channels to see their latest uploads in a dedicated feed.",
    km: "ការជាវ: តាមដានប៉ុស្តិ៍នានាដើម្បីមើលការបង្ហោះចុងក្រោយរបស់ពួកគេនៅក្នុងផ្ទាំងបញ្ជីពិសេស។",
    zh: "订阅：关注频道以在专用动态中查看他们的最新上传。",
  },
  "experience.1.web_interface.discovery.history": {
    en: "History: View watch history organized by date (Today, Yesterday, etc.) and clear it if needed.",
    km: "ប្រវត្តិ: មើលប្រវត្តិមើលរៀបចំតាមកាលបរិច្ឆេទ (ថ្ងៃនេះ ម្សិលមិញ ល។) និងអាចលុបបាន។",
    zh: "历史记录：按日期（今天、昨天等）查看观看历史记录，并在需要时清除。",
  },

  "experience.1.web_interface.interaction.label": {
    en: "2. Social Interaction",
    km: "2. ទំនាក់ទំនងសង្គម",
    zh: "2. 社交互动",
  },
  "experience.1.web_interface.interaction.period": {
    en: "SOCIAL",
    km: "សង្គម",
    zh: "社交",
  },
  "experience.1.web_interface.interaction.subheading": {
    en: "Community Engagement",
    km: "ការចូលរួមរបស់សហគមន៍",
    zh: "社区参与",
  },
  "experience.1.web_interface.interaction.comments": {
    en: "Comments: Post new comments, reply to existing ones, sort by 'Top' or 'Newest,' and like comments.",
    km: "មតិយោបល់: បង្ហោះមតិយោបល់ថ្មី, ឆ្លើយតប, តម្រៀបតាម 'កំពូល' ឬ 'ថ្មីបំផុត', និងចូលចិត្តមតិយោបល់។",
    zh: "评论：发布新评论，回复现有评论，按“热门”或“最新”排序，以及点赞评论。",
  },
  "experience.1.web_interface.interaction.channel_pages": {
    en: "Channel Pages: Visit any creator's public profile to see their banner, stats, and all uploaded videos.",
    km: "ទំព័រប៉ុស្តិ៍: ចូលទៅកាន់ប្រវត្តិរូបសាធារណៈរបស់អ្នកបង្កើតដើម្បីមើលបដា, ស្ថិតិ និងវីដេអូទាំងអស់។",
    zh: "频道页面：访问任何创作者的公开个人资料以查看其横幅、统计数据和所有上传的视频。",
  },

  "experience.1.web_interface.creator_tools.label": {
    en: "3. Creator Tools (YouTube Studio)",
    km: "3. ឧបករណ៍អ្នកបង្កើត",
    zh: "3. 创作者工具",
  },
  "experience.1.web_interface.creator_tools.period": {
    en: "TOOLS",
    km: "ឧបករណ៍",
    zh: "工具",
  },
  "experience.1.web_interface.creator_tools.subheading": {
    en: "Video Management System",
    km: "ប្រព័ន្ធគ្រប់គ្រងវីដេអូ",
    zh: "视频管理系统",
  },
  "experience.1.web_interface.creator_tools.upload_video": {
    en: "Upload Video: Upload .mp4 files and thumbnails. Creators can set Title, Description, Category, Tags, and Privacy.",
    km: "បង្ហោះវីដេអូ: បង្ហោះឯកសារ .mp4 និងរូបថត (Oracle BFILEs)។ អ្នកបង្កើតអាចកំណត់ចំណងជើង, ការពិពណ៌នា, ប្រភេទ និងឯកជនភាព។",
    zh: "上传视频：上传 .mp4 文件和缩略图。可以设置标题、描述、类别、标签和隐私。",
  },
  "experience.1.web_interface.creator_tools.management": {
    en: "Management: A 'Studio' view to edit video details, delete uploads, or filter videos by status.",
    km: "ការគ្រប់គ្រង: ទិដ្ឋភាព 'Studio' ដើម្បីកែសម្រួលព័ត៌មានលម្អិត, លុប, ឬត្រងវីដេអូតាមស្ថានភាព។",
    zh: "管理：提供“工作室”视图以编辑视频详细信息、删除上传的视频或按状态过滤视频。",
  },
  "experience.1.web_interface.creator_tools.analytics": {
    en: "Analytics: A dashboard showing Total Views, Watch Time, Subscriber growth, and Revenue charts.",
    km: "ការវិភាគ: តារាងបង្ហាញចំនួនមើលសរុប, ពេលវេលាមើល, រង្វាស់អ្នកជាវ, និងប្រាក់ចំណូល។",
    zh: "分析：显示总观看次数、观看时间、订阅者增长和收入图表的仪表板。",
  },
  "experience.1.web_interface.creator_tools.channel_customization": {
    en: "Channel Customization: Update personal channel branding and info.",
    km: "ការរៀបចំប៉ុស្តិ៍: ធ្វើបច្ចុប្បន្នភាពស្លាកយីហោនិងព័ត៌មានប៉ុស្តិ៍ផ្ទាល់ខ្លួន។",
    zh: "频道定制：更新个人频道品牌信息。",
  },

  "experience.1.admin_interface.title": {
    en: "🛡️ Admin Interface",
    km: "🛡️ ផ្ទាំងគ្រប់គ្រង",
    zh: "🛡️ 管理界面",
  },
  "experience.1.admin_interface.overview.label": {
    en: "1. Platform Overview (Dashboard)",
    km: "1. ទិដ្ឋភាពប្រព័ន្ធទូទៅ",
    zh: "1. 平台概述",
  },
  "experience.1.admin_interface.overview.period": {
    en: "ADMIN",
    km: "អ្នកគ្រប់គ្រង",
    zh: "管理员",
  },
  "experience.1.admin_interface.overview.subheading": {
    en: "Core System Management",
    km: "ការគ្រប់គ្រងប្រព័ន្ធស្នូល",
    zh: "核心系统管理",
  },
  "experience.1.admin_interface.overview.global_stats": {
    en: "Global Stats: Real-time counts of total users, videos, views, channels, and comments.",
    km: "ស្ថិតិសកល: រាប់ចំនួនអ្នកប្រើប្រាស់ វីដេអូ អ្នកមើល ប៉ុស្តិ៍ និងមតិយោបល់ក្នុងពេលជាក់ស្តែង។",
    zh: "全局统计：实时汇总总用户数、视频数、观看次数、频道数和评论数。",
  },
  "experience.1.admin_interface.overview.visual_analytics": {
    en: "Visual Analytics: Pie and bar charts showing User distribution, Video categories, Engagement, and Privacy.",
    km: "តារាងវិភាគ: តារាងផៃនិងរបារបង្ហាញការចែកចាយអ្នកប្រើប្រាស់ ប្រភេទវីដេអូ និងការចូលរួម។",
    zh: "可视化分析：饼图和条形图显示用户分布、视频分类、互动和隐私情况。",
  },

  "experience.1.admin_interface.user_management.label": {
    en: "2. User Management",
    km: "2. គ្រប់គ្រងអ្នកប្រើប្រាស់",
    zh: "2. 用户管理",
  },
  "experience.1.admin_interface.user_management.period": {
    en: "USERS",
    km: "អ្នកប្រើប្រាស់",
    zh: "用户",
  },
  "experience.1.admin_interface.user_management.subheading": {
    en: "Full Access Control",
    km: "គ្រប់គ្រងការចូលប្រើប្រាស់ពេញលេញ",
    zh: "全面访问控制",
  },
  "experience.1.admin_interface.user_management.user_crud": {
    en: "Full CRUD: Create, View, Edit, and Delete users.",
    km: "CRUD ពេញលេញ: បង្កើត មើល កែសម្រួល និងលុបអ្នកប្រើប្រាស់។",
    zh: "完全 CRUD：创建、查看、编辑和删除用户。",
  },
  "experience.1.admin_interface.user_management.access_control": {
    en: "Access Control: Activate or Deactivate accounts. Deactivated users cannot log in.",
    km: "គ្រប់គ្រងសិទ្ធិ: បើក ឬ បិទគណនី។ អ្នកប្រើប្រាស់ដែលត្រូវបានបិទមិនអាចចូលបានទេ។",
    zh: "访问控制：激活或停用账户。停用的用户无法登录Web界面。",
  },
  "experience.1.admin_interface.user_management.role_management": {
    en: "Role Management: Assign roles like USER, MODERATOR, or ADMIN.",
    km: "ការគ្រប់គ្រងតួនាទី: ផ្ដល់តួនាទីដូចជា USER, MODERATOR, ឬ ADMIN។",
    zh: "角色管理：分配角色，如 USER、MODERATOR 或 ADMIN。",
  },

  "experience.1.admin_interface.content_moderation.label": {
    en: "3. Content Moderation & Management",
    km: "3. គ្រប់គ្រងមាតិកានិងត្រួតពិនិត្យ",
    zh: "3. 内容审核与管理",
  },
  "experience.1.admin_interface.content_moderation.period": {
    en: "MODERATION",
    km: "ការត្រួតពិនិត្យ",
    zh: "审核",
  },
  "experience.1.admin_interface.content_moderation.subheading": {
    en: "Security & Moderation",
    km: "សុវត្ថិភាព និង ការត្រួតពិនិត្យ",
    zh: "安全与审核",
  },
  "experience.1.admin_interface.content_moderation.video_crud": {
    en: "Video CRUD: Add videos manually, edit metadata, or delete content across the platform.",
    km: "CRUD វីដេអូ: បន្ថែមវីដេអូដោយដៃ, កែសម្រួល, ឬលុបមាតិកានៅទូទាំងប្រព័ន្ធ។",
    zh: "视频 CRUD：管理员可以手动添加视频、编辑任何视频的元数据或删除全平台内容。",
  },
  "experience.1.admin_interface.content_moderation.upload_queue": {
    en: "Upload Queue: A 'Manage Uploads' section to Approve or Reject videos before they become public.",
    km: "បញ្ជីបង្ហោះ: ផ្នែក 'គ្រប់គ្រងបង្ហោះ' ដើម្បីអនុម័តឬបដិសេធវីដេអូមុនពេលវាក្លាយជាសាធារណៈ។",
    zh: "上传队列：专用的“管理上传”部分，管理员可以在视频公开前批准或拒绝。",
  },
  "experience.1.admin_interface.content_moderation.metadata_control": {
    en: "Metadata Control: Manage the system's video categories, tags, and comments.",
    km: "គ្រប់គ្រងទិន្នន័យ: គ្រប់គ្រងប្រភេទវីដេអូ ស្លាក និងមតិយោបល់នៃប្រព័ន្ធ។",
    zh: "元数据控制：管理系统的视频类别、标签和评论。",
  },

  "experience.1.admin_interface.system_features.label": {
    en: "4. System Features",
    km: "4. មុខងារប្រព័ន្ធ",
    zh: "4. 系统功能",
  },
  "experience.1.admin_interface.system_features.period": {
    en: "SYSTEM",
    km: "ប្រព័ន្ធ",
    zh: "系统",
  },
  "experience.1.admin_interface.system_features.subheading": {
    en: "Platform Configuration",
    km: "ការរៀបចំប្រព័ន្ធ",
    zh: "平台配置",
  },
  "experience.1.admin_interface.system_features.theme_toggle": {
    en: "Theme Toggle: Switch the admin UI between Dark Mode and Light Mode.",
    km: "បិទបើកស្បែក: ប្តូរផ្ទាំងគ្រប់គ្រងរវាងរបៀបងងឹត និង របៀបភ្លឺ។",
    zh: "主题切换：在深色模式和浅色模式之间切换整个管理 UI。",
  },
  "experience.1.admin_interface.system_features.interface_switching": {
    en: "Interface Switching: A quick-access button to jump back to the User interface.",
    km: "ប្តូរផ្ទាំង: ប៊ូតុងចូលរហ័សដើម្បីត្រលប់ទៅផ្ទាំងអ្នកប្រើប្រាស់វិញ។",
    zh: "界面切换：快速访问按钮，可跳回用户界面。",
  },

  "experience.1.key_differences.title": {
    en: "Key Differences",
    km: "ភាពខុសគ្នាសំខាន់ៗ",
    zh: "主要区别",
  },
  "experience.1.key_differences.feature.title": {
    en: "Feature",
    km: "មុខងារ",
    zh: "功能",
  },
  "experience.1.key_differences.web.title": {
    en: "Web (User)",
    km: "Web (អ្នកប្រើប្រាស់)",
    zh: "Web（用户）",
  },
  "experience.1.key_differences.admin.title": {
    en: "Admin",
    km: "អ្នកគ្រប់គ្រង",
    zh: "管理员",
  },

  "experience.1.key_differences.video_management.feature": {
    en: "Video Management",
    km: "ការគ្រប់គ្រងវីដេអូ",
    zh: "视频管理",
  },
  "experience.1.key_differences.video_management.web": {
    en: "Only their own videos",
    km: "មានសិទ្ធិតែវីដេអូរបស់ពួកគេផ្ទាល់",
    zh: "仅限他们自己的视频",
  },
  "experience.1.key_differences.video_management.admin": {
    en: "All videos on the platform",
    km: "វីដេអូទាំងអស់នៅលើប្រព័ន្ធ",
    zh: "平台上的所有视频",
  },

  "experience.1.key_differences.user_management.feature": {
    en: "User Management",
    km: "គ្រប់គ្រងអ្នកប្រើប្រាស់",
    zh: "用户管理",
  },
  "experience.1.key_differences.user_management.web": {
    en: "Profile editing only",
    km: "កែសម្រួលប្រវត្តិរូបប៉ុណ្ណោះ",
    zh: "仅限编辑个人资料",
  },
  "experience.1.key_differences.user_management.admin": {
    en: "Full control over all accounts",
    km: "គ្រប់គ្រងគណនីទាំងអស់ពេញលេញ",
    zh: "完全控制所有帐户",
  },

  "experience.1.key_differences.moderation.feature": {
    en: "Moderation",
    km: "ការត្រួតពិនិត្យ",
    zh: "审核",
  },
  "experience.1.key_differences.moderation.web": {
    en: "Report/Comment",
    km: "រាយការណ៍/មតិយោបល់",
    zh: "举报/评论",
  },
  "experience.1.key_differences.moderation.admin": {
    en: "Approve/Reject uploads",
    km: "អនុម័ត/បដិសេធការបង្ហោះ",
    zh: "批准/拒绝上传",
  },

  "experience.1.key_differences.target_audience.feature": {
    en: "Target Audience",
    km: "ទស្សនិកជនគោលដៅ",
    zh: "目标受众",
  },
  "experience.1.key_differences.target_audience.web": {
    en: "Viewers & Creators",
    km: "អ្នកទស្សនា & អ្នកបង្កើត",
    zh: "观众和创作者",
  },
  "experience.1.key_differences.target_audience.admin": {
    en: "Platform Operators",
    km: "អ្នកប្រតិបត្តិការប្រព័ន្ធ",
    zh: "平台运营商",
  },
  "experience.1.description": {
    en: "Developed a desktop-based YouTube interface using Java Swing for the frontend and Oracle SQL for the database management. Focused on creating a robust, high-performance user experience with direct JDBC integration.",
    km: "បានបង្កើតចំណុចប្រទាក់ YouTube ដែលផ្អែកលើ desktop ដោយប្រើ Java Swing សម្រាប់ frontend និង Oracle SQL សម្រាប់ការគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ។ ផ្តោតលើការបង្កើតបទពិសោធន៍អ្នកប្រើប្រាស់ដែលរឹងមាំ និងមានប្រសិទ្ធភាពខ្ពស់ ជាមួយនឹងការតភ្ជាប់ JDBC ផ្ទាល់។",
    zh: "使用 Java Swing 开发桌面端 YouTube 界面，并采用 Oracle SQL 进行数据库管理。专注于创建稳健、高性能的用户体验，实现直接的 JDBC 集成。",
  },
  "experience.2.role": {
    en: "Login & Register with Google",
    km: "ចូលប្រើ និងចុះឈ្មោះជាមួយ Google",
    zh: "使用 Google 登录和注册",
  },
  "experience.2.company": {
    en: "Frontend Developer",
    km: "អ្នកបង្កើត Frontend",
    zh: "前端开发工程师",
  },
  "experience.2.description": {
    en: "The primary purpose of LaravelLogin_register is to serve as a robust Authentication Boilerplate (or starter kit) for a modern web application.",
    km: "គោលបំណងចម្បងនៃ LaravelLogin_register គឺដើម្បីបម្រើជាឧបករណ៍ផ្ទៀងផ្ទាត់រឹងមាំ (ឬកញ្ចប់ចាប់ផ្តើម) សម្រាប់កម្មវិធីវេបទំនើប។",
    zh: "LaravelLogin_register 的主要目的是作为现代 Web 应用程序的强大身份验证样板（或入门套件）。",
  },
  "experience.2.purpose_section.title": {
    en: "1. The Purpose",
    km: "1. គោលបំណង",
    zh: "1. 目的",
  },
  "experience.2.purpose_section.core_purpose.label": {
    en: "Core Purpose",
    km: "គោលបំណងចម្បង",
    zh: "核心目的",
  },
  "experience.2.purpose_section.core_purpose.standard_login": {
    en: "A fully functional standard login and registration system.",
    km: "ប្រព័ន្ធចូលប្រើ និងចុះឈ្មោះធម្មតាដែលដំណើរការពេញលេញ។",
    zh: "功能齐全的标准登录和注册系统。",
  },
  "experience.2.purpose_section.core_purpose.sso_integration": {
    en: "Seamless Single Sign-On (SSO) integration linking a user to their Google, Facebook, and Apple accounts.",
    km: "ការរួមបញ្ចូល Single Sign-On (SSO) យ៉ាងរលូនដែលភ្ជាប់អ្នកប្រើប្រាស់ទៅគណនី Google, Facebook និង Apple របស់ពួកគេ។",
    zh: "无缝的单点登录 (SSO) 集成，将用户链接到他们的 Google、Facebook 和 Apple 帐户。",
  },
  "experience.2.purpose_section.core_purpose.dashboard_profile": {
    en: "A dashboard and user profile management page where users can update their details and passwords securely.",
    km: "ផ្ទាំងគ្រប់គ្រង និងទំព័រគ្រប់គ្រងប្រវត្តិរូបអ្នកប្រើប្រាស់ដែលអ្នកប្រើប្រាស់អាចធ្វើបច្ចុប្បន្នភាពព័ត៌មានលម្អិត និងពាក្យសម្ងាត់របស់ពួកគេដោយសុវត្ថិភាព។",
    zh: "仪表板和用户个人资料管理页面，用户可以在其中安全地更新其详细信息和密码。",
  },

  "experience.2.tech_section.title": {
    en: "🛠 2. Programs and Technologies Used",
    km: "🛠 2. កម្មវិធី និងបច្ចេកវិទ្យាដែលបានប្រើ",
    zh: "🛠 2. 使用的程序和技术",
  },
  "experience.2.tech_section.stack.label": {
    en: "VILT Stack",
    km: "បច្ចេកវិទ្យា VILT Stack",
    zh: "VILT 技术栈",
  },
  "experience.2.tech_section.stack.backend": {
    en: "Backend / Core Engine: Laravel 12 (PHP 8.2+). Laravel handles all business logic, database queries, routing, middleware security, and session management.",
    km: "ខ្នងបង្អែក / ម៉ាស៊ីនស្នូល: Laravel 12 (PHP 8.2+)។ Laravel ដោះស្រាយតក្កវិទ្យាអាជីវកម្ម សំណួរមូលដ្ឋានទិន្នន័យ ផ្លូវ សុវត្ថិភាព middleware និងការគ្រប់គ្រងសម័យប្រជុំ។",
    zh: "后端/核心引擎：Laravel 12 (PHP 8.2+)。Laravel 处理所有业务逻辑、数据库查询、路由、中间件安全和会话管理。",
  },
  "experience.2.tech_section.stack.frontend": {
    en: "Frontend UI: Vue.js 3 (JavaScript). Vue handles all the interactive visual elements (components, pages, forms).",
    km: "UI ផ្នែកខាងមុខ: Vue.js 3 (JavaScript)។ Vue គ្រប់គ្រងកម្មវិធីអន្តរកម្មដែលអាចមើលឃើញទាំងអស់ (សមាសភាគ ទំព័រ ទម្រង់)។",
    zh: "前端 UI：Vue.js 3（JavaScript）。Vue 处理所有交互式视觉元素（组件、页面、表单）。",
  },
  "experience.2.tech_section.stack.inertia": {
    en: "The Bridge: Inertia.js. Inertia acts as the 'glue' between Laravel and Vue. It allows you to build a Single-Page Application (SPA) without needing to configure complex, separate REST APIs.",
    km: "ស្ពានភ្ជាប់: Inertia.js ជា 'កាវ' រវាង Laravel និង Vue។ វាអនុញ្ញាតឱ្យអ្នកបង្កើតកម្មវិធី Single-Page (SPA) មួយដោយមិនចាំបាច់មាន REST APIs ដាច់ដោយឡែកដ៏ស្មុគស្មាញ។",
    zh: "桥梁：Inertia.js 充当 Laravel 和 Vue 之间的“粘合剂”。它允许您构建单页应用程序 (SPA)，而无需配置复杂的独立 REST API。",
  },
  "experience.2.tech_section.stack.styling": {
    en: "Styling: Tailwind CSS 4.0. A utility-first CSS framework used to design the user interface without writing custom CSS files.",
    km: "ការរចនា: Tailwind CSS 4.0។ ជា framework CSS សម្រាប់រចនាចំណុចប្រទាក់អ្នកប្រើប្រាស់ដោយមិនសរសេរឯកសារ CSS ផ្ទាល់ខ្លួន។",
    zh: "样式：Tailwind CSS 4.0。用于设计用户界面的实用优先 CSS 框架，无需编写自定义 CSS 文件。",
  },
  "experience.2.tech_section.stack.auth_pkg": {
    en: "Authentication Package: Laravel Socialite. Makes social OAuth integrations (Google, Facebook, Apple) incredibly simple and secure.",
    km: "កញ្ចប់ផ្ទៀងផ្ទាត់: Laravel Socialite ធ្វើឱ្យការរួមបញ្ចូលសង្គម OAuth ងាយស្រួល និងមានសុវត្ថិភាព។",
    zh: "身份验证包：Laravel Socialite。使社交 OAuth 集成不仅简单而且非常安全。",
  },
  "experience.2.tech_section.stack.bundler": {
    en: "Bundler: Vite. Responsible for compiling and hot-reloading your Vue components and Tailwind styles during development.",
    km: "Bundler: Vite។ ទទួលខុសត្រូវក្នុងការចងក្រង និងផ្ទុកឡើងវិញសមាសភាគ Vue របស់អ្នកកំឡុងពេលអភិវឌ្ឍ។",
    zh: "打包工具：Vite。负责在开发过程中编译和热重载 Vue 组件和 Tailwind 样式。",
  },

  "experience.2.workflow_section.title": {
    en: "🔄 3. Application Workflow",
    km: "🔄 3. លំហូរការងាររបស់កម្មវិធី",
    zh: "🔄 3. 应用程序工作流程",
  },
  "experience.2.workflow_section.guest_auth.label": {
    en: "Guest Access & Authentication",
    km: "ការចូលប្រើរបស់អ្នកទស្សនា និងផ្ទៀងផ្ទាត់",
    zh: "访客访问和身份验证",
  },
  "experience.2.workflow_section.guest_auth.standard_choice": {
    en: "Choice of Login (Standard): A user submits their email and password. The LoginController validates it and creates a session.",
    km: "ជម្រើសចូលប្រើ (ធម្មតា): អ្នកប្រើប្រាស់បញ្ជូនអ៊ីមែល និងពាក្យសម្ងាត់។ LoginController ផ្ទៀងផ្ទាត់ និងបង្កើតសម័យថ្មី។",
    zh: "登录选择（标准）：用户提交其邮箱和密码。LoginController 对其进行验证并创建会话。",
  },
  "experience.2.workflow_section.guest_auth.social_choice": {
    en: "Social Login: A user clicks 'Sign in with Google'. The GoogleController calls Socialite to redirect the user to Google's permission screen.",
    km: "ការចូលប្រើតាមប្រព័ន្ធសង្គម: ចុច 'ចូលប្រើជាមួយ Google'។ GoogleController ហៅ Socialite ទៅទំព័រអនុញ្ញាតរបស់ Google។",
    zh: "社交登录：用户点击“使用 Google 登录”。GoogleController 调起 Socialite 重定向到谷歌权限界面。",
  },
  "experience.2.workflow_section.guest_auth.social_callback": {
    en: "Callback: The app reads the user's Google ID. If it's a new user, it saves their info and logs them in automatically.",
    km: "កម្មវិធីអាន Google ID របស់អ្នកប្រើប្រាស់។ ប្រសិនបើថ្មី វារក្សាទុកព័ត៌មាន និងឱ្យពួកគេចូលដោយស្វ័យប្រវត្តិ។",
    zh: "回调：应用程序读取用户的 Google ID。如果是新用户，则自动生成用户保存并登录。",
  },
  "experience.2.workflow_section.auth_state.label": {
    en: "Authenticated State",
    km: "រដ្ឋដែលបានផ្ទៀងផ្ទាត់",
    zh: "已验证状态",
  },
  "experience.2.workflow_section.auth_state.dashboard": {
    en: "Dashboard: User is redirected to /dashboard. Protected by auth middleware, only logged-in users can reach it.",
    km: "ផ្ទាំងគ្រប់គ្រង: បញ្ជូនទៅកាន់ /dashboard ការពារដោយ auth middleware មានតែអ្នកចូលទើបអាចមើលបាន។",
    zh: "仪表板：重定向到受到 auth 中间件保护的 /dashboard。唯有登录用户才可访问。",
  },
  "experience.2.workflow_section.auth_state.profile_management": {
    en: "Profile Management: Navigate to /profile to update standard info (fullname, username) and change password securely.",
    km: "គ្រប់គ្រងប្រវត្តិរូប: ចូលទៅកាន់ /profile ដើម្បីធ្វើបច្ចុប្បន្នភាពព័ត៌មាន និងប្តូរពាក្យសម្ងាត់ដោយសុវត្ថិភាព។",
    zh: "资料管理：导航到 /profile 以更新标准信息（姓名、用户名）并安全更改密码。",
  },
  "experience.2.workflow_section.auth_state.logout": {
    en: "Logout: Triggers a POST request to /logout, destroying the secure session and sending user back to login page.",
    km: "ចាកចេញ: កេះស្នើសុំ POST ទៅកាន់ /logout លុបសម័យ និងបញ្ជូនអ្នកប្រើប្រាស់ត្រឡប់ទៅទំព័រចូលប្រើវិញ។",
    zh: "注销：触发对 /logout 的 POST 请求，销毁安全会话并返回登录页面。",
  },
  "experience.3.role": {
    en: "Hotel Booking",
    km: "ការកក់សណ្ឋាគារ",
    zh: "酒店预订",
  },
  "experience.3.company": {
    en: "Hotel Booking",
    km: "ការកក់សណ្ឋាគារ",
    zh: "酒店预订",
  },
  "experience.3.description": {
    en: "A full-featured hotel booking and management platform with guest browsing, room availability, payment processing, coupon system, reviews, and a complete admin dashboard with analytics and reports.",
    km: "វេទិកាកក់សណ្ឋាគារពេញលក្ខណៈ ជាមួយការរុករកសម្រាប់ភ្ញៀវ ការពិនិត្យបន្ទប់ទំនេរ ការទូទាត់ ប្រព័ន្ធគូប៉ុង ការវាយតម្លៃ និងផ្ទាំងគ្រប់គ្រងរដ្ឋបាលពេញលេញ។",
    zh: "功能齐全的酒店预订和管理平台，具有客户浏览、房间可用性、支付处理、优惠券系统、评论和完整的管理仪表板。",
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
    zh: "关于网页开发的想法、教程和见解",
  },
  "blog.comingSoon": {
    en: "Blog posts coming soon...",
    km: "អត្ថបទប្លក់នឹងមកដល់ឆាប់ៗ...",
    zh: "博客文章即将推出...",
  },
  "blog.tab.all": { en: "All", km: "ទាំងអស់", zh: "全部" },
  "blog.tab.laravel": { en: "Laravel", km: "Laravel", zh: "Laravel" },
  "blog.tab.vue": { en: "Vue", km: "Vue", zh: "Vue" },
  "blog.tab.typescript": {
    en: "TypeScript",
    km: "TypeScript",
    zh: "TypeScript",
  },
  "blog.tab.laravelVue": {
    en: "Laravel & Vue",
    km: "Laravel & Vue",
    zh: "Laravel & Vue",
  },
  "blog.tab.interview": { en: "Interview", km: "សំភាសន៍", zh: "面试" },
  "blog.tab.database": { en: "Database", km: "មូលដ្ឋានទិន្នន័យ", zh: "数据库" },
  "blog.noResults": {
    en: "No posts found for this filter.",
    km: "រកមិនឃើញអត្ថបទសម្រាប់តម្រងនេះទេ។",
    zh: "未找到此筛选条件的文章。",
  },
  "blog.backToBlog": {
    en: "Back to Blog",
    km: "ត្រឡប់ទៅប្លក់",
    zh: "返回博客",
  },
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
  "hotel.integrations": {
    en: "Integrations",
    km: "ការរួមបញ្ចូល",
    zh: "集成",
  },
};

export const useI18n = () => {
  const langCookie = useCookie<Language>("lang", {
    default: () => "en",
    maxAge: 365 * 24 * 60 * 60,
  });

  const currentLang = useState<Language>(
    "lang",
    () => langCookie.value || "en",
  );

  const setLanguage = (lang: Language) => {
    currentLang.value = lang;
    langCookie.value = lang;
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[currentLang.value] || translation.en || key;
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "km", name: "ខ្មែរ", flag: "🇰🇭" },
    // { code: "zh", name: "中文", flag: "🇨🇳" },
  ];

  return {
    currentLang,
    setLanguage,
    t,
    languages,
  };
};
