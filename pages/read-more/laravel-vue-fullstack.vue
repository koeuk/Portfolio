<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/read-more" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('readMore.back') }}
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs rounded-full font-medium">Laravel</span>
          <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full font-medium">Vue</span>
          <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs rounded-full font-medium">Inertia.js</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          Full-Stack App with Laravel, Inertia & Vue
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Dec 20, 2025</p>
      </div>

      <article class="prose-content space-y-8 text-gray-700 dark:text-gray-300">
        <p class="text-lg leading-relaxed">
          Building a modern full-stack application with Laravel, Inertia.js, and Vue gives you the best of both worlds:
          Laravel's powerful backend with Vue's reactive frontend - without building a separate API.
          Inertia.js acts as the glue, letting you build single-page apps using classic server-side routing.
        </p>

        <!-- What is Inertia -->
        <section class="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl border border-purple-200 dark:border-purple-800">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-3">What is Inertia.js?</h2>
          <p class="leading-relaxed mb-3">
            Inertia.js is <strong>not a framework</strong> - it's a routing library that connects your server-side
            framework (Laravel) with your client-side framework (Vue). Instead of building an API + SPA separately, Inertia lets you:
          </p>
          <ul class="space-y-2 ml-4">
            <li class="flex items-start gap-2">
              <span class="text-purple-500 mt-1 flex-shrink-0">&#9679;</span>
              Use Laravel routes and controllers as usual
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-500 mt-1 flex-shrink-0">&#9679;</span>
              Return Vue pages instead of Blade views
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-500 mt-1 flex-shrink-0">&#9679;</span>
              Get SPA-like navigation without page reloads
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-500 mt-1 flex-shrink-0">&#9679;</span>
              No need to build a REST/GraphQL API
            </li>
          </ul>
        </section>

        <!-- 1. Installation -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">1. Project Setup</h2>
          <p class="mb-4 leading-relaxed">
            Start by creating a new Laravel project and installing the Inertia.js server-side adapter,
            then set up Vue with the client-side adapter.
          </p>

          <h3 class="text-lg font-semibold text-primary dark:text-white mb-3">Install Laravel & Inertia Server-Side</h3>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto mb-4">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-gray-500"># Create a new Laravel project</span>
composer create-project laravel/laravel my-app
<span class="text-blue-400">cd</span> my-app

<span class="text-gray-500"># Install Inertia server-side</span>
composer require inertiajs/inertia-laravel

<span class="text-gray-500"># Publish the middleware</span>
php artisan inertia:middleware</pre>
          </div>

          <h3 class="text-lg font-semibold text-primary dark:text-white mb-3">Install Vue & Inertia Client-Side</h3>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-gray-500"># Install Vue 3, Inertia client adapter & Vite plugin</span>
npm install vue@3 @inertiajs/vue3
npm install -D @vitejs/plugin-vue</pre>
          </div>
        </section>

        <!-- 2. Configuration -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">2. Configuration</h2>

          <h3 class="text-lg font-semibold text-primary dark:text-white mb-3">Root Blade Template</h3>
          <p class="mb-3 leading-relaxed">
            Create the root template that Inertia uses to boot your Vue app. This replaces your usual Blade layout.
          </p>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto mb-4">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-gray-500">&lt;!-- resources/views/app.blade.php --&gt;</span>
<span class="text-blue-400">&lt;!DOCTYPE html&gt;</span>
<span class="text-blue-400">&lt;html&gt;</span>
<span class="text-blue-400">&lt;head&gt;</span>
    <span class="text-blue-400">&lt;meta</span> charset=<span class="text-green-400">"utf-8"</span> <span class="text-blue-400">/&gt;</span>
    <span class="text-blue-400">&lt;meta</span> name=<span class="text-green-400">"viewport"</span> content=<span class="text-green-400">"width=device-width, initial-scale=1.0"</span> <span class="text-blue-400">/&gt;</span>
    <span class="text-yellow-400">@vite</span>(<span class="text-green-400">'resources/js/app.js'</span>)
    <span class="text-yellow-400">@inertiaHead</span>
<span class="text-blue-400">&lt;/head&gt;</span>
<span class="text-blue-400">&lt;body&gt;</span>
    <span class="text-yellow-400">@inertia</span>
<span class="text-blue-400">&lt;/body&gt;</span>
<span class="text-blue-400">&lt;/html&gt;</span></pre>
          </div>

          <h3 class="text-lg font-semibold text-primary dark:text-white mb-3">Vite Configuration</h3>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto mb-4">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-gray-500">// vite.config.js</span>
