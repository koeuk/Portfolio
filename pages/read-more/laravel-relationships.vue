<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <!-- Back button -->
      <NuxtLink to="/read-more" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('readMore.back') }}
      </NuxtLink>

      <!-- Header -->
      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs rounded-full font-medium">Laravel</span>
          <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs rounded-full font-medium">PHP</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          Laravel Eloquent Relationships
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Dec 10, 2025</p>
      </div>

      <!-- Content -->
      <article class="prose-content">

        <!-- Introduction -->
        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            In real applications, database tables are related to each other. A user has many posts, a post belongs to a user, a post has many tags. Eloquent Relationships let you define these connections directly in your models, so you can access related data easily without writing complex SQL joins.
          </p>
        </section>

        <!-- Overview -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">Relationship Types Overview</h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">Relationship</th>
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">Example</th>
                  <th class="py-3 text-primary dark:text-white font-semibold">Foreign Key On</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 dark:text-gray-300">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-medium">hasOne</td>
                  <td class="py-3 pr-4">User has one Profile</td>
                  <td class="py-3">profiles table</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-medium">belongsTo</td>
                  <td class="py-3 pr-4">Profile belongs to User</td>
                  <td class="py-3">profiles table</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-medium">hasMany</td>
                  <td class="py-3 pr-4">User has many Posts</td>
                  <td class="py-3">posts table</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-medium">belongsToMany</td>
                  <td class="py-3 pr-4">Post has many Tags</td>
                  <td class="py-3">pivot table</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4 font-medium">hasOneThrough</td>
                  <td class="py-3 pr-4">Country has one Capital through City</td>
                  <td class="py-3">intermediate table</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- One to One -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">1. One to One (hasOne / belongsTo)</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A User has one Profile. The <code class="inline-code">profiles</code> table stores a <code class="inline-code">user_id</code> foreign key.
          </p>

          <!-- Visual Tables -->
          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div class="db-table">
              <div class="db-table-header">users</div>
              <table class="db-table-body">
                <thead><tr><th>id</th><th>name</th><th>email</th></tr></thead>
                <tbody>
                  <tr class="highlight-row"><td>1</td><td>John</td><td>john@mail.com</td></tr>
                  <tr><td>2</td><td>Jane</td><td>jane@mail.com</td></tr>
                </tbody>
              </table>
            </div>
            <div class="db-table">
              <div class="db-table-header">profiles</div>
              <table class="db-table-body">
                <thead><tr><th>id</th><th class="fk-col">user_id</th><th>bio</th></tr></thead>
                <tbody>
                  <tr class="highlight-row"><td>1</td><td class="fk-col">1</td><td>Developer</td></tr>
                  <tr><td>2</td><td class="fk-col">2</td><td>Designer</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flow-arrow mb-6">
            <span class="text-xs text-gray-500 dark:text-gray-400">User <strong>id: 1</strong></span>
            <span class="arrow-line"></span>
            <span class="text-xs text-gray-500 dark:text-gray-400">Profile <strong>user_id: 1</strong></span>
          </div>

          <CodeBlock
            title="Migration: profiles table" :code="codes[0]" />
          <CodeBlock class="mt-4"
            title="app/Models/User.php" :code="codes[1]" />
          <CodeBlock class="mt-4"
            title="app/Models/Profile.php" :code="codes[2]" />
          <CodeBlock class="mt-4"
            title="Usage" :code="codes[3]" />
        </section>

        <!-- One to Many -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">2. One to Many (hasMany / belongsTo)</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A User has many Posts. Each post stores a <code class="inline-code">user_id</code> to know who wrote it.
          </p>

          <!-- Visual Tables -->
          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div class="db-table">
              <div class="db-table-header">users</div>
              <table class="db-table-body">
                <thead><tr><th>id</th><th>name</th></tr></thead>
                <tbody>
                  <tr class="highlight-row"><td>1</td><td>John</td></tr>
                  <tr><td>2</td><td>Jane</td></tr>
                </tbody>
              </table>
            </div>
            <div class="db-table">
              <div class="db-table-header">posts</div>
              <table class="db-table-body">
                <thead><tr><th>id</th><th class="fk-col">user_id</th><th>title</th></tr></thead>
                <tbody>
                  <tr class="highlight-row"><td>1</td><td class="fk-col">1</td><td>Laravel Basics</td></tr>
                  <tr class="highlight-row"><td>2</td><td class="fk-col">1</td><td>Eloquent ORM</td></tr>
                  <tr><td>3</td><td class="fk-col">2</td><td>CSS Grid</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flow-arrow mb-6">
            <span class="text-xs text-gray-500 dark:text-gray-400">User <strong>id: 1</strong></span>
            <span class="arrow-line"></span>
            <span class="text-xs text-gray-500 dark:text-gray-400">Posts <strong>user_id: 1</strong> (2 rows)</span>
          </div>

          <CodeBlock
            title="Migration: posts table" :code="codes[4]" />
          <CodeBlock class="mt-4"
            title="app/Models/User.php" :code="codes[5]" />
          <CodeBlock class="mt-4"
            title="app/Models/Post.php" :code="codes[6]" />
          <CodeBlock class="mt-4"
            title="Usage" :code="codes[7]" />
        </section>

        <!-- Many to Many -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">3. Many to Many (belongsToMany)</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A Post can have many Tags, and a Tag can belong to many Posts. This requires a <strong>pivot table</strong> (a third table that connects them).
          </p>

          <!-- Visual Tables -->
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="db-table">
              <div class="db-table-header">posts</div>
              <table class="db-table-body">
                <thead><tr><th>id</th><th>title</th></tr></thead>
                <tbody>
                  <tr class="highlight-row"><td>1</td><td>Laravel Basics</td></tr>
                  <tr><td>2</td><td>Vue Guide</td></tr>
                </tbody>
              </table>
            </div>
            <div class="db-table">
              <div class="db-table-header bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400">post_tag (pivot)</div>
              <table class="db-table-body">
                <thead><tr><th class="fk-col">post_id</th><th class="fk-col">tag_id</th></tr></thead>
                <tbody>
                  <tr class="highlight-row"><td class="fk-col">1</td><td class="fk-col">1</td></tr>
                  <tr class="highlight-row"><td class="fk-col">1</td><td class="fk-col">2</td></tr>
                  <tr><td class="fk-col">2</td><td class="fk-col">1</td></tr>
                </tbody>
              </table>
            </div>
            <div class="db-table">
              <div class="db-table-header">tags</div>
              <table class="db-table-body">
                <thead><tr><th>id</th><th>name</th></tr></thead>
                <tbody>
                  <tr class="highlight-row"><td>1</td><td>PHP</td></tr>
                  <tr class="highlight-row"><td>2</td><td>Laravel</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flow-arrow mb-6">
            <span class="text-xs text-gray-500 dark:text-gray-400">Post <strong>id: 1</strong></span>
            <span class="arrow-line"></span>
            <span class="text-xs text-gray-500 dark:text-gray-400">pivot <strong>post_id: 1</strong></span>
            <span class="arrow-line"></span>
            <span class="text-xs text-gray-500 dark:text-gray-400">Tags <strong>id: 1, 2</strong></span>
          </div>

          <CodeBlock
            title="Migration: tags table + pivot table" :code="codes[8]" />
          <div class="tip-box mt-4 mb-4">
            <strong>Pivot table naming:</strong> Use both table names in singular form, in alphabetical order, separated by underscore. So <code class="inline-code">post</code> + <code class="inline-code">tag</code> = <code class="inline-code">post_tag</code>.
          </div>
          <CodeBlock
            title="app/Models/Post.php" :code="codes[9]" />
          <CodeBlock class="mt-4"
            title="app/Models/Tag.php" :code="codes[10]" />
          <CodeBlock class="mt-4"
            title="Usage" :code="codes[11]" />
        </section>

        <!-- Has Many Through -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">4. Has Many Through</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Access distant relations through an intermediate model. Example: A Country has many Posts <strong>through</strong> Users.
          </p>

          <!-- Visual Tables -->
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="db-table">
              <div class="db-table-header">countries</div>
              <table class="db-table-body">
                <thead><tr><th>id</th><th>name</th></tr></thead>
                <tbody>
                  <tr class="highlight-row"><td>1</td><td>Cambodia</td></tr>
                  <tr><td>2</td><td>Japan</td></tr>
                </tbody>
              </table>
            </div>
            <div class="db-table">
              <div class="db-table-header">users (intermediate)</div>
              <table class="db-table-body">
                <thead><tr><th>id</th><th class="fk-col">country_id</th><th>name</th></tr></thead>
                <tbody>
                  <tr class="highlight-row"><td>1</td><td class="fk-col">1</td><td>John</td></tr>
                  <tr class="highlight-row"><td>2</td><td class="fk-col">1</td><td>Jane</td></tr>
                  <tr><td>3</td><td class="fk-col">2</td><td>Yuki</td></tr>
                </tbody>
              </table>
            </div>
            <div class="db-table">
              <div class="db-table-header">posts</div>
              <table class="db-table-body">
                <thead><tr><th>id</th><th class="fk-col">user_id</th><th>title</th></tr></thead>
                <tbody>
                  <tr class="highlight-row"><td>1</td><td class="fk-col">1</td><td>Laravel</td></tr>
                  <tr class="highlight-row"><td>2</td><td class="fk-col">2</td><td>Vue.js</td></tr>
                  <tr><td>3</td><td class="fk-col">3</td><td>React</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flow-arrow mb-6">
            <span class="text-xs text-gray-500 dark:text-gray-400">Country <strong>id: 1</strong></span>
            <span class="arrow-line"></span>
            <span class="text-xs text-gray-500 dark:text-gray-400">Users <strong>country_id: 1</strong></span>
            <span class="arrow-line"></span>
            <span class="text-xs text-gray-500 dark:text-gray-400">Posts <strong>user_id: 1, 2</strong></span>
          </div>

          <CodeBlock
            title="Tables" :code="codes[12]" />
          <CodeBlock class="mt-4"
            title="app/Models/Country.php" :code="codes[13]" />
          <CodeBlock class="mt-4"
            title="Usage" :code="codes[14]" />
        </section>

        <!-- Eager Loading -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">5. Eager Loading (N+1 Problem)</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Without eager loading, accessing relations in a loop causes many extra database queries (the N+1 problem). Eager loading fixes this.
          </p>
          <CodeBlock
            title="Bad: N+1 Problem (1 + N queries)" :code="codes[15]" />
          <CodeBlock class="mt-4"
            title="Good: Eager Loading (2 queries total)" :code="codes[16]" />
          <div class="tip-box mt-4">
            <strong>Rule of thumb:</strong> Always use <code class="inline-code">with()</code> when you know you'll access a relation inside a loop. This is one of the most important performance optimizations in Laravel.
          </div>
        </section>

        <!-- Querying Relations -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">6. Querying Relationships</h2>
          <CodeBlock
            title="Useful Relationship Queries" :code="codes[17]" />
        </section>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span><strong>hasOne / belongsTo</strong> — one-to-one (User → Profile)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span><strong>hasMany / belongsTo</strong> — one-to-many (User → Posts)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span><strong>belongsToMany</strong> — many-to-many with pivot table (Posts ↔ Tags)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span><strong>hasManyThrough</strong> — distant relations through intermediate model</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span><strong>Eager Loading</strong> — always use <code class="inline-code">with()</code> to avoid N+1 queries</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span><strong>has / whereHas</strong> — query based on relationship existence</span>
            </li>
          </ul>
        </section>

      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Laravel Eloquent Relationships - Koeuk Dev'
})
const { t } = useI18n()

