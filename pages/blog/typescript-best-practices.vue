<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('blog.backToBlog') }}
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium">TypeScript</span>
          <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-xs rounded-full font-medium">JavaScript</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          TypeScript Best Practices for 2026
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Jan 5, 2026</p>
      </div>

      <article class="prose-content space-y-8 text-gray-700 dark:text-gray-300">
        <p class="text-lg leading-relaxed">
          TypeScript has become the standard for building scalable JavaScript applications. As we move into 2026,
          here are the best practices every developer should follow to write clean, maintainable, and type-safe code.
        </p>

        <!-- 1. Strict Mode -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">1. Always Enable Strict Mode</h2>
          <p class="mb-4 leading-relaxed">
            Enabling <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">strict: true</code>
            in your <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">tsconfig.json</code>
            catches more errors at compile time. This enables all strict type-checking options including
            <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">noImplicitAny</code>,
            <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">strictNullChecks</code>, and more.
          </p>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-gray-500">// tsconfig.json</span>
{
  <span class="text-green-400">"compilerOptions"</span>: {
    <span class="text-green-400">"strict"</span>: <span class="text-yellow-400">true</span>,
    <span class="text-green-400">"target"</span>: <span class="text-yellow-400">"ES2022"</span>,
    <span class="text-green-400">"module"</span>: <span class="text-yellow-400">"ESNext"</span>
  }
}</pre>
          </div>
        </section>

        <!-- 2. Use Type Inference -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">2. Leverage Type Inference</h2>
          <p class="mb-4 leading-relaxed">
            TypeScript is smart enough to infer types in many cases. Don't over-annotate when the type is obvious
            from the assignment. Let the compiler do its job.
          </p>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-red-400">// Bad - unnecessary type annotation</span>
<span class="text-blue-400">const</span> name: <span class="text-yellow-400">string</span> = <span class="text-green-400">"Koeuk"</span>;
<span class="text-blue-400">const</span> age: <span class="text-yellow-400">number</span> = <span class="text-green-400">25</span>;

<span class="text-green-400">// Good - let TypeScript infer</span>
<span class="text-blue-400">const</span> name = <span class="text-green-400">"Koeuk"</span>;
<span class="text-blue-400">const</span> age = <span class="text-green-400">25</span>;

<span class="text-green-400">// Do annotate when the type isn't obvious</span>
<span class="text-blue-400">const</span> response: <span class="text-yellow-400">ApiResponse&lt;User&gt;</span> = <span class="text-blue-400">await</span> fetchUser(id);</pre>
          </div>
        </section>

        <!-- 3. Prefer Interfaces -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">3. Prefer Interfaces Over Type Aliases for Objects</h2>
          <p class="mb-4 leading-relaxed">
            Interfaces are extendable and provide better error messages. Use <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">interface</code>
            for defining object shapes and <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">type</code> for unions, intersections, and utility types.
          </p>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-green-400">// Use interface for object shapes</span>
<span class="text-blue-400">interface</span> <span class="text-yellow-400">User</span> {
  id: <span class="text-yellow-400">number</span>;
  name: <span class="text-yellow-400">string</span>;
  email: <span class="text-yellow-400">string</span>;
}

<span class="text-green-400">// Interfaces can be extended</span>
<span class="text-blue-400">interface</span> <span class="text-yellow-400">Admin</span> <span class="text-blue-400">extends</span> <span class="text-yellow-400">User</span> {
  role: <span class="text-green-400">"admin"</span>;
  permissions: <span class="text-yellow-400">string</span>[];
}

<span class="text-green-400">// Use type for unions & utilities</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">Status</span> = <span class="text-green-400">"active"</span> | <span class="text-green-400">"inactive"</span> | <span class="text-green-400">"pending"</span>;
<span class="text-blue-400">type</span> <span class="text-yellow-400">ReadonlyUser</span> = Readonly&lt;<span class="text-yellow-400">User</span>&gt;;</pre>
          </div>
        </section>

        <!-- 4. Utility Types -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">4. Master Utility Types</h2>
          <p class="mb-4 leading-relaxed">
            TypeScript provides powerful built-in utility types that help you transform and reuse existing types
            without duplicating code.
          </p>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-blue-400">interface</span> <span class="text-yellow-400">Post</span> {
  id: <span class="text-yellow-400">number</span>;
  title: <span class="text-yellow-400">string</span>;
  content: <span class="text-yellow-400">string</span>;
  author: <span class="text-yellow-400">string</span>;
  createdAt: <span class="text-yellow-400">Date</span>;
}

