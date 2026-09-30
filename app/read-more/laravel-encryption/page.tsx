import { Article } from '@/components/ui/Article'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Summary } from './Summary'

export const metadata = {
  title: 'Laravel Encryption | Koeuk Dev',
  description: 'Encryption turns readable data into scrambled text that can only be read back with a secret key.',
}

// @@CODES@@

export default function LaravelEncryptionPage() {
  return (
    <Article title="Laravel Encryption" date="Nov 25, 2025" tags={['Laravel', 'PHP']} backHref="/about-me/my-info?section=rean">
      <p>
        Encryption turns readable data into scrambled text that can only be read back with a secret key. Laravel uses{' '}
        <strong>AES-256-CBC</strong> encryption — one of the strongest encryption standards. It&apos;s two-way: you can
        encrypt data and later decrypt it back to the original value.
      </p>

      <h2>Encryption vs Hashing</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Encryption</th>
            <th>Hashing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Direction</td>
            <td>Two-way (encrypt &amp; decrypt)</td>
            <td>One-way (cannot reverse)</td>
          </tr>
          <tr>
            <td>Use for</td>
            <td>Data you need to read back (API keys, personal data)</td>
            <td>Data you never need to read (passwords)</td>
          </tr>
          <tr>
            <td>Example</td>
            <td>&quot;hello&quot; → &quot;eyJpdiI6...&quot; → &quot;hello&quot;</td>
            <td>&quot;hello&quot; → &quot;$2y$12$...&quot; (cannot get &quot;hello&quot; back)</td>
          </tr>
        </tbody>
      </table>

      <h2>1. The Encryption Key (APP_KEY)</h2>
      <p>
        Laravel uses the <code>APP_KEY</code> in your <code>.env</code> file as the encryption key. This is generated
        when you create a Laravel project.
      </p>
      <CodeBlock title="Terminal" code={codes[0]} />
      <CodeBlock title=".env" code={codes[1]} />
      <blockquote>
        <strong>Warning:</strong> Never share or expose your APP_KEY. If someone gets it, they can decrypt all your
        encrypted data. If you change it, all previously encrypted data becomes unreadable.
      </blockquote>

      <h2>2. Encrypting &amp; Decrypting</h2>
      <CodeBlock title="Basic Encryption" code={codes[2]} />
      <CodeBlock title="Encrypt any data type (not just strings)" code={codes[3]} />

      <h2>3. Handling Decryption Errors</h2>
      <p>
        If decryption fails (wrong key, corrupted data), Laravel throws a <code>DecryptException</code>. Always handle
        this:
      </p>
      <CodeBlock title="Safe decryption" code={codes[4]} />

      <h2>4. Auto-Encrypt Model Fields</h2>
      <p>
        Use Eloquent&apos;s <code>encrypted</code> cast to automatically encrypt/decrypt fields when saving/reading from
        the database:
      </p>
      <CodeBlock title="app/Models/User.php" code={codes[5]} />
      <CodeBlock title="Usage — automatic, no extra code needed" code={codes[6]} />
      <blockquote>
        <strong>Best practice:</strong> Use encrypted casts for sensitive data like SSNs, API keys, personal medical
        data, payment info — anything you need to store but must protect.
      </blockquote>

      <h2>5. Practical Example</h2>
      <p>Storing third-party API credentials securely:</p>
      <CodeBlock title="Migration" code={codes[7]} />
      <CodeBlock title="app/Models/Integration.php" code={codes[8]} />

      <Summary>
        <ul>
          <li>
            <strong>AES-256-CBC</strong> — Laravel uses strong encryption by default
          </li>
          <li>
            <strong>APP_KEY</strong> — the secret key that encrypts everything
          </li>
          <li>
            <strong>Crypt facade</strong> — encrypt() / decrypt() for manual use
          </li>
          <li>
            <strong>Encrypted casts</strong> — auto-encrypt model fields in database
          </li>
          <li>
            <strong>Two-way</strong> — use for data you need to read back (not passwords)
          </li>
        </ul>
      </Summary>
    </Article>
  )
}