const codes = [
  `Schema::create('profiles', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade');
    $table->string('bio')->nullable();
    $table->string('avatar')->nullable();
    $table->string('phone')->nullable();
    $table->timestamps();
});`,
  `class User extends Model
{
    // A user HAS ONE profile
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}`,
  `class Profile extends Model
{
    // A profile BELONGS TO a user
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}`,
  `// Get user's profile
$user = User::find(1);
echo $user->profile->bio;

// Get profile's user
$profile = Profile::find(1);
echo $profile->user->name;

// Create profile for user
$user->profile()->create([
    'bio'   => 'Hello world',
    'phone' => '012345678',
]);`,
  `Schema::create('posts', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade');
    $table->string('title');
    $table->text('body');
    $table->timestamps();
});`,
  `class User extends Model
{
    // A user HAS MANY posts
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}`,
  `class Post extends Model
{
    // A post BELONGS TO a user
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}`,
  `// Get all posts by a user
$user = User::find(1);
foreach ($user->posts as $post) {
    echo $post->title;
}

// Get the author of a post
$post = Post::find(1);
echo $post->user->name;

// Count user's posts
echo $user->posts()->count();

// Add a new post to user
$user->posts()->create([
    'title' => 'New Post',
    'body'  => 'Content here...',
]);`,
  `// Tags table
Schema::create('tags', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->timestamps();
});

// Pivot table (naming convention: alphabetical order)
Schema::create('post_tag', function (Blueprint $table) {
    $table->id();
    $table->foreignId('post_id')->constrained()->onDelete('cascade');
    $table->foreignId('tag_id')->constrained()->onDelete('cascade');
});`,
  `class Post extends Model
{
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}`,
  `class Tag extends Model
{
    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }
}`,
  `// Get all tags of a post
$post = Post::find(1);
foreach ($post->tags as $tag) {
    echo $tag->name;
}

// Attach tags to a post (add to pivot table)
$post->tags()->attach([1, 2, 3]);

// Detach tags (remove from pivot table)
$post->tags()->detach([1]);

// Sync tags (replace all existing with these)
$post->tags()->sync([2, 3, 4]);

// Toggle tags (attach if missing, detach if exists)
$post->tags()->toggle([1, 2]);`,
  `countries:  id, name
users:      id, country_id, name
posts:      id, user_id, title`,
  `class Country extends Model
{
    public function posts()
    {
        return $this->hasManyThrough(Post::class, User::class);
    }
}`,
  `// Get all posts from a country (goes through users)
$country = Country::find(1);
foreach ($country->posts as $post) {
    echo $post->title;
}`,
  `// This runs 1 query for posts + 1 query PER post for user
$posts = Post::all();
foreach ($posts as $post) {
    echo $post->user->name; // Extra query each time!
}
// If 100 posts = 101 queries!`,
  `// with() loads the relation in advance
$posts = Post::with('user')->get();
foreach ($posts as $post) {
    echo $post->user->name; // No extra query!
}
// Always just 2 queries regardless of post count!

// Load multiple relations
$posts = Post::with(['user', 'tags'])->get();

// Nested eager loading
$posts = Post::with('user.profile')->get();

// Eager load with conditions
$posts = Post::with(['comments' => function ($query) {
    $query->where('approved', true)->latest();
}])->get();`,
  `// Get posts that HAVE at least one comment
$posts = Post::has('comments')->get();

// Get posts with 5 or more comments
$posts = Post::has('comments', '>=', 5)->get();

// Get posts that have comments containing "great"
$posts = Post::whereHas('comments', function ($query) {
    $query->where('body', 'like', '%great%');
})->get();

// Get posts WITHOUT any comments
$posts = Post::doesntHave('comments')->get();

// Count relations
$posts = Post::withCount('comments')->get();
foreach ($posts as $post) {
    echo $post->comments_count;
}

// Load relation after initial query
$post = Post::find(1);
$post->load('comments'); // Lazy eager loading`,
]
</script>