<span class="text-green-400">// Only some fields needed for creation</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">CreatePost</span> = Pick&lt;<span class="text-yellow-400">Post</span>, <span class="text-green-400">"title"</span> | <span class="text-green-400">"content"</span>&gt;;

<span class="text-green-400">// All fields optional for updates</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">UpdatePost</span> = Partial&lt;<span class="text-yellow-400">Post</span>&gt;;

<span class="text-green-400">// Exclude specific fields</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">PostPreview</span> = Omit&lt;<span class="text-yellow-400">Post</span>, <span class="text-green-400">"content"</span>&gt;;

<span class="text-green-400">// Record for key-value maps</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">PostMap</span> = Record&lt;<span class="text-yellow-400">string</span>, <span class="text-yellow-400">Post</span>&gt;;</pre>
          </div>
        </section>

        <!-- 5. Discriminated Unions -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">5. Use Discriminated Unions for State Management</h2>
          <p class="mb-4 leading-relaxed">
            Discriminated unions make it impossible to access data that doesn't exist in a given state.
            This pattern is especially useful for handling API responses and component states.
          </p>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-blue-400">type</span> <span class="text-yellow-400">AsyncState</span>&lt;T&gt; =
  | { status: <span class="text-green-400">"idle"</span> }
  | { status: <span class="text-green-400">"loading"</span> }
  | { status: <span class="text-green-400">"success"</span>; data: T }
  | { status: <span class="text-green-400">"error"</span>; error: <span class="text-yellow-400">Error</span> };

<span class="text-blue-400">function</span> <span class="text-purple-400">handleState</span>(state: <span class="text-yellow-400">AsyncState</span>&lt;<span class="text-yellow-400">User</span>&gt;) {
  <span class="text-blue-400">switch</span> (state.status) {
    <span class="text-blue-400">case</span> <span class="text-green-400">"loading"</span>:
      <span class="text-blue-400">return</span> <span class="text-green-400">"Loading..."</span>;
    <span class="text-blue-400">case</span> <span class="text-green-400">"success"</span>:
      <span class="text-blue-400">return</span> state.data.name; <span class="text-gray-500">// TS knows data exists</span>
    <span class="text-blue-400">case</span> <span class="text-green-400">"error"</span>:
      <span class="text-blue-400">return</span> state.error.message; <span class="text-gray-500">// TS knows error exists</span>
  }
}</pre>
          </div>
        </section>

        <!-- 6. Generics -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">6. Write Reusable Code with Generics</h2>
          <p class="mb-4 leading-relaxed">
            Generics allow you to create flexible, reusable functions and classes while maintaining type safety.
          </p>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-green-400">// Generic API fetcher</span>
<span class="text-blue-400">async function</span> <span class="text-purple-400">fetchData</span>&lt;T&gt;(url: <span class="text-yellow-400">string</span>): <span class="text-yellow-400">Promise</span>&lt;T&gt; {
  <span class="text-blue-400">const</span> response = <span class="text-blue-400">await</span> fetch(url);
  <span class="text-blue-400">if</span> (!response.ok) {
    <span class="text-blue-400">throw new</span> <span class="text-yellow-400">Error</span>(<span class="text-green-400">`HTTP error: </span>${response.status}<span class="text-green-400">`</span>);
  }
  <span class="text-blue-400">return</span> response.json() <span class="text-blue-400">as</span> <span class="text-yellow-400">Promise</span>&lt;T&gt;;
}

