import { Article } from '@/components/ui/Article'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Summary } from './Summary'

export const metadata = {
  title: 'Laravel Hashing | Koeuk Dev',
  description:
    'Hashing is a one-way process that turns a password (or any data) into a fixed-length scrambled string.',
}

// @@CODES@@

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

      <Summary>
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
      </Summary>
    </Article>
  )
}
