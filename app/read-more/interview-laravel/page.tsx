import { Article } from '@/components/ui/Article'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Summary } from './Summary'

export const metadata = {
  title: 'Laravel Interview Questions - Koeuk Dev',
  description: 'Preparing for a Laravel interview?',
}

const codes = [
  `# Install Laravel globally
composer global require laravel/installer

# Create a new project
laravel new my-app

# Or using Composer directly
composer create-project laravel/laravel my-app

# Start the dev server
cd my-app
php artisan serve`,
  `// Model — app/Models/Post.php
class Post extends Model
{
    protected $fillable = ['title', 'body'];
}

// Controller — app/Http/Controllers/PostController.php
class PostController extends Controller
{
    public function show($id)
    {
        $post = Post::findOrFail($id);
        return view('posts.show', compact('post'));
    }
}

// View — resources/views/posts/show.blade.php
// Blade template renders the data to HTML`,
  `use Illuminate\\Support\\ServiceProvider;
use App\\Services\\PaymentGateway;
use App\\Services\\StripePaymentGateway;

class AppServiceProvider extends ServiceProvider
{
    // Bind services into the container
    public function register()
    {
        $this->app->bind(PaymentGateway::class, function ($app) {
            return new StripePaymentGateway(config('services.stripe.key'));
        });
    }

    // Called after all providers are registered
    public function boot()
    {
        // Register observers, event listeners, etc.
    }
}`,
  `php artisan make:middleware CheckAge`,
  `namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;

class CheckAge
{
    public function handle(Request $request, Closure $next)
    {
        if ($request->age <= 18) {
            return redirect('home');
        }

        return $next($request);
    }
}`,
  `// In routes/web.php
Route::get('/dashboard', function () {
    // Only accessible if age > 18
})->middleware('check.age');

// Register alias in bootstrap/app.php (Laravel 11+)
->withMiddleware(function (Middleware $middleware) {
    $middleware->alias([
        'check.age' => \\App\\Http\\Middleware\\CheckAge::class,
    ]);
})`,
  `// Route Group with prefix and middleware
Route::prefix('admin')->middleware('auth')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'index']);
    Route::get('/users', [AdminController::class, 'users']);
    Route::get('/settings', [AdminController::class, 'settings']);
});

// Named Route Group
Route::name('admin.')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'index'])
        ->name('dashboard'); // admin.dashboard
});`,
  `// Implicit Binding — Laravel auto-resolves the model
Route::get('/posts/{post}', function (Post $post) {
    return $post; // Automatically finds Post by ID
});

// Explicit Binding — in RouteServiceProvider boot()
public function boot()
{
    Route::model('user', User::class);
}

// Custom key for binding
Route::get('/posts/{post:slug}', function (Post $post) {
    return $post; // Finds Post by slug instead of ID
});`,
  `use App\\Models\\User;

// Find by primary key
$user = User::find(1);

// Get all records
$users = User::all();

// Create a new record
$user = User::create([
    'name' => 'John',
    'email' => 'john@example.com',
    'password' => bcrypt('secret'),
]);

// Update
$user->update(['name' => 'Jane']);

// Delete
$user->delete();

// Query with conditions
$activeUsers = User::where('active', true)
    ->orderBy('name')
    ->get();`,
  `use Illuminate\\Support\\Facades\\DB;

// Select
$users = DB::table('users')
    ->where('active', true)
    ->orderBy('name')
    ->get();

// Insert
DB::table('users')->insert([
    'name' => 'John',
    'email' => 'john@example.com',
]);

// Update
DB::table('users')
    ->where('id', 1)
    ->update(['name' => 'Jane']);

// Delete
DB::table('users')->where('id', 1)->delete();

// Raw query
$users = DB::select('SELECT * FROM users WHERE active = ?', [true]);`,
  `// One to Many — User has many Posts
class User extends Model
{
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}

// Inverse — Post belongs to User
class Post extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

// Many to Many — User has many Roles
class User extends Model
{
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}

// Usage
$user = User::find(1);
$posts = $user->posts;          // Collection of posts
$author = $post->user;          // The post's author
$roles = $user->roles;          // Collection of roles`,
  `// Create migration
// php artisan make:migration create_posts_table

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->text('body');
            $table->boolean('published')->default(false);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('posts');
    }
};

// Run: php artisan migrate
// Rollback: php artisan migrate:rollback`,
  `// Create seeder
// php artisan make:seeder PostSeeder

use App\\Models\\Post;

class PostSeeder extends Seeder
{
    public function run()
    {
        // Using factory
        Post::factory()->count(50)->create();

        // Or manual insertion
        Post::create([
            'user_id' => 1,
            'title' => 'First Post',
            'body' => 'Hello World!',
            'published' => true,
        ]);
    }
}

// Run: php artisan db:seed
// Or: php artisan db:seed --class=PostSeeder`,
  `// hasOne — defined on the PARENT model
// The Phone table has user_id column (foreign key)
class User extends Model
{
    public function phone()
    {
        return $this->hasOne(Phone::class);
        // SQL: SELECT * FROM phones WHERE user_id = ?
    }
}

// belongsTo — defined on the CHILD model
// The Phone table holds the user_id foreign key
class Phone extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
        // SQL: SELECT * FROM users WHERE id = ?
    }
}

// Usage
$user->phone;    // Get user's phone (hasOne)
$phone->user;    // Get phone's owner (belongsTo)`,
  `use Illuminate\\Support\\Collection;

$collection = collect([1, 2, 3, 4, 5]);

// Filter — keep items that pass the test
$even = $collection->filter(fn ($value) => $value % 2 === 0);
// [2, 4]

// Map — transform each item
$doubled = $collection->map(fn ($value) => $value * 2);
// [2, 4, 6, 8, 10]

// Reduce — reduce to a single value
$sum = $collection->reduce(fn ($carry, $value) => $carry + $value, 0);
// 15

// Chaining methods
$result = collect([
    ['name' => 'Alice', 'score' => 90],
    ['name' => 'Bob', 'score' => 75],
    ['name' => 'Charlie', 'score' => 85],
])
    ->where('score', '>=', 80)
    ->pluck('name')
    ->toArray();
// ['Alice', 'Charlie']

// Other useful methods
$collection->first();       // 1
$collection->last();        // 5
$collection->contains(3);   // true
$collection->count();       // 5
$collection->sortDesc();    // [5, 4, 3, 2, 1]`,
  `use App\\Services\\PaymentGateway;

// Binding an interface to an implementation
$this->app->bind(
    PaymentGateway::class,
    StripePaymentGateway::class
);

// Singleton — resolved once and reused
$this->app->singleton(PaymentGateway::class, function ($app) {
    return new StripePaymentGateway(config('services.stripe.key'));
});

// Resolving from the container
$payment = app(PaymentGateway::class);
$payment = resolve(PaymentGateway::class);`,
  `// Constructor Injection
class OrderController extends Controller
{
    public function __construct(
        private PaymentGateway $payment
    ) {}

    public function store(Request $request)
    {
        $this->payment->charge($request->amount);
    }
}

// Method Injection — in controller methods
class OrderController extends Controller
{
    public function store(Request $request, PaymentGateway $payment)
    {
        $payment->charge($request->amount);
    }
}

// Laravel automatically resolves both from the container`,
  `use Illuminate\\Support\\Facades\\Cache;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\Support\\Facades\\Log;

// Using Facades (static-like syntax)
Cache::put('key', 'value', 3600);
$value = Cache::get('key');

$users = DB::table('users')->get();

Log::info('User logged in', ['id' => $user->id]);

// Behind the scenes, Cache facade resolves to:
// app('cache')->put('key', 'value', 3600);

// You can also use helper functions instead
cache(['key' => 'value'], 3600);
$value = cache('key');`,
  `php artisan make:event OrderPlaced
php artisan make:listener SendOrderConfirmation --event=OrderPlaced`,
  `// Event — app/Events/OrderPlaced.php
class OrderPlaced
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public Order $order
    ) {}
}

// Listener — app/Listeners/SendOrderConfirmation.php
class SendOrderConfirmation
{
    public function handle(OrderPlaced $event)
    {
        Mail::to($event->order->user->email)
            ->send(new OrderConfirmationMail($event->order));
    }
}

// Dispatching the event
OrderPlaced::dispatch($order);

// Or using the event helper
event(new OrderPlaced($order));`,
  `// Create a job
// php artisan make:job ProcessPodcast

class ProcessPodcast implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public Podcast $podcast
    ) {}

    public function handle()
    {
        // Process the podcast (runs in background)
        $this->podcast->process();
    }
}

// Dispatch the job
ProcessPodcast::dispatch($podcast);

// Dispatch with delay
ProcessPodcast::dispatch($podcast)->delay(now()->addMinutes(10));

// Run the queue worker
// php artisan queue:work`,
  `<!-- In Blade templates -->
<form method="POST" action="/profile">
    @csrf
    <!-- This generates a hidden input with the token -->
    <!-- <input type="hidden" name="_token" value="..."> -->

    <input type="text" name="name">
    <button type="submit">Update</button>
</form>

<!-- For AJAX requests, include the token in headers -->
<meta name="csrf-token" content="{{ csrf_token() }}">

<script>
// Axios automatically reads the XSRF-TOKEN cookie
// For fetch:
fetch('/profile', {
    method: 'POST',
    headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
            .getAttribute('content')
    }
});
</script>`,
  `// Define rate limiters in AppServiceProvider or RouteServiceProvider
use Illuminate\\Cache\\RateLimiting\\Limit;
use Illuminate\\Support\\Facades\\RateLimiter;

// In boot() method
RateLimiter::for('api', function (Request $request) {
    return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
});

// Custom rate limiter
RateLimiter::for('uploads', function (Request $request) {
    return $request->user()->isPremium()
        ? Limit::none()
        : Limit::perMinute(5)->response(function () {
            return response('Too many uploads...', 429);
        });
});

// Apply to routes
Route::middleware('throttle:uploads')->group(function () {
    Route::post('/upload', [UploadController::class, 'store']);
});`,
  `// Create Form Request
// php artisan make:request StorePostRequest

namespace App\\Http\\Requests;

use Illuminate\\Foundation\\Http\\FormRequest;

class StorePostRequest extends FormRequest
{
    // Determine if the user is authorized
    public function authorize(): bool
    {
        return true; // Or add authorization logic
    }

    // Validation rules
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'body'  => 'required|string|min:10',
            'tags'  => 'nullable|array',
            'tags.*' => 'string|max:50',
        ];
    }

    // Custom error messages (optional)
    public function messages(): array
    {
        return [
            'title.required' => 'A post title is required.',
            'body.min' => 'The post body must be at least 10 characters.',
        ];
    }
}

// Usage in controller
class PostController extends Controller
{
    public function store(StorePostRequest $request)
    {
        // Validation happens automatically
        $post = Post::create($request->validated());
        return redirect()->route('posts.show', $post);
    }
}`,
  `// LAZY LOADING (N+1 Problem)
// This runs 1 query for books + N queries for authors
$books = Book::all();
foreach ($books as $book) {
    echo $book->author->name;
    // Each iteration runs: SELECT * FROM authors WHERE id = ?
}
// Total: 1 + N queries (bad!)

// EAGER LOADING (with)
// This runs only 2 queries total
$books = Book::with('author')->get();
// Query 1: SELECT * FROM books
// Query 2: SELECT * FROM authors WHERE id IN (1, 2, 3, ...)

foreach ($books as $book) {
    echo $book->author->name; // No additional query!
}
// Total: 2 queries (good!)

// Nested eager loading
$books = Book::with(['author', 'comments.user'])->get();

// Constrained eager loading
$books = Book::with(['comments' => function ($query) {
    $query->where('approved', true)->orderBy('created_at');
}])->get();

// Prevent lazy loading in development
// In AppServiceProvider boot():
Model::preventLazyLoading(!app()->isProduction());`,
  `// --- SANCTUM (Lightweight, simple tokens) ---
// Install: php artisan install:api

// Issue a token
$token = $user->createToken('app-token')->plainTextToken;

// Protect routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', fn (Request $request) => $request->user());
});

// Revoke tokens
$user->currentAccessToken()->delete();  // Current token
$user->tokens()->delete();              // All tokens`,
  `// --- PASSPORT (Full OAuth2 Server) ---
// Install
// composer require laravel/passport
// php artisan passport:install

// In User model
use Laravel\\Passport\\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
}

// Issue token with scopes
$token = $user->createToken('app-token', ['read-posts'])->accessToken;

// Protect routes with scopes
Route::middleware(['auth:api', 'scope:read-posts'])->group(function () {
    Route::get('/posts', [PostController::class, 'index']);
});

// Passport supports:
// - Authorization Code Grant (third-party apps)
// - Client Credentials Grant (machine-to-machine)
// - Personal Access Tokens
// - Refresh Tokens
// - Token Scopes`,
]

