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
