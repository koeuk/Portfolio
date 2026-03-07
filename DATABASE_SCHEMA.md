# Portfolio Admin - Database Schema

## Overview

This document defines the database schema for managing the Koeuk Dev Portfolio website from an admin dashboard. The frontend (Nuxt.js) is public with no authentication. The admin dashboard (Laravel) requires login.

---

## Architecture

```
Frontend (Nuxt.js)        -->  Public API (no auth)  -->  MySQL Database
Admin Dashboard (Laravel)  -->  Protected API (auth)  -->  MySQL Database
```

## Admin Dashboard Tech Stack

| Technology | Purpose |
|---|---|
| **Laravel 11** | Backend framework — API, auth, migrations, models, controllers |
| **Vue 3** | Frontend framework — reactive admin UI |
| **Inertia.js** | SPA bridge — no separate API needed, server-side routing with Vue pages |
| **Shadcn Vue** | UI component library — tables, forms, modals, buttons, dropdowns |
| **Tailwind CSS** | Utility-first styling |
| **MySQL** | Database |

### Inertia.js Architecture

With Inertia.js, the admin dashboard does NOT use traditional REST API endpoints.
Instead, Laravel controllers return Inertia responses that render Vue pages directly.

```
Browser  -->  Laravel Route  -->  Controller  -->  Inertia::render('Page', $data)  -->  Vue Component
```

### Admin Route Structure (Laravel + Inertia)

```
# Auth
GET    /admin/login                → Auth/Login.vue
POST   /admin/login                → AuthController@login
POST   /admin/logout               → AuthController@logout

# Dashboard
GET    /admin/dashboard            → Dashboard/Index.vue

# Personal Info
GET    /admin/personal-info        → PersonalInfo/Edit.vue
PUT    /admin/personal-info        → PersonalInfoController@update
POST   /admin/social-links         → SocialLinkController@store
PUT    /admin/social-links/{id}    → SocialLinkController@update
DELETE /admin/social-links/{id}    → SocialLinkController@destroy

# Projects
GET    /admin/projects             → Projects/Index.vue
GET    /admin/projects/create      → Projects/Create.vue
POST   /admin/projects             → ProjectController@store
GET    /admin/projects/{id}/edit   → Projects/Edit.vue
PUT    /admin/projects/{id}        → ProjectController@update
DELETE /admin/projects/{id}        → ProjectController@destroy

# Skills
GET    /admin/skills               → Skills/Index.vue
POST   /admin/skills               → SkillController@store
PUT    /admin/skills/{id}          → SkillController@update
DELETE /admin/skills/{id}          → SkillController@destroy

# Experiences
GET    /admin/experiences             → Experiences/Index.vue
GET    /admin/experiences/create      → Experiences/Create.vue
POST   /admin/experiences             → ExperienceController@store
GET    /admin/experiences/{id}/edit   → Experiences/Edit.vue
PUT    /admin/experiences/{id}        → ExperienceController@update
DELETE /admin/experiences/{id}        → ExperienceController@destroy

# Badges
GET    /admin/badges               → Badges/Index.vue
POST   /admin/badges               → BadgeController@store
PUT    /admin/badges/{id}          → BadgeController@update
DELETE /admin/badges/{id}          → BadgeController@destroy

# Blog Tabs
GET    /admin/blog/tabs            → Blog/Tabs/Index.vue
POST   /admin/blog/tabs            → BlogTabController@store
PUT    /admin/blog/tabs/{id}       → BlogTabController@update
DELETE /admin/blog/tabs/{id}       → BlogTabController@destroy

# Blog Categories
GET    /admin/blog/categories            → Blog/Categories/Index.vue
POST   /admin/blog/categories            → BlogCategoryController@store
PUT    /admin/blog/categories/{id}       → BlogCategoryController@update
DELETE /admin/blog/categories/{id}       → BlogCategoryController@destroy

# Blog Posts
GET    /admin/blog/posts             → Blog/Posts/Index.vue
GET    /admin/blog/posts/create      → Blog/Posts/Create.vue
POST   /admin/blog/posts             → BlogPostController@store
GET    /admin/blog/posts/{id}/edit   → Blog/Posts/Edit.vue
PUT    /admin/blog/posts/{id}        → BlogPostController@update
DELETE /admin/blog/posts/{id}        → BlogPostController@destroy

# Blog Tags
GET    /admin/blog/tags            → Blog/Tags/Index.vue
POST   /admin/blog/tags            → BlogTagController@store
PUT    /admin/blog/tags/{id}       → BlogTagController@update
DELETE /admin/blog/tags/{id}       → BlogTagController@destroy

# Users (Super Admin only)
GET    /admin/users                → Users/Index.vue
GET    /admin/users/create         → Users/Create.vue
POST   /admin/users               → UserController@store
GET    /admin/users/{id}/edit      → Users/Edit.vue
PUT    /admin/users/{id}           → UserController@update
DELETE /admin/users/{id}           → UserController@destroy

# Roles (Super Admin only)
GET    /admin/roles                → Roles/Index.vue
POST   /admin/roles               → RoleController@store
PUT    /admin/roles/{id}           → RoleController@update
DELETE /admin/roles/{id}           → RoleController@destroy
```

### Public API (for Nuxt.js Frontend — REST, no auth)

The Nuxt.js frontend calls these endpoints to display portfolio data.
All responses are JSON. No authentication required. CORS enabled for frontend domain.

#### Laravel Route File: `routes/api.php`

