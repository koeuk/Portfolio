# Portfolio Seed Data

All data extracted from the Nuxt.js frontend to insert into the Laravel backend database.

---

## 1. `roles`

| name | display_name |
|---|---|
| super_admin | Super Admin |
| admin | Admin |
| editor | Editor |

---

## 2. `personal_info`

| Field | Value |
|---|---|
| name | Koeuk Dev |
| role | Web Developer & Creative Thinker |
| bio | Passionate web developer with expertise in modern JavaScript frameworks. I specialize in building beautiful, responsive websites and applications that solve real-world problems. With a focus on clean code and exceptional user experiences, I bring ideas to life through technology. |
| email | koeukkos@gmail.com |
| image | /images/koeuk.jpg |
| resume_url | /resume.pdf |

---

## 3. `social_links` (personal_info_id = 1)

| platform | url | icon_svg | sort_order |
|---|---|---|---|
| github | https://github.com/koeuk | `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>` | 1 |
| linkedin | https://www.linkedin.com/in/koeuk-kos-130482299/ | `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>` | 2 |
| telegram | https://t.me/koeuk24 | `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>` | 3 |
| facebook | https://facebook.com/koeuk24 | `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>` | 4 |

---

## 4. `projects`

| id | title | description | image | live_url | github_url | featured | sort_order |
|---|---|---|---|---|---|---|---|
| 1 | E-Commerce Platform | Full-stack e-commerce solution with secure payment integration, inventory management, and modern shopping experience | /images/projects/ecommerce.jpg | https://example.com | https://github.com/yourusername/ecommerce | true | 1 |
| 2 | Task Management App | Collaborative task manager with real-time updates, drag-and-drop functionality, and team collaboration features | /images/projects/taskapp.jpg | https://example.com | https://github.com/yourusername/taskapp | true | 2 |
| 3 | Portfolio Website | Clean and modern portfolio showcasing projects with smooth animations and responsive design | /images/projects/portfolio.jpg | NULL | https://github.com/yourusername/portfolio | true | 3 |
| 4 | Weather Dashboard | Real-time weather application with beautiful visualizations, forecasts, and location-based services | /images/projects/weather.jpg | https://example.com | https://github.com/yourusername/weather | true | 4 |
| 5 | Social Media App | Modern social platform with real-time messaging, post sharing, and user interactions | /images/projects/social.jpg | https://example.com | https://github.com/yourusername/social | true | 5 |
| 6 | Blog Platform | Content management system with markdown support, SEO optimization, and admin dashboard | /images/projects/blog.jpg | https://example.com | https://github.com/yourusername/blog | true | 6 |
| 7 | Fitness Tracker | Health and fitness app with workout tracking, progress charts, and personalized plans | /images/projects/fitness.jpg | https://example.com | https://github.com/yourusername/fitness | true | 7 |

---

## 5. `project_technologies`

| project_id | name |
|---|---|
| 1 | Nuxt.js |
| 1 | TypeScript |
| 1 | Stripe |
| 1 | PostgreSQL |
| 2 | Vue.js |
| 2 | Firebase |
| 2 | Tailwind CSS |
| 3 | Nuxt.js |
| 3 | TypeScript |
| 3 | Tailwind CSS |
| 4 | Vue.js |
| 4 | OpenWeather API |
| 4 | Chart.js |
| 5 | Nuxt.js |
| 5 | Socket.io |
| 5 | MongoDB |
| 6 | Nuxt.js |
| 6 | Prisma |
| 6 | PostgreSQL |
| 7 | Vue.js |
| 7 | Node.js |
| 7 | MongoDB |

---

## 6. `skills`