<style scoped>
.inline-code {
  @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-red-500 dark:text-red-400;
}
.tip-box {
  @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300;
}

/* Database Tables */
.db-table {
  @apply rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700;
}
.db-table-header {
  @apply px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs font-bold tracking-wide uppercase border-b border-gray-200 dark:border-gray-700;
}
.db-table-body {
  @apply w-full text-xs;
}
.db-table-body thead tr {
  @apply bg-gray-50 dark:bg-gray-800/50;
}
.db-table-body th {
  @apply px-3 py-2 text-left text-gray-500 dark:text-gray-400 font-semibold border-b border-gray-200 dark:border-gray-700;
}
.db-table-body td {
  @apply px-3 py-2 text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800;
}
.db-table-body .highlight-row td {
  @apply bg-blue-50/50 dark:bg-blue-900/10;
}
.fk-col {
  @apply text-orange-600 dark:text-orange-400 font-semibold;
}

/* Flow Arrow */
.flow-arrow {
  @apply flex items-center justify-center gap-2 flex-wrap;
}
.flow-arrow span:not(.arrow-line) {
  @apply px-3 py-1.5 bg-gray-100 dark:bg-primary-light rounded-lg;
}
.arrow-line {
  @apply w-8 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 relative;
}
.arrow-line::after {
  content: '';
  @apply absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 6px solid rgb(37, 99, 235);
}
</style>