```php
Route::prefix('api')->group(function () {
    Route::get('/personal-info', [Api\PersonalInfoController::class, 'index']);
    Route::get('/projects', [Api\ProjectController::class, 'index']);
    Route::get('/skills', [Api\SkillController::class, 'index']);
    Route::get('/experiences', [Api\ExperienceController::class, 'index']);
    Route::get('/experiences/{id}', [Api\ExperienceController::class, 'show']);
    Route::get('/badges', [Api\BadgeController::class, 'index']);
    Route::get('/blog/tabs', [Api\BlogController::class, 'tabs']);
    Route::get('/blog/posts', [Api\BlogController::class, 'posts']);
    Route::get('/blog/posts/{slug}', [Api\BlogController::class, 'show']);
    Route::get('/blog/tags', [Api\BlogController::class, 'tags']);
});
```

---

#### `GET /api/personal-info`

Used by: **Hero.vue**, **About.vue**, **Contact.vue**, **Footer.vue**

```json
{
  "data": {
    "id": 1,
    "name": "Koeuk Dev",
    "role": "Web Developer & Creative Thinker",
    "bio": "Passionate web developer with expertise in modern JavaScript frameworks...",
    "email": "koeukkos@gmail.com",
    "image": "/storage/images/profile.jpg",
    "resume_url": "/storage/resume.pdf",
    "social_links": [
      {
        "id": 1,
        "platform": "github",
        "url": "https://github.com/koeuk",
        "icon_svg": "<svg viewBox='0 0 24 24'>...</svg>",
        "sort_order": 1
      },
      {
        "id": 2,
        "platform": "linkedin",
        "url": "https://www.linkedin.com/in/koeuk-kos-130482299/",
        "icon_svg": "<svg viewBox='0 0 24 24'>...</svg>",
        "sort_order": 2
      },
      {
        "id": 3,
        "platform": "telegram",
        "url": "https://t.me/koeuk24",
        "icon_svg": "<svg viewBox='0 0 24 24'>...</svg>",
        "sort_order": 3
      },
      {
        "id": 4,
        "platform": "facebook",
        "url": "https://facebook.com/koeuk24",
        "icon_svg": "<svg viewBox='0 0 24 24'>...</svg>",
        "sort_order": 4
      }
    ]
  }
}
```

---

#### `GET /api/projects`

Used by: **Projects.vue**, **ProjectCard.vue**

Query params: `?featured=true` (optional, filter featured only)

```json
{
  "data": [
    {
      "id": 1,
      "title": "E-Commerce Platform",
      "description": "Full-stack e-commerce solution with secure payment integration...",
      "image": "/storage/images/projects/ecommerce.jpg",
      "live_url": "https://example.com",
      "github_url": "https://github.com/yourusername/ecommerce",
      "featured": true,
      "sort_order": 1,
      "technologies": ["Nuxt.js", "TypeScript", "Stripe", "PostgreSQL"]
    },
    {
      "id": 2,
      "title": "Task Management App",
      "description": "Collaborative task manager with real-time updates...",
      "image": null,
      "live_url": "https://example.com",
      "github_url": "https://github.com/yourusername/taskapp",
      "featured": true,
      "sort_order": 2,
      "technologies": ["Vue.js", "Firebase", "Tailwind CSS"]
    }
  ]
}
```

---

#### `GET /api/skills`

Used by: **Skills.vue**

```json
{
  "data": [
    {
      "id": 1,
      "name": "HTML5",
      "icon_svg": "<svg viewBox='0 0 128 128'>...</svg>",
      "category": "frontend",
      "sort_order": 1
    },
    {
      "id": 2,
      "name": "CSS3",
      "icon_svg": "<svg viewBox='0 0 128 128'>...</svg>",
      "category": "frontend",
      "sort_order": 2
    },
    {
      "id": 5,
      "name": "Vue.js",
      "icon_svg": "<svg viewBox='0 0 128 128'>...</svg>",
      "category": "frontend",
      "sort_order": 5
    },
    {
      "id": 8,
      "name": "Node.js",
      "icon_svg": "<svg viewBox='0 0 128 128'>...</svg>",
      "category": "backend",
      "sort_order": 8
    }
  ]
}
```

---

#### `GET /api/experiences`

Used by: **Experience.vue** (homepage, max 6), **experience/index.vue** (full list with year filter)

```json
{
  "data": [
    {
      "id": 1,
      "role": "YouTube UI Project",
      "company": "Build simple UI YouTube",
      "period": "2026 - Present",
      "description": "Developed a desktop-based YouTube interface using Java Swing...",
      "sort_order": 1,
      "technologies": ["Java", "Java Swing", "Oracle SQL"]
    },
    {
      "id": 2,
      "role": "Frontend Developer",
      "company": "Digital Agency",
      "period": "2025 - 2026",
      "description": "Built responsive and performant web applications...",
      "sort_order": 2,
      "technologies": ["Vue.js", "JavaScript", "CSS3", "Node.js"]
    }
  ]
}
```

---

#### `GET /api/experiences/{id}`

Used by: **experience/[id].vue** (detail page with gallery, achievements, categories, key differences)

