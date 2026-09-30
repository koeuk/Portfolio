import { Article } from '@/components/ui/Article'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { ArticleSummary } from '@/components/ui/ArticleSummary'

export const metadata = {
  title: 'Laravel Authentication | Koeuk Dev',
  description: 'Authentication is how your application knows who is using it.',
}

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
    <p>Welcome, {{ auth()->user()->name }}</p>
@endauth

@guest
    <a href="/login">Login</a>
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

export default function LaravelAuthenticationPage() {
  return (
    <Article
      title="Laravel Authentication"
      date="Dec 5, 2025"
      tags={['Laravel', 'PHP']}
      backHref="/about-me/my-info?section=rean"
    >
      <p>
        Authentication is how your application knows <strong>who</strong> is using it. Laravel makes authentication
        very simple out of the box — it provides login, registration, session management, and API token authentication
        with minimal setup.
      </p>

      <h2>How Authentication Works</h2>
      <p>Laravel authentication has two core concepts:</p>
      <ol>
        <li>
          <strong>Guards</strong> — define <em>how</em> users are authenticated (session, token, etc.)
        </li>
        <li>
          <strong>Providers</strong> — define <em>where</em> users are stored (database table, Eloquent model)
        </li>
      </ol>
      <CodeBlock title="config/auth.php" code={codes[0]} />

      <h2>1. Quick Setup with Starter Kits</h2>
      <p>
        The fastest way to add authentication is using Laravel Breeze or Jetstream. They scaffold login, register,
        password reset, and email verification for you.
      </p>
      <CodeBlock title="Terminal — Laravel Breeze" code={codes[1]} />
      <blockquote>
        <strong>Breeze vs Jetstream:</strong> Use <strong>Breeze</strong> for simple authentication. Use{' '}
        <strong>Jetstream</strong> if you need teams, two-factor auth, API tokens, and profile management.
      </blockquote>

      <h2>2. Manual Authentication</h2>
      <p>If you want full control, you can implement authentication manually.</p>

      <h3>Registration</h3>
      <CodeBlock title="app/Http/Controllers/RegisterController.php" code={codes[2]} />

      <h3>Login</h3>
      <CodeBlock title="app/Http/Controllers/LoginController.php" code={codes[3]} />

      <h3>Logout</h3>
      <CodeBlock title="Logout" code={codes[4]} />

      <h2>3. Auth Routes</h2>
      <CodeBlock title="routes/web.php" code={codes[5]} />

      <h2>4. Protecting Routes</h2>
      <p>
        Use the <code>auth</code> middleware to require authentication:
      </p>
      <CodeBlock title="Different ways to protect routes" code={codes[6]} />

      <h2>5. Using the Auth Helper</h2>
      <CodeBlock title="Getting Current User Info" code={codes[7]} />

      <h2>6. API Authentication (Sanctum)</h2>
      <p>For API authentication (Vue/React SPA or mobile apps), use Laravel Sanctum:</p>
      <CodeBlock title="Terminal" code={codes[8]} />
      <CodeBlock title="API Login — return token" code={codes[9]} />
      <CodeBlock title="Protect API routes" code={codes[10]} />

      <ArticleSummary>
        <ul>
          <li>
            <strong>Guards &amp; Providers</strong> — how and where users are authenticated
          </li>
          <li>
            <strong>Breeze / Jetstream</strong> — quick scaffolding for auth views
          </li>
          <li>
            <strong>Manual Auth</strong> — register, login, logout with full control
          </li>
          <li>
            <strong>Middleware</strong> — protect routes with <code>auth</code> middleware
          </li>
          <li>
            <strong>Sanctum</strong> — token-based API authentication
          </li>
        </ul>
      </ArticleSummary>
    </Article>
  )
}
