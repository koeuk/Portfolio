import { Article } from '@/components/ui/Article'
import { Card } from '@/components/ui/Card'
import { CodeBlock } from '@/components/ui/CodeBlock'

export const metadata = {
  title: 'Full-Stack App with Laravel, Inertia & Vue | Koeuk Dev',
  description:
    "Building a modern full-stack application with Laravel, Inertia.js, and Vue gives you the best of both worlds.",
}

const codes = [
  `# Create a new Laravel project
composer create-project laravel/laravel my-app
cd my-app

# Install Inertia server-side
composer require inertiajs/inertia-laravel

# Publish the middleware
php artisan inertia:middleware`,

  `# Install Vue 3, Inertia client adapter & Vite plugin
npm install vue@3 @inertiajs/vue3
npm install -D @vitejs/plugin-vue`,

  `<!-- resources/views/app.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    @vite('resources/js/app.js')
    @inertiaHead
</head>
<body>
    @inertia
</body>
</html>`,

  `// vite.config.js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});`,

  `// resources/js/app.js
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    resolve: (name) => resolvePageComponent(
        \`./Pages/\${name}.vue\`,
        import.meta.glob('./Pages/**/*.vue')
    ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
});`,

  `// routes/web.php
use App\\Http\\Controllers\\PostController;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::resource('posts', PostController::class);`,

  `// app/Http/Controllers/PostController.php
namespace App\\Http\\Controllers;

use App\\Models\\Post;
use Illuminate\\Http\\Request;
use Inertia\\Inertia;

class PostController extends Controller
{
    public function index()
    {
        return Inertia::render('Posts/Index', [
            'posts' => Post::latest()
                ->paginate(10)
                ->through(fn ($post) => [
                    'id'    => $post->id,
                    'title' => $post->title,
                    'date'  => $post->created_at->format('M d, Y'),
                ]),
        ]);
    }

    public function show(Post $post)
    {
        return Inertia::render('Posts/Show', [
            'post' => $post->only('id', 'title', 'body', 'created_at'),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'body'  => 'required',
        ]);

        Post::create($validated);

        return redirect()->route('posts.index')
            ->with('success', 'Post created!');
    }
}`,

  `<!-- resources/js/Pages/Posts/Index.vue -->
<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    posts: Object,
});
</script>

<template>
    <div class="max-w-4xl mx-auto py-12 px-6">
        <h1 class="text-3xl font-bold mb-8">All Posts</h1>

        <div v-for="post in posts.data" :key="post.id"
             class="mb-4 p-6 bg-white rounded-xl shadow-sm">
            <Link :href="\`/posts/\${post.id}\`"
                  class="text-xl font-semibold hover:text-blue-600">
                {{ post.title }}
            </Link>
            <p class="text-gray-500 text-sm mt-1">{{ post.date }}</p>
        </div>
    </div>
</template>`,

  `<!-- resources/js/Pages/Posts/Create.vue -->
<script setup>
import { useForm } from '@inertiajs/vue3';

const form = useForm({
    title: '',
    body: '',
});

const submit = () => {
    form.post('/posts');
};
</script>

<template>
    <div class="max-w-2xl mx-auto py-12 px-6">
        <h1 class="text-3xl font-bold mb-8">Create Post</h1>

        <form @submit.prevent="submit" class="space-y-6">
            <div>
                <label class="block font-medium mb-1">Title</label>
                <input v-model="form.title" type="text"
                       class="w-full border rounded-lg px-4 py-2" />
                <p v-if="form.errors.title"
                   class="text-red-500 text-sm mt-1">
                    {{ form.errors.title }}
                </p>
            </div>

            <div>
                <label class="block font-medium mb-1">Body</label>
                <textarea v-model="form.body" rows="6"
                          class="w-full border rounded-lg px-4 py-2" />
                <p v-if="form.errors.body"
                   class="text-red-500 text-sm mt-1">
                    {{ form.errors.body }}
                </p>
            </div>

            <button type="submit"
                    :disabled="form.processing"
                    class="bg-blue-600 text-white px-6 py-2 rounded-lg">
                {{ form.processing ? 'Saving...' : 'Create Post' }}
            </button>
        </form>
    </div>
</template>`,

  `// app/Http/Middleware/HandleInertiaRequests.php
public function share(Request $request): array
{
    return [
        ...parent::share($request),
        'auth' => [
            'user' => $request->user()
                ? $request->user()->only('id', 'name', 'email')
                : null,
        ],
        'flash' => [
            'success' => $request->session()->get('success'),
            'error'   => $request->session()->get('error'),
        ],
    ];
}`,

  `<!-- resources/js/Layouts/AppLayout.vue -->
<script setup>
import { Link, usePage } from '@inertiajs/vue3';

const { auth, flash } = usePage().props;
</script>

<template>
    <div class="min-h-screen bg-gray-100">
        <nav class="bg-white shadow px-6 py-4 flex justify-between">
            <Link href="/" class="font-bold text-xl">MyApp</Link>
            <div v-if="auth.user">{{ auth.user.name }}</div>
        </nav>

        <!-- Flash Messages -->
        <div v-if="flash.success"
             class="bg-green-100 text-green-700 px-6 py-3">
            {{ flash.success }}
        </div>

        <main>
            <slot />
        </main>
    </div>
</template>

<!-- Use it in a page: -->
<!-- Posts/Index.vue -->
<script>
import AppLayout from '@/Layouts/AppLayout.vue';
export default { layout: AppLayout };
</script>`,

  `<!-- Keep scroll position on navigation -->
<Link href="/posts" preserve-scroll>Posts</Link>

<!-- Partial reloads - only refresh specific props -->
import { router } from '@inertiajs/vue3';

router.reload({ only: ['posts'] }); // Only refresh posts data

// Programmatic navigation
router.visit('/posts');
router.post('/posts', { title: 'Hello', body: 'World' });
router.delete(\`/posts/\${id}\`);`,

  `<script setup>
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head>
        <title>My Page Title</title>
        <meta name="description" content="Page description for SEO" />
    </Head>

    <!-- Page content -->
</template>`,

  `my-app/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   └── PostController.php
│   │   └── Middleware/
│   │       └── HandleInertiaRequests.php
│   └── Models/
│       └── Post.php
├── resources/
│   ├── js/
│   │   ├── app.js              # Vue entry point
│   │   ├── Pages/
│   │   │   ├── Home.vue
│   │   │   └── Posts/
│   │   │       ├── Index.vue
│   │   │       ├── Show.vue
│   │   │       └── Create.vue
│   │   ├── Components/
│   │   │   ├── Pagination.vue
│   │   │   └── FlashMessage.vue
│   │   └── Layouts/
│   │       └── AppLayout.vue
│   └── views/
│       └── app.blade.php       # Inertia root template
├── routes/
│   └── web.php
└── vite.config.js`,
]