```json
{
  "data": {
    "id": 1,
    "role": "YouTube UI Project",
    "company": "Build simple UI YouTube",
    "period": "2026 - Present",
    "description": "Developed a desktop-based YouTube interface using Java Swing...",
    "technologies": ["Java", "Java Swing", "Oracle SQL"],
    "images": [
      { "id": 1, "image_url": "/storage/images/experience/1/login.png", "sort_order": 1 },
      { "id": 2, "image_url": "/storage/images/experience/1/dashboard.png", "sort_order": 2 },
      { "id": 3, "image_url": "/storage/images/experience/1/manage-users.png", "sort_order": 3 }
    ],
    "achievements": [
      { "id": 1, "description": "Developed key user-facing features and modular components.", "sort_order": 1 },
      { "id": 2, "description": "Optimized application performance and responsiveness.", "sort_order": 2 },
      { "id": 3, "description": "Collaborated in a cross-functional team using Agile methodologies.", "sort_order": 3 }
    ],
    "categories": [
      {
        "id": 1,
        "category_key": "web_interface",
        "title": "Web Interface",
        "sort_order": 1,
        "items": [
          {
            "id": 1,
            "label": "Content Discovery",
            "period_label": "WEB MODULE",
            "subheading": "Content Delivery Network",
            "points": [
              "Homepage with trending video feed",
              "Search with filters and suggestions",
              "Watch page with video player",
              "Subscription feed",
              "Watch history"
            ],
            "technologies": ["Thumbnail Display", "Video Duration", "View Counts"],
            "sort_order": 1
          },
          {
            "id": 2,
            "label": "Social Interaction",
            "period_label": "SOCIAL",
            "subheading": "Community Engagement",
            "points": [
              "Comment system with replies",
              "Channel pages with content tabs"
            ],
            "technologies": ["Swing UI", "Event Listeners"],
            "sort_order": 2
          }
        ]
      },
      {
        "id": 2,
        "category_key": "admin_interface",
        "title": "Admin Interface",
        "sort_order": 2,
        "items": [
          {
            "id": 3,
            "label": "Dashboard Overview",
            "period_label": "ADMIN",
            "subheading": "Core System Management",
            "points": [
              "Global statistics dashboard",
              "Visual analytics and charts"
            ],
            "technologies": ["Admin Dash", "Chart Logic"],
            "sort_order": 1
          }
        ]
      }
    ],
    "key_differences": [
      {
        "id": 1,
        "feature": "Video Management",
        "web_description": "Users can upload, watch, like, and share videos",
        "admin_description": "Admins can approve, reject, delete, and moderate all videos",
        "sort_order": 1
      },
      {
        "id": 2,
        "feature": "User Management",
        "web_description": "Users manage their own profile and subscriptions",
        "admin_description": "Admins can create, edit, ban, and assign roles to all users",
        "sort_order": 2
      },
      {
        "id": 3,
        "feature": "Moderation",
        "web_description": "Users can report inappropriate content",
        "admin_description": "Admins review reports and enforce community guidelines",
        "sort_order": 3
      },
      {
        "id": 4,
        "feature": "Target Audience",
        "web_description": "General public — viewers and content creators",
        "admin_description": "Platform administrators and moderators",
        "sort_order": 4
      }
    ]
  }
}
```

---

#### `GET /api/badges`

Used by: **About.vue** (key skill badges)

```json
{
  "data": [
    { "id": 1, "name": "Frontend Development", "sort_order": 1 },
    { "id": 2, "name": "Responsive Design", "sort_order": 2 },
    { "id": 3, "name": "TypeScript", "sort_order": 3 },
    { "id": 4, "name": "Modern Frameworks", "sort_order": 4 },
    { "id": 5, "name": "UI/UX Design", "sort_order": 5 },
    { "id": 6, "name": "Problem Solving", "sort_order": 6 }
  ]
}
```

---

#### `GET /api/blog/tabs`

Used by: **blog/index.vue** (filter tab buttons)

```json
{
  "data": [
    { "id": 1, "name": "Laravel", "slug": "laravel", "sort_order": 1 },
    { "id": 2, "name": "Vue", "slug": "vue", "sort_order": 2 },
    { "id": 3, "name": "TypeScript", "slug": "typescript", "sort_order": 3 },
    { "id": 4, "name": "Laravel & Vue", "slug": "laravel-vue", "sort_order": 4 },
    { "id": 5, "name": "Interview", "slug": "interview", "sort_order": 5 },
    { "id": 6, "name": "Database", "slug": "database", "sort_order": 6 }
  ]
}
```

---

#### `GET /api/blog/posts`

Used by: **blog/index.vue** (post card grid)

Query params: `?tab={slug}` (optional, filter by tab category)

```json
{
  "data": [
    {
      "id": 1,
      "title": "Getting Started with Vue 3 Composition API",
      "slug": "vue-composition-api",
      "excerpt": "Learn how to use the Composition API in Vue 3 to build more maintainable and reusable components.",
      "date": "2026-01-15",
      "is_external": false,
      "external_url": null,
      "category": {
        "id": 2,
        "name": "Vue",
        "slug": "vue",
        "color": "green"
      },
      "tags": [
        { "id": 1, "name": "Vue", "slug": "vue", "color": "green" },
        { "id": 2, "name": "JavaScript", "slug": "javascript", "color": "yellow" }
      ]
    },
    {
      "id": 14,
      "title": "Laravel Interview Questions",
      "slug": "interview-laravel",
      "excerpt": "Prepare for your next Laravel interview with commonly asked questions...",
      "date": "2026-03-01",
      "is_external": false,
      "external_url": null,
      "category": {
        "id": 5,
        "name": "Interview",
        "slug": "interview",
        "color": "purple"
      },
      "tags": [
        { "id": 3, "name": "Laravel", "slug": "laravel", "color": "red" },
        { "id": 8, "name": "Interview", "slug": "interview", "color": "purple" }
      ]
    }
  ]
}
```

---

#### `GET /api/blog/posts/{slug}`

Used by: **blog/[slug].vue** (single post detail — replaces all individual .vue files)

