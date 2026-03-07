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
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.passwords.title') }}</h1>
        <p class="text-gray-500 dark:text-gray-400">Nov 20, 2025</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ t('blog.laravel.passwords.intro') }}
          </p>
        </section>

        <!-- How it Works -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.passwords.howItWorksTitle') }}</h2>
          <div class="p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
            <ol class="space-y-3 text-gray-600 dark:text-gray-300">
              <li class="flex items-start gap-3">
                <span class="bg-primary text-white dark:bg-white dark:text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                <span>{{ t('blog.laravel.passwords.step1') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-primary text-white dark:bg-white dark:text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                <span v-html="t('blog.laravel.passwords.step2')"></span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-primary text-white dark:bg-white dark:text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                <span>{{ t('blog.laravel.passwords.step3') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-primary text-white dark:bg-white dark:text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                <span>{{ t('blog.laravel.passwords.step4') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-primary text-white dark:bg-white dark:text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
                <span>{{ t('blog.laravel.passwords.step5') }}</span>
              </li>
            </ol>
          </div>
        </section>

        <!-- Database Setup -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.passwords.dbSetupTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.laravel.passwords.dbSetupDesc')">
          </p>
          <CodeBlock
            title="Terminal" :code="codes[0]" />
          <CodeBlock class="mt-4"
            :title="t('blog.laravel.passwords.migrationTitle')" :code="codes[1]" />
        </section>

        <!-- Step 1: Request Reset Link -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.passwords.requestLinkTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.laravel.passwords.requestLinkDesc') }}
          </p>
          <CodeBlock
            title="routes/web.php" :code="codes[2]" />
          <CodeBlock class="mt-4"
            title="resources/views/auth/forgot-password.blade.php" :code="codes[3]" />
          <CodeBlock class="mt-4"
            :title="t('blog.laravel.passwords.sendLinkTitle')" :code="codes[4]" />
        </section>

        <!-- Step 2: Reset Password -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.passwords.resetPasswordTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.laravel.passwords.resetPasswordDesc') }}
          </p>
          <CodeBlock
            title="routes/web.php" :code="codes[5]" />
          <CodeBlock class="mt-4"
            title="resources/views/auth/reset-password.blade.php" :code="codes[6]" />
          <CodeBlock class="mt-4"
            :title="t('blog.laravel.passwords.resetControllerTitle')" :code="codes[7]" />
        </section>

        <!-- Configuration -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.passwords.configTitle') }}</h2>
          <CodeBlock
            title="config/auth.php" :code="codes[8]" />
          <div class="tip-box mt-4" v-html="t('blog.laravel.passwords.configTip')">
          </div>
        </section>

        <!-- Customize Email -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.passwords.customizeEmailTitle') }}</h2>
          <CodeBlock
            title="app/Providers/AppServiceProvider.php" :code="codes[9]" />
        </section>

        <!-- API Password Reset -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.passwords.apiResetTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.laravel.passwords.apiResetDesc') }}
          </p>
          <CodeBlock
            title="routes/api.php" :code="codes[10]" />
        </section>

        <!-- Password Confirmation -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.passwords.confirmTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.laravel.passwords.confirmDesc') }}
          </p>
          <CodeBlock
            :title="t('blog.laravel.passwords.protectApiTitle')" :code="codes[11]" />
          <CodeBlock class="mt-4"
            title="resources/views/auth/confirm-password.blade.php" :code="codes[12]" />
          <div class="tip-box mt-4" v-html="t('blog.laravel.passwords.confirmTip')">
          </div>
        </section>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.passwords.summary1')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.passwords.summary2')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.passwords.summary3')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.passwords.summary4')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.passwords.summary5')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.passwords.summary6')"></span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({ title: 'Laravel Password Reset - Koeuk Dev' })

