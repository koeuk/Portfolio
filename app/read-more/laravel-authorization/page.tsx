import { Article } from '@/components/ui/Article'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { ArticleSummary } from '@/components/ui/ArticleSummary'

export const metadata = {
  title: 'Laravel Authorization - Koeuk Dev',
  description: 'Authentication answers "Who are you?" — Authorization answers "What are you allowed to do?" Laravel provides two ways to authorize actions: Gates (simple closures) and Policies (organized by model).',
}

const codes = [
  `use Illuminate\\Support\\Facades\\Gate;
use App\\Models\\User;
use App\\Models\\Post;

public function boot(): void
{
    // Simple gate: only admins can access
    Gate::define('access-dashboard', function (User $user) {
        return $user->role === 'admin';
    });

    // Gate with model: only the author can update a post
    Gate::define('update-post', function (User $user, Post $post) {
        return $user->id === $post->user_id;
    });

    // Gate: admin can do everything (before hook)
    Gate::before(function (User $user, string $ability) {
        if ($user->role === 'admin') {
            return true; // Admin bypasses all gates
        }
    });
}`,
  `use Illuminate\\Support\\Facades\\Gate;

// In controller
public function edit(Post $post)
{
    // Check permission — returns 403 if denied
    Gate::authorize('update-post', $post);

    return view('posts.edit', compact('post'));
}

// Check without throwing error
if (Gate::allows('update-post', $post)) {
    // User can update
}

if (Gate::denies('update-post', $post)) {
    // User cannot update
}

// In Blade templates
@can('update-post', $post)
    <a href="/posts/{{ $post->id }}/edit">Edit</a>
@endcan

@cannot('update-post', $post)
    <p>You cannot edit this post.</p>
@endcannot`,
  `# Generate a policy for Post model
php artisan make:policy PostPolicy --model=Post`,
  `namespace App\\Policies;

use App\\Models\\Post;
use App\\Models\\User;

class PostPolicy
{
    // Can the user view any posts?
    public function viewAny(User $user): bool
    {
        return true; // Everyone can view posts list
    }

    // Can the user view this specific post?
    public function view(User $user, Post $post): bool
    {
        return true; // Everyone can view a post
    }

    // Can the user create posts?
    public function create(User $user): bool
    {
        return $user->role === 'admin' || $user->role === 'author';
    }

    // Can the user update this post?
    public function update(User $user, Post $post): bool
    {
        return $user->id === $post->user_id;
    }

    // Can the user delete this post?
    public function delete(User $user, Post $post): bool
    {
        return $user->id === $post->user_id;
    }
}`,
  `class PostController extends Controller
{
    public function index()
    {
        $this->authorize('viewAny', Post::class);
        $posts = Post::all();
        return view('posts.index', compact('posts'));
    }

    public function edit(Post $post)
    {
        // Throws 403 if user is not the author
        $this->authorize('update', $post);
        return view('posts.edit', compact('post'));
    }

    public function update(Request $request, Post $post)
    {
        $this->authorize('update', $post);

        $post->update($request->validated());
        return redirect()->route('posts.show', $post);
    }

    public function destroy(Post $post)
    {
        $this->authorize('delete', $post);

        $post->delete();
        return redirect()->route('posts.index');
    }
}`,
  `$user = Auth::user();

if ($user->can('update', $post)) {
    // User can update this post
}

if ($user->cannot('delete', $post)) {
    // User cannot delete this post
}`,
  `@can('create', App\\Models\\Post::class)
    <a href="/posts/create">Create Post</a>
@endcan

@can('update', $post)
    <a href="/posts/{{ $post->id }}/edit">Edit</a>
@endcan

@can('delete', $post)
    <form method="POST" action="/posts/{{ $post->id }}">
        @csrf
        @method('DELETE')
        <button>Delete</button>
    </form>
@endcan`,
  `// Using 'can' middleware
Route::put('/posts/{post}', [PostController::class, 'update'])
    ->middleware('can:update,post');

Route::delete('/posts/{post}', [PostController::class, 'destroy'])
    ->middleware('can:delete,post');

// For actions without model instance
Route::get('/posts/create', [PostController::class, 'create'])
    ->middleware('can:create,App\\Models\\Post');`,
  `// Add to users migration
$table->string('role')->default('user'); // user, author, admin`,
  `Gate::define('admin', fn (User $user) => $user->role === 'admin');
Gate::define('author', fn (User $user) => in_array($user->role, ['author', 'admin']));
Gate::define('manage-users', fn (User $user) => $user->role === 'admin');`,
  `// In routes
Route::middleware('can:admin')->group(function () {
    Route::get('/admin', [AdminController::class, 'index']);
    Route::resource('/users', UserController::class);
});

// In Blade
@can('admin')
    <a href="/admin">Admin Panel</a>
@endcan`,
]

export default function Page() {
  return (
    <Article title="Laravel Authorization" date="Dec 1, 2025" tags={['Laravel', 'PHP']}>
      <p>
        Authentication answers &quot;Who are you?&quot; — Authorization answers &quot;What are you allowed to do?&quot; Laravel provides two ways to authorize actions: <strong>Gates</strong> (simple closures) and <strong>Policies</strong> (organized by model). Think of Gates for quick checks and Policies for model-specific permissions.
      </p>

      <h2>1. Gates</h2>
      <p>
        Gates are simple closures that determine if a user can perform an action. Define them in <code>AppServiceProvider</code>.
      </p>
      <CodeBlock title="app/Providers/AppServiceProvider.php" code={codes[0]} />
      <CodeBlock title="Using Gates" code={codes[1]} />

      <h2>2. Policies</h2>
      <p>
        Policies organize authorization logic around a specific model. Each method in a policy corresponds to an action (view, create, update, delete).
      </p>
      <CodeBlock title="Terminal" code={codes[2]} />
      <CodeBlock title="app/Policies/PostPolicy.php" code={codes[3]} />
      <blockquote>
        <strong>Auto-discovery:</strong> Laravel automatically discovers policies if you follow naming conventions: <code>Post</code> model → <code>PostPolicy</code>. No manual registration needed.
      </blockquote>

      <h2>3. Using Policies</h2>

      <h3>In Controllers</h3>
      <CodeBlock title="app/Http/Controllers/PostController.php" code={codes[4]} />

      <h3>Via User Model</h3>
      <CodeBlock title="Using on User model" code={codes[5]} />

      <h3>In Blade Templates</h3>
      <CodeBlock title="Blade" code={codes[6]} />

      <h2>4. Authorization in Routes</h2>
      <CodeBlock title="routes/web.php" code={codes[7]} />

      <h2>5. Simple Role-Based Access</h2>
      <p>
        A practical example combining Gates for role-based access:
      </p>
      <CodeBlock title="Migration: add role to users" code={codes[8]} />
      <CodeBlock title="AppServiceProvider — define role gates" code={codes[9]} />
      <CodeBlock title="Usage" code={codes[10]} />

      <ArticleSummary>
        <ul>
          <li><strong>Gates</strong> — simple closure-based authorization checks</li>
          <li><strong>Policies</strong> — model-specific authorization organized by actions</li>
          <li><strong>$this-&gt;authorize()</strong> — check in controllers (throws 403)</li>
          <li><strong>@can / @cannot</strong> — conditional rendering in Blade</li>
          <li><strong>can: middleware</strong> — protect routes with authorization</li>
        </ul>
      </ArticleSummary>
    </Article>
  )
}
