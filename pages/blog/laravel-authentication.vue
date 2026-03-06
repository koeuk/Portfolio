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
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">Laravel Authentication</h1>
        <p class="text-gray-500 dark:text-gray-400">Dec 5, 2025</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Authentication is how your application knows <strong>who</strong> is using it. Laravel makes authentication very simple out of the box — it provides login, registration, session management, and API token authentication with minimal setup.
          </p>
        </section>

        <!-- How Auth Works -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">How Authentication Works</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Laravel authentication has two core concepts:
          </p>
          <ul class="space-y-3 text-gray-600 dark:text-gray-300 mb-4">
            <li class="flex items-start gap-2">
              <span class="text-blue-500 mt-1 font-bold">1.</span>
              <span><strong>Guards</strong> — define <em>how</em> users are authenticated (session, token, etc.)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-500 mt-1 font-bold">2.</span>
              <span><strong>Providers</strong> — define <em>where</em> users are stored (database table, Eloquent model)</span>
            </li>
          </ul>
          <CodeBlock
            title="config/auth.php" :code="codes[0]" />
        </section>

        <!-- Starter Kits -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">1. Quick Setup with Starter Kits</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            The fastest way to add authentication is using Laravel Breeze or Jetstream. They scaffold login, register, password reset, and email verification for you.
          </p>
          <CodeBlock
            title="Terminal — Laravel Breeze" :code="codes[1]" />
          <div class="tip-box mt-4">
            <strong>Breeze vs Jetstream:</strong> Use <strong>Breeze</strong> for simple authentication. Use <strong>Jetstream</strong> if you need teams, two-factor auth, API tokens, and profile management.
          </div>
        </section>

        <!-- Manual Auth -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">2. Manual Authentication</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            If you want full control, you can implement authentication manually.
          </p>

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-6">Registration</h3>
          <CodeBlock
            title="app/Http/Controllers/RegisterController.php" :code="codes[2]" />

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-8">Login</h3>
          <CodeBlock
            title="app/Http/Controllers/LoginController.php" :code="codes[3]" />

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-8">Logout</h3>
          <CodeBlock
            title="Logout" :code="codes[4]" />
        </section>

        <!-- Routes -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">3. Auth Routes</h2>
          <CodeBlock
            title="routes/web.php" :code="codes[5]" />
        </section>

        <!-- Protecting Routes -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">4. Protecting Routes</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Use the <code class="inline-code">auth</code> middleware to require authentication:
          </p>
          <CodeBlock
            title="Different ways to protect routes" :code="codes[6]" />
        </section>

        <!-- Using Auth -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">5. Using the Auth Helper</h2>
          <CodeBlock
            title="Getting Current User Info" :code="codes[7]" />
        </section>

        <!-- Sanctum API -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">6. API Authentication (Sanctum)</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            For API authentication (Vue/React SPA or mobile apps), use Laravel Sanctum:
          </p>
          <CodeBlock
            title="Terminal" :code="codes[8]" />
          <CodeBlock class="mt-4"
            title="API Login — return token" :code="codes[9]" />
          <CodeBlock class="mt-4"
            title="Protect API routes" :code="codes[10]" />
        </section>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Guards & Providers</strong> — how and where users are authenticated</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Breeze / Jetstream</strong> — quick scaffolding for auth views</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Manual Auth</strong> — register, login, logout with full control</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Middleware</strong> — protect routes with <code class="inline-code">auth</code> middleware</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Sanctum</strong> — token-based API authentication</span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({ title: 'Laravel Authentication - Koeuk Dev' })

const codes = [
  `'defaults' => [
    'guard' => 'web',        // Default guard
    'passwords' => 'users',  // Default password reset
],

'guards' => [
    'web' => [
        'driver' => 'session',       // Uses session cookies
        'provider' => 'users',
    ],
    'api' => [
        'driver' => 'sanctum',       // Uses API tokens
        'provider' => 'users',
    ],
],

'providers' => [
    'users' => [
        'driver' => 'eloquent',       // Uses Eloquent model
        'model' => App\\Models\\User::class,
    ],
],`,
  `# Install Breeze
composer require laravel/breeze --dev

# Scaffold auth with Blade views
php artisan breeze:install blade

# Or with Vue / React / API
php artisan breeze:install vue
php artisan breeze:install react
php artisan breeze:install api

# Run migrations and build assets
php artisan migrate
npm install && npm run dev`,
  `use App\\Models\\User;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Auth;
use Illuminate\\Support\\Facades\\Hash;

class RegisterController extends Controller
{
    public function showForm()
    {
        return view('auth.register');
    }

    public function register(Request $request)
    {
        // Validate input
        $validated = $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed',
        ]);

        // Create the user
        $user = User::create([
            'name'     => $validated['name'],
            'email'    => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        // Log them in automatically
        Auth::login($user);

        return redirect('/dashboard');
    }
}`,
  `use Illuminate\\Support\\Facades\\Auth;

class LoginController extends Controller
{
    public function showForm()
    {
        return view('auth.login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email'    => 'required|email',
            'password' => 'required',
        ]);

        // Attempt to authenticate
        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();
            return redirect()->intended('/dashboard');
        }

        // Authentication failed
        return back()->withErrors([
            'email' => 'The provided credentials do not match.',
        ])->onlyInput('email');
    }
}`,
  `public function logout(Request $request)
{
    Auth::logout();

    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return redirect('/');
}`,
  `use App\\Http\\Controllers\\LoginController;
use App\\Http\\Controllers\\RegisterController;

// Guest only routes
Route::middleware('guest')->group(function () {
    Route::get('/register', [RegisterController::class, 'showForm']);
    Route::post('/register', [RegisterController::class, 'register']);
    Route::get('/login', [LoginController::class, 'showForm'])->name('login');
    Route::post('/login', [LoginController::class, 'login']);
});

// Authenticated only routes
Route::middleware('auth')->group(function () {
    Route::post('/logout', [LoginController::class, 'logout']);
    Route::get('/dashboard', function () {
        return view('dashboard');
    });
});`,
  `// Single route
Route::get('/profile', [ProfileController::class, 'show'])
    ->middleware('auth');

// Group of routes
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::get('/settings', [SettingsController::class, 'index']);
});

// In controller constructor
class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
}`,
  `use Illuminate\\Support\\Facades\\Auth;

// Get the currently authenticated user
$user = Auth::user();

// Get just the user's ID
$id = Auth::id();

// Check if user is logged in
if (Auth::check()) {
    // User is logged in
}

// In Blade templates
@auth
    &lt;p&gt;Welcome, \${'{{'} auth()->user()->name \${'}}'}&lt;/p&gt;
@endauth

@guest
    &lt;a href="/login"&gt;Login&lt;/a&gt;
@endguest`,
  `# Install Sanctum
php artisan install:api`,
  `use Illuminate\\Support\\Facades\\Hash;

public function login(Request $request)
{
    $request->validate([
        'email'    => 'required|email',
        'password' => 'required',
    ]);

    $user = User::where('email', $request->email)->first();

    if (! $user || ! Hash::check($request->password, $user->password)) {
        return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }

    // Create a token
    $token = $user->createToken('auth-token')->plainTextToken;

    return response()->json([
        'user'  => $user,
        'token' => $token,
    ]);
}`,
  `// routes/api.php
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', function (Request $request) {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    });
});`,
]
</script>

<style scoped>
.inline-code { @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-red-500 dark:text-red-400; }
.tip-box { @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300; }
</style>