<span class="text-blue-400">import</span> { defineConfig } <span class="text-blue-400">from</span> <span class="text-green-400">'vite'</span>;
<span class="text-blue-400">import</span> laravel <span class="text-blue-400">from</span> <span class="text-green-400">'laravel-vite-plugin'</span>;
<span class="text-blue-400">import</span> vue <span class="text-blue-400">from</span> <span class="text-green-400">'@vitejs/plugin-vue'</span>;

<span class="text-blue-400">export default</span> defineConfig({
    plugins: [
        laravel({
            input: [<span class="text-green-400">'resources/js/app.js'</span>],
            refresh: <span class="text-yellow-400">true</span>,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: <span class="text-yellow-400">null</span>,
                    includeAbsolute: <span class="text-yellow-400">false</span>,
                },
            },
        }),
    ],
});</pre>
          </div>

          <h3 class="text-lg font-semibold text-primary dark:text-white mb-3">Vue App Entry Point</h3>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-gray-500">// resources/js/app.js</span>
<span class="text-blue-400">import</span> { createApp, h } <span class="text-blue-400">from</span> <span class="text-green-400">'vue'</span>;
<span class="text-blue-400">import</span> { createInertiaApp } <span class="text-blue-400">from</span> <span class="text-green-400">'@inertiajs/vue3'</span>;
<span class="text-blue-400">import</span> { resolvePageComponent } <span class="text-blue-400">from</span> <span class="text-green-400">'laravel-vite-plugin/inertia-helpers'</span>;

