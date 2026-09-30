import { Article } from '@/components/ui/Article'
import { Card } from '@/components/ui/Card'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { ArticleSummary } from '@/components/ui/ArticleSummary'

export const metadata = {
  title: 'Laravel Password Reset | Koeuk Dev',
  description: 'Laravel provides a complete password reset system out of the box.',
}

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
  `<h1>Forgot Password</h1>

@if (session('status'))
    <div class="alert-success">{{ session('status') }}</div>
@endif

<form method="POST" action="{{ route('password.email') }}">
    @csrf
    <label>Email Address</label>
    <input type="email" name="email" value="{{ old('email') }}" required>
    @error('email')
        <span>{{ $message }}</span>
    @enderror

    <button type="submit">Send Reset Link</button>
</form>`,
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
  `<h1>Reset Password</h1>

<form method="POST" action="{{ route('password.update') }}">
    @csrf
    <input type="hidden" name="token" value="{{ $token }}">

    <label>Email</label>
    <input type="email" name="email" value="{{ old('email', $email) }}" required>

    <label>New Password</label>
    <input type="password" name="password" required>

    <label>Confirm Password</label>
    <input type="password" name="password_confirmation" required>

    @error('email')
        <span>{{ $message }}</span>
    @enderror

    <button type="submit">Reset Password</button>
</form>`,
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
  `<h1>Confirm Password</h1>
<p>Please confirm your password to continue.</p>

<form method="POST" action="{{ route('password.confirm') }}">
    @csrf
    <input type="password" name="password" required>
    @error('password')
        <span>{{ $message }}</span>
    @enderror
    <button type="submit">Confirm</button>
</form>`,
]

export default function LaravelPasswordsPage() {
  return (
    <Article
      title="Laravel Password Reset"
      date="Nov 20, 2025"
      tags={['Laravel', 'PHP']}
      backHref="/about-me/my-info?section=rean"
    >
      <p>
        Users forget passwords — it happens all the time. Laravel provides a complete password reset system out of the
        box: send a reset link via email, verify the token, and let the user set a new password. Here&apos;s how to
        implement it step by step.
      </p>

      <h2>How Password Reset Works</h2>
      <Card>
        <ol>
          <li>User clicks &quot;Forgot Password?&quot; and enters their email</li>
          <li>
            Laravel generates a unique token and stores it in the <code>password_reset_tokens</code> table
          </li>
          <li>Laravel sends an email with a reset link containing the token</li>
          <li>User clicks the link, enters a new password</li>
          <li>Laravel verifies the token, updates the password, and deletes the token</li>
        </ol>
      </Card>

      <h2>1. Database Setup</h2>
      <p>
        Laravel&apos;s default migration already creates the <code>password_reset_tokens</code> table. Make sure
        you&apos;ve run migrations:
      </p>
      <CodeBlock title="Terminal" code={codes[0]} />
      <CodeBlock title="The migration looks like this" code={codes[1]} />

      <h2>2. Request Password Reset Link</h2>
      <p>First, create the form where users enter their email, and the controller that sends the reset link:</p>
      <CodeBlock title="routes/web.php" code={codes[2]} />
      <CodeBlock title="resources/views/auth/forgot-password.blade.php" code={codes[3]} />
      <CodeBlock title="Controller — Send the link" code={codes[4]} />

      <h2>3. Reset the Password</h2>
      <p>When the user clicks the link in the email, they land on the reset form:</p>
      <CodeBlock title="routes/web.php" code={codes[5]} />
      <CodeBlock title="resources/views/auth/reset-password.blade.php" code={codes[6]} />
      <CodeBlock title="Controller — Reset password" code={codes[7]} />

      <h2>4. Configuration</h2>
      <CodeBlock title="config/auth.php" code={codes[8]} />
      <blockquote>
        <strong>expire:</strong> How many minutes a reset token is valid. After this, the user must request a new link.
        <br />
        <strong>throttle:</strong> How many seconds a user must wait before requesting another reset email (prevents
        spam).
      </blockquote>

      <h2>5. Customize the Reset Email</h2>
      <CodeBlock title="app/Providers/AppServiceProvider.php" code={codes[9]} />

      <h2>6. API Password Reset (for SPA / Mobile)</h2>
      <p>For Vue/React SPA or mobile apps, return JSON instead of redirects:</p>
      <CodeBlock title="routes/api.php" code={codes[10]} />

      <h2>7. Password Confirmation (for Sensitive Actions)</h2>
      <p>
        Require users to re-enter their password before performing sensitive actions (like changing email or deleting
        account):
      </p>
      <CodeBlock title="routes/web.php" code={codes[11]} />
      <CodeBlock title="resources/views/auth/confirm-password.blade.php" code={codes[12]} />
      <blockquote>
        <strong>Timeout:</strong> By default, once confirmed, the user won&apos;t be asked again for 3 hours. Configure
        this with <code>password_timeout</code> in <code>config/auth.php</code>.
      </blockquote>

      <ArticleSummary>
        <ul>
          <li>
            <strong>Password::sendResetLink()</strong> — sends reset email with token
          </li>
          <li>
            <strong>Password::reset()</strong> — validates token and updates password
          </li>
          <li>
            <strong>Token expiry</strong> — configurable, default 60 minutes
          </li>
          <li>
            <strong>Customizable email</strong> — modify content and URL
          </li>
          <li>
            <strong>API support</strong> — return JSON for SPA/mobile apps
          </li>
          <li>
            <strong>Password confirmation</strong> — re-verify for sensitive actions
          </li>
        </ul>
      </ArticleSummary>
    </Article>
  )
}
