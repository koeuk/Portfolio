import { Article } from '@/components/ui/Article'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Summary } from './Summary'

export const metadata = {
  title: 'Laravel Authentication | Koeuk Dev',
  description: 'Authentication is how your application knows who is using it.',
}

// @@CODES@@

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

      <Summary>
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
      </Summary>
    </Article>
  )
}