| name | icon_svg | category | sort_order |
|---|---|---|---|
| HTML5 | `<svg viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/></svg>` | frontend | 1 |
| CSS3 | `<svg viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543z"/><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95z"/><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018z"/><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711zm-.047 27.994v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711z"/></svg>` | frontend | 2 |
| JavaScript | `<svg viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.184H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/></svg>` | frontend | 3 |
| TypeScript | `<svg viewBox="0 0 128 128"><path fill="#007acc" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a6.54 6.54 0 00-5.4-3.1c-3.47-.26-5.74 1.72-5.73 5a4.59 4.59 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82.5 101l3.59-2.08.75 1.11a9.67 9.67 0 004.25 4.06c6.15 2.31 11.55.66 12.45-3.8a4.73 4.73 0 00-1-3.74c-1-1.26-2.86-2.38-8-4.73-5.89-2.69-8.45-4.33-10.52-6.7a14.2 14.2 0 01-3-8.4A13.88 13.88 0 0183.63 66a19 19 0 0113.49-8.08 31.14 31.14 0 015.65 0zM73.72 68.45L74 81.5h-16V127H45V81.5H29V68.91a79.81 79.81 0 01.26-13 1.56 1.56 0 01.18-.16 297.53 297.53 0 0122.28-.1z"/></svg>` | frontend | 4 |
| Vue.js | `<svg viewBox="0 0 128 128"><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"/><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"/></svg>` | frontend | 5 |
| Nuxt.js | `<svg viewBox="0 0 128 128"><path fill="#00dc82" d="M39.627 103.435H97.81l-29.09-50.372-29.092 50.372z"/><path fill="#00dc82" d="M75.513 103.435h40.62L75.51 31.42l-20.31 35.175 20.31 35.175 .003 1.665z"/><path fill="#003543" d="M75.513 103.435L55.2 68.26 75.51 33.085l40.623 70.35H75.513z" opacity=".5"/><path fill="#00dc82" d="M11.867 103.435h49.453L36.594 60.088 11.867 103.435z"/></svg>` | frontend | 6 |
| Tailwind CSS | `<svg viewBox="0 0 128 128"><path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64z"/></svg>` | frontend | 7 |
| Node.js | `<svg viewBox="0 0 128 128"><path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073z"/></svg>` | backend | 8 |
| Git | `<svg viewBox="0 0 128 128"><path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"/></svg>` | tools | 9 |
| VS Code | `<svg viewBox="0 0 128 128"><path fill="#0065A9" d="M95.678 0l-61.064 57.804L.639 32.202 0 94.899l34.614-25.601 61.064 57.803 31.322-12.794V12.794L95.678 0zm-3.761 91.025L50.223 63.55l41.694-27.476v54.951z"/><path fill="#007ACC" d="M95.678 0L34.614 57.804.639 32.202 0 94.899l34.614-25.601 61.064 57.803 31.322-12.794V12.794L95.678 0zm-3.761 91.025L50.223 63.55l41.694-27.476v54.951z"/><path fill="#1F9CF0" d="M34.614 69.298L0 94.899l.639-62.697 33.975 25.602v11.494z"/></svg>` | tools | 10 |

---

## 7. `experiences`

| id | role | company | period | description | sort_order |
|---|---|---|---|---|---|
| 1 | YouTube UI Project | Build simple UI YouTube | 2026 - Present | Developed a desktop-based YouTube interface using Java Swing for the frontend and Oracle SQL for the database management. Focused on creating a robust, high-performance user experience with direct JDBC integration. | 1 |
| 2 | Frontend Developer | Digital Agency | 2025 - 2026 | Built responsive and performant web applications for diverse clients. Collaborated with designers and backend teams to deliver polished user experiences. | 2 |
| 3 | UI/UX Engineer | Innovation Lab | 2024 - 2025 | Bridged the gap between design and development. Created high-fidelity prototypes and implemented complex UI components with a focus on accessibility. | 3 |
| 4 | Junior Web Developer | Startup Inc | 2024 - 2025 | Developed and maintained client-facing websites. Gained hands-on experience with modern frontend frameworks and agile development workflows. | 4 |
| 5 | Web Development Intern | Creative Studio | 2025 - 2026 | Assisted in the development of responsive landing pages and email templates. Learned industry best practices for clean code and performance optimization. | 5 |
| 6 | Freelance Developer | Self-Employed | 2024 - 2025 | Designed and developed custom websites for small businesses. Managed full project lifecycles from initial concept to deployment and maintenance. | 6 |
| 7 | Open Source Contributor | GitHub Community | 2024 - 2025 | Contributed to various open-source projects, fixing bugs and implementing new features. Collaborated with developers worldwide and improved code quality. | 7 |

---

## 8. `experience_technologies`

