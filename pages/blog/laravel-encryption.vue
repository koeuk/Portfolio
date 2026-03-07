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
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.encryption.title') }}</h1>
        <p class="text-gray-500 dark:text-gray-400">Nov 25, 2025</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" v-html="t('blog.laravel.encryption.intro')">
          </p>
        </section>

        <!-- Encryption vs Hashing -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.encryption.vsHashingTitle') }}</h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold"></th>
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">{{ t('blog.laravel.encryption.thEncryption') }}</th>
                  <th class="py-3 text-primary dark:text-white font-semibold">{{ t('blog.laravel.encryption.thHashing') }}</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 dark:text-gray-300">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-medium">{{ t('blog.laravel.encryption.direction') }}</td>
                  <td class="py-3 pr-4">{{ t('blog.laravel.encryption.directionEncrypt') }}</td>
                  <td class="py-3">{{ t('blog.laravel.encryption.directionHash') }}</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-medium">{{ t('blog.laravel.encryption.useFor') }}</td>
                  <td class="py-3 pr-4">{{ t('blog.laravel.encryption.useForEncrypt') }}</td>
                  <td class="py-3">{{ t('blog.laravel.encryption.useForHash') }}</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4 font-medium">{{ t('blog.laravel.encryption.example') }}</td>
                  <td class="py-3 pr-4">{{ t('blog.laravel.encryption.exampleEncrypt') }}</td>
                  <td class="py-3">{{ t('blog.laravel.encryption.exampleHash') }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- APP_KEY -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.encryption.appKeyTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.laravel.encryption.appKeyDesc')">
          </p>
          <CodeBlock
            title="Terminal" :code="codes[0]" />
          <CodeBlock class="mt-4"
            title=".env" :code="codes[1]" />
          <div class="warning-box mt-4" v-html="t('blog.laravel.encryption.warning')">
          </div>
        </section>

        <!-- Basic Usage -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.encryption.encryptDecryptTitle') }}</h2>
          <CodeBlock
            :title="t('blog.laravel.encryption.codeBasicEncryption')" :code="codes[2]" />
          <CodeBlock class="mt-4"
            :title="t('blog.laravel.encryption.codeEncryptAny')" :code="codes[3]" />
        </section>

        <!-- Error Handling -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.encryption.errorTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.laravel.encryption.errorDesc')">
          </p>
          <CodeBlock
            :title="t('blog.laravel.encryption.codeSafeDecryption')" :code="codes[4]" />
        </section>

        <!-- Encrypted Casts -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.encryption.autoEncryptTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.laravel.encryption.autoEncryptDesc')">
          </p>
          <CodeBlock
            title="app/Models/User.php" :code="codes[5]" />
          <CodeBlock class="mt-4"
            :title="t('blog.laravel.encryption.codeAutoUsage')" :code="codes[6]" />
          <div class="tip-box mt-4" v-html="t('blog.laravel.encryption.tip')">
          </div>
        </section>

        <!-- Practical Example -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.encryption.practicalTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.laravel.encryption.practicalDesc') }}
          </p>
          <CodeBlock
            :title="t('blog.laravel.encryption.codeMigration')" :code="codes[7]" />
          <CodeBlock class="mt-4"
            title="app/Models/Integration.php" :code="codes[8]" />
        </section>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.encryption.summary1')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.encryption.summary2')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.encryption.summary3')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.encryption.summary4')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.laravel.encryption.summary5')"></span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({ title: 'Laravel Encryption - Koeuk Dev' })

const codes = [
  `# Generate a new app key
php artisan key:generate`,
  `APP_KEY=base64:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
  `use Illuminate\\Support\\Facades\\Crypt;

// Encrypt a value
$encrypted = Crypt::encryptString('my-secret-api-key');
// Result: "eyJpdiI6IkpRb0xLT..." (long scrambled string)

// Decrypt it back
$decrypted = Crypt::decryptString($encrypted);
// Result: "my-secret-api-key"`,
  `use Illuminate\\Support\\Facades\\Crypt;

// Encrypt arrays, numbers, objects — anything serializable
$encrypted = Crypt::encrypt(['key' => 'value', 'secret' => true]);
$decrypted = Crypt::decrypt($encrypted);
// Result: ['key' => 'value', 'secret' => true]

// Using the helper function
$encrypted = encrypt('my secret');
$decrypted = decrypt($encrypted);`,
  `use Illuminate\\Contracts\\Encryption\\DecryptException;
use Illuminate\\Support\\Facades\\Crypt;

try {
    $decrypted = Crypt::decryptString($encryptedValue);
} catch (DecryptException $e) {
    // Handle the error — data is corrupted or key changed
    return response()->json(['error' => 'Unable to decrypt data'], 500);
}`,
  `class User extends Model
{
    protected $casts = [
        'ssn'            => 'encrypted',         // Auto encrypt string
        'secret_data'    => 'encrypted:array',    // Auto encrypt array
        'api_key'        => 'encrypted',
    ];
}`,
  `// Saving — automatically encrypted before storing in DB
$user = User::create([
    'name'    => 'John',
    'ssn'     => '123-45-6789',  // Stored encrypted in database
    'api_key' => 'sk-abc123',    // Stored encrypted in database
]);

// Reading — automatically decrypted when accessed
echo $user->ssn;      // "123-45-6789" (readable)
echo $user->api_key;  // "sk-abc123" (readable)

// In database, it looks like:
// ssn: "eyJpdiI6IkxRb0xLT0..." (encrypted gibberish)`,
  `Schema::create('integrations', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained();
    $table->string('provider');        // "stripe", "github"
    $table->text('access_token');      // Will be encrypted
    $table->text('refresh_token');     // Will be encrypted
    $table->timestamps();
});`,
  `class Integration extends Model
{
    protected $fillable = ['user_id', 'provider', 'access_token', 'refresh_token'];

    protected $casts = [
        'access_token'  => 'encrypted',
        'refresh_token' => 'encrypted',
    ];
}

// Save — tokens are auto-encrypted
Integration::create([
    'user_id'       => auth()->id(),
    'provider'      => 'stripe',
    'access_token'  => 'sk_live_abc123xyz',   // Encrypted in DB
    'refresh_token' => 'rt_live_def456uvw',   // Encrypted in DB
]);

// Read — tokens are auto-decrypted
$integration = Integration::where('provider', 'stripe')->first();
echo $integration->access_token; // "sk_live_abc123xyz" (readable)`,
]
</script>

<style scoped>
.inline-code { @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-red-500 dark:text-red-400; }
.tip-box { @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300; }
.warning-box { @apply p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-sm text-red-700 dark:text-red-300; }
</style>