<span class="text-green-400">// Usage - fully typed!</span>
<span class="text-blue-400">const</span> user = <span class="text-blue-400">await</span> fetchData&lt;<span class="text-yellow-400">User</span>&gt;(<span class="text-green-400">"/api/user/1"</span>);
<span class="text-blue-400">const</span> posts = <span class="text-blue-400">await</span> fetchData&lt;<span class="text-yellow-400">Post</span>[]&gt;(<span class="text-green-400">"/api/posts"</span>);</pre>
          </div>
        </section>

        <!-- 7. Const Assertions -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">7. Use Const Assertions</h2>
          <p class="mb-4 leading-relaxed">
            The <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">as const</code>
            assertion tells TypeScript to infer the narrowest possible type, making values readonly and literal.
          </p>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-green-400">// Without as const - type is string[]</span>
<span class="text-blue-400">const</span> roles = [<span class="text-green-400">"admin"</span>, <span class="text-green-400">"user"</span>, <span class="text-green-400">"guest"</span>];

<span class="text-green-400">// With as const - type is readonly ["admin", "user", "guest"]</span>
<span class="text-blue-400">const</span> roles = [<span class="text-green-400">"admin"</span>, <span class="text-green-400">"user"</span>, <span class="text-green-400">"guest"</span>] <span class="text-blue-400">as const</span>;

<span class="text-green-400">// Now you can derive types from it</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">Role</span> = (<span class="text-blue-400">typeof</span> roles)[<span class="text-yellow-400">number</span>];
<span class="text-gray-500">// Result: "admin" | "user" | "guest"</span></pre>
          </div>
        </section>

        <!-- 8. Template Literal Types -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">8. Template Literal Types</h2>
          <p class="mb-4 leading-relaxed">
            Template literal types allow you to build string types dynamically, great for creating
            type-safe event names, CSS properties, or API routes.
          </p>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-blue-400">type</span> <span class="text-yellow-400">HttpMethod</span> = <span class="text-green-400">"GET"</span> | <span class="text-green-400">"POST"</span> | <span class="text-green-400">"PUT"</span> | <span class="text-green-400">"DELETE"</span>;
<span class="text-blue-400">type</span> <span class="text-yellow-400">ApiVersion</span> = <span class="text-green-400">"v1"</span> | <span class="text-green-400">"v2"</span>;

<span class="text-green-400">// Build dynamic route types</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">ApiRoute</span> = <span class="text-green-400">`/api/${ApiVersion}/${string}`</span>;

<span class="text-blue-400">const</span> route1: <span class="text-yellow-400">ApiRoute</span> = <span class="text-green-400">"/api/v1/users"</span>;    <span class="text-gray-500">// OK</span>
<span class="text-blue-400">const</span> route2: <span class="text-yellow-400">ApiRoute</span> = <span class="text-green-400">"/api/v3/users"</span>;    <span class="text-red-400">// Error!</span>

<span class="text-green-400">// Type-safe event handlers</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">EventName</span> = <span class="text-green-400">`on${Capitalize&lt;"click" | "focus" | "blur"&gt;}`</span>;
<span class="text-gray-500">// Result: "onClick" | "onFocus" | "onBlur"</span></pre>
          </div>
        </section>

        <!-- 9. Exhaustive Checking -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">9. Exhaustive Checking with Never</h2>
          <p class="mb-4 leading-relaxed">
            Use the <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">never</code>
            type to ensure all cases in a union are handled. If a new variant is added later, TypeScript will
            throw a compile error reminding you to handle it.
          </p>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-blue-400">type</span> <span class="text-yellow-400">Shape</span> =
  | { kind: <span class="text-green-400">"circle"</span>; radius: <span class="text-yellow-400">number</span> }
  | { kind: <span class="text-green-400">"square"</span>; side: <span class="text-yellow-400">number</span> }
  | { kind: <span class="text-green-400">"triangle"</span>; base: <span class="text-yellow-400">number</span>; height: <span class="text-yellow-400">number</span> };

