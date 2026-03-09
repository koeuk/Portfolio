# Portfolio API Documentation

## Base Configuration

```
API Base URL: http://localhost:8000/api
```

**Translation Support:** All content endpoints accept a `?locale=` parameter:
- `en` - English (default)
- `km` - Khmer (ភាសាខ្មែរ)
- `zh` - Simplified Chinese (简体中文)

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000/api'
    }
  }
})
```

**Locale composable for Nuxt:**
```ts
// composables/useLocale.ts
export const useAppLocale = () => {
  const locale = useState('locale', () => 'en')
  const setLocale = (l: 'en' | 'km' | 'zh') => { locale.value = l }
  return { locale, setLocale }
}
```

**Reusable API fetch helper:**
```ts
// composables/useApi.ts
export const useApi = <T>(endpoint: string, options?: any) => {
  const { locale } = useAppLocale()
  const config = useRuntimeConfig()

  return useFetch<T>(() => {
    const separator = endpoint.includes('?') ? '&' : '?'
    return `${config.public.apiBase}${endpoint}${separator}locale=${locale.value}`
  }, options)
}
```

---

## 1. Personal Info + Social Links

```
GET /api/personal-info?locale=en
```

**Response:**
```json
{
  "data": {
    "id": 1,
    "name": "Koeuk Kosol",
    "role": "Full Stack Web Developer",
    "bio": "I'm a passionate developer...",
    "email": "koeukkos@gmail.com",
    "image": "/storage/images/profile.jpg",
    "resume_url": "/storage/resume/resume.pdf",
    "social_links": [
      {
        "id": 1,
        "platform": "GitHub",
        "url": "https://github.com/...",
        "icon_svg": "<svg>...</svg>",
        "sort_order": 1
      }
    ]
  }
}
```

**Translatable fields:** `name`, `role`, `bio`

**Nuxt usage:**
```ts
const { data: personalInfo } = await useApi('/personal-info')
// Access: personalInfo.value.data.name, personalInfo.value.data.social_links
```

---

## 2. Projects

```
GET /api/projects?locale=en              → All projects
GET /api/projects?featured=true&locale=km → Featured projects in Khmer
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "title": "Portfolio Website V2",
      "description": "<p>A modern portfolio...</p>",
      "image": "/storage/images/projects/portfolio.jpg",
      "live_url": "https://...",
      "github_url": "https://github.com/...",
      "featured": true,
      "sort_order": 1,
      "technologies": ["Nuxt.js", "Tailwind CSS", "Laravel"]
    }
  ]
}
```

**Translatable fields:** `title`, `description`

**Nuxt usage:**
```ts
// All projects
const { data: projects } = await useApi('/projects')

// Featured only
const { data: featured } = await useApi('/projects?featured=true')

// Access: projects.value.data[0].title
```

---

## 3. Skills

```
GET /api/skills?locale=en
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Laravel",
      "icon_svg": "<svg>...</svg>",
      "category": "Backend",
      "sort_order": 1
    }
  ]
}
```

**Translatable fields:** `name`

**Nuxt usage:**
```ts
const { data: skills } = await useApi('/skills')

// Group by category
const grouped = computed(() => {
  const groups: Record<string, any[]> = {}
  skills.value?.data?.forEach((skill: any) => {
    if (!groups[skill.category]) groups[skill.category] = []
    groups[skill.category].push(skill)
  })
  return groups
})
```

---

## 4. Experiences (List)

```
GET /api/experiences?locale=en
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "role": "Full Stack Developer",
      "company": "Jeecam Solution",
      "period": "2024-07 - Present",
      "description": "<p>Working on web applications...</p>",
      "sort_order": 1,
      "technologies": ["Laravel", "Vue.js", "MySQL"]
    }
  ]
}
```

**Translatable fields:** `role`, `company`, `description`

**Nuxt usage:**
```ts
const { data: experiences } = await useApi('/experiences')
```

---

## 5. Experience Detail

```
GET /api/experiences/{id}?locale=en
```

**Response:**
```json
{
  "data": {
    "id": 1,
    "role": "Full Stack Developer",
    "company": "Jeecam Solution",
    "period": "2024-07 - Present",
    "description": "<p>Working on web applications...</p>",
    "sort_order": 1,
    "technologies": ["Laravel", "Vue.js", "MySQL"],
    "images": [
      { "id": 1, "image_url": "/storage/images/experience/1/img1.jpg", "sort_order": 1 }
    ],
    "achievements": [
      { "id": 1, "description": "Built admin dashboard...", "sort_order": 1 }
    ],
    "categories": [
      {
        "id": 1,
        "category_key": "responsibilities",
        "title": "Key Responsibilities",
        "sort_order": 1,
        "items": [
          {
            "id": 1,
            "label": "Full Stack Development",
            "period_label": null,
            "subheading": null,
            "points": ["Developed web apps...", "Built REST APIs..."],
            "technologies": ["Laravel", "Vue.js"],
            "sort_order": 1
          }
        ]
      }
    ],
    "key_differences": [
      {
        "id": 1,
        "feature": "Architecture",
        "web_description": "MVC pattern",
        "admin_description": "Monolithic admin",
        "sort_order": 1
      }
    ]
  }
}
```

**Translatable fields:** `role`, `company`, `description`

**Nuxt usage:**
```ts
const route = useRoute()
const { data: experience } = await useApi(`/experiences/${route.params.id}`)
// Access: experience.value.data.categories, experience.value.data.achievements
```

---

## 6. Badges

```
GET /api/badges?locale=en
```

**Response:**
```json
{
  "data": [
    { "id": 1, "name": "Self Taught Developer", "sort_order": 1 },
    { "id": 2, "name": "Open Source Enthusiast", "sort_order": 2 }
  ]
}
```

**Translatable fields:** `name`

**Nuxt usage:**
```ts
const { data: badges } = await useApi('/badges')
```

---

## 7. Blog Tabs

```
GET /api/blog/tabs?locale=en
```

**Response:**
```json
{
  "data": [
    { "id": 1, "name": "Web Development", "slug": "web-development", "sort_order": 1, "is_active": true },
    { "id": 2, "name": "Laravel", "slug": "laravel", "sort_order": 2, "is_active": true }
  ]
}
```

**Translatable fields:** `name`

**Nuxt usage:**
```ts
const { data: tabs } = await useApi('/blog/tabs')
```

---

## 8. Blog Posts (Paginated)

```
GET /api/blog/posts?locale=en                     → All published posts
GET /api/blog/posts?tab=laravel&locale=km          → Filter by tab, in Khmer
GET /api/blog/posts?per_page=10&page=2&locale=zh   → Paginated, in Chinese
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "title": "Building REST APIs with Laravel",
      "slug": "building-rest-apis-with-laravel",
      "excerpt": "Learn how to build...",
      "date": "2025-01-15",
      "is_published": true,
      "is_external": false,
      "external_url": null,
      "sort_order": 1,
      "category": {
        "id": 1,
        "name": "Backend Development",
        "slug": "backend-development",
        "color": "#ef4444",
        "sort_order": 1
      },
      "tags": [
        { "id": 1, "name": "Laravel", "slug": "laravel", "color": "#ef4444" },
        { "id": 2, "name": "API", "slug": "api", "color": "#3b82f6" }
      ]
    }
  ],
  "links": { "first": "...", "last": "...", "prev": null, "next": "..." },
  "meta": { "current_page": 1, "last_page": 2, "per_page": 15, "total": 20 }
}
```

**Translatable fields:** `title`, `excerpt`, `category.name`, `tags[].name`

**Nuxt usage:**
```ts
const activeTab = ref('')
const page = ref(1)

