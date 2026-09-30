import { Article } from '@/components/ui/Article'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { ArticleSummary } from '@/components/ui/ArticleSummary'

export const metadata = {
  title: 'Laravel Email Verification - Koeuk Dev',
  description: 'Email verification ensures that users provide a valid email address when they register.',
}

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
  `<h1>Verify Your Email</h1>

<p>Please check your inbox and click the verification link.</p>

@if (session('message'))
    <div class="alert alert-success">
        {{ session('message') }}
    </div>
@endif

<form method="POST" action="{{ route('verification.send') }}">
    @csrf
    <button type="submit">
        Resend Verification Email
    </button>
</form>`,
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
    <p>Your email is verified.</p>
@else
    <p>Please verify your email.</p>
@endif`,
]

export default function Page() {
  return (
    <Article title="Laravel Email Verification" date="Nov 28, 2025" tags={['Laravel', 'PHP']}>
      <p>
        Email verification ensures that users provide a valid email address when they register. Laravel makes this easy — it sends a verification email with a signed link, and you can restrict certain routes to only verified users.
      </p>

      <h2>1. Prepare the User Model</h2>
      <p>
        Your User model must implement the <code>MustVerifyEmail</code> interface:
      </p>
      <CodeBlock title="app/Models/User.php" code={codes[0]} />
      <blockquote>
        <strong>Important:</strong> The <code>users</code> table must have an <code>email_verified_at</code> column. Laravel&apos;s default migration already includes this.
      </blockquote>

      <h2>2. Verification Routes</h2>
      <p>
        You need 3 routes: show the verification notice, handle the verification link, and resend the email.
      </p>
      <CodeBlock title="routes/web.php" code={codes[1]} />

      <h2>3. Protect Routes (Verified Users Only)</h2>
      <p>
        Use the <code>verified</code> middleware to restrict routes to verified users:
      </p>
      <CodeBlock title="routes/web.php" code={codes[2]} />
      <blockquote>
        <strong>How it works:</strong> If an unverified user tries to access a <code>verified</code> route, they get automatically redirected to the <code>verification.notice</code> route.
      </blockquote>

      <h2>4. Verification Notice View</h2>
      <CodeBlock title="resources/views/auth/verify-email.blade.php" code={codes[3]} />

      <h2>5. Send Verification After Registration</h2>
      <p>
        Laravel automatically sends the verification email when a user registers, thanks to the <code>MustVerifyEmail</code> interface. But if you handle registration manually:
      </p>
      <CodeBlock title="RegisterController.php" code={codes[4]} />

      <h2>6. Customize the Verification Email</h2>
      <CodeBlock title="app/Models/User.php" code={codes[5]} />

      <h2>7. Check Verification Status</h2>
      <CodeBlock title="Checking verification in code" code={codes[6]} />

      <ArticleSummary>
        <ul>
          <li><strong>MustVerifyEmail</strong> — add interface to User model</li>
          <li><strong>3 routes</strong> — notice page, verify link handler, resend</li>
          <li><strong>verified middleware</strong> — restrict routes to verified users</li>
          <li><strong>Registered event</strong> — auto-sends verification email</li>
          <li><strong>Customizable</strong> — modify the email template and content</li>
        </ul>
      </ArticleSummary>
    </Article>
  )
}
