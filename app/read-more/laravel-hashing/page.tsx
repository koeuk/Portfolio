import { Article } from '@/components/ui/Article'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { ArticleSummary } from '@/components/ui/ArticleSummary'

export const metadata = {
  title: 'Laravel Hashing | Koeuk Dev',
  description:
    'Hashing is a one-way process that turns a password (or any data) into a fixed-length scrambled string.',
}

const codes = [
  `// NEVER store passwords in plain text!
$user->password = 'secret123';  // Anyone with DB access can read it
$user->save();`,
  `// Hash the password — it becomes unreadable
$user->password = Hash::make('secret123');
$user->save();
// Stored as: "$2y$12$K4Iu6q7cW8e..."  (nobody can read the original)`,
  `use Illuminate\\Support\\Facades\\Hash;

// Create a hash
$hashed = Hash::make('my-password');
// Result: "$2y$12$K4Iu6q7cW8e..."

// Each call produces a DIFFERENT hash (due to random salt)
Hash::make('my-password');  // "$2y$12$abc..."
Hash::make('my-password');  // "$2y$12$xyz..."
// Both are valid hashes of the same password!

// Verify a password against a hash
if (Hash::check('my-password', $hashed)) {
    // Password is correct!
}

if (! Hash::check('wrong-password', $hashed)) {
    // Password is wrong
}`,
  `'bcrypt' => [
    'rounds' => env('BCRYPT_ROUNDS', 12),  // Default: 12
],`,
  `// Override rounds for a specific hash
$hashed = Hash::make('password', [
    'rounds' => 14,  // Slower but more secure
]);`,
  `// Switch to Argon2
'driver' => 'argon2id',  // or 'argon2i'

'argon' => [
    'memory'  => 65536,  // Memory cost in KiB (64MB)
    'threads' => 1,      // Number of threads
    'time'    => 4,      // Number of iterations
],`,
  `// The API stays the same regardless of driver
$hashed = Hash::make('password');  // Uses Argon2 if configured
Hash::check('password', $hashed); // Works the same way`,
  `use Illuminate\\Support\\Facades\\Hash;

// Check if a hash needs to be rehashed (config changed)
if (Hash::needsRehash($user->password)) {
    $user->update([
        'password' => Hash::make($plainPassword),
    ]);
}`,
  `public function login(Request $request)
{
    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    if (Auth::attempt($credentials)) {
        // Auto-rehash if config changed
        if (Hash::needsRehash(Auth::user()->password)) {
            Auth::user()->update([
                'password' => Hash::make($request->password),
            ]);
        }

        return redirect('/dashboard');
    }

    return back()->withErrors(['email' => 'Invalid credentials']);
}`,
  `User::create([
    'name'     => $request->name,
    'email'    => $request->email,
    'password' => Hash::make($request->password),
]);`,
  `public function changePassword(Request $request)
{
    $request->validate([
        'current_password' => 'required',
        'new_password'     => 'required|min:8|confirmed',
    ]);

    // Verify current password
    if (! Hash::check($request->current_password, auth()->user()->password)) {
        return back()->withErrors(['current_password' => 'Current password is incorrect']);
    }

    // Update with new hash
    auth()->user()->update([
        'password' => Hash::make($request->new_password),
    ]);

    return back()->with('success', 'Password changed!');
}`,
  `// app/Models/User.php
use Illuminate\\Database\\Eloquent\\Casts\\Attribute;

protected function password(): Attribute
{
    return Attribute::make(
        set: fn (string $value) => Hash::make($value),
    );
}

// Now you can just do:
$user->password = 'plain-text';  // Auto-hashed before saving!`,
]

export default function LaravelHashingPage() {
  return (
    <Article title="Laravel Hashing" date="Nov 22, 2025" tags={['Laravel', 'PHP']} backHref="/about-me/my-info?section=rean">
      <p>
        Hashing is a <strong>one-way</strong> process that turns a password (or any data) into a fixed-length
        scrambled string. Unlike encryption, you <strong>cannot reverse</strong> a hash — you can only check if a given
        value matches the hash. This is exactly what you want for passwords: store the hash, and verify against it on
        login.
      </p>

      <h2>Why Hash Passwords?</h2>
      <CodeBlock title="Never do this" code={codes[0]} />
      <CodeBlock title="Always do this" code={codes[1]} />
      <p>If your database is ever compromised, hackers get useless hash strings instead of real passwords.</p>

      <h2>1. Bcrypt (Default)</h2>
      <p>
        Laravel uses <strong>Bcrypt</strong> by default. It&apos;s slow on purpose — this makes brute-force attacks
        impractical.
      </p>
      <CodeBlock title="Using Hash facade" code={codes[2]} />
      <blockquote>
        <strong>Why different hashes?</strong> Bcrypt adds a random &quot;salt&quot; each time. This prevents attackers
        from using pre-computed hash tables (rainbow tables). Both hashes still verify correctly against the original
        password.
      </blockquote>

      <h2>2. Configuring Bcrypt Rounds</h2>
      <p>&quot;Rounds&quot; control how slow hashing is. More rounds = more secure but slower. Default is 12.</p>
      <CodeBlock title="config/hashing.php" code={codes[3]} />
      <CodeBlock title="Custom rounds per hash" code={codes[4]} />
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Rounds</th>
              <th>Speed</th>
              <th>Use case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10</td>
              <td>~65ms</td>
              <td>Testing / development</td>
            </tr>
            <tr>
              <td>12</td>
              <td>~250ms</td>
              <td>Default — good balance</td>
            </tr>
            <tr>
              <td>14</td>
              <td>~1s</td>
              <td>High security applications</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>3. Argon2 (Alternative)</h2>
      <p>
        Argon2 is a newer algorithm that won the Password Hashing Competition. It&apos;s more resistant to GPU-based
        attacks.
      </p>
      <CodeBlock title="config/hashing.php" code={codes[5]} />
      <CodeBlock title="Usage (same API!)" code={codes[6]} />

      <h2>4. Auto-Rehashing</h2>
      <p>
        If you change your hashing configuration (e.g., increase rounds), old hashes still work. Laravel can
        automatically rehash on login:
      </p>
      <CodeBlock title="Check if rehash is needed" code={codes[7]} />
      <CodeBlock title="Common pattern in login" code={codes[8]} />

      <h2>5. Common Patterns</h2>
      <CodeBlock title="Registration" code={codes[9]} />
      <CodeBlock title="Change Password" code={codes[10]} />
      <CodeBlock title="Auto-hash with Eloquent mutator" code={codes[11]} />

      <ArticleSummary>
        <ul>
          <li>
            <strong>One-way</strong> — hashes cannot be reversed (unlike encryption)
          </li>
          <li>
            <strong>Hash::make()</strong> — create a hash from a password
          </li>
          <li>
            <strong>Hash::check()</strong> — verify a password matches a hash
          </li>
          <li>
            <strong>Bcrypt</strong> — default, 12 rounds, good for most apps
          </li>
          <li>
            <strong>Argon2</strong> — alternative, more resistant to GPU attacks
          </li>
          <li>
            <strong>needsRehash()</strong> — auto-upgrade hashes when config changes
          </li>
        </ul>
      </ArticleSummary>
    </Article>
  )
}