| experience_id | name |
|---|---|
| 1 | Java |
| 1 | Java Swing |
| 1 | Oracle SQL |
| 2 | Vue.js |
| 2 | JavaScript |
| 2 | CSS3 |
| 2 | Node.js |
| 3 | Vue.js |
| 3 | Figma |
| 3 | Sass |
| 3 | Cypress |
| 4 | HTML5 |
| 4 | CSS3 |
| 4 | JavaScript |
| 4 | Git |
| 5 | HTML5 |
| 5 | CSS3 |
| 5 | JavaScript |
| 5 | Bootstrap |
| 6 | WordPress |
| 6 | PHP |
| 6 | jQuery |
| 6 | MySQL |
| 7 | Git |
| 7 | Markdown |
| 7 | JavaScript |
| 7 | Testing |

---

## 9. `experience_images` (experience_id = 1)

| experience_id | image_url | sort_order |
|---|---|---|
| 1 | /images/experience/1/login.png | 1 |
| 1 | /images/experience/1/dashboard.png | 2 |
| 1 | /images/experience/1/manage-users.png | 3 |
| 1 | /images/experience/1/user-detail.png | 4 |
| 1 | /images/experience/1/manage-videos.png | 5 |
| 1 | /images/experience/1/categories.png | 6 |
| 1 | /images/experience/1/tags.png | 7 |
| 1 | /images/experience/1/comments.png | 8 |

---

## 10. `experience_achievements` (experience_id = 1)

These are currently hardcoded in `pages/experience/[id].vue` lines 119-132.

| experience_id | description | sort_order |
|---|---|---|
| 1 | Developed key user-facing features and modular components. | 1 |
| 1 | Optimized application performance and responsiveness. | 2 |
| 1 | Collaborated in a cross-functional team using Agile methodologies. | 3 |

---

## 11. `experience_categories` (experience_id = 1)

| id | experience_id | category_key | title | sort_order |
|---|---|---|---|---|
| 1 | 1 | web_interface | Web Interface | 1 |
| 2 | 1 | admin_interface | Admin Interface | 2 |

---

## 12. `experience_category_items`

| category_id | label | period_label | subheading | points (JSON) | technologies (JSON) | sort_order |
|---|---|---|---|---|---|---|
| 1 | Content Discovery | WEB MODULE | Content Delivery Network | `["homepage","search","watch_page","subscriptions","history"]` | `["Thumbnail Display","Video Duration","View Counts"]` | 1 |
| 1 | Social Interaction | SOCIAL | Community Engagement | `["comments","channel_pages"]` | `["Swing UI","Event Listeners"]` | 2 |
| 1 | Creator Tools | TOOLS | Video Management System | `["upload_video","management","analytics","channel_customization"]` | `["Oracle BFILEs","File I/O"]` | 3 |
| 2 | Dashboard Overview | ADMIN | Core System Management | `["global_stats","visual_analytics"]` | `["Admin Dash","Chart Logic"]` | 1 |
| 2 | User Management | USERS | Full Access Control | `["user_crud","access_control","role_management"]` | `["Security","CRUD"]` | 2 |
| 2 | Content Moderation | MODERATION | Security & Moderation | `["video_crud","upload_queue","metadata_control"]` | `["Approval Workflow","JDBC"]` | 3 |
| 2 | System Features | SYSTEM | Platform Configuration | `["theme_toggle","interface_switching"]` | `["Swing Themes","State Management"]` | 4 |

---

## 13. `experience_key_differences` (experience_id = 1)

| experience_id | feature | web_description | admin_description | sort_order |
|---|---|---|---|---|
| 1 | Video Management | Users can upload, watch, like, and share videos | Admins can approve, reject, delete, and moderate all videos | 1 |
| 1 | User Management | Users manage their own profile and subscriptions | Admins can create, edit, ban, and assign roles to all users | 2 |
| 1 | Moderation | Users can report inappropriate content | Admins review reports and enforce community guidelines | 3 |
| 1 | Target Audience | General public — viewers and content creators | Platform administrators and moderators | 4 |

---

## 14. `badges`

| name | sort_order |
|---|---|
| Frontend Development | 1 |
| Responsive Design | 2 |
| TypeScript | 3 |
| Modern Frameworks | 4 |
| UI/UX Design | 5 |
| Problem Solving | 6 |

---

## 15. `blog_tabs`

| id | name | slug | sort_order | is_active |
|---|---|---|---|---|
| 1 | Laravel | laravel | 1 | true |
| 2 | Vue | vue | 2 | true |
| 3 | TypeScript | typescript | 3 | true |
| 4 | Laravel & Vue | laravel-vue | 4 | true |
| 5 | Interview | interview | 5 | true |
| 6 | Database | database | 6 | true |

