export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  tags: string[]
  slug: string
  external?: boolean
}

export const useBlog = () => {
  const posts: BlogPost[] = [
    {
      id: 19,
      title: 'Database Basics: From Zero to Real Tables',
      excerpt: 'Learn database fundamentals from scratch — data types, CREATE TABLE, primary keys, foreign keys, INSERT, SELECT, JOIN, and build a real e-commerce database.',
      date: 'Mar 6, 2026',
      category: 'Database',
      tags: ['Database', 'SQL'],
      slug: '/read-more/database-basics'
    },
    {
      id: 14,
      title: 'Laravel Interview Questions',
      excerpt: 'Prepare for your next Laravel interview with commonly asked questions covering routing, Eloquent, middleware, and more.',
      date: 'Mar 1, 2026',
      category: 'Interview',
      tags: ['Laravel', 'Interview'],
      slug: '/read-more/interview-laravel'
    },
    {
      id: 15,
      title: 'Vue.js Interview Questions',
      excerpt: 'Master Vue.js interview questions — reactivity, lifecycle hooks, Composition API, Vuex/Pinia, and component patterns.',
      date: 'Feb 25, 2026',
      category: 'Interview',
      tags: ['Vue', 'Interview'],
      slug: '/read-more/interview-vue'
    },
    {
      id: 16,
      title: 'MySQL Interview Questions',
      excerpt: 'Common MySQL interview questions — indexes, joins, transactions, optimization, stored procedures, and replication.',
      date: 'Feb 20, 2026',
      category: 'Interview',
      tags: ['MySQL', 'Interview'],
      slug: '/read-more/interview-mysql'
    },
    {
      id: 17,
      title: 'SQL Database Interview Questions',
      excerpt: 'Essential SQL interview questions — SELECT queries, subqueries, aggregation, normalization, and database design.',
      date: 'Feb 15, 2026',
      category: 'Interview',
      tags: ['SQL', 'Interview'],
      slug: '/read-more/interview-sql'
    },
    {
      id: 18,
      title: 'TypeScript Interview Questions',
      excerpt: 'Top TypeScript interview questions — types vs interfaces, generics, utility types, type guards, and advanced patterns.',
      date: 'Feb 10, 2026',
      category: 'Interview',
      tags: ['TypeScript', 'Interview'],
      slug: '/read-more/interview-typescript'
    },
    {
      id: 1,
      title: 'Getting Started with Vue 3 Composition API',
      excerpt: 'Learn how to use the Composition API in Vue 3 to build more maintainable and reusable components.',
      date: 'Jan 15, 2026',
      category: 'Vue',
      tags: ['Vue', 'JavaScript'],
      slug: '/read-more/vue-composition-api'
    },
    {
      id: 2,
      title: 'Building Responsive Layouts with Tailwind CSS',
      excerpt: 'A comprehensive guide to creating beautiful responsive designs using Tailwind CSS utility classes.',
      date: 'Jan 10, 2026',
      category: 'CSS',
      tags: ['Tailwind', 'CSS'],
      slug: '/read-more/tailwind-responsive-layouts'
    },
    {
      id: 3,
      title: 'TypeScript Best Practices for 2026',
      excerpt: 'Discover the latest TypeScript patterns and practices to write cleaner, more type-safe code.',
      date: 'Jan 5, 2026',
      category: 'TypeScript',
      tags: ['TypeScript', 'JavaScript'],
      slug: '/read-more/typescript-best-practices'
    },
    {
      id: 4,
      title: 'Laravel Basic Setup Project',
      excerpt: 'Learn Laravel from scratch — installation, configuration, routing, controllers, models, and your first CRUD application.',
      date: 'Dec 28, 2025',
      category: 'Laravel',
      tags: ['Laravel', 'PHP'],
      slug: '/read-more/laravel-setup'
    },
    {
      id: 5,
      title: 'Full-Stack App with Laravel & Vue',
      excerpt: 'Create a modern full-stack application combining Laravel as the backend API with Vue.js on the frontend.',
      date: 'Dec 20, 2025',
      category: 'Laravel & Vue',
      tags: ['Laravel', 'Vue'],
      slug: '/read-more/laravel-vue-fullstack'
    },
    {
      id: 6,
      title: 'Laravel Eloquent ORM',
      excerpt: 'Master Eloquent ORM — models, CRUD operations, query scopes, mutators, accessors, and advanced query techniques.',
      date: 'Dec 15, 2025',
      category: 'Laravel',
      tags: ['Laravel', 'PHP'],
      slug: '/read-more/laravel-eloquent'
    },
    {
      id: 7,
      title: 'Laravel Eloquent Relationships',
      excerpt: 'Learn all Eloquent relationships — hasOne, hasMany, belongsTo, many-to-many, polymorphic, and eager loading.',
      date: 'Dec 10, 2025',
      category: 'Laravel',
      tags: ['Laravel', 'PHP'],
      slug: '/read-more/laravel-relationships'
    },
    {
      id: 8,
      title: 'Laravel Authentication',
      excerpt: 'Implement user authentication — login, registration, guards, providers, and protecting routes with middleware.',
      date: 'Dec 5, 2025',
      category: 'Laravel',
      tags: ['Laravel', 'PHP'],
      slug: '/read-more/laravel-authentication'
    },
    {
      id: 9,
      title: 'Laravel Authorization',
      excerpt: 'Control user access with Gates and Policies — define who can perform what actions in your application.',
      date: 'Dec 1, 2025',
      category: 'Laravel',
      tags: ['Laravel', 'PHP'],
      slug: '/read-more/laravel-authorization'
    },
    {
      id: 10,
      title: 'Laravel Email Verification',
      excerpt: 'Add email verification to your app — verify users after registration and protect routes for verified users only.',
      date: 'Nov 28, 2025',
      category: 'Laravel',
      tags: ['Laravel', 'PHP'],
      slug: '/read-more/laravel-verification'
    },
    {
      id: 11,
      title: 'Laravel Encryption',
      excerpt: 'Secure sensitive data with Laravel encryption — encrypt, decrypt, and understand how Laravel protects your data.',
      date: 'Nov 25, 2025',
      category: 'Laravel',
      tags: ['Laravel', 'PHP'],
      slug: '/read-more/laravel-encryption'
    },
    {
      id: 12,
      title: 'Laravel Hashing',
      excerpt: 'Hash passwords and sensitive data — bcrypt, argon2, and how Laravel handles secure password hashing.',
      date: 'Nov 22, 2025',
      category: 'Laravel',
      tags: ['Laravel', 'PHP'],
      slug: '/read-more/laravel-hashing'
    },
    {
      id: 13,
      title: 'Laravel Password Reset',
      excerpt: 'Implement password reset — send reset emails, handle reset tokens, and customize the reset flow.',
      date: 'Nov 20, 2025',
      category: 'Laravel',
      tags: ['Laravel', 'PHP'],
      slug: '/read-more/laravel-passwords'
    },
    {
      id: 20,
      title: 'Learn HTML5: The Foundation of the Web',
      excerpt: 'Start with the building blocks of the web — semantic tags, forms, multimedia, accessibility, and modern HTML5 APIs.',
      date: 'Apr 1, 2026',
      category: 'HTML',
      tags: ['HTML5', 'Frontend'],
      slug: '/read-more/learn-html5'
    },
    {
      id: 21,
      title: 'Learn CSS3: Style the Modern Web',
      excerpt: 'Master modern CSS — Flexbox, Grid, custom properties, animations, transforms, and responsive design patterns.',
      date: 'Apr 2, 2026',
      category: 'CSS',
      tags: ['CSS3', 'Frontend'],
      slug: '/read-more/learn-css3'
    },
    {
      id: 22,
      title: 'Learn JavaScript: From Zero to Modern ES',
      excerpt: 'Get fluent in JavaScript — variables, functions, async/await, modules, ES2022+ features, and how the language really works.',
      date: 'Apr 3, 2026',
      category: 'JavaScript',
      tags: ['JavaScript', 'Frontend'],
      slug: '/read-more/learn-javascript'
    },
    {
      id: 23,
      title: 'Learn Nuxt.js: The Vue Meta-Framework',
      excerpt: 'Build full-featured Vue apps with Nuxt 3 — file-based routing, server routes, auto-imports, SSR, and modules.',
      date: 'Apr 4, 2026',
      category: 'Vue',
      tags: ['Nuxt', 'Vue'],
      slug: '/read-more/learn-nuxt'
    },
    {
      id: 24,
      title: 'Learn Tailwind CSS: Utility-First Styling',
      excerpt: 'Stop writing custom CSS — learn Tailwind\'s utility classes, theming, dark mode, and design system workflow.',
      date: 'Apr 5, 2026',
      category: 'CSS',
      tags: ['Tailwind', 'CSS'],
      slug: '/read-more/learn-tailwind'
    },
    {
      id: 25,
      title: 'Learn Git: Version Control Essentials',
      excerpt: 'Master Git fundamentals — clone, commit, branch, merge, rebase, and the workflows real teams actually use.',
      date: 'Apr 6, 2026',
      category: 'Tools',
      tags: ['Git', 'Tools'],
      slug: '/read-more/learn-git'
    },
    {
      id: 26,
      title: 'Learn VS Code: A Faster Way to Code',
      excerpt: 'Get the most out of VS Code — keybindings, multi-cursor editing, refactoring tools, debugging, and must-have extensions.',
      date: 'Apr 7, 2026',
      category: 'Tools',
      tags: ['VS Code', 'Tools'],
      slug: '/read-more/learn-vscode'
    },
  ]

  return { posts }
}
