import { Fragment, type ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Article } from '@/components/ui/Article'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { ArticleSummary } from '@/components/ui/ArticleSummary'

export const metadata = {
  title: 'Laravel Eloquent Relationships - Koeuk Dev',
  description:
    'Eloquent Relationships let you define connections between tables directly in your models, so you can access related data without writing complex SQL joins.',
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
            <td><code>hasOne</code></td>
            <td>User has one Profile</td>
            <td>profiles table</td>
          </tr>
          <tr>
            <td><code>belongsTo</code></td>
            <td>Profile belongs to User</td>
            <td>profiles table</td>
          </tr>
          <tr>
            <td><code>hasMany</code></td>
            <td>User has many Posts</td>
            <td>posts table</td>
          </tr>
          <tr>
            <td><code>belongsToMany</code></td>
            <td>Post has many Tags</td>
            <td>pivot table</td>
          </tr>
          <tr>
            <td><code>hasOneThrough</code></td>
            <td>Country has one Capital through City</td>
            <td>intermediate table</td>
          </tr>
        </tbody>
      </table>

      <h2>1. One to One (hasOne / belongsTo)</h2>
      <p>
        A User has one Profile. The <code>profiles</code> table stores a <code>user_id</code> foreign key.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <DbTable
          name="users"
          cols={['id', 'name', 'email']}
          rows={[['1', 'John', 'john@mail.com'], ['2', 'Jane', 'jane@mail.com']]}
          highlight={[0]}
        />
        <DbTable
          name="profiles"
          cols={['id', 'user_id', 'bio']}
          fk={['user_id']}
          rows={[['1', '1', 'Developer'], ['2', '2', 'Designer']]}
          highlight={[0]}
        />
      </div>
      <Flow
        steps={[
          <>User <strong>id: 1</strong></>,
          <>Profile <strong>user_id: 1</strong></>,
        ]}
      />

      <CodeBlock title="Migration: profiles table" code={codes[0]} />
      <CodeBlock title="app/Models/User.php" code={codes[1]} />
      <CodeBlock title="app/Models/Profile.php" code={codes[2]} />
      <CodeBlock title="Usage" code={codes[3]} />

      <h2>2. One to Many (hasMany / belongsTo)</h2>
      <p>
        A User has many Posts. Each post stores a <code>user_id</code> to know who wrote it.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <DbTable
          name="users"
          cols={['id', 'name']}
          rows={[['1', 'John'], ['2', 'Jane']]}
          highlight={[0]}
        />
        <DbTable
          name="posts"
          cols={['id', 'user_id', 'title']}
          fk={['user_id']}
          rows={[['1', '1', 'Laravel Basics'], ['2', '1', 'Eloquent ORM'], ['3', '2', 'CSS Grid']]}
          highlight={[0, 1]}
        />
      </div>
      <Flow
        steps={[
          <>User <strong>id: 1</strong></>,
          <>Posts <strong>user_id: 1</strong> (2 rows)</>,
        ]}
      />

      <CodeBlock title="Migration: posts table" code={codes[4]} />
      <CodeBlock title="app/Models/User.php" code={codes[5]} />
      <CodeBlock title="app/Models/Post.php" code={codes[6]} />
      <CodeBlock title="Usage" code={codes[7]} />

      <h2>3. Many to Many (belongsToMany)</h2>
      <p>
        A Post can have many Tags, and a Tag can belong to many Posts. This requires a <strong>pivot table</strong> (a third table that connects them).
      </p>

      <div className="grid gap-5 md:grid-cols-3">
        <DbTable
          name="posts"
          cols={['id', 'title']}
          rows={[['1', 'Laravel Basics'], ['2', 'Vue Guide']]}
          highlight={[0]}
        />
        <DbTable
          name="post_tag (pivot)"
          cols={['post_id', 'tag_id']}
          fk={['post_id', 'tag_id']}
          rows={[['1', '1'], ['1', '2'], ['2', '1']]}
          highlight={[0, 1]}
        />
        <DbTable
          name="tags"
          cols={['id', 'name']}
          rows={[['1', 'PHP'], ['2', 'Laravel']]}
          highlight={[0, 1]}
        />
      </div>
      <Flow
        steps={[
          <>Post <strong>id: 1</strong></>,
          <>pivot <strong>post_id: 1</strong></>,
          <>Tags <strong>id: 1, 2</strong></>,
        ]}
      />

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

      <div className="grid gap-5 md:grid-cols-3">
        <DbTable
          name="countries"
          cols={['id', 'name']}
          rows={[['1', 'Cambodia'], ['2', 'Japan']]}
          highlight={[0]}
        />
        <DbTable
          name="users (intermediate)"
          cols={['id', 'country_id', 'name']}
          fk={['country_id']}
          rows={[['1', '1', 'John'], ['2', '1', 'Jane'], ['3', '2', 'Yuki']]}
          highlight={[0, 1]}
        />
        <DbTable
          name="posts"
          cols={['id', 'user_id', 'title']}
          fk={['user_id']}
          rows={[['1', '1', 'Laravel'], ['2', '2', 'Vue.js'], ['3', '3', 'React']]}
          highlight={[0, 1]}
        />
      </div>
      <Flow
        steps={[
          <>Country <strong>id: 1</strong></>,
          <>Users <strong>country_id: 1</strong></>,
          <>Posts <strong>user_id: 1, 2</strong></>,
        ]}
      />

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

      <ArticleSummary>
        <ul>
          <li><strong>hasOne / belongsTo</strong> — one-to-one (User → Profile)</li>
          <li><strong>hasMany / belongsTo</strong> — one-to-many (User → Posts)</li>
          <li><strong>belongsToMany</strong> — many-to-many with pivot table (Posts ↔ Tags)</li>
          <li><strong>hasManyThrough</strong> — distant relations through intermediate model</li>
          <li><strong>Eager Loading</strong> — always use <code>with()</code> to avoid N+1 queries</li>
          <li><strong>has / whereHas</strong> — query based on relationship existence</li>
        </ul>
      </ArticleSummary>
    </Article>
  )
}

/** A small sample table for the diagrams: `fk` columns are foreign keys, `highlight` rows are the related ones. */
function DbTable({
  name,
  cols,
  fk = [],
  rows,
  highlight = [],
}: {
  name: string
  cols: string[]
  fk?: string[]
  rows: string[][]
  highlight?: number[]
}) {
  const cell = (col: string, value: string) => (fk.includes(col) ? <code>{value}</code> : value)

  return (
    <figure className="min-w-0">
      <figcaption className="mb-2 text-sm font-heading">{name}</figcaption>
      <table>
        <thead>
          <tr>
            {cols.map(col => (
              <th key={col}>{cell(col, col)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={highlight.includes(i) ? 'bg-bg font-heading' : undefined}>
              {row.map((value, j) => (
                <td key={j}>{cell(cols[j], value)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  )
}

/** "A → B → C" row showing how the highlighted rows connect. */
function Flow({ steps }: { steps: ReactNode[] }) {
  return (
    <div className="flex flex-col items-center gap-2 text-sm sm:flex-row sm:flex-wrap sm:justify-center">
      {steps.map((step, i) => (
        <Fragment key={i}>
          {i > 0 && <ArrowRight className="h-4 w-4 shrink-0 rotate-90 sm:rotate-0" aria-hidden />}
          <span className="neo bg-bw px-3 py-1.5">{step}</span>
        </Fragment>
      ))}
    </div>
  )
}