```json
{
  "data": {
    "id": 4,
    "title": "Laravel Basic Setup Project",
    "slug": "laravel-setup",
    "excerpt": "Learn Laravel from scratch — installation, configuration, routing...",
    "content": "<section class=\"mb-12\"><p class=\"text-lg\">Laravel is a powerful PHP framework...</p></section><section class=\"mb-12\"><h2>Prerequisites</h2><ul><li>PHP >= 8.1</li>...</ul></section>",
    "date": "2025-12-28",
    "is_external": false,
    "external_url": null,
    "category": {
      "id": 1,
      "name": "Laravel",
      "slug": "laravel",
      "color": "red"
    },
    "tags": [
      { "id": 3, "name": "Laravel", "slug": "laravel", "color": "red" },
      { "id": 4, "name": "PHP", "slug": "php", "color": "purple" }
    ],
    "code_blocks": [
      {
        "id": 1,
        "title": "Terminal",
        "code": "composer create-project laravel/laravel my-app\ncd my-app\nphp artisan serve",
        "language": "bash",
        "sort_order": 1
      },
      {
        "id": 2,
        "title": ".env",
        "code": "APP_NAME=MyApp\nAPP_ENV=local\nAPP_KEY=base64:...\nDB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=my_app\nDB_USERNAME=root\nDB_PASSWORD=",
        "language": "env",
        "sort_order": 2
      }
    ]
  }
}
```

---

#### `GET /api/blog/tags`

Used by: future tag filter feature

```json
{
  "data": [
    { "id": 1, "name": "Vue", "slug": "vue", "color": "green" },
    { "id": 2, "name": "JavaScript", "slug": "javascript", "color": "yellow" },
    { "id": 3, "name": "Laravel", "slug": "laravel", "color": "red" },
    { "id": 4, "name": "PHP", "slug": "php", "color": "purple" },
    { "id": 5, "name": "Tailwind", "slug": "tailwind", "color": "blue" },
    { "id": 6, "name": "TypeScript", "slug": "typescript", "color": "blue" },
    { "id": 7, "name": "MySQL", "slug": "mysql", "color": "orange" },
    { "id": 8, "name": "Interview", "slug": "interview", "color": "purple" },
    { "id": 9, "name": "Database", "slug": "database", "color": "blue" },
    { "id": 10, "name": "SQL", "slug": "sql", "color": "orange" },
    { "id": 11, "name": "CSS", "slug": "css", "color": "blue" }
  ]
}
```

---

#### Nuxt.js Frontend Usage Example

How the Nuxt frontend would consume these APIs using `useAsyncData` / `$fetch`:

```typescript
// composables/useApi.ts
const API_BASE = 'https://admin.koeukdev.com/api'  // Laravel backend URL

export const useApi = () => {

  const getPersonalInfo = () =>
    useAsyncData('personal-info', () => $fetch(`${API_BASE}/personal-info`))

  const getProjects = (featured?: boolean) =>
    useAsyncData('projects', () => $fetch(`${API_BASE}/projects`, {
      params: featured ? { featured: true } : {}
    }))

  const getSkills = () =>
    useAsyncData('skills', () => $fetch(`${API_BASE}/skills`))

  const getExperiences = () =>
    useAsyncData('experiences', () => $fetch(`${API_BASE}/experiences`))

  const getExperience = (id: string) =>
    useAsyncData(`experience-${id}`, () => $fetch(`${API_BASE}/experiences/${id}`))

  const getBadges = () =>
    useAsyncData('badges', () => $fetch(`${API_BASE}/badges`))

  const getBlogTabs = () =>
    useAsyncData('blog-tabs', () => $fetch(`${API_BASE}/blog/tabs`))

  const getBlogPosts = (tab?: string) =>
    useAsyncData('blog-posts', () => $fetch(`${API_BASE}/blog/posts`, {
      params: tab ? { tab } : {}
    }))

  const getBlogPost = (slug: string) =>
    useAsyncData(`blog-post-${slug}`, () => $fetch(`${API_BASE}/blog/posts/${slug}`))

  const getBlogTags = () =>
    useAsyncData('blog-tags', () => $fetch(`${API_BASE}/blog/tags`))

  return {
    getPersonalInfo, getProjects, getSkills, getExperiences,
    getExperience, getBadges, getBlogTabs, getBlogPosts,
    getBlogPost, getBlogTags
  }
}
```

### Admin Vue Pages Structure (Inertia)

```
resources/js/
├── app.ts
├── Layouts/
│   └── AdminLayout.vue            ← Sidebar + topbar + Shadcn components
├── Pages/
│   ├── Auth/
│   │   └── Login.vue
│   ├── Dashboard/
│   │   └── Index.vue              ← Stats overview (total projects, posts, etc.)
│   ├── PersonalInfo/
│   │   └── Edit.vue               ← Single form: name, role, bio, email, image, resume, social links
│   ├── Projects/
│   │   ├── Index.vue              ← DataTable (Shadcn) with search, sort, delete
│   │   ├── Create.vue             ← Form: title, desc, image, urls, technologies, featured
│   │   └── Edit.vue
│   ├── Skills/
│   │   └── Index.vue              ← Inline CRUD table with SVG upload, category select
│   ├── Experiences/
│   │   ├── Index.vue              ← DataTable with period filter
│   │   ├── Create.vue             ← Multi-section form: info, technologies, images, achievements, categories, key differences
│   │   └── Edit.vue
│   ├── Badges/
│   │   └── Index.vue              ← Simple inline CRUD list with drag-to-reorder
│   ├── Blog/
│   │   ├── Tabs/
│   │   │   └── Index.vue          ← Inline CRUD
│   │   ├── Categories/
│   │   │   └── Index.vue          ← CRUD with tab select, color picker
│   │   ├── Posts/
│   │   │   ├── Index.vue          ← DataTable with category/tag filters, publish toggle
│   │   │   ├── Create.vue         ← Rich text editor, code blocks manager, tag selector
│   │   │   └── Edit.vue
│   │   └── Tags/
│   │       └── Index.vue          ← Inline CRUD with color picker
│   ├── Users/
│   │   ├── Index.vue
│   │   ├── Create.vue
│   │   └── Edit.vue
│   └── Roles/
│       └── Index.vue              ← Role + permission matrix checkboxes
└── Components/
    ├── DataTable.vue              ← Reusable Shadcn DataTable
    ├── DeleteConfirm.vue          ← Shadcn AlertDialog
    ├── ImageUpload.vue            ← Drag & drop image upload
    ├── RichTextEditor.vue         ← TipTap or similar for blog content
    ├── CodeBlockEditor.vue        ← Add/edit/reorder code blocks
    ├── SortableList.vue           ← Drag-to-reorder for sort_order fields
    └── ColorPicker.vue            ← For tag/category colors
```

