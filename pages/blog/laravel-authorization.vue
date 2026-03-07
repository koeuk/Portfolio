<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('blog.backToBlog') }}
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs rounded-full font-medium">Laravel</span>
          <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs rounded-full font-medium">PHP</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.authorization.title') }}</h1>
        <p class="text-gray-500 dark:text-gray-400">Dec 1, 2025</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" v-html="t('blog.laravel.authorization.intro')"></p>
        </section>

        <!-- Gates -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.authorization.gatesTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.laravel.authorization.gatesDesc')"></p>
          <CodeBlock
            title="app/Providers/AppServiceProvider.php" :code="codes[0]" />
          <CodeBlock class="mt-4"
            :title="t('blog.laravel.authorization.gatesCodeTitle')" :code="codes[1]" />
        </section>

        <!-- Policies -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.authorization.policiesTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.laravel.authorization.policiesDesc') }}</p>
          <CodeBlock
            title="Terminal" :code="codes[2]" />
          <CodeBlock class="mt-4"
            title="app/Policies/PostPolicy.php" :code="codes[3]" />
          <div class="tip-box mt-4" v-html="t('blog.laravel.authorization.policiesTip')"></div>
        </section>

        <!-- Using Policies -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.authorization.usingPoliciesTitle') }}</h2>

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.laravel.authorization.inControllers') }}</h3>
          <CodeBlock
            title="app/Http/Controllers/PostController.php" :code="codes[4]" />

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-8">{{ t('blog.laravel.authorization.viaUserModel') }}</h3>
          <CodeBlock
            :title="t('blog.laravel.authorization.viaUserModelCodeTitle')" :code="codes[5]" />

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-8">{{ t('blog.laravel.authorization.inBladeTemplates') }}</h3>
          <CodeBlock
            :title="t('blog.laravel.authorization.bladeCodeTitle')" :code="codes[6]" />
        </section>

        <!-- Middleware -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.authorization.routesTitle') }}</h2>
          <CodeBlock
            title="routes/web.php" :code="codes[7]" />
        </section>

        <!-- Roles Example -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.authorization.roleTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.laravel.authorization.roleDesc') }}</p>
          <CodeBlock
            :title="t('blog.laravel.authorization.migrationCodeTitle')" :code="codes[8]" />
          <CodeBlock class="mt-4"
            :title="t('blog.laravel.authorization.providerCodeTitle')" :code="codes[9]" />
          <CodeBlock class="mt-4"
            :title="t('blog.laravel.authorization.usageCodeTitle')" :code="codes[10]" />
        </section>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.authorization.summary1')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.authorization.summary2')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.authorization.summary3')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.authorization.summary4')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.authorization.summary5')"></span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

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