createInertiaApp({
    resolve: (name) => resolvePageComponent(
        <span class="text-green-400">`./Pages/${name}.vue`</span>,
        <span class="text-blue-400">import</span>.meta.glob(<span class="text-green-400">'./Pages/**/*.vue'</span>)
    ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
});</pre>
          </div>
        </section>

        <!-- 3. Routing -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">3. Routing & Controllers</h2>
          <p class="mb-4 leading-relaxed">
            With Inertia, you use standard Laravel routes. Instead of returning a Blade view, you return an
            <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">Inertia::render()</code>
            response that maps to a Vue page component.
          </p>

          <h3 class="text-lg font-semibold text-primary dark:text-white mb-3">Routes</h3>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto mb-4">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-gray-500">// routes/web.php</span>
<span class="text-blue-400">use</span> App\Http\Controllers\<span class="text-yellow-400">PostController</span>;

Route::get(<span class="text-green-400">'/'</span>, <span class="text-blue-400">function</span> () {
    <span class="text-blue-400">return</span> Inertia::render(<span class="text-green-400">'Home'</span>);
});

Route::resource(<span class="text-green-400">'posts'</span>, PostController::<span class="text-blue-400">class</span>);</pre>
          </div>

          <h3 class="text-lg font-semibold text-primary dark:text-white mb-3">Controller</h3>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-gray-500">// app/Http/Controllers/PostController.php</span>
<span class="text-blue-400">namespace</span> App\Http\Controllers;

<span class="text-blue-400">use</span> App\Models\<span class="text-yellow-400">Post</span>;
<span class="text-blue-400">use</span> Illuminate\Http\<span class="text-yellow-400">Request</span>;
<span class="text-blue-400">use</span> Inertia\<span class="text-yellow-400">Inertia</span>;

<span class="text-blue-400">class</span> <span class="text-yellow-400">PostController</span> <span class="text-blue-400">extends</span> <span class="text-yellow-400">Controller</span>
{
    <span class="text-blue-400">public function</span> <span class="text-purple-400">index</span>()
    {
        <span class="text-blue-400">return</span> Inertia::render(<span class="text-green-400">'Posts/Index'</span>, [
            <span class="text-green-400">'posts'</span> => Post::latest()
                ->paginate(<span class="text-yellow-400">10</span>)
                ->through(<span class="text-blue-400">fn</span> ($post) => [
                    <span class="text-green-400">'id'</span>    => $post->id,
                    <span class="text-green-400">'title'</span> => $post->title,
                    <span class="text-green-400">'date'</span>  => $post->created_at->format(<span class="text-green-400">'M d, Y'</span>),
                ]),
        ]);
    }

    <span class="text-blue-400">public function</span> <span class="text-purple-400">show</span>(<span class="text-yellow-400">Post</span> $post)
    {
        <span class="text-blue-400">return</span> Inertia::render(<span class="text-green-400">'Posts/Show'</span>, [
            <span class="text-green-400">'post'</span> => $post->only(<span class="text-green-400">'id'</span>, <span class="text-green-400">'title'</span>, <span class="text-green-400">'body'</span>, <span class="text-green-400">'created_at'</span>),
        ]);
    }

    <span class="text-blue-400">public function</span> <span class="text-purple-400">store</span>(<span class="text-yellow-400">Request</span> $request)
    {
        $validated = $request->validate([
            <span class="text-green-400">'title'</span> => <span class="text-green-400">'required|max:255'</span>,
            <span class="text-green-400">'body'</span>  => <span class="text-green-400">'required'</span>,
        ]);

        Post::create($validated);

        <span class="text-blue-400">return</span> redirect()->route(<span class="text-green-400">'posts.index'</span>)
            ->with(<span class="text-green-400">'success'</span>, <span class="text-green-400">'Post created!'</span>);
    }
}</pre>
          </div>
        </section>

        <!-- 4. Vue Pages -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">4. Vue Page Components</h2>
          <p class="mb-4 leading-relaxed">
            Vue pages live in <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">resources/js/Pages/</code>.
            Props passed from the controller are automatically available. Use
            <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">defineProps</code>
            to type them.
          </p>

          <h3 class="text-lg font-semibold text-primary dark:text-white mb-3">Posts List Page</h3>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto mb-4">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-gray-500">&lt;!-- resources/js/Pages/Posts/Index.vue --&gt;</span>
<span class="text-blue-400">&lt;script setup&gt;</span>
<span class="text-blue-400">import</span> { Link } <span class="text-blue-400">from</span> <span class="text-green-400">'@inertiajs/vue3'</span>;

defineProps({
    posts: Object,
});
<span class="text-blue-400">&lt;/script&gt;</span>

<span class="text-blue-400">&lt;template&gt;</span>
    <span class="text-blue-400">&lt;div</span> class=<span class="text-green-400">"max-w-4xl mx-auto py-12 px-6"</span><span class="text-blue-400">&gt;</span>
        <span class="text-blue-400">&lt;h1</span> class=<span class="text-green-400">"text-3xl font-bold mb-8"</span><span class="text-blue-400">&gt;</span>All Posts<span class="text-blue-400">&lt;/h1&gt;</span>

        <span class="text-blue-400">&lt;div</span> v-for=<span class="text-green-400">"post in posts.data"</span> :key=<span class="text-green-400">"post.id"</span>
             class=<span class="text-green-400">"mb-4 p-6 bg-white rounded-xl shadow-sm"</span><span class="text-blue-400">&gt;</span>
            <span class="text-blue-400">&lt;Link</span> :href=<span class="text-green-400">"`/posts/${post.id}`"</span>
                  class=<span class="text-green-400">"text-xl font-semibold hover:text-blue-600"</span><span class="text-blue-400">&gt;</span>
                &#123;&#123; post.title &#125;&#125;
            <span class="text-blue-400">&lt;/Link&gt;</span>
            <span class="text-blue-400">&lt;p</span> class=<span class="text-green-400">"text-gray-500 text-sm mt-1"</span><span class="text-blue-400">&gt;</span>&#123;&#123; post.date &#125;&#125;<span class="text-blue-400">&lt;/p&gt;</span>
        <span class="text-blue-400">&lt;/div&gt;</span>
    <span class="text-blue-400">&lt;/div&gt;</span>
<span class="text-blue-400">&lt;/template&gt;</span></pre>
          </div>

          <h3 class="text-lg font-semibold text-primary dark:text-white mb-3">Create Post Page with Form</h3>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-gray-500">&lt;!-- resources/js/Pages/Posts/Create.vue --&gt;</span>
<span class="text-blue-400">&lt;script setup&gt;</span>
<span class="text-blue-400">import</span> { useForm } <span class="text-blue-400">from</span> <span class="text-green-400">'@inertiajs/vue3'</span>;

<span class="text-blue-400">const</span> form = useForm({
    title: <span class="text-green-400">''</span>,
    body: <span class="text-green-400">''</span>,
});

<span class="text-blue-400">const</span> submit = () => {
    form.post(<span class="text-green-400">'/posts'</span>);
};
<span class="text-blue-400">&lt;/script&gt;</span>

<span class="text-blue-400">&lt;template&gt;</span>
    <span class="text-blue-400">&lt;div</span> class=<span class="text-green-400">"max-w-2xl mx-auto py-12 px-6"</span><span class="text-blue-400">&gt;</span>
        <span class="text-blue-400">&lt;h1</span> class=<span class="text-green-400">"text-3xl font-bold mb-8"</span><span class="text-blue-400">&gt;</span>Create Post<span class="text-blue-400">&lt;/h1&gt;</span>

        <span class="text-blue-400">&lt;form</span> @submit.prevent=<span class="text-green-400">"submit"</span> class=<span class="text-green-400">"space-y-6"</span><span class="text-blue-400">&gt;</span>
            <span class="text-blue-400">&lt;div&gt;</span>
                <span class="text-blue-400">&lt;label</span> class=<span class="text-green-400">"block font-medium mb-1"</span><span class="text-blue-400">&gt;</span>Title<span class="text-blue-400">&lt;/label&gt;</span>
                <span class="text-blue-400">&lt;input</span> v-model=<span class="text-green-400">"form.title"</span> type=<span class="text-green-400">"text"</span>
                       class=<span class="text-green-400">"w-full border rounded-lg px-4 py-2"</span> <span class="text-blue-400">/&gt;</span>
                <span class="text-blue-400">&lt;p</span> v-if=<span class="text-green-400">"form.errors.title"</span>
                   class=<span class="text-green-400">"text-red-500 text-sm mt-1"</span><span class="text-blue-400">&gt;</span>
                    &#123;&#123; form.errors.title &#125;&#125;
                <span class="text-blue-400">&lt;/p&gt;</span>
            <span class="text-blue-400">&lt;/div&gt;</span>

            <span class="text-blue-400">&lt;div&gt;</span>
                <span class="text-blue-400">&lt;label</span> class=<span class="text-green-400">"block font-medium mb-1"</span><span class="text-blue-400">&gt;</span>Body<span class="text-blue-400">&lt;/label&gt;</span>
                <span class="text-blue-400">&lt;textarea</span> v-model=<span class="text-green-400">"form.body"</span> rows=<span class="text-green-400">"6"</span>
                          class=<span class="text-green-400">"w-full border rounded-lg px-4 py-2"</span> <span class="text-blue-400">/&gt;</span>
                <span class="text-blue-400">&lt;p</span> v-if=<span class="text-green-400">"form.errors.body"</span>
                   class=<span class="text-green-400">"text-red-500 text-sm mt-1"</span><span class="text-blue-400">&gt;</span>
                    &#123;&#123; form.errors.body &#125;&#125;
                <span class="text-blue-400">&lt;/p&gt;</span>
            <span class="text-blue-400">&lt;/div&gt;</span>

            <span class="text-blue-400">&lt;button</span> type=<span class="text-green-400">"submit"</span>
                    :disabled=<span class="text-green-400">"form.processing"</span>
                    class=<span class="text-green-400">"bg-blue-600 text-white px-6 py-2 rounded-lg"</span><span class="text-blue-400">&gt;</span>
                &#123;&#123; form.processing ? <span class="text-green-400">'Saving...'</span> : <span class="text-green-400">'Create Post'</span> &#125;&#125;
            <span class="text-blue-400">&lt;/button&gt;</span>
        <span class="text-blue-400">&lt;/form&gt;</span>
    <span class="text-blue-400">&lt;/div&gt;</span>
<span class="text-blue-400">&lt;/template&gt;</span></pre>
          </div>
        </section>

        <!-- 5. Shared Data & Layouts -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">5. Shared Data & Persistent Layouts</h2>
          <p class="mb-4 leading-relaxed">
            Share data globally (like the authenticated user) using Inertia's
            <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">HandleInertiaRequests</code>
            middleware, and use persistent layouts to keep UI state between page visits.
          </p>

          <h3 class="text-lg font-semibold text-primary dark:text-white mb-3">Shared Data (Middleware)</h3>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto mb-4">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-gray-500">// app/Http/Middleware/HandleInertiaRequests.php</span>
<span class="text-blue-400">public function</span> <span class="text-purple-400">share</span>(<span class="text-yellow-400">Request</span> $request): <span class="text-yellow-400">array</span>
{
    <span class="text-blue-400">return</span> [
        ...parent::share($request),
        <span class="text-green-400">'auth'</span> => [
            <span class="text-green-400">'user'</span> => $request->user()
                ? $request->user()->only(<span class="text-green-400">'id'</span>, <span class="text-green-400">'name'</span>, <span class="text-green-400">'email'</span>)
                : <span class="text-yellow-400">null</span>,
        ],
        <span class="text-green-400">'flash'</span> => [
            <span class="text-green-400">'success'</span> => $request->session()->get(<span class="text-green-400">'success'</span>),
            <span class="text-green-400">'error'</span>   => $request->session()->get(<span class="text-green-400">'error'</span>),
        ],
    ];
}</pre>
          </div>

          <h3 class="text-lg font-semibold text-primary dark:text-white mb-3">Persistent Layout</h3>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-gray-500">&lt;!-- resources/js/Layouts/AppLayout.vue --&gt;</span>
<span class="text-blue-400">&lt;script setup&gt;</span>
<span class="text-blue-400">import</span> { Link, usePage } <span class="text-blue-400">from</span> <span class="text-green-400">'@inertiajs/vue3'</span>;

<span class="text-blue-400">const</span> { auth, flash } = usePage().props;
<span class="text-blue-400">&lt;/script&gt;</span>

<span class="text-blue-400">&lt;template&gt;</span>
    <span class="text-blue-400">&lt;div</span> class=<span class="text-green-400">"min-h-screen bg-gray-100"</span><span class="text-blue-400">&gt;</span>
        <span class="text-blue-400">&lt;nav</span> class=<span class="text-green-400">"bg-white shadow px-6 py-4 flex justify-between"</span><span class="text-blue-400">&gt;</span>
            <span class="text-blue-400">&lt;Link</span> href=<span class="text-green-400">"/"</span> class=<span class="text-green-400">"font-bold text-xl"</span><span class="text-blue-400">&gt;</span>MyApp<span class="text-blue-400">&lt;/Link&gt;</span>
            <span class="text-blue-400">&lt;div</span> v-if=<span class="text-green-400">"auth.user"</span><span class="text-blue-400">&gt;</span>&#123;&#123; auth.user.name &#125;&#125;<span class="text-blue-400">&lt;/div&gt;</span>
        <span class="text-blue-400">&lt;/nav&gt;</span>

        <span class="text-gray-500">&lt;!-- Flash Messages --&gt;</span>
        <span class="text-blue-400">&lt;div</span> v-if=<span class="text-green-400">"flash.success"</span>
             class=<span class="text-green-400">"bg-green-100 text-green-700 px-6 py-3"</span><span class="text-blue-400">&gt;</span>
            &#123;&#123; flash.success &#125;&#125;
        <span class="text-blue-400">&lt;/div&gt;</span>

        <span class="text-blue-400">&lt;main&gt;</span>
            <span class="text-blue-400">&lt;slot /&gt;</span>
        <span class="text-blue-400">&lt;/main&gt;</span>
    <span class="text-blue-400">&lt;/div&gt;</span>
<span class="text-blue-400">&lt;/template&gt;</span>

<span class="text-gray-500">&lt;!-- Use it in a page: --&gt;</span>
<span class="text-gray-500">&lt;!-- Posts/Index.vue --&gt;</span>
<span class="text-blue-400">&lt;script&gt;</span>
<span class="text-blue-400">import</span> AppLayout <span class="text-blue-400">from</span> <span class="text-green-400">'@/Layouts/AppLayout.vue'</span>;
<span class="text-blue-400">export default</span> { layout: AppLayout };
<span class="text-blue-400">&lt;/script&gt;</span></pre>
          </div>
        </section>

        <!-- 6. Key Features -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">6. Key Inertia Features</h2>

          <h3 class="text-lg font-semibold text-primary dark:text-white mb-3">Preserve Scroll & State</h3>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto mb-4">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-gray-500">&lt;!-- Keep scroll position on navigation --&gt;</span>
<span class="text-blue-400">&lt;Link</span> href=<span class="text-green-400">"/posts"</span> preserve-scroll<span class="text-blue-400">&gt;</span>Posts<span class="text-blue-400">&lt;/Link&gt;</span>

<span class="text-gray-500">&lt;!-- Partial reloads - only refresh specific props --&gt;</span>
<span class="text-blue-400">import</span> { router } <span class="text-blue-400">from</span> <span class="text-green-400">'@inertiajs/vue3'</span>;

router.reload({ only: [<span class="text-green-400">'posts'</span>] }); <span class="text-gray-500">// Only refresh posts data</span>

<span class="text-gray-500">// Programmatic navigation</span>
router.visit(<span class="text-green-400">'/posts'</span>);
router.post(<span class="text-green-400">'/posts'</span>, { title: <span class="text-green-400">'Hello'</span>, body: <span class="text-green-400">'World'</span> });
router.delete(<span class="text-green-400">`/posts/${id}`</span>);</pre>
          </div>

          <h3 class="text-lg font-semibold text-primary dark:text-white mb-3">Head & SEO</h3>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-blue-400">&lt;script setup&gt;</span>
<span class="text-blue-400">import</span> { Head } <span class="text-blue-400">from</span> <span class="text-green-400">'@inertiajs/vue3'</span>;
<span class="text-blue-400">&lt;/script&gt;</span>

<span class="text-blue-400">&lt;template&gt;</span>
    <span class="text-blue-400">&lt;Head&gt;</span>
        <span class="text-blue-400">&lt;title&gt;</span>My Page Title<span class="text-blue-400">&lt;/title&gt;</span>
        <span class="text-blue-400">&lt;meta</span> name=<span class="text-green-400">"description"</span> content=<span class="text-green-400">"Page description for SEO"</span> <span class="text-blue-400">/&gt;</span>
    <span class="text-blue-400">&lt;/Head&gt;</span>

    <span class="text-gray-500">&lt;!-- Page content --&gt;</span>
<span class="text-blue-400">&lt;/template&gt;</span></pre>
          </div>
        </section>

        <!-- Folder Structure -->
        <section class="p-6 bg-gray-50 dark:bg-primary-light rounded-2xl border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">Project Structure</h2>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono">my-app/
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
│   │   ├── app.js              <span class="text-gray-500"># Vue entry point</span>
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
│       └── app.blade.php       <span class="text-gray-500"># Inertia root template</span>
├── routes/
│   └── web.php
└── vite.config.js</pre>
          </div>
        </section>

        <!-- Why Inertia -->
        <section class="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200 dark:border-green-800">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">Why Choose Laravel + Inertia + Vue?</h2>
          <div class="space-y-3 text-gray-700 dark:text-gray-300">
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-7 h-7 rounded-full bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 flex items-center justify-center text-sm font-bold">1</span>
              <p><strong>No API needed</strong> - Controllers pass data directly to Vue pages. No REST endpoints, no serialization boilerplate.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-7 h-7 rounded-full bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 flex items-center justify-center text-sm font-bold">2</span>
              <p><strong>Server-side routing</strong> - Use Laravel's route model binding, middleware, and policies as normal. No client-side router needed.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-7 h-7 rounded-full bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 flex items-center justify-center text-sm font-bold">3</span>
              <p><strong>SPA experience</strong> - Page visits happen via XHR, no full page reloads. Browser history, scroll position, and component state are preserved.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-7 h-7 rounded-full bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 flex items-center justify-center text-sm font-bold">4</span>
              <p><strong>Form handling</strong> - The <code class="font-mono text-sm">useForm()</code> helper handles validation errors, progress state, and file uploads out of the box.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-7 h-7 rounded-full bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 flex items-center justify-center text-sm font-bold">5</span>
              <p><strong>Full Laravel ecosystem</strong> - Authentication (Breeze/Jetstream), queues, notifications, broadcasting - everything works seamlessly with Inertia.</p>
            </div>
          </div>
        </section>

        <!-- Summary -->
        <section class="mt-8 p-6 bg-gray-50 dark:bg-primary-light rounded-2xl border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">Summary</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Inertia.js bridges Laravel and Vue <strong>without building an API</strong>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Controllers return <strong>Inertia::render()</strong> with props passed to Vue pages
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              <strong>useForm()</strong> handles forms, validation errors, and loading states
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Share global data via <strong>HandleInertiaRequests</strong> middleware
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Use <strong>persistent layouts</strong> to keep state across navigations
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              <strong>Partial reloads</strong> for efficient data fetching
            </li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: 'Full-Stack App with Laravel, Inertia & Vue - Koeuk Dev' })

function copyCode(e: Event) {
  const btn = (e.currentTarget as HTMLElement)
  const block = btn.closest('.relative')
  const pre = block?.querySelector('pre')
  if (!pre) return

  navigator.clipboard.writeText(pre.textContent || '')
  const copyIcon = btn.querySelector('.copy-icon') as HTMLElement
  const checkIcon = btn.querySelector('.check-icon') as HTMLElement
  copyIcon.classList.add('hidden')
  checkIcon.classList.remove('hidden')
  setTimeout(() => {
    copyIcon.classList.remove('hidden')
    checkIcon.classList.add('hidden')
  }, 2000)
}
</script>