### Laravel Backend Structure

```
app/
├── Http/
│   ├── Controllers/
│   │   ├── Admin/
│   │   │   ├── AuthController.php
│   │   │   ├── DashboardController.php
│   │   │   ├── PersonalInfoController.php
│   │   │   ├── SocialLinkController.php
│   │   │   ├── ProjectController.php
│   │   │   ├── SkillController.php
│   │   │   ├── ExperienceController.php
│   │   │   ├── BadgeController.php
│   │   │   ├── BlogTabController.php
│   │   │   ├── BlogCategoryController.php
│   │   │   ├── BlogPostController.php
│   │   │   ├── BlogTagController.php
│   │   │   ├── UserController.php
│   │   │   └── RoleController.php
│   │   └── Api/
│   │       ├── PersonalInfoController.php
│   │       ├── ProjectController.php
│   │       ├── SkillController.php
│   │       ├── ExperienceController.php
│   │       ├── BadgeController.php
│   │       └── BlogController.php
│   ├── Middleware/
│   │   ├── CheckRole.php          ← Role-based access (super_admin, admin, editor)
│   │   └── CheckPermission.php    ← Permission-based access
│   └── Requests/                  ← Form validation per resource
├── Models/
│   ├── User.php
│   ├── Role.php
│   ├── Permission.php
│   ├── PersonalInfo.php
│   ├── SocialLink.php
│   ├── Project.php
│   ├── ProjectTechnology.php
│   ├── Skill.php
│   ├── Experience.php
│   ├── ExperienceTechnology.php
│   ├── ExperienceImage.php
│   ├── ExperienceAchievement.php
│   ├── ExperienceCategory.php
│   ├── ExperienceCategoryItem.php
│   ├── ExperienceKeyDifference.php
│   ├── Badge.php
│   ├── BlogTab.php
│   ├── BlogCategory.php
│   ├── BlogPost.php
│   ├── BlogTag.php
│   └── BlogCodeBlock.php
└── database/
    └── migrations/
        ├── 001_create_roles_table.php
        ├── 002_create_permissions_table.php
        ├── 003_create_role_permissions_table.php
        ├── 004_create_users_table.php
        ├── 005_create_personal_info_table.php
        ├── 006_create_social_links_table.php
        ├── 007_create_projects_table.php
        ├── 008_create_project_technologies_table.php
        ├── 009_create_skills_table.php
        ├── 010_create_experiences_table.php
        ├── 011_create_experience_technologies_table.php
        ├── 012_create_experience_images_table.php
        ├── 013_create_experience_achievements_table.php
        ├── 014_create_experience_categories_table.php
        ├── 015_create_experience_category_items_table.php
        ├── 016_create_experience_key_differences_table.php
        ├── 017_create_badges_table.php
        ├── 018_create_blog_tabs_table.php
        ├── 019_create_blog_categories_table.php
        ├── 020_create_blog_posts_table.php
        ├── 021_create_blog_tags_table.php
        ├── 022_create_blog_post_tags_table.php
        └── 023_create_blog_code_blocks_table.php
```

---

## Frontend-to-Database Field Mapping

### Hero Section (components/Hero.vue)
| Frontend Display | Source | DB Table.Field |
|---|---|---|
| Greeting text ("Hi, I'm") | i18n | - (static translation) |
| Name with typewriter effect | `personalInfo.name` | `personal_info.name` |
| Role subtitle | `personalInfo.role` | `personal_info.role` |
| CTA button "View My Work" | i18n | - (static translation) |

### Featured Projects (components/Projects.vue + ProjectCard.vue)
| Frontend Display | Source | DB Table.Field |
|---|---|---|
| Section title | i18n | - (static translation) |
| Project title | `project.title` | `projects.title` |
| Project description | `project.description` | `projects.description` |
| Project image placeholder (first word of title) | `project.title` | `projects.title` |
| Technology badges (max 2 shown + count) | `project.technologies` | `project_technologies.name` |
| GitHub link | `project.githubUrl` | `projects.github_url` |
| Live demo link | `project.liveUrl` | `projects.live_url` |
| Featured filter | `project.featured` | `projects.featured` |

### Skills & Technologies (components/Skills.vue)
| Frontend Display | Source | DB Table.Field |
|---|---|---|
| Section title | i18n | - (static translation) |
| Skill name | `skill.name` | `skills.name` |
| Skill SVG icon | hardcoded SVG in component `icons` Record | `skills.icon_svg` (TEXT) |
| Category (frontend/backend/tools) | `skill.category` | `skills.category` |

