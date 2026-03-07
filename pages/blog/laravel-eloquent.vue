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
          {{ t('blog.laravel.eloquent.title') }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Dec 15, 2025</p>
      </div>

      <!-- Content -->
      <article class="prose-content">

        <!-- Introduction -->
        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ t('blog.laravel.eloquent.intro') }}
          </p>
        </section>

        <!-- What is Eloquent -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.eloquent.whatTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.laravel.eloquent.whatDesc') }}
          </p>
          <CodeBlock
            :title="t('blog.laravel.eloquent.c_rawSql')" :code="codes[0]" />
          <p class="text-gray-600 dark:text-gray-300 my-4">
            {{ t('blog.laravel.eloquent.whatInstead') }}
          </p>
          <CodeBlock
            :title="t('blog.laravel.eloquent.c_eloquent')" :code="codes[1]" />
          <p class="text-gray-600 dark:text-gray-300 mt-4">
            {{ t('blog.laravel.eloquent.whatClean') }}
          </p>
        </section>

        <!-- Creating a Model -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.eloquent.modelTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.laravel.eloquent.modelDesc')"></p>
          <CodeBlock
            title="Terminal" :code="codes[2]" />
          <CodeBlock class="mt-4"
            title="app/Models/Post.php" :code="codes[3]" />
          <div class="tip-box mt-4" v-html="t('blog.laravel.eloquent.tipFillable')"></div>
        </section>

        <!-- CRUD Operations -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.eloquent.crudTitle') }}</h2>

          <!-- Create -->
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-6">{{ t('blog.laravel.eloquent.crudCreate') }}</h3>
          <CodeBlock
            :title="t('blog.laravel.eloquent.c_creating')" :code="codes[4]" />

          <!-- Read -->
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-8">{{ t('blog.laravel.eloquent.crudRead') }}</h3>
          <CodeBlock
            :title="t('blog.laravel.eloquent.c_reading')" :code="codes[5]" />

          <!-- Update -->
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-8">{{ t('blog.laravel.eloquent.crudUpdate') }}</h3>
          <CodeBlock
            :title="t('blog.laravel.eloquent.c_updating')" :code="codes[6]" />

          <!-- Delete -->
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-8">{{ t('blog.laravel.eloquent.crudDelete') }}</h3>
          <CodeBlock
            :title="t('blog.laravel.eloquent.c_deleting')" :code="codes[7]" />
        </section>

        <!-- Query Scopes -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.eloquent.scopeTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.laravel.eloquent.scopeDesc') }}
          </p>
          <CodeBlock
            title="app/Models/Post.php" :code="codes[8]" />
          <CodeBlock class="mt-4"
            :title="t('blog.laravel.eloquent.c_usageCtrl')" :code="codes[9]" />
        </section>

        <!-- Accessors & Mutators -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.eloquent.accessorTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.laravel.eloquent.accessorDesc')"></p>
          <CodeBlock
            title="app/Models/User.php" :code="codes[10]" />
          <CodeBlock class="mt-4"
            :title="t('blog.laravel.eloquent.c_usage')" :code="codes[11]" />
        </section>

        <!-- Soft Deletes -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.eloquent.softTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.laravel.eloquent.softDesc')"></p>
          <CodeBlock
            title="Migration" :code="codes[12]" />
          <CodeBlock class="mt-4"
            title="app/Models/Post.php" :code="codes[13]" />
          <CodeBlock class="mt-4"
            :title="t('blog.laravel.eloquent.c_usage')" :code="codes[14]" />
        </section>

        <!-- Common Queries -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.eloquent.queryTitle') }}</h2>
          <CodeBlock
            :title="t('blog.laravel.eloquent.c_queries')" :code="codes[15]" />
        </section>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.eloquent.sum1')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.eloquent.sum2')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.eloquent.sum3')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.eloquent.sum4')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.eloquent.sum5')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.eloquent.sum6')"></span></li>
          </ul>
        </section>

      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Laravel Eloquent ORM - Koeuk Dev'
})
const { t } = useI18n()