const { data: posts } = await useApi(
  computed(() => {
    const params = new URLSearchParams()
    if (activeTab.value) params.set('tab', activeTab.value)
    params.set('page', page.value.toString())
    return `/blog/posts?${params}`
  })
)
// Access: posts.value.data, posts.value.meta.last_page
```

---

## 9. Blog Post Detail (by slug)

```
GET /api/blog/posts/{slug}?locale=en
```

**Response:**
```json
{
  "data": {
    "id": 1,
    "title": "Building REST APIs with Laravel",
    "slug": "building-rest-apis-with-laravel",
    "excerpt": "Learn how to build...",
    "content": "<p>Full HTML content here...</p>",
    "date": "2025-01-15",
    "is_published": true,
    "is_external": false,
    "external_url": null,
    "sort_order": 1,
    "category": {
      "id": 1,
      "name": "Backend Development",
      "slug": "backend-development",
      "color": "#ef4444",
      "sort_order": 1
    },
    "tags": [
      { "id": 1, "name": "Laravel", "slug": "laravel", "color": "#ef4444" }
    ],
    "code_blocks": [
      {
        "id": 1,
        "title": "Route Definition",
        "code": "Route::apiResource('posts', PostController::class);",
        "language": "php",
        "sort_order": 1
      }
    ]
  }
}
```

**Translatable fields:** `title`, `excerpt`, `content`, `category.name`, `tags[].name`

Note: `content` is only returned on the single post endpoint, not in the list.

**Nuxt usage:**
```ts
const route = useRoute()
const { data: post } = await useApi(`/blog/posts/${route.params.slug}`)
// Access: post.value.data.content, post.value.data.code_blocks
```

---

## 10. Blog Tags

```
GET /api/blog/tags?locale=en
```

**Response:**
```json
{
  "data": [
    { "id": 1, "name": "Laravel", "slug": "laravel", "color": "#ef4444" },
    { "id": 2, "name": "Vue.js", "slug": "vuejs", "color": "#22c55e" }
  ]
}
```

**Translatable fields:** `name`

**Nuxt usage:**
```ts
const { data: tags } = await useApi('/blog/tags')
```

---

## CORS Configuration

Laravel `.env`:
```
FRONTEND_URL=http://localhost:3000
```

`config/cors.php`:
```php
'allowed_origins' => [env('FRONTEND_URL', 'http://localhost:3000')],
```

---

## Quick Reference

| Endpoint | Translatable Fields | Rate Limit |
|---|---|---|
| `GET /api/personal-info` | name, role, bio | 60/min |
| `GET /api/projects` | title, description | 60/min |
| `GET /api/skills` | name | 60/min |
| `GET /api/experiences` | role, company, description | 60/min |
| `GET /api/experiences/{id}` | role, company, description | 60/min |
| `GET /api/badges` | name | 60/min |
| `GET /api/blog/tabs` | name | 60/min |
| `GET /api/blog/posts` | title, excerpt, category.name, tags[].name | 60/min |
| `GET /api/blog/posts/{slug}` | title, excerpt, content, category.name, tags[].name | 60/min |
| `GET /api/blog/tags` | name | 60/min |

All responses wrapped in `"data"` key. All endpoints support `?locale=en|km|zh` for translations (defaults to `en`).
