# Portfolio Seeder Data (Blog & Experience)

This file contains the translated seeder data for the **Experience** and **Blog** sections of your portfolio. You can use these arrays in your Laravel `SeedDataSeeder.php`.

## 1. Experience Data

Replace your `$experiences` array with this one to include English, Khmer, and Chinese translations.

```php
$experiences = [
    [
        'role' => json_encode(['en' => 'Build simple UI YouTube', 'km' => 'ការកសាង UI YouTube ធម្មតា', 'zh' => '构建简单的 YouTube UI']),
        'company' => json_encode(['en' => 'Java & Oracle Developer', 'km' => 'អ្នកបង្កើត Java & Oracle', 'zh' => 'Java & Oracle 开发者']),
        'period' => '2026 - Present',
        'description' => json_encode([
            'en' => 'Developed a desktop-based YouTube interface using Java Swing for the frontend and Oracle SQL for the database management. Focused on creating a robust, high-performance user experience with direct JDBC integration.',
            'km' => 'បានបង្កើតចំណុចប្រទាក់ YouTube ដែលផ្អែកលើ desktop ដោយប្រើ Java Swing សម្រាប់ frontend និង Oracle SQL សម្រាប់ការគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ។ ផ្តោតលើការបង្កើតបទពិសោធន៍អ្នកប្រើប្រាស់ដែលរឹងមាំ និងមានប្រសិទ្ធភាពខ្ពស់ ជាមួយនឹងការតភ្ជាប់ JDBC ផ្ទាល់។',
            'zh' => '使用 Java Swing 开发桌面端 YouTube 界面，并采用 Oracle SQL 进行数据库管理。专注于创建稳健、高性能的用户体验，实现直接的 JDBC 集成。'
        ]),
        'sort_order' => 1,
        'techs' => ['Java', 'Java Swing', 'Oracle SQL']
    ],
    [
        'role' => json_encode(['en' => 'Frontend Developer', 'km' => 'អ្នកបង្កើត Frontend', 'zh' => '前端开发工程师']),
        'company' => json_encode(['en' => 'Digital Agency', 'km' => 'ភ្នាក់ងារឌីជីថល', 'zh' => '数字代理公司']),
        'period' => '2025 - 2026',
        'description' => json_encode([
            'en' => 'Built responsive and performant web applications for diverse clients. Collaborated with designers and backend teams to deliver polished user experiences.',
            'km' => 'បង្កើតកម្មវិធីវេបឆ្លើយតប និងមានប្រសិទ្ធភាពសម្រាប់អតិថិជនផ្សេងៗ។ សហការជាមួយអ្នករចនា និងក្រុម backend ដើម្បីផ្តល់បទពិសោធន៍អ្នកប្រើប្រាស់ល្អ។',
            'zh' => '为不同客户构建响应式高性能Web应用程序。与设计师和后端团队合作，交付精致的用户体验。'
        ]),
        'sort_order' => 2,
        'techs' => ['Vue.js', 'JavaScript', 'CSS3', 'Node.js']
    ],
    [
        'role' => json_encode(['en' => 'UI/UX Engineer', 'km' => 'វិស្វករ UI/UX', 'zh' => 'UI/UX 工程师']),
        'company' => json_encode(['en' => 'Innovation Lab', 'km' => 'មន្ទីរពិសោធន៍ច្នៃប្រឌិត', 'zh' => '创新实验室']),
        'period' => '2024 - 2025',
        'description' => json_encode([
            'en' => 'Bridged the gap between design and development. Created high-fidelity prototypes and implemented complex UI components with a focus on accessibility.',
            'km' => 'ភ្ជាប់គំលាតរវាងការរចនា និងការអភិវឌ្ឍន៍។ បង្កើតគំរូ prototype កម្រិតខ្ពស់ និងអនុវត្តសមាសភាគ UI ស្មុគស្មាញដោយផ្តោតលើ accessibility។',
            'zh' => '弥合设计与开发之间的差距。创建高保真原型并实现复杂的 UI 组件，重点关注可访问性。'
        ]),
        'sort_order' => 3,
        'techs' => ['Vue.js', 'Figma', 'Sass', 'Cypress']
    ],
    [
        'role' => json_encode(['en' => 'Junior Web Developer', 'km' => 'អ្នកបង្កើតវេបសាយវ័យក្មេង', 'zh' => '初级Web开发工程师']),
        'company' => json_encode(['en' => 'Startup Inc', 'km' => 'ក្រុមហ៊ុន Startup', 'zh' => '创业公司']),
        'period' => '2024 - 2025',
        'description' => json_encode([
            'en' => 'Developed and maintained client-facing websites. Gained hands-on experience with modern frontend frameworks and agile development workflows.',
            'km' => 'បង្កើត និងថែទាំវេបសាយសម្រាប់អតិថិជន។ ទទួលបានបទពិសោធន៍ជាក់ស្តែងជាមួយ framework frontend ទំនើប និងការអភិវឌ្ទន៍ agile។',
            'zh' => '开发和维护面向客户的网站。获得了现代前端框架和敏捷开发工作流程的实践经验。'
        ]),
        'sort_order' => 4,
        'techs' => ['HTML5', 'CSS3', 'JavaScript', 'Git']
    ],
    [
        'role' => json_encode(['en' => 'Web Development Intern', 'km' => 'កម្មសិក្សាការីអភិវឌ្ឍន៍វេបសាយ', 'zh' => '网页开发实习生']),
        'company' => json_encode(['en' => 'Creative Studio', 'km' => 'ស្ទីឌីយោច្នៃប្រឌិត', 'zh' => '创意工作室']),
        'period' => '2025 - 2026',
        'description' => json_encode([
            'en' => 'Assisted in the development of responsive landing pages and email templates. Learned industry best practices for clean code and performance optimization.',
            'km' => 'ជួយក្នុងការអភិវឌ្ឍន៍ទំព័រ landing និងគំរូអ៊ីមែល។ រៀនពីការអនុវត្តល្អបំផុតសម្រាប់កូដស្អាត និងការធ្វើឱ្យប្រសើរឡើងនូវប្រសិទ្ធភាព។',
            'zh' => '协助开发响应式落地页和电子邮件模板。学习了行业在简洁代码和性能优化方面的最佳实践。'
        ]),
        'sort_order' => 5,
        'techs' => ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
    ],
    [
        'role' => json_encode(['en' => 'Freelance Developer', 'km' => 'អ្នកអភិវឌ្ឍន៍ឯករាជ្យ', 'zh' => '自由职业开发者']),
        'company' => json_encode(['en' => 'Self-Employed', 'km' => 'ធ្វើការដោយខ្លួនឯង', 'zh' => '自雇']),
        'period' => '2024 - 2025',
        'description' => json_encode([
            'en' => 'Designed and developed custom websites for small businesses. Managed full project lifecycles from initial concept to deployment and maintenance.',
            'km' => 'រចនា និងអភិវឌ្ឍន៍វេបសាយតាមតម្រូវការសម្រាប់អាជីវកម្មខ្នាតតូច។ ដឹកនាំគម្រោងទាំងមូលចាប់ពីគំនិតដំបូរហូតដល់ការដាក់ឱ្យប្រើប្រាស់ និងការថែទាំ។',
            'zh' => '为小型企业设计和开发定制网站。管理从最初概念到部署和维护的完整项目生命周期。'
        ]),
        'sort_order' => 6,
        'techs' => ['WordPress', 'PHP', 'jQuery', 'MySQL']
    ],
    [
        'role' => json_encode(['en' => 'Open Source Contributor', 'km' => 'អ្នករួមចំណែក Open Source', 'zh' => '开源贡献者']),
        'company' => json_encode(['en' => 'GitHub Community', 'km' => 'សហគមន៍ GitHub', 'zh' => 'GitHub 社区']),
        'period' => '2024 - 2025',
        'description' => json_encode([
            'en' => 'Contributed to various open-source projects, fixing bugs and implementing new features. Collaborated with developers worldwide and improved code quality.',
            'km' => 'ចូលរួមចំណែកក្នុងគម្រោង open-source ផ្សេងៗ ការកែប្រែកំហុស និងការបង្កើតមុខងារថ្មីៗ។ សហការជាមួយអ្នកអភិវឌ្ឍន៍ជុំវិញពិភពលោក និងលើកកម្ពស់គុណភាពកូដ។',
            'zh' => '为各种开源项目做出贡献，修复 bug 并实现新功能。与全球开发者合作，提高了代码质量。'
        ]),
        'sort_order' => 7,
        'techs' => ['Git', 'Markdown', 'JavaScript', 'Testing']
    ],
];
```