const codes = [
  `SELECT * FROM users WHERE active = 1 ORDER BY name ASC;`,
  `$users = User::where('active', 1)->orderBy('name')->get();`,
  `# Create a model
php artisan make:model Post

# Create model + migration + controller + factory + seeder
php artisan make:model Post -mcfs`,
  `namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Post extends Model
{
    // Fields that can be mass assigned
    protected $fillable = [
        'title',
        'body',
        'status',
        'user_id',
    ];

    // Fields that should be hidden (e.g. in JSON)
    protected $hidden = [
        'password',
    ];

    // Auto-cast fields to specific types
    protected $casts = [
        'published_at' => 'datetime',
        'is_featured'  => 'boolean',
        'metadata'     => 'array',
    ];
}`,
  `// Method 1: Create and save in one step
$post = Post::create([
    'title' => 'My First Post',
    'body'  => 'This is the content.',
]);

// Method 2: Create instance, set values, then save
$post = new Post();
$post->title = 'My First Post';
$post->body  = 'This is the content.';
$post->save();

// Method 3: Find or create (avoid duplicates)
$post = Post::firstOrCreate(
    ['title' => 'My First Post'],     // Search by this
    ['body' => 'This is the content.'] // Create with this if not found
);`,
  `// Get ALL posts
$posts = Post::all();

// Find by primary key (ID)
$post = Post::find(1);

// Find or throw 404 error
$post = Post::findOrFail(1);

// Get first matching record
$post = Post::where('status', 'published')->first();

// Get with conditions
$posts = Post::where('status', 'published')
    ->where('user_id', 1)
    ->orderBy('created_at', 'desc')
    ->take(10)
    ->get();

// Count records
$count = Post::where('status', 'published')->count();

// Check if any exist
$exists = Post::where('title', 'Hello')->exists();`,
  `// Method 1: Find then update
$post = Post::find(1);
$post->title = 'Updated Title';
$post->save();

// Method 2: Update in one step
$post = Post::find(1);
$post->update([
    'title'  => 'Updated Title',
    'status' => 'published',
]);

// Method 3: Mass update (multiple records)
Post::where('status', 'draft')
    ->update(['status' => 'archived']);`,
  `// Method 1: Find then delete
$post = Post::find(1);
$post->delete();

// Method 2: Delete by ID directly
Post::destroy(1);

// Method 3: Delete multiple by IDs
Post::destroy([1, 2, 3]);

// Method 4: Delete with condition
Post::where('status', 'archived')->delete();`,
  `class Post extends Model
{
    // Define a scope (always prefix with "scope")
    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }

    public function scopeRecent($query)
    {
        return $query->orderBy('created_at', 'desc');
    }

    // Scope with parameter
    public function scopeOfStatus($query, string $status)
    {
        return $query->where('status', $status);
    }
}`,
  `// Clean and readable!
$posts = Post::published()->recent()->take(5)->get();

// With parameter
$drafts = Post::ofStatus('draft')->get();`,
  `use Illuminate\\Database\\Eloquent\\Casts\\Attribute;

class User extends Model
{
    // Accessor: auto-capitalize name when reading
    protected function name(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => ucwords($value),
        );
    }

    // Mutator: auto-hash password when saving
    protected function password(): Attribute
    {
        return Attribute::make(
            set: fn (string $value) => bcrypt($value),
        );
    }

    // Both accessor + mutator together
    protected function email(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => strtolower($value),
            set: fn (string $value) => strtolower($value),
        );
    }
}`,
  `$user = User::find(1);

// Accessor runs automatically
echo $user->name; // "John Doe" (even if stored as "john doe")

// Mutator runs automatically
$user->password = 'secret123'; // Stored as hashed value`,
  `// Add to your migration
$table->softDeletes(); // Adds 'deleted_at' column`,
  `use Illuminate\\Database\\Eloquent\\SoftDeletes;

class Post extends Model
{
    use SoftDeletes;
}`,
  `$post->delete();            // Soft delete (sets deleted_at)

Post::withTrashed()->get(); // Include soft-deleted records

Post::onlyTrashed()->get(); // Only soft-deleted records

$post->restore();           // Undo soft delete

$post->forceDelete();       // Permanently delete from DB`,
  `// Pagination (15 per page)
$posts = Post::paginate(15);

// Select specific columns only
$posts = Post::select('id', 'title')->get();

// Where with multiple conditions
$posts = Post::where('status', 'published')
    ->where('views', '>', 100)
    ->get();

// Where IN
$posts = Post::whereIn('id', [1, 2, 3])->get();

// Where between dates
$posts = Post::whereBetween('created_at', [
    '2025-01-01', '2025-12-31'
])->get();

// Search with LIKE
$posts = Post::where('title', 'like', '%laravel%')->get();

// Aggregate functions
$total   = Post::count();
$average = Post::avg('views');
$max     = Post::max('views');
$sum     = Post::sum('views');

// Chunk large datasets (process 100 at a time)
Post::chunk(100, function ($posts) {
    foreach ($posts as $post) {
        // Process each post
    }
});`,
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
