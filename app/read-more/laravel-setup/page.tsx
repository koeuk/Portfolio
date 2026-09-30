import { Article } from '@/components/ui/Article'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Summary } from './Summary'

export const metadata = {
  title: 'Laravel Basic Setup Project - Koeuk Dev',
  description: 'Laravel is one of the most popular PHP frameworks for building modern web applications.',
}

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

export default function Page() {
  return (
    <Article title="Laravel Basic Setup Project" date="Dec 28, 2025" tags={['Laravel', 'PHP']}>
      <p>
        Laravel is one of the most popular PHP frameworks for building modern web applications. In this guide, we&apos;ll walk through setting up a Laravel project from scratch, covering installation, configuration, routing, controllers, models, migrations, and building your first CRUD application.
      </p>

      <h2>Prerequisites</h2>
      <ul>
        <li>PHP 8.2 or higher installed</li>
        <li>Composer (PHP dependency manager)</li>
        <li>Node.js & npm (for frontend assets)</li>
        <li>A database (MySQL, PostgreSQL, or SQLite)</li>
      </ul>

      <h2>1. Installation</h2>
      <p>
        First, install the Laravel installer globally via Composer, then create a new project:
      </p>
      <CodeBlock title="Terminal" code={codes[0]} />
      <p>
        Your application will be available at <code>http://localhost:8000</code>.
      </p>

      <h2>2. Environment Configuration</h2>
      <p>
        Laravel uses a <code>.env</code> file for environment-specific configuration. Update your database settings:
      </p>
      <CodeBlock title=".env" code={codes[1]} />
      <blockquote>
        <strong>Tip:</strong> For quick local development, you can use SQLite. Set <code>DB_CONNECTION=sqlite</code> and remove the other DB_ lines. Laravel will create the database file automatically.
      </blockquote>

      <h2>3. Project Structure</h2>
      <p>
        Here are the key directories you&apos;ll work with:
      </p>
      <CodeBlock title="Project Structure" code={codes[2]} />

      <h2>4. Routing</h2>
      <p>
        Define your application routes in <code>routes/web.php</code>:
      </p>
      <CodeBlock title="routes/web.php" code={codes[3]} />
      <p>
        Run <code>php artisan route:list</code> to see all registered routes.
      </p>

      <h2>5. Database Migration</h2>
      <p>
        Create a migration for a posts table:
      </p>
      <CodeBlock title="Terminal" code={codes[4]} />
      <p>
        Edit the generated migration file:
      </p>
      <CodeBlock title="database/migrations/xxxx_create_posts_table.php" code={codes[5]} />
      <CodeBlock title="Terminal" code={codes[6]} />

      <h2>6. Eloquent Model</h2>
      <p>
        Create a model for the posts table:
      </p>
      <CodeBlock title="Terminal" code={codes[7]} />
      <CodeBlock title="app/Models/Post.php" code={codes[8]} />

      <h2>7. Controller (CRUD)</h2>
      <p>
        Generate a resource controller:
      </p>
      <CodeBlock title="Terminal" code={codes[9]} />
      <CodeBlock title="app/Http/Controllers/PostController.php" code={codes[10]} />

      <h2>8. Useful Artisan Commands</h2>
      <CodeBlock title="Terminal" code={codes[11]} />

      <Summary>
        <p>
          You now have a working Laravel project with:
        </p>
        <ul>
          <li>Project installation and environment setup</li>
          <li>Database configuration and migrations</li>
          <li>Eloquent models with fillable attributes</li>
          <li>Resource controller with full CRUD operations</li>
          <li>RESTful routing with validation</li>
        </ul>
      </Summary>
    </Article>
  )
}