<span class="text-blue-400">function</span> <span class="text-purple-400">getArea</span>(shape: <span class="text-yellow-400">Shape</span>): <span class="text-yellow-400">number</span> {
  <span class="text-blue-400">switch</span> (shape.kind) {
    <span class="text-blue-400">case</span> <span class="text-green-400">"circle"</span>:
      <span class="text-blue-400">return</span> Math.PI * shape.radius ** <span class="text-yellow-400">2</span>;
    <span class="text-blue-400">case</span> <span class="text-green-400">"square"</span>:
      <span class="text-blue-400">return</span> shape.side ** <span class="text-yellow-400">2</span>;
    <span class="text-blue-400">case</span> <span class="text-green-400">"triangle"</span>:
      <span class="text-blue-400">return</span> (shape.base * shape.height) / <span class="text-yellow-400">2</span>;
    <span class="text-blue-400">default</span>:
      <span class="text-gray-500">// If you add a new shape and forget to handle it,</span>
      <span class="text-gray-500">// TypeScript will error here!</span>
      <span class="text-blue-400">const</span> _exhaustive: <span class="text-yellow-400">never</span> = shape;
      <span class="text-blue-400">return</span> _exhaustive;
  }
}</pre>
          </div>
        </section>

        <!-- 10. Type Guards -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">10. Custom Type Guards</h2>
          <p class="mb-4 leading-relaxed">
            Type guards narrow types at runtime while keeping full type safety. Use the
            <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">is</code>
            keyword to create reusable type narrowing functions.
          </p>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-blue-400">interface</span> <span class="text-yellow-400">Fish</span> { swim: () => <span class="text-yellow-400">void</span> }
<span class="text-blue-400">interface</span> <span class="text-yellow-400">Bird</span> { fly: () => <span class="text-yellow-400">void</span> }

<span class="text-green-400">// Custom type guard</span>
<span class="text-blue-400">function</span> <span class="text-purple-400">isFish</span>(animal: <span class="text-yellow-400">Fish</span> | <span class="text-yellow-400">Bird</span>): animal <span class="text-blue-400">is</span> <span class="text-yellow-400">Fish</span> {
  <span class="text-blue-400">return</span> (animal <span class="text-blue-400">as</span> <span class="text-yellow-400">Fish</span>).swim !== <span class="text-yellow-400">undefined</span>;
}

<span class="text-blue-400">function</span> <span class="text-purple-400">move</span>(animal: <span class="text-yellow-400">Fish</span> | <span class="text-yellow-400">Bird</span>) {
  <span class="text-blue-400">if</span> (isFish(animal)) {
    animal.swim(); <span class="text-gray-500">// TS knows it's Fish</span>
  } <span class="text-blue-400">else</span> {
    animal.fly();  <span class="text-gray-500">// TS knows it's Bird</span>
  }
}

<span class="text-green-400">// Also useful for filtering arrays</span>
<span class="text-blue-400">const</span> animals: (<span class="text-yellow-400">Fish</span> | <span class="text-yellow-400">Bird</span>)[] = getAnimals();
<span class="text-blue-400">const</span> fishes: <span class="text-yellow-400">Fish</span>[] = animals.filter(isFish);</pre>
          </div>
        </section>

        <!-- 11. Satisfies Operator -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">11. The Satisfies Operator (Game Changer)</h2>
          <p class="mb-4 leading-relaxed">
            Introduced in TypeScript 4.9, <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">satisfies</code>
            validates that a value matches a type <strong>without widening it</strong>. This means you get both type
            checking AND the narrowest inferred type. It's one of the most important features in modern TypeScript.
          </p>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-blue-400">type</span> <span class="text-yellow-400">Colors</span> = Record&lt;<span class="text-yellow-400">string</span>, <span class="text-yellow-400">string</span> | <span class="text-yellow-400">number</span>[]&gt;;

<span class="text-red-400">// Problem with type annotation - loses specific type info</span>
<span class="text-blue-400">const</span> palette: <span class="text-yellow-400">Colors</span> = {
  red: <span class="text-green-400">"#ff0000"</span>,
  green: <span class="text-green-400">"#00ff00"</span>,
  blue: [<span class="text-yellow-400">0</span>, <span class="text-yellow-400">0</span>, <span class="text-yellow-400">255</span>]
};
palette.red.toUpperCase(); <span class="text-red-400">// Error! TS thinks it might be number[]</span>

<span class="text-green-400">// Solution with satisfies - keeps narrow types!</span>
<span class="text-blue-400">const</span> palette = {
  red: <span class="text-green-400">"#ff0000"</span>,
  green: <span class="text-green-400">"#00ff00"</span>,
  blue: [<span class="text-yellow-400">0</span>, <span class="text-yellow-400">0</span>, <span class="text-yellow-400">255</span>]
} <span class="text-blue-400">satisfies</span> <span class="text-yellow-400">Colors</span>;