const codes = [
  `php artisan migrate`,
  `Schema::create('password_reset_tokens', function (Blueprint $table) {
    $table->string('email')->primary();
    $table->string('token');
    $table->timestamp('created_at')->nullable();
});`,
  `use App\\Http\\Controllers\\PasswordResetController;

Route::get('/forgot-password', [PasswordResetController::class, 'showRequestForm'])
    ->middleware('guest')
    ->name('password.request');

Route::post('/forgot-password', [PasswordResetController::class, 'sendResetLink'])
    ->middleware('guest')
    ->name('password.email');`,
  `&lt;h1&gt;Forgot Password&lt;/h1&gt;

@if (session('status'))
    &lt;div class="alert-success"&gt;\${'{{'} session('status') \${'}}'}&lt;/div&gt;
@endif

&lt;form method="POST" action="\${'{{'} route('password.email') \${'}}'}"&gt;
    @csrf
    &lt;label&gt;Email Address&lt;/label&gt;
    &lt;input type="email" name="email" value="\${'{{'} old('email') \${'}}'}" required&gt;
    @error('email')
        &lt;span&gt;\${'{{'} $message \${'}}'}&lt;/span&gt;
    @enderror

    &lt;button type="submit"&gt;Send Reset Link&lt;/button&gt;
&lt;/form&gt;`,
  `use Illuminate\\Support\\Facades\\Password;

class PasswordResetController extends Controller
{
    public function showRequestForm()
    {
        return view('auth.forgot-password');
    }

    public function sendResetLink(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        // Send password reset link
        $status = Password::sendResetLink(
            $request->only('email')
        );

        return $status === Password::RESET_LINK_SENT
            ? back()->with('status', __($status))
            : back()->withErrors(['email' => __($status)]);
    }
}`,
  `Route::get('/reset-password/{token}', [PasswordResetController::class, 'showResetForm'])
    ->middleware('guest')
    ->name('password.reset');

Route::post('/reset-password', [PasswordResetController::class, 'resetPassword'])
    ->middleware('guest')
    ->name('password.update');`,
  `&lt;h1&gt;Reset Password&lt;/h1&gt;

&lt;form method="POST" action="\${'{{'} route('password.update') \${'}}'}"&gt;
    @csrf
    &lt;input type="hidden" name="token" value="\${'{{'} $token \${'}}'}"&gt;

    &lt;label&gt;Email&lt;/label&gt;
    &lt;input type="email" name="email" value="\${'{{'} old('email', $email) \${'}}'}" required&gt;

    &lt;label&gt;New Password&lt;/label&gt;
    &lt;input type="password" name="password" required&gt;

    &lt;label&gt;Confirm Password&lt;/label&gt;
    &lt;input type="password" name="password_confirmation" required&gt;

    @error('email')
        &lt;span&gt;\${'{{'} $message \${'}}'}&lt;/span&gt;
    @enderror

    &lt;button type="submit"&gt;Reset Password&lt;/button&gt;
&lt;/form&gt;`,
  `use Illuminate\\Support\\Facades\\Hash;
use Illuminate\\Support\\Facades\\Password;
use Illuminate\\Auth\\Events\\PasswordReset;
use Illuminate\\Support\\Str;

public function showResetForm(string $token)
{
    return view('auth.reset-password', ['token' => $token]);
}

public function resetPassword(Request $request)
{
    $request->validate([
        'token'    => 'required',
        'email'    => 'required|email',
        'password' => 'required|min:8|confirmed',
    ]);

    $status = Password::reset(
        $request->only('email', 'password', 'password_confirmation', 'token'),
        function ($user, string $password) {
            $user->forceFill([
                'password'       => Hash::make($password),
                'remember_token' => Str::random(60),
            ])->save();

            event(new PasswordReset($user));
        }
    );

    return $status === Password::PASSWORD_RESET
        ? redirect()->route('login')->with('status', __($status))
        : back()->withErrors(['email' => [__($status)]]);
}`,
  `'passwords' => [
    'users' => [
        'provider' => 'users',
        'table'    => 'password_reset_tokens',
        'expire'   => 60,     // Token expires after 60 minutes
        'throttle' => 60,     // Wait 60 seconds before resending
    ],
],`,
  `use Illuminate\\Auth\\Notifications\\ResetPassword;
use Illuminate\\Notifications\\Messages\\MailMessage;

public function boot(): void
{
    // Customize the reset email content
    ResetPassword::toMailUsing(function ($notifiable, string $token) {
        $url = url("/reset-password/{$token}?email={$notifiable->email}");

        return (new MailMessage)
            ->subject('Reset Your Password')
            ->greeting('Hello!')
            ->line('You requested a password reset for your account.')
            ->action('Reset Password', $url)
            ->line('This link expires in 60 minutes.')
            ->line('If you did not request this, ignore this email.');
    });

    // Or customize just the URL
    ResetPassword::createUrlUsing(function ($user, string $token) {
        return 'https://myapp.com/reset-password/' . $token
            . '?email=' . $user->email;
    });
}`,
  `Route::post('/forgot-password', function (Request $request) {
    $request->validate(['email' => 'required|email']);

    $status = Password::sendResetLink($request->only('email'));

    if ($status === Password::RESET_LINK_SENT) {
        return response()->json(['message' => 'Reset link sent to your email']);
    }

    return response()->json(['message' => __($status)], 400);
});

Route::post('/reset-password', function (Request $request) {
    $request->validate([
        'token'    => 'required',
        'email'    => 'required|email',
        'password' => 'required|min:8|confirmed',
    ]);

    $status = Password::reset(
        $request->only('email', 'password', 'password_confirmation', 'token'),
        function ($user, string $password) {
            $user->forceFill([
                'password' => Hash::make($password),
                'remember_token' => Str::random(60),
            ])->save();

            event(new PasswordReset($user));
        }
    );

    if ($status === Password::PASSWORD_RESET) {
        return response()->json(['message' => 'Password reset successfully']);
    }

    return response()->json(['message' => __($status)], 400);
});`,
  `// These routes require password confirmation
Route::middleware(['auth', 'password.confirm'])->group(function () {
    Route::get('/settings/security', [SettingsController::class, 'security']);
    Route::delete('/account', [AccountController::class, 'destroy']);
});`,
  `&lt;h1&gt;Confirm Password&lt;/h1&gt;
&lt;p&gt;Please confirm your password to continue.&lt;/p&gt;

&lt;form method="POST" action="\${'{{'} route('password.confirm') \${'}}'}"&gt;
    @csrf
    &lt;input type="password" name="password" required&gt;
    @error('password')
        &lt;span&gt;\${'{{'} $message \${'}}'}&lt;/span&gt;
    @enderror
    &lt;button type="submit"&gt;Confirm&lt;/button&gt;
&lt;/form&gt;`,
]
</script>

<style scoped>
.inline-code { @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-red-500 dark:text-red-400; }
.tip-box { @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300; }
</style>