export default function Page() {
  return (
    <Article title="Laravel Interview Questions" date="Mar 6, 2026" tags={['Laravel', 'Interview']}>
      <p>
        Preparing for a Laravel interview? This guide covers 20+ commonly asked questions with clear explanations and code examples. Whether you are a junior or senior developer, these questions will help you solidify your understanding of the framework.
      </p>

      <h2>1. What is Laravel? Why use it?</h2>
      <p>
        Laravel is a free, open-source PHP web framework created by Taylor Otwell. It follows the MVC (Model-View-Controller) architectural pattern and provides an elegant syntax that aims to make development enjoyable and expressive. Key reasons to use Laravel include:
      </p>
      <ul>
        <li><strong>Eloquent ORM</strong> for intuitive database interactions</li>
        <li><strong>Blade templating engine</strong> for clean, reusable views</li>
        <li><strong>Built-in authentication and authorization</strong></li>
        <li><strong>Artisan CLI</strong> for code generation and task automation</li>
        <li><strong>Rich ecosystem</strong> (Forge, Vapor, Nova, Sanctum, etc.)</li>
      </ul>
      <CodeBlock title="Creating a new Laravel project" code={codes[0]} />

      <h2>2. What is the MVC pattern in Laravel?</h2>
      <p>
        MVC stands for <strong>Model-View-Controller</strong>. It separates the application into three interconnected components:
      </p>
      <ul>
        <li><strong>Model</strong> — handles data logic and database interaction (Eloquent models)</li>
        <li><strong>View</strong> — presents data to the user (Blade templates)</li>
        <li><strong>Controller</strong> — handles user requests and acts as a bridge between Model and View</li>
      </ul>
      <CodeBlock title="MVC Example" code={codes[1]} />

      <h2>3. What are Service Providers?</h2>
      <p>
        Service Providers are the central place where all Laravel application bootstrapping happens. They are responsible for binding services into the service container, registering event listeners, middleware, routes, and more. Every Laravel application has an <code>AppServiceProvider</code> by default. Service providers have two key methods: <code>register()</code> for binding things into the container, and <code>boot()</code> for actions after all providers are registered.
      </p>
      <CodeBlock title="app/Providers/AppServiceProvider.php" code={codes[2]} />

      <h2>4. What is Middleware? How to create one?</h2>
      <p>
        Middleware provides a mechanism for filtering HTTP requests entering your application. For example, Laravel includes middleware that verifies if the user is authenticated. If not, the middleware redirects the user to the login screen. You can create custom middleware using Artisan.
      </p>
      <CodeBlock title="Terminal" code={codes[3]} />
      <CodeBlock title="app/Http/Middleware/CheckAge.php" code={codes[4]} />
      <CodeBlock title="Applying middleware to a route" code={codes[5]} />

      <h2>5. What are Route Groups and Route Model Binding?</h2>
      <p>
        <strong>Route Groups</strong> allow you to share route attributes (middleware, prefixes, namespaces) across multiple routes without repeating them. <strong>Route Model Binding</strong> automatically injects model instances into your routes based on the URI segment.
      </p>
      <CodeBlock title="Route Groups" code={codes[6]} />
      <CodeBlock title="Route Model Binding" code={codes[7]} />

      <h2>6. What is Eloquent ORM? How does it differ from Query Builder?</h2>
      <p>
        <strong>Eloquent ORM</strong> is Laravel&apos;s ActiveRecord implementation. Each database table has a corresponding Model that interacts with it. <strong>Query Builder</strong> provides a fluent interface for building SQL queries directly. Eloquent is more expressive and supports relationships, while Query Builder is lighter and can be faster for complex queries.
      </p>
      <CodeBlock title="Eloquent ORM" code={codes[8]} />
      <CodeBlock title="Query Builder" code={codes[9]} />

      <h2>7. What are Eloquent Relationships?</h2>
      <p>
        Eloquent relationships define how models are connected. Laravel supports several relationship types: <code>hasOne</code>, <code>hasMany</code>, <code>belongsTo</code>, <code>belongsToMany</code>, <code>hasManyThrough</code>, and polymorphic relations.
      </p>
      <CodeBlock title="Defining Relationships" code={codes[10]} />

      <h2>8. What are Migrations and Seeders?</h2>
      <p>
        <strong>Migrations</strong> are version control for your database, allowing you to define and share the application&apos;s database schema. <strong>Seeders</strong> populate your database with test or default data. Together they ensure a consistent development environment across teams.
      </p>
      <CodeBlock title="Migration Example" code={codes[11]} />
      <CodeBlock title="Seeder Example" code={codes[12]} />

      <h2>9. What is the difference between hasOne and belongsTo?</h2>
      <p>
        <code>hasOne</code> is defined on the parent model and indicates it owns one instance of another model. <code>belongsTo</code> is defined on the child model (the one that holds the foreign key) and indicates it belongs to the parent. The foreign key always lives on the <code>belongsTo</code> side.
      </p>
      <CodeBlock title="hasOne vs belongsTo" code={codes[13]} />

      <h2>10. What are Laravel Collections?</h2>
      <p>
        Collections are a powerful wrapper around arrays, providing a fluent, chainable interface for common data operations like filtering, mapping, sorting, and reducing. Eloquent queries always return results as Collection instances.
      </p>
      <CodeBlock title="Collection Examples" code={codes[14]} />

      <h2>11. What is the Service Container (IoC)?</h2>
      <p>
        The Service Container (Inversion of Control container) is a powerful tool for managing class dependencies and performing dependency injection. It is the backbone of the Laravel framework — almost all service bindings are registered within service providers and resolved from the container automatically.
      </p>
      <CodeBlock title="Service Container Binding" code={codes[15]} />

      <h2>12. What is Dependency Injection in Laravel?</h2>
      <p>
        Dependency Injection (DI) is a design pattern where a class receives its dependencies from external sources rather than creating them internally. Laravel&apos;s service container automatically resolves dependencies type-hinted in constructors and controller methods.
      </p>
      <CodeBlock title="Dependency Injection Example" code={codes[16]} />

      <h2>13. What are Facades?</h2>
      <p>
        Facades provide a static-like interface to classes available in the service container. They act as a proxy to the underlying implementation, offering a terse, expressive syntax while maintaining testability. Common facades include <code>Cache</code>, <code>DB</code>, <code>Auth</code>, <code>Route</code>, and <code>Log</code>.
      </p>
      <CodeBlock title="Facade Usage" code={codes[17]} />

      <h2>14. What are Laravel Events and Listeners?</h2>
      <p>
        Events provide a simple observer pattern implementation. Events represent something that happened in your application (e.g., an order was placed), and Listeners handle the response to that event (e.g., send a confirmation email). This decouples different concerns in your codebase.
      </p>
      <CodeBlock title="Terminal" code={codes[18]} />
      <CodeBlock title="Event & Listener" code={codes[19]} />

      <h2>15. What is Laravel Queue?</h2>
      <p>
        Laravel Queues allow you to defer time-consuming tasks (like sending emails or processing uploads) to be handled in the background. This significantly improves response times. Laravel supports multiple queue backends including Redis, Amazon SQS, Beanstalkd, and database.
      </p>
      <CodeBlock title="Queue Job Example" code={codes[20]} />

      <h2>16. What is CSRF Protection?</h2>
      <p>
        CSRF (Cross-Site Request Forgery) protection prevents malicious websites from performing actions on behalf of authenticated users. Laravel automatically generates a CSRF token for each active session and verifies it on every POST, PUT, PATCH, and DELETE request.
      </p>
      <CodeBlock title="CSRF in Blade Forms" code={codes[21]} />

      <h2>17. What is Rate Limiting?</h2>
      <p>
        Rate Limiting restricts the number of requests a user can make to your application within a given time frame. It helps prevent abuse and protects your API from being overwhelmed. Laravel provides a clean way to define rate limiters.
      </p>
      <CodeBlock title="Rate Limiting" code={codes[22]} />

      <h2>18. What are Form Requests?</h2>
      <p>
        Form Requests are custom request classes that encapsulate validation logic and authorization checks. They keep your controllers clean by moving validation rules into a dedicated class.
      </p>
      <CodeBlock title="Form Request Example" code={codes[23]} />

      <h2>19. What is Eager Loading vs Lazy Loading?</h2>
      <p>
        <strong>Lazy Loading</strong> loads related models only when you access the relationship property, which can cause the N+1 query problem. <strong>Eager Loading</strong> loads relationships at the time of the initial query using <code>with()</code>, drastically reducing the number of queries.
      </p>
      <CodeBlock title="Eager Loading vs Lazy Loading" code={codes[24]} />

      <h2>20. What is Laravel Sanctum vs Passport?</h2>
      <p>
        Both provide API authentication, but they serve different purposes. <strong>Sanctum</strong> is a lightweight package ideal for SPAs, mobile apps, and simple token-based APIs. <strong>Passport</strong> is a full OAuth2 server implementation for when you need to issue access tokens with scopes, support third-party applications, and implement the full OAuth2 specification.
      </p>
      <CodeBlock title="Sanctum (Simple Token API)" code={codes[25]} />
      <CodeBlock title="Passport (OAuth2)" code={codes[26]} />
      <blockquote>
        <strong>When to use which?</strong> Use <strong>Sanctum</strong> for first-party SPAs and simple API tokens. Use <strong>Passport</strong> when you need full OAuth2 support with third-party client credentials, authorization codes, and token scopes.
      </blockquote>

      <Summary>
        <ul>
          <li><strong>MVC Pattern</strong> — separates concerns into Model, View, and Controller</li>
          <li><strong>Service Providers & Container</strong> — the backbone of Laravel&apos;s bootstrapping and dependency management</li>
          <li><strong>Eloquent ORM</strong> — expressive ActiveRecord implementation with relationships and collections</li>
          <li><strong>Middleware & CSRF</strong> — filter requests and protect against cross-site attacks</li>
          <li><strong>Events, Queues & Jobs</strong> — decouple logic and handle tasks in the background</li>
          <li><strong>Eager Loading</strong> — avoid N+1 query problems with <code>with()</code></li>
          <li><strong>Sanctum vs Passport</strong> — choose the right API authentication for your use case</li>
          <li><strong>Form Requests & Rate Limiting</strong> — validate input and protect your API from abuse</li>
        </ul>
      </Summary>
    </Article>
  )
}