palette.red.toUpperCase();  <span class="text-green-400">// OK! TS knows red is string</span>
palette.blue.map(x => x);  <span class="text-green-400">// OK! TS knows blue is number[]</span></pre>
          </div>
          <div class="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
            <p class="text-sm text-amber-800 dark:text-amber-300">
              <strong>Why this matters:</strong> Before <code class="font-mono">satisfies</code>, you had to choose between
              type safety (annotation) and type narrowing (inference). Now you get both. Use it whenever you want to
              validate a value against a type while keeping its specific inferred type.
            </p>
          </div>
        </section>

        <!-- 12. Mapped Types -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">12. Mapped Types for Type Transformations</h2>
          <p class="mb-4 leading-relaxed">
            Mapped types let you create new types by transforming every property in an existing type.
            Combined with template literal types, they become incredibly powerful for building type-safe APIs.
          </p>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-green-400">// Make all properties optional and nullable</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">Nullable</span>&lt;T&gt; = {
  [K <span class="text-blue-400">in keyof</span> T]: T[K] | <span class="text-yellow-400">null</span>;
};

<span class="text-green-400">// Create getter functions for each property</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">Getters</span>&lt;T&gt; = {
  [K <span class="text-blue-400">in keyof</span> T <span class="text-blue-400">as</span> <span class="text-green-400">`get${Capitalize&lt;K & string&gt;}`</span>]: () => T[K];
};

<span class="text-blue-400">interface</span> <span class="text-yellow-400">User</span> {
  name: <span class="text-yellow-400">string</span>;
  age: <span class="text-yellow-400">number</span>;
}

<span class="text-blue-400">type</span> <span class="text-yellow-400">UserGetters</span> = Getters&lt;<span class="text-yellow-400">User</span>&gt;;
<span class="text-gray-500">// Result: { getName: () => string; getAge: () => number }</span>

<span class="text-green-400">// Create event handlers from a state type</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">EventHandlers</span>&lt;T&gt; = {
  [K <span class="text-blue-400">in keyof</span> T <span class="text-blue-400">as</span> <span class="text-green-400">`on${Capitalize&lt;K & string&gt;}Change`</span>]: (value: T[K]) => <span class="text-yellow-400">void</span>;
};

<span class="text-blue-400">type</span> <span class="text-yellow-400">UserEvents</span> = EventHandlers&lt;<span class="text-yellow-400">User</span>&gt;;
<span class="text-gray-500">// Result: { onNameChange: (value: string) => void; onAgeChange: (value: number) => void }</span></pre>
          </div>
        </section>

        <!-- 13. Error Handling -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">13. Type-Safe Error Handling</h2>
          <p class="mb-4 leading-relaxed">
            JavaScript's <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">catch</code>
            clause types errors as <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">unknown</code>.
            Using a Result pattern gives you compile-time error handling without exceptions.
          </p>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-green-400">// Result type - no more try/catch guessing</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">Result</span>&lt;T, E = <span class="text-yellow-400">Error</span>&gt; =
  | { ok: <span class="text-yellow-400">true</span>; data: T }
  | { ok: <span class="text-yellow-400">false</span>; error: E };

<span class="text-blue-400">async function</span> <span class="text-purple-400">fetchUser</span>(id: <span class="text-yellow-400">string</span>): <span class="text-yellow-400">Promise</span>&lt;<span class="text-yellow-400">Result</span>&lt;<span class="text-yellow-400">User</span>&gt;&gt; {
  <span class="text-blue-400">try</span> {
    <span class="text-blue-400">const</span> res = <span class="text-blue-400">await</span> fetch(<span class="text-green-400">`/api/users/${id}`</span>);
    <span class="text-blue-400">if</span> (!res.ok) {
      <span class="text-blue-400">return</span> { ok: <span class="text-yellow-400">false</span>, error: <span class="text-blue-400">new</span> <span class="text-yellow-400">Error</span>(<span class="text-green-400">`Status: ${res.status}`</span>) };
    }
    <span class="text-blue-400">const</span> data = <span class="text-blue-400">await</span> res.json();
    <span class="text-blue-400">return</span> { ok: <span class="text-yellow-400">true</span>, data };
  } <span class="text-blue-400">catch</span> (e) {
    <span class="text-blue-400">return</span> { ok: <span class="text-yellow-400">false</span>, error: e <span class="text-blue-400">instanceof</span> <span class="text-yellow-400">Error</span> ? e : <span class="text-blue-400">new</span> <span class="text-yellow-400">Error</span>(<span class="text-yellow-400">String</span>(e)) };
  }
}