### Work Experience - List (components/Experience.vue + pages/experience/index.vue)
| Frontend Display | Source | DB Table.Field |
|---|---|---|
| Section title | i18n | - (static translation) |
| Period badge | `exp.period` | `experiences.period` |
| Role/title | i18n key `experience.{id}.role` | `experiences.role` |
| Company | i18n key `experience.{id}.company` | `experiences.company` |
| Description (3 line clamp) | i18n key `experience.{id}.description` | `experiences.description` |
| Technology badges (max 3 shown + count) | `exp.technologies` | `experience_technologies.name` |
| Year filter tabs on index page | parsed from `exp.period` | `experiences.period` |
| "View All Experience" link | hardcoded | - (static) |

### Work Experience - Detail (pages/experience/[id].vue)
| Frontend Display | Source | DB Table.Field |
|---|---|---|
| Role title (large) | i18n key | `experiences.role` |
| Company name | i18n key | `experiences.company` |
| Period badge | `experience.period` | `experiences.period` |
| Image gallery + thumbnails + lightbox | `experience.images[]` | `experience_images.image_url` |
| "Role & Responsibility" description | i18n key | `experiences.description` |
| "Impact & Achievements" bullet points | **HARDCODED** (3 items) | `experience_achievements.description` **NEW** |
| Tech Stack sidebar | `experience.technologies` | `experience_technologies.name` |
| Category section titles | i18n key `experience.{id}.{section}.title` | `experience_categories.title` |
| Category item label | i18n key | `experience_category_items.label` |
| Category item subheading | `category.subheading` | `experience_category_items.subheading` |
| Category item points | i18n key per point | `experience_category_items.points` (JSON) |
| Category item tech pills | `category.technologies` | `experience_category_items.technologies` (JSON) |
| Key Differences table: Feature column | i18n key `.feature` | `experience_key_differences.feature` **NEW** |
| Key Differences table: Web column | i18n key `.web` | `experience_key_differences.web_description` **NEW** |
| Key Differences table: Admin column | i18n key `.admin` | `experience_key_differences.admin_description` **NEW** |
| Key Differences table header titles | i18n key | `experience_key_differences` (column headers from i18n or config) |

### About Me (components/About.vue)
| Frontend Display | Source | DB Table.Field |
|---|---|---|
| Section title | i18n | - (static translation) |
| Profile photo (Avatar) | `personalInfo.image` | `personal_info.image` |
| Name (avatar fallback initials) | `personalInfo.name` | `personal_info.name` |
| Bio paragraph | i18n key `about.bio` | `personal_info.bio` |
| Key skills badges | i18n keys per badge | `badges.name` |
| Download Resume button | links to `/resume.pdf` | `personal_info.resume_url` |

### Contact (components/Contact.vue)
| Frontend Display | Source | DB Table.Field |
|---|---|---|
| Section title | i18n | - (static translation) |
| Email link | `personalInfo.email` | `personal_info.email` |
| GitHub icon + link | `personalInfo.github` | `social_links.url` (platform=github) |
| LinkedIn icon + link | `personalInfo.linkedin` | `social_links.url` (platform=linkedin) |
| Telegram icon + link | `personalInfo.telegram` | `social_links.url` (platform=telegram) |
| Facebook icon + link | `personalInfo.facebook` | `social_links.url` (platform=facebook) |
| Social link SVG icons | hardcoded SVG per platform | `social_links.icon_svg` (TEXT) |
| Contact form (name, email, message) | local state | submitted to API (future) |

### Footer (components/Footer.vue)
| Frontend Display | Source | DB Table.Field |
|---|---|---|
| Social links (same 4 icons) | `personalInfo.github/linkedin/telegram/facebook` | `social_links` table |
| Copyright name | `personalInfo.name` | `personal_info.name` |
| "All rights reserved" | i18n | - (static translation) |
| "Built with" text | i18n | - (static translation) |

### Blog - List (pages/blog/index.vue)
| Frontend Display | Source | DB Table.Field |
|---|---|---|
| Page title | i18n | - (static translation) |
| Filter tabs (All, Laravel, Vue, etc.) | hardcoded `tabs` array | `blog_tabs.name`, `blog_tabs.slug` |
| Post card: gradient with category text | `post.category` | `blog_categories.name` |
| Post card: date | `post.date` | `blog_posts.date` |
| Post card: title | `post.title` | `blog_posts.title` |
| Post card: excerpt (2 line clamp) | `post.excerpt` | `blog_posts.excerpt` |
| Post card: tag badges | `post.tags[]` | `blog_tags.name` via `blog_post_tags` |
| Post link | `post.slug` | `blog_posts.slug` |
| External post behavior | `post.external` | `blog_posts.is_external` |

### Blog - Detail (pages/blog/*.vue)
| Frontend Display | Source | DB Table.Field |
|---|---|---|
| Back to blog link | static | - |
| Tag badges (colored: red, green, blue, etc.) | hardcoded per page | `blog_tags.name` + `blog_tags.color` |
| Post title | i18n key or hardcoded | `blog_posts.title` |
| Post date | hardcoded | `blog_posts.date` |
| Article content (paragraphs, headings, lists) | i18n keys or hardcoded HTML | `blog_posts.content` (LONGTEXT) |
| Code blocks with title + copy button | `codes[]` array + CodeBlock component | `blog_code_blocks.title`, `.code`, `.language` |
| Tip boxes | hardcoded in content | included in `blog_posts.content` |

---

## Roles & Permissions

### Roles

| Role | Description |
|---|---|
| Super Admin | Full system owner — manage everything |
| Admin | Content manager — CRUD on all content |
| Editor | Content assistant — create/edit only, no delete/publish |

