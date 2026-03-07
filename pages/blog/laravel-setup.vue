<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <!-- Back button -->
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('blog.backToBlog') }}
      </NuxtLink>

      <!-- Header -->
      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs rounded-full font-medium">Laravel</span>
          <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs rounded-full font-medium">PHP</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          {{ t('blog.laravel.setup.title') }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Dec 28, 2025</p>
      </div>

      <!-- Content -->
      <article class="prose-content">
        <!-- Introduction -->
        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ t('blog.laravel.setup.intro') }}
          </p>
        </section>

        <!-- Prerequisites -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.setup.prerequisites') }}</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.laravel.setup.prereq1') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.laravel.setup.prereq2') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.laravel.setup.prereq3') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.laravel.setup.prereq4') }}</span>
            </li>
          </ul>
        </section>

        <!-- Step 1: Installation -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.setup.installTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.laravel.setup.installDesc') }}
          </p>
          <CodeBlock
            title="Terminal" :code="codes[0]" />
          <p class="text-gray-600 dark:text-gray-300 mt-4" v-html="t('blog.laravel.setup.installAfter')">
          </p>
        </section>

        <!-- Step 2: Configuration -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.setup.envTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.laravel.setup.envDesc')">
          </p>
          <CodeBlock
            title=".env" :code="codes[1]" />
          <div class="tip-box mt-4" v-html="t('blog.laravel.setup.tip')">
          </div>
        </section>

        <!-- Step 3: Project Structure -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.setup.structureTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.laravel.setup.structureDesc') }}
          </p>
          <CodeBlock
            :title="t('blog.laravel.setup.structureCodeTitle')" :code="codes[2]" />
        </section>

        <!-- Step 4: Routing -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.setup.routingTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.laravel.setup.routingDesc')">
          </p>
          <CodeBlock
            title="routes/web.php" :code="codes[3]" />
          <p class="text-gray-600 dark:text-gray-300 mt-4" v-html="t('blog.laravel.setup.routingAfter')">
          </p>
        </section>

        <!-- Step 5: Migration -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.setup.migrationTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.laravel.setup.migrationDesc1') }}
          </p>
          <CodeBlock
            title="Terminal" :code="codes[4]" />
          <p class="text-gray-600 dark:text-gray-300 my-4">
            {{ t('blog.laravel.setup.migrationDesc2') }}
          </p>
          <CodeBlock
            title="database/migrations/xxxx_create_posts_table.php" :code="codes[5]" />
          <CodeBlock class="mt-4"
            title="Terminal" :code="codes[6]" />
        </section>

        <!-- Step 6: Model -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.setup.modelTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.laravel.setup.modelDesc') }}
          </p>
          <CodeBlock
            title="Terminal" :code="codes[7]" />
          <CodeBlock class="mt-4"
            title="app/Models/Post.php" :code="codes[8]" />
        </section>

        <!-- Step 7: Controller -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.setup.controllerTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.laravel.setup.controllerDesc') }}
          </p>
          <CodeBlock
            title="Terminal" :code="codes[9]" />
          <CodeBlock class="mt-4"
            title="app/Http/Controllers/PostController.php" :code="codes[10]" />
        </section>

        <!-- Step 8: Useful Commands -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.setup.artisanTitle') }}</h2>
          <CodeBlock
            title="Terminal" :code="codes[11]" />
        </section>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.laravel.setup.summaryDesc') }}
          </p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.laravel.setup.sum1') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.laravel.setup.sum2') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.laravel.setup.sum3') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.laravel.setup.sum4') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.laravel.setup.sum5') }}</span>
            </li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Laravel Basic Setup Project - Koeuk Dev'
})
const { t } = useI18n()

const codes = [
  `# Install Laravel installer globally
composer global require laravel/installer

# Create a new Laravel project
laravel new my-project

# Or using Composer directly
composer create-project laravel/laravel my-project

# Navigate into the project
cd my-project

# Start the development server
php artisan serve`,
  `APP_NAME=MyProject
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=my_project
DB_USERNAME=root
DB_PASSWORD=`,
  `my-project/
├── app/
│   ├── Http/
│   │   ├── Controllers/    # Your controllers
│   │   └── Middleware/      # HTTP middleware
│   └── Models/              # Eloquent models
├── database/
│   ├── migrations/          # Database migrations
│   └── seeders/             # Database seeders
├── resources/
│   └── views/               # Blade templates
├── routes/
│   ├── web.php              # Web routes
│   └── api.php              # API routes
├── .env                     # Environment config
└── artisan                  # CLI tool`,
  `use App\\Http\\Controllers\\PostController;

// Basic route
Route::get('/', function () {
    return view('welcome');
});

// Resource routes (creates all CRUD routes)
Route::resource('posts', PostController::class);`,
  `php artisan make:migration create_posts_table`,
  `public function up(): void
{
    Schema::create('posts', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->text('body');
        $table->string('status')->default('draft');
        $table->timestamps();
    });
}`,
  `# Run the migration
php artisan migrate`,
  `# Create model with migration, factory, and seeder
php artisan make:model Post -mfs`,
  `namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Post extends Model
{
    protected $fillable = [
        'title',
        'body',
        'status',
    ];
}`,
  `php artisan make:controller PostController --resource --model=Post`,
  `namespace App\\Http\\Controllers;

use App\\Models\\Post;
use Illuminate\\Http\\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::latest()->get();
        return view('posts.index', compact('posts'));
    }

    public function create()
    {
        return view('posts.create');
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

    public function show(Post $post)
    {
        return view('posts.show', compact('post'));
    }

    public function edit(Post $post)
    {
        return view('posts.edit', compact('post'));
    }

    public function update(Request $request, Post $post)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'body'  => 'required',
        ]);

        $post->update($validated);

        return redirect()->route('posts.index')
            ->with('success', 'Post updated!');
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return redirect()->route('posts.index')
            ->with('success', 'Post deleted!');
    }
}`,
  `# Clear all caches
php artisan optimize:clear

# List all routes
php artisan route:list

# Create model + migration + controller + seeder + factory
php artisan make:model Product -mcsf --resource

# Run database seeders
php artisan db:seed

# Rollback last migration
php artisan migrate:rollback

# Fresh migrate (drop all tables & re-migrate)
php artisan migrate:fresh --seed`,
]
</script>

<style scoped>




.inline-code {
  @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-red-500 dark:text-red-400;
}

.tip-box {
  @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300;
}
</style>