---

## 16. `blog_categories`

| id | tab_id | name | slug | color | sort_order |
|---|---|---|---|---|---|
| 1 | 1 | Laravel | laravel | red | 1 |
| 2 | 2 | Vue | vue | green | 2 |
| 3 | 3 | TypeScript | typescript | blue | 3 |
| 4 | 4 | Laravel & Vue | laravel-vue | red | 4 |
| 5 | 5 | Interview | interview | purple | 5 |
| 6 | 6 | Database | database | blue | 6 |
| 7 | NULL | CSS | css | blue | 7 |

---

## 17. `blog_tags`

| id | name | slug | color |
|---|---|---|---|
| 1 | Vue | vue | green |
| 2 | JavaScript | javascript | yellow |
| 3 | Laravel | laravel | red |
| 4 | PHP | php | purple |
| 5 | Tailwind | tailwind | blue |
| 6 | TypeScript | typescript | blue |
| 7 | MySQL | mysql | orange |
| 8 | Interview | interview | purple |
| 9 | Database | database | blue |
| 10 | SQL | sql | orange |
| 11 | CSS | css | blue |

---

## 18. `blog_posts`

| id | category_id | title | slug | excerpt | date | is_published | is_external | external_url | sort_order |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 2 | Getting Started with Vue 3 Composition API | vue-composition-api | Learn how to use the Composition API in Vue 3 to build more maintainable and reusable components. | 2026-01-15 | true | false | NULL | 1 |
| 2 | 7 | Building Responsive Layouts with Tailwind CSS | tailwind-responsive | A comprehensive guide to creating beautiful responsive designs using Tailwind CSS utility classes. | 2026-01-10 | true | false | NULL | 2 |
| 3 | 3 | TypeScript Best Practices for 2026 | typescript-best-practices | Discover the latest TypeScript patterns and practices to write cleaner, more type-safe code. | 2026-01-05 | true | false | NULL | 3 |
| 4 | 1 | Laravel Basic Setup Project | laravel-setup | Learn Laravel from scratch — installation, configuration, routing, controllers, models, and your first CRUD application. | 2025-12-28 | true | false | NULL | 4 |
| 5 | 4 | Full-Stack App with Laravel & Vue | laravel-vue-fullstack | Create a modern full-stack application combining Laravel as the backend API with Vue.js on the frontend. | 2025-12-20 | true | false | NULL | 5 |
| 6 | 1 | Laravel Eloquent ORM | laravel-eloquent | Master Eloquent ORM — models, CRUD operations, query scopes, mutators, accessors, and advanced query techniques. | 2025-12-15 | true | false | NULL | 6 |
| 7 | 1 | Laravel Eloquent Relationships | laravel-relationships | Learn all Eloquent relationships — hasOne, hasMany, belongsTo, many-to-many, polymorphic, and eager loading. | 2025-12-10 | true | false | NULL | 7 |
| 8 | 1 | Laravel Authentication | laravel-authentication | Implement user authentication — login, registration, guards, providers, and protecting routes with middleware. | 2025-12-05 | true | false | NULL | 8 |
| 9 | 1 | Laravel Authorization | laravel-authorization | Control user access with Gates and Policies — define who can perform what actions in your application. | 2025-12-01 | true | false | NULL | 9 |
| 10 | 1 | Laravel Email Verification | laravel-verification | Add email verification to your app — verify users after registration and protect routes for verified users only. | 2025-11-28 | true | false | NULL | 10 |
| 11 | 1 | Laravel Encryption | laravel-encryption | Secure sensitive data with Laravel encryption — encrypt, decrypt, and understand how Laravel protects your data. | 2025-11-25 | true | false | NULL | 11 |
| 12 | 1 | Laravel Hashing | laravel-hashing | Hash passwords and sensitive data — bcrypt, argon2, and how Laravel handles secure password hashing. | 2025-11-22 | true | false | NULL | 12 |
| 13 | 1 | Laravel Password Reset | laravel-passwords | Implement password reset — send reset emails, handle reset tokens, and customize the reset flow. | 2025-11-20 | true | false | NULL | 13 |
| 14 | 5 | Laravel Interview Questions | interview-laravel | Prepare for your next Laravel interview with commonly asked questions covering routing, Eloquent, middleware, and more. | 2026-03-01 | true | false | NULL | 14 |
| 15 | 5 | Vue.js Interview Questions | interview-vue | Master Vue.js interview questions — reactivity, lifecycle hooks, Composition API, Vuex/Pinia, and component patterns. | 2026-02-25 | true | false | NULL | 15 |
| 16 | 5 | MySQL Interview Questions | interview-mysql | Common MySQL interview questions — indexes, joins, transactions, optimization, stored procedures, and replication. | 2026-02-20 | true | false | NULL | 16 |
| 17 | 5 | SQL Database Interview Questions | interview-sql | Essential SQL interview questions — SELECT queries, subqueries, aggregation, normalization, and database design. | 2026-02-15 | true | false | NULL | 17 |
| 18 | 5 | TypeScript Interview Questions | interview-typescript | Top TypeScript interview questions — types vs interfaces, generics, utility types, type guards, and advanced patterns. | 2026-02-10 | true | false | NULL | 18 |
| 19 | 6 | Database Basics: From Zero to Real Tables | database-basics | Learn database fundamentals from scratch — data types, CREATE TABLE, primary keys, foreign keys, INSERT, SELECT, JOIN, and build a real e-commerce database. | 2026-03-06 | true | false | NULL | 19 |