## 1.1 Experience Details (YouTube UI Project)

For the first experience entry (YouTube UI), use these translated details.

### Categories & Items

```php
// Categories
$webCat = [
    'title' => json_encode(['en' => 'Web Interface', 'km' => 'ផ្ទាំងបណ្តាញ', 'zh' => 'Web 界面']),
    'category_key' => 'web_interface',
];
$adminCat = [
    'title' => json_encode(['en' => 'Admin Interface', 'km' => 'ផ្ទាំងគ្រប់គ្រង', 'zh' => '管理界面']),
    'category_key' => 'admin_interface',
];

// Items for Web Interface
$webItems = [
    [
        'label' => json_encode(['en' => 'Discovery & Viewing', 'km' => 'ស្វែងរក និង កម្សាន្ត', 'zh' => '发现与观看']),
        'subheading' => json_encode(['en' => 'Content Delivery Network', 'km' => 'បណ្តាញចែកចាយមាតិកា', 'zh' => '内容分发网络']),
        'points' => json_encode([
            'en' => ['homepage', 'search', 'watch_page', 'subscriptions', 'history'],
            'km' => ['ទំព័រដើម', 'ស្វែងរក', 'ទំព័រមើល', 'ការជាវ', 'ប្រវត្តិ'],
            'zh' => ['首页', '搜索', '观看页面', '订阅', '历史记录']
        ]),
    ],
    // ... add more as needed
];
```