<span class="text-green-400">// Usage - you MUST handle both cases</span>
<span class="text-blue-400">const</span> result = <span class="text-blue-400">await</span> fetchUser(<span class="text-green-400">"123"</span>);

<span class="text-blue-400">if</span> (result.ok) {
  console.log(result.data.name); <span class="text-gray-500">// TS knows data exists</span>
} <span class="text-blue-400">else</span> {
  console.error(result.error);   <span class="text-gray-500">// TS knows error exists</span>
}</pre>
          </div>
          <div class="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
            <p class="text-sm text-amber-800 dark:text-amber-300">
              <strong>Why this matters:</strong> With try/catch, TypeScript can't know what errors a function throws.
              The Result pattern makes error handling explicit in the type system - the caller is <em>forced</em>
              to check for errors before accessing data.
            </p>
          </div>
        </section>

        <!-- 14. Branded Types -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">14. Branded Types for Extra Safety</h2>
          <p class="mb-4 leading-relaxed">
            Branded types prevent you from accidentally mixing up values that share the same underlying type.
            For example, a <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">UserId</code>
            and an <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">OrderId</code>
            are both strings, but passing one where the other is expected is a bug.
          </p>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-green-400">// Create a brand using intersection with a unique symbol</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">Brand</span>&lt;T, B&gt; = T & { __brand: B };

<span class="text-blue-400">type</span> <span class="text-yellow-400">UserId</span> = Brand&lt;<span class="text-yellow-400">string</span>, <span class="text-green-400">"UserId"</span>&gt;;
<span class="text-blue-400">type</span> <span class="text-yellow-400">OrderId</span> = Brand&lt;<span class="text-yellow-400">string</span>, <span class="text-green-400">"OrderId"</span>&gt;;

<span class="text-blue-400">function</span> <span class="text-purple-400">getUser</span>(id: <span class="text-yellow-400">UserId</span>) { <span class="text-gray-500">/* ... */</span> }
<span class="text-blue-400">function</span> <span class="text-purple-400">getOrder</span>(id: <span class="text-yellow-400">OrderId</span>) { <span class="text-gray-500">/* ... */</span> }

<span class="text-green-400">// Factory functions to create branded values</span>
<span class="text-blue-400">const</span> userId = <span class="text-green-400">"user_123"</span> <span class="text-blue-400">as</span> <span class="text-yellow-400">UserId</span>;
<span class="text-blue-400">const</span> orderId = <span class="text-green-400">"order_456"</span> <span class="text-blue-400">as</span> <span class="text-yellow-400">OrderId</span>;

getUser(userId);   <span class="text-green-400">// OK</span>
getUser(orderId);  <span class="text-red-400">// Error! OrderId is not assignable to UserId</span>

<span class="text-green-400">// Real-world use: validated types</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">Email</span> = Brand&lt;<span class="text-yellow-400">string</span>, <span class="text-green-400">"Email"</span>&gt;;
<span class="text-blue-400">type</span> <span class="text-yellow-400">PositiveNumber</span> = Brand&lt;<span class="text-yellow-400">number</span>, <span class="text-green-400">"Positive"</span>&gt;;

