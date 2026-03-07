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
  "experience.1.web_interface.title": { en: "🌐 Web Interface (User/Creator)", km: "🌐 ផ្ទាំងបណ្តាញ (អ្នកប្រើប្រាស់/អ្នកបង្កើត)", zh: "🌐 Web 界面（用户/创作者）" },
  "experience.1.web_interface.discovery.label": { en: "1. Discovery & Viewing", km: "1. ស្វែងរក និង កម្សាន្ត", zh: "1. 发现与观看" },
  "experience.1.web_interface.discovery.period": { en: "WEB MODULE", km: "ផ្នែក Web", zh: "WEB 模块" },
  "experience.1.web_interface.discovery.subheading": { en: "Content Delivery Network", km: "បណ្តាញចែកចាយមាតិកា", zh: "内容分发网络" },
  "experience.1.web_interface.discovery.homepage": { en: "Homepage: Browse a 4-column grid of videos with thumbnails, durations, and view counts.", km: "ទំព័រដើម: មើលវីដេអូជាក្រឡាចត្រង្គ៤ជួរ ជាមួយនឹងរូបភាពតំណាង រយៈពេល និងចំនួនអ្នកមើល។", zh: "首页：浏览4列视频网格，包含缩略图、时长和观看次数。" },
  "experience.1.web_interface.discovery.search": { en: "Search: Filter videos by keywords in titles and descriptions.", km: "ស្វែងរក: ត្រងវីដេអូតាមពាក្យគន្លឹះនៅក្នុងចំណងជើងនិងការពិពណ៌នា។", zh: "搜索：按标题和描述中的关键字过滤视频。" },
  "experience.1.web_interface.discovery.watch_page": { en: "Watch Page: Play videos, toggle Likes/Dislikes, and share video URLs to the clipboard.", km: "ទំព័រមើល: លេងវីដេអូ, ចូលចិត្ត/មិនចូលចិត្ត, និងចែករំលែកតំណបណ្ដាញទៅក្ដារតម្បៀតខ្ទាស់។", zh: "观看页面：播放视频，切换喜欢/不喜欢，并将视频URL分享到剪贴板。" },
  "experience.1.web_interface.discovery.subscriptions": { en: "Subscriptions: Follow channels to see their latest uploads in a dedicated feed.", km: "ការជាវ: តាមដានប៉ុស្តិ៍នានាដើម្បីមើលការបង្ហោះចុងក្រោយរបស់ពួកគេនៅក្នុងផ្ទាំងបញ្ជីពិសេស។", zh: "订阅：关注频道以在专用动态中查看他们的最新上传。" },
  "experience.1.web_interface.discovery.history": { en: "History: View watch history organized by date (Today, Yesterday, etc.) and clear it if needed.", km: "ប្រវត្តិ: មើលប្រវត្តិមើលរៀបចំតាមកាលបរិច្ឆេទ (ថ្ងៃនេះ ម្សិលមិញ ល។) និងអាចលុបបាន។", zh: "历史记录：按日期（今天、昨天等）查看观看历史记录，并在需要时清除。" },
  
  "experience.1.web_interface.interaction.label": { en: "2. Social Interaction", km: "2. ទំនាក់ទំនងសង្គម", zh: "2. 社交互动" },
  "experience.1.web_interface.interaction.period": { en: "SOCIAL", km: "សង្គម", zh: "社交" },
  "experience.1.web_interface.interaction.subheading": { en: "Community Engagement", km: "ការចូលរួមរបស់សហគមន៍", zh: "社区参与" },
  "experience.1.web_interface.interaction.comments": { en: "Comments: Post new comments, reply to existing ones, sort by 'Top' or 'Newest,' and like comments.", km: "មតិយោបល់: បង្ហោះមតិយោបល់ថ្មី, ឆ្លើយតប, តម្រៀបតាម 'កំពូល' ឬ 'ថ្មីបំផុត', និងចូលចិត្តមតិយោបល់។", zh: "评论：发布新评论，回复现有评论，按“热门”或“最新”排序，以及点赞评论。" },
  "experience.1.web_interface.interaction.channel_pages": { en: "Channel Pages: Visit any creator's public profile to see their banner, stats, and all uploaded videos.", km: "ទំព័រប៉ុស្តិ៍: ចូលទៅកាន់ប្រវត្តិរូបសាធារណៈរបស់អ្នកបង្កើតដើម្បីមើលបដា, ស្ថិតិ និងវីដេអូទាំងអស់។", zh: "频道页面：访问任何创作者的公开个人资料以查看其横幅、统计数据和所有上传的视频。" },

  "experience.1.web_interface.creator_tools.label": { en: "3. Creator Tools (YouTube Studio)", km: "3. ឧបករណ៍អ្នកបង្កើត", zh: "3. 创作者工具" },
  "experience.1.web_interface.creator_tools.period": { en: "TOOLS", km: "ឧបករណ៍", zh: "工具" },
  "experience.1.web_interface.creator_tools.subheading": { en: "Video Management System", km: "ប្រព័ន្ធគ្រប់គ្រងវីដេអូ", zh: "视频管理系统" },
  "experience.1.web_interface.creator_tools.upload_video": { en: "Upload Video: Upload .mp4 files and thumbnails. Creators can set Title, Description, Category, Tags, and Privacy.", km: "បង្ហោះវីដេអូ: បង្ហោះឯកសារ .mp4 និងរូបថត (Oracle BFILEs)។ អ្នកបង្កើតអាចកំណត់ចំណងជើង, ការពិពណ៌នា, ប្រភេទ និងឯកជនភាព។", zh: "上传视频：上传 .mp4 文件和缩略图。可以设置标题、描述、类别、标签和隐私。" },
  "experience.1.web_interface.creator_tools.management": { en: "Management: A 'Studio' view to edit video details, delete uploads, or filter videos by status.", km: "ការគ្រប់គ្រង: ទិដ្ឋភាព 'Studio' ដើម្បីកែសម្រួលព័ត៌មានលម្អិត, លុប, ឬត្រងវីដេអូតាមស្ថានភាព។", zh: "管理：提供“工作室”视图以编辑视频详细信息、删除上传的视频或按状态过滤视频。" },
  "experience.1.web_interface.creator_tools.analytics": { en: "Analytics: A dashboard showing Total Views, Watch Time, Subscriber growth, and Revenue charts.", km: "ការវិភាគ: តារាងបង្ហាញចំនួនមើលសរុប, ពេលវេលាមើល, រង្វាស់អ្នកជាវ, និងប្រាក់ចំណូល។", zh: "分析：显示总观看次数、观看时间、订阅者增长和收入图表的仪表板。" },
  "experience.1.web_interface.creator_tools.channel_customization": { en: "Channel Customization: Update personal channel branding and info.", km: "ការរៀបចំប៉ុស្តិ៍: ធ្វើបច្ចុប្បន្នភាពស្លាកយីហោនិងព័ត៌មានប៉ុស្តិ៍ផ្ទាល់ខ្លួន។", zh: "频道定制：更新个人频道品牌信息。" },

  "experience.1.admin_interface.title": { en: "🛡️ Admin Interface", km: "🛡️ ផ្ទាំងគ្រប់គ្រង", zh: "🛡️ 管理界面" },
  "experience.1.admin_interface.overview.label": { en: "1. Platform Overview (Dashboard)", km: "1. ទិដ្ឋភាពប្រព័ន្ធទូទៅ", zh: "1. 平台概述" },
  "experience.1.admin_interface.overview.period": { en: "ADMIN", km: "អ្នកគ្រប់គ្រង", zh: "管理员" },
  "experience.1.admin_interface.overview.subheading": { en: "Core System Management", km: "ការគ្រប់គ្រងប្រព័ន្ធស្នូល", zh: "核心系统管理" },
  "experience.1.admin_interface.overview.global_stats": { en: "Global Stats: Real-time counts of total users, videos, views, channels, and comments.", km: "ស្ថិតិសកល: រាប់ចំនួនអ្នកប្រើប្រាស់ វីដេអូ អ្នកមើល ប៉ុស្តិ៍ និងមតិយោបល់ក្នុងពេលជាក់ស្តែង។", zh: "全局统计：实时汇总总用户数、视频数、观看次数、频道数和评论数。" },
  "experience.1.admin_interface.overview.visual_analytics": { en: "Visual Analytics: Pie and bar charts showing User distribution, Video categories, Engagement, and Privacy.", km: "តារាងវិភាគ: តារាងផៃនិងរបារបង្ហាញការចែកចាយអ្នកប្រើប្រាស់ ប្រភេទវីដេអូ និងការចូលរួម។", zh: "可视化分析：饼图和条形图显示用户分布、视频分类、互动和隐私情况。" },

  "experience.1.admin_interface.user_management.label": { en: "2. User Management", km: "2. គ្រប់គ្រងអ្នកប្រើប្រាស់", zh: "2. 用户管理" },
  "experience.1.admin_interface.user_management.period": { en: "USERS", km: "អ្នកប្រើប្រាស់", zh: "用户" },
  "experience.1.admin_interface.user_management.subheading": { en: "Full Access Control", km: "គ្រប់គ្រងការចូលប្រើប្រាស់ពេញលេញ", zh: "全面访问控制" },
  "experience.1.admin_interface.user_management.user_crud": { en: "Full CRUD: Create, View, Edit, and Delete users.", km: "CRUD ពេញលេញ: បង្កើត មើល កែសម្រួល និងលុបអ្នកប្រើប្រាស់។", zh: "完全 CRUD：创建、查看、编辑和删除用户。" },
  "experience.1.admin_interface.user_management.access_control": { en: "Access Control: Activate or Deactivate accounts. Deactivated users cannot log in.", km: "គ្រប់គ្រងសិទ្ធិ: បើក ឬ បិទគណនី។ អ្នកប្រើប្រាស់ដែលត្រូវបានបិទមិនអាចចូលបានទេ។", zh: "访问控制：激活或停用账户。停用的用户无法登录Web界面。" },
  "experience.1.admin_interface.user_management.role_management": { en: "Role Management: Assign roles like USER, MODERATOR, or ADMIN.", km: "ការគ្រប់គ្រងតួនាទី: ផ្ដល់តួនាទីដូចជា USER, MODERATOR, ឬ ADMIN។", zh: "角色管理：分配角色，如 USER、MODERATOR 或 ADMIN。" },

  "experience.1.admin_interface.content_moderation.label": { en: "3. Content Moderation & Management", km: "3. គ្រប់គ្រងមាតិកានិងត្រួតពិនិត្យ", zh: "3. 内容审核与管理" },
  "experience.1.admin_interface.content_moderation.period": { en: "MODERATION", km: "ការត្រួតពិនិត្យ", zh: "审核" },
  "experience.1.admin_interface.content_moderation.subheading": { en: "Security & Moderation", km: "សុវត្ថិភាព និង ការត្រួតពិនិត្យ", zh: "安全与审核" },
  "experience.1.admin_interface.content_moderation.video_crud": { en: "Video CRUD: Add videos manually, edit metadata, or delete content across the platform.", km: "CRUD វីដេអូ: បន្ថែមវីដេអូដោយដៃ, កែសម្រួល, ឬលុបមាតិកានៅទូទាំងប្រព័ន្ធ។", zh: "视频 CRUD：管理员可以手动添加视频、编辑任何视频的元数据或删除全平台内容。" },
  "experience.1.admin_interface.content_moderation.upload_queue": { en: "Upload Queue: A 'Manage Uploads' section to Approve or Reject videos before they become public.", km: "បញ្ជីបង្ហោះ: ផ្នែក 'គ្រប់គ្រងបង្ហោះ' ដើម្បីអនុម័តឬបដិសេធវីដេអូមុនពេលវាក្លាយជាសាធារណៈ។", zh: "上传队列：专用的“管理上传”部分，管理员可以在视频公开前批准或拒绝。" },
  "experience.1.admin_interface.content_moderation.metadata_control": { en: "Metadata Control: Manage the system's video categories, tags, and comments.", km: "គ្រប់គ្រងទិន្នន័យ: គ្រប់គ្រងប្រភេទវីដេអូ ស្លាក និងមតិយោបល់នៃប្រព័ន្ធ។", zh: "元数据控制：管理系统的视频类别、标签和评论。" },

  "experience.1.admin_interface.system_features.label": { en: "4. System Features", km: "4. មុខងារប្រព័ន្ធ", zh: "4. 系统功能" },
  "experience.1.admin_interface.system_features.period": { en: "SYSTEM", km: "ប្រព័ន្ធ", zh: "系统" },
  "experience.1.admin_interface.system_features.subheading": { en: "Platform Configuration", km: "ការរៀបចំប្រព័ន្ធ", zh: "平台配置" },
  "experience.1.admin_interface.system_features.theme_toggle": { en: "Theme Toggle: Switch the admin UI between Dark Mode and Light Mode.", km: "បិទបើកស្បែក: ប្តូរផ្ទាំងគ្រប់គ្រងរវាងរបៀបងងឹត និង របៀបភ្លឺ។", zh: "主题切换：在深色模式和浅色模式之间切换整个管理 UI。" },
  "experience.1.admin_interface.system_features.interface_switching": { en: "Interface Switching: A quick-access button to jump back to the User interface.", km: "ប្តូរផ្ទាំង: ប៊ូតុងចូលរហ័សដើម្បីត្រលប់ទៅផ្ទាំងអ្នកប្រើប្រាស់វិញ។", zh: "界面切换：快速访问按钮，可跳回用户界面。" },

  "experience.1.key_differences.title": { en: "Key Differences", km: "ភាពខុសគ្នាសំខាន់ៗ", zh: "主要区别" },
  "experience.1.key_differences.feature.title": { en: "Feature", km: "មុខងារ", zh: "功能" },
  "experience.1.key_differences.web.title": { en: "Web (User)", km: "Web (អ្នកប្រើប្រាស់)", zh: "Web（用户）" },
  "experience.1.key_differences.admin.title": { en: "Admin", km: "អ្នកគ្រប់គ្រង", zh: "管理员" },
  
  "experience.1.key_differences.video_management.feature": { en: "Video Management", km: "ការគ្រប់គ្រងវីដេអូ", zh: "视频管理" },
  "experience.1.key_differences.video_management.web": { en: "Only their own videos", km: "មានសិទ្ធិតែវីដេអូរបស់ពួកគេផ្ទាល់", zh: "仅限他们自己的视频" },
  "experience.1.key_differences.video_management.admin": { en: "All videos on the platform", km: "វីដេអូទាំងអស់នៅលើប្រព័ន្ធ", zh: "平台上的所有视频" },
  
  "experience.1.key_differences.user_management.feature": { en: "User Management", km: "គ្រប់គ្រងអ្នកប្រើប្រាស់", zh: "用户管理" },
  "experience.1.key_differences.user_management.web": { en: "Profile editing only", km: "កែសម្រួលប្រវត្តិរូបប៉ុណ្ណោះ", zh: "仅限编辑个人资料" },
  "experience.1.key_differences.user_management.admin": { en: "Full control over all accounts", km: "គ្រប់គ្រងគណនីទាំងអស់ពេញលេញ", zh: "完全控制所有帐户" },
  
  "experience.1.key_differences.moderation.feature": { en: "Moderation", km: "ការត្រួតពិនិត្យ", zh: "审核" },
  "experience.1.key_differences.moderation.web": { en: "Report/Comment", km: "រាយការណ៍/មតិយោបល់", zh: "举报/评论" },
  "experience.1.key_differences.moderation.admin": { en: "Approve/Reject uploads", km: "អនុម័ត/បដិសេធការបង្ហោះ", zh: "批准/拒绝上传" },
  
  "experience.1.key_differences.target_audience.feature": { en: "Target Audience", km: "ទស្សនិកជនគោលដៅ", zh: "目标受众" },
  "experience.1.key_differences.target_audience.web": { en: "Viewers & Creators", km: "អ្នកទស្សនា & អ្នកបង្កើត", zh: "观众和创作者" },
  "experience.1.key_differences.target_audience.admin": { en: "Platform Operators", km: "អ្នកប្រតិបត្តិការប្រព័ន្ធ", zh: "平台运营商" },
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

  // Blog - Vue Composition API
  "blog.vue.title": { en: "Getting Started with Vue 3 Composition API", km: "ការចាប់ផ្ដើមជាមួយ Vue 3 Composition API", zh: "Vue 3 Composition API 入门" },
  "blog.vue.intro": {
    en: "The Composition API is the modern way to write Vue components. Instead of organizing code by options (data, methods, computed, watch), you organize code by <strong>logical concern</strong> — keeping related logic together. This makes components easier to read, reuse, and maintain.",
    km: "Composition API គឺជាវិធីទំនើបក្នុងការសរសេរ Vue components។ ជំនួសឱ្យការរៀបចំកូដតាម options (data, methods, computed, watch) អ្នករៀបចំកូដតាម<strong>ផ្នែកឡូជីខល</strong> — រក្សាឡូជីខលដែលទាក់ទងគ្នាឱ្យនៅជាមួយគ្នា។ នេះធ្វើឱ្យ components ងាយស្រួលអាន ប្រើឡើងវិញ និងថែទាំ។",
    zh: "Composition API 是编写 Vue 组件的现代方式。与其按选项（data、methods、computed、watch）组织代码，不如按<strong>逻辑关注点</strong>组织代码——将相关逻辑放在一起。这使组件更易于阅读、复用和维护。"
  },
  "blog.vue.optionsVsComposition": { en: "Options API vs Composition API", km: "Options API ធៀបនឹង Composition API", zh: "Options API 与 Composition API 对比" },
  "blog.vue.optionsOld": { en: "Options API (old way)", km: "Options API (វិធីចាស់)", zh: "Options API（旧方式）" },
  "blog.vue.options1": { en: "Code split by <em>type</em> (data, methods, computed)", km: "កូដបែងចែកតាម<em>ប្រភេទ</em> (data, methods, computed)", zh: "代码按<em>类型</em>拆分（data、methods、computed）" },
  "blog.vue.options2": { en: "Related logic scattered across sections", km: "ឡូជីខលដែលទាក់ទងគ្នាខ្ចាត់ខ្ចាយពេញផ្នែកផ្សេងៗ", zh: "相关逻辑分散在各个部分" },
  "blog.vue.options3": { en: "Hard to extract reusable logic", km: "ពិបាកក្នុងការដកយកឡូជីខលដែលអាចប្រើឡើងវិញ", zh: "难以提取可复用逻辑" },
  "blog.vue.options4": { en: "Uses <code class=\"inline-code\">this</code> keyword", km: "ប្រើពាក្យគន្លឹះ <code class=\"inline-code\">this</code>", zh: "使用 <code class=\"inline-code\">this</code> 关键字" },
  "blog.vue.compositionNew": { en: "Composition API (new way)", km: "Composition API (វិធីថ្មី)", zh: "Composition API（新方式）" },
  "blog.vue.composition1": { en: "Code grouped by <em>feature</em>", km: "កូដដាក់ជាក្រុមតាម<em>មុខងារ</em>", zh: "代码按<em>功能</em>分组" },
  "blog.vue.composition2": { en: "Related logic stays together", km: "ឡូជីខលដែលទាក់ទងគ្នានៅជាមួយគ្នា", zh: "相关逻辑放在一起" },
  "blog.vue.composition3": { en: "Easy to extract into composables", km: "ងាយស្រួលដកចេញទៅជា composables", zh: "容易提取为 composables" },
  "blog.vue.composition4": { en: "No <code class=\"inline-code\">this</code> — plain variables", km: "គ្មាន <code class=\"inline-code\">this</code> — អថេរធម្មតា", zh: "无需 <code class=\"inline-code\">this</code>——普通变量" },
  "blog.vue.s1.title": { en: "1. script setup", km: "1. script setup", zh: "1. script setup" },
  "blog.vue.s1.desc": {
    en: "<code class=\"inline-code\">&lt;script setup&gt;</code> is the recommended way to use the Composition API in Single File Components. Everything declared at the top level is automatically available in the template.",
    km: "<code class=\"inline-code\">&lt;script setup&gt;</code> គឺជាវិធីដែលត្រូវបានផ្ដល់អនុសាសន៍ក្នុងការប្រើ Composition API ក្នុង Single File Components។ អ្វីទាំងអស់ដែលប្រកាសនៅកម្រិតកំពូលនឹងអាចប្រើបានដោយស្វ័យប្រវត្តិក្នុង template។",
    zh: "<code class=\"inline-code\">&lt;script setup&gt;</code> 是在单文件组件中使用 Composition API 的推荐方式。在顶层声明的所有内容都会自动在模板中可用。"
  },
  "blog.vue.s1.codeTitle": { en: "Basic Component", km: "Component មូលដ្ឋាន", zh: "基础组件" },
  "blog.vue.s1.tip": {
    en: "<strong>No return needed!</strong> With <code class=\"inline-code\">&lt;script setup&gt;</code>, all variables, functions, and imports are automatically exposed to the template. No need for <code class=\"inline-code\">export default</code> or <code class=\"inline-code\">return</code>.",
    km: "<strong>មិនត្រូវការ return ទេ!</strong> ជាមួយ <code class=\"inline-code\">&lt;script setup&gt;</code> អថេរ functions និង imports ទាំងអស់ត្រូវបានបង្ហាញដោយស្វ័យប្រវត្តិទៅ template។ មិនត្រូវការ <code class=\"inline-code\">export default</code> ឬ <code class=\"inline-code\">return</code> ទេ។",
    zh: "<strong>无需 return！</strong>使用 <code class=\"inline-code\">&lt;script setup&gt;</code> 后，所有变量、函数和导入都会自动暴露给模板。不需要 <code class=\"inline-code\">export default</code> 或 <code class=\"inline-code\">return</code>。"
  },
  "blog.vue.s2.title": { en: "2. Reactive State: ref() & reactive()", km: "2. ស្ថានភាព Reactive: ref() & reactive()", zh: "2. 响应式状态：ref() 与 reactive()" },
  "blog.vue.s2.refTitle": { en: "ref() — for primitives & any value", km: "ref() — សម្រាប់ primitives និងតម្លៃណាមួយ", zh: "ref()——用于基本类型和任意值" },
  "blog.vue.s2.refDesc": {
    en: "<code class=\"inline-code\">ref()</code> wraps a value in a reactive object. Access it with <code class=\"inline-code\">.value</code> in script, but directly in template.",
    km: "<code class=\"inline-code\">ref()</code> រុំតម្លៃមួយក្នុង reactive object។ ចូលប្រើវាដោយ <code class=\"inline-code\">.value</code> ក្នុង script ប៉ុន្តែដោយផ្ទាល់ក្នុង template។",
    zh: "<code class=\"inline-code\">ref()</code> 将值包装在响应式对象中。在 script 中通过 <code class=\"inline-code\">.value</code> 访问，但在模板中直接使用。"
  },
  "blog.vue.s2.refCodeTitle": { en: "ref() usage", km: "ការប្រើ ref()", zh: "ref() 用法" },
  "blog.vue.s2.reactiveTitle": { en: "reactive() — for objects", km: "reactive() — សម្រាប់ objects", zh: "reactive()——用于对象" },
  "blog.vue.s2.reactiveDesc": {
    en: "<code class=\"inline-code\">reactive()</code> makes an entire object reactive. No <code class=\"inline-code\">.value</code> needed, but it only works with objects.",
    km: "<code class=\"inline-code\">reactive()</code> ធ្វើឱ្យ object ទាំងមូលក្លាយជា reactive។ មិនត្រូវការ <code class=\"inline-code\">.value</code> ទេ ប៉ុន្តែវាដំណើរការតែជាមួយ objects ប៉ុណ្ណោះ។",
    zh: "<code class=\"inline-code\">reactive()</code> 使整个对象变为响应式。不需要 <code class=\"inline-code\">.value</code>，但只适用于对象。"
  },
  "blog.vue.s2.reactiveCodeTitle": { en: "reactive() usage", km: "ការប្រើ reactive()", zh: "reactive() 用法" },
  "blog.vue.s2.refCompare1": { en: "Works with any type", km: "ដំណើរការជាមួយប្រភេទណាមួយ", zh: "适用于任何类型" },
  "blog.vue.s2.refCompare2": { en: "Need <code class=\"inline-code\">.value</code> in script", km: "ត្រូវការ <code class=\"inline-code\">.value</code> ក្នុង script", zh: "在 script 中需要 <code class=\"inline-code\">.value</code>" },
  "blog.vue.s2.refCompare3": { en: "Can reassign entirely", km: "អាចកំណត់តម្លៃឡើងវិញទាំងស្រុង", zh: "可以完全重新赋值" },
  "blog.vue.s2.refCompare4": { en: "Recommended for most cases", km: "ផ្ដល់អនុសាសន៍សម្រាប់ករណីភាគច្រើន", zh: "推荐用于大多数情况" },
  "blog.vue.s2.reactiveCompare1": { en: "Only objects/arrays", km: "មានតែ objects/arrays ប៉ុណ្ណោះ", zh: "仅适用于对象/数组" },
  "blog.vue.s2.reactiveCompare2": { en: "No <code class=\"inline-code\">.value</code> needed", km: "មិនត្រូវការ <code class=\"inline-code\">.value</code> ទេ", zh: "不需要 <code class=\"inline-code\">.value</code>" },
  "blog.vue.s2.reactiveCompare3": { en: "Cannot reassign the whole object", km: "មិនអាចកំណត់តម្លៃ object ទាំងមូលឡើងវិញ", zh: "不能重新赋值整个对象" },
  "blog.vue.s2.reactiveCompare4": { en: "Good for complex state objects", km: "ល្អសម្រាប់ state objects ស្មុគស្មាញ", zh: "适合复杂的状态对象" },
  "blog.vue.s3.title": { en: "3. Computed Properties", km: "3. Computed Properties", zh: "3. 计算属性" },
  "blog.vue.s3.desc": {
    en: "<code class=\"inline-code\">computed()</code> creates a cached value that automatically updates when its dependencies change. Use it for derived data.",
    km: "<code class=\"inline-code\">computed()</code> បង្កើតតម្លៃដែលបាន cache ដែលធ្វើបច្ចុប្បន្នភាពដោយស្វ័យប្រវត្តិនៅពេល dependencies របស់វាផ្លាស់ប្ដូរ។ ប្រើវាសម្រាប់ទិន្នន័យដែលបានទាញយកមក។",
    zh: "<code class=\"inline-code\">computed()</code> 创建一个缓存值，当其依赖项发生变化时自动更新。用于派生数据。"
  },
  "blog.vue.s3.codeTitle": { en: "computed() usage", km: "ការប្រើ computed()", zh: "computed() 用法" },
  "blog.vue.s4.title": { en: "4. Watchers", km: "4. Watchers", zh: "4. 侦听器" },
  "blog.vue.s4.desc": {
    en: "<code class=\"inline-code\">watch()</code> runs a callback when a reactive value changes. Use it for side effects (API calls, logging, etc).",
    km: "<code class=\"inline-code\">watch()</code> ដំណើរការ callback នៅពេលតម្លៃ reactive ផ្លាស់ប្ដូរ។ ប្រើវាសម្រាប់ side effects (ការហៅ API, logging ។ល។)។",
    zh: "<code class=\"inline-code\">watch()</code> 在响应式值发生变化时运行回调。用于副作用（API 调用、日志记录等）。"
  },
  "blog.vue.s4.codeTitle": { en: "watch() usage", km: "ការប្រើ watch()", zh: "watch() 用法" },
  "blog.vue.s5.title": { en: "5. Lifecycle Hooks", km: "5. Lifecycle Hooks", zh: "5. 生命周期钩子" },
  "blog.vue.s5.desc": { en: "Lifecycle hooks let you run code at specific points in a component's life.", km: "Lifecycle hooks អនុញ្ញាតឱ្យអ្នកដំណើរការកូដនៅចំណុចជាក់លាក់ក្នុងជីវិតរបស់ component។", zh: "生命周期钩子让你在组件生命周期的特定时间点运行代码。" },
  "blog.vue.s5.thHook": { en: "Hook", km: "Hook", zh: "钩子" },
  "blog.vue.s5.thWhen": { en: "When it runs", km: "ពេលណាវាដំណើរការ", zh: "何时运行" },
  "blog.vue.s5.thUse": { en: "Common use", km: "ការប្រើប្រាស់ទូទៅ", zh: "常见用途" },
  "blog.vue.s5.mounted.when": { en: "After DOM is rendered", km: "បន្ទាប់ពី DOM ត្រូវបានបង្ហាញ", zh: "DOM 渲染后" },
  "blog.vue.s5.mounted.use": { en: "Fetch data, init libraries", km: "ទាញទិន្នន័យ ចាប់ផ្ដើម libraries", zh: "获取数据、初始化库" },
  "blog.vue.s5.updated.when": { en: "After reactive state change causes re-render", km: "បន្ទាប់ពី reactive state ផ្លាស់ប្ដូរបណ្ដាលឱ្យ re-render", zh: "响应式状态变化导致重新渲染后" },
  "blog.vue.s5.updated.use": { en: "DOM-dependent operations", km: "ប្រតិបត្តិការដែលពឹងផ្អែកលើ DOM", zh: "依赖 DOM 的操作" },
  "blog.vue.s5.unmounted.when": { en: "Component is removed", km: "Component ត្រូវបានដកចេញ", zh: "组件被移除" },
  "blog.vue.s5.unmounted.use": { en: "Cleanup (timers, listeners)", km: "សម្អាត (timers, listeners)", zh: "清理（定时器、监听器）" },
  "blog.vue.s5.beforeMount.when": { en: "Before DOM is rendered", km: "មុនពេល DOM ត្រូវបានបង្ហាញ", zh: "DOM 渲染前" },
  "blog.vue.s5.beforeMount.use": { en: "Pre-render logic", km: "ឡូជីខលមុនពេល render", zh: "渲染前逻辑" },
  "blog.vue.s5.beforeUnmount.when": { en: "Before component is removed", km: "មុនពេល component ត្រូវបានដកចេញ", zh: "组件被移除前" },
  "blog.vue.s5.beforeUnmount.use": { en: "Save state, cleanup", km: "រក្សាទុក state សម្អាត", zh: "保存状态、清理" },
  "blog.vue.s5.codeTitle": { en: "Lifecycle Hooks", km: "Lifecycle Hooks", zh: "生命周期钩子" },
  "blog.vue.s6.title": { en: "6. Props & Emits", km: "6. Props & Emits", zh: "6. Props 与 Emits" },
  "blog.vue.s6.propsTitle": { en: "Props — receive data from parent", km: "Props — ទទួលទិន្នន័យពី parent", zh: "Props——从父组件接收数据" },
  "blog.vue.s6.emitsTitle": { en: "Emits — send events to parent", km: "Emits — ផ្ញើ events ទៅ parent", zh: "Emits——向父组件发送事件" },
  "blog.vue.s6.usingTitle": { en: "Using the component", km: "ការប្រើ component", zh: "使用组件" },
  "blog.vue.s6.parentCodeTitle": { en: "Parent component", km: "Parent component", zh: "父组件" },
  "blog.vue.s7.title": { en: "7. Composables (Reusable Logic)", km: "7. Composables (ឡូជីខលអាចប្រើឡើងវិញ)", zh: "7. Composables（可复用逻辑）" },
  "blog.vue.s7.desc": {
    en: "Composables are functions that encapsulate and reuse stateful logic. Convention: name them <code class=\"inline-code\">use[Something]</code>.",
    km: "Composables គឺជា functions ដែលរុំព័ទ្ធ និងប្រើឡើងវិញនូវ stateful logic។ ទម្លាប់: ដាក់ឈ្មោះវា <code class=\"inline-code\">use[Something]</code>។",
    zh: "Composables 是封装和复用有状态逻辑的函数。命名约定：<code class=\"inline-code\">use[Something]</code>。"
  },
  "blog.vue.s7.codeTitle2": { en: "Using the composable", km: "ការប្រើ composable", zh: "使用 composable" },
  "blog.vue.s7.tip": {
    en: "<strong>Real-world examples:</strong> <code class=\"inline-code\">useFetch()</code>, <code class=\"inline-code\">useAuth()</code>, <code class=\"inline-code\">useTheme()</code>, <code class=\"inline-code\">useLocalStorage()</code>. Composables are Vue's answer to React hooks.",
    km: "<strong>ឧទាហរណ៍ជាក់ស្ដែង:</strong> <code class=\"inline-code\">useFetch()</code>, <code class=\"inline-code\">useAuth()</code>, <code class=\"inline-code\">useTheme()</code>, <code class=\"inline-code\">useLocalStorage()</code>។ Composables គឺជាចម្លើយរបស់ Vue ចំពោះ React hooks។",
    zh: "<strong>实际示例：</strong><code class=\"inline-code\">useFetch()</code>、<code class=\"inline-code\">useAuth()</code>、<code class=\"inline-code\">useTheme()</code>、<code class=\"inline-code\">useLocalStorage()</code>。Composables 是 Vue 对 React hooks 的解答。"
  },
  "blog.vue.s8.title": { en: "8. Template Refs", km: "8. Template Refs", zh: "8. 模板引用" },
  "blog.vue.s8.desc": {
    en: "Access DOM elements directly using <code class=\"inline-code\">ref</code> + template <code class=\"inline-code\">ref</code> attribute.",
    km: "ចូលប្រើ DOM elements ដោយផ្ទាល់ដោយប្រើ <code class=\"inline-code\">ref</code> + template <code class=\"inline-code\">ref</code> attribute។",
    zh: "使用 <code class=\"inline-code\">ref</code> + 模板 <code class=\"inline-code\">ref</code> 属性直接访问 DOM 元素。"
  },
  "blog.vue.s8.codeTitle": { en: "Template Refs", km: "Template Refs", zh: "模板引用" },
  "blog.vue.s9.title": { en: "9. Provide / Inject", km: "9. Provide / Inject", zh: "9. Provide / Inject" },
  "blog.vue.s9.desc": { en: "Pass data deep through component trees without prop drilling.", km: "បញ្ជូនទិន្នន័យជ្រៅតាមរយៈ component trees ដោយមិនចាំបាច់ prop drilling។", zh: "在组件树中深层传递数据，无需逐层传递 props。" },
  "blog.vue.s9.flowParent": { en: "Parent (provide)", km: "Parent (provide)", zh: "父组件 (provide)" },
  "blog.vue.s9.flowChild": { en: "Child", km: "Child", zh: "子组件" },
  "blog.vue.s9.flowGrandchild": { en: "Grandchild (inject)", km: "Grandchild (inject)", zh: "孙组件 (inject)" },
  "blog.vue.s9.provideCodeTitle": { en: "Parent — provide", km: "Parent — provide", zh: "父组件 - provide" },
  "blog.vue.s9.injectCodeTitle": { en: "Any descendant — inject", km: "Descendant ណាមួយ — inject", zh: "任意后代组件 - inject" },
  "blog.vue.sum1": { en: "<strong>script setup</strong> — cleaner syntax, auto-exposed variables", km: "<strong>script setup</strong> — syntax ស្អាតជាង អថេរបង្ហាញដោយស្វ័យប្រវត្តិ", zh: "<strong>script setup</strong>——更简洁的语法，自动暴露变量" },
  "blog.vue.sum2": { en: "<strong>ref() / reactive()</strong> — make data reactive", km: "<strong>ref() / reactive()</strong> — ធ្វើឱ្យទិន្នន័យក្លាយជា reactive", zh: "<strong>ref() / reactive()</strong>——使数据响应式" },
  "blog.vue.sum3": { en: "<strong>computed()</strong> — cached derived values", km: "<strong>computed()</strong> — តម្លៃដែលបានទាញយកមកត្រូវបាន cache", zh: "<strong>computed()</strong>——缓存的派生值" },
  "blog.vue.sum4": { en: "<strong>watch()</strong> — react to changes with side effects", km: "<strong>watch()</strong> — ឆ្លើយតបនឹងការផ្លាស់ប្ដូរជាមួយ side effects", zh: "<strong>watch()</strong>——通过副作用响应变化" },
  "blog.vue.sum5": { en: "<strong>Lifecycle hooks</strong> — onMounted, onUnmounted, etc.", km: "<strong>Lifecycle hooks</strong> — onMounted, onUnmounted ។ល។", zh: "<strong>生命周期钩子</strong>——onMounted、onUnmounted 等" },
  "blog.vue.sum6": { en: "<strong>defineProps / defineEmits</strong> — component communication", km: "<strong>defineProps / defineEmits</strong> — ការទំនាក់ទំនង component", zh: "<strong>defineProps / defineEmits</strong>——组件通信" },
  "blog.vue.sum7": { en: "<strong>Composables</strong> — reusable stateful logic (use[Something])", km: "<strong>Composables</strong> — ឡូជីខល stateful អាចប្រើឡើងវិញ (use[Something])", zh: "<strong>Composables</strong>——可复用的有状态逻辑（use[Something]）" },
  "blog.vue.sum8": { en: "<strong>provide / inject</strong> — pass data without prop drilling", km: "<strong>provide / inject</strong> — បញ្ជូនទិន្នន័យដោយមិនចាំបាច់ prop drilling", zh: "<strong>provide / inject</strong>——无需逐层传递即可传递数据" },

  // Blog - Laravel Interview
  "blog.itvw.laravel.title": { en: "Laravel Interview Questions", km: "សំណួរសម្ភាសន៍ Laravel", zh: "Laravel 面试题" },
  "blog.itvw.laravel.intro": {
    en: "Preparing for a Laravel interview? This guide covers 20+ commonly asked questions with clear explanations and code examples. Whether you are a junior or senior developer, these questions will help you solidify your understanding of the framework.",
    km: "កំពុងរៀបចំសម្រាប់សម្ភាសន៍ Laravel មែនទេ? មគ្គុទ្ទេសក៍នេះគ្របដណ្ដប់សំណួរដែលគេសួរញឹកញាប់ជាង 20 សំណួរ ជាមួយការពន្យល់ច្បាស់លាស់ និងឧទាហរណ៍កូដ។ មិនថាអ្នកជាអ្នកអភិវឌ្ឍន៍កម្រិតទាប ឬកម្រិតខ្ពស់នោះទេ សំណួរទាំងនេះនឹងជួយអ្នកពង្រឹងការយល់ដឹងអំពី framework នេះ។",
    zh: "准备 Laravel 面试？本指南涵盖了 20 多个常见问题，配有清晰的解释和代码示例。无论你是初级还是高级开发者，这些问题都将帮助你巩固对框架的理解。"
  },
  "blog.itvw.laravel.q1": { en: "1. What is Laravel? Why use it?", km: "1. តើ Laravel ជាអ្វី? ហេតុអ្វីប្រើវា?", zh: "1. 什么是 Laravel？为什么使用它？" },
  "blog.itvw.laravel.a1": {
    en: "Laravel is a free, open-source PHP web framework created by Taylor Otwell. It follows the MVC (Model-View-Controller) architectural pattern and provides an elegant syntax that aims to make development enjoyable and expressive. Key reasons to use Laravel include:",
    km: "Laravel គឺជា PHP web framework ឥតគិតថ្លៃ និងជាប្រភពបើកចំហ ដែលបង្កើតឡើងដោយ Taylor Otwell។ វាអនុវត្តតាមគំរូស្ថាបត្យកម្ម MVC (Model-View-Controller) និងផ្តល់វាក្យសម្ពន្ធដ៏ឡើយឡើង ដែលមានគោលបំណងធ្វើឱ្យការអភិវឌ្ឍន៍រីករាយ និងបង្ហាញចេញ។ មូលហេតុសំខាន់ៗក្នុងការប្រើ Laravel រួមមាន:",
    zh: "Laravel 是由 Taylor Otwell 创建的免费开源 PHP Web 框架。它遵循 MVC（模型-视图-控制器）架构模式，提供优雅的语法，旨在使开发变得愉快且富有表现力。使用 Laravel 的主要原因包括："
  },
  "blog.itvw.laravel.a1l1": { en: "<strong>Eloquent ORM</strong> for intuitive database interactions", km: "<strong>Eloquent ORM</strong> សម្រាប់អន្តរកម្មមូលដ្ឋានទិន្នន័យដែលងាយស្រួល", zh: "<strong>Eloquent ORM</strong>——直观的数据库交互" },
  "blog.itvw.laravel.a1l2": { en: "<strong>Blade templating engine</strong> for clean, reusable views", km: "<strong>Blade templating engine</strong> សម្រាប់ views ស្អាត និងអាចប្រើឡើងវិញ", zh: "<strong>Blade 模板引擎</strong>——简洁、可复用的视图" },
  "blog.itvw.laravel.a1l3": { en: "<strong>Built-in authentication and authorization</strong>", km: "<strong>Authentication និង authorization ដែលភ្ជាប់មកជាមួយ</strong>", zh: "<strong>内置身份验证和授权</strong>" },
  "blog.itvw.laravel.a1l4": { en: "<strong>Artisan CLI</strong> for code generation and task automation", km: "<strong>Artisan CLI</strong> សម្រាប់បង្កើតកូដ និងស្វ័យប្រវត្តិកម្មកិច្ចការ", zh: "<strong>Artisan CLI</strong>——代码生成和任务自动化" },
  "blog.itvw.laravel.a1l5": { en: "<strong>Rich ecosystem</strong> (Forge, Vapor, Nova, Sanctum, etc.)", km: "<strong>Ecosystem សម្បូរបែប</strong> (Forge, Vapor, Nova, Sanctum ។ល។)", zh: "<strong>丰富的生态系统</strong>（Forge、Vapor、Nova、Sanctum 等）" },
  "blog.itvw.laravel.q1c1": { en: "Creating a new Laravel project", km: "បង្កើតគម្រោង Laravel ថ្មី", zh: "创建新的 Laravel 项目" },
  "blog.itvw.laravel.q2": { en: "2. What is the MVC pattern in Laravel?", km: "2. តើគំរូ MVC ក្នុង Laravel ជាអ្វី?", zh: "2. Laravel 中的 MVC 模式是什么？" },
  "blog.itvw.laravel.a2": {
    en: "MVC stands for <strong>Model-View-Controller</strong>. It separates the application into three interconnected components:",
    km: "MVC តំណាងឱ្យ <strong>Model-View-Controller</strong>។ វាបែងចែកកម្មវិធីជាបីផ្នែកដែលភ្ជាប់គ្នា:",
    zh: "MVC 代表 <strong>Model-View-Controller</strong>。它将应用程序分为三个相互关联的组件："
  },
  "blog.itvw.laravel.a2l1": { en: "<strong>Model</strong> — handles data logic and database interaction (Eloquent models)", km: "<strong>Model</strong> — គ្រប់គ្រង data logic និងអន្តរកម្មមូលដ្ឋានទិន្នន័យ (Eloquent models)", zh: "<strong>Model</strong>——处理数据逻辑和数据库交互（Eloquent 模型）" },
  "blog.itvw.laravel.a2l2": { en: "<strong>View</strong> — presents data to the user (Blade templates)", km: "<strong>View</strong> — បង្ហាញទិន្នន័យដល់អ្នកប្រើប្រាស់ (Blade templates)", zh: "<strong>View</strong>——向用户展示数据（Blade 模板）" },
  "blog.itvw.laravel.a2l3": { en: "<strong>Controller</strong> — handles user requests and acts as a bridge between Model and View", km: "<strong>Controller</strong> — គ្រប់គ្រងសំណើអ្នកប្រើប្រាស់ និងដើរតួជាស្ពានរវាង Model និង View", zh: "<strong>Controller</strong>——处理用户请求，充当 Model 和 View 之间的桥梁" },
  "blog.itvw.laravel.q2c1": { en: "MVC Example", km: "ឧទាហរណ៍ MVC", zh: "MVC 示例" },
  "blog.itvw.laravel.q3": { en: "3. What are Service Providers?", km: "3. តើ Service Providers ជាអ្វី?", zh: "3. 什么是服务提供者？" },
  "blog.itvw.laravel.a3": {
    en: "Service Providers are the central place where all Laravel application bootstrapping happens. They are responsible for binding services into the service container, registering event listeners, middleware, routes, and more. Every Laravel application has an <code class=\"inline-code\">AppServiceProvider</code> by default. Service providers have two key methods: <code class=\"inline-code\">register()</code> for binding things into the container, and <code class=\"inline-code\">boot()</code> for actions after all providers are registered.",
    km: "Service Providers គឺជាកន្លែងកណ្តាលដែលការ bootstrapping កម្មវិធី Laravel ទាំងអស់កើតឡើង។ ពួកវាទទួលខុសត្រូវក្នុងការចង services ទៅក្នុង service container ចុះឈ្មោះ event listeners middleware routes និងផ្សេងទៀត។ រាល់កម្មវិធី Laravel មាន <code class=\"inline-code\">AppServiceProvider</code> តាមលំនាំដើម។ Service providers មាន method សំខាន់ពីរ: <code class=\"inline-code\">register()</code> សម្រាប់ចង things ទៅក្នុង container និង <code class=\"inline-code\">boot()</code> សម្រាប់សកម្មភាពបន្ទាប់ពី providers ទាំងអស់ត្រូវបានចុះឈ្មោះ។",
    zh: "服务提供者是所有 Laravel 应用程序引导发生的核心位置。它们负责将服务绑定到服务容器中、注册事件监听器、中间件、路由等。每个 Laravel 应用默认都有一个 <code class=\"inline-code\">AppServiceProvider</code>。服务提供者有两个关键方法：<code class=\"inline-code\">register()</code> 用于绑定到容器，<code class=\"inline-code\">boot()</code> 用于所有提供者注册后的操作。"
  },
  "blog.itvw.laravel.q4": { en: "4. What is Middleware? How to create one?", km: "4. តើ Middleware ជាអ្វី? តើបង្កើតវាយ៉ាងម៉េច?", zh: "4. 什么是中间件？如何创建一个？" },
  "blog.itvw.laravel.a4": {
    en: "Middleware provides a mechanism for filtering HTTP requests entering your application. For example, Laravel includes middleware that verifies if the user is authenticated. If not, the middleware redirects the user to the login screen. You can create custom middleware using Artisan.",
    km: "Middleware ផ្តល់យន្តការសម្រាប់ត្រងសំណើ HTTP ដែលចូលមកកម្មវិធីរបស់អ្នក។ ឧទាហរណ៍ Laravel រួមបញ្ចូល middleware ដែលផ្ទៀងផ្ទាត់ថាតើអ្នកប្រើប្រាស់បានផ្ទៀងផ្ទាត់អត្តសញ្ញាណហើយឬនៅ។ បើមិនទាន់ middleware នឹងបញ្ជូនអ្នកប្រើប្រាស់ទៅទំព័រចូល។ អ្នកអាចបង្កើត middleware ផ្ទាល់ខ្លួនដោយប្រើ Artisan។",
    zh: "中间件提供了一种过滤进入应用程序的 HTTP 请求的机制。例如，Laravel 包含验证用户是否已认证的中间件。如果未认证，中间件将重定向用户到登录页面。你可以使用 Artisan 创建自定义中间件。"
  },
  "blog.itvw.laravel.q4c1": { en: "Applying middleware to a route", km: "អនុវត្ត middleware ទៅ route", zh: "将中间件应用到路由" },
  "blog.itvw.laravel.q5": { en: "5. What are Route Groups and Route Model Binding?", km: "5. តើ Route Groups និង Route Model Binding ជាអ្វី?", zh: "5. 什么是路由组和路由模型绑定？" },
  "blog.itvw.laravel.a5": {
    en: "<strong>Route Groups</strong> allow you to share route attributes (middleware, prefixes, namespaces) across multiple routes without repeating them. <strong>Route Model Binding</strong> automatically injects model instances into your routes based on the URI segment.",
    km: "<strong>Route Groups</strong> អនុញ្ញាតឱ្យអ្នកចែករំលែកគុណលក្ខណៈ route (middleware prefixes namespaces) នៅទូទាំង routes ជាច្រើនដោយមិនចាំបាច់ធ្វើម្តងទៀត។ <strong>Route Model Binding</strong> ចាក់ model instances ដោយស្វ័យប្រវត្តិទៅក្នុង routes របស់អ្នកដោយផ្អែកលើ URI segment។",
    zh: "<strong>路由组</strong>允许你在多个路由之间共享路由属性（中间件、前缀、命名空间），无需重复。<strong>路由模型绑定</strong>根据 URI 段自动将模型实例注入到路由中。"
  },
  "blog.itvw.laravel.q6": { en: "6. What is Eloquent ORM? How does it differ from Query Builder?", km: "6. តើ Eloquent ORM ជាអ្វី? តើវាខុសពី Query Builder យ៉ាងម៉េច?", zh: "6. 什么是 Eloquent ORM？它与查询构建器有什么区别？" },
  "blog.itvw.laravel.a6": {
    en: "<strong>Eloquent ORM</strong> is Laravel's ActiveRecord implementation. Each database table has a corresponding Model that interacts with it. <strong>Query Builder</strong> provides a fluent interface for building SQL queries directly. Eloquent is more expressive and supports relationships, while Query Builder is lighter and can be faster for complex queries.",
    km: "<strong>Eloquent ORM</strong> គឺជាការអនុវត្ត ActiveRecord របស់ Laravel។ តារាងមូលដ្ឋានទិន្នន័យនីមួយៗមាន Model ដែលត្រូវគ្នាដែលអន្តរកម្មជាមួយវា។ <strong>Query Builder</strong> ផ្តល់ interface ស្រស់ស្អាតសម្រាប់បង្កើត SQL queries ដោយផ្ទាល់។ Eloquent មានការបង្ហាញច្រើនជាង និងគាំទ្រ relationships ខណៈ Query Builder ស្រាល និងអាចលឿនជាងសម្រាប់ queries ស្មុគស្មាញ។",
    zh: "<strong>Eloquent ORM</strong> 是 Laravel 的 ActiveRecord 实现。每个数据库表都有一个对应的模型与之交互。<strong>查询构建器</strong>提供了一个流畅的接口来直接构建 SQL 查询。Eloquent 更具表现力且支持关系，而查询构建器更轻量，对复杂查询可能更快。"
  },
  "blog.itvw.laravel.q7": { en: "7. What are Eloquent Relationships?", km: "7. តើ Eloquent Relationships ជាអ្វី?", zh: "7. 什么是 Eloquent 关系？" },
  "blog.itvw.laravel.a7": {
    en: "Eloquent relationships define how models are connected. Laravel supports several relationship types: <code class=\"inline-code\">hasOne</code>, <code class=\"inline-code\">hasMany</code>, <code class=\"inline-code\">belongsTo</code>, <code class=\"inline-code\">belongsToMany</code>, <code class=\"inline-code\">hasManyThrough</code>, and polymorphic relations.",
    km: "Eloquent relationships កំណត់រូបភាពពីរបៀបដែល models ត្រូវបានភ្ជាប់។ Laravel គាំទ្រប្រភេទ relationship ជាច្រើន: <code class=\"inline-code\">hasOne</code>, <code class=\"inline-code\">hasMany</code>, <code class=\"inline-code\">belongsTo</code>, <code class=\"inline-code\">belongsToMany</code>, <code class=\"inline-code\">hasManyThrough</code> និង polymorphic relations។",
    zh: "Eloquent 关系定义了模型之间的连接方式。Laravel 支持多种关系类型：<code class=\"inline-code\">hasOne</code>、<code class=\"inline-code\">hasMany</code>、<code class=\"inline-code\">belongsTo</code>、<code class=\"inline-code\">belongsToMany</code>、<code class=\"inline-code\">hasManyThrough</code> 和多态关系。"
  },
  "blog.itvw.laravel.q7c1": { en: "Defining Relationships", km: "កំណត់ Relationships", zh: "定义关系" },
  "blog.itvw.laravel.q8": { en: "8. What are Migrations and Seeders?", km: "8. តើ Migrations និង Seeders ជាអ្វី?", zh: "8. 什么是迁移和填充器？" },
  "blog.itvw.laravel.a8": {
    en: "<strong>Migrations</strong> are version control for your database, allowing you to define and share the application's database schema. <strong>Seeders</strong> populate your database with test or default data. Together they ensure a consistent development environment across teams.",
    km: "<strong>Migrations</strong> គឺជា version control សម្រាប់មូលដ្ឋានទិន្នន័យរបស់អ្នក ដែលអនុញ្ញាតឱ្យអ្នកកំណត់ និងចែករំលែក schema មូលដ្ឋានទិន្នន័យកម្មវិធី។ <strong>Seeders</strong> បំពេញមូលដ្ឋានទិន្នន័យរបស់អ្នកជាមួយទិន្នន័យសាកល្បង ឬលំនាំដើម។ រួមគ្នាពួកវាធានាបរិស្ថានអភិវឌ្ឍន៍ដែលស្របគ្នានៅទូទាំងក្រុម។",
    zh: "<strong>迁移</strong>是数据库的版本控制，允许你定义和共享应用程序的数据库架构。<strong>填充器</strong>用测试或默认数据填充你的数据库。它们一起确保团队之间一致的开发环境。"
  },
  "blog.itvw.laravel.q8c1": { en: "Migration Example", km: "ឧទាហរណ៍ Migration", zh: "迁移示例" },
  "blog.itvw.laravel.q8c2": { en: "Seeder Example", km: "ឧទាហរណ៍ Seeder", zh: "填充器示例" },
  "blog.itvw.laravel.q9": { en: "9. What is the difference between hasOne and belongsTo?", km: "9. តើភាពខុសគ្នារវាង hasOne និង belongsTo ជាអ្វី?", zh: "9. hasOne 和 belongsTo 有什么区别？" },
  "blog.itvw.laravel.a9": {
    en: "<code class=\"inline-code\">hasOne</code> is defined on the parent model and indicates it owns one instance of another model. <code class=\"inline-code\">belongsTo</code> is defined on the child model (the one that holds the foreign key) and indicates it belongs to the parent. The foreign key always lives on the <code class=\"inline-code\">belongsTo</code> side.",
    km: "<code class=\"inline-code\">hasOne</code> ត្រូវបានកំណត់នៅលើ parent model និងបង្ហាញថាវាមានមួយ instance នៃ model ផ្សេងទៀត។ <code class=\"inline-code\">belongsTo</code> ត្រូវបានកំណត់នៅលើ child model (ដែលមាន foreign key) និងបង្ហាញថាវាជាកម្មសិទ្ធិរបស់ parent។ Foreign key តែងតែស្ថិតនៅផ្នែក <code class=\"inline-code\">belongsTo</code>។",
    zh: "<code class=\"inline-code\">hasOne</code> 定义在父模型上，表示它拥有另一个模型的一个实例。<code class=\"inline-code\">belongsTo</code> 定义在子模型上（持有外键的那个），表示它属于父模型。外键始终位于 <code class=\"inline-code\">belongsTo</code> 端。"
  },
  "blog.itvw.laravel.q10": { en: "10. What are Laravel Collections?", km: "10. តើ Laravel Collections ជាអ្វី?", zh: "10. 什么是 Laravel 集合？" },
  "blog.itvw.laravel.a10": {
    en: "Collections are a powerful wrapper around arrays, providing a fluent, chainable interface for common data operations like filtering, mapping, sorting, and reducing. Eloquent queries always return results as Collection instances.",
    km: "Collections គឺជា wrapper ដ៏មានអានុភាពជុំវិញ arrays ដែលផ្តល់ interface ស្រស់ស្អាត និង chainable សម្រាប់ប្រតិបត្តិការទិន្នន័យទូទៅដូចជា filtering mapping sorting និង reducing។ Eloquent queries តែងតែត្រឡប់លទ្ធផលជា Collection instances។",
    zh: "集合是数组的强大包装器，提供流畅的、可链式调用的接口，用于常见数据操作如过滤、映射、排序和归约。Eloquent 查询总是以 Collection 实例返回结果。"
  },
  "blog.itvw.laravel.q10c1": { en: "Collection Examples", km: "ឧទាហរណ៍ Collection", zh: "集合示例" },
  "blog.itvw.laravel.q11": { en: "11. What is the Service Container (IoC)?", km: "11. តើ Service Container (IoC) ជាអ្វី?", zh: "11. 什么是服务容器（IoC）？" },
  "blog.itvw.laravel.a11": {
    en: "The Service Container (Inversion of Control container) is a powerful tool for managing class dependencies and performing dependency injection. It is the backbone of the Laravel framework — almost all service bindings are registered within service providers and resolved from the container automatically.",
    km: "Service Container (Inversion of Control container) គឺជាឧបករណ៍ដ៏មានអានុភាពសម្រាប់គ្រប់គ្រង class dependencies និងអនុវត្ត dependency injection។ វាគឺជាឆ្អឹងខ្នង Laravel framework — ការចង service ស្ទើរតែទាំងអស់ត្រូវបានចុះឈ្មោះក្នុង service providers និង resolve ពី container ដោយស្វ័យប្រវត្តិ។",
    zh: "服务容器（控制反转容器）是管理类依赖和执行依赖注入的强大工具。它是 Laravel 框架的骨干——几乎所有服务绑定都在服务提供者中注册，并从容器中自动解析。"
  },
  "blog.itvw.laravel.q11c1": { en: "Service Container Binding", km: "ការចង Service Container", zh: "服务容器绑定" },
  "blog.itvw.laravel.q12": { en: "12. What is Dependency Injection in Laravel?", km: "12. តើ Dependency Injection ក្នុង Laravel ជាអ្វី?", zh: "12. Laravel 中的依赖注入是什么？" },
  "blog.itvw.laravel.a12": {
    en: "Dependency Injection (DI) is a design pattern where a class receives its dependencies from external sources rather than creating them internally. Laravel's service container automatically resolves dependencies type-hinted in constructors and controller methods.",
    km: "Dependency Injection (DI) គឺជាគំរូរចនាដែល class ទទួល dependencies របស់វាពីប្រភពខាងក្រៅ ជំនួសឱ្យការបង្កើតពួកវាខាងក្នុង។ Service container របស់ Laravel ដោះស្រាយ dependencies ដែលបានកំណត់ type ក្នុង constructors និង controller methods ដោយស្វ័យប្រវត្តិ។",
    zh: "依赖注入（DI）是一种设计模式，类从外部源接收其依赖项，而不是在内部创建它们。Laravel 的服务容器自动解析构造函数和控制器方法中类型提示的依赖项。"
  },
  "blog.itvw.laravel.q12c1": { en: "Dependency Injection Example", km: "ឧទាហរណ៍ Dependency Injection", zh: "依赖注入示例" },
  "blog.itvw.laravel.q13": { en: "13. What are Facades?", km: "13. តើ Facades ជាអ្វី?", zh: "13. 什么是 Facades？" },
  "blog.itvw.laravel.a13": {
    en: "Facades provide a static-like interface to classes available in the service container. They act as a proxy to the underlying implementation, offering a terse, expressive syntax while maintaining testability. Common facades include <code class=\"inline-code\">Cache</code>, <code class=\"inline-code\">DB</code>, <code class=\"inline-code\">Auth</code>, <code class=\"inline-code\">Route</code>, and <code class=\"inline-code\">Log</code>.",
    km: "Facades ផ្តល់ interface ដូចជា static ទៅកាន់ classes ដែលមានក្នុង service container។ ពួកវាដើរតួជា proxy ទៅកាន់ការអនុវត្តន៍ខាងក្រោម ដោយផ្តល់វាក្យសម្ពន្ធខ្លី និងបង្ហាញចេញ ខណៈពេលដែលរក្សាការអាច test បាន។ Facades ទូទៅរួមមាន <code class=\"inline-code\">Cache</code>, <code class=\"inline-code\">DB</code>, <code class=\"inline-code\">Auth</code>, <code class=\"inline-code\">Route</code> និង <code class=\"inline-code\">Log</code>។",
    zh: "Facades 为服务容器中可用的类提供类似静态的接口。它们充当底层实现的代理，提供简洁、富有表现力的语法，同时保持可测试性。常见的 Facades 包括 <code class=\"inline-code\">Cache</code>、<code class=\"inline-code\">DB</code>、<code class=\"inline-code\">Auth</code>、<code class=\"inline-code\">Route</code> 和 <code class=\"inline-code\">Log</code>。"
  },
  "blog.itvw.laravel.q13c1": { en: "Facade Usage", km: "ការប្រើប្រាស់ Facade", zh: "Facade 用法" },
  "blog.itvw.laravel.q14": { en: "14. What are Laravel Events and Listeners?", km: "14. តើ Laravel Events និង Listeners ជាអ្វី?", zh: "14. 什么是 Laravel 事件和监听器？" },
  "blog.itvw.laravel.a14": {
    en: "Events provide a simple observer pattern implementation. Events represent something that happened in your application (e.g., an order was placed), and Listeners handle the response to that event (e.g., send a confirmation email). This decouples different concerns in your codebase.",
    km: "Events ផ្តល់ការអនុវត្តគំរូ observer ដ៏សាមញ្ញ។ Events តំណាងឱ្យអ្វីមួយដែលបានកើតឡើងក្នុងកម្មវិធីរបស់អ្នក (ឧ. ការបញ្ជាទិញត្រូវបានដាក់) ហើយ Listeners ដោះស្រាយការឆ្លើយតបចំពោះ event នោះ (ឧ. ផ្ញើអ៊ីមែលបញ្ជាក់)។ នេះបំបែកការព្រួយបារម្ភផ្សេងៗក្នុង codebase របស់អ្នក។",
    zh: "事件提供了简单的观察者模式实现。事件代表应用程序中发生的事情（例如，下了订单），监听器处理对该事件的响应（例如，发送确认邮件）。这解耦了代码库中的不同关注点。"
  },
  "blog.itvw.laravel.q14c1": { en: "Event & Listener", km: "Event និង Listener", zh: "事件与监听器" },
  "blog.itvw.laravel.q15": { en: "15. What is Laravel Queue?", km: "15. តើ Laravel Queue ជាអ្វី?", zh: "15. 什么是 Laravel 队列？" },
  "blog.itvw.laravel.a15": {
    en: "Laravel Queues allow you to defer time-consuming tasks (like sending emails or processing uploads) to be handled in the background. This significantly improves response times. Laravel supports multiple queue backends including Redis, Amazon SQS, Beanstalkd, and database.",
    km: "Laravel Queues អនុញ្ញាតឱ្យអ្នកពន្យារកិច្ចការដែលចំណាយពេលវេលា (ដូចជាការផ្ញើអ៊ីមែល ឬដំណើរការការ upload) ដើម្បីដោះស្រាយក្នុង background។ នេះធ្វើឱ្យពេលវេលាឆ្លើយតបប្រសើរឡើងយ៉ាងខ្លាំង។ Laravel គាំទ្រ queue backends ជាច្រើនរួមទាំង Redis, Amazon SQS, Beanstalkd និង database។",
    zh: "Laravel 队列允许你将耗时的任务（如发送邮件或处理上传）推迟到后台处理。这显著提高了响应时间。Laravel 支持多种队列后端，包括 Redis、Amazon SQS、Beanstalkd 和数据库。"
  },
  "blog.itvw.laravel.q15c1": { en: "Queue Job Example", km: "ឧទាហរណ៍ Queue Job", zh: "队列任务示例" },
  "blog.itvw.laravel.q16": { en: "16. What is CSRF Protection?", km: "16. តើការការពារ CSRF ជាអ្វី?", zh: "16. 什么是 CSRF 保护？" },
  "blog.itvw.laravel.a16": {
    en: "CSRF (Cross-Site Request Forgery) protection prevents malicious websites from performing actions on behalf of authenticated users. Laravel automatically generates a CSRF token for each active session and verifies it on every POST, PUT, PATCH, and DELETE request.",
    km: "ការការពារ CSRF (Cross-Site Request Forgery) ការពារវេបសាយព្យាបាទពីការអនុវត្តសកម្មភាពក្នុងនាមអ្នកប្រើប្រាស់ដែលបានផ្ទៀងផ្ទាត់អត្តសញ្ញាណ។ Laravel បង្កើត CSRF token ដោយស្វ័យប្រវត្តិសម្រាប់ session សកម្មនីមួយៗ និងផ្ទៀងផ្ទាត់វានៅរាល់សំណើ POST PUT PATCH និង DELETE។",
    zh: "CSRF（跨站请求伪造）保护防止恶意网站代表已认证用户执行操作。Laravel 为每个活动会话自动生成 CSRF 令牌，并在每个 POST、PUT、PATCH 和 DELETE 请求上验证它。"
  },
  "blog.itvw.laravel.q16c1": { en: "CSRF in Blade Forms", km: "CSRF ក្នុង Blade Forms", zh: "Blade 表单中的 CSRF" },
  "blog.itvw.laravel.q17": { en: "17. What is Rate Limiting?", km: "17. តើ Rate Limiting ជាអ្វី?", zh: "17. 什么是速率限制？" },
  "blog.itvw.laravel.a17": {
    en: "Rate Limiting restricts the number of requests a user can make to your application within a given time frame. It helps prevent abuse and protects your API from being overwhelmed. Laravel provides a clean way to define rate limiters.",
    km: "Rate Limiting កម្រិតចំនួនសំណើដែលអ្នកប្រើប្រាស់អាចធ្វើទៅកម្មវិធីរបស់អ្នកក្នុងរយៈពេលកំណត់។ វាជួយការពារការរំលោភបំពាន និងការពារ API របស់អ្នកពីការលើសទម្ងន់។ Laravel ផ្តល់វិធីស្អាតដើម្បីកំណត់ rate limiters។",
    zh: "速率限制限制用户在给定时间范围内可以向你的应用程序发出的请求数量。它有助于防止滥用并保护你的 API 免受过载。Laravel 提供了一种简洁的方式来定义速率限制器。"
  },
  "blog.itvw.laravel.q18": { en: "18. What are Form Requests?", km: "18. តើ Form Requests ជាអ្វី?", zh: "18. 什么是表单请求？" },
  "blog.itvw.laravel.a18": {
    en: "Form Requests are custom request classes that encapsulate validation logic and authorization checks. They keep your controllers clean by moving validation rules into a dedicated class.",
    km: "Form Requests គឺជា request classes ផ្ទាល់ខ្លួនដែលរុំ validation logic និងការត្រួតពិនិត្យ authorization។ ពួកវារក្សា controllers របស់អ្នកឱ្យស្អាតដោយផ្លាស់ទី validation rules ទៅក្នុង class ពិសេស។",
    zh: "表单请求是封装验证逻辑和授权检查的自定义请求类。它们通过将验证规则移到专用类中来保持控制器的整洁。"
  },
  "blog.itvw.laravel.q18c1": { en: "Form Request Example", km: "ឧទាហរណ៍ Form Request", zh: "表单请求示例" },
  "blog.itvw.laravel.q19": { en: "19. What is Eager Loading vs Lazy Loading?", km: "19. តើ Eager Loading ទល់នឹង Lazy Loading ជាអ្វី?", zh: "19. 什么是预加载与懒加载？" },
  "blog.itvw.laravel.a19": {
    en: "<strong>Lazy Loading</strong> loads related models only when you access the relationship property, which can cause the N+1 query problem. <strong>Eager Loading</strong> loads relationships at the time of the initial query using <code class=\"inline-code\">with()</code>, drastically reducing the number of queries.",
    km: "<strong>Lazy Loading</strong> ផ្ទុក models ដែលពាក់ព័ន្ធតែនៅពេលអ្នកចូលប្រើ relationship property ដែលអាចបណ្ដាលឱ្យមានបញ្ហា N+1 query។ <strong>Eager Loading</strong> ផ្ទុក relationships នៅពេល query ដំបូងដោយប្រើ <code class=\"inline-code\">with()</code> កាត់បន្ថយចំនួន queries យ៉ាងខ្លាំង។",
    zh: "<strong>懒加载</strong>仅在你访问关系属性时加载相关模型，这可能导致 N+1 查询问题。<strong>预加载</strong>在初始查询时使用 <code class=\"inline-code\">with()</code> 加载关系，大幅减少查询数量。"
  },
  "blog.itvw.laravel.q19c1": { en: "Eager Loading vs Lazy Loading", km: "Eager Loading ទល់នឹង Lazy Loading", zh: "预加载与懒加载" },
  "blog.itvw.laravel.q20": { en: "20. What is Laravel Sanctum vs Passport?", km: "20. តើ Laravel Sanctum ទល់នឹង Passport ជាអ្វី?", zh: "20. Laravel Sanctum 与 Passport 有什么区别？" },
  "blog.itvw.laravel.a20": {
    en: "Both provide API authentication, but they serve different purposes. <strong>Sanctum</strong> is a lightweight package ideal for SPAs, mobile apps, and simple token-based APIs. <strong>Passport</strong> is a full OAuth2 server implementation for when you need to issue access tokens with scopes, support third-party applications, and implement the full OAuth2 specification.",
    km: "<strong>Sanctum</strong> និង <strong>Passport</strong> ទាំងពីរផ្តល់ API authentication ប៉ុន្តែពួកវាបម្រើគោលបំណងខុសគ្នា។ <strong>Sanctum</strong> គឺជា package ស្រាល ល្អសម្រាប់ SPAs កម្មវិធីទូរស័ព្ទ និង API ដែលផ្អែកលើ token សាមញ្ញ។ <strong>Passport</strong> គឺជាការអនុវត្ត OAuth2 server ពេញលេញសម្រាប់ពេលដែលអ្នកត្រូវចេញ access tokens ជាមួយ scopes គាំទ្រកម្មវិធីភាគីទីបី និងអនុវត្តលក្ខណៈបច្ចេកទេស OAuth2 ពេញលេញ។",
    zh: "两者都提供 API 认证，但服务于不同的目的。<strong>Sanctum</strong> 是一个轻量级包，适用于 SPA、移动应用和简单的基于令牌的 API。<strong>Passport</strong> 是完整的 OAuth2 服务器实现，适用于需要发放带作用域的访问令牌、支持第三方应用和实现完整 OAuth2 规范的场景。"
  },
  "blog.itvw.laravel.q20tip": {
    en: "<strong>When to use which?</strong> Use <strong>Sanctum</strong> for first-party SPAs and simple API tokens. Use <strong>Passport</strong> when you need full OAuth2 support with third-party client credentials, authorization codes, and token scopes.",
    km: "<strong>ពេលណាគួរប្រើអ្វី?</strong> ប្រើ <strong>Sanctum</strong> សម្រាប់ SPAs ផ្ទាល់ខ្លួន និង API tokens សាមញ្ញ។ ប្រើ <strong>Passport</strong> នៅពេលអ្នកត្រូវការ OAuth2 ពេញលេញជាមួយ client credentials ភាគីទីបី authorization codes និង token scopes។",
    zh: "<strong>何时使用哪个？</strong>对于第一方 SPA 和简单的 API 令牌，使用 <strong>Sanctum</strong>。当你需要完整的 OAuth2 支持（包括第三方客户端凭证、授权码和令牌作用域）时，使用 <strong>Passport</strong>。"
  },
  "blog.itvw.laravel.sum1": { en: "<strong>MVC Pattern</strong> — separates concerns into Model, View, and Controller", km: "<strong>គំរូ MVC</strong> — បំបែកការព្រួយបារម្ភជា Model View និង Controller", zh: "<strong>MVC 模式</strong>——将关注点分为 Model、View 和 Controller" },
  "blog.itvw.laravel.sum2": { en: "<strong>Service Providers & Container</strong> — the backbone of Laravel's bootstrapping and dependency management", km: "<strong>Service Providers និង Container</strong> — ឆ្អឹងខ្នងនៃការ bootstrapping និងការគ្រប់គ្រង dependency របស់ Laravel", zh: "<strong>服务提供者和容器</strong>——Laravel 引导和依赖管理的骨干" },
  "blog.itvw.laravel.sum3": { en: "<strong>Eloquent ORM</strong> — expressive ActiveRecord implementation with relationships and collections", km: "<strong>Eloquent ORM</strong> — ការអនុវត្ត ActiveRecord ដែលមានការបង្ហាញជាមួយ relationships និង collections", zh: "<strong>Eloquent ORM</strong>——富有表现力的 ActiveRecord 实现，支持关系和集合" },
  "blog.itvw.laravel.sum4": { en: "<strong>Middleware & CSRF</strong> — filter requests and protect against cross-site attacks", km: "<strong>Middleware និង CSRF</strong> — ត្រងសំណើ និងការពារប្រឆាំងការវាយប្រហារ cross-site", zh: "<strong>中间件和 CSRF</strong>——过滤请求并防御跨站攻击" },
  "blog.itvw.laravel.sum5": { en: "<strong>Events, Queues & Jobs</strong> — decouple logic and handle tasks in the background", km: "<strong>Events Queues និង Jobs</strong> — បំបែក logic និងដោះស្រាយកិច្ចការក្នុង background", zh: "<strong>事件、队列和任务</strong>——解耦逻辑并在后台处理任务" },
  "blog.itvw.laravel.sum6": { en: "<strong>Eager Loading</strong> — avoid N+1 query problems with <code class=\"inline-code\">with()</code>", km: "<strong>Eager Loading</strong> — ជៀសវាងបញ្ហា N+1 query ជាមួយ <code class=\"inline-code\">with()</code>", zh: "<strong>预加载</strong>——使用 <code class=\"inline-code\">with()</code> 避免 N+1 查询问题" },
  "blog.itvw.laravel.sum7": { en: "<strong>Sanctum vs Passport</strong> — choose the right API authentication for your use case", km: "<strong>Sanctum ទល់នឹង Passport</strong> — ជ្រើសរើស API authentication ត្រឹមត្រូវសម្រាប់ករណីប្រើប្រាស់របស់អ្នក", zh: "<strong>Sanctum 与 Passport</strong>——为你的用例选择正确的 API 认证" },
  "blog.itvw.laravel.sum8": { en: "<strong>Form Requests & Rate Limiting</strong> — validate input and protect your API from abuse", km: "<strong>Form Requests និង Rate Limiting</strong> — ផ្ទៀងផ្ទាត់ input និងការពារ API របស់អ្នកពីការរំលោភបំពាន", zh: "<strong>表单请求和速率限制</strong>——验证输入并保护你的 API 免受滥用" },

  // Blog - Vue Interview
  "blog.itvw.vue.title": { en: "Vue.js Interview Questions", km: "សំណួរសម្ភាសន៍ Vue.js", zh: "Vue.js 面试题" },
  "blog.itvw.vue.intro": {
    en: "Preparing for a Vue.js interview? This guide covers <strong>20 commonly asked questions</strong> with clear answers and practical code examples. Whether you're a beginner or an experienced developer, these questions will help you solidify your understanding of Vue.js core concepts.",
    km: "កំពុងរៀបចំសម្រាប់សម្ភាសន៍ Vue.js មែនទេ? មគ្គុទ្ទេសក៍នេះគ្របដណ្ដប់ <strong>សំណួរដែលគេសួរញឹកញាប់ចំនួន 20</strong> ជាមួយចម្លើយច្បាស់លាស់ និងឧទាហរណ៍កូដជាក់ស្តែង។ មិនថាអ្នកជាអ្នកចាប់ផ្តើម ឬអ្នកអភិវឌ្ឍន៍ដែលមានបទពិសោធន៍នោះទេ សំណួរទាំងនេះនឹងជួយអ្នកពង្រឹងការយល់ដឹងអំពីគោលគំនិតស្នូល Vue.js។",
    zh: "准备 Vue.js 面试？本指南涵盖了 <strong>20 个常见问题</strong>，配有清晰的答案和实用的代码示例。无论你是初学者还是有经验的开发者，这些问题都将帮助你巩固对 Vue.js 核心概念的理解。"
  },
  "blog.itvw.vue.q1": { en: "1. What is Vue.js? What are its key features?", km: "1. តើ Vue.js ជាអ្វី? តើលក្ខណៈពិសេសរបស់វាមានអ្វីខ្លះ?", zh: "1. 什么是 Vue.js？它的主要特性是什么？" },
  "blog.itvw.vue.a1": {
    en: "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, meaning you can use as little or as much of it as you need. Key features include:",
    km: "Vue.js គឺជា JavaScript framework ដែលមានលក្ខណៈ progressive សម្រាប់បង្កើតចំណុចប្រទាក់អ្នកប្រើប្រាស់។ វាត្រូវបានរចនាឡើងដើម្បីអាចទទួលយកបានបន្តិចម្តងៗ មានន័យថាអ្នកអាចប្រើតិច ឬច្រើនតាមតម្រូវការ។ លក្ខណៈពិសេសរួមមាន:",
    zh: "Vue.js 是一个用于构建用户界面的渐进式 JavaScript 框架。它被设计为可以逐步采用，这意味着你可以根据需要使用它的任意部分。主要特性包括："
  },
  "blog.itvw.vue.a1l1": { en: "<strong>Reactive data binding</strong> — the DOM automatically updates when data changes", km: "<strong>Reactive data binding</strong> — DOM ត្រូវបានធ្វើបច្ចុប្បន្នភាពដោយស្វ័យប្រវត្តិនៅពេលទិន្នន័យផ្លាស់ប្តូរ", zh: "<strong>响应式数据绑定</strong>——当数据变化时 DOM 自动更新" },
  "blog.itvw.vue.a1l2": { en: "<strong>Component-based architecture</strong> — build UIs with reusable, self-contained components", km: "<strong>Component-based architecture</strong> — បង្កើត UIs ជាមួយ components ដែលអាចប្រើឡើងវិញ និងឯករាជ្យ", zh: "<strong>组件化架构</strong>——使用可复用、自包含的组件构建 UI" },
  "blog.itvw.vue.a1l3": { en: "<strong>Virtual DOM</strong> — efficient rendering through a virtual representation of the DOM", km: "<strong>Virtual DOM</strong> — ការ render ប្រកបដោយប្រសិទ្ធភាពតាមរយៈ DOM និម្មិត", zh: "<strong>虚拟 DOM</strong>——通过 DOM 的虚拟表示进行高效渲染" },
  "blog.itvw.vue.a1l4": { en: "<strong>Directives</strong> — special attributes like <code class=\"inline-code\">v-if</code>, <code class=\"inline-code\">v-for</code>, <code class=\"inline-code\">v-bind</code>", km: "<strong>Directives</strong> — attributes ពិសេសដូចជា <code class=\"inline-code\">v-if</code>, <code class=\"inline-code\">v-for</code>, <code class=\"inline-code\">v-bind</code>", zh: "<strong>指令</strong>——特殊属性如 <code class=\"inline-code\">v-if</code>、<code class=\"inline-code\">v-for</code>、<code class=\"inline-code\">v-bind</code>" },
  "blog.itvw.vue.a1l5": { en: "<strong>Single File Components</strong> — template, script, and style in one <code class=\"inline-code\">.vue</code> file", km: "<strong>Single File Components</strong> — template script និង style ក្នុងឯកសារ <code class=\"inline-code\">.vue</code> តែមួយ", zh: "<strong>单文件组件</strong>——模板、脚本和样式在一个 <code class=\"inline-code\">.vue</code> 文件中" },
  "blog.itvw.vue.a1l6": { en: "<strong>Composition API</strong> — modern way to organize component logic", km: "<strong>Composition API</strong> — វិធីទំនើបដើម្បីរៀបចំ component logic", zh: "<strong>组合式 API</strong>——组织组件逻辑的现代方式" },
  "blog.itvw.vue.q1c1": { en: "A simple Vue component", km: "Vue component សាមញ្ញមួយ", zh: "一个简单的 Vue 组件" },
  "blog.itvw.vue.q2": { en: "2. What is the Virtual DOM?", km: "2. តើ Virtual DOM ជាអ្វី?", zh: "2. 什么是虚拟 DOM？" },
  "blog.itvw.vue.a2": {
    en: "The Virtual DOM is a lightweight JavaScript representation of the real DOM. When data changes, Vue creates a new virtual DOM tree and compares it with the previous one (a process called <strong>diffing</strong>). Only the differences are applied to the real DOM, making updates much faster than manipulating the DOM directly.",
    km: "Virtual DOM គឺជាតំណាង JavaScript ស្រាលនៃ DOM ពិត។ នៅពេលទិន្នន័យផ្លាស់ប្តូរ Vue បង្កើត virtual DOM tree ថ្មី និងប្រៀបធៀបវាជាមួយមុន (ដំណើរការដែលហៅថា <strong>diffing</strong>)។ មានតែភាពខុសគ្នាប៉ុណ្ណោះដែលត្រូវបានអនុវត្តទៅ DOM ពិត ដែលធ្វើឱ្យការធ្វើបច្ចុប្បន្នភាពលឿនជាងការរៀបចំ DOM ដោយផ្ទាល់។",
    zh: "虚拟 DOM 是真实 DOM 的轻量级 JavaScript 表示。当数据变化时，Vue 创建一个新的虚拟 DOM 树并与前一个进行比较（称为 <strong>diffing</strong> 的过程）。只有差异被应用到真实 DOM，使更新比直接操作 DOM 快得多。"
  },
  "blog.itvw.vue.q2c1": { en: "Virtual DOM concept", km: "គោលគំនិត Virtual DOM", zh: "虚拟 DOM 概念" },
  "blog.itvw.vue.q2tip": {
    en: "<strong>Key benefit:</strong> The Virtual DOM batches multiple changes together and performs a single, optimized DOM update, avoiding costly reflows and repaints.",
    km: "<strong>អត្ថប្រយោជន៍សំខាន់:</strong> Virtual DOM ប្រមូលផ្តុំការផ្លាស់ប្តូរច្រើនរួមគ្នា និងអនុវត្តការធ្វើបច្ចុប្បន្នភាព DOM តែមួយដែលបានបង្កើនប្រសិទ្ធភាព ជៀសវាងការ reflow និង repaint ដែលមានតម្លៃថ្លៃ។",
    zh: "<strong>关键优势：</strong>虚拟 DOM 将多个更改批处理在一起，执行单次优化的 DOM 更新，避免昂贵的重排和重绘。"
  },
  "blog.itvw.vue.q3": { en: "3. What are Vue lifecycle hooks?", km: "3. តើ Vue lifecycle hooks ជាអ្វី?", zh: "3. 什么是 Vue 生命周期钩子？" },
  "blog.itvw.vue.a3": {
    en: "Lifecycle hooks are functions that let you run code at specific stages of a component's life. In the Composition API, they are imported from Vue and called inside <code class=\"inline-code\">&lt;script setup&gt;</code>.",
    km: "Lifecycle hooks គឺជា functions ដែលអនុញ្ញាតឱ្យអ្នកដំណើរការកូដនៅដំណាក់កាលជាក់លាក់នៃជីវិត component។ នៅក្នុង Composition API ពួកវាត្រូវបាន import ពី Vue និងហៅក្នុង <code class=\"inline-code\">&lt;script setup&gt;</code>។",
    zh: "生命周期钩子是让你在组件生命周期的特定阶段运行代码的函数。在组合式 API 中，它们从 Vue 导入并在 <code class=\"inline-code\">&lt;script setup&gt;</code> 内调用。"
  },
  "blog.itvw.vue.q3c1": { en: "Lifecycle hooks", km: "Lifecycle hooks", zh: "生命周期钩子" },
  "blog.itvw.vue.q4": { en: "4. What is the difference between v-show and v-if?", km: "4. តើភាពខុសគ្នារវាង v-show និង v-if ជាអ្វី?", zh: "4. v-show 和 v-if 有什么区别？" },
  "blog.itvw.vue.a4": {
    en: "Both conditionally display elements, but they work differently. <code class=\"inline-code\">v-if</code> completely adds or removes the element from the DOM, while <code class=\"inline-code\">v-show</code> toggles the CSS <code class=\"inline-code\">display</code> property. Use <code class=\"inline-code\">v-show</code> for frequent toggling and <code class=\"inline-code\">v-if</code> for conditions that rarely change.",
    km: "ទាំងពីរបង្ហាញ elements តាមលក្ខខណ្ឌ ប៉ុន្តែពួកវាដំណើរការខុសគ្នា។ <code class=\"inline-code\">v-if</code> បន្ថែម ឬលុប element ទាំងស្រុងពី DOM ខណៈ <code class=\"inline-code\">v-show</code> បិទបើក CSS <code class=\"inline-code\">display</code> property។ ប្រើ <code class=\"inline-code\">v-show</code> សម្រាប់ការបិទបើកញឹកញាប់ និង <code class=\"inline-code\">v-if</code> សម្រាប់លក្ខខណ្ឌដែលកម្រផ្លាស់ប្តូរ។",
    zh: "两者都有条件地显示元素，但工作方式不同。<code class=\"inline-code\">v-if</code> 完全从 DOM 中添加或移除元素，而 <code class=\"inline-code\">v-show</code> 切换 CSS <code class=\"inline-code\">display</code> 属性。频繁切换用 <code class=\"inline-code\">v-show</code>，很少变化的条件用 <code class=\"inline-code\">v-if</code>。"
  },
  "blog.itvw.vue.q4c1": { en: "v-show vs v-if", km: "v-show ទល់នឹង v-if", zh: "v-show 与 v-if" },
  "blog.itvw.vue.q5": { en: "5. What are computed properties vs methods?", km: "5. តើ computed properties ទល់នឹង methods ជាអ្វី?", zh: "5. 计算属性与方法有什么区别？" },
  "blog.itvw.vue.a5": {
    en: "<strong>Computed properties</strong> are cached and only re-evaluate when their reactive dependencies change. <strong>Methods</strong> run every time they are called. Use computed for derived data and methods for actions or event handlers.",
    km: "<strong>Computed properties</strong> ត្រូវបាន cache ហើយគណនាឡើងវិញតែនៅពេល reactive dependencies របស់វាផ្លាស់ប្តូរ។ <strong>Methods</strong> ដំណើរការរាល់ពេលដែលត្រូវបានហៅ។ ប្រើ computed សម្រាប់ derived data និង methods សម្រាប់សកម្មភាព ឬ event handlers។",
    zh: "<strong>计算属性</strong>被缓存，只有在响应式依赖变化时才重新计算。<strong>方法</strong>每次调用时都会运行。对派生数据使用计算属性，对操作或事件处理器使用方法。"
  },
  "blog.itvw.vue.q5c1": { en: "Computed vs Methods", km: "Computed ទល់នឹង Methods", zh: "计算属性与方法" },
  "blog.itvw.vue.q6": { en: "6. What is two-way data binding (v-model)?", km: "6. តើ two-way data binding (v-model) ជាអ្វី?", zh: "6. 什么是双向数据绑定（v-model）？" },
  "blog.itvw.vue.a6": {
    en: "<code class=\"inline-code\">v-model</code> creates a two-way binding between a form input and reactive data. When the user types, the data updates. When the data changes, the input updates. It is syntactic sugar for a <code class=\"inline-code\">:value</code> binding and an <code class=\"inline-code\">@input</code> event listener.",
    km: "<code class=\"inline-code\">v-model</code> បង្កើត binding ពីរផ្លូវរវាង form input និង reactive data។ នៅពេលអ្នកប្រើវាយ ទិន្នន័យត្រូវបានធ្វើបច្ចុប្បន្នភាព។ នៅពេលទិន្នន័យផ្លាស់ប្តូរ input ត្រូវបានធ្វើបច្ចុប្បន្នភាព។ វាគឺជា syntactic sugar សម្រាប់ <code class=\"inline-code\">:value</code> binding និង <code class=\"inline-code\">@input</code> event listener។",
    zh: "<code class=\"inline-code\">v-model</code> 在表单输入和响应式数据之间创建双向绑定。当用户输入时，数据更新。当数据变化时，输入更新。它是 <code class=\"inline-code\">:value</code> 绑定和 <code class=\"inline-code\">@input</code> 事件监听器的语法糖。"
  },
  "blog.itvw.vue.q6c1": { en: "v-model usage", km: "ការប្រើប្រាស់ v-model", zh: "v-model 用法" },
  "blog.itvw.vue.q7": { en: "7. What are Vue components? How to pass data between them?", km: "7. តើ Vue components ជាអ្វី? តើបញ្ជូនទិន្នន័យរវាងពួកវាយ៉ាងម៉េច?", zh: "7. 什么是 Vue 组件？如何在组件间传递数据？" },
  "blog.itvw.vue.a7": {
    en: "Components are reusable, self-contained pieces of UI. Data flows <strong>down</strong> from parent to child via <strong>props</strong>, and <strong>up</strong> from child to parent via <strong>emits</strong> (custom events). For deeply nested components, use <code class=\"inline-code\">provide/inject</code> or a state management library.",
    km: "Components គឺជាផ្នែក UI ដែលអាចប្រើឡើងវិញ និងឯករាជ្យ។ ទិន្នន័យហូរ <strong>ចុះក្រោម</strong> ពី parent ទៅ child តាមរយៈ <strong>props</strong> ហើយ <strong>ឡើងលើ</strong> ពី child ទៅ parent តាមរយៈ <strong>emits</strong> (custom events)។ សម្រាប់ components ដែលស្ថិតក្នុង nested ជ្រៅ ប្រើ <code class=\"inline-code\">provide/inject</code> ឬ state management library។",
    zh: "组件是可复用、自包含的 UI 片段。数据通过 <strong>props</strong> 从父组件<strong>向下</strong>流向子组件，通过 <strong>emits</strong>（自定义事件）从子组件<strong>向上</strong>流向父组件。对于深层嵌套的组件，使用 <code class=\"inline-code\">provide/inject</code> 或状态管理库。"
  },
  "blog.itvw.vue.q7c1": { en: "Parent-Child communication", km: "ការទំនាក់ទំនង Parent-Child", zh: "父子组件通信" },
  "blog.itvw.vue.q8": { en: "8. What are props and emits?", km: "8. តើ props និង emits ជាអ្វី?", zh: "8. 什么是 props 和 emits？" },
  "blog.itvw.vue.a8": {
    en: "<strong>Props</strong> are custom attributes used to pass data from a parent to a child component. <strong>Emits</strong> are custom events that a child component sends to its parent. In the Composition API, you define them with <code class=\"inline-code\">defineProps()</code> and <code class=\"inline-code\">defineEmits()</code>.",
    km: "<strong>Props</strong> គឺជា custom attributes ដែលប្រើដើម្បីបញ្ជូនទិន្នន័យពី parent ទៅ child component។ <strong>Emits</strong> គឺជា custom events ដែល child component ផ្ញើទៅ parent។ នៅក្នុង Composition API អ្នកកំណត់ពួកវាជាមួយ <code class=\"inline-code\">defineProps()</code> និង <code class=\"inline-code\">defineEmits()</code>។",
    zh: "<strong>Props</strong> 是用于从父组件向子组件传递数据的自定义属性。<strong>Emits</strong> 是子组件发送给父组件的自定义事件。在组合式 API 中，你用 <code class=\"inline-code\">defineProps()</code> 和 <code class=\"inline-code\">defineEmits()</code> 定义它们。"
  },
  "blog.itvw.vue.q8c1": { en: "Props and Emits", km: "Props និង Emits", zh: "Props 和 Emits" },
  "blog.itvw.vue.q9": { en: "9. What is Vuex/Pinia? When to use state management?", km: "9. តើ Vuex/Pinia ជាអ្វី? ពេលណាគួរប្រើ state management?", zh: "9. 什么是 Vuex/Pinia？何时使用状态管理？" },
  "blog.itvw.vue.a9": {
    en: "<strong>Pinia</strong> (the recommended state management for Vue 3) and <strong>Vuex</strong> are centralized stores for managing shared state across components. Use state management when multiple components need to access or modify the same data and prop drilling becomes unwieldy.",
    km: "<strong>Pinia</strong> (state management ដែលបានណែនាំសម្រាប់ Vue 3) និង <strong>Vuex</strong> គឺជា stores កណ្តាលសម្រាប់គ្រប់គ្រង state រួមនៅទូទាំង components។ ប្រើ state management នៅពេល components ច្រើនត្រូវការចូលប្រើ ឬកែប្រែទិន្នន័យដូចគ្នា ហើយ prop drilling ក្លាយជាពិបាក។",
    zh: "<strong>Pinia</strong>（Vue 3 推荐的状态管理）和 <strong>Vuex</strong> 是用于跨组件管理共享状态的集中式存储。当多个组件需要访问或修改相同数据且 prop drilling 变得笨拙时，使用状态管理。"
  },
  "blog.itvw.vue.q9c1": { en: "Pinia store example", km: "ឧទាហរណ៍ Pinia store", zh: "Pinia 存储示例" },
  "blog.itvw.vue.q10": { en: "10. What is Vue Router? How do dynamic routes work?", km: "10. តើ Vue Router ជាអ្វី? តើ dynamic routes ដំណើរការយ៉ាងម៉េច?", zh: "10. 什么是 Vue Router？动态路由如何工作？" },
  "blog.itvw.vue.a10": {
    en: "Vue Router is the official routing library for Vue.js. It maps URLs to components. <strong>Dynamic routes</strong> use parameters (e.g., <code class=\"inline-code\">/user/:id</code>) to match variable URL segments and pass them as route params.",
    km: "Vue Router គឺជា routing library ផ្លូវការសម្រាប់ Vue.js។ វា map URLs ទៅ components។ <strong>Dynamic routes</strong> ប្រើ parameters (ឧ. <code class=\"inline-code\">/user/:id</code>) ដើម្បីផ្គូផ្គង URL segments ដែលអាចប្រែប្រួល និងបញ្ជូនពួកវាជា route params។",
    zh: "Vue Router 是 Vue.js 的官方路由库。它将 URL 映射到组件。<strong>动态路由</strong>使用参数（例如 <code class=\"inline-code\">/user/:id</code>）来匹配可变的 URL 段并将它们作为路由参数传递。"
  },
  "blog.itvw.vue.q10c1": { en: "Vue Router with dynamic routes", km: "Vue Router ជាមួយ dynamic routes", zh: "带动态路由的 Vue Router" },
  "blog.itvw.vue.q11": { en: "11. What are watchers? watch vs watchEffect?", km: "11. តើ watchers ជាអ្វី? watch ទល់នឹង watchEffect?", zh: "11. 什么是侦听器？watch 与 watchEffect？" },
  "blog.itvw.vue.a11": {
    en: "Watchers let you perform side effects when reactive data changes. <code class=\"inline-code\">watch()</code> explicitly specifies which sources to watch and gives you old/new values. <code class=\"inline-code\">watchEffect()</code> automatically tracks all reactive dependencies used inside it and runs immediately.",
    km: "Watchers អនុញ្ញាតឱ្យអ្នកអនុវត្ត side effects នៅពេល reactive data ផ្លាស់ប្តូរ។ <code class=\"inline-code\">watch()</code> កំណត់ច្បាស់ថាតើ sources ណាដែលត្រូវ watch និងផ្តល់តម្លៃចាស់/ថ្មី។ <code class=\"inline-code\">watchEffect()</code> តាមដាន reactive dependencies ទាំងអស់ដែលប្រើក្នុងវាដោយស្វ័យប្រវត្តិ និងដំណើរការភ្លាមៗ។",
    zh: "侦听器让你在响应式数据变化时执行副作用。<code class=\"inline-code\">watch()</code> 明确指定要监听的源并给你旧/新值。<code class=\"inline-code\">watchEffect()</code> 自动跟踪内部使用的所有响应式依赖并立即运行。"
  },
  "blog.itvw.vue.q11c1": { en: "watch vs watchEffect", km: "watch ទល់នឹង watchEffect", zh: "watch 与 watchEffect" },
  "blog.itvw.vue.q12": { en: "12. What is the Composition API vs Options API?", km: "12. តើ Composition API ទល់នឹង Options API ជាអ្វី?", zh: "12. 组合式 API 与选项式 API 有什么区别？" },
  "blog.itvw.vue.a12": {
    en: "The <strong>Options API</strong> organizes code by option type (data, methods, computed, watch) while the <strong>Composition API</strong> organizes code by logical concern. The Composition API is recommended for Vue 3 as it offers better TypeScript support, code reuse via composables, and more flexible code organization.",
    km: "<strong>Options API</strong> រៀបចំកូដតាមប្រភេទ option (data methods computed watch) ខណៈ <strong>Composition API</strong> រៀបចំកូដតាមការព្រួយបារម្ភ logical។ Composition API ត្រូវបានណែនាំសម្រាប់ Vue 3 ដោយសារវាផ្តល់ TypeScript support ល្អជាង ការប្រើកូដឡើងវិញតាមរយៈ composables និងការរៀបចំកូដដែលអាចបត់បែនបានជាង។",
    zh: "<strong>选项式 API</strong> 按选项类型（data、methods、computed、watch）组织代码，而 <strong>组合式 API</strong> 按逻辑关注点组织代码。Vue 3 推荐使用组合式 API，因为它提供更好的 TypeScript 支持、通过 composables 复用代码，以及更灵活的代码组织。"
  },
  "blog.itvw.vue.q12c1": { en: "Options API vs Composition API", km: "Options API ទល់នឹង Composition API", zh: "选项式 API 与组合式 API" },
  "blog.itvw.vue.q13": { en: "13. What are slots (default, named, scoped)?", km: "13. តើ slots ជាអ្វី (default named scoped)?", zh: "13. 什么是插槽（默认、具名、作用域）？" },
  "blog.itvw.vue.a13": {
    en: "Slots allow a parent component to inject content into a child component's template. <strong>Default slots</strong> provide a single content area, <strong>named slots</strong> allow multiple content areas, and <strong>scoped slots</strong> let the child pass data back to the parent's slot content.",
    km: "Slots អនុញ្ញាតឱ្យ parent component ចាក់ content ទៅក្នុង template child component។ <strong>Default slots</strong> ផ្តល់ content area តែមួយ <strong>named slots</strong> អនុញ្ញាត content areas ច្រើន ហើយ <strong>scoped slots</strong> អនុញ្ញាតឱ្យ child បញ្ជូន data ត្រឡប់ទៅ slot content របស់ parent។",
    zh: "插槽允许父组件将内容注入子组件的模板中。<strong>默认插槽</strong>提供单个内容区域，<strong>具名插槽</strong>允许多个内容区域，<strong>作用域插槽</strong>让子组件将数据传回父组件的插槽内容。"
  },
  "blog.itvw.vue.q13c1": { en: "Slots example", km: "ឧទាហរណ៍ Slots", zh: "插槽示例" },
  "blog.itvw.vue.q14": { en: "14. What are custom directives?", km: "14. តើ custom directives ជាអ្វី?", zh: "14. 什么是自定义指令？" },
  "blog.itvw.vue.a14": {
    en: "Custom directives let you apply low-level DOM manipulations to elements. They are useful for reusable behaviors like auto-focus, tooltips, or click-outside detection. Register them globally or locally using the <code class=\"inline-code\">v-</code> prefix.",
    km: "Custom directives អនុញ្ញាតឱ្យអ្នកអនុវត្ត DOM manipulations កម្រិតទាបទៅលើ elements។ ពួកវាមានប្រយោជន៍សម្រាប់ behaviors ដែលអាចប្រើឡើងវិញដូចជា auto-focus tooltips ឬការរកឃើញ click-outside។ ចុះឈ្មោះពួកវាជា global ឬ local ដោយប្រើ <code class=\"inline-code\">v-</code> prefix។",
    zh: "自定义指令让你对元素应用低级 DOM 操作。它们对于可复用的行为（如自动聚焦、工具提示或点击外部检测）很有用。使用 <code class=\"inline-code\">v-</code> 前缀全局或局部注册它们。"
  },
  "blog.itvw.vue.q14c1": { en: "Custom directive", km: "Custom directive", zh: "自定义指令" },
  "blog.itvw.vue.q15": { en: "15. What is provide/inject?", km: "15. តើ provide/inject ជាអ្វី?", zh: "15. 什么是 provide/inject？" },
  "blog.itvw.vue.a15": {
    en: "<code class=\"inline-code\">provide</code> and <code class=\"inline-code\">inject</code> allow an ancestor component to serve as a dependency provider for all its descendants. This avoids prop drilling through multiple component layers.",
    km: "<code class=\"inline-code\">provide</code> និង <code class=\"inline-code\">inject</code> អនុញ្ញាតឱ្យ ancestor component ដើរតួជាអ្នកផ្តល់ dependency សម្រាប់ descendants ទាំងអស់របស់វា។ នេះជៀសវាង prop drilling តាមរយៈស្រទាប់ component ច្រើន។",
    zh: "<code class=\"inline-code\">provide</code> 和 <code class=\"inline-code\">inject</code> 允许祖先组件作为其所有后代的依赖提供者。这避免了通过多层组件进行 prop drilling。"
  },
  "blog.itvw.vue.q15c1": { en: "Provide / Inject", km: "Provide / Inject", zh: "Provide / Inject" },
  "blog.itvw.vue.q16": { en: "16. What are mixins vs composables?", km: "16. តើ mixins ទល់នឹង composables ជាអ្វី?", zh: "16. mixins 与 composables 有什么区别？" },
  "blog.itvw.vue.a16": {
    en: "<strong>Mixins</strong> (Options API) merge options into a component but can cause naming conflicts and unclear data sources. <strong>Composables</strong> (Composition API) are plain functions that return reactive state, offering explicit imports, no naming conflicts, and better TypeScript support. Composables are the recommended pattern in Vue 3.",
    km: "<strong>Mixins</strong> (Options API) បញ្ចូល options ទៅក្នុង component ប៉ុន្តែអាចបណ្ដាលឱ្យមានជម្លោះឈ្មោះ និងប្រភពទិន្នន័យមិនច្បាស់។ <strong>Composables</strong> (Composition API) គឺជា functions ធម្មតាដែលត្រឡប់ reactive state ផ្តល់ imports ច្បាស់លាស់ គ្មានជម្លោះឈ្មោះ និង TypeScript support ល្អជាង។ Composables គឺជាគំរូដែលបានណែនាំក្នុង Vue 3។",
    zh: "<strong>Mixins</strong>（选项式 API）将选项合并到组件中，但可能导致命名冲突和不明确的数据来源。<strong>Composables</strong>（组合式 API）是返回响应式状态的普通函数，提供显式导入、无命名冲突和更好的 TypeScript 支持。Composables 是 Vue 3 中推荐的模式。"
  },
  "blog.itvw.vue.q16c1": { en: "Mixin vs Composable", km: "Mixin ទល់នឹង Composable", zh: "Mixin 与 Composable" },
  "blog.itvw.vue.q17": { en: "17. What is nextTick?", km: "17. តើ nextTick ជាអ្វី?", zh: "17. 什么是 nextTick？" },
  "blog.itvw.vue.a17": {
    en: "<code class=\"inline-code\">nextTick()</code> lets you run code after the DOM has been updated following a reactive state change. Vue batches DOM updates, so if you need to access the updated DOM immediately after changing data, use <code class=\"inline-code\">nextTick()</code>.",
    km: "<code class=\"inline-code\">nextTick()</code> អនុញ្ញាតឱ្យអ្នកដំណើរការកូដបន្ទាប់ពី DOM ត្រូវបានធ្វើបច្ចុប្បន្នភាពបន្ទាប់ពីការផ្លាស់ប្តូរ reactive state។ Vue ប្រមូលផ្តុំការធ្វើបច្ចុប្បន្នភាព DOM ដូច្នេះប្រសិនបើអ្នកត្រូវការចូលប្រើ DOM ដែលបានធ្វើបច្ចុប្បន្នភាពភ្លាមៗបន្ទាប់ពីផ្លាស់ប្តូរទិន្នន័យ ប្រើ <code class=\"inline-code\">nextTick()</code>។",
    zh: "<code class=\"inline-code\">nextTick()</code> 让你在响应式状态变化后 DOM 更新完成后运行代码。Vue 批量处理 DOM 更新，所以如果你需要在数据变化后立即访问更新的 DOM，使用 <code class=\"inline-code\">nextTick()</code>。"
  },
  "blog.itvw.vue.q17c1": { en: "nextTick usage", km: "ការប្រើប្រាស់ nextTick", zh: "nextTick 用法" },
  "blog.itvw.vue.q18": { en: "18. What are async components and Suspense?", km: "18. តើ async components និង Suspense ជាអ្វី?", zh: "18. 什么是异步组件和 Suspense？" },
  "blog.itvw.vue.a18": {
    en: "<strong>Async components</strong> are loaded lazily (on demand) to reduce the initial bundle size. <strong>Suspense</strong> is a built-in component that renders fallback content while waiting for async components or async setup functions to resolve.",
    km: "<strong>Async components</strong> ត្រូវបានផ្ទុកបែប lazy (តាមតម្រូវការ) ដើម្បីកាត់បន្ថយទំហំ bundle ដំបូង។ <strong>Suspense</strong> គឺជា component ដែលភ្ជាប់មកជាមួយ ដែល render fallback content ខណៈពេលរង់ចាំ async components ឬ async setup functions ដើម្បី resolve។",
    zh: "<strong>异步组件</strong>按需懒加载以减少初始包大小。<strong>Suspense</strong> 是一个内置组件，在等待异步组件或异步 setup 函数解析时渲染后备内容。"
  },
  "blog.itvw.vue.q18c1": { en: "Async components and Suspense", km: "Async components និង Suspense", zh: "异步组件和 Suspense" },
  "blog.itvw.vue.q19": { en: "19. What is the key attribute used for?", km: "19. តើ key attribute ប្រើសម្រាប់អ្វី?", zh: "19. key 属性用于什么？" },
  "blog.itvw.vue.a19": {
    en: "The <code class=\"inline-code\">key</code> attribute gives Vue a hint to identify each node uniquely during the diffing process. It is essential when rendering lists with <code class=\"inline-code\">v-for</code> to ensure correct element reuse and ordering. It can also be used to force a component to re-render by changing its key.",
    km: "<code class=\"inline-code\">key</code> attribute ផ្តល់ឱ្យ Vue នូវ hint ដើម្បីកំណត់អត្តសញ្ញាណ node នីមួយៗដោយឯកភាពក្នុងអំឡុងពេលដំណើរការ diffing។ វាចាំបាច់នៅពេល render lists ជាមួយ <code class=\"inline-code\">v-for</code> ដើម្បីធានាការប្រើ element ឡើងវិញ និងលំដាប់ត្រឹមត្រូវ។ វាក៏អាចប្រើដើម្បីបង្ខំ component ឱ្យ re-render ដោយផ្លាស់ប្តូរ key របស់វា។",
    zh: "<code class=\"inline-code\">key</code> 属性给 Vue 一个提示，在 diffing 过程中唯一标识每个节点。在使用 <code class=\"inline-code\">v-for</code> 渲染列表时，它是确保正确元素复用和排序的必要条件。它也可以通过改变 key 来强制组件重新渲染。"
  },
  "blog.itvw.vue.q19c1": { en: "Key attribute", km: "Key attribute", zh: "Key 属性" },
  "blog.itvw.vue.q20": { en: "20. What are template refs?", km: "20. តើ template refs ជាអ្វី?", zh: "20. 什么是模板引用？" },
  "blog.itvw.vue.a20": {
    en: "Template refs give you direct access to a DOM element or child component instance. Declare a <code class=\"inline-code\">ref()</code> with the same name as the <code class=\"inline-code\">ref</code> attribute in the template. The ref is populated after the component is mounted.",
    km: "Template refs ផ្តល់ឱ្យអ្នកនូវការចូលប្រើ DOM element ឬ child component instance ដោយផ្ទាល់។ ប្រកាស <code class=\"inline-code\">ref()</code> ជាមួយឈ្មោះដូចគ្នានឹង <code class=\"inline-code\">ref</code> attribute ក្នុង template។ Ref ត្រូវបានបំពេញបន្ទាប់ពី component ត្រូវបាន mounted។",
    zh: "模板引用让你直接访问 DOM 元素或子组件实例。声明一个与模板中 <code class=\"inline-code\">ref</code> 属性同名的 <code class=\"inline-code\">ref()</code>。ref 在组件挂载后被填充。"
  },
  "blog.itvw.vue.q20c1": { en: "Template refs", km: "Template refs", zh: "模板引用" },
  "blog.itvw.vue.sumIntro": {
    en: "These 20 questions cover the most important Vue.js concepts you should know for an interview. Here is a quick recap:",
    km: "សំណួរទាំង 20 នេះគ្របដណ្ដប់គោលគំនិត Vue.js សំខាន់បំផុតដែលអ្នកគួរដឹងសម្រាប់សម្ភាសន៍។ នេះជាសេចក្តីសង្ខេបរហ័ស:",
    zh: "这 20 个问题涵盖了你在面试中应该了解的最重要的 Vue.js 概念。以下是快速回顾："
  },
  "blog.itvw.vue.sum1": { en: "<strong>Core concepts</strong> — Virtual DOM, reactivity, lifecycle hooks", km: "<strong>គោលគំនិតស្នូល</strong> — Virtual DOM, reactivity, lifecycle hooks", zh: "<strong>核心概念</strong>——虚拟 DOM、响应式、生命周期钩子" },
  "blog.itvw.vue.sum2": { en: "<strong>Directives</strong> — v-if, v-show, v-model, v-for with key", km: "<strong>Directives</strong> — v-if, v-show, v-model, v-for ជាមួយ key", zh: "<strong>指令</strong>——v-if、v-show、v-model、v-for 配合 key" },
  "blog.itvw.vue.sum3": { en: "<strong>Component communication</strong> — props, emits, provide/inject, slots", km: "<strong>ការទំនាក់ទំនង Component</strong> — props, emits, provide/inject, slots", zh: "<strong>组件通信</strong>——props、emits、provide/inject、插槽" },
  "blog.itvw.vue.sum4": { en: "<strong>Reactivity</strong> — computed, watch, watchEffect, nextTick", km: "<strong>Reactivity</strong> — computed, watch, watchEffect, nextTick", zh: "<strong>响应式</strong>——computed、watch、watchEffect、nextTick" },
  "blog.itvw.vue.sum5": { en: "<strong>Composition API</strong> — script setup, composables, template refs", km: "<strong>Composition API</strong> — script setup, composables, template refs", zh: "<strong>组合式 API</strong>——script setup、composables、模板引用" },
  "blog.itvw.vue.sum6": { en: "<strong>State management</strong> — Pinia stores for shared state", km: "<strong>State management</strong> — Pinia stores សម្រាប់ shared state", zh: "<strong>状态管理</strong>——用 Pinia 存储管理共享状态" },
  "blog.itvw.vue.sum7": { en: "<strong>Routing</strong> — Vue Router with dynamic routes", km: "<strong>Routing</strong> — Vue Router ជាមួយ dynamic routes", zh: "<strong>路由</strong>——带动态路由的 Vue Router" },
  "blog.itvw.vue.sum8": { en: "<strong>Advanced</strong> — async components, Suspense, custom directives", km: "<strong>Advanced</strong> — async components, Suspense, custom directives", zh: "<strong>高级</strong>——异步组件、Suspense、自定义指令" },

  // Blog - MySQL Interview
  "blog.itvw.mysql.title": { en: "MySQL Interview Questions", km: "សំណួរសម្ភាសន៍ MySQL", zh: "MySQL 面试题" },
  "blog.itvw.mysql.intro": {
    en: "MySQL is one of the most popular relational database management systems in the world. Whether you are preparing for a junior or senior developer interview, these <strong>20 commonly asked MySQL interview questions</strong> will help you solidify your understanding of core database concepts, SQL syntax, and performance optimization.",
    km: "MySQL គឺជាប្រព័ន្ធគ្រប់គ្រងមូលដ្ឋានទិន្នន័យទំនាក់ទំនងដ៏ពេញនិយមបំផុតមួយក្នុងពិភពលោក។ មិនថាអ្នកកំពុងរៀបចំសម្រាប់សម្ភាសន៍អ្នកអភិវឌ្ឍន៍កម្រិតទាប ឬកម្រិតខ្ពស់នោះទេ <strong>សំណួរសម្ភាសន៍ MySQL ដែលគេសួរញឹកញាប់ចំនួន 20</strong> នេះនឹងជួយអ្នកពង្រឹងការយល់ដឹងអំពីគោលគំនិតមូលដ្ឋានទិន្នន័យស្នូល វាក្យសម្ពន្ធ SQL និងការបង្កើនប្រសិទ្ធភាព។",
    zh: "MySQL 是世界上最流行的关系型数据库管理系统之一。无论你是在准备初级还是高级开发者面试，这 <strong>20 个常见的 MySQL 面试题</strong>都将帮助你巩固对核心数据库概念、SQL 语法和性能优化的理解。"
  },
  "blog.itvw.mysql.q1": { en: "1. What is MySQL? What are its key features?", km: "1. តើ MySQL ជាអ្វី? តើលក្ខណៈពិសេសរបស់វាមានអ្វីខ្លះ?", zh: "1. 什么是 MySQL？它的主要特性是什么？" },
  "blog.itvw.mysql.a1": {
    en: "MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) for managing data. It is developed and maintained by Oracle Corporation.",
    km: "MySQL គឺជាប្រព័ន្ធគ្រប់គ្រងមូលដ្ឋានទិន្នន័យទំនាក់ទំនងដែលជាប្រភពបើកចំហ (RDBMS) ដែលប្រើ Structured Query Language (SQL) សម្រាប់គ្រប់គ្រងទិន្នន័យ។ វាត្រូវបានអភិវឌ្ឍ និងថែរក្សាដោយ Oracle Corporation។",
    zh: "MySQL 是一个开源的关系型数据库管理系统（RDBMS），使用结构化查询语言（SQL）来管理数据。它由 Oracle Corporation 开发和维护。"
  },
  "blog.itvw.mysql.a1l1": { en: "<strong>Open-source</strong> and free to use (Community Edition)", km: "<strong>ប្រភពបើកចំហ</strong> និងឥតគិតថ្លៃ (Community Edition)", zh: "<strong>开源</strong>且免费使用（社区版）" },
  "blog.itvw.mysql.a1l2": { en: "<strong>Cross-platform</strong> — runs on Linux, Windows, macOS", km: "<strong>ឆ្លងវេទិកា</strong> — ដំណើរការលើ Linux, Windows, macOS", zh: "<strong>跨平台</strong>——可在 Linux、Windows、macOS 上运行" },
  "blog.itvw.mysql.a1l3": { en: "<strong>High performance</strong> with query caching and indexing", km: "<strong>ប្រសិទ្ធភាពខ្ពស់</strong> ជាមួយ query caching និង indexing", zh: "<strong>高性能</strong>，具有查询缓存和索引功能" },
  "blog.itvw.mysql.a1l4": { en: "<strong>ACID compliant</strong> (with InnoDB engine)", km: "<strong>អនុលោមតាម ACID</strong> (ជាមួយ InnoDB engine)", zh: "<strong>符合 ACID</strong>（使用 InnoDB 引擎）" },
  "blog.itvw.mysql.a1l5": { en: "<strong>Replication support</strong> — Master-Slave and Master-Master", km: "<strong>គាំទ្រ Replication</strong> — Master-Slave និង Master-Master", zh: "<strong>支持复制</strong>——主从复制和主主复制" },
  "blog.itvw.mysql.a1l6": { en: "<strong>Scalable</strong> — handles millions of rows efficiently", km: "<strong>អាចពង្រីកបាន</strong> — ដោះស្រាយជួរដេករាប់លានបានប្រកបដោយប្រសិទ្ធភាព", zh: "<strong>可扩展</strong>——能高效处理数百万行数据" },
  "blog.itvw.mysql.a1l7": { en: "<strong>Strong community</strong> and extensive documentation", km: "<strong>សហគមន៍រឹងមាំ</strong> និងឯកសារយ៉ាងទូលំទូលាយ", zh: "<strong>强大的社区</strong>和丰富的文档" },
  "blog.itvw.mysql.q1c1": { en: "Check MySQL Version", km: "ពិនិត្យកំណែ MySQL", zh: "检查 MySQL 版本" },
  "blog.itvw.mysql.q2": { en: "2. What is the difference between MySQL and SQL?", km: "2. តើអ្វីជាភាពខុសគ្នារវាង MySQL និង SQL?", zh: "2. MySQL 和 SQL 有什么区别？" },
  "blog.itvw.mysql.a2": {
    en: "<code class=\"inline-code\">SQL</code> (Structured Query Language) is a <strong>language</strong> used to communicate with relational databases. <code class=\"inline-code\">MySQL</code> is a <strong>database management system</strong> that uses SQL as its query language.",
    km: "<code class=\"inline-code\">SQL</code> (Structured Query Language) គឺជា<strong>ភាសា</strong>ដែលប្រើដើម្បីទំនាក់ទំនងជាមួយមូលដ្ឋានទិន្នន័យទំនាក់ទំនង។ <code class=\"inline-code\">MySQL</code> គឺជា<strong>ប្រព័ន្ធគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ</strong>ដែលប្រើ SQL ជាភាសាសម្រាប់ query។",
    zh: "<code class=\"inline-code\">SQL</code>（结构化查询语言）是一种用于与关系型数据库通信的<strong>语言</strong>。<code class=\"inline-code\">MySQL</code> 是一个使用 SQL 作为查询语言的<strong>数据库管理系统</strong>。"
  },
  "blog.itvw.mysql.q2c1": { en: "SQL is the language, MySQL is the tool", km: "SQL ជាភាសា MySQL ជាឧបករណ៍", zh: "SQL 是语言，MySQL 是工具" },
  "blog.itvw.mysql.q3": { en: "3. What are Storage Engines? InnoDB vs MyISAM?", km: "3. តើ Storage Engines ជាអ្វី? InnoDB ទល់នឹង MyISAM?", zh: "3. 什么是存储引擎？InnoDB 与 MyISAM 的区别？" },
  "blog.itvw.mysql.a3": {
    en: "Storage engines are the underlying components that MySQL uses to handle SQL operations for different table types. The two most common are <code class=\"inline-code\">InnoDB</code> (default) and <code class=\"inline-code\">MyISAM</code>.",
    km: "Storage engines គឺជាសមាសភាគមូលដ្ឋានដែល MySQL ប្រើដើម្បីដោះស្រាយប្រតិបត្តិការ SQL សម្រាប់ប្រភេទតារាងផ្សេងៗ។ ពីរដែលគេប្រើច្រើនបំផុតគឺ <code class=\"inline-code\">InnoDB</code> (លំនាំដើម) និង <code class=\"inline-code\">MyISAM</code>។",
    zh: "存储引擎是 MySQL 用于处理不同表类型的 SQL 操作的底层组件。最常见的两种是 <code class=\"inline-code\">InnoDB</code>（默认）和 <code class=\"inline-code\">MyISAM</code>。"
  },
  "blog.itvw.mysql.q3c1": { en: "Storage Engine Commands", km: "ពាក្យបញ្ជា Storage Engine", zh: "存储引擎命令" },
  "blog.itvw.mysql.q4": { en: "4. What are PRIMARY KEY, FOREIGN KEY, and UNIQUE KEY?", km: "4. តើ PRIMARY KEY, FOREIGN KEY និង UNIQUE KEY ជាអ្វី?", zh: "4. 什么是 PRIMARY KEY、FOREIGN KEY 和 UNIQUE KEY？" },
  "blog.itvw.mysql.a4": {
    en: "Keys are constraints that enforce data integrity in relational databases.",
    km: "Keys គឺជាកម្រិតកំណត់ដែលពង្រឹងភាពត្រឹមត្រូវនៃទិន្នន័យក្នុងមូលដ្ឋានទិន្នន័យទំនាក់ទំនង។",
    zh: "键是在关系型数据库中强制执行数据完整性的约束。"
  },
  "blog.itvw.mysql.a4l1": { en: "<strong>PRIMARY KEY</strong> — Uniquely identifies each row. Cannot be NULL. Only one per table.", km: "<strong>PRIMARY KEY</strong> — កំណត់អត្តសញ្ញាណតែមួយគត់សម្រាប់ជួរដេកនីមួយៗ។ មិនអាចជា NULL បានទេ។ មានតែមួយក្នុងមួយតារាង។", zh: "<strong>PRIMARY KEY</strong>——唯一标识每一行。不能为 NULL。每个表只能有一个。" },
  "blog.itvw.mysql.a4l2": { en: "<strong>FOREIGN KEY</strong> — References a PRIMARY KEY in another table. Enforces referential integrity.", km: "<strong>FOREIGN KEY</strong> — យោងទៅ PRIMARY KEY នៅក្នុងតារាងមួយទៀត។ ពង្រឹងភាពត្រឹមត្រូវនៃការយោង។", zh: "<strong>FOREIGN KEY</strong>——引用另一个表中的 PRIMARY KEY。强制引用完整性。" },
  "blog.itvw.mysql.a4l3": { en: "<strong>UNIQUE KEY</strong> — Ensures all values in a column are distinct. Allows one NULL. Multiple per table.", km: "<strong>UNIQUE KEY</strong> — ធានាថាតម្លៃទាំងអស់ក្នុងជួរឈរមានតែមួយគត់។ អនុញ្ញាត NULL មួយ។ អាចមានច្រើនក្នុងមួយតារាង។", zh: "<strong>UNIQUE KEY</strong>——确保列中所有值唯一。允许一个 NULL。每个表可以有多个。" },
  "blog.itvw.mysql.q4c1": { en: "Key Constraints Example", km: "ឧទាហរណ៍ Key Constraints", zh: "键约束示例" },
  "blog.itvw.mysql.q5": { en: "5. What are Indexes? What types exist?", km: "5. តើ Indexes ជាអ្វី? តើមានប្រភេទអ្វីខ្លះ?", zh: "5. 什么是索引？有哪些类型？" },
  "blog.itvw.mysql.a5": {
    en: "An index is a data structure that improves the speed of data retrieval on a table at the cost of additional storage and slower writes. Think of it like an index in a book.",
    km: "Index គឺជារចនាសម្ព័ន្ធទិន្នន័យដែលធ្វើឱ្យល្បឿននៃការទាញយកទិន្នន័យពីតារាងកាន់តែប្រសើរ ដោយថ្នូរនឹងទំហំផ្ទុកបន្ថែម និងការសរសេរយឺតជាង។ គិតថាវាដូចជា index ក្នុងសៀវភៅមួយ។",
    zh: "索引是一种数据结构，以额外存储空间和较慢写入为代价来提高表中数据检索的速度。可以把它想象成书中的目录。"
  },
  "blog.itvw.mysql.a5l1": { en: "<strong>PRIMARY Index</strong> — Automatically created on PRIMARY KEY", km: "<strong>PRIMARY Index</strong> — បង្កើតដោយស្វ័យប្រវត្តិលើ PRIMARY KEY", zh: "<strong>PRIMARY 索引</strong>——在 PRIMARY KEY 上自动创建" },
  "blog.itvw.mysql.a5l2": { en: "<strong>UNIQUE Index</strong> — Ensures uniqueness of values", km: "<strong>UNIQUE Index</strong> — ធានាភាពតែមួយគត់នៃតម្លៃ", zh: "<strong>UNIQUE 索引</strong>——确保值的唯一性" },
  "blog.itvw.mysql.a5l3": { en: "<strong>Composite Index</strong> — Index on multiple columns", km: "<strong>Composite Index</strong> — Index លើជួរឈរច្រើន", zh: "<strong>复合索引</strong>——多列上的索引" },
  "blog.itvw.mysql.a5l4": { en: "<strong>FULLTEXT Index</strong> — For full-text search on text columns", km: "<strong>FULLTEXT Index</strong> — សម្រាប់ការស្វែងរកអត្ថបទពេញលើជួរឈរអត្ថបទ", zh: "<strong>FULLTEXT 索引</strong>——用于文本列的全文搜索" },
  "blog.itvw.mysql.a5l5": { en: "<strong>SPATIAL Index</strong> — For geographic data types", km: "<strong>SPATIAL Index</strong> — សម្រាប់ប្រភេទទិន្នន័យភូមិសាស្ត្រ", zh: "<strong>SPATIAL 索引</strong>——用于地理数据类型" },
  "blog.itvw.mysql.q5c1": { en: "Index Examples", km: "ឧទាហរណ៍ Index", zh: "索引示例" },
  "blog.itvw.mysql.q6": { en: "6. What is the difference between WHERE and HAVING?", km: "6. តើអ្វីជាភាពខុសគ្នារវាង WHERE និង HAVING?", zh: "6. WHERE 和 HAVING 有什么区别？" },
  "blog.itvw.mysql.a6": {
    en: "Both filter rows, but they work at different stages of query execution.",
    km: "ទាំងពីរត្រងជួរដេក ប៉ុន្តែពួកវាដំណើរការនៅដំណាក់កាលផ្សេងគ្នានៃការប្រតិបត្តិ query។",
    zh: "两者都用于过滤行，但它们在查询执行的不同阶段工作。"
  },
  "blog.itvw.mysql.a6l1": { en: "<code class=\"inline-code\">WHERE</code> — Filters rows <strong>before</strong> grouping (cannot use aggregate functions)", km: "<code class=\"inline-code\">WHERE</code> — ត្រងជួរដេក<strong>មុន</strong>ការដាក់ជាក្រុម (មិនអាចប្រើ aggregate functions បានទេ)", zh: "<code class=\"inline-code\">WHERE</code>——在分组<strong>之前</strong>过滤行（不能使用聚合函数）" },
  "blog.itvw.mysql.a6l2": { en: "<code class=\"inline-code\">HAVING</code> — Filters groups <strong>after</strong> GROUP BY (can use aggregate functions)", km: "<code class=\"inline-code\">HAVING</code> — ត្រងក្រុម<strong>បន្ទាប់ពី</strong> GROUP BY (អាចប្រើ aggregate functions បាន)", zh: "<code class=\"inline-code\">HAVING</code>——在 GROUP BY <strong>之后</strong>过滤分组（可以使用聚合函数）" },
  "blog.itvw.mysql.q6c1": { en: "WHERE vs HAVING", km: "WHERE ទល់នឹង HAVING", zh: "WHERE 与 HAVING" },
  "blog.itvw.mysql.q7": { en: "7. What are JOINs? Explain each type.", km: "7. តើ JOINs ជាអ្វី? ពន្យល់ប្រភេទនីមួយៗ។", zh: "7. 什么是 JOIN？解释每种类型。" },
  "blog.itvw.mysql.a7": {
    en: "JOINs combine rows from two or more tables based on a related column. MySQL supports several types of joins:",
    km: "JOINs បញ្ចូលជួរដេកពីតារាងពីរ ឬច្រើនដោយផ្អែកលើជួរឈរដែលពាក់ព័ន្ធ។ MySQL គាំទ្រប្រភេទ join ជាច្រើន:",
    zh: "JOIN 基于相关列组合来自两个或多个表的行。MySQL 支持多种类型的连接："
  },
  "blog.itvw.mysql.a7l1": { en: "<strong>INNER JOIN</strong> — Returns only matching rows from both tables", km: "<strong>INNER JOIN</strong> — ត្រឡប់តែជួរដេកដែលត្រូវគ្នាពីតារាងទាំងពីរ", zh: "<strong>INNER JOIN</strong>——仅返回两个表中匹配的行" },
  "blog.itvw.mysql.a7l2": { en: "<strong>LEFT JOIN</strong> — All rows from left table + matched rows from right (NULL if no match)", km: "<strong>LEFT JOIN</strong> — ជួរដេកទាំងអស់ពីតារាងឆ្វេង + ជួរដេកដែលត្រូវគ្នាពីស្តាំ (NULL បើមិនត្រូវគ្នា)", zh: "<strong>LEFT JOIN</strong>——左表所有行 + 右表匹配行（无匹配则为 NULL）" },
  "blog.itvw.mysql.a7l3": { en: "<strong>RIGHT JOIN</strong> — All rows from right table + matched rows from left (NULL if no match)", km: "<strong>RIGHT JOIN</strong> — ជួរដេកទាំងអស់ពីតារាងស្តាំ + ជួរដេកដែលត្រូវគ្នាពីឆ្វេង (NULL បើមិនត្រូវគ្នា)", zh: "<strong>RIGHT JOIN</strong>——右表所有行 + 左表匹配行（无匹配则为 NULL）" },
  "blog.itvw.mysql.a7l4": { en: "<strong>FULL OUTER JOIN</strong> — All rows from both tables (MySQL uses UNION to simulate)", km: "<strong>FULL OUTER JOIN</strong> — ជួរដេកទាំងអស់ពីតារាងទាំងពីរ (MySQL ប្រើ UNION ដើម្បីក្លែងធ្វើ)", zh: "<strong>FULL OUTER JOIN</strong>——两个表的所有行（MySQL 使用 UNION 模拟）" },
  "blog.itvw.mysql.a7l5": { en: "<strong>CROSS JOIN</strong> — Cartesian product of both tables (every combination)", km: "<strong>CROSS JOIN</strong> — ផលគុណ Cartesian នៃតារាងទាំងពីរ (រាល់បន្សំ)", zh: "<strong>CROSS JOIN</strong>——两个表的笛卡尔积（所有组合）" },
  "blog.itvw.mysql.q7c1": { en: "JOIN Examples", km: "ឧទាហរណ៍ JOIN", zh: "JOIN 示例" },
  "blog.itvw.mysql.q8": { en: "8. What is a Subquery? Correlated vs Non-Correlated?", km: "8. តើ Subquery ជាអ្វី? Correlated ទល់នឹង Non-Correlated?", zh: "8. 什么是子查询？相关子查询与非相关子查询？" },
  "blog.itvw.mysql.a8": {
    en: "A subquery is a query nested inside another query. It can appear in SELECT, FROM, WHERE, or HAVING clauses.",
    km: "Subquery គឺជា query ដែលស្ថិតនៅក្នុង query មួយទៀត។ វាអាចលេចឡើងក្នុង SELECT, FROM, WHERE ឬ HAVING clauses។",
    zh: "子查询是嵌套在另一个查询中的查询。它可以出现在 SELECT、FROM、WHERE 或 HAVING 子句中。"
  },
  "blog.itvw.mysql.a8l1": { en: "<strong>Non-correlated</strong> — The inner query runs independently. It executes once and passes the result to the outer query.", km: "<strong>Non-correlated</strong> — Query ខាងក្នុងដំណើរការដោយឯករាជ្យ។ វាប្រតិបត្តិម្តង ហើយបញ្ជូនលទ្ធផលទៅ query ខាងក្រៅ។", zh: "<strong>非相关子查询</strong>——内部查询独立运行。它执行一次并将结果传递给外部查询。" },
  "blog.itvw.mysql.a8l2": { en: "<strong>Correlated</strong> — The inner query depends on the outer query. It executes once for each row of the outer query.", km: "<strong>Correlated</strong> — Query ខាងក្នុងពឹងផ្អែកលើ query ខាងក្រៅ។ វាប្រតិបត្តិម្តងសម្រាប់ជួរដេកនីមួយៗនៃ query ខាងក្រៅ។", zh: "<strong>相关子查询</strong>——内部查询依赖于外部查询。它为外部查询的每一行执行一次。" },
  "blog.itvw.mysql.q8c1": { en: "Subquery Examples", km: "ឧទាហរណ៍ Subquery", zh: "子查询示例" },
  "blog.itvw.mysql.q9": { en: "9. What is Normalization? Explain 1NF, 2NF, 3NF.", km: "9. តើ Normalization ជាអ្វី? ពន្យល់ 1NF, 2NF, 3NF។", zh: "9. 什么是规范化？解释 1NF、2NF、3NF。" },
  "blog.itvw.mysql.a9": {
    en: "Normalization is the process of organizing data to reduce redundancy and improve data integrity. Each normal form builds on the previous one:",
    km: "Normalization គឺជាដំណើរការរៀបចំទិន្នន័យដើម្បីកាត់បន្ថយភាពស្ទួន និងធ្វើឱ្យភាពត្រឹមត្រូវនៃទិន្នន័យប្រសើរឡើង។ Normal form នីមួយៗកសាងលើមុនមួយ:",
    zh: "规范化是组织数据以减少冗余和提高数据完整性的过程。每个范式都建立在前一个基础之上："
  },
  "blog.itvw.mysql.a9l1": { en: "<strong>1NF (First Normal Form)</strong> — Each column contains atomic (indivisible) values. No repeating groups.", km: "<strong>1NF (First Normal Form)</strong> — ជួរឈរនីមួយៗមានតម្លៃ atomic (មិនអាចបែងចែកបាន)។ គ្មានក្រុមដែលធ្វើម្តងទៀត។", zh: "<strong>1NF（第一范式）</strong>——每列包含原子（不可分割的）值。没有重复组。" },
  "blog.itvw.mysql.a9l2": { en: "<strong>2NF (Second Normal Form)</strong> — Must be in 1NF + all non-key columns fully depend on the entire primary key (no partial dependency).", km: "<strong>2NF (Second Normal Form)</strong> — ត្រូវតែស្ថិតក្នុង 1NF + ជួរឈរមិនមែន key ទាំងអស់ពឹងផ្អែកពេញលេញលើ primary key ទាំងមូល (គ្មាន partial dependency)។", zh: "<strong>2NF（第二范式）</strong>——必须满足 1NF + 所有非键列完全依赖于整个主键（无部分依赖）。" },
  "blog.itvw.mysql.a9l3": { en: "<strong>3NF (Third Normal Form)</strong> — Must be in 2NF + no transitive dependency (non-key columns must not depend on other non-key columns).", km: "<strong>3NF (Third Normal Form)</strong> — ត្រូវតែស្ថិតក្នុង 2NF + គ្មាន transitive dependency (ជួរឈរមិនមែន key មិនត្រូវពឹងផ្អែកលើជួរឈរមិនមែន key ផ្សេងទៀត)។", zh: "<strong>3NF（第三范式）</strong>——必须满足 2NF + 无传递依赖（非键列不能依赖于其他非键列）。" },
  "blog.itvw.mysql.q9c1": { en: "Normalization Example", km: "ឧទាហរណ៍ Normalization", zh: "规范化示例" },
  "blog.itvw.mysql.q10": { en: "10. What are Transactions? What are ACID properties?", km: "10. តើ Transactions ជាអ្វី? តើ ACID properties ជាអ្វី?", zh: "10. 什么是事务？什么是 ACID 属性？" },
  "blog.itvw.mysql.a10": {
    en: "A transaction is a sequence of SQL operations executed as a single unit of work. Either all operations succeed (COMMIT) or all fail (ROLLBACK).",
    km: "Transaction គឺជាលំដាប់នៃប្រតិបត្តិការ SQL ដែលប្រតិបត្តិជាឯកតាការងារតែមួយ។ ប្រតិបត្តិការទាំងអស់ជោគជ័យ (COMMIT) ឬបរាជ័យទាំងអស់ (ROLLBACK)។",
    zh: "事务是作为单个工作单元执行的一系列 SQL 操作。要么所有操作成功（COMMIT），要么全部失败（ROLLBACK）。"
  },
  "blog.itvw.mysql.a10l1": { en: "<strong>Atomicity</strong> — All or nothing. If one part fails, the entire transaction is rolled back.", km: "<strong>Atomicity</strong> — ទាំងអស់ ឬគ្មាន។ បើផ្នែកមួយបរាជ័យ transaction ទាំងមូលត្រូវបាន rollback។", zh: "<strong>原子性</strong>——全部或全无。如果一部分失败，整个事务将回滚。" },
  "blog.itvw.mysql.a10l2": { en: "<strong>Consistency</strong> — Database moves from one valid state to another.", km: "<strong>Consistency</strong> — មូលដ្ឋានទិន្នន័យផ្លាស់ទីពីស្ថានភាពត្រឹមត្រូវមួយទៅមួយទៀត។", zh: "<strong>一致性</strong>——数据库从一个有效状态转移到另一个有效状态。" },
  "blog.itvw.mysql.a10l3": { en: "<strong>Isolation</strong> — Concurrent transactions do not interfere with each other.", km: "<strong>Isolation</strong> — Transactions ដំណាលគ្នាមិនរំខានគ្នាទៅវិញទៅមកទេ។", zh: "<strong>隔离性</strong>——并发事务不会相互干扰。" },
  "blog.itvw.mysql.a10l4": { en: "<strong>Durability</strong> — Once committed, changes are permanent even after a crash.", km: "<strong>Durability</strong> — នៅពេល commit រួច ការផ្លាស់ប្តូរគឺអចិន្ត្រៃយ៍ សូម្បីតែបន្ទាប់ពីគាំង។", zh: "<strong>持久性</strong>——一旦提交，更改是永久的，即使崩溃后也是如此。" },
  "blog.itvw.mysql.q10c1": { en: "Transaction Example", km: "ឧទាហរណ៍ Transaction", zh: "事务示例" },
  "blog.itvw.mysql.q11": { en: "11. What is the difference between DELETE, TRUNCATE, and DROP?", km: "11. តើអ្វីជាភាពខុសគ្នារវាង DELETE, TRUNCATE និង DROP?", zh: "11. DELETE、TRUNCATE 和 DROP 有什么区别？" },
  "blog.itvw.mysql.a11": {
    en: "All three remove data, but they work differently:",
    km: "ទាំងបីលុបទិន្នន័យ ប៉ុន្តែពួកវាដំណើរការខុសគ្នា:",
    zh: "这三者都可以删除数据，但工作方式不同："
  },
  "blog.itvw.mysql.q11c1": { en: "DELETE vs TRUNCATE vs DROP", km: "DELETE ទល់នឹង TRUNCATE ទល់នឹង DROP", zh: "DELETE 与 TRUNCATE 与 DROP" },
  "blog.itvw.mysql.q12": { en: "12. What are Views?", km: "12. តើ Views ជាអ្វី?", zh: "12. 什么是视图？" },
  "blog.itvw.mysql.a12": {
    en: "A view is a virtual table based on the result of a SQL query. It does not store data itself — it dynamically pulls data from the underlying tables each time it is queried. Views simplify complex queries, restrict data access, and provide abstraction.",
    km: "View គឺជាតារាងនិម្មិតដែលផ្អែកលើលទ្ធផលនៃ SQL query។ វាមិនផ្ទុកទិន្នន័យដោយខ្លួនឯងទេ — វាទាញទិន្នន័យពីតារាងមូលដ្ឋានដោយថាមវន្តរាល់ពេលដែលវាត្រូវបាន query។ Views ធ្វើឱ្យ queries ស្មុគស្មាញកាន់តែសាមញ្ញ កំណត់ការចូលប្រើទិន្នន័យ និងផ្តល់ abstraction។",
    zh: "视图是基于 SQL 查询结果的虚拟表。它本身不存储数据——每次查询时都从底层表中动态提取数据。视图简化复杂查询、限制数据访问并提供抽象。"
  },
  "blog.itvw.mysql.q12c1": { en: "View Examples", km: "ឧទាហរណ៍ View", zh: "视图示例" },
  "blog.itvw.mysql.q13": { en: "13. What are Stored Procedures and Functions?", km: "13. តើ Stored Procedures និង Functions ជាអ្វី?", zh: "13. 什么是存储过程和函数？" },
  "blog.itvw.mysql.a13": {
    en: "Both are reusable blocks of SQL code stored in the database. The key difference:",
    km: "ទាំងពីរគឺជាប្លុកកូដ SQL ដែលអាចប្រើឡើងវិញបាន ដែលផ្ទុកក្នុងមូលដ្ឋានទិន្នន័យ។ ភាពខុសគ្នាសំខាន់:",
    zh: "两者都是存储在数据库中的可重用 SQL 代码块。主要区别："
  },
  "blog.itvw.mysql.a13l1": { en: "<strong>Stored Procedure</strong> — Can return zero or multiple values. Called with <code class=\"inline-code\">CALL</code>. Can have IN, OUT, INOUT parameters.", km: "<strong>Stored Procedure</strong> — អាចត្រឡប់តម្លៃសូន្យ ឬច្រើន។ ហៅដោយ <code class=\"inline-code\">CALL</code>។ អាចមាន IN, OUT, INOUT parameters។", zh: "<strong>存储过程</strong>——可以返回零个或多个值。使用 <code class=\"inline-code\">CALL</code> 调用。可以有 IN、OUT、INOUT 参数。" },
  "blog.itvw.mysql.a13l2": { en: "<strong>Function</strong> — Must return exactly one value. Can be used in SQL expressions (SELECT, WHERE, etc.).", km: "<strong>Function</strong> — ត្រូវតែត្រឡប់តម្លៃមួយយ៉ាងពិតប្រាកដ។ អាចប្រើក្នុង SQL expressions (SELECT, WHERE ។ល។)។", zh: "<strong>函数</strong>——必须恰好返回一个值。可以在 SQL 表达式中使用（SELECT、WHERE 等）。" },
  "blog.itvw.mysql.q13c1": { en: "Stored Procedure and Function", km: "Stored Procedure និង Function", zh: "存储过程和函数" },
  "blog.itvw.mysql.q14": { en: "14. What are Triggers?", km: "14. តើ Triggers ជាអ្វី?", zh: "14. 什么是触发器？" },
  "blog.itvw.mysql.a14": {
    en: "A trigger is a stored program that automatically executes in response to an event (INSERT, UPDATE, DELETE) on a table. Triggers are useful for auditing, validation, and maintaining derived data.",
    km: "Trigger គឺជាកម្មវិធីដែលផ្ទុកទុក ដែលប្រតិបត្តិដោយស្វ័យប្រវត្តិជាការឆ្លើយតបទៅនឹងព្រឹត្តិការណ៍ (INSERT, UPDATE, DELETE) លើតារាង។ Triggers មានប្រយោជន៍សម្រាប់ការត្រួតពិនិត្យ ការផ្ទៀងផ្ទាត់ និងការថែរក្សាទិន្នន័យដែលបានទាញយក។",
    zh: "触发器是一个存储程序，在表上发生事件（INSERT、UPDATE、DELETE）时自动执行。触发器对于审计、验证和维护派生数据很有用。"
  },
  "blog.itvw.mysql.q14c1": { en: "Trigger Example", km: "ឧទាហរណ៍ Trigger", zh: "触发器示例" },
  "blog.itvw.mysql.q15": { en: "15. What is the difference between CHAR and VARCHAR?", km: "15. តើអ្វីជាភាពខុសគ្នារវាង CHAR និង VARCHAR?", zh: "15. CHAR 和 VARCHAR 有什么区别？" },
  "blog.itvw.mysql.a15": {
    en: "Both store string data, but they handle storage differently:",
    km: "ទាំងពីរផ្ទុកទិន្នន័យ string ប៉ុន្តែពួកវាដោះស្រាយការផ្ទុកខុសគ្នា:",
    zh: "两者都存储字符串数据，但处理存储方式不同："
  },
  "blog.itvw.mysql.q15c1": { en: "CHAR vs VARCHAR", km: "CHAR ទល់នឹង VARCHAR", zh: "CHAR 与 VARCHAR" },
  "blog.itvw.mysql.q16": { en: "16. What is UNION vs UNION ALL?", km: "16. តើ UNION ទល់នឹង UNION ALL ជាអ្វី?", zh: "16. UNION 和 UNION ALL 有什么区别？" },
  "blog.itvw.mysql.a16": {
    en: "Both combine results from multiple SELECT statements. The difference is how they handle duplicates:",
    km: "ទាំងពីរបញ្ចូលលទ្ធផលពី SELECT statements ច្រើន។ ភាពខុសគ្នាគឺរបៀបដែលពួកវាដោះស្រាយការស្ទួន:",
    zh: "两者都合并多个 SELECT 语句的结果。区别在于它们如何处理重复项："
  },
  "blog.itvw.mysql.a16l1": { en: "<code class=\"inline-code\">UNION</code> — Combines results and <strong>removes duplicates</strong> (slower, applies DISTINCT)", km: "<code class=\"inline-code\">UNION</code> — បញ្ចូលលទ្ធផល និង<strong>លុបការស្ទួន</strong> (យឺតជាង ប្រើ DISTINCT)", zh: "<code class=\"inline-code\">UNION</code>——合并结果并<strong>去除重复</strong>（较慢，应用 DISTINCT）" },
  "blog.itvw.mysql.a16l2": { en: "<code class=\"inline-code\">UNION ALL</code> — Combines results and <strong>keeps all rows</strong> including duplicates (faster)", km: "<code class=\"inline-code\">UNION ALL</code> — បញ្ចូលលទ្ធផល និង<strong>រក្សាជួរដេកទាំងអស់</strong> រួមទាំងការស្ទួន (លឿនជាង)", zh: "<code class=\"inline-code\">UNION ALL</code>——合并结果并<strong>保留所有行</strong>包括重复项（更快）" },
  "blog.itvw.mysql.q16c1": { en: "UNION vs UNION ALL", km: "UNION ទល់នឹង UNION ALL", zh: "UNION 与 UNION ALL" },
  "blog.itvw.mysql.q17": { en: "17. What is GROUP BY and aggregate functions?", km: "17. តើ GROUP BY និង aggregate functions ជាអ្វី?", zh: "17. 什么是 GROUP BY 和聚合函数？" },
  "blog.itvw.mysql.a17": {
    en: "<code class=\"inline-code\">GROUP BY</code> groups rows that have the same values in specified columns into summary rows. It is used with aggregate functions:",
    km: "<code class=\"inline-code\">GROUP BY</code> ដាក់ជួរដេកដែលមានតម្លៃដូចគ្នាក្នុងជួរឈរដែលបានបញ្ជាក់ទៅជាជួរដេកសង្ខេប។ វាត្រូវបានប្រើជាមួយ aggregate functions:",
    zh: "<code class=\"inline-code\">GROUP BY</code> 将指定列中具有相同值的行分组为汇总行。它与聚合函数一起使用："
  },
  "blog.itvw.mysql.a17l1": { en: "<code class=\"inline-code\">COUNT()</code> — Number of rows", km: "<code class=\"inline-code\">COUNT()</code> — ចំនួនជួរដេក", zh: "<code class=\"inline-code\">COUNT()</code>——行数" },
  "blog.itvw.mysql.a17l2": { en: "<code class=\"inline-code\">SUM()</code> — Total of a numeric column", km: "<code class=\"inline-code\">SUM()</code> — ផលបូកនៃជួរឈរលេខ", zh: "<code class=\"inline-code\">SUM()</code>——数值列的总和" },
  "blog.itvw.mysql.a17l3": { en: "<code class=\"inline-code\">AVG()</code> — Average value", km: "<code class=\"inline-code\">AVG()</code> — តម្លៃមធ្យម", zh: "<code class=\"inline-code\">AVG()</code>——平均值" },
  "blog.itvw.mysql.a17l4": { en: "<code class=\"inline-code\">MAX()</code> / <code class=\"inline-code\">MIN()</code> — Highest / lowest value", km: "<code class=\"inline-code\">MAX()</code> / <code class=\"inline-code\">MIN()</code> — តម្លៃខ្ពស់បំផុត / ទាបបំផុត", zh: "<code class=\"inline-code\">MAX()</code> / <code class=\"inline-code\">MIN()</code>——最大值 / 最小值" },
  "blog.itvw.mysql.q17c1": { en: "GROUP BY and Aggregates", km: "GROUP BY និង Aggregates", zh: "GROUP BY 和聚合函数" },
  "blog.itvw.mysql.q18": { en: "18. What is a Deadlock? How to prevent it?", km: "18. តើ Deadlock ជាអ្វី? របៀបការពារវា?", zh: "18. 什么是死锁？如何预防？" },
  "blog.itvw.mysql.a18": {
    en: "A deadlock occurs when two or more transactions are waiting for each other to release locks, creating a circular dependency where none can proceed. MySQL automatically detects deadlocks and rolls back one transaction.",
    km: "Deadlock កើតឡើងនៅពេលដែល transactions ពីរ ឬច្រើនកំពុងរង់ចាំគ្នាទៅវិញទៅមកដើម្បីដោះសោ បង្កើតភាពពឹងផ្អែកជារង្វង់ដែលគ្មានអ្វីអាចបន្តបាន។ MySQL រកឃើញ deadlocks ដោយស្វ័យប្រវត្តិ ហើយ rollback transaction មួយ។",
    zh: "死锁发生在两个或多个事务互相等待对方释放锁时，形成循环依赖，导致都无法继续。MySQL 会自动检测死锁并回滚其中一个事务。"
  },
  "blog.itvw.mysql.a18l1": { en: "<strong>Access tables in the same order</strong> across all transactions", km: "<strong>ចូលប្រើតារាងតាមលំដាប់ដូចគ្នា</strong> ក្នុង transactions ទាំងអស់", zh: "<strong>在所有事务中以相同的顺序访问表</strong>" },
  "blog.itvw.mysql.a18l2": { en: "<strong>Keep transactions short</strong> and minimize lock time", km: "<strong>រក្សា transactions ឱ្យខ្លី</strong> និងកាត់បន្ថយពេលវេលាចាក់សោ", zh: "<strong>保持事务简短</strong>并最小化锁定时间" },
  "blog.itvw.mysql.a18l3": { en: "<strong>Use appropriate isolation levels</strong>", km: "<strong>ប្រើ isolation levels សមស្រប</strong>", zh: "<strong>使用适当的隔离级别</strong>" },
  "blog.itvw.mysql.a18l4": { en: "<strong>Add proper indexes</strong> to reduce lock scope", km: "<strong>បន្ថែម indexes សមស្រប</strong> ដើម្បីកាត់បន្ថយវិសាលភាពសោ", zh: "<strong>添加适当的索引</strong>以减少锁定范围" },
  "blog.itvw.mysql.q18c1": { en: "Deadlock Scenario and Prevention", km: "សេណារីយ៉ូ Deadlock និងការការពារ", zh: "死锁场景和预防" },
  "blog.itvw.mysql.q19": { en: "19. What is Replication? Master-Slave?", km: "19. តើ Replication ជាអ្វី? Master-Slave?", zh: "19. 什么是复制？主从复制？" },
  "blog.itvw.mysql.a19": {
    en: "Replication is the process of copying data from one MySQL server (source/master) to one or more servers (replica/slave). This provides:",
    km: "Replication គឺជាដំណើរការចម្លងទិន្នន័យពី MySQL server មួយ (source/master) ទៅ servers មួយ ឬច្រើន (replica/slave)។ នេះផ្តល់:",
    zh: "复制是将数据从一个 MySQL 服务器（源/主）复制到一个或多个服务器（副本/从）的过程。这提供了："
  },
  "blog.itvw.mysql.a19l1": { en: "<strong>High Availability</strong> — If master fails, a replica can take over", km: "<strong>High Availability</strong> — បើ master បរាជ័យ replica អាចកាន់កាប់បាន", zh: "<strong>高可用性</strong>——如果主服务器故障，副本可以接管" },
  "blog.itvw.mysql.a19l2": { en: "<strong>Read Scaling</strong> — Distribute read queries across replicas", km: "<strong>Read Scaling</strong> — ចែកចាយ read queries ទៅកាន់ replicas", zh: "<strong>读扩展</strong>——将读查询分布到各副本" },
  "blog.itvw.mysql.a19l3": { en: "<strong>Backup</strong> — Replicas serve as live backups", km: "<strong>Backup</strong> — Replicas ដើរតួជា backup ផ្ទាល់", zh: "<strong>备份</strong>——副本作为实时备份" },
  "blog.itvw.mysql.a19l4": { en: "<strong>Analytics</strong> — Run heavy reports on replicas without impacting the master", km: "<strong>Analytics</strong> — ដំណើរការរបាយការណ៍ធ្ងន់លើ replicas ដោយមិនប៉ះពាល់ master", zh: "<strong>分析</strong>——在副本上运行繁重的报告而不影响主服务器" },
  "blog.itvw.mysql.q19c1": { en: "Replication Configuration", km: "ការកំណត់ Replication", zh: "复制配置" },
  "blog.itvw.mysql.q20": { en: "20. How to optimize MySQL queries?", km: "20. របៀបបង្កើនប្រសិទ្ធភាព MySQL queries?", zh: "20. 如何优化 MySQL 查询？" },
  "blog.itvw.mysql.a20": {
    en: "Query optimization is crucial for application performance. Here are the most effective strategies:",
    km: "ការបង្កើនប្រសិទ្ធភាព query គឺមានសារៈសំខាន់សម្រាប់ប្រសិទ្ធភាពកម្មវិធី។ នេះជាយុទ្ធសាស្ត្រដែលមានប្រសិទ្ធភាពបំផុត:",
    zh: "查询优化对应用程序性能至关重要。以下是最有效的策略："
  },
  "blog.itvw.mysql.a20l1": { en: "<strong>Use EXPLAIN</strong> to analyze query execution plans", km: "<strong>ប្រើ EXPLAIN</strong> ដើម្បីវិភាគផែនការប្រតិបត្តិ query", zh: "<strong>使用 EXPLAIN</strong> 分析查询执行计划" },
  "blog.itvw.mysql.a20l2": { en: "<strong>Add proper indexes</strong> on columns used in WHERE, JOIN, ORDER BY", km: "<strong>បន្ថែម indexes សមស្រប</strong> លើជួរឈរដែលប្រើក្នុង WHERE, JOIN, ORDER BY", zh: "<strong>添加适当的索引</strong>到 WHERE、JOIN、ORDER BY 中使用的列" },
  "blog.itvw.mysql.a20l3": { en: "<strong>Avoid SELECT *</strong> — only select needed columns", km: "<strong>ជៀសវាង SELECT *</strong> — ជ្រើសរើសតែជួរឈរដែលត្រូវការ", zh: "<strong>避免 SELECT *</strong>——只选择需要的列" },
  "blog.itvw.mysql.a20l4": { en: "<strong>Use LIMIT</strong> for pagination", km: "<strong>ប្រើ LIMIT</strong> សម្រាប់ pagination", zh: "<strong>使用 LIMIT</strong> 进行分页" },
  "blog.itvw.mysql.a20l5": { en: "<strong>Optimize JOINs</strong> — ensure join columns are indexed", km: "<strong>បង្កើនប្រសិទ្ធភាព JOINs</strong> — ធានាថាជួរឈរ join មាន index", zh: "<strong>优化 JOIN</strong>——确保连接列已建索引" },
  "blog.itvw.mysql.a20l6": { en: "<strong>Avoid functions on indexed columns</strong> in WHERE clauses", km: "<strong>ជៀសវាង functions លើជួរឈរដែលមាន index</strong> ក្នុង WHERE clauses", zh: "<strong>避免在 WHERE 子句中对索引列使用函数</strong>" },
  "blog.itvw.mysql.a20l7": { en: "<strong>Use query caching</strong> where appropriate", km: "<strong>ប្រើ query caching</strong> នៅកន្លែងសមស្រប", zh: "<strong>使用查询缓存</strong>在适当的地方" },
  "blog.itvw.mysql.a20l8": { en: "<strong>Normalize data</strong> but denormalize for read-heavy workloads", km: "<strong>Normalize ទិន្នន័យ</strong> ប៉ុន្តែ denormalize សម្រាប់ workloads ដែលអានច្រើន", zh: "<strong>规范化数据</strong>但对读取密集型工作负载进行反规范化" },
  "blog.itvw.mysql.q20c1": { en: "Query Optimization Techniques", km: "បច្ចេកទេសបង្កើនប្រសិទ្ធភាព Query", zh: "查询优化技术" },
  "blog.itvw.mysql.sum1": { en: "<strong>MySQL Basics</strong> — Open-source RDBMS using SQL, with InnoDB as the default engine", km: "<strong>មូលដ្ឋាន MySQL</strong> — RDBMS ប្រភពបើកចំហដែលប្រើ SQL ជាមួយ InnoDB ជា engine លំនាំដើម", zh: "<strong>MySQL 基础</strong>——使用 SQL 的开源 RDBMS，InnoDB 为默认引擎" },
  "blog.itvw.mysql.sum2": { en: "<strong>Keys and Indexes</strong> — PRIMARY, FOREIGN, UNIQUE keys enforce integrity; indexes boost query speed", km: "<strong>Keys និង Indexes</strong> — PRIMARY, FOREIGN, UNIQUE keys ពង្រឹងភាពត្រឹមត្រូវ; indexes បង្កើនល្បឿន query", zh: "<strong>键和索引</strong>——PRIMARY、FOREIGN、UNIQUE 键强制完整性；索引提升查询速度" },
  "blog.itvw.mysql.sum3": { en: "<strong>JOINs</strong> — INNER, LEFT, RIGHT, FULL, CROSS for combining data from multiple tables", km: "<strong>JOINs</strong> — INNER, LEFT, RIGHT, FULL, CROSS សម្រាប់បញ្ចូលទិន្នន័យពីតារាងច្រើន", zh: "<strong>JOIN</strong>——INNER、LEFT、RIGHT、FULL、CROSS 用于合并多个表的数据" },
  "blog.itvw.mysql.sum4": { en: "<strong>Subqueries</strong> — Nested queries, correlated and non-correlated", km: "<strong>Subqueries</strong> — Queries ដែលស្ថិតក្នុងគ្នា correlated និង non-correlated", zh: "<strong>子查询</strong>——嵌套查询，相关和非相关" },
  "blog.itvw.mysql.sum5": { en: "<strong>Normalization</strong> — 1NF, 2NF, 3NF to reduce redundancy", km: "<strong>Normalization</strong> — 1NF, 2NF, 3NF ដើម្បីកាត់បន្ថយភាពស្ទួន", zh: "<strong>规范化</strong>——1NF、2NF、3NF 减少冗余" },
  "blog.itvw.mysql.sum6": { en: "<strong>Transactions</strong> — ACID properties guarantee data reliability", km: "<strong>Transactions</strong> — ACID properties ធានាភាពជឿជាក់នៃទិន្នន័យ", zh: "<strong>事务</strong>——ACID 属性保证数据可靠性" },
  "blog.itvw.mysql.sum7": { en: "<strong>Views, Procedures, Triggers</strong> — Database objects for abstraction and automation", km: "<strong>Views, Procedures, Triggers</strong> — Database objects សម្រាប់ abstraction និង automation", zh: "<strong>视图、存储过程、触发器</strong>——用于抽象和自动化的数据库对象" },
  "blog.itvw.mysql.sum8": { en: "<strong>Performance</strong> — Use EXPLAIN, proper indexing, and query optimization techniques", km: "<strong>ប្រសិទ្ធភាព</strong> — ប្រើ EXPLAIN indexing សមស្រប និងបច្ចេកទេសបង្កើនប្រសិទ្ធភាព query", zh: "<strong>性能</strong>——使用 EXPLAIN、适当的索引和查询优化技术" },
  "blog.itvw.mysql.sum9": { en: "<strong>Replication</strong> — Master-Slave setup for high availability and read scaling", km: "<strong>Replication</strong> — ការដំឡើង Master-Slave សម្រាប់ high availability និង read scaling", zh: "<strong>复制</strong>——主从设置用于高可用性和读扩展" },
  "blog.itvw.mysql.sum10": { en: "<strong>Deadlocks</strong> — Prevent with consistent lock ordering and short transactions", km: "<strong>Deadlocks</strong> — ការពារដោយលំដាប់សោជាប់លាប់ និង transactions ខ្លី", zh: "<strong>死锁</strong>——通过一致的锁定顺序和简短事务来预防" },

  // Blog - SQL Interview
  "blog.itvw.sql.title": { en: "SQL Database Interview Questions", km: "សំណួរសម្ភាសន៍ SQL Database", zh: "SQL 数据库面试题" },
  "blog.itvw.sql.intro": {
    en: "SQL (Structured Query Language) is the standard language for managing and manipulating relational databases. Whether you are preparing for a junior or senior database role, mastering these 20 commonly asked SQL interview questions will help you build a solid foundation and ace your next interview.",
    km: "SQL (Structured Query Language) គឺជាភាសាស្តង់ដារសម្រាប់គ្រប់គ្រង និងរៀបចំមូលដ្ឋានទិន្នន័យទំនាក់ទំនង។ មិនថាអ្នកកំពុងរៀបចំសម្រាប់តួនាទីមូលដ្ឋានទិន្នន័យកម្រិតទាប ឬកម្រិតខ្ពស់នោះទេ ការស្ទាត់ជំនាញសំណួរសម្ភាសន៍ SQL ដែលគេសួរញឹកញាប់ចំនួន 20 នេះនឹងជួយអ្នកបង្កើតមូលដ្ឋានគ្រឹះរឹងមាំ និងជោគជ័យក្នុងការសម្ភាសន៍បន្ទាប់របស់អ្នក។",
    zh: "SQL（结构化查询语言）是管理和操作关系型数据库的标准语言。无论你是在准备初级还是高级数据库职位，掌握这 20 个常见的 SQL 面试题将帮助你建立扎实的基础，并在下次面试中脱颖而出。"
  },
  "blog.itvw.sql.q1": { en: "1. What is SQL? What are the types of SQL commands?", km: "1. តើ SQL ជាអ្វី? តើប្រភេទនៃពាក្យបញ្ជា SQL មានអ្វីខ្លះ?", zh: "1. 什么是 SQL？SQL 命令有哪些类型？" },
  "blog.itvw.sql.a1": {
    en: "SQL stands for <strong>Structured Query Language</strong>. It is used to communicate with relational databases to create, read, update, and delete data. SQL commands are grouped into five categories:",
    km: "SQL មានន័យថា <strong>Structured Query Language</strong>។ វាត្រូវបានប្រើដើម្បីទំនាក់ទំនងជាមួយមូលដ្ឋានទិន្នន័យទំនាក់ទំនងដើម្បីបង្កើត អាន ធ្វើបច្ចុប្បន្នភាព និងលុបទិន្នន័យ។ ពាក្យបញ្ជា SQL ត្រូវបានដាក់ជាក្រុមជាប្រាំប្រភេទ៖",
    zh: "SQL 代表 <strong>Structured Query Language</strong>（结构化查询语言）。它用于与关系型数据库通信，以创建、读取、更新和删除数据。SQL 命令分为五类："
  },
  "blog.itvw.sql.a1l1": { en: "<code class=\"inline-code\">DDL</code> (Data Definition Language) — CREATE, ALTER, DROP, TRUNCATE", km: "<code class=\"inline-code\">DDL</code> (Data Definition Language) — CREATE, ALTER, DROP, TRUNCATE", zh: "<code class=\"inline-code\">DDL</code>（数据定义语言）——CREATE、ALTER、DROP、TRUNCATE" },
  "blog.itvw.sql.a1l2": { en: "<code class=\"inline-code\">DML</code> (Data Manipulation Language) — SELECT, INSERT, UPDATE, DELETE", km: "<code class=\"inline-code\">DML</code> (Data Manipulation Language) — SELECT, INSERT, UPDATE, DELETE", zh: "<code class=\"inline-code\">DML</code>（数据操作语言）——SELECT、INSERT、UPDATE、DELETE" },
  "blog.itvw.sql.a1l3": { en: "<code class=\"inline-code\">DCL</code> (Data Control Language) — GRANT, REVOKE", km: "<code class=\"inline-code\">DCL</code> (Data Control Language) — GRANT, REVOKE", zh: "<code class=\"inline-code\">DCL</code>（数据控制语言）——GRANT、REVOKE" },
  "blog.itvw.sql.a1l4": { en: "<code class=\"inline-code\">TCL</code> (Transaction Control Language) — COMMIT, ROLLBACK, SAVEPOINT", km: "<code class=\"inline-code\">TCL</code> (Transaction Control Language) — COMMIT, ROLLBACK, SAVEPOINT", zh: "<code class=\"inline-code\">TCL</code>（事务控制语言）——COMMIT、ROLLBACK、SAVEPOINT" },
  "blog.itvw.sql.a1l5": { en: "<code class=\"inline-code\">DQL</code> (Data Query Language) — SELECT (sometimes categorized separately)", km: "<code class=\"inline-code\">DQL</code> (Data Query Language) — SELECT (ពេលខ្លះត្រូវបានដាក់ប្រភេទដោយឡែក)", zh: "<code class=\"inline-code\">DQL</code>（数据查询语言）——SELECT（有时被单独分类）" },
  "blog.itvw.sql.q1c1": { en: "SQL Command Types", km: "ប្រភេទពាក្យបញ្ជា SQL", zh: "SQL 命令类型" },
  "blog.itvw.sql.q2": { en: "2. What is the difference between SQL and NoSQL?", km: "2. តើអ្វីជាភាពខុសគ្នារវាង SQL និង NoSQL?", zh: "2. SQL 和 NoSQL 有什么区别？" },
  "blog.itvw.sql.a2": {
    en: "SQL databases are <strong>relational</strong> (table-based) while NoSQL databases are <strong>non-relational</strong> and can store data in documents, key-value pairs, graphs, or wide-column formats.",
    km: "មូលដ្ឋានទិន្នន័យ SQL គឺជា<strong>ទំនាក់ទំនង</strong> (ផ្អែកលើតារាង) ខណៈដែលមូលដ្ឋានទិន្នន័យ NoSQL គឺ<strong>មិនមែនទំនាក់ទំនង</strong> ហើយអាចរក្សាទុកទិន្នន័យក្នុង documents, key-value pairs, graphs ឬ wide-column formats។",
    zh: "SQL 数据库是<strong>关系型</strong>的（基于表），而 NoSQL 数据库是<strong>非关系型</strong>的，可以以文档、键值对、图或宽列格式存储数据。"
  },
  "blog.itvw.sql.q2th1": { en: "Feature", km: "លក្ខណៈ", zh: "特性" },
  "blog.itvw.sql.q2th2": { en: "SQL", km: "SQL", zh: "SQL" },
  "blog.itvw.sql.q2th3": { en: "NoSQL", km: "NoSQL", zh: "NoSQL" },
  "blog.itvw.sql.q2td1": { en: "Structure", km: "រចនាសម្ព័ន្ធ", zh: "结构" },
  "blog.itvw.sql.q2td2": { en: "Fixed schema, tables", km: "Schema ថេរ តារាង", zh: "固定模式，表" },
  "blog.itvw.sql.q2td3": { en: "Flexible schema, documents", km: "Schema បត់បែន documents", zh: "灵活模式，文档" },
  "blog.itvw.sql.q2td4": { en: "Scalability", km: "ការពង្រីក", zh: "可扩展性" },
  "blog.itvw.sql.q2td5": { en: "Vertical", km: "បញ្ឈរ", zh: "垂直" },
  "blog.itvw.sql.q2td6": { en: "Horizontal", km: "ផ្ដេក", zh: "水平" },
  "blog.itvw.sql.q2td7": { en: "ACID", km: "ACID", zh: "ACID" },
  "blog.itvw.sql.q2td8": { en: "Strong ACID compliance", km: "អនុលោមតាម ACID រឹងមាំ", zh: "强 ACID 合规性" },
  "blog.itvw.sql.q2td9": { en: "Eventual consistency (usually)", km: "Eventual consistency (ជាធម្មតា)", zh: "最终一致性（通常）" },
  "blog.itvw.sql.q2td10": { en: "Examples", km: "ឧទាហរណ៍", zh: "示例" },
  "blog.itvw.sql.q2td11": { en: "MySQL, PostgreSQL, SQL Server", km: "MySQL, PostgreSQL, SQL Server", zh: "MySQL、PostgreSQL、SQL Server" },
  "blog.itvw.sql.q2td12": { en: "MongoDB, Redis, Cassandra", km: "MongoDB, Redis, Cassandra", zh: "MongoDB、Redis、Cassandra" },
  "blog.itvw.sql.q2c1": { en: "SQL vs NoSQL Examples", km: "ឧទាហរណ៍ SQL ទល់នឹង NoSQL", zh: "SQL 与 NoSQL 示例" },
  "blog.itvw.sql.q3": { en: "3. What is a Primary Key vs Foreign Key?", km: "3. តើ Primary Key ទល់នឹង Foreign Key ជាអ្វី?", zh: "3. 什么是主键与外键？" },
  "blog.itvw.sql.a3": {
    en: "A <strong>Primary Key</strong> uniquely identifies each record in a table. It must be unique and cannot be NULL. A <strong>Foreign Key</strong> is a column that creates a relationship between two tables by referencing the primary key of another table.",
    km: "<strong>Primary Key</strong> កំណត់អត្តសញ្ញាណជាតែមួយគត់នូវកំណត់ត្រានីមួយៗក្នុងតារាង។ វាត្រូវតែមានតែមួយគត់ និងមិនអាចជា NULL។ <strong>Foreign Key</strong> គឺជាជួរឈរដែលបង្កើតទំនាក់ទំនងរវាងតារាងពីរដោយយោងទៅ primary key នៃតារាងមួយផ្សេងទៀត។",
    zh: "<strong>主键（Primary Key）</strong>唯一标识表中的每条记录。它必须唯一且不能为 NULL。<strong>外键（Foreign Key）</strong>是一个列，通过引用另一个表的主键来创建两个表之间的关系。"
  },
  "blog.itvw.sql.q3c1": { en: "Primary Key & Foreign Key", km: "Primary Key និង Foreign Key", zh: "主键与外键" },
  "blog.itvw.sql.q3tip": {
    en: "<strong>Key difference:</strong> A table can have only one primary key but can have multiple foreign keys. Foreign keys enforce referential integrity between tables.",
    km: "<strong>ភាពខុសគ្នាសំខាន់៖</strong> តារាងមួយអាចមាន primary key តែមួយ ប៉ុន្តែអាចមាន foreign keys ច្រើន។ Foreign keys ពង្រឹង referential integrity រវាងតារាង។",
    zh: "<strong>关键区别：</strong>一个表只能有一个主键，但可以有多个外键。外键在表之间强制执行引用完整性。"
  },
  "blog.itvw.sql.q4": { en: "4. What are Constraints in SQL?", km: "4. តើ Constraints ក្នុង SQL ជាអ្វី?", zh: "4. 什么是 SQL 中的约束？" },
  "blog.itvw.sql.a4": {
    en: "Constraints are rules enforced on data columns to ensure accuracy and reliability. The most common constraints are:",
    km: "Constraints គឺជាច្បាប់ដែលបង្ខំលើជួរឈរទិន្នន័យដើម្បីធានាភាពត្រឹមត្រូវ និងភាពជឿជាក់។ Constraints ដែលគេប្រើញឹកញាប់បំផុតមាន៖",
    zh: "约束是强制应用于数据列的规则，以确保准确性和可靠性。最常见的约束有："
  },
  "blog.itvw.sql.a4l1": { en: "<code class=\"inline-code\">NOT NULL</code> — Column cannot have NULL values", km: "<code class=\"inline-code\">NOT NULL</code> — ជួរឈរមិនអាចមានតម្លៃ NULL", zh: "<code class=\"inline-code\">NOT NULL</code>——列不能有 NULL 值" },
  "blog.itvw.sql.a4l2": { en: "<code class=\"inline-code\">UNIQUE</code> — All values in a column must be different", km: "<code class=\"inline-code\">UNIQUE</code> — តម្លៃទាំងអស់ក្នុងជួរឈរត្រូវតែខុសគ្នា", zh: "<code class=\"inline-code\">UNIQUE</code>——列中的所有值必须不同" },
  "blog.itvw.sql.a4l3": { en: "<code class=\"inline-code\">CHECK</code> — Values must satisfy a specific condition", km: "<code class=\"inline-code\">CHECK</code> — តម្លៃត្រូវតែបំពេញលក្ខខណ្ឌជាក់លាក់", zh: "<code class=\"inline-code\">CHECK</code>——值必须满足特定条件" },
  "blog.itvw.sql.a4l4": { en: "<code class=\"inline-code\">DEFAULT</code> — Sets a default value when none is specified", km: "<code class=\"inline-code\">DEFAULT</code> — កំណត់តម្លៃលំនាំដើមនៅពេលគ្មានតម្លៃត្រូវបានបញ្ជាក់", zh: "<code class=\"inline-code\">DEFAULT</code>——未指定时设置默认值" },
  "blog.itvw.sql.a4l5": { en: "<code class=\"inline-code\">PRIMARY KEY</code> — Combination of NOT NULL and UNIQUE", km: "<code class=\"inline-code\">PRIMARY KEY</code> — ការរួមបញ្ចូលគ្នានៃ NOT NULL និង UNIQUE", zh: "<code class=\"inline-code\">PRIMARY KEY</code>——NOT NULL 和 UNIQUE 的组合" },
  "blog.itvw.sql.a4l6": { en: "<code class=\"inline-code\">FOREIGN KEY</code> — References a primary key in another table", km: "<code class=\"inline-code\">FOREIGN KEY</code> — យោងទៅ primary key ក្នុងតារាងមួយផ្សេងទៀត", zh: "<code class=\"inline-code\">FOREIGN KEY</code>——引用另一个表中的主键" },
  "blog.itvw.sql.q4c1": { en: "SQL Constraints", km: "SQL Constraints", zh: "SQL 约束" },
  "blog.itvw.sql.q5": { en: "5. What is the SELECT statement? How do ORDER BY and LIMIT work?", km: "5. តើ SELECT statement ជាអ្វី? តើ ORDER BY និង LIMIT ដំណើរការយ៉ាងដូចម្ដេច?", zh: "5. 什么是 SELECT 语句？ORDER BY 和 LIMIT 如何工作？" },
  "blog.itvw.sql.a5": {
    en: "<code class=\"inline-code\">SELECT</code> retrieves data from one or more tables. <code class=\"inline-code\">ORDER BY</code> sorts the results in ascending (ASC) or descending (DESC) order. <code class=\"inline-code\">LIMIT</code> restricts the number of rows returned.",
    km: "<code class=\"inline-code\">SELECT</code> ទាញយកទិន្នន័យពីតារាងមួយ ឬច្រើន។ <code class=\"inline-code\">ORDER BY</code> តម្រៀបលទ្ធផលតាមលំដាប់ឡើង (ASC) ឬចុះ (DESC)។ <code class=\"inline-code\">LIMIT</code> កំណត់ចំនួនជួរដេកដែលត្រូវបានត្រឡប់។",
    zh: "<code class=\"inline-code\">SELECT</code> 从一个或多个表中检索数据。<code class=\"inline-code\">ORDER BY</code> 按升序（ASC）或降序（DESC）排序结果。<code class=\"inline-code\">LIMIT</code> 限制返回的行数。"
  },
  "blog.itvw.sql.q5c1": { en: "SELECT, ORDER BY, LIMIT", km: "SELECT, ORDER BY, LIMIT", zh: "SELECT、ORDER BY、LIMIT" },
  "blog.itvw.sql.q6": { en: "6. What are Aggregate Functions?", km: "6. តើ Aggregate Functions ជាអ្វី?", zh: "6. 什么是聚合函数？" },
  "blog.itvw.sql.a6": {
    en: "Aggregate functions perform a calculation on a set of values and return a single result. The most commonly used ones are <code class=\"inline-code\">COUNT</code>, <code class=\"inline-code\">SUM</code>, <code class=\"inline-code\">AVG</code>, <code class=\"inline-code\">MIN</code>, and <code class=\"inline-code\">MAX</code>.",
    km: "Aggregate functions ធ្វើការគណនាលើសំណុំតម្លៃ និងត្រឡប់លទ្ធផលតែមួយ។ អ្វីដែលគេប្រើញឹកញាប់បំផុតគឺ <code class=\"inline-code\">COUNT</code>, <code class=\"inline-code\">SUM</code>, <code class=\"inline-code\">AVG</code>, <code class=\"inline-code\">MIN</code> និង <code class=\"inline-code\">MAX</code>។",
    zh: "聚合函数对一组值执行计算并返回单个结果。最常用的有 <code class=\"inline-code\">COUNT</code>、<code class=\"inline-code\">SUM</code>、<code class=\"inline-code\">AVG</code>、<code class=\"inline-code\">MIN</code> 和 <code class=\"inline-code\">MAX</code>。"
  },
  "blog.itvw.sql.q6c1": { en: "Aggregate Functions", km: "Aggregate Functions", zh: "聚合函数" },
  "blog.itvw.sql.q7": { en: "7. What is GROUP BY and HAVING?", km: "7. តើ GROUP BY និង HAVING ជាអ្វី?", zh: "7. 什么是 GROUP BY 和 HAVING？" },
  "blog.itvw.sql.a7": {
    en: "<code class=\"inline-code\">GROUP BY</code> groups rows that share the same values into summary rows. <code class=\"inline-code\">HAVING</code> filters groups after aggregation (unlike <code class=\"inline-code\">WHERE</code>, which filters rows before aggregation).",
    km: "<code class=\"inline-code\">GROUP BY</code> ដាក់ជាក្រុមជួរដេកដែលមានតម្លៃដូចគ្នាទៅជាជួរដេកសង្ខេប។ <code class=\"inline-code\">HAVING</code> ត្រងក្រុមបន្ទាប់ពីការប្រមូលផ្តុំ (ខុសពី <code class=\"inline-code\">WHERE</code> ដែលត្រងជួរដេកមុនការប្រមូលផ្តុំ)។",
    zh: "<code class=\"inline-code\">GROUP BY</code> 将具有相同值的行分组为汇总行。<code class=\"inline-code\">HAVING</code> 在聚合后过滤分组（与 <code class=\"inline-code\">WHERE</code> 不同，WHERE 在聚合前过滤行）。"
  },
  "blog.itvw.sql.q7c1": { en: "GROUP BY & HAVING", km: "GROUP BY និង HAVING", zh: "GROUP BY 与 HAVING" },
  "blog.itvw.sql.q7tip": {
    en: "<strong>WHERE vs HAVING:</strong> Use <code class=\"inline-code\">WHERE</code> to filter individual rows before grouping. Use <code class=\"inline-code\">HAVING</code> to filter groups after aggregation.",
    km: "<strong>WHERE ទល់នឹង HAVING៖</strong> ប្រើ <code class=\"inline-code\">WHERE</code> ដើម្បីត្រងជួរដេកម្តងមួយៗមុនពេលដាក់ជាក្រុម។ ប្រើ <code class=\"inline-code\">HAVING</code> ដើម្បីត្រងក្រុមបន្ទាប់ពីការប្រមូលផ្តុំ។",
    zh: "<strong>WHERE 与 HAVING：</strong>使用 <code class=\"inline-code\">WHERE</code> 在分组前过滤单个行。使用 <code class=\"inline-code\">HAVING</code> 在聚合后过滤分组。"
  },
  "blog.itvw.sql.q8": { en: "8. What are the different types of JOINs?", km: "8. តើប្រភេទផ្សេងៗនៃ JOINs មានអ្វីខ្លះ?", zh: "8. JOIN 有哪些不同类型？" },
  "blog.itvw.sql.a8": {
    en: "JOINs combine rows from two or more tables based on a related column. The main types are:",
    km: "JOINs បញ្ចូលគ្នានូវជួរដេកពីតារាងពីរ ឬច្រើនដោយផ្អែកលើជួរឈរដែលទាក់ទង។ ប្រភេទសំខាន់ៗមាន៖",
    zh: "JOIN 基于相关列合并来自两个或多个表的行。主要类型有："
  },
  "blog.itvw.sql.a8l1": { en: "<strong>INNER JOIN</strong> — Returns only matching rows from both tables", km: "<strong>INNER JOIN</strong> — ត្រឡប់តែជួរដេកដែលត្រូវគ្នាពីតារាងទាំងពីរ", zh: "<strong>INNER JOIN</strong>——仅返回两个表中匹配的行" },
  "blog.itvw.sql.a8l2": { en: "<strong>LEFT JOIN</strong> — Returns all rows from the left table, with matches from the right", km: "<strong>LEFT JOIN</strong> — ត្រឡប់ជួរដេកទាំងអស់ពីតារាងខាងឆ្វេង ជាមួយការផ្គូផ្គងពីខាងស្ដាំ", zh: "<strong>LEFT JOIN</strong>——返回左表的所有行，以及右表的匹配行" },
  "blog.itvw.sql.a8l3": { en: "<strong>RIGHT JOIN</strong> — Returns all rows from the right table, with matches from the left", km: "<strong>RIGHT JOIN</strong> — ត្រឡប់ជួរដេកទាំងអស់ពីតារាងខាងស្ដាំ ជាមួយការផ្គូផ្គងពីខាងឆ្វេង", zh: "<strong>RIGHT JOIN</strong>——返回右表的所有行，以及左表的匹配行" },
  "blog.itvw.sql.a8l4": { en: "<strong>FULL OUTER JOIN</strong> — Returns all rows when there is a match in either table", km: "<strong>FULL OUTER JOIN</strong> — ត្រឡប់ជួរដេកទាំងអស់នៅពេលមានការផ្គូផ្គងក្នុងតារាងណាមួយ", zh: "<strong>FULL OUTER JOIN</strong>——当任一表中有匹配时返回所有行" },
  "blog.itvw.sql.a8l5": { en: "<strong>CROSS JOIN</strong> — Returns the Cartesian product of both tables", km: "<strong>CROSS JOIN</strong> — ត្រឡប់ Cartesian product នៃតារាងទាំងពីរ", zh: "<strong>CROSS JOIN</strong>——返回两个表的笛卡尔积" },
  "blog.itvw.sql.q8c1": { en: "Types of JOINs", km: "ប្រភេទនៃ JOINs", zh: "JOIN 的类型" },
  "blog.itvw.sql.q9": { en: "9. What are Subqueries?", km: "9. តើ Subqueries ជាអ្វី?", zh: "9. 什么是子查询？" },
  "blog.itvw.sql.a9": {
    en: "A subquery is a query nested inside another query. There are three types: <strong>Scalar</strong> (returns a single value), <strong>Row</strong> (returns a single row), and <strong>Table</strong> (returns a result set that acts as a virtual table).",
    km: "Subquery គឺជា query ដែលស្ថិតក្នុង query មួយផ្សេងទៀត។ មានបីប្រភេទ៖ <strong>Scalar</strong> (ត្រឡប់តម្លៃតែមួយ), <strong>Row</strong> (ត្រឡប់ជួរដេកតែមួយ) និង <strong>Table</strong> (ត្រឡប់សំណុំលទ្ធផលដែលដើរតួជាតារាងនិម្មិត)។",
    zh: "子查询是嵌套在另一个查询内部的查询。有三种类型：<strong>标量子查询</strong>（返回单个值）、<strong>行子查询</strong>（返回单行）和<strong>表子查询</strong>（返回作为虚拟表的结果集）。"
  },
  "blog.itvw.sql.q9c1": { en: "Subqueries", km: "Subqueries", zh: "子查询" },
  "blog.itvw.sql.q10": { en: "10. What is a Self Join?", km: "10. តើ Self Join ជាអ្វី?", zh: "10. 什么是自连接？" },
  "blog.itvw.sql.a10": {
    en: "A self join is when a table is joined with itself. This is useful for finding relationships within the same table, such as employees and their managers.",
    km: "Self join គឺជាពេលដែលតារាងមួយត្រូវបាន join ជាមួយខ្លួនឯង។ វាមានប្រយោជន៍សម្រាប់ស្វែងរកទំនាក់ទំនងក្នុងតារាងដូចគ្នា ដូចជាបុគ្គលិក និងអ្នកគ្រប់គ្រងរបស់ពួកគេ។",
    zh: "自连接是指一个表与自身进行连接。这对于查找同一表中的关系很有用，例如员工及其经理。"
  },
  "blog.itvw.sql.q10c1": { en: "Self Join", km: "Self Join", zh: "自连接" },
  "blog.itvw.sql.q11": { en: "11. What is CASE WHEN?", km: "11. តើ CASE WHEN ជាអ្វី?", zh: "11. 什么是 CASE WHEN？" },
  "blog.itvw.sql.a11": {
    en: "<code class=\"inline-code\">CASE WHEN</code> is SQL's conditional expression, similar to if-else statements in programming. It allows you to add conditional logic directly in your queries.",
    km: "<code class=\"inline-code\">CASE WHEN</code> គឺជាកន្សោមលក្ខខណ្ឌរបស់ SQL ស្រដៀងនឹង if-else statements ក្នុងការសរសេរកម្មវិធី។ វាអនុញ្ញាតឱ្យអ្នកបន្ថែមតក្កវិជ្ជាលក្ខខណ្ឌដោយផ្ទាល់ក្នុង queries របស់អ្នក។",
    zh: "<code class=\"inline-code\">CASE WHEN</code> 是 SQL 的条件表达式，类似于编程中的 if-else 语句。它允许你在查询中直接添加条件逻辑。"
  },
  "blog.itvw.sql.q11c1": { en: "CASE WHEN", km: "CASE WHEN", zh: "CASE WHEN" },
  "blog.itvw.sql.q12": { en: "12. What are Window Functions?", km: "12. តើ Window Functions ជាអ្វី?", zh: "12. 什么是窗口函数？" },
  "blog.itvw.sql.a12": {
    en: "Window functions perform calculations across a set of rows related to the current row without collapsing them into a single output. Common window functions include <code class=\"inline-code\">ROW_NUMBER()</code>, <code class=\"inline-code\">RANK()</code>, and <code class=\"inline-code\">DENSE_RANK()</code>.",
    km: "Window functions ធ្វើការគណនាលើសំណុំជួរដេកដែលទាក់ទងនឹងជួរដេកបច្ចុប្បន្នដោយមិនបង្រួមពួកវាទៅជាលទ្ធផលតែមួយ។ Window functions ទូទៅរួមមាន <code class=\"inline-code\">ROW_NUMBER()</code>, <code class=\"inline-code\">RANK()</code> និង <code class=\"inline-code\">DENSE_RANK()</code>។",
    zh: "窗口函数在与当前行相关的一组行上执行计算，而不将它们折叠为单个输出。常见的窗口函数包括 <code class=\"inline-code\">ROW_NUMBER()</code>、<code class=\"inline-code\">RANK()</code> 和 <code class=\"inline-code\">DENSE_RANK()</code>。"
  },
  "blog.itvw.sql.q12c1": { en: "Window Functions", km: "Window Functions", zh: "窗口函数" },
  "blog.itvw.sql.q12tip": {
    en: "<strong>RANK vs DENSE_RANK:</strong> <code class=\"inline-code\">RANK()</code> skips numbers after ties (1, 1, 3), while <code class=\"inline-code\">DENSE_RANK()</code> does not skip (1, 1, 2).",
    km: "<strong>RANK ទល់នឹង DENSE_RANK៖</strong> <code class=\"inline-code\">RANK()</code> រំលងលេខបន្ទាប់ពីស្មើគ្នា (1, 1, 3) ខណៈដែល <code class=\"inline-code\">DENSE_RANK()</code> មិនរំលង (1, 1, 2)។",
    zh: "<strong>RANK 与 DENSE_RANK：</strong><code class=\"inline-code\">RANK()</code> 在并列后跳过数字（1, 1, 3），而 <code class=\"inline-code\">DENSE_RANK()</code> 不跳过（1, 1, 2）。"
  },
  "blog.itvw.sql.q13": { en: "13. What is a CTE (Common Table Expression)?", km: "13. តើ CTE (Common Table Expression) ជាអ្វី?", zh: "13. 什么是 CTE（公共表表达式）？" },
  "blog.itvw.sql.a13": {
    en: "A CTE is a temporary named result set defined using the <code class=\"inline-code\">WITH</code> keyword. It makes complex queries more readable and can be referenced multiple times within the same query. CTEs can also be recursive.",
    km: "CTE គឺជាសំណុំលទ្ធផលដែលមានឈ្មោះបណ្ដោះអាសន្នដែលកំណត់ដោយប្រើពាក្យគន្លឹះ <code class=\"inline-code\">WITH</code>។ វាធ្វើឱ្យ queries ស្មុគស្មាញកាន់តែងាយអាន ហើយអាចយោងបានច្រើនដងក្នុង query ដូចគ្នា។ CTEs ក៏អាចជា recursive ផងដែរ។",
    zh: "CTE 是使用 <code class=\"inline-code\">WITH</code> 关键字定义的临时命名结果集。它使复杂查询更具可读性，并且可以在同一查询中多次引用。CTE 也可以是递归的。"
  },
  "blog.itvw.sql.q13c1": { en: "Common Table Expression", km: "Common Table Expression", zh: "公共表表达式" },
  "blog.itvw.sql.q14": { en: "14. What is the difference between UNION and INTERSECT?", km: "14. តើអ្វីជាភាពខុសគ្នារវាង UNION និង INTERSECT?", zh: "14. UNION 和 INTERSECT 有什么区别？" },
  "blog.itvw.sql.a14": {
    en: "<code class=\"inline-code\">UNION</code> combines results from two queries and removes duplicates (<code class=\"inline-code\">UNION ALL</code> keeps duplicates). <code class=\"inline-code\">INTERSECT</code> returns only the rows that appear in both result sets. <code class=\"inline-code\">EXCEPT</code> (or <code class=\"inline-code\">MINUS</code>) returns rows from the first query that are not in the second.",
    km: "<code class=\"inline-code\">UNION</code> បញ្ចូលគ្នានូវលទ្ធផលពី queries ពីរ ហើយដកស្ទួន (<code class=\"inline-code\">UNION ALL</code> រក្សាស្ទួន)។ <code class=\"inline-code\">INTERSECT</code> ត្រឡប់តែជួរដេកដែលមានក្នុងសំណុំលទ្ធផលទាំងពីរ។ <code class=\"inline-code\">EXCEPT</code> (ឬ <code class=\"inline-code\">MINUS</code>) ត្រឡប់ជួរដេកពី query ទីមួយដែលមិនមានក្នុង query ទីពីរ។",
    zh: "<code class=\"inline-code\">UNION</code> 合并两个查询的结果并去除重复项（<code class=\"inline-code\">UNION ALL</code> 保留重复项）。<code class=\"inline-code\">INTERSECT</code> 仅返回同时出现在两个结果集中的行。<code class=\"inline-code\">EXCEPT</code>（或 <code class=\"inline-code\">MINUS</code>）返回第一个查询中不在第二个查询中的行。"
  },
  "blog.itvw.sql.q14c1": { en: "UNION, INTERSECT, EXCEPT", km: "UNION, INTERSECT, EXCEPT", zh: "UNION、INTERSECT、EXCEPT" },
  "blog.itvw.sql.q15": { en: "15. What is an Index? Clustered vs Non-clustered?", km: "15. តើ Index ជាអ្វី? Clustered ទល់នឹង Non-clustered?", zh: "15. 什么是索引？聚集索引与非聚集索引？" },
  "blog.itvw.sql.a15": {
    en: "An index improves the speed of data retrieval on a table at the cost of additional storage and slower writes. A <strong>Clustered Index</strong> sorts and stores data rows physically in order (one per table). A <strong>Non-clustered Index</strong> creates a separate structure with pointers to the data rows (multiple per table).",
    km: "Index បង្កើនល្បឿននៃការទាញយកទិន្នន័យលើតារាងដោយចំណាយទំហំផ្ទុកបន្ថែម និងការសរសេរយឺត។ <strong>Clustered Index</strong> តម្រៀប និងរក្សាទុកជួរដេកទិន្នន័យដោយរូបវន្តតាមលំដាប់ (មួយក្នុងមួយតារាង)។ <strong>Non-clustered Index</strong> បង្កើតរចនាសម្ព័ន្ធដាច់ដោយឡែកជាមួយ pointers ទៅកាន់ជួរដេកទិន្នន័យ (ច្រើនក្នុងមួយតារាង)។",
    zh: "索引以额外存储空间和较慢写入为代价，提高表上数据检索的速度。<strong>聚集索引</strong>按物理顺序排序和存储数据行（每个表一个）。<strong>非聚集索引</strong>创建一个带有指向数据行指针的独立结构（每个表可以有多个）。"
  },
  "blog.itvw.sql.q15c1": { en: "Indexes", km: "Indexes", zh: "索引" },
  "blog.itvw.sql.q15tip": {
    en: "<strong>When to use indexes:</strong> Add indexes on columns frequently used in WHERE, JOIN, and ORDER BY clauses. Avoid over-indexing as it slows down INSERT/UPDATE/DELETE operations.",
    km: "<strong>ពេលណាត្រូវប្រើ indexes៖</strong> បន្ថែម indexes លើជួរឈរដែលប្រើញឹកញាប់ក្នុង WHERE, JOIN និង ORDER BY clauses។ ជៀសវាងការប្រើ index ច្រើនពេកព្រោះវាធ្វើឱ្យប្រតិបត្តិការ INSERT/UPDATE/DELETE យឺត។",
    zh: "<strong>何时使用索引：</strong>在 WHERE、JOIN 和 ORDER BY 子句中频繁使用的列上添加索引。避免过度索引，因为它会减慢 INSERT/UPDATE/DELETE 操作。"
  },
  "blog.itvw.sql.q16": { en: "16. What is a View? What is a Materialized View?", km: "16. តើ View ជាអ្វី? តើ Materialized View ជាអ្វី?", zh: "16. 什么是视图？什么是物化视图？" },
  "blog.itvw.sql.a16": {
    en: "A <strong>View</strong> is a virtual table based on the result of a SQL query. It does not store data itself. A <strong>Materialized View</strong> physically stores the result set and must be refreshed to reflect changes in the underlying data.",
    km: "<strong>View</strong> គឺជាតារាងនិម្មិតដែលផ្អែកលើលទ្ធផលនៃ SQL query។ វាមិនរក្សាទុកទិន្នន័យដោយខ្លួនឯងទេ។ <strong>Materialized View</strong> រក្សាទុកសំណុំលទ្ធផលជារូបវន្ត ហើយត្រូវតែ refresh ដើម្បីឆ្លុះបញ្ចាំងការផ្លាស់ប្ដូរក្នុងទិន្នន័យមូលដ្ឋាន។",
    zh: "<strong>视图（View）</strong>是基于 SQL 查询结果的虚拟表。它本身不存储数据。<strong>物化视图（Materialized View）</strong>物理存储结果集，必须刷新以反映底层数据的变化。"
  },
  "blog.itvw.sql.q16c1": { en: "Views", km: "Views", zh: "视图" },
  "blog.itvw.sql.q17": { en: "17. What are Transactions and Isolation Levels?", km: "17. តើ Transactions និង Isolation Levels ជាអ្វី?", zh: "17. 什么是事务和隔离级别？" },
  "blog.itvw.sql.a17": {
    en: "A <strong>transaction</strong> is a sequence of SQL operations treated as a single unit of work. Transactions follow ACID properties (Atomicity, Consistency, Isolation, Durability). Isolation levels control how transactions interact with each other:",
    km: "<strong>Transaction</strong> គឺជាលំដាប់នៃប្រតិបត្តិការ SQL ដែលត្រូវបានចាត់ទុកជាឯកតាការងារតែមួយ។ Transactions អនុវត្តតាម ACID properties (Atomicity, Consistency, Isolation, Durability)។ Isolation levels គ្រប់គ្រងរបៀបដែល transactions ធ្វើអន្តរកម្មជាមួយគ្នា៖",
    zh: "<strong>事务</strong>是一系列被视为单个工作单元的 SQL 操作。事务遵循 ACID 属性（原子性、一致性、隔离性、持久性）。隔离级别控制事务之间如何交互："
  },
  "blog.itvw.sql.a17l1": { en: "<code class=\"inline-code\">READ UNCOMMITTED</code> — Can read uncommitted changes (dirty reads)", km: "<code class=\"inline-code\">READ UNCOMMITTED</code> — អាចអានការផ្លាស់ប្ដូរដែលមិនទាន់ commit (dirty reads)", zh: "<code class=\"inline-code\">READ UNCOMMITTED</code>——可以读取未提交的更改（脏读）" },
  "blog.itvw.sql.a17l2": { en: "<code class=\"inline-code\">READ COMMITTED</code> — Only reads committed data", km: "<code class=\"inline-code\">READ COMMITTED</code> — អានតែទិន្នន័យដែលបាន commit", zh: "<code class=\"inline-code\">READ COMMITTED</code>——仅读取已提交的数据" },
  "blog.itvw.sql.a17l3": { en: "<code class=\"inline-code\">REPEATABLE READ</code> — Guarantees same data if read again", km: "<code class=\"inline-code\">REPEATABLE READ</code> — ធានាទិន្នន័យដូចគ្នាប្រសិនបើអានម្ដងទៀត", zh: "<code class=\"inline-code\">REPEATABLE READ</code>——保证再次读取时数据相同" },
  "blog.itvw.sql.a17l4": { en: "<code class=\"inline-code\">SERIALIZABLE</code> — Full isolation, transactions run sequentially", km: "<code class=\"inline-code\">SERIALIZABLE</code> — ការដាច់ដោយឡែកពេញលេញ transactions ដំណើរការតាមលំដាប់", zh: "<code class=\"inline-code\">SERIALIZABLE</code>——完全隔离，事务按顺序运行" },
  "blog.itvw.sql.q17c1": { en: "Transactions", km: "Transactions", zh: "事务" },
  "blog.itvw.sql.q18": { en: "18. What is a Stored Procedure vs Function?", km: "18. តើ Stored Procedure ទល់នឹង Function ជាអ្វី?", zh: "18. 存储过程与函数有什么区别？" },
  "blog.itvw.sql.a18": {
    en: "Both are reusable SQL code blocks, but they differ in usage. A <strong>Stored Procedure</strong> can perform actions (INSERT, UPDATE, DELETE) and does not need to return a value. A <strong>Function</strong> must return a value and can be used inside SQL statements.",
    km: "ទាំងពីរគឺជាប្លុកកូដ SQL ដែលអាចប្រើឡើងវិញបាន ប៉ុន្តែពួកវាខុសគ្នាក្នុងការប្រើប្រាស់។ <strong>Stored Procedure</strong> អាចអនុវត្តសកម្មភាព (INSERT, UPDATE, DELETE) ហើយមិនចាំបាច់ត្រឡប់តម្លៃ។ <strong>Function</strong> ត្រូវតែត្រឡប់តម្លៃ ហើយអាចប្រើក្នុង SQL statements។",
    zh: "两者都是可重用的 SQL 代码块，但用法不同。<strong>存储过程</strong>可以执行操作（INSERT、UPDATE、DELETE），不需要返回值。<strong>函数</strong>必须返回值，可以在 SQL 语句中使用。"
  },
  "blog.itvw.sql.q18c1": { en: "Stored Procedure vs Function", km: "Stored Procedure ទល់នឹង Function", zh: "存储过程与函数" },
  "blog.itvw.sql.q19": { en: "19. What is Database Normalization?", km: "19. តើ Database Normalization ជាអ្វី?", zh: "19. 什么是数据库规范化？" },
  "blog.itvw.sql.a19": {
    en: "Normalization is the process of organizing data to reduce redundancy and improve data integrity. The main normal forms are:",
    km: "Normalization គឺជាដំណើរការរៀបចំទិន្នន័យដើម្បីកាត់បន្ថយភាពស្ទួន និងបង្កើនភាពត្រឹមត្រូវនៃទិន្នន័យ។ Normal forms សំខាន់ៗមាន៖",
    zh: "规范化是组织数据以减少冗余和提高数据完整性的过程。主要的范式有："
  },
  "blog.itvw.sql.a19l1": { en: "<strong>1NF</strong> — Each column contains atomic (indivisible) values; no repeating groups", km: "<strong>1NF</strong> — ជួរឈរនីមួយៗមានតម្លៃ atomic (មិនអាចបែងចែកបាន); គ្មានក្រុមដែលធ្វើម្ដងទៀត", zh: "<strong>1NF</strong>——每列包含原子（不可分割）值；没有重复组" },
  "blog.itvw.sql.a19l2": { en: "<strong>2NF</strong> — 1NF + every non-key column depends on the entire primary key", km: "<strong>2NF</strong> — 1NF + ជួរឈរមិនមែន key នីមួយៗអាស្រ័យលើ primary key ទាំងមូល", zh: "<strong>2NF</strong>——1NF + 每个非键列都依赖于整个主键" },
  "blog.itvw.sql.a19l3": { en: "<strong>3NF</strong> — 2NF + no transitive dependencies (non-key depends only on key)", km: "<strong>3NF</strong> — 2NF + គ្មាន transitive dependencies (non-key អាស្រ័យតែលើ key)", zh: "<strong>3NF</strong>——2NF + 没有传递依赖（非键仅依赖于键）" },
  "blog.itvw.sql.a19l4": { en: "<strong>BCNF</strong> — 3NF + every determinant is a candidate key", km: "<strong>BCNF</strong> — 3NF + determinant នីមួយៗគឺជា candidate key", zh: "<strong>BCNF</strong>——3NF + 每个决定因素都是候选键" },
  "blog.itvw.sql.q19c1": { en: "Normalization Example", km: "ឧទាហរណ៍ Normalization", zh: "规范化示例" },
  "blog.itvw.sql.q20": { en: "20. What is an ER Diagram?", km: "20. តើ ER Diagram ជាអ្វី?", zh: "20. 什么是 ER 图？" },
  "blog.itvw.sql.a20": {
    en: "An <strong>ER (Entity-Relationship) Diagram</strong> is a visual representation of the entities (tables), their attributes (columns), and the relationships between them in a database. It is used during the database design phase to plan the structure before writing SQL.",
    km: "<strong>ER (Entity-Relationship) Diagram</strong> គឺជាតំណាងមើលឃើញនៃ entities (តារាង) attributes (ជួរឈរ) និងទំនាក់ទំនងរវាងពួកវាក្នុងមូលដ្ឋានទិន្នន័យ។ វាត្រូវបានប្រើក្នុងដំណាក់កាលរចនាមូលដ្ឋានទិន្នន័យដើម្បីរៀបចំផែនការរចនាសម្ព័ន្ធមុនពេលសរសេរ SQL។",
    zh: "<strong>ER（实体-关系）图</strong>是数据库中实体（表）、属性（列）及其之间关系的可视化表示。它在数据库设计阶段用于在编写 SQL 之前规划结构。"
  },
  "blog.itvw.sql.a20l1": { en: "<strong>Entity</strong> — A table (e.g., Users, Orders, Products)", km: "<strong>Entity</strong> — តារាង (ឧ. Users, Orders, Products)", zh: "<strong>实体</strong>——一个表（例如 Users、Orders、Products）" },
  "blog.itvw.sql.a20l2": { en: "<strong>Attribute</strong> — A column (e.g., id, name, email)", km: "<strong>Attribute</strong> — ជួរឈរ (ឧ. id, name, email)", zh: "<strong>属性</strong>——一个列（例如 id、name、email）" },
  "blog.itvw.sql.a20l3": { en: "<strong>Relationship</strong> — How entities relate (one-to-one, one-to-many, many-to-many)", km: "<strong>Relationship</strong> — របៀបដែល entities ទាក់ទងគ្នា (one-to-one, one-to-many, many-to-many)", zh: "<strong>关系</strong>——实体之间如何关联（一对一、一对多、多对多）" },
  "blog.itvw.sql.q20c1": { en: "ER Diagram as SQL", km: "ER Diagram ជា SQL", zh: "ER 图转为 SQL" },
  "blog.itvw.sql.q20tip": {
    en: "<strong>ER Diagram tools:</strong> You can create ER diagrams using tools like dbdiagram.io, MySQL Workbench, Lucidchart, or draw.io. The diagram helps visualize relationships before writing CREATE TABLE statements.",
    km: "<strong>ឧបករណ៍ ER Diagram៖</strong> អ្នកអាចបង្កើត ER diagrams ដោយប្រើឧបករណ៍ដូចជា dbdiagram.io, MySQL Workbench, Lucidchart ឬ draw.io។ Diagram ជួយមើលឃើញទំនាក់ទំនងមុនពេលសរសេរ CREATE TABLE statements។",
    zh: "<strong>ER 图工具：</strong>你可以使用 dbdiagram.io、MySQL Workbench、Lucidchart 或 draw.io 等工具创建 ER 图。该图有助于在编写 CREATE TABLE 语句之前可视化关系。"
  },
  "blog.itvw.sql.sum1": { en: "<strong>SQL Basics</strong> — DDL, DML, DCL, TCL command categories", km: "<strong>មូលដ្ឋាន SQL</strong> — DDL, DML, DCL, TCL ប្រភេទពាក្យបញ្ជា", zh: "<strong>SQL 基础</strong>——DDL、DML、DCL、TCL 命令类别" },
  "blog.itvw.sql.sum2": { en: "<strong>Keys & Constraints</strong> — Primary Key, Foreign Key, NOT NULL, UNIQUE, CHECK, DEFAULT", km: "<strong>Keys និង Constraints</strong> — Primary Key, Foreign Key, NOT NULL, UNIQUE, CHECK, DEFAULT", zh: "<strong>键与约束</strong>——主键、外键、NOT NULL、UNIQUE、CHECK、DEFAULT" },
  "blog.itvw.sql.sum3": { en: "<strong>Querying</strong> — SELECT, ORDER BY, LIMIT, Aggregate Functions, GROUP BY, HAVING", km: "<strong>ការ Query</strong> — SELECT, ORDER BY, LIMIT, Aggregate Functions, GROUP BY, HAVING", zh: "<strong>查询</strong>——SELECT、ORDER BY、LIMIT、聚合函数、GROUP BY、HAVING" },
  "blog.itvw.sql.sum4": { en: "<strong>JOINs</strong> — INNER, LEFT, RIGHT, FULL OUTER, CROSS, Self Join", km: "<strong>JOINs</strong> — INNER, LEFT, RIGHT, FULL OUTER, CROSS, Self Join", zh: "<strong>JOIN</strong>——INNER、LEFT、RIGHT、FULL OUTER、CROSS、自连接" },
  "blog.itvw.sql.sum5": { en: "<strong>Advanced Queries</strong> — Subqueries, CASE WHEN, Window Functions, CTEs", km: "<strong>Queries កម្រិតខ្ពស់</strong> — Subqueries, CASE WHEN, Window Functions, CTEs", zh: "<strong>高级查询</strong>——子查询、CASE WHEN、窗口函数、CTE" },
  "blog.itvw.sql.sum6": { en: "<strong>Set Operations</strong> — UNION, INTERSECT, EXCEPT", km: "<strong>ប្រតិបត្តិការសំណុំ</strong> — UNION, INTERSECT, EXCEPT", zh: "<strong>集合操作</strong>——UNION、INTERSECT、EXCEPT" },
  "blog.itvw.sql.sum7": { en: "<strong>Performance</strong> — Indexes (Clustered vs Non-clustered)", km: "<strong>ប្រសិទ្ធភាព</strong> — Indexes (Clustered ទល់នឹង Non-clustered)", zh: "<strong>性能</strong>——索引（聚集与非聚集）" },
  "blog.itvw.sql.sum8": { en: "<strong>Database Objects</strong> — Views, Materialized Views, Stored Procedures, Functions", km: "<strong>Database Objects</strong> — Views, Materialized Views, Stored Procedures, Functions", zh: "<strong>数据库对象</strong>——视图、物化视图、存储过程、函数" },
  "blog.itvw.sql.sum9": { en: "<strong>Transactions</strong> — ACID properties, Isolation Levels", km: "<strong>Transactions</strong> — ACID properties, Isolation Levels", zh: "<strong>事务</strong>——ACID 属性、隔离级别" },
  "blog.itvw.sql.sum10": { en: "<strong>Design</strong> — Normalization (1NF to BCNF), ER Diagrams", km: "<strong>ការរចនា</strong> — Normalization (1NF ដល់ BCNF), ER Diagrams", zh: "<strong>设计</strong>——规范化（1NF 到 BCNF）、ER 图" },

  // Blog - TypeScript Interview
  "blog.itvw.ts.title": { en: "TypeScript Interview Questions", km: "សំណួរសម្ភាសន៍ TypeScript", zh: "TypeScript 面试题" },
  "blog.itvw.ts.intro": {
    en: "TypeScript has become the standard for building large-scale JavaScript applications. Whether you are preparing for a frontend, backend, or full-stack interview, these 20 commonly asked TypeScript questions will help you solidify your understanding of the language and its type system.",
    km: "TypeScript បានក្លាយជាស្តង់ដារសម្រាប់បង្កើតកម្មវិធី JavaScript ទ្រង់ទ្រាយធំ។ មិនថាអ្នកកំពុងរៀបចំសម្រាប់សម្ភាសន៍ frontend, backend ឬ full-stack នោះទេ សំណួរ TypeScript ទូទៅចំនួន 20 ទាំងនេះនឹងជួយអ្នកពង្រឹងការយល់ដឹងរបស់អ្នកអំពីភាសា និងប្រព័ន្ធ type របស់វា។",
    zh: "TypeScript 已成为构建大型 JavaScript 应用程序的标准。无论您是在准备前端、后端还是全栈面试，这 20 个常见的 TypeScript 问题都将帮助您巩固对该语言及其类型系统的理解。",
  },
  "blog.itvw.ts.q1": { en: "1. What is TypeScript? Why use it over JavaScript?", km: "1. តើ TypeScript ជាអ្វី? ហេតុអ្វីត្រូវប្រើវាជំនួស JavaScript?", zh: "1. 什么是 TypeScript？为什么要用它代替 JavaScript？" },
  "blog.itvw.ts.a1": {
    en: "TypeScript is a <strong>statically typed superset of JavaScript</strong> developed by Microsoft. It compiles down to plain JavaScript and runs anywhere JavaScript runs. You use it over JavaScript because it catches errors at compile time, provides better IDE support with autocompletion, makes refactoring safer, and improves code readability with explicit types.",
    km: "TypeScript គឺជា <strong>superset នៃ JavaScript ដែលមាន static typing</strong> បង្កើតឡើងដោយ Microsoft។ វា compile ទៅជា JavaScript ធម្មតា និងដំណើរការគ្រប់កន្លែងដែល JavaScript ដំណើរការ។ អ្នកប្រើវាជំនួស JavaScript ព្រោះវាចាប់កំហុសនៅពេល compile, ផ្តល់ IDE support ល្អជាងជាមួយ autocompletion, ធ្វើឱ្យ refactoring មានសុវត្ថិភាពជាង និងធ្វើឱ្យកូដអាចអានបានល្អជាងជាមួយ explicit types។",
    zh: "TypeScript 是由 Microsoft 开发的 <strong>JavaScript 的静态类型超集</strong>。它编译为普通 JavaScript，可在任何 JavaScript 运行的地方运行。使用它代替 JavaScript 是因为它能在编译时捕获错误、提供更好的 IDE 支持和自动补全、使重构更安全，并通过显式类型提高代码可读性。",
  },
  "blog.itvw.ts.q1c1": { en: "TypeScript vs JavaScript", km: "TypeScript ទល់នឹង JavaScript", zh: "TypeScript 与 JavaScript 对比" },
  "blog.itvw.ts.q2": { en: "2. What are the basic types in TypeScript?", km: "2. តើ types មូលដ្ឋានក្នុង TypeScript មានអ្វីខ្លះ?", zh: "2. TypeScript 中的基本类型有哪些？" },
  "blog.itvw.ts.a2": {
    en: "TypeScript provides several primitive and structural types that form the foundation of its type system: <code class=\"inline-code\">string</code>, <code class=\"inline-code\">number</code>, <code class=\"inline-code\">boolean</code>, <code class=\"inline-code\">null</code>, <code class=\"inline-code\">undefined</code>, <code class=\"inline-code\">void</code>, <code class=\"inline-code\">any</code>, <code class=\"inline-code\">unknown</code>, <code class=\"inline-code\">never</code>, arrays, tuples, and objects.",
    km: "TypeScript ផ្តល់ primitive និង structural types ជាច្រើនដែលបង្កើតជាមូលដ្ឋាននៃប្រព័ន្ធ type របស់វា៖ <code class=\"inline-code\">string</code>, <code class=\"inline-code\">number</code>, <code class=\"inline-code\">boolean</code>, <code class=\"inline-code\">null</code>, <code class=\"inline-code\">undefined</code>, <code class=\"inline-code\">void</code>, <code class=\"inline-code\">any</code>, <code class=\"inline-code\">unknown</code>, <code class=\"inline-code\">never</code>, arrays, tuples និង objects។",
    zh: "TypeScript 提供了多种原始类型和结构类型，构成其类型系统的基础：<code class=\"inline-code\">string</code>、<code class=\"inline-code\">number</code>、<code class=\"inline-code\">boolean</code>、<code class=\"inline-code\">null</code>、<code class=\"inline-code\">undefined</code>、<code class=\"inline-code\">void</code>、<code class=\"inline-code\">any</code>、<code class=\"inline-code\">unknown</code>、<code class=\"inline-code\">never</code>、数组、元组和对象。",
  },
  "blog.itvw.ts.q2c1": { en: "Basic Types", km: "Types មូលដ្ឋាន", zh: "基本类型" },
  "blog.itvw.ts.q3": { en: "3. What is the difference between interface and type?", km: "3. តើអ្វីជាភាពខុសគ្នារវាង interface និង type?", zh: "3. interface 和 type 有什么区别？" },
  "blog.itvw.ts.a3": {
    en: "Both <code class=\"inline-code\">interface</code> and <code class=\"inline-code\">type</code> can describe object shapes, but they differ in flexibility. Interfaces support declaration merging and are extendable with <code class=\"inline-code\">extends</code>. Types are more versatile and can represent unions, intersections, primitives, tuples, and mapped types.",
    km: "ទាំង <code class=\"inline-code\">interface</code> និង <code class=\"inline-code\">type</code> អាចពណ៌នារូបរាង object បាន ប៉ុន្តែវាខុសគ្នាក្នុងភាពបត់បែន។ Interfaces គាំទ្រ declaration merging និងអាចពង្រីកបានជាមួយ <code class=\"inline-code\">extends</code>។ Types មានភាពបត់បែនជាង និងអាចតំណាងឱ្យ unions, intersections, primitives, tuples និង mapped types។",
    zh: "虽然 <code class=\"inline-code\">interface</code> 和 <code class=\"inline-code\">type</code> 都可以描述对象的形状，但它们在灵活性上有所不同。接口支持声明合并，并可通过 <code class=\"inline-code\">extends</code> 进行扩展。类型更加灵活，可以表示联合类型、交叉类型、原始类型、元组和映射类型。",
  },
  "blog.itvw.ts.q3c1": { en: "Interface vs Type", km: "Interface ទល់នឹង Type", zh: "Interface 与 Type 对比" },
  "blog.itvw.ts.q3tip": {
    en: "<strong>Rule of thumb:</strong> Use <code class=\"inline-code\">interface</code> for object shapes and class contracts. Use <code class=\"inline-code\">type</code> when you need unions, intersections, or more complex type expressions.",
    km: "<strong>គោលការណ៍ទូទៅ៖</strong> ប្រើ <code class=\"inline-code\">interface</code> សម្រាប់រូបរាង object និង class contracts។ ប្រើ <code class=\"inline-code\">type</code> នៅពេលអ្នកត្រូវការ unions, intersections ឬ type expressions ស្មុគស្មាញជាង។",
    zh: "<strong>经验法则：</strong>使用 <code class=\"inline-code\">interface</code> 定义对象形状和类契约。当需要联合类型、交叉类型或更复杂的类型表达式时，使用 <code class=\"inline-code\">type</code>。",
  },
  "blog.itvw.ts.q4": { en: "4. What are Generics? How to use them?", km: "4. តើ Generics ជាអ្វី? របៀបប្រើវា?", zh: "4. 什么是泛型？如何使用？" },
  "blog.itvw.ts.a4": {
    en: "Generics allow you to write reusable, type-safe code that works with multiple types. Instead of using <code class=\"inline-code\">any</code>, generics preserve type information through parameters like <code class=\"inline-code\">&lt;T&gt;</code>.",
    km: "Generics អនុញ្ញាតឱ្យអ្នកសរសេរកូដដែលអាចប្រើឡើងវិញបាន និងមានសុវត្ថិភាព type ដែលដំណើរការជាមួយ types ច្រើន។ ជំនួសឱ្យការប្រើ <code class=\"inline-code\">any</code>, generics រក្សាព័ត៌មាន type តាមរយៈ parameters ដូចជា <code class=\"inline-code\">&lt;T&gt;</code>។",
    zh: "泛型允许您编写可重用的、类型安全的代码，适用于多种类型。泛型不使用 <code class=\"inline-code\">any</code>，而是通过 <code class=\"inline-code\">&lt;T&gt;</code> 等参数保留类型信息。",
  },
  "blog.itvw.ts.q4c1": { en: "Generics", km: "Generics", zh: "泛型" },
  "blog.itvw.ts.q5": { en: "5. What is the difference between any, unknown, and never?", km: "5. តើអ្វីជាភាពខុសគ្នារវាង any, unknown និង never?", zh: "5. any、unknown 和 never 有什么区别？" },
  "blog.itvw.ts.a5": {
    en: "<code class=\"inline-code\">any</code> disables type checking entirely. <code class=\"inline-code\">unknown</code> is the type-safe counterpart of <code class=\"inline-code\">any</code> -- you must narrow the type before using it. <code class=\"inline-code\">never</code> represents values that never occur, such as a function that always throws or an impossible type.",
    km: "<code class=\"inline-code\">any</code> បិទការពិនិត្យ type ទាំងស្រុង។ <code class=\"inline-code\">unknown</code> គឺជាសមភាគីដែលមានសុវត្ថិភាព type នៃ <code class=\"inline-code\">any</code> -- អ្នកត្រូវតែ narrow type មុនពេលប្រើវា។ <code class=\"inline-code\">never</code> តំណាងឱ្យតម្លៃដែលមិនដែលកើតឡើង ដូចជាមុខងារដែល throw ជានិច្ច ឬ type ដែលមិនអាចកើតមានបាន។",
    zh: "<code class=\"inline-code\">any</code> 完全禁用类型检查。<code class=\"inline-code\">unknown</code> 是 <code class=\"inline-code\">any</code> 的类型安全替代——必须先缩小类型才能使用。<code class=\"inline-code\">never</code> 表示永远不会出现的值，例如总是抛出异常的函数或不可能的类型。",
  },
  "blog.itvw.ts.q5c1": { en: "any vs unknown vs never", km: "any ទល់នឹង unknown ទល់នឹង never", zh: "any vs unknown vs never" },
  "blog.itvw.ts.q6": { en: "6. What are Enums?", km: "6. តើ Enums ជាអ្វី?", zh: "6. 什么是枚举？" },
  "blog.itvw.ts.a6": {
    en: "Enums define a set of named constants. TypeScript supports numeric enums, string enums, and const enums. They help make code more readable by giving meaningful names to sets of values.",
    km: "Enums កំណត់សំណុំនៃ named constants។ TypeScript គាំទ្រ numeric enums, string enums និង const enums។ វាជួយធ្វើឱ្យកូដអាចអានបានល្អជាងដោយផ្តល់ឈ្មោះដែលមានអត្ថន័យដល់សំណុំនៃតម្លៃ។",
    zh: "枚举定义了一组命名常量。TypeScript 支持数字枚举、字符串枚举和 const 枚举。它们通过为值集赋予有意义的名称来提高代码的可读性。",
  },
  "blog.itvw.ts.q6c1": { en: "Enums", km: "Enums", zh: "枚举" },
  "blog.itvw.ts.q7": { en: "7. What are Union and Intersection types?", km: "7. តើ Union និង Intersection types ជាអ្វី?", zh: "7. 什么是联合类型和交叉类型？" },
  "blog.itvw.ts.a7": {
    en: "A <strong>union type</strong> (<code class=\"inline-code\">A | B</code>) means the value can be either type A or type B. An <strong>intersection type</strong> (<code class=\"inline-code\">A &amp; B</code>) combines multiple types into one -- the value must satisfy all types simultaneously.",
    km: "<strong>Union type</strong> (<code class=\"inline-code\">A | B</code>) មានន័យថាតម្លៃអាចជា type A ឬ type B។ <strong>Intersection type</strong> (<code class=\"inline-code\">A &amp; B</code>) បញ្ចូល types ច្រើនជាមួយគ្នា -- តម្លៃត្រូវតែបំពេញ types ទាំងអស់ក្នុងពេលតែមួយ។",
    zh: "<strong>联合类型</strong>（<code class=\"inline-code\">A | B</code>）意味着值可以是类型 A 或类型 B。<strong>交叉类型</strong>（<code class=\"inline-code\">A &amp; B</code>）将多个类型合并为一个——值必须同时满足所有类型。",
  },
  "blog.itvw.ts.q7c1": { en: "Union & Intersection Types", km: "Union & Intersection Types", zh: "联合类型与交叉类型" },
  "blog.itvw.ts.q8": { en: "8. What is Type Narrowing / Type Guards?", km: "8. តើ Type Narrowing / Type Guards ជាអ្វី?", zh: "8. 什么是类型缩小/类型守卫？" },
  "blog.itvw.ts.a8": {
    en: "Type narrowing is the process of refining a broad type to a more specific one within a conditional block. TypeScript uses control flow analysis to narrow types automatically. Common guards include <code class=\"inline-code\">typeof</code>, <code class=\"inline-code\">instanceof</code>, <code class=\"inline-code\">in</code>, and custom type predicates.",
    km: "Type narrowing គឺជាដំណើរការនៃការកែលម្អ type ទូលំទូលាយឱ្យមានភាពជាក់លាក់ជាងក្នុង conditional block។ TypeScript ប្រើ control flow analysis ដើម្បី narrow types ដោយស្វ័យប្រវត្តិ។ Guards ទូទៅរួមមាន <code class=\"inline-code\">typeof</code>, <code class=\"inline-code\">instanceof</code>, <code class=\"inline-code\">in</code> និង custom type predicates។",
    zh: "类型缩小是在条件块中将宽泛类型细化为更具体类型的过程。TypeScript 使用控制流分析自动缩小类型。常见的守卫包括 <code class=\"inline-code\">typeof</code>、<code class=\"inline-code\">instanceof</code>、<code class=\"inline-code\">in</code> 和自定义类型谓词。",
  },
  "blog.itvw.ts.q8c1": { en: "Type Guards", km: "Type Guards", zh: "类型守卫" },
  "blog.itvw.ts.q9": { en: "9. What are Utility Types (Partial, Required, Pick, Omit, Record)?", km: "9. តើ Utility Types (Partial, Required, Pick, Omit, Record) ជាអ្វី?", zh: "9. 什么是工具类型（Partial、Required、Pick、Omit、Record）？" },
  "blog.itvw.ts.a9": {
    en: "TypeScript ships with built-in utility types that transform existing types. These save you from writing repetitive type definitions and make your code more expressive.",
    km: "TypeScript មកជាមួយ utility types ដែលភ្ជាប់មកជាមួយដើម្បីបំប្លែង types ដែលមានស្រាប់។ វាជួយសន្សំសំចៃអ្នកពីការសរសេរនិយមន័យ type ដដែលៗ និងធ្វើឱ្យកូដរបស់អ្នកមានភាពច្បាស់លាស់ជាង។",
    zh: "TypeScript 内置了用于转换现有类型的工具类型。它们可以避免编写重复的类型定义，使代码更具表现力。",
  },
  "blog.itvw.ts.q9c1": { en: "Utility Types", km: "Utility Types", zh: "工具类型" },
  "blog.itvw.ts.q10": { en: "10. What is the keyof operator?", km: "10. តើ keyof operator ជាអ្វី?", zh: "10. 什么是 keyof 操作符？" },
  "blog.itvw.ts.a10": {
    en: "The <code class=\"inline-code\">keyof</code> operator takes an object type and produces a union of its keys as string literal types. It is commonly used with generics to create type-safe property access patterns.",
    km: "<code class=\"inline-code\">keyof</code> operator យក object type និងបង្កើត union នៃ keys របស់វាជា string literal types។ វាត្រូវបានប្រើជាទូទៅជាមួយ generics ដើម្បីបង្កើតលំនាំចូលប្រើ property ដែលមានសុវត្ថិភាព type។",
    zh: "<code class=\"inline-code\">keyof</code> 操作符接受一个对象类型，并生成其键的字符串字面量类型联合。它通常与泛型一起使用，以创建类型安全的属性访问模式。",
  },
  "blog.itvw.ts.q10c1": { en: "keyof Operator", km: "keyof Operator", zh: "keyof 操作符" },
  "blog.itvw.ts.q11": { en: "11. What are Mapped Types?", km: "11. តើ Mapped Types ជាអ្វី?", zh: "11. 什么是映射类型？" },
  "blog.itvw.ts.a11": {
    en: "Mapped types let you create new types by transforming each property of an existing type. They iterate over keys using the <code class=\"inline-code\">in</code> keyword and can modify property attributes like readonly or optionality.",
    km: "Mapped types អនុញ្ញាតឱ្យអ្នកបង្កើត types ថ្មីដោយបំប្លែង property នីមួយៗនៃ type ដែលមានស្រាប់។ វា iterate លើ keys ដោយប្រើ keyword <code class=\"inline-code\">in</code> និងអាចកែប្រែ attributes នៃ property ដូចជា readonly ឬ optionality។",
    zh: "映射类型允许您通过转换现有类型的每个属性来创建新类型。它们使用 <code class=\"inline-code\">in</code> 关键字遍历键，并可以修改属性特性，如 readonly 或可选性。",
  },
  "blog.itvw.ts.q11c1": { en: "Mapped Types", km: "Mapped Types", zh: "映射类型" },
  "blog.itvw.ts.q12": { en: "12. What are Conditional Types?", km: "12. តើ Conditional Types ជាអ្វី?", zh: "12. 什么是条件类型？" },
  "blog.itvw.ts.a12": {
    en: "Conditional types select one of two types based on a condition, using the syntax <code class=\"inline-code\">T extends U ? X : Y</code>. They enable powerful type-level programming and are the foundation of many advanced type patterns.",
    km: "Conditional types ជ្រើសរើសមួយក្នុងចំណោម types ពីរដោយផ្អែកលើលក្ខខណ្ឌ ដោយប្រើ syntax <code class=\"inline-code\">T extends U ? X : Y</code>។ វាអនុញ្ញាតឱ្យធ្វើ type-level programming ដ៏មានថាមពល និងជាគ្រឹះនៃលំនាំ type កម្រិតខ្ពស់ជាច្រើន។",
    zh: "条件类型使用 <code class=\"inline-code\">T extends U ? X : Y</code> 语法，根据条件选择两种类型之一。它们支持强大的类型级编程，是许多高级类型模式的基础。",
  },
  "blog.itvw.ts.q12c1": { en: "Conditional Types", km: "Conditional Types", zh: "条件类型" },
  "blog.itvw.ts.q13": { en: "13. What is the difference between abstract class and interface?", km: "13. តើអ្វីជាភាពខុសគ្នារវាង abstract class និង interface?", zh: "13. 抽象类和接口有什么区别？" },
  "blog.itvw.ts.a13": {
    en: "An <strong>abstract class</strong> can contain both implemented methods and abstract method signatures. It exists at runtime as a JavaScript class. An <strong>interface</strong> is purely a compile-time construct with zero runtime footprint -- it only describes a shape.",
    km: "<strong>Abstract class</strong> អាចមានទាំង methods ដែលបាន implement និង abstract method signatures។ វាមានអត្ថិភាពនៅពេល runtime ជា JavaScript class។ <strong>Interface</strong> គឺជា construct នៅពេល compile សុទ្ធសាធដែលគ្មានផលប៉ះពាល់នៅពេល runtime -- វាពណ៌នាតែរូបរាង។",
    zh: "<strong>抽象类</strong>可以包含已实现的方法和抽象方法签名。它在运行时作为 JavaScript 类存在。<strong>接口</strong>纯粹是编译时构造，运行时没有任何开销——它只描述形状。",
  },
  "blog.itvw.ts.q13c1": { en: "Abstract Class vs Interface", km: "Abstract Class ទល់នឹង Interface", zh: "抽象类与接口对比" },
  "blog.itvw.ts.q14": { en: "14. What are Decorators?", km: "14. តើ Decorators ជាអ្វី?", zh: "14. 什么是装饰器？" },
  "blog.itvw.ts.a14": {
    en: "Decorators are special declarations that can be attached to classes, methods, properties, or parameters. They are functions that modify or annotate the target at design time. Decorators require enabling <code class=\"inline-code\">experimentalDecorators</code> in tsconfig.",
    km: "Decorators គឺជាការប្រកាសពិសេសដែលអាចភ្ជាប់ទៅ classes, methods, properties ឬ parameters។ វាជា functions ដែលកែប្រែ ឬ annotate target នៅពេល design time។ Decorators តម្រូវឱ្យបើក <code class=\"inline-code\">experimentalDecorators</code> ក្នុង tsconfig។",
    zh: "装饰器是可以附加到类、方法、属性或参数上的特殊声明。它们是在设计时修改或注释目标的函数。装饰器需要在 tsconfig 中启用 <code class=\"inline-code\">experimentalDecorators</code>。",
  },
  "blog.itvw.ts.q14c1": { en: "Decorators", km: "Decorators", zh: "装饰器" },
  "blog.itvw.ts.q15": { en: "15. What is Declaration Merging?", km: "15. តើ Declaration Merging ជាអ្វី?", zh: "15. 什么是声明合并？" },
  "blog.itvw.ts.a15": {
    en: "Declaration merging is when the TypeScript compiler merges two or more separate declarations with the same name into a single definition. This works with interfaces, namespaces, and enums. It is commonly used to extend third-party library types.",
    km: "Declaration merging គឺជាពេលដែល TypeScript compiler បញ្ចូលការប្រកាសពីរ ឬច្រើនដែលមានឈ្មោះដូចគ្នាទៅជានិយមន័យតែមួយ។ វាដំណើរការជាមួយ interfaces, namespaces និង enums។ វាត្រូវបានប្រើជាទូទៅដើម្បីពង្រីក types នៃ third-party library។",
    zh: "声明合并是指 TypeScript 编译器将两个或多个同名的独立声明合并为一个定义。这适用于接口、命名空间和枚举。它通常用于扩展第三方库的类型。",
  },
  "blog.itvw.ts.q15c1": { en: "Declaration Merging", km: "Declaration Merging", zh: "声明合并" },
  "blog.itvw.ts.q16": { en: "16. What are Template Literal Types?", km: "16. តើ Template Literal Types ជាអ្វី?", zh: "16. 什么是模板字面量类型？" },
  "blog.itvw.ts.a16": {
    en: "Template literal types build on string literal types by using template literal syntax to create new string types through concatenation. They allow you to model string patterns at the type level.",
    km: "Template literal types បង្កើតលើ string literal types ដោយប្រើ template literal syntax ដើម្បីបង្កើត string types ថ្មីតាមរយៈការភ្ជាប់។ វាអនុញ្ញាតឱ្យអ្នកធ្វើគំរូ string patterns នៅកម្រិត type។",
    zh: "模板字面量类型在字符串字面量类型的基础上，使用模板字面量语法通过拼接创建新的字符串类型。它们允许您在类型级别建模字符串模式。",
  },
  "blog.itvw.ts.q16c1": { en: "Template Literal Types", km: "Template Literal Types", zh: "模板字面量类型" },
  "blog.itvw.ts.q17": { en: "17. What is the infer keyword?", km: "17. តើ infer keyword ជាអ្វី?", zh: "17. 什么是 infer 关键字？" },
  "blog.itvw.ts.a17": {
    en: "The <code class=\"inline-code\">infer</code> keyword is used within conditional types to declare a type variable that TypeScript will infer from the context. It lets you extract and reuse parts of complex types.",
    km: "<code class=\"inline-code\">infer</code> keyword ត្រូវបានប្រើក្នុង conditional types ដើម្បីប្រកាស type variable ដែល TypeScript នឹង infer ពី context។ វាអនុញ្ញាតឱ្យអ្នកទាញយក និងប្រើឡើងវិញនូវផ្នែកនៃ types ស្មុគស្មាញ។",
    zh: "<code class=\"inline-code\">infer</code> 关键字用于条件类型中，声明一个 TypeScript 将从上下文中推断的类型变量。它允许您提取和重用复杂类型的部分。",
  },
  "blog.itvw.ts.q17c1": { en: "infer Keyword", km: "infer Keyword", zh: "infer 关键字" },
  "blog.itvw.ts.q18": { en: "18. What are Namespaces vs Modules?", km: "18. តើ Namespaces ទល់នឹង Modules ជាអ្វី?", zh: "18. 命名空间和模块有什么区别？" },
  "blog.itvw.ts.a18": {
    en: "<strong>Modules</strong> (ES modules) use <code class=\"inline-code\">import</code>/<code class=\"inline-code\">export</code> and are file-based -- each file is its own module. <strong>Namespaces</strong> are a TypeScript-specific way to organize code under a named scope. In modern TypeScript, modules are preferred over namespaces.",
    km: "<strong>Modules</strong> (ES modules) ប្រើ <code class=\"inline-code\">import</code>/<code class=\"inline-code\">export</code> ហើយផ្អែកលើឯកសារ -- ឯកសារនីមួយៗគឺជា module រៀងខ្លួន។ <strong>Namespaces</strong> គឺជាវិធីជាក់លាក់របស់ TypeScript ដើម្បីរៀបចំកូដក្រោម named scope។ ក្នុង TypeScript ទំនើប modules ត្រូវបានគេពេញចិត្តជាង namespaces។",
    zh: "<strong>模块</strong>（ES 模块）使用 <code class=\"inline-code\">import</code>/<code class=\"inline-code\">export</code>，基于文件——每个文件都是独立的模块。<strong>命名空间</strong>是 TypeScript 特有的在命名作用域下组织代码的方式。在现代 TypeScript 中，模块优于命名空间。",
  },
  "blog.itvw.ts.q18c1": { en: "Namespaces vs Modules", km: "Namespaces ទល់នឹង Modules", zh: "命名空间与模块对比" },
  "blog.itvw.ts.q19": { en: "19. What is strict mode in TypeScript?", km: "19. តើ strict mode ក្នុង TypeScript ជាអ្វី?", zh: "19. TypeScript 中的严格模式是什么？" },
  "blog.itvw.ts.a19": {
    en: "Enabling <code class=\"inline-code\">\"strict\": true</code> in tsconfig.json turns on a family of strict type-checking options including <code class=\"inline-code\">strictNullChecks</code>, <code class=\"inline-code\">noImplicitAny</code>, <code class=\"inline-code\">strictFunctionTypes</code>, and more. It is strongly recommended for all new projects.",
    km: "ការបើក <code class=\"inline-code\">\"strict\": true</code> ក្នុង tsconfig.json បើកជម្រើសពិនិត្យ type យ៉ាងតឹងរ៉ឹងមួយក្រុមរួមមាន <code class=\"inline-code\">strictNullChecks</code>, <code class=\"inline-code\">noImplicitAny</code>, <code class=\"inline-code\">strictFunctionTypes</code> និងច្រើនទៀត។ វាត្រូវបានណែនាំយ៉ាងខ្លាំងសម្រាប់គម្រោងថ្មីទាំងអស់។",
    zh: "在 tsconfig.json 中启用 <code class=\"inline-code\">\"strict\": true</code> 会开启一系列严格的类型检查选项，包括 <code class=\"inline-code\">strictNullChecks</code>、<code class=\"inline-code\">noImplicitAny</code>、<code class=\"inline-code\">strictFunctionTypes</code> 等。强烈建议所有新项目启用。",
  },
  "blog.itvw.ts.q19c1": { en: "Strict Mode", km: "Strict Mode", zh: "严格模式" },
  "blog.itvw.ts.q20": { en: "20. What is the difference between == and === in TypeScript?", km: "20. តើអ្វីជាភាពខុសគ្នារវាង == និង === ក្នុង TypeScript?", zh: "20. TypeScript 中 == 和 === 有什么区别？" },
  "blog.itvw.ts.a20": {
    en: "This is inherited from JavaScript. <code class=\"inline-code\">==</code> (loose equality) performs type coercion before comparison, while <code class=\"inline-code\">===</code> (strict equality) compares both value and type without coercion. TypeScript encourages using <code class=\"inline-code\">===</code> for predictable comparisons.",
    km: "នេះទទួលមរតកពី JavaScript។ <code class=\"inline-code\">==</code> (loose equality) ធ្វើ type coercion មុនពេលប្រៀបធៀប ខណៈដែល <code class=\"inline-code\">===</code> (strict equality) ប្រៀបធៀបទាំងតម្លៃ និង type ដោយគ្មាន coercion។ TypeScript លើកទឹកចិត្តឱ្យប្រើ <code class=\"inline-code\">===</code> សម្រាប់ការប្រៀបធៀបដែលអាចទស្សន៍ទាយបាន។",
    zh: "这是从 JavaScript 继承的。<code class=\"inline-code\">==</code>（宽松相等）在比较前会进行类型转换，而 <code class=\"inline-code\">===</code>（严格相等）在不进行类型转换的情况下比较值和类型。TypeScript 鼓励使用 <code class=\"inline-code\">===</code> 进行可预测的比较。",
  },
  "blog.itvw.ts.q20c1": { en: "== vs ===", km: "== ទល់នឹង ===", zh: "== 与 === 对比" },
  "blog.itvw.ts.sum1": { en: "<strong>TypeScript</strong> adds static typing to JavaScript for safer, more maintainable code", km: "<strong>TypeScript</strong> បន្ថែម static typing ទៅ JavaScript សម្រាប់កូដដែលមានសុវត្ថិភាព និងអាចថែទាំបានល្អជាង", zh: "<strong>TypeScript</strong> 为 JavaScript 添加静态类型，使代码更安全、更易维护" },
  "blog.itvw.ts.sum2": { en: "<strong>Interfaces &amp; Types</strong> define object shapes and complex type expressions", km: "<strong>Interfaces &amp; Types</strong> កំណត់រូបរាង object និង type expressions ស្មុគស្មាញ", zh: "<strong>接口和类型</strong>定义对象形状和复杂的类型表达式" },
  "blog.itvw.ts.sum3": { en: "<strong>Generics</strong> enable reusable, type-safe functions and classes", km: "<strong>Generics</strong> អនុញ្ញាតឱ្យមាន functions និង classes ដែលអាចប្រើឡើងវិញបាន និងមានសុវត្ថិភាព type", zh: "<strong>泛型</strong>实现可重用的、类型安全的函数和类" },
  "blog.itvw.ts.sum4": { en: "<strong>Type Guards</strong> narrow broad types for safe property access", km: "<strong>Type Guards</strong> narrow types ទូលំទូលាយសម្រាប់ការចូលប្រើ property ដោយសុវត្ថិភាព", zh: "<strong>类型守卫</strong>缩小宽泛类型以安全访问属性" },
  "blog.itvw.ts.sum5": { en: "<strong>Utility Types</strong> transform existing types without rewriting them", km: "<strong>Utility Types</strong> បំប្លែង types ដែលមានស្រាប់ដោយមិនចាំបាច់សរសេរឡើងវិញ", zh: "<strong>工具类型</strong>转换现有类型而无需重写" },
  "blog.itvw.ts.sum6": { en: "<strong>Mapped &amp; Conditional Types</strong> power advanced type-level programming", km: "<strong>Mapped &amp; Conditional Types</strong> ផ្តល់ថាមពលដល់ type-level programming កម្រិតខ្ពស់", zh: "<strong>映射类型和条件类型</strong>支持高级类型级编程" },
  "blog.itvw.ts.sum7": { en: "<strong>Strict mode</strong> catches more bugs at compile time and is recommended for all projects", km: "<strong>Strict mode</strong> ចាប់កំហុសបានច្រើនជាងនៅពេល compile និងត្រូវបានណែនាំសម្រាប់គម្រោងទាំងអស់", zh: "<strong>严格模式</strong>在编译时捕获更多错误，建议所有项目启用" },
  "blog.itvw.ts.sum8": { en: "<strong>Modules over Namespaces</strong> align with modern JavaScript standards", km: "<strong>Modules ជាង Namespaces</strong> ស្របតាមស្តង់ដារ JavaScript ទំនើប", zh: "<strong>模块优于命名空间</strong>，符合现代 JavaScript 标准" },

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

  // Blog - Laravel Eloquent ORM
  "blog.laravel.eloquent.title": { en: "Laravel Eloquent ORM", km: "Laravel Eloquent ORM", zh: "Laravel Eloquent ORM" },
  "blog.laravel.eloquent.intro": {
    en: "Eloquent is Laravel's built-in ORM (Object-Relational Mapping). It lets you interact with your database using PHP classes and objects instead of writing raw SQL. Each database table has a corresponding \"Model\" that you use to query, insert, update, and delete data.",
    km: "Eloquent គឺជា ORM (Object-Relational Mapping) ដែលភ្ជាប់មកជាមួយ Laravel។ វាអនុញ្ញាតឱ្យអ្នកធ្វើអន្តរកម្មជាមួយមូលដ្ឋានទិន្នន័យដោយប្រើ PHP classes និង objects ជំនួសឱ្យការសរសេរ SQL ដោយផ្ទាល់។ តារាងមូលដ្ឋានទិន្នន័យនីមួយៗមាន \"Model\" ដែលអ្នកប្រើដើម្បី query, insert, update និង delete ទិន្នន័យ។",
    zh: "Eloquent 是 Laravel 内置的 ORM（对象关系映射）。它允许你使用 PHP 类和对象与数据库交互，而不需要编写原始 SQL。每个数据库表都有一个对应的「模型」，用于查询、插入、更新和删除数据。",
  },
  "blog.laravel.eloquent.whatTitle": { en: "What is Eloquent?", km: "តើ Eloquent ជាអ្វី?", zh: "什么是 Eloquent？" },
  "blog.laravel.eloquent.whatDesc": {
    en: "Think of Eloquent as a translator between your PHP code and the database. Instead of writing:",
    km: "គិតពី Eloquent ថាជាអ្នកបកប្រែរវាងកូដ PHP របស់អ្នក និងមូលដ្ឋានទិន្នន័យ។ ជំនួសឱ្យការសរសេរ:",
    zh: "将 Eloquent 想象成 PHP 代码和数据库之间的翻译器。不用写：",
  },
  "blog.laravel.eloquent.whatInstead": { en: "You write this instead:", km: "អ្នកសរសេរបែបនេះជំនួសវិញ:", zh: "你只需要这样写：" },
  "blog.laravel.eloquent.whatClean": {
    en: "Much cleaner, safer (prevents SQL injection), and easier to maintain.",
    km: "ស្អាតជាង សុវត្ថិភាពជាង (ការពារ SQL injection) និងងាយស្រួលថែរក្សា។",
    zh: "更简洁、更安全（防止 SQL 注入），更容易维护。",
  },
  "blog.laravel.eloquent.modelTitle": { en: "1. Creating a Model", km: "1. ការបង្កើត Model", zh: "1. 创建模型" },
  "blog.laravel.eloquent.modelDesc": {
    en: "Every Eloquent model represents one database table. By convention, a <code class=\"inline-code\">Post</code> model maps to a <code class=\"inline-code\">posts</code> table.",
    km: "Model Eloquent នីមួយៗតំណាងឱ្យតារាងមូលដ្ឋានទិន្នន័យមួយ។ តាមទម្លាប់ <code class=\"inline-code\">Post</code> model ផ្គូផ្គងទៅ <code class=\"inline-code\">posts</code> table។",
    zh: "每个 Eloquent 模型代表一个数据库表。按照约定，<code class=\"inline-code\">Post</code> 模型映射到 <code class=\"inline-code\">posts</code> 表。",
  },
  "blog.laravel.eloquent.tipFillable": {
    en: "<strong>$fillable vs $guarded:</strong> <code class=\"inline-code\">$fillable</code> = whitelist (only these fields can be mass assigned). <code class=\"inline-code\">$guarded</code> = blacklist (all fields except these can be mass assigned). Use <code class=\"inline-code\">$guarded = []</code> to allow all fields.",
    km: "<strong>$fillable vs $guarded:</strong> <code class=\"inline-code\">$fillable</code> = បញ្ជីអនុញ្ញាត (មានតែវាលទាំងនេះដែលអាច mass assign បាន)។ <code class=\"inline-code\">$guarded</code> = បញ្ជីហាមឃាត់ (វាលទាំងអស់លើកលែងតែទាំងនេះអាច mass assign បាន)។ ប្រើ <code class=\"inline-code\">$guarded = []</code> ដើម្បីអនុញ្ញាតវាលទាំងអស់។",
    zh: "<strong>$fillable vs $guarded：</strong><code class=\"inline-code\">$fillable</code> = 白名单（只有这些字段可以批量赋值）。<code class=\"inline-code\">$guarded</code> = 黑名单（除这些字段外都可以批量赋值）。使用 <code class=\"inline-code\">$guarded = []</code> 允许所有字段。",
  },
  "blog.laravel.eloquent.crudTitle": { en: "2. CRUD Operations", km: "2. ប្រតិបត្តិការ CRUD", zh: "2. CRUD 操作" },
  "blog.laravel.eloquent.crudCreate": { en: "Create (Insert Data)", km: "Create (បញ្ចូលទិន្នន័យ)", zh: "Create（插入数据）" },
  "blog.laravel.eloquent.crudRead": { en: "Read (Fetch Data)", km: "Read (ទាញទិន្នន័យ)", zh: "Read（获取数据）" },
  "blog.laravel.eloquent.crudUpdate": { en: "Update (Modify Data)", km: "Update (កែប្រែទិន្នន័យ)", zh: "Update（修改数据）" },
  "blog.laravel.eloquent.crudDelete": { en: "Delete (Remove Data)", km: "Delete (លុបទិន្នន័យ)", zh: "Delete（删除数据）" },
  "blog.laravel.eloquent.scopeTitle": { en: "3. Query Scopes", km: "3. Query Scopes", zh: "3. 查询作用域" },
  "blog.laravel.eloquent.scopeDesc": {
    en: "Scopes let you define reusable query conditions inside your model. This keeps your controllers clean.",
    km: "Scopes អនុញ្ញាតឱ្យអ្នកកំណត់លក្ខខណ្ឌ query ដែលអាចប្រើឡើងវិញនៅក្នុង model របស់អ្នក។ វារក្សា controllers របស់អ្នកឱ្យស្អាត។",
    zh: "Scopes 允许你在模型内定义可复用的查询条件，保持控制器整洁。",
  },
  "blog.laravel.eloquent.accessorTitle": { en: "4. Accessors & Mutators", km: "4. Accessors & Mutators", zh: "4. 访问器和修改器" },
  "blog.laravel.eloquent.accessorDesc": {
    en: "Accessors format data when you <strong>read</strong> it. Mutators format data when you <strong>save</strong> it.",
    km: "Accessors ធ្វើទ្រង់ទ្រាយទិន្នន័យពេលអ្នក<strong>អាន</strong>វា។ Mutators ធ្វើទ្រង់ទ្រាយទិន្នន័យពេលអ្នក<strong>រក្សាទុក</strong>វា។",
    zh: "Accessors 在你<strong>读取</strong>数据时格式化数据。Mutators 在你<strong>保存</strong>数据时格式化数据。",
  },
  "blog.laravel.eloquent.softTitle": { en: "5. Soft Deletes", km: "5. Soft Deletes", zh: "5. 软删除" },
  "blog.laravel.eloquent.softDesc": {
    en: "Instead of permanently removing records, soft deletes mark them as \"deleted\" by setting a <code class=\"inline-code\">deleted_at</code> timestamp. The data stays in the database.",
    km: "ជំនួសឱ្យការលុបកំណត់ត្រាជាអចិន្ត្រៃយ៍ soft deletes សម្គាល់ពួកវាថា \"បានលុប\" ដោយកំណត់ <code class=\"inline-code\">deleted_at</code> timestamp។ ទិន្នន័យនៅតែមាននៅក្នុងមូលដ្ឋានទិន្នន័យ។",
    zh: "软删除不会永久删除记录，而是通过设置 <code class=\"inline-code\">deleted_at</code> 时间戳将它们标记为「已删除」。数据仍然保留在数据库中。",
  },
  "blog.laravel.eloquent.queryTitle": { en: "6. Common Query Patterns", km: "6. ទម្រង់ Query ទូទៅ", zh: "6. 常用查询模式" },
  "blog.laravel.eloquent.c_rawSql": { en: "Raw SQL (without Eloquent)", km: "SQL ដោយផ្ទាល់ (គ្មាន Eloquent)", zh: "原始 SQL（不使用 Eloquent）" },
  "blog.laravel.eloquent.c_eloquent": { en: "Eloquent (clean PHP)", km: "Eloquent (PHP ស្អាត)", zh: "Eloquent（简洁的 PHP）" },
  "blog.laravel.eloquent.c_creating": { en: "Creating Records", km: "ការបង្កើតកំណត់ត្រា", zh: "创建记录" },
  "blog.laravel.eloquent.c_reading": { en: "Reading Records", km: "ការអានកំណត់ត្រា", zh: "读取记录" },
  "blog.laravel.eloquent.c_updating": { en: "Updating Records", km: "ការកែប្រែកំណត់ត្រា", zh: "更新记录" },
  "blog.laravel.eloquent.c_deleting": { en: "Deleting Records", km: "ការលុបកំណត់ត្រា", zh: "删除记录" },
  "blog.laravel.eloquent.c_usageCtrl": { en: "Usage in Controller", km: "ការប្រើក្នុង Controller", zh: "在控制器中使用" },
  "blog.laravel.eloquent.c_usage": { en: "Usage", km: "ការប្រើប្រាស់", zh: "用法" },
  "blog.laravel.eloquent.c_queries": { en: "Useful Eloquent Queries", km: "Eloquent Queries ដែលមានប្រយោជន៍", zh: "常用 Eloquent 查询" },
  "blog.laravel.eloquent.sum1": {
    en: "<strong>Models</strong> — PHP classes that represent database tables",
    km: "<strong>Models</strong> — PHP classes ដែលតំណាងឱ្យតារាងមូលដ្ឋានទិន្នន័យ",
    zh: "<strong>模型</strong>——代表数据库表的 PHP 类",
  },
  "blog.laravel.eloquent.sum2": {
    en: "<strong>CRUD</strong> — create, read, update, delete with simple methods",
    km: "<strong>CRUD</strong> — create, read, update, delete ជាមួយ methods សាមញ្ញ",
    zh: "<strong>CRUD</strong>——用简单的方法创建、读取、更新、删除",
  },
  "blog.laravel.eloquent.sum3": {
    en: "<strong>Scopes</strong> — reusable query conditions inside models",
    km: "<strong>Scopes</strong> — លក្ខខណ្ឌ query ដែលអាចប្រើឡើងវិញនៅក្នុង models",
    zh: "<strong>Scopes</strong>——模型内可复用的查询条件",
  },
  "blog.laravel.eloquent.sum4": {
    en: "<strong>Accessors & Mutators</strong> — auto-format data on read/write",
    km: "<strong>Accessors & Mutators</strong> — ធ្វើទ្រង់ទ្រាយទិន្នន័យស្វ័យប្រវត្តិពេលអាន/សរសេរ",
    zh: "<strong>访问器和修改器</strong>——读写时自动格式化数据",
  },
  "blog.laravel.eloquent.sum5": {
    en: "<strong>Soft Deletes</strong> — safe deletion without losing data",
    km: "<strong>Soft Deletes</strong> — ការលុបដោយសុវត្ថិភាពដោយមិនបាត់បង់ទិន្នន័យ",
    zh: "<strong>软删除</strong>——安全删除而不丢失数据",
  },
  "blog.laravel.eloquent.sum6": {
    en: "<strong>Query Patterns</strong> — pagination, search, aggregates, chunking",
    km: "<strong>Query Patterns</strong> — pagination, search, aggregates, chunking",
    zh: "<strong>查询模式</strong>——分页、搜索、聚合、分块处理",
  },

  // Blog - Laravel Eloquent Relationships
  "blog.laravel.relationships.title": { en: "Laravel Eloquent Relationships", km: "Laravel Eloquent Relationships", zh: "Laravel Eloquent 关联关系" },
  "blog.laravel.relationships.intro": {
    en: "In real applications, database tables are related to each other. A user has many posts, a post belongs to a user, a post has many tags. Eloquent Relationships let you define these connections directly in your models, so you can access related data easily without writing complex SQL joins.",
    km: "ក្នុងកម្មវិធីពិត តារាងមូលដ្ឋានទិន្នន័យមានទំនាក់ទំនងគ្នា។ អ្នកប្រើប្រាស់មួយមាន posts ច្រើន post មួយជារបស់អ្នកប្រើប្រាស់មួយ post មួយមាន tags ច្រើន។ Eloquent Relationships អនុញ្ញាតឱ្យអ្នកកំណត់ទំនាក់ទំនងទាំងនេះដោយផ្ទាល់នៅក្នុង models របស់អ្នក ដូច្នេះអ្នកអាចចូលប្រើទិន្នន័យដែលទាក់ទងបានយ៉ាងងាយស្រួលដោយមិនចាំបាច់សរសេរ SQL joins ស្មុគស្មាញ។",
    zh: "在实际应用中，数据库表之间是相互关联的。一个用户有多篇文章，一篇文章属于一个用户，一篇文章有多个标签。Eloquent 关联关系允许你直接在模型中定义这些连接，这样你就可以轻松访问相关数据，而无需编写复杂的 SQL 连接查询。",
  },
  "blog.laravel.relationships.overviewTitle": { en: "Relationship Types Overview", km: "ទិដ្ឋភាពទូទៅនៃប្រភេទទំនាក់ទំនង", zh: "关联类型概览" },
  "blog.laravel.relationships.thRelationship": { en: "Relationship", km: "ទំនាក់ទំនង", zh: "关联类型" },
  "blog.laravel.relationships.thExample": { en: "Example", km: "ឧទាហរណ៍", zh: "示例" },
  "blog.laravel.relationships.thForeignKey": { en: "Foreign Key On", km: "Foreign Key នៅលើ", zh: "外键所在" },
  "blog.laravel.relationships.exHasOne": { en: "User has one Profile", km: "User មាន Profile មួយ", zh: "用户有一个个人资料" },
  "blog.laravel.relationships.exBelongsTo": { en: "Profile belongs to User", km: "Profile ជារបស់ User", zh: "个人资料属于用户" },
  "blog.laravel.relationships.exHasMany": { en: "User has many Posts", km: "User មាន Posts ច្រើន", zh: "用户有多篇文章" },
  "blog.laravel.relationships.exBelongsToMany": { en: "Post has many Tags", km: "Post មាន Tags ច្រើន", zh: "文章有多个标签" },
  "blog.laravel.relationships.exHasOneThrough": { en: "Country has one Capital through City", km: "Country មាន Capital មួយតាមរយៈ City", zh: "国家通过城市有一个首都" },
  "blog.laravel.relationships.fkProfiles": { en: "profiles table", km: "តារាង profiles", zh: "profiles 表" },
  "blog.laravel.relationships.fkPosts": { en: "posts table", km: "តារាង posts", zh: "posts 表" },
  "blog.laravel.relationships.fkPivot": { en: "pivot table", km: "តារាង pivot", zh: "中间表" },
  "blog.laravel.relationships.fkIntermediate": { en: "intermediate table", km: "តារាង intermediate", zh: "中间表" },
  "blog.laravel.relationships.oneToOneTitle": { en: "1. One to One (hasOne / belongsTo)", km: "1. One to One (hasOne / belongsTo)", zh: "1. 一对一（hasOne / belongsTo）" },
  "blog.laravel.relationships.oneToOneDesc": {
    en: "A User has one Profile. The <code class=\"inline-code\">profiles</code> table stores a <code class=\"inline-code\">user_id</code> foreign key.",
    km: "User មួយមាន Profile មួយ។ តារាង <code class=\"inline-code\">profiles</code> រក្សាទុក <code class=\"inline-code\">user_id</code> foreign key។",
    zh: "一个用户有一个个人资料。<code class=\"inline-code\">profiles</code> 表存储 <code class=\"inline-code\">user_id</code> 外键。",
  },
  "blog.laravel.relationships.oneToManyTitle": { en: "2. One to Many (hasMany / belongsTo)", km: "2. One to Many (hasMany / belongsTo)", zh: "2. 一对多（hasMany / belongsTo）" },
  "blog.laravel.relationships.oneToManyDesc": {
    en: "A User has many Posts. Each post stores a <code class=\"inline-code\">user_id</code> to know who wrote it.",
    km: "User មួយមាន Posts ច្រើន។ Post នីមួយៗរក្សាទុក <code class=\"inline-code\">user_id</code> ដើម្បីដឹងថាអ្នកណាសរសេរវា។",
    zh: "一个用户有多篇文章。每篇文章存储 <code class=\"inline-code\">user_id</code> 以知道是谁写的。",
  },
  "blog.laravel.relationships.manyToManyTitle": { en: "3. Many to Many (belongsToMany)", km: "3. Many to Many (belongsToMany)", zh: "3. 多对多（belongsToMany）" },
  "blog.laravel.relationships.manyToManyDesc": {
    en: "A Post can have many Tags, and a Tag can belong to many Posts. This requires a <strong>pivot table</strong> (a third table that connects them).",
    km: "Post មួយអាចមាន Tags ច្រើន ហើយ Tag មួយអាចជារបស់ Posts ច្រើន។ នេះត្រូវការ <strong>pivot table</strong> (តារាងទីបីដែលភ្ជាប់ពួកវា)។",
    zh: "一篇文章可以有多个标签，一个标签可以属于多篇文章。这需要一个<strong>中间表</strong>（连接它们的第三张表）。",
  },
  "blog.laravel.relationships.tipPivot": {
    en: "<strong>Pivot table naming:</strong> Use both table names in singular form, in alphabetical order, separated by underscore. So <code class=\"inline-code\">post</code> + <code class=\"inline-code\">tag</code> = <code class=\"inline-code\">post_tag</code>.",
    km: "<strong>ការដាក់ឈ្មោះ Pivot table:</strong> ប្រើឈ្មោះតារាងទាំងពីរជាទម្រង់ឯកវចនៈ តាមលំដាប់អក្ខរក្រម បំបែកដោយ underscore។ ដូច្នេះ <code class=\"inline-code\">post</code> + <code class=\"inline-code\">tag</code> = <code class=\"inline-code\">post_tag</code>។",
    zh: "<strong>中间表命名：</strong>使用两个表名的单数形式，按字母顺序排列，用下划线分隔。所以 <code class=\"inline-code\">post</code> + <code class=\"inline-code\">tag</code> = <code class=\"inline-code\">post_tag</code>。",
  },
  "blog.laravel.relationships.hasManyThroughTitle": { en: "4. Has Many Through", km: "4. Has Many Through", zh: "4. 远程一对多" },
  "blog.laravel.relationships.hasManyThroughDesc": {
    en: "Access distant relations through an intermediate model. Example: A Country has many Posts <strong>through</strong> Users.",
    km: "ចូលប្រើទំនាក់ទំនងឆ្ងាយតាមរយៈ model កណ្តាល។ ឧទាហរណ៍: Country មួយមាន Posts ច្រើន <strong>តាមរយៈ</strong> Users។",
    zh: "通过中间模型访问远程关联。例如：一个国家<strong>通过</strong>用户拥有多篇文章。",
  },
  "blog.laravel.relationships.eagerTitle": { en: "5. Eager Loading (N+1 Problem)", km: "5. Eager Loading (បញ្ហា N+1)", zh: "5. 预加载（N+1 问题）" },
  "blog.laravel.relationships.eagerDesc": {
    en: "Without eager loading, accessing relations in a loop causes many extra database queries (the N+1 problem). Eager loading fixes this.",
    km: "បើគ្មាន eager loading ការចូលប្រើទំនាក់ទំនងនៅក្នុង loop បណ្តាលឱ្យមាន queries មូលដ្ឋានទិន្នន័យបន្ថែមច្រើន (បញ្ហា N+1)។ Eager loading ដោះស្រាយបញ្ហានេះ។",
    zh: "没有预加载时，在循环中访问关联会导致大量额外的数据库查询（N+1 问题）。预加载可以解决这个问题。",
  },
  "blog.laravel.relationships.tipEager": {
    en: "<strong>Rule of thumb:</strong> Always use <code class=\"inline-code\">with()</code> when you know you'll access a relation inside a loop. This is one of the most important performance optimizations in Laravel.",
    km: "<strong>គោលការណ៍:</strong> ប្រើ <code class=\"inline-code\">with()</code> ជានិច្ចពេលអ្នកដឹងថាអ្នកនឹងចូលប្រើទំនាក់ទំនងនៅក្នុង loop។ នេះគឺជាការធ្វើឱ្យប្រសើរដំណើរការដ៏សំខាន់បំផុតមួយនៅក្នុង Laravel។",
    zh: "<strong>经验法则：</strong>当你知道将在循环中访问关联时，始终使用 <code class=\"inline-code\">with()</code>。这是 Laravel 中最重要的性能优化之一。",
  },
  "blog.laravel.relationships.queryTitle": { en: "6. Querying Relationships", km: "6. ការ Query ទំនាក់ទំនង", zh: "6. 查询关联关系" },
  "blog.laravel.relationships.c_migration": { en: "Migration: profiles table", km: "Migration: តារាង profiles", zh: "迁移：profiles 表" },
  "blog.laravel.relationships.c_migrationPosts": { en: "Migration: posts table", km: "Migration: តារាង posts", zh: "迁移：posts 表" },
  "blog.laravel.relationships.c_migrationTags": { en: "Migration: tags table + pivot table", km: "Migration: តារាង tags + pivot table", zh: "迁移：tags 表 + 中间表" },
  "blog.laravel.relationships.c_usage": { en: "Usage", km: "ការប្រើប្រាស់", zh: "用法" },
  "blog.laravel.relationships.c_tables": { en: "Tables", km: "តារាង", zh: "表" },
  "blog.laravel.relationships.c_badN1": { en: "Bad: N+1 Problem (1 + N queries)", km: "មិនល្អ: បញ្ហា N+1 (1 + N queries)", zh: "差：N+1 问题（1 + N 次查询）" },
  "blog.laravel.relationships.c_goodEager": { en: "Good: Eager Loading (2 queries total)", km: "ល្អ: Eager Loading (សរុប 2 queries)", zh: "好：预加载（总共 2 次查询）" },
  "blog.laravel.relationships.c_queryRelations": { en: "Useful Relationship Queries", km: "Relationship Queries ដែលមានប្រយោជន៍", zh: "常用关联查询" },
  "blog.laravel.relationships.sum1": {
    en: "<strong>hasOne / belongsTo</strong> — one-to-one (User → Profile)",
    km: "<strong>hasOne / belongsTo</strong> — one-to-one (User → Profile)",
    zh: "<strong>hasOne / belongsTo</strong>——一对一（用户 → 个人资料）",
  },
  "blog.laravel.relationships.sum2": {
    en: "<strong>hasMany / belongsTo</strong> — one-to-many (User → Posts)",
    km: "<strong>hasMany / belongsTo</strong> — one-to-many (User → Posts)",
    zh: "<strong>hasMany / belongsTo</strong>——一对多（用户 → 文章）",
  },
  "blog.laravel.relationships.sum3": {
    en: "<strong>belongsToMany</strong> — many-to-many with pivot table (Posts ↔ Tags)",
    km: "<strong>belongsToMany</strong> — many-to-many ជាមួយ pivot table (Posts ↔ Tags)",
    zh: "<strong>belongsToMany</strong>——多对多，带中间表（文章 ↔ 标签）",
  },
  "blog.laravel.relationships.sum4": {
    en: "<strong>hasManyThrough</strong> — distant relations through intermediate model",
    km: "<strong>hasManyThrough</strong> — ទំនាក់ទំនងឆ្ងាយតាមរយៈ model កណ្តាល",
    zh: "<strong>hasManyThrough</strong>——通过中间模型的远程关联",
  },
  "blog.laravel.relationships.sum5": {
    en: "<strong>Eager Loading</strong> — always use <code class=\"inline-code\">with()</code> to avoid N+1 queries",
    km: "<strong>Eager Loading</strong> — ប្រើ <code class=\"inline-code\">with()</code> ជានិច្ចដើម្បីជៀសវាង N+1 queries",
    zh: "<strong>预加载</strong>——始终使用 <code class=\"inline-code\">with()</code> 避免 N+1 查询",
  },
  "blog.laravel.relationships.sum6": {
    en: "<strong>has / whereHas</strong> — query based on relationship existence",
    km: "<strong>has / whereHas</strong> — query ដោយផ្អែកលើអត្ថិភាពនៃទំនាក់ទំនង",
    zh: "<strong>has / whereHas</strong>——基于关联存在性的查询",
  },

  // Laravel Setup
  "blog.laravel.setup.title": {
    en: "Laravel Basic Setup Project",
    km: "គម្រោងដំឡើង Laravel មូលដ្ឋាន",
    zh: "Laravel 基础项目搭建",
  },
  "blog.laravel.setup.intro": {
    en: "Laravel is one of the most popular PHP frameworks for building modern web applications. In this guide, we'll walk through setting up a Laravel project from scratch, covering installation, configuration, routing, controllers, models, migrations, and building your first CRUD application.",
    km: "Laravel គឺជា framework PHP ដ៏ពេញនិយមបំផុតមួយសម្រាប់បង្កើតកម្មវិធីវែបទំនើប។ នៅក្នុងមគ្គុទ្ទេសក៍នេះ យើងនឹងដើរតាមការដំឡើងគម្រោង Laravel ពីដំបូង រួមទាំងការដំឡើង ការកំណត់រចនាសម្ព័ន្ធ routing controllers models migrations និងការបង្កើតកម្មវិធី CRUD ដំបូងរបស់អ្នក។",
    zh: "Laravel 是最流行的 PHP 框架之一，用于构建现代 Web 应用程序。在本指南中，我们将从头开始搭建 Laravel 项目，涵盖安装、配置、路由、控制器、模型、迁移以及构建你的第一个 CRUD 应用程序。",
  },
  "blog.laravel.setup.prerequisites": {
    en: "Prerequisites",
    km: "តម្រូវការជាមុន",
    zh: "前置条件",
  },
  "blog.laravel.setup.prereq1": {
    en: "PHP 8.2 or higher installed",
    km: "PHP 8.2 ឬខ្ពស់ជាងត្រូវបានដំឡើង",
    zh: "已安装 PHP 8.2 或更高版本",
  },
  "blog.laravel.setup.prereq2": {
    en: "Composer (PHP dependency manager)",
    km: "Composer (កម្មវិធីគ្រប់គ្រង dependency PHP)",
    zh: "Composer（PHP 依赖管理器）",
  },
  "blog.laravel.setup.prereq3": {
    en: "Node.js & npm (for frontend assets)",
    km: "Node.js & npm (សម្រាប់ frontend assets)",
    zh: "Node.js 和 npm（用于前端资源）",
  },
  "blog.laravel.setup.prereq4": {
    en: "A database (MySQL, PostgreSQL, or SQLite)",
    km: "មូលដ្ឋានទិន្នន័យ (MySQL, PostgreSQL, ឬ SQLite)",
    zh: "数据库（MySQL、PostgreSQL 或 SQLite）",
  },
  "blog.laravel.setup.installTitle": {
    en: "1. Installation",
    km: "1. ការដំឡើង",
    zh: "1. 安装",
  },
  "blog.laravel.setup.installDesc": {
    en: "First, install the Laravel installer globally via Composer, then create a new project:",
    km: "ដំបូង ដំឡើង Laravel installer ជា global តាមរយៈ Composer បន្ទាប់មកបង្កើតគម្រោងថ្មី៖",
    zh: "首先，通过 Composer 全局安装 Laravel 安装器，然后创建一个新项目：",
  },
  "blog.laravel.setup.installAfter": {
    en: "Your application will be available at <code class=\"inline-code\">http://localhost:8000</code>.",
    km: "កម្មវិធីរបស់អ្នកនឹងអាចប្រើបាននៅ <code class=\"inline-code\">http://localhost:8000</code>។",
    zh: "你的应用程序将在 <code class=\"inline-code\">http://localhost:8000</code> 上可用。",
  },
  "blog.laravel.setup.envTitle": {
    en: "2. Environment Configuration",
    km: "2. ការកំណត់រចនាសម្ព័ន្ធបរិស្ថាន",
    zh: "2. 环境配置",
  },
  "blog.laravel.setup.envDesc": {
    en: "Laravel uses a <code class=\"inline-code\">.env</code> file for environment-specific configuration. Update your database settings:",
    km: "Laravel ប្រើឯកសារ <code class=\"inline-code\">.env</code> សម្រាប់ការកំណត់រចនាសម្ព័ន្ធជាក់លាក់នៃបរិស្ថាន។ ធ្វើបច្ចុប្បន្នភាពការកំណត់មូលដ្ឋានទិន្នន័យរបស់អ្នក៖",
    zh: "Laravel 使用 <code class=\"inline-code\">.env</code> 文件进行特定于环境的配置。更新你的数据库设置：",
  },
  "blog.laravel.setup.tip": {
    en: "<strong>Tip:</strong> For quick local development, you can use SQLite. Set <code class=\"inline-code\">DB_CONNECTION=sqlite</code> and remove the other DB_ lines. Laravel will create the database file automatically.",
    km: "<strong>គន្លឹះ៖</strong> សម្រាប់ការអភិវឌ្ឍន៍ក្នុងម៉ាស៊ីនមូលដ្ឋានរហ័ស អ្នកអាចប្រើ SQLite។ កំណត់ <code class=\"inline-code\">DB_CONNECTION=sqlite</code> ហើយលុបបន្ទាត់ DB_ ផ្សេងទៀត។ Laravel នឹងបង្កើតឯកសារមូលដ្ឋានទិន្នន័យដោយស្វ័យប្រវត្តិ។",
    zh: "<strong>提示：</strong>对于快速本地开发，你可以使用 SQLite。设置 <code class=\"inline-code\">DB_CONNECTION=sqlite</code> 并删除其他 DB_ 行。Laravel 将自动创建数据库文件。",
  },
  "blog.laravel.setup.structureTitle": {
    en: "3. Project Structure",
    km: "3. រចនាសម្ព័ន្ធគម្រោង",
    zh: "3. 项目结构",
  },
  "blog.laravel.setup.structureDesc": {
    en: "Here are the key directories you'll work with:",
    km: "នេះគឺជាថតឯកសារសំខាន់ៗដែលអ្នកនឹងធ្វើការជាមួយ៖",
    zh: "以下是你将使用的关键目录：",
  },
  "blog.laravel.setup.structureCodeTitle": {
    en: "Project Structure",
    km: "រចនាសម្ព័ន្ធគម្រោង",
    zh: "项目结构",
  },
  "blog.laravel.setup.routingTitle": {
    en: "4. Routing",
    km: "4. Routing",
    zh: "4. 路由",
  },
  "blog.laravel.setup.routingDesc": {
    en: "Define your application routes in <code class=\"inline-code\">routes/web.php</code>:",
    km: "កំណត់ routes នៃកម្មវិធីរបស់អ្នកនៅក្នុង <code class=\"inline-code\">routes/web.php</code>៖",
    zh: "在 <code class=\"inline-code\">routes/web.php</code> 中定义你的应用程序路由：",
  },
  "blog.laravel.setup.routingAfter": {
    en: "Run <code class=\"inline-code\">php artisan route:list</code> to see all registered routes.",
    km: "ដំណើរការ <code class=\"inline-code\">php artisan route:list</code> ដើម្បីមើល routes ដែលបានចុះឈ្មោះទាំងអស់។",
    zh: "运行 <code class=\"inline-code\">php artisan route:list</code> 查看所有已注册的路由。",
  },
  "blog.laravel.setup.migrationTitle": {
    en: "5. Database Migration",
    km: "5. Database Migration",
    zh: "5. 数据库迁移",
  },
  "blog.laravel.setup.migrationDesc1": {
    en: "Create a migration for a posts table:",
    km: "បង្កើត migration សម្រាប់តារាង posts៖",
    zh: "为 posts 表创建迁移：",
  },
  "blog.laravel.setup.migrationDesc2": {
    en: "Edit the generated migration file:",
    km: "កែសម្រួលឯកសារ migration ដែលបានបង្កើត៖",
    zh: "编辑生成的迁移文件：",
  },
  "blog.laravel.setup.modelTitle": {
    en: "6. Eloquent Model",
    km: "6. Eloquent Model",
    zh: "6. Eloquent 模型",
  },
  "blog.laravel.setup.modelDesc": {
    en: "Create a model for the posts table:",
    km: "បង្កើត model សម្រាប់តារាង posts៖",
    zh: "为 posts 表创建模型：",
  },
  "blog.laravel.setup.controllerTitle": {
    en: "7. Controller (CRUD)",
    km: "7. Controller (CRUD)",
    zh: "7. 控制器（CRUD）",
  },
  "blog.laravel.setup.controllerDesc": {
    en: "Generate a resource controller:",
    km: "បង្កើត resource controller៖",
    zh: "生成资源控制器：",
  },
  "blog.laravel.setup.artisanTitle": {
    en: "8. Useful Artisan Commands",
    km: "8. ពាក្យបញ្ជា Artisan ដែលមានប្រយោជន៍",
    zh: "8. 常用 Artisan 命令",
  },
  "blog.laravel.setup.summaryDesc": {
    en: "You now have a working Laravel project with:",
    km: "ឥឡូវអ្នកមានគម្រោង Laravel ដែលដំណើរការជាមួយ៖",
    zh: "你现在拥有一个可运行的 Laravel 项目，包含：",
  },
  "blog.laravel.setup.sum1": {
    en: "Project installation and environment setup",
    km: "ការដំឡើងគម្រោង និងការកំណត់បរិស្ថាន",
    zh: "项目安装和环境搭建",
  },
  "blog.laravel.setup.sum2": {
    en: "Database configuration and migrations",
    km: "ការកំណត់រចនាសម្ព័ន្ធមូលដ្ឋានទិន្នន័យ និង migrations",
    zh: "数据库配置和迁移",
  },
  "blog.laravel.setup.sum3": {
    en: "Eloquent models with fillable attributes",
    km: "Eloquent models ជាមួយ fillable attributes",
    zh: "带有 fillable 属性的 Eloquent 模型",
  },
  "blog.laravel.setup.sum4": {
    en: "Resource controller with full CRUD operations",
    km: "Resource controller ជាមួយប្រតិបត្តិការ CRUD ពេញលេញ",
    zh: "具有完整 CRUD 操作的资源控制器",
  },
  "blog.laravel.setup.sum5": {
    en: "RESTful routing with validation",
    km: "RESTful routing ជាមួយ validation",
    zh: "带有验证的 RESTful 路由",
  },
  // Laravel Authentication
  "blog.laravel.auth.title": { en: "Laravel Authentication", km: "Laravel Authentication", zh: "Laravel 身份验证" },
  "blog.laravel.auth.intro": {
    en: 'Authentication is how your application knows <strong>who</strong> is using it. Laravel makes authentication very simple out of the box — it provides login, registration, session management, and API token authentication with minimal setup.',
    km: 'Authentication គឺជារបៀបដែលកម្មវិធីរបស់អ្នកដឹងថា <strong>អ្នកណា</strong> កំពុងប្រើវា។ Laravel ធ្វើឱ្យ authentication ងាយស្រួលណាស់ — វាផ្តល់នូវ login, registration, session management និង API token authentication ជាមួយការដំឡើងតិចតួច។',
    zh: '身份验证是您的应用程序了解<strong>谁</strong>在使用它的方式。Laravel 使身份验证变得非常简单——它提供了登录、注册、会话管理和 API 令牌身份验证，只需最少的设置。',
  },
  "blog.laravel.auth.howTitle": { en: "How Authentication Works", km: "របៀបដែល Authentication ដំណើរការ", zh: "身份验证的工作原理" },
  "blog.laravel.auth.howDesc": {
    en: "Laravel authentication has two core concepts:",
    km: "Laravel authentication មានគោលគំនិតស្នូលពីរ:",
    zh: "Laravel 身份验证有两个核心概念：",
  },
  "blog.laravel.auth.howGuards": {
    en: '<strong>Guards</strong> — define <em>how</em> users are authenticated (session, token, etc.)',
    km: '<strong>Guards</strong> — កំណត់ <em>របៀប</em> ដែលអ្នកប្រើត្រូវបានផ្ទៀងផ្ទាត់ (session, token, ល។)',
    zh: '<strong>Guards</strong> — 定义用户<em>如何</em>进行身份验证（会话、令牌等）',
  },
  "blog.laravel.auth.howProviders": {
    en: '<strong>Providers</strong> — define <em>where</em> users are stored (database table, Eloquent model)',
    km: '<strong>Providers</strong> — កំណត់ <em>កន្លែង</em> ដែលអ្នកប្រើត្រូវបានរក្សាទុក (database table, Eloquent model)',
    zh: '<strong>Providers</strong> — 定义用户存储在<em>哪里</em>（数据库表、Eloquent 模型）',
  },
  "blog.laravel.auth.starterTitle": { en: "1. Quick Setup with Starter Kits", km: "1. ដំឡើងរហ័សជាមួយ Starter Kits", zh: "1. 使用入门套件快速设置" },
  "blog.laravel.auth.starterDesc": {
    en: "The fastest way to add authentication is using Laravel Breeze or Jetstream. They scaffold login, register, password reset, and email verification for you.",
    km: "វិធីលឿនបំផុតក្នុងការបន្ថែម authentication គឺប្រើ Laravel Breeze ឬ Jetstream។ ពួកវា scaffold login, register, password reset និង email verification សម្រាប់អ្នក។",
    zh: "添加身份验证最快的方式是使用 Laravel Breeze 或 Jetstream。它们会为您搭建登录、注册、密码重置和电子邮件验证。",
  },
  "blog.laravel.auth.starterTerminal": { en: "Terminal — Laravel Breeze", km: "Terminal — Laravel Breeze", zh: "终端 — Laravel Breeze" },
  "blog.laravel.auth.starterTip": {
    en: '<strong>Breeze vs Jetstream:</strong> Use <strong>Breeze</strong> for simple authentication. Use <strong>Jetstream</strong> if you need teams, two-factor auth, API tokens, and profile management.',
    km: '<strong>Breeze vs Jetstream:</strong> ប្រើ <strong>Breeze</strong> សម្រាប់ authentication សាមញ្ញ។ ប្រើ <strong>Jetstream</strong> បើអ្នកត្រូវការ teams, two-factor auth, API tokens និង profile management។',
    zh: '<strong>Breeze vs Jetstream：</strong>使用 <strong>Breeze</strong> 进行简单身份验证。如果您需要团队、双因素认证、API 令牌和个人资料管理，请使用 <strong>Jetstream</strong>。',
  },
  "blog.laravel.auth.manualTitle": { en: "2. Manual Authentication", km: "2. Authentication ដោយដៃ", zh: "2. 手动身份验证" },
  "blog.laravel.auth.manualDesc": {
    en: "If you want full control, you can implement authentication manually.",
    km: "បើអ្នកចង់បានការគ្រប់គ្រងពេញលេញ អ្នកអាចអនុវត្ត authentication ដោយដៃ។",
    zh: "如果您想要完全控制，可以手动实现身份验证。",
  },
  "blog.laravel.auth.registration": { en: "Registration", km: "ការចុះឈ្មោះ", zh: "注册" },
  "blog.laravel.auth.login": { en: "Login", km: "ការចូល", zh: "登录" },
  "blog.laravel.auth.logout": { en: "Logout", km: "ការចេញ", zh: "注销" },
  "blog.laravel.auth.routesTitle": { en: "3. Auth Routes", km: "3. Auth Routes", zh: "3. 认证路由" },
  "blog.laravel.auth.protectTitle": { en: "4. Protecting Routes", km: "4. ការការពារ Routes", zh: "4. 保护路由" },
  "blog.laravel.auth.protectDesc": {
    en: 'Use the <code class="inline-code">auth</code> middleware to require authentication:',
    km: 'ប្រើ <code class="inline-code">auth</code> middleware ដើម្បីទាមទារ authentication:',
    zh: '使用 <code class="inline-code">auth</code> 中间件来要求身份验证：',
  },
  "blog.laravel.auth.protectCodeTitle": { en: "Different ways to protect routes", km: "វិធីផ្សេងៗក្នុងការការពារ routes", zh: "保护路由的不同方式" },
  "blog.laravel.auth.helperTitle": { en: "5. Using the Auth Helper", km: "5. ការប្រើ Auth Helper", zh: "5. 使用 Auth 辅助函数" },
  "blog.laravel.auth.helperCodeTitle": { en: "Getting Current User Info", km: "ទទួលបានព័ត៌មានអ្នកប្រើបច្ចុប្បន្ន", zh: "获取当前用户信息" },
  "blog.laravel.auth.sanctumTitle": { en: "6. API Authentication (Sanctum)", km: "6. API Authentication (Sanctum)", zh: "6. API 身份验证 (Sanctum)" },
  "blog.laravel.auth.sanctumDesc": {
    en: "For API authentication (Vue/React SPA or mobile apps), use Laravel Sanctum:",
    km: "សម្រាប់ API authentication (Vue/React SPA ឬ mobile apps) ប្រើ Laravel Sanctum:",
    zh: "对于 API 身份验证（Vue/React SPA 或移动应用），使用 Laravel Sanctum：",
  },
  "blog.laravel.auth.sanctumLogin": { en: "API Login — return token", km: "API Login — ត្រឡប់ token", zh: "API 登录 — 返回令牌" },
  "blog.laravel.auth.sanctumProtect": { en: "Protect API routes", km: "ការពារ API routes", zh: "保护 API 路由" },
  "blog.laravel.auth.sumGuards": {
    en: '<strong>Guards & Providers</strong> — how and where users are authenticated',
    km: '<strong>Guards & Providers</strong> — របៀប និងកន្លែងដែលអ្នកប្រើត្រូវបានផ្ទៀងផ្ទាត់',
    zh: '<strong>Guards & Providers</strong> — 用户如何以及在哪里进行身份验证',
  },
  "blog.laravel.auth.sumBreeze": {
    en: '<strong>Breeze / Jetstream</strong> — quick scaffolding for auth views',
    km: '<strong>Breeze / Jetstream</strong> — scaffolding រហ័org សម្រាប់ auth views',
    zh: '<strong>Breeze / Jetstream</strong> — 快速搭建认证视图',
  },
  "blog.laravel.auth.sumManual": {
    en: '<strong>Manual Auth</strong> — register, login, logout with full control',
    km: '<strong>Manual Auth</strong> — register, login, logout ជាមួយការគ្រប់គ្រងពេញលេញ',
    zh: '<strong>手动认证</strong> — 注册、登录、注销，完全控制',
  },
  "blog.laravel.auth.sumMiddleware": {
    en: '<strong>Middleware</strong> — protect routes with <code class="inline-code">auth</code> middleware',
    km: '<strong>Middleware</strong> — ការពារ routes ជាមួយ <code class="inline-code">auth</code> middleware',
    zh: '<strong>中间件</strong> — 使用 <code class="inline-code">auth</code> 中间件保护路由',
  },
  "blog.laravel.auth.sumSanctum": {
    en: '<strong>Sanctum</strong> — token-based API authentication',
    km: '<strong>Sanctum</strong> — API authentication ដោយប្រើ token',
    zh: '<strong>Sanctum</strong> — 基于令牌的 API 身份验证',
  },
  // Laravel Authorization
  "blog.laravel.authorization.title": { en: "Laravel Authorization", km: "Laravel Authorization", zh: "Laravel 授权" },
  "blog.laravel.authorization.intro": {
    en: 'Authentication answers "Who are you?" — Authorization answers "What are you allowed to do?" Laravel provides two ways to authorize actions: <strong>Gates</strong> (simple closures) and <strong>Policies</strong> (organized by model). Think of Gates for quick checks and Policies for model-specific permissions.',
    km: 'Authentication ឆ្លើយថា "តើអ្នកជានរណា?" — Authorization ឆ្លើយថា "តើអ្នកអាចធ្វើអ្វីបាន?" Laravel ផ្តល់នូវវិធីពីរយ៉ាងក្នុងការអនុញ្ញាតសកម្មភាព៖ <strong>Gates</strong> (closures សាមញ្ញ) និង <strong>Policies</strong> (រៀបចំតាម model)។ គិតអំពី Gates សម្រាប់ការត្រួតពិនិត្យរហ័ស និង Policies សម្រាប់ការអនុញ្ញាតជាក់លាក់តាម model។',
    zh: '身份验证回答"你是谁？"— 授权回答"你被允许做什么？"Laravel 提供两种授权操作方式：<strong>Gates</strong>（简单闭包）和 <strong>Policies</strong>（按模型组织）。Gates 用于快速检查，Policies 用于特定模型的权限管理。',
  },
  "blog.laravel.authorization.gatesTitle": { en: "1. Gates", km: "1. Gates", zh: "1. Gates（门）" },
  "blog.laravel.authorization.gatesDesc": {
    en: 'Gates are simple closures that determine if a user can perform an action. Define them in <code class="inline-code">AppServiceProvider</code>.',
    km: 'Gates គឺជា closures សាមញ្ញដែលកំណត់ថាតើអ្នកប្រើអាចអនុវត្តសកម្មភាពមួយបានឬអត់។ កំណត់ពួកវានៅក្នុង <code class="inline-code">AppServiceProvider</code>។',
    zh: 'Gates 是简单的闭包，用于确定用户是否可以执行某个操作。在 <code class="inline-code">AppServiceProvider</code> 中定义它们。',
  },
  "blog.laravel.authorization.gatesCodeTitle": { en: "Using Gates", km: "ការប្រើ Gates", zh: "使用 Gates" },
  "blog.laravel.authorization.policiesTitle": { en: "2. Policies", km: "2. Policies", zh: "2. Policies（策略）" },
  "blog.laravel.authorization.policiesDesc": {
    en: 'Policies organize authorization logic around a specific model. Each method in a policy corresponds to an action (view, create, update, delete).',
    km: 'Policies រៀបចំតក្កវិជ្ជាអនុញ្ញាតជុំវិញ model ជាក់លាក់មួយ។ method នីមួយៗក្នុង policy ត្រូវគ្នានឹងសកម្មភាពមួយ (view, create, update, delete)។',
    zh: 'Policies 围绕特定模型组织授权逻辑。策略中的每个方法对应一个操作（查看、创建、更新、删除）。',
  },
  "blog.laravel.authorization.policiesTip": {
    en: '<strong>Auto-discovery:</strong> Laravel automatically discovers policies if you follow naming conventions: <code class="inline-code">Post</code> model → <code class="inline-code">PostPolicy</code>. No manual registration needed.',
    km: '<strong>ការរកឃើញស្វ័យប្រវត្តិ:</strong> Laravel រកឃើញ policies ដោយស្វ័យប្រវត្តិប្រសិនបើអ្នកធ្វើតាមការដាក់ឈ្មោះ៖ <code class="inline-code">Post</code> model → <code class="inline-code">PostPolicy</code>។ មិនចាំបាច់ចុះឈ្មោះដោយដៃទេ។',
    zh: '<strong>自动发现:</strong> 如果遵循命名约定，Laravel 会自动发现策略：<code class="inline-code">Post</code> 模型 → <code class="inline-code">PostPolicy</code>。无需手动注册。',
  },
  "blog.laravel.authorization.usingPoliciesTitle": { en: "3. Using Policies", km: "3. ការប្រើ Policies", zh: "3. 使用 Policies" },
  "blog.laravel.authorization.inControllers": { en: "In Controllers", km: "នៅក្នុង Controllers", zh: "在控制器中" },
  "blog.laravel.authorization.viaUserModel": { en: "Via User Model", km: "តាមរយៈ User Model", zh: "通过 User 模型" },
  "blog.laravel.authorization.viaUserModelCodeTitle": { en: "Using on User model", km: "ការប្រើលើ User model", zh: "在 User 模型上使用" },
  "blog.laravel.authorization.inBladeTemplates": { en: "In Blade Templates", km: "នៅក្នុង Blade Templates", zh: "在 Blade 模板中" },
  "blog.laravel.authorization.bladeCodeTitle": { en: "Blade", km: "Blade", zh: "Blade" },
  "blog.laravel.authorization.routesTitle": { en: "4. Authorization in Routes", km: "4. Authorization នៅក្នុង Routes", zh: "4. 路由中的授权" },
  "blog.laravel.authorization.roleTitle": { en: "5. Simple Role-Based Access", km: "5. ការគ្រប់គ្រងសិទ្ធិតាមតួនាទីសាមញ្ញ", zh: "5. 简单的基于角色的访问控制" },
  "blog.laravel.authorization.roleDesc": {
    en: 'A practical example combining Gates for role-based access:',
    km: 'ឧទាហរណ៍ជាក់ស្ដែងក្នុងការរួមបញ្ចូល Gates សម្រាប់ការគ្រប់គ្រងសិទ្ធិតាមតួនាទី៖',
    zh: '一个结合 Gates 实现基于角色访问控制的实际示例：',
  },
  "blog.laravel.authorization.migrationCodeTitle": { en: "Migration: add role to users", km: "Migration: បន្ថែម role ទៅ users", zh: "Migration：为 users 添加 role" },
  "blog.laravel.authorization.providerCodeTitle": { en: "AppServiceProvider — define role gates", km: "AppServiceProvider — កំណត់ role gates", zh: "AppServiceProvider — 定义角色 gates" },
  "blog.laravel.authorization.usageCodeTitle": { en: "Usage", km: "ការប្រើប្រាស់", zh: "用法" },
  "blog.laravel.authorization.summary1": {
    en: '<strong>Gates</strong> — simple closure-based authorization checks',
    km: '<strong>Gates</strong> — ការត្រួតពិនិត្យអនុញ្ញាតដោយប្រើ closure សាមញ្ញ',
    zh: '<strong>Gates</strong> — 基于闭包的简单授权检查',
  },
  "blog.laravel.authorization.summary2": {
    en: '<strong>Policies</strong> — model-specific authorization organized by actions',
    km: '<strong>Policies</strong> — ការអនុញ្ញាតជាក់លាក់តាម model រៀបចំតាមសកម្មភាព',
    zh: '<strong>Policies</strong> — 按操作组织的特定模型授权',
  },
  "blog.laravel.authorization.summary3": {
    en: '<strong>$this->authorize()</strong> — check in controllers (throws 403)',
    km: '<strong>$this->authorize()</strong> — ពិនិត្យក្នុង controllers (បោះ 403)',
    zh: '<strong>$this->authorize()</strong> — 在控制器中检查（抛出 403）',
  },
  "blog.laravel.authorization.summary4": {
    en: '<strong>@can / @cannot</strong> — conditional rendering in Blade',
    km: '<strong>@can / @cannot</strong> — ការបង្ហាញតាមលក្ខខណ្ឌក្នុង Blade',
    zh: '<strong>@can / @cannot</strong> — 在 Blade 中条件渲染',
  },
  "blog.laravel.authorization.summary5": {
    en: '<strong>can: middleware</strong> — protect routes with authorization',
    km: '<strong>can: middleware</strong> — ការពារ routes ដោយប្រើ authorization',
    zh: '<strong>can: middleware</strong> — 使用授权保护路由',
  },

  // Laravel Encryption
  "blog.laravel.encryption.title": { en: "Laravel Encryption", km: "ការអ៊ិនគ្រីបក្នុង Laravel", zh: "Laravel 加密" },
  "blog.laravel.encryption.intro": {
    en: 'Encryption turns readable data into scrambled text that can only be read back with a secret key. Laravel uses <strong>AES-256-CBC</strong> encryption — one of the strongest encryption standards. It\'s two-way: you can encrypt data and later decrypt it back to the original value.',
    km: 'ការអ៊ិនគ្រីបបំប្លែងទិន្នន័យដែលអាចអានបានទៅជាអត្ថបទដែលត្រូវបានកូដ ហើយអាចអានឡើងវិញបានតែជាមួយសោសម្ងាត់ប៉ុណ្ណោះ។ Laravel ប្រើការអ៊ិនគ្រីប <strong>AES-256-CBC</strong> — មួយក្នុងចំណោមស្តង់ដារអ៊ិនគ្រីបដែលខ្លាំងបំផុត។ វាមានពីរផ្លូវ: អ្នកអាចអ៊ិនគ្រីបទិន្នន័យ ហើយក្រោយមកឌីគ្រីបវាត្រឡប់ទៅតម្លៃដើមវិញ។',
    zh: '加密将可读数据转换为只有使用密钥才能读取的乱码文本。Laravel 使用 <strong>AES-256-CBC</strong> 加密——最强大的加密标准之一。它是双向的：你可以加密数据，之后再解密回原始值。',
  },
  "blog.laravel.encryption.vsHashingTitle": { en: "Encryption vs Hashing", km: "ការអ៊ិនគ្រីប និង Hashing", zh: "加密与哈希" },
  "blog.laravel.encryption.thEncryption": { en: "Encryption", km: "ការអ៊ិនគ្រីប", zh: "加密" },
  "blog.laravel.encryption.thHashing": { en: "Hashing", km: "Hashing", zh: "哈希" },
  "blog.laravel.encryption.direction": { en: "Direction", km: "ទិសដៅ", zh: "方向" },
  "blog.laravel.encryption.directionEncrypt": { en: "Two-way (encrypt & decrypt)", km: "ពីរផ្លូវ (អ៊ិនគ្រីប និងឌីគ្រីប)", zh: "双向（加密和解密）" },
  "blog.laravel.encryption.directionHash": { en: "One-way (cannot reverse)", km: "មួយផ្លូវ (មិនអាចត្រឡប់វិញបាន)", zh: "单向（不可逆）" },
  "blog.laravel.encryption.useFor": { en: "Use for", km: "ប្រើសម្រាប់", zh: "用途" },
  "blog.laravel.encryption.useForEncrypt": { en: "Data you need to read back (API keys, personal data)", km: "ទិន្នន័យដែលអ្នកត្រូវការអានវិញ (API keys, ទិន្នន័យផ្ទាល់ខ្លួន)", zh: "需要读取回的数据（API 密钥、个人数据）" },
  "blog.laravel.encryption.useForHash": { en: "Data you never need to read (passwords)", km: "ទិន្នន័យដែលអ្នកមិនត្រូវការអានវិញ (ពាក្យសម្ងាត់)", zh: "不需要读取的数据（密码）" },
  "blog.laravel.encryption.example": { en: "Example", km: "ឧទាហរណ៍", zh: "示例" },
  "blog.laravel.encryption.exampleEncrypt": { en: '"hello" → "eyJpdiI6..." → "hello"', km: '"hello" → "eyJpdiI6..." → "hello"', zh: '"hello" → "eyJpdiI6..." → "hello"' },
  "blog.laravel.encryption.exampleHash": { en: '"hello" → "$2y$12$..." (cannot get "hello" back)', km: '"hello" → "$2y$12$..." (មិនអាចយក "hello" វិញបាន)', zh: '"hello" → "$2y$12$..."（无法取回 "hello"）' },
  "blog.laravel.encryption.appKeyTitle": { en: "1. The Encryption Key (APP_KEY)", km: "1. សោអ៊ិនគ្រីប (APP_KEY)", zh: "1. 加密密钥（APP_KEY）" },
  "blog.laravel.encryption.appKeyDesc": {
    en: 'Laravel uses the <code class="inline-code">APP_KEY</code> in your <code class="inline-code">.env</code> file as the encryption key. This is generated when you create a Laravel project.',
    km: 'Laravel ប្រើ <code class="inline-code">APP_KEY</code> ក្នុងឯកសារ <code class="inline-code">.env</code> របស់អ្នកជាសោអ៊ិនគ្រីប។ វាត្រូវបានបង្កើតនៅពេលអ្នកបង្កើតគម្រោង Laravel។',
    zh: 'Laravel 使用你的 <code class="inline-code">.env</code> 文件中的 <code class="inline-code">APP_KEY</code> 作为加密密钥。这在你创建 Laravel 项目时自动生成。',
  },
  "blog.laravel.encryption.warning": {
    en: '<strong>Warning:</strong> Never share or expose your APP_KEY. If someone gets it, they can decrypt all your encrypted data. If you change it, all previously encrypted data becomes unreadable.',
    km: '<strong>ព្រមាន:</strong> កុំចែករំលែក ឬបង្ហាញ APP_KEY របស់អ្នក។ ប្រសិនបើនរណាម្នាក់ទទួលបានវា ពួកគេអាចឌីគ្រីបទិន្នន័យដែលបានអ៊ិនគ្រីបទាំងអស់របស់អ្នក។ ប្រសិនបើអ្នកផ្លាស់ប្ដូរវា ទិន្នន័យដែលបានអ៊ិនគ្រីបពីមុនទាំងអស់នឹងមិនអាចអានបាន។',
    zh: '<strong>警告：</strong>永远不要分享或暴露你的 APP_KEY。如果有人获取了它，他们可以解密你所有的加密数据。如果你更改了它，所有之前加密的数据将无法读取。',
  },
  "blog.laravel.encryption.encryptDecryptTitle": { en: "2. Encrypting & Decrypting", km: "2. ការអ៊ិនគ្រីប និងឌីគ្រីប", zh: "2. 加密与解密" },
  "blog.laravel.encryption.codeBasicEncryption": { en: "Basic Encryption", km: "ការអ៊ិនគ្រីបមូលដ្ឋាន", zh: "基本加密" },
  "blog.laravel.encryption.codeEncryptAny": { en: "Encrypt any data type (not just strings)", km: "អ៊ិនគ្រីបប្រភេទទិន្នន័យណាមួយ (មិនមែនតែ strings ប៉ុណ្ណោះ)", zh: "加密任何数据类型（不仅仅是字符串）" },
  "blog.laravel.encryption.errorTitle": { en: "3. Handling Decryption Errors", km: "3. ការដោះស្រាយកំហុសក្នុងការឌីគ្រីប", zh: "3. 处理解密错误" },
  "blog.laravel.encryption.errorDesc": {
    en: 'If decryption fails (wrong key, corrupted data), Laravel throws a <code class="inline-code">DecryptException</code>. Always handle this:',
    km: 'ប្រសិនបើការឌីគ្រីបបរាជ័យ (សោខុស ទិន្នន័យខូច) Laravel បោះ <code class="inline-code">DecryptException</code>។ ត្រូវដោះស្រាយវាជានិច្ច:',
    zh: '如果解密失败（密钥错误、数据损坏），Laravel 会抛出 <code class="inline-code">DecryptException</code>。务必处理此异常：',
  },
  "blog.laravel.encryption.codeSafeDecryption": { en: "Safe decryption", km: "ការឌីគ្រីបដោយសុវត្ថិភាព", zh: "安全解密" },
  "blog.laravel.encryption.autoEncryptTitle": { en: "4. Auto-Encrypt Model Fields", km: "4. អ៊ិនគ្រីបវាល Model ដោយស្វ័យប្រវត្តិ", zh: "4. 自动加密模型字段" },
  "blog.laravel.encryption.autoEncryptDesc": {
    en: 'Use Eloquent\'s <code class="inline-code">encrypted</code> cast to automatically encrypt/decrypt fields when saving/reading from the database:',
    km: 'ប្រើ <code class="inline-code">encrypted</code> cast របស់ Eloquent ដើម្បីអ៊ិនគ្រីប/ឌីគ្រីបវាលដោយស្វ័យប្រវត្តិនៅពេលរក្សាទុក/អានពីមូលដ្ឋានទិន្នន័យ:',
    zh: '使用 Eloquent 的 <code class="inline-code">encrypted</code> 类型转换，在保存/读取数据库时自动加密/解密字段：',
  },
  "blog.laravel.encryption.codeAutoUsage": { en: "Usage — automatic, no extra code needed", km: "ការប្រើប្រាស់ — ស្វ័យប្រវត្តិ មិនត្រូវការកូដបន្ថែម", zh: "用法——自动化，无需额外代码" },
  "blog.laravel.encryption.tip": {
    en: '<strong>Best practice:</strong> Use encrypted casts for sensitive data like SSNs, API keys, personal medical data, payment info — anything you need to store but must protect.',
    km: '<strong>ការអនុវត្តល្អបំផុត:</strong> ប្រើ encrypted casts សម្រាប់ទិន្នន័យរសើបដូចជា SSNs, API keys, ទិន្នន័យវេជ្ជសាស្ត្រផ្ទាល់ខ្លួន, ព័ត៌មានការទូទាត់ — អ្វីក៏ដោយដែលអ្នកត្រូវការរក្សាទុកប៉ុន្តែត្រូវការពារ។',
    zh: '<strong>最佳实践：</strong>对敏感数据使用加密类型转换，如社会安全号码、API 密钥、个人医疗数据、支付信息——任何需要存储但必须保护的数据。',
  },
  "blog.laravel.encryption.practicalTitle": { en: "5. Practical Example", km: "5. ឧទាហរណ៍ជាក់ស្ដែង", zh: "5. 实际示例" },
  "blog.laravel.encryption.practicalDesc": { en: "Storing third-party API credentials securely:", km: "រក្សាទុកព័ត៌មានសម្ងាត់ API ភាគីទីបីដោយសុវត្ថិភាព:", zh: "安全存储第三方 API 凭证：" },
  "blog.laravel.encryption.codeMigration": { en: "Migration", km: "Migration", zh: "迁移" },
  "blog.laravel.encryption.summary1": {
    en: '<strong>AES-256-CBC</strong> — Laravel uses strong encryption by default',
    km: '<strong>AES-256-CBC</strong> — Laravel ប្រើការអ៊ិនគ្រីបខ្លាំងតាមលំនាំដើម',
    zh: '<strong>AES-256-CBC</strong> — Laravel 默认使用强加密',
  },
  "blog.laravel.encryption.summary2": {
    en: '<strong>APP_KEY</strong> — the secret key that encrypts everything',
    km: '<strong>APP_KEY</strong> — សោសម្ងាត់ដែលអ៊ិនគ្រីបអ្វីៗទាំងអស់',
    zh: '<strong>APP_KEY</strong> — 加密所有内容的密钥',
  },
  "blog.laravel.encryption.summary3": {
    en: '<strong>Crypt facade</strong> — encrypt() / decrypt() for manual use',
    km: '<strong>Crypt facade</strong> — encrypt() / decrypt() សម្រាប់ប្រើដោយដៃ',
    zh: '<strong>Crypt facade</strong> — encrypt() / decrypt() 用于手动操作',
  },
  "blog.laravel.encryption.summary4": {
    en: '<strong>Encrypted casts</strong> — auto-encrypt model fields in database',
    km: '<strong>Encrypted casts</strong> — អ៊ិនគ្រីបវាល model ដោយស្វ័យប្រវត្តិក្នុងមូលដ្ឋានទិន្នន័យ',
    zh: '<strong>Encrypted casts</strong> — 自动加密数据库中的模型字段',
  },
  "blog.laravel.encryption.summary5": {
    en: '<strong>Two-way</strong> — use for data you need to read back (not passwords)',
    km: '<strong>Two-way</strong> — ប្រើសម្រាប់ទិន្នន័យដែលអ្នកត្រូវការអានវិញ (មិនមែនពាក្យសម្ងាត់)',
    zh: '<strong>Two-way</strong> — 用于需要读取回的数据（不是密码）',
  },

  // Laravel Hashing
  "blog.laravel.hashing.title": { en: "Laravel Hashing", km: "Laravel Hashing", zh: "Laravel 哈希" },
  "blog.laravel.hashing.intro": {
    en: 'Hashing is a <strong>one-way</strong> process that turns a password (or any data) into a fixed-length scrambled string. Unlike encryption, you <strong>cannot reverse</strong> a hash — you can only check if a given value matches the hash. This is exactly what you want for passwords: store the hash, and verify against it on login.',
    km: 'Hashing គឺជាដំណើរការ<strong>មួយផ្លូវ</strong>ដែលបំប្លែងពាក្យសម្ងាត់ (ឬទិន្នន័យណាមួយ) ទៅជាខ្សែអក្សរដែលមានប្រវែងថេរ។ មិនដូចការអ៊ិនគ្រីប អ្នក<strong>មិនអាចបញ្ច្រាស់</strong> hash បានទេ — អ្នកអាចពិនិត្យបានតែថាតម្លៃដែលបានផ្តល់ត្រូវគ្នានឹង hash ដែរឬទេ។ នេះពិតជាអ្វីដែលអ្នកត្រូវការសម្រាប់ពាក្យសម្ងាត់៖ រក្សាទុក hash ហើយផ្ទៀងផ្ទាត់វានៅពេលចូល។',
    zh: '哈希是一种<strong>单向</strong>过程，将密码（或任何数据）转换为固定长度的混淆字符串。与加密不同，你<strong>无法逆转</strong>哈希 — 你只能检查给定值是否与哈希匹配。这正是密码所需要的：存储哈希，并在登录时对其进行验证。',
  },
  "blog.laravel.hashing.whyTitle": { en: "Why Hash Passwords?", km: "ហេតុអ្វីត្រូវ Hash ពាក្យសម្ងាត់?", zh: "为什么要哈希密码？" },
  "blog.laravel.hashing.codeNeverDoThis": { en: "Never do this", km: "កុំធ្វើបែបនេះ", zh: "永远不要这样做" },
  "blog.laravel.hashing.codeAlwaysDoThis": { en: "Always do this", km: "ត្រូវធ្វើបែបនេះ", zh: "始终这样做" },
  "blog.laravel.hashing.compromised": {
    en: 'If your database is ever compromised, hackers get useless hash strings instead of real passwords.',
    km: 'ប្រសិនបើមូលដ្ឋានទិន្នន័យរបស់អ្នកត្រូវបានលួច ពួក hacker នឹងទទួលបានតែខ្សែអក្សរ hash ដែលគ្មានប្រយោជន៍ ជំនួសឱ្យពាក្យសម្ងាត់ពិត។',
    zh: '如果你的数据库遭到泄露，黑客得到的只是无用的哈希字符串，而不是真实密码。',
  },
  "blog.laravel.hashing.bcryptTitle": { en: "1. Bcrypt (Default)", km: "1. Bcrypt (លំនាំដើម)", zh: "1. Bcrypt（默认）" },
  "blog.laravel.hashing.bcryptDesc": {
    en: 'Laravel uses <strong>Bcrypt</strong> by default. It\'s slow on purpose — this makes brute-force attacks impractical.',
    km: 'Laravel ប្រើ <strong>Bcrypt</strong> ជាលំនាំដើម។ វាយឺតដោយចេតនា — នេះធ្វើឱ្យការវាយប្រហារ brute-force មិនអាចអនុវត្តបាន។',
    zh: 'Laravel 默认使用 <strong>Bcrypt</strong>。它故意设计得很慢 — 这使得暴力破解攻击变得不切实际。',
  },
  "blog.laravel.hashing.codeUsingHash": { en: "Using Hash facade", km: "ការប្រើ Hash facade", zh: "使用 Hash 门面" },
  "blog.laravel.hashing.tipDifferentHashes": {
    en: '<strong>Why different hashes?</strong> Bcrypt adds a random "salt" each time. This prevents attackers from using pre-computed hash tables (rainbow tables). Both hashes still verify correctly against the original password.',
    km: '<strong>ហេតុអ្វីបាន hash ខុសគ្នា?</strong> Bcrypt បន្ថែម "salt" ចៃដន្យរាល់ពេល។ នេះការពារអ្នកវាយប្រហារពីការប្រើតារាង hash ដែលបានគណនាជាមុន (rainbow tables)។ hash ទាំងពីរនៅតែផ្ទៀងផ្ទាត់បានត្រឹមត្រូវជាមួយពាក្យសម្ងាត់ដើម។',
    zh: '<strong>为什么哈希不同？</strong> Bcrypt 每次都添加一个随机的"盐值"。这可以防止攻击者使用预计算的哈希表（彩虹表）。两个哈希仍然可以正确验证原始密码。',
  },
  "blog.laravel.hashing.roundsTitle": { en: "2. Configuring Bcrypt Rounds", km: "2. ការកំណត់ Bcrypt Rounds", zh: "2. 配置 Bcrypt 轮次" },
  "blog.laravel.hashing.roundsDesc": {
    en: '"Rounds" control how slow hashing is. More rounds = more secure but slower. Default is 12.',
    km: '"Rounds" គ្រប់គ្រងថាការ hash យឺតប៉ុណ្ណា។ Rounds ច្រើន = សុវត្ថិភាពច្រើនប៉ុន្តែយឺតជាង។ លំនាំដើមគឺ 12។',
    zh: '"轮次"控制哈希的速度。更多轮次 = 更安全但更慢。默认值为 12。',
  },
  "blog.laravel.hashing.codeCustomRounds": { en: "Custom rounds per hash", km: "Rounds ផ្ទាល់ខ្លួនសម្រាប់ hash នីមួយៗ", zh: "每次哈希自定义轮次" },
  "blog.laravel.hashing.thRounds": { en: "Rounds", km: "Rounds", zh: "轮次" },
  "blog.laravel.hashing.thSpeed": { en: "Speed", km: "ល្បឿន", zh: "速度" },
  "blog.laravel.hashing.thUseCase": { en: "Use case", km: "ករណីប្រើប្រាស់", zh: "使用场景" },
  "blog.laravel.hashing.useCaseTesting": { en: "Testing / development", km: "ការសាកល្បង / ការអភិវឌ្ឍន៍", zh: "测试 / 开发" },
  "blog.laravel.hashing.useCaseDefault": { en: "Default — good balance", km: "លំនាំដើម — តុល្យភាពល្អ", zh: "默认 — 良好的平衡" },
  "blog.laravel.hashing.useCaseHigh": { en: "High security applications", km: "កម្មវិធីសុវត្ថិភាពខ្ពស់", zh: "高安全性应用" },
  "blog.laravel.hashing.argon2Title": { en: "3. Argon2 (Alternative)", km: "3. Argon2 (ជម្រើសផ្សេង)", zh: "3. Argon2（替代方案）" },
  "blog.laravel.hashing.argon2Desc": {
    en: 'Argon2 is a newer algorithm that won the Password Hashing Competition. It\'s more resistant to GPU-based attacks.',
    km: 'Argon2 គឺជា algorithm ថ្មីមួយដែលបានឈ្នះការប្រកួត Password Hashing Competition។ វាមានភាពធន់ជាងចំពោះការវាយប្រហារដោយ GPU។',
    zh: 'Argon2 是一种较新的算法，赢得了密码哈希竞赛。它对基于 GPU 的攻击更具抵抗力。',
  },
  "blog.laravel.hashing.codeUsageSameApi": { en: "Usage (same API!)", km: "ការប្រើប្រាស់ (API ដូចគ្នា!)", zh: "用法（相同的 API！）" },
  "blog.laravel.hashing.rehashTitle": { en: "4. Auto-Rehashing", km: "4. ការ Rehash ស្វ័យប្រវត្តិ", zh: "4. 自动重新哈希" },
  "blog.laravel.hashing.rehashDesc": {
    en: 'If you change your hashing configuration (e.g., increase rounds), old hashes still work. Laravel can automatically rehash on login:',
    km: 'ប្រសិនបើអ្នកផ្លាស់ប្តូរការកំណត់ hashing (ឧ. បង្កើន rounds) hash ចាស់នៅតែដំណើរការ។ Laravel អាច rehash ដោយស្វ័យប្រវត្តិនៅពេលចូល៖',
    zh: '如果你更改了哈希配置（例如增加轮次），旧哈希仍然有效。Laravel 可以在登录时自动重新哈希：',
  },
  "blog.laravel.hashing.codeCheckRehash": { en: "Check if rehash is needed", km: "ពិនិត្យថាតើត្រូវការ rehash ដែរឬទេ", zh: "检查是否需要重新哈希" },
  "blog.laravel.hashing.codeCommonLogin": { en: "Common pattern in login", km: "ទម្រង់ទូទៅក្នុងការចូល", zh: "登录中的常见模式" },
  "blog.laravel.hashing.patternsTitle": { en: "5. Common Patterns", km: "5. ទម្រង់ទូទៅ", zh: "5. 常见模式" },
  "blog.laravel.hashing.codeRegistration": { en: "Registration", km: "ការចុះឈ្មោះ", zh: "注册" },
  "blog.laravel.hashing.codeChangePassword": { en: "Change Password", km: "ផ្លាស់ប្តូរពាក្យសម្ងាត់", zh: "更改密码" },
  "blog.laravel.hashing.codeAutoHash": { en: "Auto-hash with Eloquent mutator", km: "Auto-hash ជាមួយ Eloquent mutator", zh: "使用 Eloquent 修改器自动哈希" },
  "blog.laravel.hashing.summary1": {
    en: '<strong>One-way</strong> — hashes cannot be reversed (unlike encryption)',
    km: '<strong>One-way</strong> — hash មិនអាចបញ្ច្រាស់បានទេ (មិនដូចការអ៊ិនគ្រីប)',
    zh: '<strong>单向</strong> — 哈希无法逆转（与加密不同）',
  },
  "blog.laravel.hashing.summary2": {
    en: '<strong>Hash::make()</strong> — create a hash from a password',
    km: '<strong>Hash::make()</strong> — បង្កើត hash ពីពាក្យសម្ងាត់',
    zh: '<strong>Hash::make()</strong> — 从密码创建哈希',
  },
  "blog.laravel.hashing.summary3": {
    en: '<strong>Hash::check()</strong> — verify a password matches a hash',
    km: '<strong>Hash::check()</strong> — ផ្ទៀងផ្ទាត់ថាពាក្យសម្ងាត់ត្រូវគ្នានឹង hash',
    zh: '<strong>Hash::check()</strong> — 验证密码是否与哈希匹配',
  },
  "blog.laravel.hashing.summary4": {
    en: '<strong>Bcrypt</strong> — default, 12 rounds, good for most apps',
    km: '<strong>Bcrypt</strong> — លំនាំដើម ១២ rounds ល្អសម្រាប់កម្មវិធីភាគច្រើន',
    zh: '<strong>Bcrypt</strong> — 默认，12 轮，适用于大多数应用',
  },
  "blog.laravel.hashing.summary5": {
    en: '<strong>Argon2</strong> — alternative, more resistant to GPU attacks',
    km: '<strong>Argon2</strong> — ជម្រើសផ្សេង ធន់ជាងចំពោះការវាយប្រហារដោយ GPU',
    zh: '<strong>Argon2</strong> — 替代方案，对 GPU 攻击更具抵抗力',
  },
  "blog.laravel.hashing.summary6": {
    en: '<strong>needsRehash()</strong> — auto-upgrade hashes when config changes',
    km: '<strong>needsRehash()</strong> — ធ្វើឱ្យ hash ប្រសើរឡើងដោយស្វ័យប្រវត្តិនៅពេលការកំណត់ផ្លាស់ប្តូរ',
    zh: '<strong>needsRehash()</strong> — 配置更改时自动升级哈希',
  },

  // Laravel Password Reset
  "blog.laravel.passwords.title": {
    en: "Laravel Password Reset",
    km: "Laravel កំណត់ពាក្យសម្ងាត់ឡើងវិញ",
    zh: "Laravel 密码重置",
  },
  "blog.laravel.passwords.intro": {
    en: "Users forget passwords — it happens all the time. Laravel provides a complete password reset system out of the box: send a reset link via email, verify the token, and let the user set a new password. Here's how to implement it step by step.",
    km: "អ្នកប្រើប្រាស់ភ្លេចពាក្យសម្ងាត់ — វាកើតឡើងជាញឹកញាប់។ Laravel ផ្តល់ប្រព័ន្ធកំណត់ពាក្យសម្ងាត់ឡើងវិញពេញលេញ៖ ផ្ញើតំណកំណត់ឡើងវិញតាមអ៊ីមែល ផ្ទៀងផ្ទាត់ token និងអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់កំណត់ពាក្យសម្ងាត់ថ្មី។ នេះជារបៀបអនុវត្តវាជាជំហានៗ។",
    zh: "用户忘记密码是常有的事。Laravel 提供了一个完整的密码重置系统：通过电子邮件发送重置链接、验证令牌，并让用户设置新密码。以下是逐步实现的方法。",
  },
  "blog.laravel.passwords.howItWorksTitle": {
    en: "How Password Reset Works",
    km: "របៀបដែលការកំណត់ពាក្យសម្ងាត់ឡើងវិញដំណើរការ",
    zh: "密码重置的工作原理",
  },
  "blog.laravel.passwords.step1": {
    en: 'User clicks "Forgot Password?" and enters their email',
    km: 'អ្នកប្រើប្រាស់ចុច "ភ្លេចពាក្យសម្ងាត់?" ហើយបញ្ចូលអ៊ីមែលរបស់ពួកគេ',
    zh: '用户点击"忘记密码？"并输入他们的电子邮件',
  },
  "blog.laravel.passwords.step2": {
    en: 'Laravel generates a unique token and stores it in the <code class="inline-code">password_reset_tokens</code> table',
    km: 'Laravel បង្កើត token ពិសេសមួយ ហើយរក្សាទុកវានៅក្នុងតារាង <code class="inline-code">password_reset_tokens</code>',
    zh: 'Laravel 生成一个唯一令牌并将其存储在 <code class="inline-code">password_reset_tokens</code> 表中',
  },
  "blog.laravel.passwords.step3": {
    en: "Laravel sends an email with a reset link containing the token",
    km: "Laravel ផ្ញើអ៊ីមែលដែលមានតំណកំណត់ឡើងវិញដែលមាន token",
    zh: "Laravel 发送一封包含重置链接和令牌的电子邮件",
  },
  "blog.laravel.passwords.step4": {
    en: "User clicks the link, enters a new password",
    km: "អ្នកប្រើប្រាស់ចុចតំណ បញ្ចូលពាក្យសម្ងាត់ថ្មី",
    zh: "用户点击链接，输入新密码",
  },
  "blog.laravel.passwords.step5": {
    en: "Laravel verifies the token, updates the password, and deletes the token",
    km: "Laravel ផ្ទៀងផ្ទាត់ token ធ្វើបច្ចុប្បន្នភាពពាក្យសម្ងាត់ ហើយលុប token",
    zh: "Laravel 验证令牌、更新密码并删除令牌",
  },
  "blog.laravel.passwords.dbSetupTitle": {
    en: "1. Database Setup",
    km: "1. ការដំឡើងមូលដ្ឋានទិន្នន័យ",
    zh: "1. 数据库设置",
  },
  "blog.laravel.passwords.dbSetupDesc": {
    en: 'Laravel\'s default migration already creates the <code class="inline-code">password_reset_tokens</code> table. Make sure you\'ve run migrations:',
    km: 'ការផ្លាស់ប្តូរលំនាំដើមរបស់ Laravel បានបង្កើតតារាង <code class="inline-code">password_reset_tokens</code> រួចហើយ។ ត្រូវប្រាកដថាអ្នកបានដំណើរការ migrations:',
    zh: 'Laravel 的默认迁移已经创建了 <code class="inline-code">password_reset_tokens</code> 表。确保你已经运行了迁移：',
  },
  "blog.laravel.passwords.migrationTitle": {
    en: "The migration looks like this",
    km: "ការផ្លាស់ប្តូរមើលទៅដូចនេះ",
    zh: "迁移代码如下",
  },
  "blog.laravel.passwords.requestLinkTitle": {
    en: "2. Request Password Reset Link",
    km: "2. ស្នើសុំតំណកំណត់ពាក្យសម្ងាត់ឡើងវិញ",
    zh: "2. 请求密码重置链接",
  },
  "blog.laravel.passwords.requestLinkDesc": {
    en: "First, create the form where users enter their email, and the controller that sends the reset link:",
    km: "ដំបូង បង្កើតទម្រង់ដែលអ្នកប្រើប្រាស់បញ្ចូលអ៊ីមែលរបស់ពួកគេ និង controller ដែលផ្ញើតំណកំណត់ឡើងវិញ:",
    zh: "首先，创建用户输入电子邮件的表单，以及发送重置链接的控制器：",
  },
  "blog.laravel.passwords.sendLinkTitle": {
    en: "Controller — Send the link",
    km: "Controller — ផ្ញើតំណ",
    zh: "控制器 — 发送链接",
  },
  "blog.laravel.passwords.resetPasswordTitle": {
    en: "3. Reset the Password",
    km: "3. កំណត់ពាក្យសម្ងាត់ឡើងវិញ",
    zh: "3. 重置密码",
  },
  "blog.laravel.passwords.resetPasswordDesc": {
    en: "When the user clicks the link in the email, they land on the reset form:",
    km: "នៅពេលអ្នកប្រើប្រាស់ចុចតំណក្នុងអ៊ីមែល ពួកគេមកដល់ទម្រង់កំណត់ឡើងវិញ:",
    zh: "当用户点击电子邮件中的链接时，他们会到达重置表单：",
  },
  "blog.laravel.passwords.resetControllerTitle": {
    en: "Controller — Reset password",
    km: "Controller — កំណត់ពាក្យសម្ងាត់ឡើងវិញ",
    zh: "控制器 — 重置密码",
  },
  "blog.laravel.passwords.configTitle": {
    en: "4. Configuration",
    km: "4. ការកំណត់រចនាសម្ព័ន្ធ",
    zh: "4. 配置",
  },
  "blog.laravel.passwords.configTip": {
    en: '<strong>expire:</strong> How many minutes a reset token is valid. After this, the user must request a new link.<br><strong>throttle:</strong> How many seconds a user must wait before requesting another reset email (prevents spam).',
    km: '<strong>expire:</strong> ចំនួននាទីដែល token កំណត់ឡើងវិញមានសុពលភាព។ បន្ទាប់ពីនេះ អ្នកប្រើប្រាស់ត្រូវស្នើសុំតំណថ្មី។<br><strong>throttle:</strong> ចំនួនវិនាទីដែលអ្នកប្រើប្រាស់ត្រូវរង់ចាំមុនពេលស្នើសុំអ៊ីមែលកំណត់ឡើងវិញផ្សេងទៀត (ការពារការផ្ញើរសារឥតបានការ)។',
    zh: '<strong>expire:</strong> 重置令牌有效的分钟数。过期后，用户必须请求新的链接。<br><strong>throttle:</strong> 用户在请求另一封重置邮件之前必须等待的秒数（防止垃圾邮件）。',
  },
  "blog.laravel.passwords.customizeEmailTitle": {
    en: "5. Customize the Reset Email",
    km: "5. ប្ដូរអ៊ីមែលកំណត់ឡើងវិញតាមបំណង",
    zh: "5. 自定义重置邮件",
  },
  "blog.laravel.passwords.apiResetTitle": {
    en: "6. API Password Reset (for SPA / Mobile)",
    km: "6. កំណត់ពាក្យសម្ងាត់ឡើងវិញតាម API (សម្រាប់ SPA / Mobile)",
    zh: "6. API 密码重置（用于 SPA / 移动端）",
  },
  "blog.laravel.passwords.apiResetDesc": {
    en: "For Vue/React SPA or mobile apps, return JSON instead of redirects:",
    km: "សម្រាប់ Vue/React SPA ឬកម្មវិធីទូរស័ព្ទ ត្រឡប់ JSON ជំនួសឱ្យការប្តូរទិស:",
    zh: "对于 Vue/React SPA 或移动应用，返回 JSON 而不是重定向：",
  },
  "blog.laravel.passwords.protectApiTitle": {
    en: "Protect API routes",
    km: "ការពារផ្លូវ API",
    zh: "保护 API 路由",
  },
  "blog.laravel.passwords.confirmTitle": {
    en: "7. Password Confirmation (for Sensitive Actions)",
    km: "7. ការបញ្ជាក់ពាក្យសម្ងាត់ (សម្រាប់សកម្មភាពរសើប)",
    zh: "7. 密码确认（用于敏感操作）",
  },
  "blog.laravel.passwords.confirmDesc": {
    en: "Require users to re-enter their password before performing sensitive actions (like changing email or deleting account):",
    km: "តម្រូវឱ្យអ្នកប្រើប្រាស់បញ្ចូលពាក្យសម្ងាត់ម្តងទៀតមុនពេលអនុវត្តសកម្មភាពរសើប (ដូចជាការផ្លាស់ប្តូរអ៊ីមែល ឬការលុបគណនី):",
    zh: "要求用户在执行敏感操作（如更改电子邮件或删除账户）之前重新输入密码：",
  },
  "blog.laravel.passwords.confirmTip": {
    en: '<strong>Timeout:</strong> By default, once confirmed, the user won\'t be asked again for 3 hours. Configure this with <code class="inline-code">password_timeout</code> in <code class="inline-code">config/auth.php</code>.',
    km: '<strong>Timeout:</strong> តាមលំនាំដើម នៅពេលបានបញ្ជាក់រួច អ្នកប្រើប្រាស់នឹងមិនត្រូវបានសួរម្តងទៀតក្នុងរយៈពេល 3 ម៉ោង។ កំណត់រចនាសម្ព័ន្ធនេះជាមួយ <code class="inline-code">password_timeout</code> នៅក្នុង <code class="inline-code">config/auth.php</code>។',
    zh: '<strong>Timeout:</strong> 默认情况下，确认后用户在 3 小时内不会再被要求输入。通过 <code class="inline-code">config/auth.php</code> 中的 <code class="inline-code">password_timeout</code> 进行配置。',
  },
  "blog.laravel.passwords.summary1": {
    en: '<strong>Password::sendResetLink()</strong> — sends reset email with token',
    km: '<strong>Password::sendResetLink()</strong> — ផ្ញើអ៊ីមែលកំណត់ឡើងវិញជាមួយ token',
    zh: '<strong>Password::sendResetLink()</strong> — 发送带有令牌的重置邮件',
  },
  "blog.laravel.passwords.summary2": {
    en: '<strong>Password::reset()</strong> — validates token and updates password',
    km: '<strong>Password::reset()</strong> — ផ្ទៀងផ្ទាត់ token និងធ្វើបច្ចុប្បន្នភាពពាក្យសម្ងាត់',
    zh: '<strong>Password::reset()</strong> — 验证令牌并更新密码',
  },
  "blog.laravel.passwords.summary3": {
    en: '<strong>Token expiry</strong> — configurable, default 60 minutes',
    km: '<strong>ការផុតកំណត់ Token</strong> — អាចកំណត់រចនាសម្ព័ន្ធបាន លំនាំដើម 60 នាទី',
    zh: '<strong>令牌过期</strong> — 可配置，默认 60 分钟',
  },
  "blog.laravel.passwords.summary4": {
    en: '<strong>Customizable email</strong> — modify content and URL',
    km: '<strong>អ៊ីមែលដែលអាចប្ដូរតាមបំណង</strong> — កែប្រែមាតិកា និង URL',
    zh: '<strong>可自定义邮件</strong> — 修改内容和 URL',
  },
  "blog.laravel.passwords.summary5": {
    en: '<strong>API support</strong> — return JSON for SPA/mobile apps',
    km: '<strong>ការគាំទ្រ API</strong> — ត្រឡប់ JSON សម្រាប់កម្មវិធី SPA/ទូរស័ព្ទ',
    zh: '<strong>API 支持</strong> — 为 SPA/移动应用返回 JSON',
  },
  "blog.laravel.passwords.summary6": {
    en: '<strong>Password confirmation</strong> — re-verify for sensitive actions',
    km: '<strong>ការបញ្ជាក់ពាក្យសម្ងាត់</strong> — ផ្ទៀងផ្ទាត់ម្តងទៀតសម្រាប់សកម្មភាពរសើប',
    zh: '<strong>密码确认</strong> — 对敏感操作进行重新验证',
  },
  "blog.laravel.verification.title": {
    en: "Laravel Email Verification",
    km: "ការផ្ទៀងផ្ទាត់អ៊ីមែល Laravel",
    zh: "Laravel 邮箱验证",
  },
  "blog.laravel.verification.intro": {
    en: "Email verification ensures that users provide a valid email address when they register. Laravel makes this easy — it sends a verification email with a signed link, and you can restrict certain routes to only verified users.",
    km: "ការផ្ទៀងផ្ទាត់អ៊ីមែលធានាថាអ្នកប្រើប្រាស់ផ្តល់អាសយដ្ឋានអ៊ីមែលត្រឹមត្រូវនៅពេលពួកគេចុះឈ្មោះ។ Laravel ធ្វើឱ្យវាងាយស្រួល — វាផ្ញើអ៊ីមែលផ្ទៀងផ្ទាត់ជាមួយតំណដែលបានចុះហត្ថលេខា ហើយអ្នកអាចកំណត់ផ្លូវមួយចំនួនសម្រាប់តែអ្នកប្រើប្រាស់ដែលបានផ្ទៀងផ្ទាត់ប៉ុណ្ណោះ។",
    zh: "邮箱验证确保用户在注册时提供有效的电子邮件地址。Laravel 使这变得简单——它会发送一封带有签名链接的验证邮件，你可以将某些路由限制为仅允许已验证的用户访问。",
  },
  "blog.laravel.verification.step1Title": {
    en: "1. Prepare the User Model",
    km: "1. រៀបចំ User Model",
    zh: "1. 准备用户模型",
  },
  "blog.laravel.verification.step1Desc": {
    en: 'Your User model must implement the <code class="inline-code">MustVerifyEmail</code> interface:',
    km: 'User model របស់អ្នកត្រូវតែអនុវត្ត interface <code class="inline-code">MustVerifyEmail</code>:',
    zh: '你的 User 模型必须实现 <code class="inline-code">MustVerifyEmail</code> 接口：',
  },
  "blog.laravel.verification.step1Tip": {
    en: '<strong>Important:</strong> The <code class="inline-code">users</code> table must have an <code class="inline-code">email_verified_at</code> column. Laravel\'s default migration already includes this.',
    km: '<strong>សំខាន់:</strong> តារាង <code class="inline-code">users</code> ត្រូវតែមានជួរឈរ <code class="inline-code">email_verified_at</code>។ ការ migration លំនាំដើមរបស់ Laravel រួមបញ្ចូលវារួចហើយ។',
    zh: '<strong>重要：</strong> <code class="inline-code">users</code> 表必须有一个 <code class="inline-code">email_verified_at</code> 列。Laravel 的默认迁移已经包含了这个。',
  },
  "blog.laravel.verification.step2Title": {
    en: "2. Verification Routes",
    km: "2. ផ្លូវផ្ទៀងផ្ទាត់",
    zh: "2. 验证路由",
  },
  "blog.laravel.verification.step2Desc": {
    en: "You need 3 routes: show the verification notice, handle the verification link, and resend the email.",
    km: "អ្នកត្រូវការផ្លូវ 3: បង្ហាញការជូនដំណឹងផ្ទៀងផ្ទាត់ ដោះស្រាយតំណផ្ទៀងផ្ទាត់ និងផ្ញើអ៊ីមែលឡើងវិញ។",
    zh: "你需要 3 个路由：显示验证通知、处理验证链接和重新发送邮件。",
  },
  "blog.laravel.verification.step3Title": {
    en: "3. Protect Routes (Verified Users Only)",
    km: "3. ការពារផ្លូវ (អ្នកប្រើប្រាស់ដែលបានផ្ទៀងផ្ទាត់ប៉ុណ្ណោះ)",
    zh: "3. 保护路由（仅限已验证用户）",
  },
  "blog.laravel.verification.step3Desc": {
    en: 'Use the <code class="inline-code">verified</code> middleware to restrict routes to verified users:',
    km: 'ប្រើ middleware <code class="inline-code">verified</code> ដើម្បីកំណត់ផ្លូវសម្រាប់តែអ្នកប្រើប្រាស់ដែលបានផ្ទៀងផ្ទាត់:',
    zh: '使用 <code class="inline-code">verified</code> 中间件将路由限制为仅允许已验证的用户：',
  },
  "blog.laravel.verification.step3Tip": {
    en: '<strong>How it works:</strong> If an unverified user tries to access a <code class="inline-code">verified</code> route, they get automatically redirected to the <code class="inline-code">verification.notice</code> route.',
    km: '<strong>របៀបដំណើរការ:</strong> ប្រសិនបើអ្នកប្រើប្រាស់ដែលមិនបានផ្ទៀងផ្ទាត់ព្យាយាមចូលផ្លូវ <code class="inline-code">verified</code> ពួកគេនឹងត្រូវបានបញ្ជូនបន្តដោយស្វ័យប្រវត្តិទៅផ្លូវ <code class="inline-code">verification.notice</code>។',
    zh: '<strong>工作原理：</strong> 如果未验证的用户尝试访问 <code class="inline-code">verified</code> 路由，他们会被自动重定向到 <code class="inline-code">verification.notice</code> 路由。',
  },
  "blog.laravel.verification.step4Title": {
    en: "4. Verification Notice View",
    km: "4. ទិដ្ឋភាពជូនដំណឹងផ្ទៀងផ្ទាត់",
    zh: "4. 验证通知视图",
  },
  "blog.laravel.verification.step5Title": {
    en: "5. Send Verification After Registration",
    km: "5. ផ្ញើការផ្ទៀងផ្ទាត់បន្ទាប់ពីការចុះឈ្មោះ",
    zh: "5. 注册后发送验证",
  },
  "blog.laravel.verification.step5Desc": {
    en: 'Laravel automatically sends the verification email when a user registers, thanks to the <code class="inline-code">MustVerifyEmail</code> interface. But if you handle registration manually:',
    km: 'Laravel ផ្ញើអ៊ីមែលផ្ទៀងផ្ទាត់ដោយស្វ័យប្រវត្តិនៅពេលអ្នកប្រើប្រាស់ចុះឈ្មោះ ដោយសារតែ interface <code class="inline-code">MustVerifyEmail</code>។ ប៉ុន្តែប្រសិនបើអ្នកដោះស្រាយការចុះឈ្មោះដោយផ្ទាល់:',
    zh: '当用户注册时，Laravel 会自动发送验证邮件，这要归功于 <code class="inline-code">MustVerifyEmail</code> 接口。但如果你手动处理注册：',
  },
  "blog.laravel.verification.step6Title": {
    en: "6. Customize the Verification Email",
    km: "6. ប្ដូរអ៊ីមែលផ្ទៀងផ្ទាត់តាមបំណង",
    zh: "6. 自定义验证邮件",
  },
  "blog.laravel.verification.step7Title": {
    en: "7. Check Verification Status",
    km: "7. ពិនិត្យស្ថានភាពការផ្ទៀងផ្ទាត់",
    zh: "7. 检查验证状态",
  },
  "blog.laravel.verification.step7CodeTitle": {
    en: "Checking verification in code",
    km: "ពិនិត្យការផ្ទៀងផ្ទាត់ក្នុងកូដ",
    zh: "在代码中检查验证",
  },
  "blog.laravel.verification.summary1": {
    en: '<strong>MustVerifyEmail</strong> — add interface to User model',
    km: '<strong>MustVerifyEmail</strong> — បន្ថែម interface ទៅ User model',
    zh: '<strong>MustVerifyEmail</strong> — 将接口添加到用户模型',
  },
  "blog.laravel.verification.summary2": {
    en: '<strong>3 routes</strong> — notice page, verify link handler, resend',
    km: '<strong>ផ្លូវ 3</strong> — ទំព័រជូនដំណឹង កម្មវិធីដោះស្រាយតំណផ្ទៀងផ្ទាត់ ផ្ញើឡើងវិញ',
    zh: '<strong>3 个路由</strong> — 通知页面、验证链接处理程序、重新发送',
  },
  "blog.laravel.verification.summary3": {
    en: '<strong>verified middleware</strong> — restrict routes to verified users',
    km: '<strong>verified middleware</strong> — កំណត់ផ្លូវសម្រាប់អ្នកប្រើប្រាស់ដែលបានផ្ទៀងផ្ទាត់',
    zh: '<strong>verified 中间件</strong> — 将路由限制为已验证的用户',
  },
  "blog.laravel.verification.summary4": {
    en: '<strong>Registered event</strong> — auto-sends verification email',
    km: '<strong>Registered event</strong> — ផ្ញើអ៊ីមែលផ្ទៀងផ្ទាត់ដោយស្វ័យប្រវត្តិ',
    zh: '<strong>Registered 事件</strong> — 自动发送验证邮件',
  },
  "blog.laravel.verification.summary5": {
    en: '<strong>Customizable</strong> — modify the email template and content',
    km: '<strong>អាចប្ដូរតាមបំណង</strong> — កែប្រែគំរូអ៊ីមែល និងមាតិកា',
    zh: '<strong>可自定义</strong> — 修改邮件模板和内容',
  },

  // Database Basics Blog
  "blog.db.basics.title": {
    en: 'Database Basics: From Zero to Real Tables',
    km: 'មូលដ្ឋានគ្រឹះនៃមូលដ្ឋានទិន្នន័យ៖ ពីសូន្យទៅតារាងពិត',
    zh: '数据库基础：从零到真实表',
  },
  "blog.db.basics.intro": {
    en: 'A database is a structured way to store, organize, and retrieve data. Think of it like a collection of spreadsheets (tables) that are connected to each other. In this guide, we\'ll learn database fundamentals with real-world examples — creating tables for an e-commerce system step by step.',
    km: 'មូលដ្ឋានទិន្នន័យគឺជាវិធីដែលមានរចនាសម្ព័ន្ធដើម្បីរក្សាទុក រៀបចំ និងទាញយកទិន្នន័យ។ គិតថាវាដូចជាបណ្តុំសន្លឹកគណនា (តារាង) ដែលភ្ជាប់គ្នា។ នៅក្នុងមគ្គុទ្ទេសក៍នេះ យើងនឹងរៀនមូលដ្ឋានគ្រឹះនៃមូលដ្ឋានទិន្នន័យជាមួយឧទាហរណ៍ពិតប្រាកដ — បង្កើតតារាងសម្រាប់ប្រព័ន្ធអេឡិចត្រូនិកពាណិជ្ជកម្មជាជំហានៗ។',
    zh: '数据库是一种结构化的方式来存储、组织和检索数据。可以把它想象成一组相互连接的电子表格（表）。在本指南中，我们将通过真实示例学习数据库基础知识——逐步为电子商务系统创建表。',
  },
  "blog.db.basics.whatIsDb": {
    en: '1. What is a Database?',
    km: '1. មូលដ្ឋានទិន្នន័យគឺជាអ្វី?',
    zh: '1. 什么是数据库？',
  },
  "blog.db.basics.whatIsDbDesc": {
    en: 'A <strong>database</strong> is an organized collection of data stored electronically. A <strong>relational database</strong> stores data in <strong>tables</strong> (rows and columns), and tables can be related to each other.',
    km: '<strong>មូលដ្ឋានទិន្នន័យ</strong> គឺជាបណ្តុំទិន្នន័យដែលបានរៀបចំរក្សាទុកតាមអេឡិចត្រូនិក។ <strong>មូលដ្ឋានទិន្នន័យទំនាក់ទំនង</strong> រក្សាទុកទិន្នន័យក្នុង <strong>តារាង</strong> (ជួរដេក និងជួរឈរ) ហើយតារាងអាចទាក់ទងគ្នា។',
    zh: '<strong>数据库</strong>是以电子方式存储的有组织的数据集合。<strong>关系数据库</strong>将数据存储在<strong>表</strong>（行和列）中，表之间可以相互关联。',
  },
  "blog.db.basics.whatIsDbTip": {
    en: '<strong>Real-world analogy:</strong> Imagine a school filing cabinet. Each drawer is a <strong>table</strong> (Students, Teachers, Classes). Each folder in a drawer is a <strong>row</strong> (one student). Each piece of info on the folder is a <strong>column</strong> (name, age, grade).',
    km: '<strong>ឧទាហរណ៍ពិតប្រាកដ៖</strong> ស្រមៃមើលទូឯកសារសាលា។ គ្រប់ថតទាំងអស់គឺជា <strong>តារាង</strong> (សិស្ស គ្រូ ថ្នាក់រៀន)។ ថតនីមួយៗក្នុងថតគឺជា <strong>ជួរដេក</strong> (សិស្សម្នាក់)។ ព័ត៌មាននីមួយៗលើថតគឺជា <strong>ជួរឈរ</strong> (ឈ្មោះ អាយុ ថ្នាក់)។',
    zh: '<strong>现实世界类比：</strong>想象一个学校的文件柜。每个抽屉是一个<strong>表</strong>（学生、教师、班级）。抽屉中的每个文件夹是一<strong>行</strong>（一个学生）。文件夹上的每条信息是一<strong>列</strong>（姓名、年龄、年级）。',
  },
  "blog.db.basics.keyTerms": {
    en: 'Key terms to know:',
    km: 'ពាក្យគន្លឹះដែលត្រូវដឹង៖',
    zh: '需要了解的关键术语：',
  },
  "blog.db.basics.termTable": {
    en: '<strong>Table</strong> — A collection of related data (like a spreadsheet)',
    km: '<strong>តារាង</strong> — បណ្តុំទិន្នន័យដែលទាក់ទង (ដូចជាសន្លឹកគណនា)',
    zh: '<strong>表</strong> — 相关数据的集合（类似电子表格）',
  },
  "blog.db.basics.termRow": {
    en: '<strong>Row (Record)</strong> — A single entry in the table',
    km: '<strong>ជួរដេក (កំណត់ត្រា)</strong> — ធាតុមួយក្នុងតារាង',
    zh: '<strong>行（记录）</strong> — 表中的单个条目',
  },
  "blog.db.basics.termColumn": {
    en: '<strong>Column (Field)</strong> — A specific attribute (name, email, price)',
    km: '<strong>ជួរឈរ (វាល)</strong> — គុណលក្ខណៈជាក់លាក់ (ឈ្មោះ អ៊ីមែល តម្លៃ)',
    zh: '<strong>列（字段）</strong> — 特定属性（姓名、电子邮件、价格）',
  },
  "blog.db.basics.termPK": {
    en: '<strong>Primary Key (PK)</strong> — A unique identifier for each row',
    km: '<strong>សោចម្បង (PK)</strong> — អត្តសញ្ញាណតែមួយគត់សម្រាប់ជួរដេកនីមួយៗ',
    zh: '<strong>主键（PK）</strong> — 每行的唯一标识符',
  },
  "blog.db.basics.termFK": {
    en: '<strong>Foreign Key (FK)</strong> — A column that links to another table\'s primary key',
    km: '<strong>សោបរទេស (FK)</strong> — ជួរឈរដែលភ្ជាប់ទៅសោចម្បងរបស់តារាងមួយទៀត',
    zh: '<strong>外键（FK）</strong> — 链接到另一个表的主键的列',
  },
  "blog.db.basics.dataTypes": {
    en: '2. Common Data Types',
    km: '2. ប្រភេទទិន្នន័យទូទៅ',
    zh: '2. 常见数据类型',
  },
  "blog.db.basics.dataTypesDesc": {
    en: 'Every column in a table has a data type that defines what kind of data it can hold:',
    km: 'ជួរឈរនីមួយៗក្នុងតារាងមានប្រភេទទិន្នន័យដែលកំណត់ប្រភេទទិន្នន័យដែលវាអាចផ្ទុកបាន៖',
    zh: '表中的每一列都有一个数据类型，定义了它可以存储什么类型的数据：',
  },
  "blog.db.basics.dataTypesTitle": {
    en: 'Common SQL Data Types',
    km: 'ប្រភេទទិន្នន័យ SQL ទូទៅ',
    zh: '常见 SQL 数据类型',
  },
  "blog.db.basics.createDb": {
    en: '3. Create a Database',
    km: '3. បង្កើតមូលដ្ឋានទិន្នន័យ',
    zh: '3. 创建数据库',
  },
  "blog.db.basics.createDbDesc": {
    en: 'Let\'s build a real e-commerce database from scratch. First, create the database:',
    km: 'តោះបង្កើតមូលដ្ឋានទិន្នន័យអេឡិចត្រូនិកពាណិជ្ជកម្មពិតប្រាកដពីដំបូង។ ដំបូង បង្កើតមូលដ្ឋានទិន្នន័យ៖',
    zh: '让我们从头开始构建一个真实的电子商务数据库。首先，创建数据库：',
  },
  "blog.db.basics.createDbTitle": {
    en: 'SQL',
    km: 'SQL',
    zh: 'SQL',
  },
  "blog.db.basics.usersTable": {
    en: '4. Create Users Table',
    km: '4. បង្កើតតារាងអ្នកប្រើប្រាស់',
    zh: '4. 创建用户表',
  },
  "blog.db.basics.usersTableDesc": {
    en: 'Every e-commerce app needs users. Let\'s create a <code class="inline-code">users</code> table to store customer information:',
    km: 'កម្មវិធីអេឡិចត្រូនិកពាណិជ្ជកម្មទាំងអស់ត្រូវការអ្នកប្រើប្រាស់។ តោះបង្កើតតារាង <code class="inline-code">users</code> ដើម្បីរក្សាទុកព័ត៌មានអតិថិជន៖',
    zh: '每个电商应用都需要用户。让我们创建一个 <code class="inline-code">users</code> 表来存储客户信息：',
  },
  "blog.db.basics.usersTableTitle": {
    en: 'SQL - Users Table',
    km: 'SQL - តារាងអ្នកប្រើប្រាស់',
    zh: 'SQL - 用户表',
  },
  "blog.db.basics.usersTableTip": {
    en: '<strong>Explanation:</strong> <code class="inline-code">id</code> is the primary key and auto-increments. <code class="inline-code">NOT NULL</code> means the field is required. <code class="inline-code">UNIQUE</code> ensures no duplicate emails. <code class="inline-code">DEFAULT CURRENT_TIMESTAMP</code> automatically sets the date when a row is created.',
    km: '<strong>ការពន្យល់៖</strong> <code class="inline-code">id</code> គឺជាសោចម្បង និងបង្កើនដោយស្វ័យប្រវត្តិ។ <code class="inline-code">NOT NULL</code> មានន័យថាវាលនេះចាំបាច់។ <code class="inline-code">UNIQUE</code> ធានាថាគ្មានអ៊ីមែលស្ទួន។ <code class="inline-code">DEFAULT CURRENT_TIMESTAMP</code> កំណត់កាលបរិច្ឆេទដោយស្វ័យប្រវត្តិនៅពេលជួរដេកត្រូវបានបង្កើត។',
    zh: '<strong>说明：</strong> <code class="inline-code">id</code> 是主键并自动递增。<code class="inline-code">NOT NULL</code> 表示该字段为必填。<code class="inline-code">UNIQUE</code> 确保没有重复的电子邮件。<code class="inline-code">DEFAULT CURRENT_TIMESTAMP</code> 在创建行时自动设置日期。',
  },
  "blog.db.basics.categoriesTable": {
    en: '5. Create Categories Table',
    km: '5. បង្កើតតារាងប្រភេទ',
    zh: '5. 创建分类表',
  },
  "blog.db.basics.categoriesTableDesc": {
    en: 'Products belong to categories. Let\'s create a simple categories table:',
    km: 'ផលិតផលស្ថិតក្នុងប្រភេទ។ តោះបង្កើតតារាងប្រភេទសាមញ្ញមួយ៖',
    zh: '产品属于分类。让我们创建一个简单的分类表：',
  },
  "blog.db.basics.categoriesTableTitle": {
    en: 'SQL - Categories Table',
    km: 'SQL - តារាងប្រភេទ',
    zh: 'SQL - 分类表',
  },
  "blog.db.basics.productsTable": {
    en: '6. Create Products Table',
    km: '6. បង្កើតតារាងផលិតផល',
    zh: '6. 创建产品表',
  },
  "blog.db.basics.productsTableDesc": {
    en: 'Now the main products table. Notice how it references the <code class="inline-code">categories</code> table using a <strong>foreign key</strong>:',
    km: 'ឥឡូវតារាងផលិតផលសំខាន់។ សម្គាល់ថាវាយោងទៅតារាង <code class="inline-code">categories</code> ដោយប្រើ <strong>សោបរទេស</strong>៖',
    zh: '现在是主要的产品表。注意它如何使用<strong>外键</strong>引用 <code class="inline-code">categories</code> 表：',
  },
  "blog.db.basics.productsTableTitle": {
    en: 'SQL - Products Table',
    km: 'SQL - តារាងផលិតផល',
    zh: 'SQL - 产品表',
  },
  "blog.db.basics.productsTableTip": {
    en: '<strong>Foreign Key:</strong> <code class="inline-code">category_id</code> links each product to a category. <code class="inline-code">ON DELETE SET NULL</code> means if a category is deleted, the product\'s category becomes NULL instead of being deleted too.',
    km: '<strong>សោបរទេស៖</strong> <code class="inline-code">category_id</code> ភ្ជាប់ផលិតផលនីមួយៗទៅប្រភេទ។ <code class="inline-code">ON DELETE SET NULL</code> មានន័យថាប្រសិនបើប្រភេទត្រូវបានលុប ប្រភេទរបស់ផលិតផលក្លាយជា NULL ជំនួសឱ្យការត្រូវបានលុបផងដែរ។',
    zh: '<strong>外键：</strong> <code class="inline-code">category_id</code> 将每个产品链接到一个分类。<code class="inline-code">ON DELETE SET NULL</code> 表示如果分类被删除，产品的分类将变为 NULL 而不是也被删除。',
  },
  "blog.db.basics.ordersTable": {
    en: '7. Create Orders Table',
    km: '7. បង្កើតតារាងការបញ្ជាទិញ',
    zh: '7. 创建订单表',
  },
  "blog.db.basics.ordersTableDesc": {
    en: 'When a user buys something, we create an order. The orders table links to the <code class="inline-code">users</code> table:',
    km: 'នៅពេលអ្នកប្រើប្រាស់ទិញអ្វីមួយ យើងបង្កើតការបញ្ជាទិញ។ តារាងការបញ្ជាទិញភ្ជាប់ទៅតារាង <code class="inline-code">users</code>៖',
    zh: '当用户购买东西时，我们创建一个订单。订单表链接到 <code class="inline-code">users</code> 表：',
  },
  "blog.db.basics.ordersTableTitle": {
    en: 'SQL - Orders Table',
    km: 'SQL - តារាងការបញ្ជាទិញ',
    zh: 'SQL - 订单表',
  },
  "blog.db.basics.orderItemsTable": {
    en: '8. Create Order Items Table',
    km: '8. បង្កើតតារាងធាតុការបញ្ជាទិញ',
    zh: '8. 创建订单项表',
  },
  "blog.db.basics.orderItemsTableDesc": {
    en: 'Each order can have multiple products. The <code class="inline-code">order_items</code> table connects orders and products (this is a <strong>many-to-many</strong> relationship):',
    km: 'ការបញ្ជាទិញនីមួយៗអាចមានផលិតផលច្រើន។ តារាង <code class="inline-code">order_items</code> ភ្ជាប់ការបញ្ជាទិញ និងផលិតផល (នេះគឺជាទំនាក់ទំនង <strong>ច្រើន-ទៅ-ច្រើន</strong>)៖',
    zh: '每个订单可以有多个产品。<code class="inline-code">order_items</code> 表连接订单和产品（这是<strong>多对多</strong>关系）：',
  },
  "blog.db.basics.orderItemsTableTitle": {
    en: 'SQL - Order Items Table',
    km: 'SQL - តារាងធាតុការបញ្ជាទិញ',
    zh: 'SQL - 订单项表',
  },
  "blog.db.basics.orderItemsTableTip": {
    en: '<strong>Why a separate table?</strong> One order can have many products, and one product can appear in many orders. The <code class="inline-code">order_items</code> table (junction table) connects them.',
    km: '<strong>ហេតុអ្វីត្រូវការតារាងដាច់ដោយឡែក?</strong> ការបញ្ជាទិញមួយអាចមានផលិតផលច្រើន ហើយផលិតផលមួយអាចមានក្នុងការបញ្ជាទិញច្រើន។ តារាង <code class="inline-code">order_items</code> (តារាងភ្ជាប់) ភ្ជាប់ពួកវា។',
    zh: '<strong>为什么需要单独的表？</strong>一个订单可以有多个产品，一个产品可以出现在多个订单中。<code class="inline-code">order_items</code> 表（联接表）将它们连接起来。',
  },
  "blog.db.basics.insertData": {
    en: '9. Insert Real Data',
    km: '9. បញ្ចូលទិន្នន័យពិត',
    zh: '9. 插入真实数据',
  },
  "blog.db.basics.insertDataDesc": {
    en: 'Let\'s populate our tables with real data:',
    km: 'តោះបំពេញតារាងរបស់យើងដោយទិន្នន័យពិត៖',
    zh: '让我们用真实数据填充我们的表：',
  },
  "blog.db.basics.insertDataTitle": {
    en: 'SQL - Insert Data',
    km: 'SQL - បញ្ចូលទិន្នន័យ',
    zh: 'SQL - 插入数据',
  },
  "blog.db.basics.queryData": {
    en: '10. Query Data (SELECT)',
    km: '10. ទាញយកទិន្នន័យ (SELECT)',
    zh: '10. 查询数据（SELECT）',
  },
  "blog.db.basics.queryDataDesc": {
    en: 'Now let\'s retrieve data using common queries:',
    km: 'ឥឡូវតោះទាញយកទិន្នន័យដោយប្រើសំណួរទូទៅ៖',
    zh: '现在让我们使用常见查询检索数据：',
  },
  "blog.db.basics.queryDataTitle": {
    en: 'SQL - Queries',
    km: 'SQL - សំណួរ',
    zh: 'SQL - 查询',
  },
  "blog.db.basics.joinData": {
    en: '11. JOIN — Combine Tables',
    km: '11. JOIN — ផ្សំតារាង',
    zh: '11. JOIN — 合并表',
  },
  "blog.db.basics.joinDataDesc": {
    en: 'JOINs let you combine data from multiple tables. This is the real power of relational databases:',
    km: 'JOIN អនុញ្ញាតឱ្យអ្នកផ្សំទិន្នន័យពីតារាងច្រើន។ នេះគឺជាអានុភាពពិតរបស់មូលដ្ឋានទិន្នន័យទំនាក់ទំនង៖',
    zh: 'JOIN 让你可以组合来自多个表的数据。这是关系数据库的真正威力：',
  },
  "blog.db.basics.joinDataTitle": {
    en: 'SQL - JOIN Queries',
    km: 'SQL - សំណួរ JOIN',
    zh: 'SQL - JOIN 查询',
  },
  "blog.db.basics.updateDelete": {
    en: '12. Update & Delete Data',
    km: '12. ធ្វើបច្ចុប្បន្នភាព និងលុបទិន្នន័យ',
    zh: '12. 更新和删除数据',
  },
  "blog.db.basics.updateDeleteDesc": {
    en: 'Modify and remove data from tables:',
    km: 'កែប្រែ និងលុបទិន្នន័យពីតារាង៖',
    zh: '修改和删除表中的数据：',
  },
  "blog.db.basics.updateDeleteTitle": {
    en: 'SQL - Update & Delete',
    km: 'SQL - ធ្វើបច្ចុប្បន្នភាព និងលុប',
    zh: 'SQL - 更新和删除',
  },
  "blog.db.basics.updateDeleteWarning": {
    en: '<strong>Warning:</strong> Always use a <code class="inline-code">WHERE</code> clause with UPDATE and DELETE! Without it, ALL rows will be affected.',
    km: '<strong>ការព្រមាន៖</strong> ប្រើ <code class="inline-code">WHERE</code> ជានិច្ចជាមួយ UPDATE និង DELETE! បើគ្មានវា ជួរដេកទាំងអស់នឹងត្រូវបានប៉ះពាល់។',
    zh: '<strong>警告：</strong>始终在 UPDATE 和 DELETE 中使用 <code class="inline-code">WHERE</code> 子句！没有它，所有行都会受到影响。',
  },
  "blog.db.basics.diagram": {
    en: '13. Our Database Diagram',
    km: '13. ដ្យាក្រាមម៉ូលដ្ឋានទិន្នន័យរបស់យើង',
    zh: '13. 我们的数据库图',
  },
  "blog.db.basics.diagramDesc": {
    en: 'Here\'s how all our tables relate to each other:',
    km: 'នេះជារបៀបដែលតារាងទាំងអស់របស់យើងទាក់ទងគ្នា៖',
    zh: '以下是我们所有表之间的关系：',
  },
  "blog.db.basics.diagramTitle": {
    en: 'E-Commerce Database Relationships',
    km: 'ទំនាក់ទំនងមូលដ្ឋានទិន្នន័យអេឡិចត្រូនិកពាណិជ្ជកម្ម',
    zh: '电子商务数据库关系',
  },
  "blog.db.basics.summaryIntro": {
    en: 'You now understand the fundamentals of relational databases:',
    km: 'ឥឡូវអ្នកយល់ពីមូលដ្ឋានគ្រឹះនៃមូលដ្ឋានទិន្នន័យទំនាក់ទំនង៖',
    zh: '你现在了解了关系数据库的基础知识：',
  },
  "blog.db.basics.summary1": {
    en: 'What databases, tables, rows, and columns are',
    km: 'មូលដ្ឋានទិន្នន័យ តារាង ជួរដេក និងជួរឈរគឺជាអ្វី',
    zh: '什么是数据库、表、行和列',
  },
  "blog.db.basics.summary2": {
    en: 'Common data types (INT, VARCHAR, DECIMAL, TEXT, etc.)',
    km: 'ប្រភេទទិន្នន័យទូទៅ (INT, VARCHAR, DECIMAL, TEXT ។ល។)',
    zh: '常见数据类型（INT、VARCHAR、DECIMAL、TEXT 等）',
  },
  "blog.db.basics.summary3": {
    en: 'Creating tables with PRIMARY KEY and FOREIGN KEY',
    km: 'បង្កើតតារាងជាមួយ PRIMARY KEY និង FOREIGN KEY',
    zh: '使用 PRIMARY KEY 和 FOREIGN KEY 创建表',
  },
  "blog.db.basics.summary4": {
    en: 'INSERT, SELECT, UPDATE, DELETE operations',
    km: 'ប្រតិបត្តិការ INSERT, SELECT, UPDATE, DELETE',
    zh: 'INSERT、SELECT、UPDATE、DELETE 操作',
  },
  "blog.db.basics.summary5": {
    en: 'JOIN queries to combine data from multiple tables',
    km: 'សំណួរ JOIN ដើម្បីផ្សំទិន្នន័យពីតារាងច្រើន',
    zh: 'JOIN 查询以组合来自多个表的数据',
  },
  "blog.db.basics.summary6": {
    en: 'Building a real e-commerce database schema',
    km: 'បង្កើតគ្រោងមូលដ្ឋានទិន្នន័យអេឡិចត្រូនិកពាណិជ្ជកម្មពិត',
    zh: '构建真实的电子商务数据库架构',
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