> [!NOTE]
> For the full list of details, you can refer to `useI18n.ts` lines 79-149. The above shows the pattern for JSON translation.

---

## 2. Blog Data

### Blog Tabs
Update `$tabs` with translations.

```php
$tabs = [
    ['name' => json_encode(['en' => 'Laravel', 'km' => 'Laravel', 'zh' => 'Laravel']), 'slug' => 'laravel', 'sort_order' => 1, 'is_active' => true],
    ['name' => json_encode(['en' => 'Vue', 'km' => 'Vue', 'zh' => 'Vue']), 'slug' => 'vue', 'sort_order' => 2, 'is_active' => true],
    ['name' => json_encode(['en' => 'TypeScript', 'km' => 'TypeScript', 'zh' => 'TypeScript']), 'slug' => 'typescript', 'sort_order' => 3, 'is_active' => true],
    ['name' => json_encode(['en' => 'Laravel & Vue', 'km' => 'Laravel & Vue', 'zh' => 'Laravel & Vue']), 'slug' => 'laravel-vue', 'sort_order' => 4, 'is_active' => true],
    ['name' => json_encode(['en' => 'Interview', 'km' => 'សំភាសន៍', 'zh' => '面试']), 'slug' => 'interview', 'sort_order' => 5, 'is_active' => true],
    ['name' => json_encode(['en' => 'Database', 'km' => 'មូលដ្ឋានទិន្នន័យ', 'zh' => '数据库']), 'slug' => 'database', 'sort_order' => 6, 'is_active' => true],
    ['name' => json_encode(['en' => 'CSS', 'km' => 'CSS', 'zh' => 'CSS']), 'slug' => 'css', 'sort_order' => 7, 'is_active' => true],
];
```

### Blog Posts
Updated `$posts` array with English, Khmer, and Chinese translations for titles and excerpts.