<span class="text-blue-400">function</span> <span class="text-purple-400">validateEmail</span>(input: <span class="text-yellow-400">string</span>): <span class="text-yellow-400">Email</span> | <span class="text-yellow-400">null</span> {
  <span class="text-blue-400">return</span> input.includes(<span class="text-green-400">"@"</span>) ? input <span class="text-blue-400">as</span> <span class="text-yellow-400">Email</span> : <span class="text-yellow-400">null</span>;
}</pre>
          </div>
        </section>

        <!-- 15. Infer Keyword -->
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">15. The Infer Keyword in Conditional Types</h2>
          <p class="mb-4 leading-relaxed">
            The <code class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-pink-600 dark:text-pink-400">infer</code>
            keyword lets you extract types from within other types. Think of it as pattern matching for types -
            essential for building advanced type utilities.
          </p>
          <div class="relative group bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <button @click="copyCode($event)" class="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg class="w-4 h-4 copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
              <svg class="w-4 h-4 check-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <pre class="text-sm text-gray-100 font-mono"><span class="text-green-400">// Extract return type of a function</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">ReturnOf</span>&lt;T&gt; = T <span class="text-blue-400">extends</span> (...args: <span class="text-yellow-400">any</span>[]) => <span class="text-blue-400">infer</span> R ? R : <span class="text-yellow-400">never</span>;

<span class="text-blue-400">function</span> <span class="text-purple-400">createUser</span>() { <span class="text-blue-400">return</span> { id: <span class="text-yellow-400">1</span>, name: <span class="text-green-400">"Koeuk"</span> }; }
<span class="text-blue-400">type</span> <span class="text-yellow-400">User</span> = ReturnOf&lt;<span class="text-blue-400">typeof</span> createUser&gt;;
<span class="text-gray-500">// Result: { id: number; name: string }</span>

<span class="text-green-400">// Extract Promise value type</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">Unwrap</span>&lt;T&gt; = T <span class="text-blue-400">extends</span> <span class="text-yellow-400">Promise</span>&lt;<span class="text-blue-400">infer</span> U&gt; ? U : T;

<span class="text-blue-400">type</span> A = Unwrap&lt;<span class="text-yellow-400">Promise</span>&lt;<span class="text-yellow-400">string</span>&gt;&gt;; <span class="text-gray-500">// string</span>
<span class="text-blue-400">type</span> B = Unwrap&lt;<span class="text-yellow-400">number</span>&gt;;           <span class="text-gray-500">// number</span>

<span class="text-green-400">// Extract array element type</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">ElementOf</span>&lt;T&gt; = T <span class="text-blue-400">extends</span> (<span class="text-blue-400">infer</span> E)[] ? E : <span class="text-yellow-400">never</span>;