export default function LaravelVueFullstackPage() {
  return (
    <Article
      title="Full-Stack App with Laravel, Inertia & Vue"
      date="Dec 20, 2025"
      tags={['Laravel', 'Vue', 'Inertia.js']}
      backHref="/about-me/my-info?section=rean"
    >
      <p>
        Building a modern full-stack application with Laravel, Inertia.js, and Vue gives you the best of both worlds:
        Laravel&apos;s powerful backend with Vue&apos;s reactive frontend - without building a separate API. Inertia.js
        acts as the glue, letting you build single-page apps using classic server-side routing.
      </p>

      <Card tone="main" className="space-y-3">
        <h2 className="!mt-0">What is Inertia.js?</h2>
        <p>
          Inertia.js is <strong>not a framework</strong> - it&apos;s a routing library that connects your server-side
          framework (Laravel) with your client-side framework (Vue). Instead of building an API + SPA separately,
          Inertia lets you:
        </p>
        <ul>
          <li>Use Laravel routes and controllers as usual</li>
          <li>Return Vue pages instead of Blade views</li>
          <li>Get SPA-like navigation without page reloads</li>
          <li>No need to build a REST/GraphQL API</li>
        </ul>
      </Card>

      <h2>1. Project Setup</h2>
      <p>
        Start by creating a new Laravel project and installing the Inertia.js server-side adapter, then set up Vue with
        the client-side adapter.
      </p>

      <h3>Install Laravel &amp; Inertia Server-Side</h3>
      <CodeBlock language="bash" code={codes[0]} />

      <h3>Install Vue &amp; Inertia Client-Side</h3>
      <CodeBlock language="bash" code={codes[1]} />

      <h2>2. Configuration</h2>

      <h3>Root Blade Template</h3>
      <p>Create the root template that Inertia uses to boot your Vue app. This replaces your usual Blade layout.</p>
      <CodeBlock language="blade" code={codes[2]} />

      <h3>Vite Configuration</h3>
      <CodeBlock language="javascript" code={codes[3]} />

      <h3>Vue App Entry Point</h3>
      <CodeBlock language="javascript" code={codes[4]} />

      <h2>3. Routing &amp; Controllers</h2>
      <p>
        With Inertia, you use standard Laravel routes. Instead of returning a Blade view, you return an{' '}
        <code>Inertia::render()</code> response that maps to a Vue page component.
      </p>

      <h3>Routes</h3>
      <CodeBlock language="php" code={codes[5]} />

      <h3>Controller</h3>
      <CodeBlock language="php" code={codes[6]} />

      <h2>4. Vue Page Components</h2>
      <p>
        Vue pages live in <code>resources/js/Pages/</code>. Props passed from the controller are automatically
        available. Use <code>defineProps</code> to type them.
      </p>

      <h3>Posts List Page</h3>
      <CodeBlock language="vue" code={codes[7]} />

      <h3>Create Post Page with Form</h3>
      <CodeBlock language="vue" code={codes[8]} />

      <h2>5. Shared Data &amp; Persistent Layouts</h2>
      <p>
        Share data globally (like the authenticated user) using Inertia&apos;s <code>HandleInertiaRequests</code>{' '}
        middleware, and use persistent layouts to keep UI state between page visits.
      </p>

      <h3>Shared Data (Middleware)</h3>
      <CodeBlock language="php" code={codes[9]} />

      <h3>Persistent Layout</h3>
      <CodeBlock language="vue" code={codes[10]} />

      <h2>6. Key Inertia Features</h2>

      <h3>Preserve Scroll &amp; State</h3>
      <CodeBlock language="vue" code={codes[11]} />

      <h3>Head &amp; SEO</h3>
      <CodeBlock language="vue" code={codes[12]} />

      <h2>Project Structure</h2>
      <CodeBlock language="text" code={codes[13]} />

      <Card tone="main" className="space-y-3">
        <h2 className="!mt-0">Why Choose Laravel + Inertia + Vue?</h2>
        <ol>
          <li>
            <strong>No API needed</strong> - Controllers pass data directly to Vue pages. No REST endpoints, no
            serialization boilerplate.
          </li>
          <li>
            <strong>Server-side routing</strong> - Use Laravel&apos;s route model binding, middleware, and policies as
            normal. No client-side router needed.
          </li>
          <li>
            <strong>SPA experience</strong> - Page visits happen via XHR, no full page reloads. Browser history, scroll
            position, and component state are preserved.
          </li>
          <li>
            <strong>Form handling</strong> - The <code>useForm()</code> helper handles validation errors, progress
            state, and file uploads out of the box.
          </li>
          <li>
            <strong>Full Laravel ecosystem</strong> - Authentication (Breeze/Jetstream), queues, notifications,
            broadcasting - everything works seamlessly with Inertia.
          </li>
        </ol>
      </Card>

      <Card className="space-y-3">
        <h2 className="!mt-0">Summary</h2>
        <ul>
          <li>
            Inertia.js bridges Laravel and Vue <strong>without building an API</strong>
          </li>
          <li>
            Controllers return <strong>Inertia::render()</strong> with props passed to Vue pages
          </li>
          <li>
            <strong>useForm()</strong> handles forms, validation errors, and loading states
          </li>
          <li>
            Share global data via <strong>HandleInertiaRequests</strong> middleware
          </li>
          <li>
            Use <strong>persistent layouts</strong> to keep state across navigations
          </li>
          <li>
            <strong>Partial reloads</strong> for efficient data fetching
          </li>
        </ul>
      </Card>
    </Article>
  )
}
