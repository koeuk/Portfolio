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
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">Laravel Hashing</h1>
        <p class="text-gray-500 dark:text-gray-400">Nov 22, 2025</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Hashing is a <strong>one-way</strong> process that turns a password (or any data) into a fixed-length scrambled string. Unlike encryption, you <strong>cannot reverse</strong> a hash — you can only check if a given value matches the hash. This is exactly what you want for passwords: store the hash, and verify against it on login.
          </p>
        </section>

        <!-- Why Hashing -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">Why Hash Passwords?</h2>
          <CodeBlock
            title="Never do this" :code="codes[0]" />
          <CodeBlock class="mt-4"
            title="Always do this" :code="codes[1]" />
          <p class="text-gray-600 dark:text-gray-300 mt-4">
            If your database is ever compromised, hackers get useless hash strings instead of real passwords.
          </p>
        </section>

        <!-- Bcrypt -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">1. Bcrypt (Default)</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Laravel uses <strong>Bcrypt</strong> by default. It's slow on purpose — this makes brute-force attacks impractical.
          </p>
          <CodeBlock
            title="Using Hash facade" :code="codes[2]" />
          <div class="tip-box mt-4">
            <strong>Why different hashes?</strong> Bcrypt adds a random "salt" each time. This prevents attackers from using pre-computed hash tables (rainbow tables). Both hashes still verify correctly against the original password.
          </div>
        </section>

        <!-- Bcrypt Rounds -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">2. Configuring Bcrypt Rounds</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            "Rounds" control how slow hashing is. More rounds = more secure but slower. Default is 12.
          </p>
          <CodeBlock
            title="config/hashing.php" :code="codes[3]" />
          <CodeBlock class="mt-4"
            title="Custom rounds per hash" :code="codes[4]" />
          <div class="overflow-x-auto mt-4">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">Rounds</th>
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">Speed</th>
                  <th class="py-3 text-primary dark:text-white font-semibold">Use case</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 dark:text-gray-300">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">10</td>
                  <td class="py-3 pr-4">~65ms</td>
                  <td class="py-3">Testing / development</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">12</td>
                  <td class="py-3 pr-4">~250ms</td>
                  <td class="py-3">Default — good balance</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4">14</td>
                  <td class="py-3 pr-4">~1s</td>
                  <td class="py-3">High security applications</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Argon2 -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">3. Argon2 (Alternative)</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Argon2 is a newer algorithm that won the Password Hashing Competition. It's more resistant to GPU-based attacks.
          </p>
          <CodeBlock
            title="config/hashing.php" :code="codes[5]" />
          <CodeBlock class="mt-4"
            title="Usage (same API!)" :code="codes[6]" />
        </section>

        <!-- Rehashing -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">4. Auto-Rehashing</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            If you change your hashing configuration (e.g., increase rounds), old hashes still work. Laravel can automatically rehash on login:
          </p>
          <CodeBlock
            title="Check if rehash is needed" :code="codes[7]" />
          <CodeBlock class="mt-4"
            title="Common pattern in login" :code="codes[8]" />
        </section>

        <!-- Practical Usage -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">5. Common Patterns</h2>
          <CodeBlock
            title="Registration" :code="codes[9]" />
          <CodeBlock class="mt-4"
            title="Change Password" :code="codes[10]" />
          <CodeBlock class="mt-4"
            title="Auto-hash with Eloquent mutator" :code="codes[11]" />
        </section>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>One-way</strong> — hashes cannot be reversed (unlike encryption)</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Hash::make()</strong> — create a hash from a password</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Hash::check()</strong> — verify a password matches a hash</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Bcrypt</strong> — default, 12 rounds, good for most apps</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Argon2</strong> — alternative, more resistant to GPU attacks</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>needsRehash()</strong> — auto-upgrade hashes when config changes</span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({ title: 'Laravel Hashing - Koeuk Dev' })

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
</script>

<style scoped>
.inline-code { @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-red-500 dark:text-red-400; }
.tip-box { @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300; }
</style>