<span class="text-blue-400">type</span> C = ElementOf&lt;<span class="text-yellow-400">string</span>[]&gt;;   <span class="text-gray-500">// string</span>
<span class="text-blue-400">type</span> D = ElementOf&lt;<span class="text-yellow-400">number</span>[]&gt;;   <span class="text-gray-500">// number</span></pre>
          </div>
        </section>

        <!-- Common Mistakes -->
        <section class="mt-12 p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-200 dark:border-red-800">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">Common Mistakes to Avoid</h2>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 text-red-500 mt-0.5 text-lg">&#10007;</span>
              <div>
                <p class="font-semibold">Using <code class="font-mono text-sm">any</code> to silence errors</p>
                <p class="text-sm mt-1 text-gray-500 dark:text-gray-400">Use <code class="font-mono">unknown</code> and narrow the type, or use <code class="font-mono">// @ts-expect-error</code> with a comment explaining why.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 text-red-500 mt-0.5 text-lg">&#10007;</span>
              <div>
                <p class="font-semibold">Non-null assertions (<code class="font-mono text-sm">!</code>) everywhere</p>
                <p class="text-sm mt-1 text-gray-500 dark:text-gray-400">Each <code class="font-mono">!</code> is a potential runtime crash. Use optional chaining (<code class="font-mono">?.</code>) or proper null checks instead.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 text-red-500 mt-0.5 text-lg">&#10007;</span>
              <div>
                <p class="font-semibold">Type assertions (<code class="font-mono text-sm">as</code>) to force types</p>
                <p class="text-sm mt-1 text-gray-500 dark:text-gray-400">Assertions bypass the type checker. Use type guards or <code class="font-mono">satisfies</code> for safe validation instead.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 text-red-500 mt-0.5 text-lg">&#10007;</span>
              <div>
                <p class="font-semibold">Ignoring <code class="font-mono text-sm">strictNullChecks</code></p>
                <p class="text-sm mt-1 text-gray-500 dark:text-gray-400">This is the single most valuable strict flag. Without it, <code class="font-mono">null</code> and <code class="font-mono">undefined</code> silently pass through every type.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 text-red-500 mt-0.5 text-lg">&#10007;</span>
              <div>
                <p class="font-semibold">Over-engineering types</p>
                <p class="text-sm mt-1 text-gray-500 dark:text-gray-400">If your type takes 20 lines to write and is hard to read, simplify it. Types should help your team, not intimidate them.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Tips Section -->
        <section class="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">Quick Tips</h2>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 flex items-center justify-center text-sm font-bold">1</span>
              <p><strong>Avoid <code class="px-1.5 py-0.5 bg-white/50 dark:bg-primary-light rounded text-sm font-mono">any</code></strong> - Use <code class="px-1.5 py-0.5 bg-white/50 dark:bg-primary-light rounded text-sm font-mono">unknown</code> instead when the type is truly unknown. It forces you to narrow the type before using it.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 flex items-center justify-center text-sm font-bold">2</span>
              <p><strong>Use <code class="px-1.5 py-0.5 bg-white/50 dark:bg-primary-light rounded text-sm font-mono">satisfies</code></strong> - The <code class="px-1.5 py-0.5 bg-white/50 dark:bg-primary-light rounded text-sm font-mono">satisfies</code> operator validates a type without widening it: <code class="px-1.5 py-0.5 bg-white/50 dark:bg-primary-light rounded text-sm font-mono">const config = { ... } satisfies Config</code>.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 flex items-center justify-center text-sm font-bold">3</span>
              <p><strong>Prefer <code class="px-1.5 py-0.5 bg-white/50 dark:bg-primary-light rounded text-sm font-mono">Map</code> over objects</strong> - When keys are dynamic, <code class="px-1.5 py-0.5 bg-white/50 dark:bg-primary-light rounded text-sm font-mono">Map&lt;K, V&gt;</code> gives better type safety than index signatures.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 flex items-center justify-center text-sm font-bold">4</span>
              <p><strong>Use <code class="px-1.5 py-0.5 bg-white/50 dark:bg-primary-light rounded text-sm font-mono">readonly</code></strong> - Mark arrays and properties as <code class="px-1.5 py-0.5 bg-white/50 dark:bg-primary-light rounded text-sm font-mono">readonly</code> when they shouldn't be mutated to catch accidental modifications.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 flex items-center justify-center text-sm font-bold">5</span>
              <p><strong>Avoid enums</strong> - Prefer union types or <code class="px-1.5 py-0.5 bg-white/50 dark:bg-primary-light rounded text-sm font-mono">as const</code> objects. Enums add runtime code and have quirky behavior with reverse mappings.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 flex items-center justify-center text-sm font-bold">6</span>
              <p><strong>Return types on public APIs</strong> - While inference is great internally, always annotate return types on exported functions to prevent accidental breaking changes.</p>
            </div>
          </div>
        </section>

        <!-- Summary -->
        <section class="mt-12 p-6 bg-gray-50 dark:bg-primary-light rounded-2xl border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">Summary</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Enable <strong>strict mode</strong> for maximum type safety
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Let TypeScript <strong>infer types</strong> when possible
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Use <strong>interfaces</strong> for objects, <strong>types</strong> for unions
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Master <strong>utility types</strong> like Pick, Omit, Partial, Record
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Use <strong>discriminated unions</strong> for state management
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Write reusable code with <strong>generics</strong>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Use <strong>const assertions</strong> for literal types
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Build dynamic types with <strong>template literal types</strong>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Use <strong>exhaustive checking</strong> with <code class="text-sm font-mono">never</code>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Create <strong>custom type guards</strong> for runtime narrowing
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Use <strong>satisfies</strong> for validation without type widening
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Transform types with <strong>mapped types</strong>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Use the <strong>Result pattern</strong> for type-safe error handling
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Prevent ID mix-ups with <strong>branded types</strong>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1 flex-shrink-0">&#10003;</span>
              Extract types with the <strong>infer keyword</strong>
            </li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: 'TypeScript Best Practices for 2026 - Koeuk Dev' })

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