### Permission Matrix

| Permission | Super Admin | Admin | Editor |
|---|---|---|---|
| View dashboard | Yes | Yes | Yes |
| Create/Edit content | Yes | Yes | Yes |
| Delete content | Yes | Yes | No |
| Publish/Unpublish | Yes | Yes | No |
| Manage users | Yes | No | No |
| Manage roles | Yes | No | No |
| Edit personal info & socials | Yes | Yes | No |
| Site settings | Yes | No | No |

---

## Tables

### 1. users

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| name | VARCHAR(100) | |
| email | VARCHAR(255) UNIQUE | |
| password | VARCHAR(255) | Hashed |
| role_id | INT FK -> roles | |
| avatar | VARCHAR(500) | Nullable |
| is_active | BOOLEAN | Default true |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 2. roles

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| name | VARCHAR(50) UNIQUE | super_admin, admin, editor |
| display_name | VARCHAR(100) | |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 3. permissions

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| name | VARCHAR(100) UNIQUE | e.g. projects.create, projects.delete |
| group | VARCHAR(50) | e.g. projects, skills, experiences |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 4. role_permissions (pivot)

| Field | Type | Notes |
|---|---|---|
| role_id | INT FK -> roles | |
| permission_id | INT FK -> permissions | |
| PRIMARY KEY | (role_id, permission_id) | |

---

### 5. personal_info

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| name | VARCHAR(100) | "Koeuk Dev" — used in Hero, About, Footer |
| role | VARCHAR(255) | "Web Developer & Creative Thinker" — Hero subtitle |
| bio | TEXT | About section paragraph |
| email | VARCHAR(255) | Contact section email link |
| image | VARCHAR(500) | Profile photo — About avatar + Hero |
| resume_url | VARCHAR(500) | Nullable — About "Download Resume" button |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 6. social_links

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| personal_info_id | INT FK -> personal_info | |
| platform | VARCHAR(50) | "github", "linkedin", "telegram", "facebook" |
| url | VARCHAR(500) | Full URL |
| icon_svg | TEXT | Full SVG markup for the icon (Contact + Footer display) |
| sort_order | INT | Default 0 — display order in Contact/Footer |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

---

### 7. projects

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| title | VARCHAR(255) | Card title + first word shown on image placeholder |
| description | TEXT | Card description (2 line clamp) |
| image | VARCHAR(500) | Nullable — project thumbnail (currently uses gradient placeholder) |
| live_url | VARCHAR(500) | Nullable — "Live Demo" link |
| github_url | VARCHAR(500) | Nullable — "Code" link |
| featured | BOOLEAN | Default false — only featured shown on homepage |
| sort_order | INT | Default 0 — scroll order |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 8. project_technologies

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| project_id | INT FK -> projects ON DELETE CASCADE | |
| name | VARCHAR(100) | Shown as badges (max 2 displayed + "+N" count) |

---

### 9. skills

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| name | VARCHAR(100) | "Vue.js", "Node.js" — displayed below icon |
| icon_svg | TEXT | Full SVG markup (the frontend uses inline SVG, not emoji) |
| category | ENUM('frontend', 'backend', 'tools') | Used for filtering/grouping |
| sort_order | INT | Default 0 — scroll order |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

---

### 10. experiences

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| role | VARCHAR(255) | Job title — card heading + detail page title |
| company | VARCHAR(255) | Company name — card subheading |
| period | VARCHAR(100) | "2025 - 2026" — card badge + detail badge + year filter parsing |
| description | TEXT | "Role & Responsibility" on detail page, 3-line clamp on card |
| sort_order | INT | Default 0 |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 11. experience_technologies

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| experience_id | INT FK -> experiences ON DELETE CASCADE | |
| name | VARCHAR(100) | Shown as badges on card (max 3 + count) and full list in detail sidebar |

### 12. experience_images

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| experience_id | INT FK -> experiences ON DELETE CASCADE | |
| image_url | VARCHAR(500) | Gallery image — main view + thumbnail strip + lightbox |
| sort_order | INT | Default 0 — slide order |

### 13. experience_achievements (NEW - was hardcoded)

Currently hardcoded in `pages/experience/[id].vue` lines 119-132 as 3 static bullet points.
This table makes them dynamic per experience.

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| experience_id | INT FK -> experiences ON DELETE CASCADE | |
| description | TEXT | Bullet point text in "Impact & Achievements" section |
| sort_order | INT | Default 0 |

### 14. experience_categories

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| experience_id | INT FK -> experiences ON DELETE CASCADE | |
| category_key | VARCHAR(100) | "web_interface", "admin_interface" |
| title | VARCHAR(255) | Section heading (e.g. "Web Interface", "Admin Interface") |
| sort_order | INT | Default 0 |

### 15. experience_category_items

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| category_id | INT FK -> experience_categories ON DELETE CASCADE | |
| label | VARCHAR(255) | Item heading (e.g. "Content Discovery", "User Management") |
| period_label | VARCHAR(100) | Badge text: "WEB MODULE", "SOCIAL", "ADMIN" |
| subheading | VARCHAR(255) | Nullable — subtitle below label |
| points | JSON | Array of bullet point strings |
| technologies | JSON | Array of tech pill labels |
| sort_order | INT | Default 0 |

### 16. experience_key_differences (NEW - was i18n only)

Renders as a 3-column comparison table on the experience detail page.

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| experience_id | INT FK -> experiences ON DELETE CASCADE | |
| feature | VARCHAR(255) | First column: "Video Management", "User Management", etc. |
| web_description | TEXT | Second column: web interface description |
| admin_description | TEXT | Third column: admin interface description |
| sort_order | INT | Default 0 — row order in table |

