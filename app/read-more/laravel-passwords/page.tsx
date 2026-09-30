import { Article } from '@/components/ui/Article'
import { Card } from '@/components/ui/Card'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Summary } from './Summary'

export const metadata = {
  title: 'Laravel Password Reset | Koeuk Dev',
  description: 'Laravel provides a complete password reset system out of the box.',
}

// @@CODES@@

export default function LaravelPasswordsPage() {
  return (
    <Article
      title="Laravel Password Reset"
      date="@@DATE@@"
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

      <Summary>
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
      </Summary>
    </Article>
  )
}
