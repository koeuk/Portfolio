import { Article } from '@/components/ui/Article'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Summary } from './Summary'

export const metadata = {
  title: 'Laravel Eloquent Relationships - Koeuk Dev',
  description: 'In real applications, database tables are related to each other.',
}

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

export default function Page() {
  return (
    <Article title="Laravel Eloquent Relationships" date="Dec 10, 2025" tags={['Laravel', 'PHP']}>
      <p>
        In real applications, database tables are related to each other. A user has many posts, a post belongs to a user, a post has many tags. Eloquent Relationships let you define these connections directly in your models, so you can access related data easily without writing complex SQL joins.
      </p>

      <h2>Relationship Types Overview</h2>
      <table>
        <thead>
          <tr>
            <th>Relationship</th>
            <th>Example</th>
            <th>Foreign Key On</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hasOne</td>
            <td>User has one Profile</td>
            <td>profiles table</td>
          </tr>
          <tr>
            <td>belongsTo</td>
            <td>Profile belongs to User</td>
            <td>profiles table</td>
          </tr>
          <tr>
            <td>hasMany</td>
            <td>User has many Posts</td>
            <td>posts table</td>
          </tr>
          <tr>
            <td>belongsToMany</td>
            <td>Post has many Tags</td>
            <td>pivot table</td>
          </tr>
          <tr>
            <td>hasOneThrough</td>
            <td>Country has one Capital through City</td>
            <td>intermediate table</td>
          </tr>
        </tbody>
      </table>

      <h2>1. One to One (hasOne / belongsTo)</h2>
      <p>
        A User has one Profile. The <code>profiles</code> table stores a <code>user_id</code> foreign key.
      </p>

      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="db-table">
          <div class="db-table-header">users</div>
          <table>
            <thead><tr><th>id</th><th>name</th><th>email</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>John</td><td>john@mail.com</td></tr>
              <tr><td>2</td><td>Jane</td><td>jane@mail.com</td></tr>
            </tbody>
          </table>
        </div>
        <div class="db-table">
          <div class="db-table-header">profiles</div>
          <table>
            <thead><tr><th>id</th><th>user_id</th><th>bio</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>1</td><td>Developer</td></tr>
              <tr><td>2</td><td>2</td><td>Designer</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="flow-arrow mb-6">
        <span>User <strong>id: 1</strong></span>
        <span></span>
        <span>Profile <strong>user_id: 1</strong></span>
      </div>

      <CodeBlock title="Migration: profiles table" code={codes[0]} />
      <CodeBlock title="app/Models/User.php" code={codes[1]} />
      <CodeBlock title="app/Models/Profile.php" code={codes[2]} />
      <CodeBlock title="Usage" code={codes[3]} />

      <h2>2. One to Many (hasMany / belongsTo)</h2>
      <p>
        A User has many Posts. Each post stores a <code>user_id</code> to know who wrote it.
      </p>

      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="db-table">
          <div class="db-table-header">users</div>
          <table>
            <thead><tr><th>id</th><th>name</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>John</td></tr>
              <tr><td>2</td><td>Jane</td></tr>
            </tbody>
          </table>
        </div>
        <div class="db-table">
          <div class="db-table-header">posts</div>
          <table>
            <thead><tr><th>id</th><th>user_id</th><th>title</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>1</td><td>Laravel Basics</td></tr>
              <tr><td>2</td><td>1</td><td>Eloquent ORM</td></tr>
              <tr><td>3</td><td>2</td><td>CSS Grid</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="flow-arrow mb-6">
        <span>User <strong>id: 1</strong></span>
        <span></span>
        <span>Posts <strong>user_id: 1</strong> (2 rows)</span>
      </div>

      <CodeBlock title="Migration: posts table" code={codes[4]} />
      <CodeBlock title="app/Models/User.php" code={codes[5]} />
      <CodeBlock title="app/Models/Post.php" code={codes[6]} />
      <CodeBlock title="Usage" code={codes[7]} />

      <h2>3. Many to Many (belongsToMany)</h2>
      <p>
        A Post can have many Tags, and a Tag can belong to many Posts. This requires a <strong>pivot table</strong> (a third table that connects them).
      </p>

      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="db-table">
          <div class="db-table-header">posts</div>
          <table>
            <thead><tr><th>id</th><th>title</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Laravel Basics</td></tr>
              <tr><td>2</td><td>Vue Guide</td></tr>
            </tbody>
          </table>
        </div>
        <div class="db-table">
          <div class="db-table-header bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400">post_tag (pivot)</div>
          <table>
            <thead><tr><th>post_id</th><th>tag_id</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>1</td></tr>
              <tr><td>1</td><td>2</td></tr>
              <tr><td>2</td><td>1</td></tr>
            </tbody>
          </table>
        </div>
        <div class="db-table">
          <div class="db-table-header">tags</div>
          <table>
            <thead><tr><th>id</th><th>name</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>PHP</td></tr>
              <tr><td>2</td><td>Laravel</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="flow-arrow mb-6">
        <span>Post <strong>id: 1</strong></span>
        <span></span>
        <span>pivot <strong>post_id: 1</strong></span>
        <span></span>
        <span>Tags <strong>id: 1, 2</strong></span>
      </div>

      <CodeBlock title="Migration: tags table + pivot table" code={codes[8]} />
      <blockquote>
        <strong>Pivot table naming:</strong> Use both table names in singular form, in alphabetical order, separated by underscore. So <code>post</code> + <code>tag</code> = <code>post_tag</code>.
      </blockquote>
      <CodeBlock title="app/Models/Post.php" code={codes[9]} />
      <CodeBlock title="app/Models/Tag.php" code={codes[10]} />
      <CodeBlock title="Usage" code={codes[11]} />

      <h2>4. Has Many Through</h2>
      <p>
        Access distant relations through an intermediate model. Example: A Country has many Posts <strong>through</strong> Users.
      </p>

      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="db-table">
          <div class="db-table-header">countries</div>
          <table>
            <thead><tr><th>id</th><th>name</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Cambodia</td></tr>
              <tr><td>2</td><td>Japan</td></tr>
            </tbody>
          </table>
        </div>
        <div class="db-table">
          <div class="db-table-header">users (intermediate)</div>
          <table>
            <thead><tr><th>id</th><th>country_id</th><th>name</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>1</td><td>John</td></tr>
              <tr><td>2</td><td>1</td><td>Jane</td></tr>
              <tr><td>3</td><td>2</td><td>Yuki</td></tr>
            </tbody>
          </table>
        </div>
        <div class="db-table">
          <div class="db-table-header">posts</div>
          <table>
            <thead><tr><th>id</th><th>user_id</th><th>title</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>1</td><td>Laravel</td></tr>
              <tr><td>2</td><td>2</td><td>Vue.js</td></tr>
              <tr><td>3</td><td>3</td><td>React</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="flow-arrow mb-6">
        <span>Country <strong>id: 1</strong></span>
        <span></span>
        <span>Users <strong>country_id: 1</strong></span>
        <span></span>
        <span>Posts <strong>user_id: 1, 2</strong></span>
      </div>

      <CodeBlock title="Tables" code={codes[12]} />
      <CodeBlock title="app/Models/Country.php" code={codes[13]} />
      <CodeBlock title="Usage" code={codes[14]} />

      <h2>5. Eager Loading (N+1 Problem)</h2>
      <p>
        Without eager loading, accessing relations in a loop causes many extra database queries (the N+1 problem). Eager loading fixes this.
      </p>
      <CodeBlock title="Bad: N+1 Problem (1 + N queries)" code={codes[15]} />
      <CodeBlock title="Good: Eager Loading (2 queries total)" code={codes[16]} />
      <blockquote>
        <strong>Rule of thumb:</strong> Always use <code>with()</code> when you know you&apos;ll access a relation inside a loop. This is one of the most important performance optimizations in Laravel.
      </blockquote>

      <h2>6. Querying Relationships</h2>
      <CodeBlock title="Useful Relationship Queries" code={codes[17]} />

      <Summary>
        <ul>
          <li><strong>hasOne / belongsTo</strong> — one-to-one (User → Profile)</li>
          <li><strong>hasMany / belongsTo</strong> — one-to-many (User → Posts)</li>
          <li><strong>belongsToMany</strong> — many-to-many with pivot table (Posts ↔ Tags)</li>
          <li><strong>hasManyThrough</strong> — distant relations through intermediate model</li>
          <li><strong>Eager Loading</strong> — always use <code>with()</code> to avoid N+1 queries</li>
          <li><strong>has / whereHas</strong> — query based on relationship existence</li>
        </ul>
      </Summary>
    </Article>
  )
}