---

### 17. badges

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| name | VARCHAR(100) | "Frontend Development" — About section key skill badges |
| sort_order | INT | Default 0 |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

---

### 18. blog_tabs

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| name | VARCHAR(100) | "Laravel", "Vue", "Interview", "Database" |
| slug | VARCHAR(100) UNIQUE | "laravel", "vue", "interview", "database" — used in URL query ?tab= |
| sort_order | INT | Default 0 |
| is_active | BOOLEAN | Default true — show/hide tab |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 19. blog_categories

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| tab_id | INT FK -> blog_tabs | Which tab filters to this category |
| name | VARCHAR(100) | "Laravel", "Laravel & Vue" — shown on post card gradient |
| slug | VARCHAR(100) UNIQUE | |
| color | VARCHAR(50) | Badge color: "red", "green", "purple" |
| sort_order | INT | Default 0 |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 20. blog_posts

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| category_id | INT FK -> blog_categories | |
| title | VARCHAR(255) | Card title + detail page heading |
| slug | VARCHAR(255) UNIQUE | URL path e.g. "laravel-setup" — used as /blog/{slug} |
| excerpt | TEXT | Card description (2 line clamp) |
| content | LONGTEXT | Full blog content (HTML/Markdown) — renders in detail page |
| date | DATE | Shown on card + detail page |
| is_published | BOOLEAN | Default false — only published shown on frontend |
| is_external | BOOLEAN | Default false — if true, opens in new tab |
| external_url | VARCHAR(500) | Nullable — used when is_external=true |
| sort_order | INT | Default 0 |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 21. blog_tags

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| name | VARCHAR(100) | "Laravel", "PHP", "Vue", "Interview" |
| slug | VARCHAR(100) UNIQUE | |
| color | VARCHAR(50) | Badge color class: "red", "green", "blue", "purple", "orange" — used on detail page tag badges |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 22. blog_post_tags (pivot)

| Field | Type | Notes |
|---|---|---|
| blog_post_id | INT FK -> blog_posts ON DELETE CASCADE | |
| blog_tag_id | INT FK -> blog_tags ON DELETE CASCADE | |
| PRIMARY KEY | (blog_post_id, blog_tag_id) | |

### 23. blog_code_blocks

| Field | Type | Notes |
|---|---|---|
| id | INT PK AUTO_INCREMENT | |
| blog_post_id | INT FK -> blog_posts ON DELETE CASCADE | |
| title | VARCHAR(255) | CodeBlock header: "Terminal", ".env", "app/Models/Post.php" |
| code | TEXT | Raw code content — rendered in `<pre><code>` with copy button |
| language | VARCHAR(50) | "bash", "php", "js", "vue" — for syntax highlighting |
| sort_order | INT | Default 0 — order within the post |

---

## Entity Relationships

```
users *──1 roles
roles *──* permissions (via role_permissions)

personal_info 1──* social_links

projects      1──* project_technologies

skills        (standalone)

experiences   1──* experience_technologies
experiences   1──* experience_images
experiences   1──* experience_achievements
experiences   1──* experience_categories
experiences   1──* experience_key_differences
experience_categories 1──* experience_category_items

badges        (standalone)

blog_tabs       1──* blog_categories
blog_categories 1──* blog_posts
blog_posts      *──* blog_tags (via blog_post_tags)
blog_posts      1──* blog_code_blocks
```

---

## API Endpoints

Note: Admin routes use **Inertia.js** (not REST API). Public routes use **REST API** for the Nuxt frontend.
See "Admin Route Structure" and "Public API" sections above for full route details.

---

## Total: 23 Tables

| # | Table | Section | Frontend Component |
|---|---|---|---|
| 1 | users | Auth | Admin only |
| 2 | roles | Auth | Admin only |
| 3 | permissions | Auth | Admin only |
| 4 | role_permissions | Auth | Admin only |
| 5 | personal_info | About / Contact / Footer / Hero | Hero.vue, About.vue, Contact.vue, Footer.vue |
| 6 | social_links | Contact / Footer | Contact.vue, Footer.vue |
| 7 | projects | Featured Projects | Projects.vue, ProjectCard.vue |
| 8 | project_technologies | Featured Projects | ProjectCard.vue |
| 9 | skills | Skills & Technologies | Skills.vue |
| 10 | experiences | Work Experience | Experience.vue, experience/index.vue, experience/[id].vue |
| 11 | experience_technologies | Work Experience | Experience.vue, experience/[id].vue |
| 12 | experience_images | Experience Detail | experience/[id].vue (gallery) |
| 13 | experience_achievements | Experience Detail | experience/[id].vue (Impact & Achievements) |
| 14 | experience_categories | Experience Detail | experience/[id].vue (Project Breakdown) |
| 15 | experience_category_items | Experience Detail | experience/[id].vue (Category items) |
| 16 | experience_key_differences | Experience Detail | experience/[id].vue (Comparison table) |
| 17 | badges | About Me | About.vue |
| 18 | blog_tabs | Blog | blog/index.vue (filter tabs) |
| 19 | blog_categories | Blog | blog/index.vue (post cards) |
| 20 | blog_posts | Blog | blog/index.vue + blog/*.vue detail pages |
| 21 | blog_tags | Blog | blog/index.vue (tag badges) + detail pages |
| 22 | blog_post_tags | Blog | blog/index.vue + detail pages |
| 23 | blog_code_blocks | Blog | blog/*.vue detail pages (CodeBlock component) |