---

## 19. `blog_post_tags` (pivot)

| blog_post_id | blog_tag_id | (tag name for reference) |
|---|---|---|
| 1 | 1 | Vue |
| 1 | 2 | JavaScript |
| 2 | 5 | Tailwind |
| 2 | 11 | CSS |
| 3 | 6 | TypeScript |
| 3 | 2 | JavaScript |
| 4 | 3 | Laravel |
| 4 | 4 | PHP |
| 5 | 3 | Laravel |
| 5 | 1 | Vue |
| 6 | 3 | Laravel |
| 6 | 4 | PHP |
| 7 | 3 | Laravel |
| 7 | 4 | PHP |
| 8 | 3 | Laravel |
| 8 | 4 | PHP |
| 9 | 3 | Laravel |
| 9 | 4 | PHP |
| 10 | 3 | Laravel |
| 10 | 4 | PHP |
| 11 | 3 | Laravel |
| 11 | 4 | PHP |
| 12 | 3 | Laravel |
| 12 | 4 | PHP |
| 13 | 3 | Laravel |
| 13 | 4 | PHP |
| 14 | 3 | Laravel |
| 14 | 8 | Interview |
| 15 | 1 | Vue |
| 15 | 8 | Interview |
| 16 | 7 | MySQL |
| 16 | 8 | Interview |
| 17 | 10 | SQL |
| 17 | 8 | Interview |
| 18 | 6 | TypeScript |
| 18 | 8 | Interview |
| 19 | 9 | Database |
| 19 | 10 | SQL |

---

## 20. `blog_code_blocks`

Blog post content and code blocks are stored inside the 19 individual `.vue` files under `pages/blog/`. Each file contains HTML template content and `codes[]` arrays. These need to be extracted per post when migrating blog content to the database.

**Source files:**

| Post slug | File path |
|---|---|
| vue-composition-api | pages/blog/vue-composition-api.vue |
| tailwind-responsive | pages/blog/tailwind-responsive.vue |
| typescript-best-practices | pages/blog/typescript-best-practices.vue |
| laravel-setup | pages/blog/laravel-setup.vue |
| laravel-vue-fullstack | pages/blog/laravel-vue-fullstack.vue |
| laravel-eloquent | pages/blog/laravel-eloquent.vue |
| laravel-relationships | pages/blog/laravel-relationships.vue |
| laravel-authentication | pages/blog/laravel-authentication.vue |
| laravel-authorization | pages/blog/laravel-authorization.vue |
| laravel-verification | pages/blog/laravel-verification.vue |
| laravel-encryption | pages/blog/laravel-encryption.vue |
| laravel-hashing | pages/blog/laravel-hashing.vue |
| laravel-passwords | pages/blog/laravel-passwords.vue |
| interview-laravel | pages/blog/interview-laravel.vue |
| interview-vue | pages/blog/interview-vue.vue |
| interview-mysql | pages/blog/interview-mysql.vue |
| interview-sql | pages/blog/interview-sql.vue |
| interview-typescript | pages/blog/interview-typescript.vue |
| database-basics | pages/blog/database-basics.vue |