```php
$posts = [
    [
        'category_slug' => 'vue',
        'title' => json_encode(['en' => 'Getting Started with Vue 3 Composition API', 'km' => 'ការចាប់ផ្ដើមជាមួយ Vue 3 Composition API', 'zh' => 'Vue 3 Composition API 入门']),
        'slug' => 'vue-composition-api',
        'excerpt' => json_encode([
            'en' => 'Learn how to use the Composition API in Vue 3 to build more maintainable and reusable components.',
            'km' => 'ស្វែងយល់ពីរបៀបប្រើប្រាស់ Composition API ក្នុង Vue 3 ដើម្បីបង្កើតសមាសភាគដែលអាចថែទាំបាន និងប្រើឡើងវិញបានកាន់តែប្រសើរ។',
            'zh' => '了解如何在 Vue 3 中使用 Composition API 来构建更易于维护和复用的组件。'
        ]),
        'date' => '2026-01-15',
        'is_published' => true,
        'sort_order' => 1,
        'tag_slugs' => ['vue', 'javascript']
    ],
    [
        'category_slug' => 'tailwind',
        'title' => json_encode(['en' => 'Building Responsive Layouts with Tailwind CSS', 'km' => 'ការបង្កើតប្លង់ឆ្លើយតបជាមួយ Tailwind CSS', 'zh' => '使用 Tailwind CSS 构建响应式布局']),
        'slug' => 'tailwind-responsive',
        'excerpt' => json_encode([
            'en' => 'A comprehensive guide to creating beautiful responsive designs using Tailwind CSS utility classes.',
            'km' => 'មគ្គុទ្ទេសក៍ពេញលេញក្នុងការបង្កើតការរចនាឆ្លើយតបដ៏ស្រស់ស្អាតដោយប្រើ utility classes របស់ Tailwind CSS។',
            'zh' => '使用 Tailwind CSS 实用类创建美观响应式设计的全面指南。'
        ]),
        'date' => '2026-01-10',
        'is_published' => true,
        'sort_order' => 2,
        'tag_slugs' => ['tailwind', 'css']
    ],
    [
        'category_slug' => 'typescript',
        'title' => json_encode(['en' => 'TypeScript Best Practices for 2026', 'km' => 'ការអនុវត្តល្អបំផុតរបស់ TypeScript សម្រាប់ឆ្នាំ 2026', 'zh' => '2026 年 TypeScript 最佳实践']),
        'slug' => 'typescript-best-practices',
        'excerpt' => json_encode([
            'en' => 'Discover the latest TypeScript patterns and practices to write cleaner, more type-safe code.',
            'km' => 'ស្វែងយល់ពីគំរូ និងការអនុវត្តចុងក្រោយបំផុតរបស់ TypeScript ដើម្បីសរសេរកូដកាន់តែស្អាត និងមានសុវត្ថិភាពប្រភេទកាន់តែខ្លាំង។',
            'zh' => '探索最新的 TypeScript 模式和实践，编写更简洁、更类型安全的代码。'
        ]),
        'date' => '2026-01-05',
        'is_published' => true,
        'sort_order' => 3,
        'tag_slugs' => ['typescript', 'javascript']
    ],
    [
        'category_slug' => 'laravel',
        'title' => json_encode(['en' => 'Laravel Basic Setup Project', 'km' => 'គម្រោងការដំឡើងមូលដ្ឋាន Laravel', 'zh' => 'Laravel 基础设置项目']),
        'slug' => 'laravel-setup',
        'excerpt' => json_encode([
            'en' => 'Learn Laravel from scratch — installation, configuration, routing, controllers, models, and your first CRUD application.',
            'km' => 'រៀន Laravel ពីដំបូង — ការដំឡើង ការកំណត់រចនាសម្ព័ន្ធ រ៉ោតតឺ កូនត្រូល័រ ម៉ូឌែល និងកម្មវិធី CRUD ដំបូងរបស់អ្នក។',
            'zh' => '从零开始学习 Laravel — 安装、配置、路由、控制器、模型以及您的第一个 CRUD 应用程序。'
        ]),
        'date' => '2025-12-28',
        'is_published' => true,
        'sort_order' => 4,
        'tag_slugs' => ['laravel', 'php']
    ],
    [
        'category_slug' => 'laravel-vue',
        'title' => json_encode(['en' => 'Full-Stack App with Laravel & Vue', 'km' => 'កម្មវិធី Full-Stack ជាមួយ Laravel & Vue', 'zh' => '使用 Laravel 和 Vue 构建全栈应用']),
        'slug' => 'laravel-vue-fullstack',
        'excerpt' => json_encode([
            'en' => 'Create a modern full-stack application combining Laravel as the backend API with Vue.js on the frontend.',
            'km' => 'បង្កើតកម្មវិធី full-stack ទំនើបដោយរួមបញ្ចូល Laravel ជា backend API ជាមួយ Vue.js នៅ frontend។',
            'zh' => '创建一个现代全栈应用程序，将 Laravel 作为后端 API 与前端的 Vue.js 相结合。'
        ]),
        'date' => '2025-12-20',
        'is_published' => true,
        'sort_order' => 5,
        'tag_slugs' => ['laravel', 'vue']
    ],
    [
        'category_slug' => 'laravel',
        'title' => json_encode(['en' => 'Laravel Eloquent ORM', 'km' => 'Laravel Eloquent ORM', 'zh' => 'Laravel Eloquent ORM']),
        'slug' => 'laravel-eloquent',
        'excerpt' => json_encode([
            'en' => 'Master Eloquent ORM — models, CRUD operations, query scopes, mutators, accessors, and advanced query techniques.',
            'km' => 'ស្ទាត់ជំនាញ Eloquent ORM — ម៉ូឌែល ប្រតិបត្តិការ CRUD ការកំណត់វិសាលភាពសំណួរ មុយតាទ័រ អាសេស័រ និងបច្ចេកទេសសំណួរកម្រិតខ្ពស់។',
            'zh' => '掌握 Eloquent ORM — 模型、CRUD 操作、查询作用域、修改器、访问器和高级查询技巧。'
        ]),
        'date' => '2025-12-15',
        'is_published' => true,
        'sort_order' => 6,
        'tag_slugs' => ['laravel', 'php']
    ],
    [
        'category_slug' => 'laravel',
        'title' => json_encode(['en' => 'Laravel Eloquent Relationships', 'km' => 'ទំនាក់ទំនង Laravel Eloquent', 'zh' => 'Laravel Eloquent 关系']),
        'slug' => 'laravel-relationships',
        'excerpt' => json_encode([
            'en' => 'Learn all Eloquent relationships — hasOne, hasMany, belongsTo, many-to-many, polymorphic, and eager loading.',
            'km' => 'រៀនពីទំនាក់ទំនង Eloquent ទាំងអស់ — hasOne, hasMany, belongsTo, many-to-many, polymorphic និង eager loading។',
            'zh' => '学习所有 Eloquent 关系 — hasOne、hasMany、belongsTo、多对多、多态和预加载。'
        ]),
        'date' => '2025-12-10',
        'is_published' => true,
        'sort_order' => 7,
        'tag_slugs' => ['laravel', 'php']
    ],
    [
        'category_slug' => 'laravel',
        'title' => json_encode(['en' => 'Laravel Authentication', 'km' => 'ការផ្ទៀងផ្ទាត់ក្នុង Laravel', 'zh' => 'Laravel 身份验证']),
        'slug' => 'laravel-authentication',
        'excerpt' => json_encode([
            'en' => 'Implement user authentication — login, registration, guards, providers, and protecting routes with middleware.',
            'km' => 'អនុវត្តការផ្ទៀងផ្ទាត់អ្នកប្រើប្រាស់ — ការចូល ការចុះឈ្មោះ ហ្គាត ប្រូហ្វាយឌ័រ និងការការពាររ៉ោតតឺជាមួយមីដលវែ។',
            'zh' => '实现用户身份验证 — 登录、注册、守卫、提供者以及使用中间件保护路由。'
        ]),
        'date' => '2025-12-05',
        'is_published' => true,
        'sort_order' => 8,
        'tag_slugs' => ['laravel', 'php']
    ],
    [
        'category_slug' => 'laravel',
        'title' => json_encode(['en' => 'Laravel Authorization', 'km' => 'ការអនុញ្ញាតក្នុង Laravel', 'zh' => 'Laravel 授权']),
        'slug' => 'laravel-authorization',
        'excerpt' => json_encode([
            'en' => 'Control user access with Gates and Policies — define who can perform what actions in your application.',
            'km' => 'គ្រប់គ្រងការចូលប្រើប្រាស់របស់អ្នកប្រើប្រាស់ជាមួយ Gates និង Policies — កំណត់ថាអ្នកណាអាចធ្វើសកម្មភាពអ្វីខ្លះនៅក្នុងកម្មវិធីរបស់អ្នក។',
            'zh' => '使用 Gates 和 Policies 控制用户访问 — 定义谁可以在您的应用程序中执行哪些操作。'
        ]),
        'date' => '2025-12-01',
        'is_published' => true,
        'sort_order' => 9,
        'tag_slugs' => ['laravel', 'php']
    ],
    [
        'category_slug' => 'laravel',
        'title' => json_encode(['en' => 'Laravel Email Verification', 'km' => 'ការផ្ទៀងផ្ទាត់អ៊ីមែលក្នុង Laravel', 'zh' => 'Laravel 电子邮件验证']),
        'slug' => 'laravel-verification',
        'excerpt' => json_encode([
            'en' => 'Add email verification to your app — verify users after registration and protect routes for verified users only.',
            'km' => 'បន្ថែមការផ្ទៀងផ្ទាត់អ៊ីមែលទៅកម្មវិធីរបស់អ្នក — ផ្ទៀងផ្ទាត់អ្នកប្រើប្រាស់បន្ទាប់ពីចុះឈ្មោះ និងការពាររ៉ោតតឺសម្រាប់តែអ្នកប្រើប្រាស់ដែលបានផ្ទៀងផ្ទាត់ប៉ុណ្ណោះ។',
            'zh' => '为您的应用添加电子邮件验证 — 在注册后验证用户，并仅为已验证用户提供路由保护。'
        ]),
        'date' => '2025-11-28',
        'is_published' => true,
        'sort_order' => 10,
        'tag_slugs' => ['laravel', 'php']
    ],
    [
        'category_slug' => 'laravel',
        'title' => json_encode(['en' => 'Laravel Encryption', 'km' => 'ការអ៊ិនគ្រីបកូដក្នុង Laravel', 'zh' => 'Laravel 加密']),
        'slug' => 'laravel-encryption',
        'excerpt' => json_encode([
            'en' => 'Secure sensitive data with Laravel encryption — encrypt, decrypt, and understand how Laravel protects your data.',
            'km' => 'ការពារទិន្នន័យសំខាន់ៗជាមួយការអ៊ិនគ្រីបក្នុង Laravel — អ៊ិនគ្រីប ឌីគ្រីប និងស្វែងយល់ពីរបៀបដែល Laravel ការពារទិន្នន័យរបស់អ្នក។',
            'zh' => '使用 Laravel 加密保护敏感数据 — 加密、解密并了解 Laravel 如何保护您的数据。'
        ]),
        'date' => '2025-11-25',
        'is_published' => true,
        'sort_order' => 11,
        'tag_slugs' => ['laravel', 'php']
    ],
    [
        'category_slug' => 'laravel',
        'title' => json_encode(['en' => 'Laravel Hashing', 'km' => 'ការធ្វើ Hashing ក្នុង Laravel', 'zh' => 'Laravel 哈希']),
        'slug' => 'laravel-hashing',
        'excerpt' => json_encode([
            'en' => 'Hash passwords and sensitive data — bcrypt, argon2, and how Laravel handles secure password hashing.',
            'km' => 'ធ្វើ Hash លេខសម្ងាត់ និងទិន្នន័យសំខាន់ៗ — bcrypt, argon2 និងរបៀបដែល Laravel គ្រប់គ្រងការធ្វើ hash លេខសម្ងាត់ប្រកបដោយសុវត្ថិភាព។',
            'zh' => '哈希密码和敏感数据 — bcrypt、argon2 以及 Laravel 如何处理安全的密码哈希。'
        ]),
        'date' => '2025-11-22',
        'is_published' => true,
        'sort_order' => 12,
        'tag_slugs' => ['laravel', 'php']
    ],
    [
        'category_slug' => 'laravel',
        'title' => json_encode(['en' => 'Laravel Password Reset', 'km' => 'ការកំណត់លេខសម្ងាត់ឡើងវិញក្នុង Laravel', 'zh' => 'Laravel 密码重置']),
        'slug' => 'laravel-passwords',
        'excerpt' => json_encode([
            'en' => 'Implement password reset — send reset emails, handle reset tokens, and customize the reset flow.',
            'km' => 'អនុវត្តការកំណត់លេខសម្ងាត់ឡើងវិញ — ផ្ញើអ៊ីមែលកំណត់ឡើងវិញ គ្រប់គ្រងថូខឹនកំណត់ឡើងវិញ និងកែសម្រួលលំហូរការកំណត់ឡើងវិញ។',
            'zh' => '实现密码重置 — 发送重置邮件、处理重置令牌并自定义重置流程。'
        ]),
        'date' => '2025-11-20',
        'is_published' => true,
        'sort_order' => 13,
        'tag_slugs' => ['laravel', 'php']
    ],
    [
        'category_slug' => 'interview',
        'title' => json_encode(['en' => 'Laravel Interview Questions', 'km' => 'សំណួរសម្ភាសន៍ Laravel', 'zh' => 'Laravel 面试题']),
        'slug' => 'interview-laravel',
        'excerpt' => json_encode([
            'en' => 'Prepare for your next Laravel interview with commonly asked questions covering routing, Eloquent, middleware, and more.',
            'km' => 'ត្រៀមខ្លួនសម្រាប់ការសម្ភាសន៍ Laravel បន្ទាប់របស់អ្នកជាមួយសំណួរដែលគេសួរញឹកញាប់ដែលគ្របដណ្តប់លើរ៉ោតតឺ Eloquent មីដលវែ និងច្រើនទៀត។',
            'zh' => '准备您的下一次 Laravel 面试，涵盖路由、Eloquent、中间件等常见问题。'
        ]),
        'date' => '2026-03-01',
        'is_published' => true,
        'sort_order' => 14,
        'tag_slugs' => ['laravel', 'interview']
    ],
    [
        'category_slug' => 'interview',
        'title' => json_encode(['en' => 'Vue.js Interview Questions', 'km' => 'សំណួរសម្ភាសន៍ Vue.js', 'zh' => 'Vue.js 面试题']),
        'slug' => 'interview-vue',
        'excerpt' => json_encode([
            'en' => 'Master Vue.js interview questions — reactivity, lifecycle hooks, Composition API, Vuex/Pinia, and component patterns.',
            'km' => 'ស្ទាត់ជំនាញសំណួរសម្ភាសន៍ Vue.js — រីអាក់ធីវីធី ឡាយសៃខលហ៊ូក Composition API Vuex/Pinia និងគំរូសមាសភាគ។',
            'zh' => '掌握 Vue.js 面试题 — 响应式、生命周期钩子、Composition API、Vuex/Pinia 和组件模式。'
        ]),
        'date' => '2026-02-25',
        'is_published' => true,
        'sort_order' => 15,
        'tag_slugs' => ['vue', 'interview']
    ],
    [
        'category_slug' => 'interview',
        'title' => json_encode(['en' => 'MySQL Interview Questions', 'km' => 'សំណួរសម្ភាសន៍ MySQL', 'zh' => 'MySQL 面试题']),
        'slug' => 'interview-mysql',
        'excerpt' => json_encode([
            'en' => 'Common MySQL interview questions — indexes, joins, transactions, optimization, stored procedures, and replication.',
            'km' => 'សំណួរសម្ភាសន៍ MySQL ទូទៅ — អ៊ីនដិច ជ័ន ត្រាន់សាក់សិន ការបង្កើនប្រសិទ្ធភាព ស្ទ័រប្រូស៊ីឌឺ និងរីភ្លីខេសិន។',
            'zh' => '常见的 MySQL 面试题 — 索引、连接、事务、优化、存储过程和复制。'
        ]),
        'date' => '2026-02-20',
        'is_published' => true,
        'sort_order' => 16,
        'tag_slugs' => ['mysql', 'interview']
    ],
    [
        'category_slug' => 'interview',
        'title' => json_encode(['en' => 'SQL Database Interview Questions', 'km' => 'សំណួរសម្ភាសន៍មូលដ្ឋានទិន្នន័យ SQL', 'zh' => 'SQL 数据库面试题']),
        'slug' => 'interview-sql',
        'excerpt' => json_encode([
            'en' => 'Essential SQL interview questions — SELECT queries, subqueries, aggregation, normalization, and database design.',
            'km' => 'សំណួរសម្ភាសន៍ SQL សំខាន់ៗ — សំណួរ SELECT សំណួររង ការបូកសរុប ណរម៉ាលឡាយសេសិន និងការរចនាមូលដ្ឋានទិន្នន័យ។',
            'zh' => '基本的 SQL 面试题 — SELECT 查询、子查询、聚合、规范化和数据库设计。'
        ]),
        'date' => '2026-02-15',
        'is_published' => true,
        'sort_order' => 17,
        'tag_slugs' => ['sql', 'interview']
    ],
    [
        'category_slug' => 'interview',
        'title' => json_encode(['en' => 'TypeScript Interview Questions', 'km' => 'សំណួរសម្ភាសន៍ TypeScript', 'zh' => 'TypeScript 面试题']),
        'slug' => 'interview-typescript',
        'excerpt' => json_encode([
            'en' => 'Top TypeScript interview questions — types vs interfaces, generics, utility types, type guards, and advanced patterns.',
            'km' => 'សំណួរសម្ភាសន៍ TypeScript កំពូលៗ — types ធៀបនឹង interfaces ជែនណឺរិក យូធីលីធីថាយ ថាយហ្គាត និងគំរូកម្រិតខ្ពស់។',
            'zh' => 'TypeScript 热门面试题 — types 与 interfaces 对比、泛型、工具类型、类型守卫和高级模式。'
        ]),
        'date' => '2026-02-10',
        'is_published' => true,
        'sort_order' => 18,
        'tag_slugs' => ['typescript', 'interview']
    ],
    [
        'category_slug' => 'database',
        'title' => json_encode(['en' => 'Database Basics: From Zero to Real Tables', 'km' => 'មូលដ្ឋានគ្រឹះនៃមូលដ្ឋានទិន្នន័យ៖ ពីសូន្យទៅតារាងពិត', 'zh' => '数据库基础：从零到真实表']),
        'slug' => 'database-basics',
        'excerpt' => json_encode([
            'en' => 'Learn database fundamentals from scratch — data types, CREATE TABLE, primary keys, foreign keys, INSERT, SELECT, JOIN, and build a real e-commerce database.',
            'km' => 'រៀនពីមូលដ្ឋានគ្រឹះនៃមូលដ្ឋានទិន្នន័យពីដំបូង — ប្រភេទទិន្នន័យ CREATE TABLE សោចម្បង សោបរទេស INSERT, SELECT, JOIN និងបង្កើតមូលដ្ឋានទិន្នន័យអេឡិចត្រូនិកពាណិជ្ជកម្មពិតប្រាកដ។',
            'zh' => '从头开始学习数据库基础知识 — 数据类型、CREATE TABLE、主键、外键、INSERT、SELECT、JOIN，并构建一个真实的电子商务数据库。'
        ]),
        'date' => '2026-03-06',
        'is_published' => true,
        'sort_order' => 19,
        'tag_slugs' => ['database', 'sql']
    ],
];
```
