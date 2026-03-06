<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Back to Blog
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs rounded-full font-medium">Laravel</span>
          <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs rounded-full font-medium">PHP</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">Laravel Authorization</h1>
        <p class="text-gray-500 dark:text-gray-400">Dec 1, 2025</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Authentication answers "Who are you?" — Authorization answers "What are you allowed to do?" Laravel provides two ways to authorize actions: <strong>Gates</strong> (simple closures) and <strong>Policies</strong> (organized by model). Think of Gates for quick checks and Policies for model-specific permissions.
          </p>
        </section>

        <!-- Gates -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">1. Gates</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Gates are simple closures that determine if a user can perform an action. Define them in <code class="inline-code">AppServiceProvider</code>.
          </p>
          <CodeBlock
            title="app/Providers/AppServiceProvider.php" :code="codes[0]" />
          <CodeBlock class="mt-4"
            title="Using Gates" :code="codes[1]" />
        </section>

        <!-- Policies -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">2. Policies</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Policies organize authorization logic around a specific model. Each method in a policy corresponds to an action (view, create, update, delete).
          </p>
          <CodeBlock
            title="Terminal" :code="codes[2]" />
          <CodeBlock class="mt-4"
            title="app/Policies/PostPolicy.php" :code="codes[3]" />
          <div class="tip-box mt-4">
            <strong>Auto-discovery:</strong> Laravel automatically discovers policies if you follow naming conventions: <code class="inline-code">Post</code> model → <code class="inline-code">PostPolicy</code>. No manual registration needed.
          </div>
        </section>

        <!-- Using Policies -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">3. Using Policies</h2>

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">In Controllers</h3>
          <CodeBlock
            title="app/Http/Controllers/PostController.php" :code="codes[4]" />

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-8">Via User Model</h3>
          <CodeBlock
            title="Using on User model" :code="codes[5]" />

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-8">In Blade Templates</h3>
          <CodeBlock
            title="Blade" :code="codes[6]" />
        </section>

        <!-- Middleware -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">4. Authorization in Routes</h2>
          <CodeBlock
            title="routes/web.php" :code="codes[7]" />
        </section>

        <!-- Roles Example -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">5. Simple Role-Based Access</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A practical example combining Gates for role-based access:
          </p>
          <CodeBlock
            title="Migration: add role to users" :code="codes[8]" />
          <CodeBlock class="mt-4"
            title="AppServiceProvider — define role gates" :code="codes[9]" />
          <CodeBlock class="mt-4"
            title="Usage" :code="codes[10]" />
        </section>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">Summary</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Gates</strong> — simple closure-based authorization checks</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Policies</strong> — model-specific authorization organized by actions</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>$this->authorize()</strong> — check in controllers (throws 403)</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>@can / @cannot</strong> — conditional rendering in Blade</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>can: middleware</strong> — protect routes with authorization</span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Laravel Authorization - Koeuk Dev' })

const codes = [
  `use Illuminate\\Support\\Facades\\Gate;
use App\\Models\\User;
use App\\Models\\Post;

public function boot(): void
{
    // Simple gate: only admins can access
    Gate::define('access-dashboard', function (User $user) {
        return $user->role === 'admin';
    });

    // Gate with model: only the author can update a post
    Gate::define('update-post', function (User $user, Post $post) {
        return $user->id === $post->user_id;
    });

    // Gate: admin can do everything (before hook)
    Gate::before(function (User $user, string $ability) {
        if ($user->role === 'admin') {
            return true; // Admin bypasses all gates
        }
    });
}`,
  `use Illuminate\\Support\\Facades\\Gate;

// In controller
public function edit(Post $post)
{
    // Check permission — returns 403 if denied
    Gate::authorize('update-post', $post);

    return view('posts.edit', compact('post'));
}

// Check without throwing error
if (Gate::allows('update-post', $post)) {
    // User can update
}

if (Gate::denies('update-post', $post)) {
    // User cannot update
}

// In Blade templates
@can('update-post', $post)
    &lt;a href="/posts/\${'{{'} $post-&gt;id \${'}}'}/edit">Edit&lt;/a&gt;
@endcan

@cannot('update-post', $post)
    &lt;p&gt;You cannot edit this post.&lt;/p&gt;
@endcannot`,
  `# Generate a policy for Post model
php artisan make:policy PostPolicy --model=Post`,
  `namespace App\\Policies;

use App\\Models\\Post;
use App\\Models\\User;

class PostPolicy
{
    // Can the user view any posts?
    public function viewAny(User $user): bool
    {
        return true; // Everyone can view posts list
    }

    // Can the user view this specific post?
    public function view(User $user, Post $post): bool
    {
        return true; // Everyone can view a post
    }

    // Can the user create posts?
    public function create(User $user): bool
    {
        return $user->role === 'admin' || $user->role === 'author';
    }

    // Can the user update this post?
    public function update(User $user, Post $post): bool
    {
        return $user->id === $post->user_id;
    }

    // Can the user delete this post?
    public function delete(User $user, Post $post): bool
    {
        return $user->id === $post->user_id;
    }
}`,
  `class PostController extends Controller
{
    public function index()
    {
        $this->authorize('viewAny', Post::class);
        $posts = Post::all();
        return view('posts.index', compact('posts'));
    }

    public function edit(Post $post)
    {
        // Throws 403 if user is not the author
        $this->authorize('update', $post);
        return view('posts.edit', compact('post'));
    }

    public function update(Request $request, Post $post)
    {
        $this->authorize('update', $post);

        $post->update($request->validated());
        return redirect()->route('posts.show', $post);
    }

    public function destroy(Post $post)
    {
        $this->authorize('delete', $post);

        $post->delete();
        return redirect()->route('posts.index');
    }
}`,
  `$user = Auth::user();

if ($user->can('update', $post)) {
    // User can update this post
}

if ($user->cannot('delete', $post)) {
    // User cannot delete this post
}`,
  `@can('create', App\\Models\\Post::class)
    &lt;a href="/posts/create"&gt;Create Post&lt;/a&gt;
@endcan

@can('update', $post)
    &lt;a href="/posts/\${'{{'} $post-&gt;id \${'}}'}/edit">Edit&lt;/a&gt;
@endcan

@can('delete', $post)
    &lt;form method="POST" action="/posts/\${'{{'} $post-&gt;id \${'}}'}">
        @csrf
        @method('DELETE')
        &lt;button&gt;Delete&lt;/button&gt;
    &lt;/form&gt;
@endcan`,
  `// Using 'can' middleware
Route::put('/posts/{post}', [PostController::class, 'update'])
    ->middleware('can:update,post');

Route::delete('/posts/{post}', [PostController::class, 'destroy'])
    ->middleware('can:delete,post');

// For actions without model instance
Route::get('/posts/create', [PostController::class, 'create'])
    ->middleware('can:create,App\\Models\\Post');`,
  `// Add to users migration
$table->string('role')->default('user'); // user, author, admin`,
  `Gate::define('admin', fn (User $user) => $user->role === 'admin');
Gate::define('author', fn (User $user) => in_array($user->role, ['author', 'admin']));
Gate::define('manage-users', fn (User $user) => $user->role === 'admin');`,
  `// In routes
Route::middleware('can:admin')->group(function () {
    Route::get('/admin', [AdminController::class, 'index']);
    Route::resource('/users', UserController::class);
});

// In Blade
@can('admin')
    &lt;a href="/admin"&gt;Admin Panel&lt;/a&gt;
@endcan`,
]
</script>

<style scoped>
.inline-code { @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-red-500 dark:text-red-400; }
.tip-box { @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300; }
</style>
