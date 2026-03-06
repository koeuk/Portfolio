<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Back to Blog
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs rounded-full font-medium">Laravel</span>
          <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs rounded-full font-medium">PHP</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">Laravel Email Verification</h1>
        <p class="text-gray-500 dark:text-gray-400">Nov 28, 2025</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Email verification ensures that users provide a valid email address when they register. Laravel makes this easy — it sends a verification email with a signed link, and you can restrict certain routes to only verified users.
          </p>
        </section>

        <!-- Step 1: Model Setup -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">1. Prepare the User Model</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Your User model must implement the <code class="inline-code">MustVerifyEmail</code> interface:
          </p>
          <CodeBlock
            title="app/Models/User.php" :code="codes[0]" />
          <div class="tip-box mt-4">
            <strong>Important:</strong> The <code class="inline-code">users</code> table must have an <code class="inline-code">email_verified_at</code> column. Laravel's default migration already includes this.
          </div>
        </section>

        <!-- Step 2: Routes -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">2. Verification Routes</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            You need 3 routes: show the verification notice, handle the verification link, and resend the email.
          </p>
          <CodeBlock
            title="routes/web.php" :code="codes[1]" />
        </section>

        <!-- Step 3: Protect Routes -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">3. Protect Routes (Verified Users Only)</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Use the <code class="inline-code">verified</code> middleware to restrict routes to verified users:
          </p>
          <CodeBlock
            title="routes/web.php" :code="codes[2]" />
          <div class="tip-box mt-4">
            <strong>How it works:</strong> If an unverified user tries to access a <code class="inline-code">verified</code> route, they get automatically redirected to the <code class="inline-code">verification.notice</code> route.
          </div>
        </section>

        <!-- Step 4: View -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">4. Verification Notice View</h2>
          <CodeBlock
            title="resources/views/auth/verify-email.blade.php" :code="codes[3]" />
        </section>

        <!-- Step 5: Send on Registration -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">5. Send Verification After Registration</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Laravel automatically sends the verification email when a user registers, thanks to the <code class="inline-code">MustVerifyEmail</code> interface. But if you handle registration manually:
          </p>
          <CodeBlock
            title="RegisterController.php" :code="codes[4]" />
        </section>

        <!-- Customize -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">6. Customize the Verification Email</h2>
          <CodeBlock
            title="app/Models/User.php" :code="codes[5]" />
        </section>

        <!-- Check in Code -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">7. Check Verification Status</h2>
          <CodeBlock
            title="Checking verification in code" :code="codes[6]" />
        </section>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">Summary</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>MustVerifyEmail</strong> — add interface to User model</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>3 routes</strong> — notice page, verify link handler, resend</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>verified middleware</strong> — restrict routes to verified users</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Registered event</strong> — auto-sends verification email</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Customizable</strong> — modify the email template and content</span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Laravel Email Verification - Koeuk Dev' })

const codes = [
  `namespace App\\Models;

use Illuminate\\Contracts\\Auth\\MustVerifyEmail;
use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;

    protected $fillable = [
        'name', 'email', 'password',
    ];
}`,
  `use Illuminate\\Foundation\\Auth\\EmailVerificationRequest;
use Illuminate\\Http\\Request;

// 1. Show "Please verify your email" page
Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware('auth')->name('verification.notice');

// 2. Handle the verification link click
Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill(); // Marks email as verified

    return redirect('/dashboard');
})->middleware(['auth', 'signed'])->name('verification.verify');

// 3. Resend verification email
Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();

    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');`,
  `// Only verified users can access these routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    });

    Route::get('/profile', [ProfileController::class, 'show']);
    Route::get('/settings', [SettingsController::class, 'index']);
});

// These routes don't need verification
Route::middleware('auth')->group(function () {
    Route::get('/email/verify', function () {
        return view('auth.verify-email');
    })->name('verification.notice');
});`,
  `&lt;h1&gt;Verify Your Email&lt;/h1&gt;

&lt;p&gt;Please check your inbox and click the verification link.&lt;/p&gt;

@if (session('message'))
    &lt;div class="alert alert-success"&gt;
        \${'{{'} session('message') \${'}}'}
    &lt;/div&gt;
@endif

&lt;form method="POST" action="\${'{{'} route('verification.send') \${'}}'}"&gt;
    @csrf
    &lt;button type="submit"&gt;
        Resend Verification Email
    &lt;/button&gt;
&lt;/form&gt;`,
  `use Illuminate\\Auth\\Events\\Registered;

public function register(Request $request)
{
    $validated = $request->validate([
        'name'     => 'required|string|max:255',
        'email'    => 'required|email|unique:users',
        'password' => 'required|min:8|confirmed',
    ]);

    $user = User::create([
        'name'     => $validated['name'],
        'email'    => $validated['email'],
        'password' => Hash::make($validated['password']),
    ]);

    // This triggers the verification email
    event(new Registered($user));

    Auth::login($user);

    return redirect('/email/verify');
}`,
  `use Illuminate\\Notifications\\Messages\\MailMessage;
use Illuminate\\Auth\\Notifications\\VerifyEmail;

// In AppServiceProvider boot()
VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
    return (new MailMessage)
        ->subject('Verify Your Email Address')
        ->greeting('Welcome!')
        ->line('Click the button below to verify your email address.')
        ->action('Verify Email', $url)
        ->line('If you did not create an account, no action is needed.');
});`,
  `// In PHP
if ($user->hasVerifiedEmail()) {
    // Email is verified
}

if (! $user->hasVerifiedEmail()) {
    // Email is NOT verified
}

// Manually verify a user
$user->markEmailAsVerified();

// In Blade
@if(auth()->user()->hasVerifiedEmail())
    &lt;p&gt;Your email is verified.&lt;/p&gt;
@else
    &lt;p&gt;Please verify your email.&lt;/p&gt;
@endif`,
]
</script>

<style scoped>
.inline-code { @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-red-500 dark:text-red-400; }
.tip-box { @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300; }
</style>
