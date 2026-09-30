import { Article } from '@/components/ui/Article'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Summary } from './Summary'

export const metadata = {
  title: 'Laravel Eloquent ORM - Koeuk Dev',
  description: 'Eloquent is Laravel\'s built-in ORM (Object-Relational Mapping).',
}

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

export default function Page() {
  return (
    <Article title="Laravel Eloquent ORM" date="Dec 15, 2025" tags={['Laravel', 'PHP']}>
      <p>
        Eloquent is Laravel&apos;s built-in ORM (Object-Relational Mapping). It lets you interact with your database using PHP classes and objects instead of writing raw SQL. Each database table has a corresponding &quot;Model&quot; that you use to query, insert, update, and delete data.
      </p>

      <h2>What is Eloquent?</h2>
      <p>
        Think of Eloquent as a translator between your PHP code and the database. Instead of writing:
      </p>
      <CodeBlock title="Raw SQL (without Eloquent)" code={codes[0]} />
      <p>
        You write this instead:
      </p>
      <CodeBlock title="Eloquent (clean PHP)" code={codes[1]} />
      <p>
        Much cleaner, safer (prevents SQL injection), and easier to maintain.
      </p>

      <h2>1. Creating a Model</h2>
      <p>
        Every Eloquent model represents one database table. By convention, a <code>Post</code> model maps to a <code>posts</code> table.
      </p>
      <CodeBlock title="Terminal" code={codes[2]} />
      <CodeBlock title="app/Models/Post.php" code={codes[3]} />
      <blockquote>
        <strong>$fillable vs $guarded:</strong>
        <code>$fillable</code> = whitelist (only these fields can be mass assigned).
        <code>$guarded</code> = blacklist (all fields except these can be mass assigned). Use <code>$guarded = []</code> to allow all fields.
      </blockquote>

      <h2>2. CRUD Operations</h2>

      <h3>Create (Insert Data)</h3>
      <CodeBlock title="Creating Records" code={codes[4]} />

      <h3>Read (Fetch Data)</h3>
      <CodeBlock title="Reading Records" code={codes[5]} />

      <h3>Update (Modify Data)</h3>
      <CodeBlock title="Updating Records" code={codes[6]} />

      <h3>Delete (Remove Data)</h3>
      <CodeBlock title="Deleting Records" code={codes[7]} />

      <h2>3. Query Scopes</h2>
      <p>
        Scopes let you define reusable query conditions inside your model. This keeps your controllers clean.
      </p>
      <CodeBlock title="app/Models/Post.php" code={codes[8]} />
      <CodeBlock title="Usage in Controller" code={codes[9]} />

      <h2>4. Accessors & Mutators</h2>
      <p>
        Accessors format data when you <strong>read</strong> it. Mutators format data when you <strong>save</strong> it.
      </p>
      <CodeBlock title="app/Models/User.php" code={codes[10]} />
      <CodeBlock title="Usage" code={codes[11]} />

      <h2>5. Soft Deletes</h2>
      <p>
        Instead of permanently removing records, soft deletes mark them as &quot;deleted&quot; by setting a <code>deleted_at</code> timestamp. The data stays in the database.
      </p>
      <CodeBlock title="Migration" code={codes[12]} />
      <CodeBlock title="app/Models/Post.php" code={codes[13]} />
      <CodeBlock title="Usage" code={codes[14]} />

      <h2>6. Common Query Patterns</h2>
      <CodeBlock title="Useful Eloquent Queries" code={codes[15]} />

      <Summary>
        <ul>
          <li><strong>Models</strong> — PHP classes that represent database tables</li>
          <li><strong>CRUD</strong> — create, read, update, delete with simple methods</li>
          <li><strong>Scopes</strong> — reusable query conditions inside models</li>
          <li><strong>Accessors & Mutators</strong> — auto-format data on read/write</li>
          <li><strong>Soft Deletes</strong> — safe deletion without losing data</li>
          <li><strong>Query Patterns</strong> — pagination, search, aggregates, chunking</li>
        </ul>
      </Summary>
    </Article>
  )
}
