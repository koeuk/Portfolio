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
          <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-xs rounded-full font-medium">Interview</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">{{ t('blog.itvw.laravel.title') }}</h1>
        <p class="text-gray-500 dark:text-gray-400">Mar 6, 2026</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ t('blog.itvw.laravel.intro') }}
          </p>
        </section>

        <!-- Q1 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q1') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.itvw.laravel.a1') }}
          </p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1 font-bold">-</span><span v-html="t('blog.itvw.laravel.a1l1')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1 font-bold">-</span><span v-html="t('blog.itvw.laravel.a1l2')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1 font-bold">-</span><span v-html="t('blog.itvw.laravel.a1l3')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1 font-bold">-</span><span v-html="t('blog.itvw.laravel.a1l4')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1 font-bold">-</span><span v-html="t('blog.itvw.laravel.a1l5')"></span></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.laravel.q1c1')" :code="codes[0]" />
        </section>

        <!-- Q2 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q2') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.laravel.a2')"></p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1 font-bold">1.</span><span v-html="t('blog.itvw.laravel.a2l1')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1 font-bold">2.</span><span v-html="t('blog.itvw.laravel.a2l2')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1 font-bold">3.</span><span v-html="t('blog.itvw.laravel.a2l3')"></span></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.laravel.q2c1')" :code="codes[1]" />
        </section>

        <!-- Q3 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q3') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.laravel.a3')"></p>
          <CodeBlock title="app/Providers/AppServiceProvider.php" :code="codes[2]" />
        </section>

        <!-- Q4 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q4') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.itvw.laravel.a4') }}
          </p>
          <CodeBlock title="Terminal" :code="codes[3]" />
          <CodeBlock class="mt-4" title="app/Http/Middleware/CheckAge.php" :code="codes[4]" />
          <CodeBlock class="mt-4" :title="t('blog.itvw.laravel.q4c1')" :code="codes[5]" />
        </section>

        <!-- Q5 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q5') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.laravel.a5')"></p>
          <CodeBlock title="Route Groups" :code="codes[6]" />
          <CodeBlock class="mt-4" title="Route Model Binding" :code="codes[7]" />
        </section>

        <!-- Q6 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q6') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.laravel.a6')"></p>
          <CodeBlock title="Eloquent ORM" :code="codes[8]" />
          <CodeBlock class="mt-4" title="Query Builder" :code="codes[9]" />
        </section>

        <!-- Q7 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q7') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.laravel.a7')"></p>
          <CodeBlock :title="t('blog.itvw.laravel.q7c1')" :code="codes[10]" />
        </section>

        <!-- Q8 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q8') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.laravel.a8')"></p>
          <CodeBlock :title="t('blog.itvw.laravel.q8c1')" :code="codes[11]" />
          <CodeBlock class="mt-4" :title="t('blog.itvw.laravel.q8c2')" :code="codes[12]" />
        </section>

        <!-- Q9 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q9') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.laravel.a9')"></p>
          <CodeBlock title="hasOne vs belongsTo" :code="codes[13]" />
        </section>

        <!-- Q10 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q10') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.itvw.laravel.a10') }}
          </p>
          <CodeBlock :title="t('blog.itvw.laravel.q10c1')" :code="codes[14]" />
        </section>

        <!-- Q11 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q11') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.itvw.laravel.a11') }}
          </p>
          <CodeBlock :title="t('blog.itvw.laravel.q11c1')" :code="codes[15]" />
        </section>

        <!-- Q12 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q12') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.itvw.laravel.a12') }}
          </p>
          <CodeBlock :title="t('blog.itvw.laravel.q12c1')" :code="codes[16]" />
        </section>

        <!-- Q13 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q13') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.laravel.a13')"></p>
          <CodeBlock :title="t('blog.itvw.laravel.q13c1')" :code="codes[17]" />
        </section>

        <!-- Q14 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q14') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.itvw.laravel.a14') }}
          </p>
          <CodeBlock title="Terminal" :code="codes[18]" />
          <CodeBlock class="mt-4" :title="t('blog.itvw.laravel.q14c1')" :code="codes[19]" />
        </section>

        <!-- Q15 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q15') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.itvw.laravel.a15') }}
          </p>
          <CodeBlock :title="t('blog.itvw.laravel.q15c1')" :code="codes[20]" />
        </section>

        <!-- Q16 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q16') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.itvw.laravel.a16') }}
          </p>
          <CodeBlock :title="t('blog.itvw.laravel.q16c1')" :code="codes[21]" />
        </section>

        <!-- Q17 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q17') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.itvw.laravel.a17') }}
          </p>
          <CodeBlock title="Rate Limiting" :code="codes[22]" />
        </section>

        <!-- Q18 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q18') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.itvw.laravel.a18') }}
          </p>
          <CodeBlock :title="t('blog.itvw.laravel.q18c1')" :code="codes[23]" />
        </section>

        <!-- Q19 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q19') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.laravel.a19')"></p>
          <CodeBlock :title="t('blog.itvw.laravel.q19c1')" :code="codes[24]" />
        </section>

        <!-- Q20 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.laravel.q20') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.laravel.a20')"></p>
          <CodeBlock title="Sanctum (Simple Token API)" :code="codes[25]" />
          <CodeBlock class="mt-4" title="Passport (OAuth2)" :code="codes[26]" />
          <div class="tip-box mt-4" v-html="t('blog.itvw.laravel.q20tip')"></div>
        </section>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.laravel.sum1')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.laravel.sum2')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.laravel.sum3')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.laravel.sum4')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.laravel.sum5')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.laravel.sum6')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.laravel.sum7')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.laravel.sum8')"></span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({ title: 'Laravel Interview Questions - Koeuk Dev' })

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
        if ($request->age &lt;= 18) {
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
  `&lt;!-- In Blade templates --&gt;
&lt;form method="POST" action="/profile"&gt;
    @csrf
    &lt;!-- This generates a hidden input with the token --&gt;
    &lt;!-- &lt;input type="hidden" name="_token" value="..."&gt; --&gt;

    &lt;input type="text" name="name"&gt;
    &lt;button type="submit"&gt;Update&lt;/button&gt;
&lt;/form&gt;

&lt;!-- For AJAX requests, include the token in headers --&gt;
&lt;meta name="csrf-token" content="{{ csrf_token() }}"&gt;

&lt;script&gt;
// Axios automatically reads the XSRF-TOKEN cookie
// For fetch:
fetch('/profile', {
    method: 'POST',
    headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
            .getAttribute('content')
    }
});
&lt;/script&gt;`,
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
</script>

<style scoped>
:deep(.inline-code) { @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-red-500 dark:text-red-400; }
.tip-box { @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300; }
.qa-section { @apply mb-8 p-6 rounded-xl bg-gray-50 dark:bg-primary-light/50 border border-gray-200 dark:border-gray-700; }
</style>
