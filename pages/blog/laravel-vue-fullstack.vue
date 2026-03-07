<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <!-- Back button -->
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('blog.backToBlog') }}
      </NuxtLink>

      <!-- Header -->
      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs rounded-full font-medium">Laravel</span>
          <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full font-medium">Vue</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          Full-Stack App with Laravel &amp; Vue
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Dec 20, 2025</p>
      </div>

      <!-- Content -->
      <article class="prose-content">
        <!-- 1. Introduction -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">1. Introduction — Why Laravel + Vue?</h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Laravel and Vue.js are one of the most popular full-stack combinations in modern web development. Laravel provides a robust backend framework with elegant syntax, built-in authentication, an ORM (Eloquent), and powerful routing. Vue.js complements it perfectly as a reactive, component-based frontend framework.
            </p>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Together, they allow you to build single-page applications (SPAs) with a clean API-driven architecture. In this guide, we will walk through building a complete full-stack CRUD application from scratch, covering everything from project setup to deployment.
            </p>
          </div>
        </section>

        <!-- 2. Project Setup -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">2. Project Setup (Laravel Backend + Vue Frontend via Vite)</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              First, create a new Laravel project and then set up Vue.js as the frontend using Vite, which is the default bundler in modern Laravel.
            </p>
            <CodeBlock title="Terminal — Laravel Setup" :code="codes[0]" />
            <p class="text-gray-600 dark:text-gray-300 mt-4 mb-4">
              Next, install Vue and the Vite plugin for Vue inside your Laravel project.
            </p>
            <CodeBlock title="Terminal — Vue + Vite Setup" :code="codes[1]" />
            <p class="text-gray-600 dark:text-gray-300 mt-4 mb-4">
              Configure Vite to handle Vue single-file components by updating the Vite config.
            </p>
            <CodeBlock title="vite.config.js" :code="codes[2]" />
          </div>
        </section>

        <!-- 3. Setting Up Laravel API Routes -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">3. Setting Up Laravel API Routes</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Laravel provides a dedicated file for API routes. All routes defined in <code class="inline-code">routes/api.php</code> are automatically prefixed with <code class="inline-code">/api</code>. Define your resource routes here so the Vue frontend can communicate with the backend via RESTful endpoints.
            </p>
            <CodeBlock title="routes/api.php" :code="codes[3]" />
          </div>
        </section>

        <!-- 4. Creating a RESTful Controller -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">4. Creating a RESTful Controller</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Generate a resource controller that includes all CRUD methods. The <code class="inline-code">--api</code> flag creates a controller without the <code class="inline-code">create</code> and <code class="inline-code">edit</code> methods since those are only needed for server-rendered forms.
            </p>
            <CodeBlock title="Terminal" :code="codes[4]" />
            <p class="text-gray-600 dark:text-gray-300 mt-4 mb-4">
              Implement the controller with JSON responses for the API.
            </p>
            <CodeBlock title="app/Http/Controllers/Api/TaskController.php" :code="codes[5]" />
          </div>
        </section>

        <!-- 5. Creating a Model and Migration -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">5. Creating a Model and Migration</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Generate the Task model along with a migration file. The migration defines the database schema for the tasks table.
            </p>
            <CodeBlock title="Terminal" :code="codes[6]" />
            <CodeBlock class="mt-4" title="database/migrations/xxxx_create_tasks_table.php" :code="codes[7]" />
            <p class="text-gray-600 dark:text-gray-300 mt-4 mb-4">
              Define the fillable fields on the model and run the migration.
            </p>
            <CodeBlock title="app/Models/Task.php" :code="codes[8]" />
            <CodeBlock class="mt-4" title="Terminal" :code="codes[9]" />
          </div>
        </section>

        <!-- 6. CORS Configuration -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">6. CORS Configuration</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              If your Vue frontend runs on a different port or domain than your Laravel backend, you need to configure Cross-Origin Resource Sharing (CORS). Laravel includes a CORS config file out of the box.
            </p>
            <CodeBlock title="config/cors.php" :code="codes[10]" />
            <p class="text-gray-600 dark:text-gray-300 mt-4">
              During local development with Vite, your Vue app typically runs on <code class="inline-code">http://localhost:5173</code> while Laravel serves on <code class="inline-code">http://localhost:8000</code>. The above configuration allows all origins in development. For production, you should restrict <code class="inline-code">allowed_origins</code> to your actual domain.
            </p>
          </div>
        </section>

        <!-- 7. Vue Frontend Setup -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">7. Vue Frontend Setup (with Axios)</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Install Axios for making HTTP requests to the Laravel API. Set up a base API client that you can reuse across all your Vue components.
            </p>
            <CodeBlock title="Terminal" :code="codes[11]" />
            <CodeBlock class="mt-4" title="resources/js/api/axios.js" :code="codes[12]" />
            <p class="text-gray-600 dark:text-gray-300 mt-4 mb-4">
              Set up the Vue app entry point and mount it to the DOM.
            </p>
            <CodeBlock title="resources/js/app.js" :code="codes[13]" />
          </div>
        </section>

        <!-- 8. Creating Vue Components to Consume API -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">8. Creating Vue Components to Consume API</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Create a TaskList component that fetches tasks from the Laravel API and displays them. This component uses the Composition API with <code class="inline-code">&lt;script setup&gt;</code> syntax.
            </p>
            <CodeBlock title="resources/js/components/TaskList.vue" :code="codes[14]" />
          </div>
        </section>

        <!-- 9. CRUD Operations -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">9. CRUD Operations (Create, Read, Update, Delete)</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Build a complete task manager component that supports all CRUD operations. This component includes a form for creating and editing tasks, and action buttons for updating and deleting them.
            </p>
            <CodeBlock title="resources/js/components/TaskManager.vue" :code="codes[15]" />
          </div>
        </section>

        <!-- 10. Authentication with Sanctum -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">10. Authentication with Sanctum</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Laravel Sanctum provides a lightweight authentication system for SPAs. It uses cookie-based session authentication for same-domain apps and token-based authentication for third-party APIs.
            </p>
            <CodeBlock title="Terminal — Install Sanctum" :code="codes[16]" />
            <p class="text-gray-600 dark:text-gray-300 mt-4 mb-4">
              Create an authentication controller to handle login and return the user data.
            </p>
            <CodeBlock title="app/Http/Controllers/Api/AuthController.php" :code="codes[17]" />
            <p class="text-gray-600 dark:text-gray-300 mt-4 mb-4">
              Add authentication routes and protect your API routes with the Sanctum middleware.
            </p>
            <CodeBlock title="routes/api.php (updated)" :code="codes[18]" />
            <p class="text-gray-600 dark:text-gray-300 mt-4 mb-4">
              On the Vue side, handle login and store the token for subsequent requests.
            </p>
            <CodeBlock title="resources/js/composables/useAuth.js" :code="codes[19]" />
          </div>
        </section>

        <!-- 11. Deployment Tips -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">11. Deployment Tips</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              When deploying your full-stack Laravel + Vue application, follow these steps to ensure everything runs smoothly in production.
            </p>
            <CodeBlock title="Terminal — Production Build" :code="codes[20]" />
            <ul class="space-y-2 text-gray-600 dark:text-gray-300 mt-4">
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-1">&#10003;</span>
                <span>Set <code class="inline-code">APP_ENV=production</code> and <code class="inline-code">APP_DEBUG=false</code> in your <code class="inline-code">.env</code> file.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-1">&#10003;</span>
                <span>Run <code class="inline-code">php artisan config:cache</code> and <code class="inline-code">php artisan route:cache</code> for performance.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-1">&#10003;</span>
                <span>Use a process manager like Supervisor for queue workers.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-1">&#10003;</span>
                <span>Configure your web server (Nginx or Apache) to point to the <code class="inline-code">public/</code> directory.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-1">&#10003;</span>
                <span>Set up SSL with Let's Encrypt for HTTPS.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-1">&#10003;</span>
                <span>Restrict CORS <code class="inline-code">allowed_origins</code> to your actual domain in production.</span>
              </li>
            </ul>
          </div>
        </section>

        <!-- Summary -->
        <section class="mb-12 qa-section">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">Summary</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            In this guide, we built a complete full-stack application using Laravel as the API backend and Vue.js as the reactive frontend. Here is what we covered:
          </p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>Set up a Laravel project with Vue.js via Vite for modern frontend tooling.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>Created RESTful API routes and a resource controller for CRUD operations.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>Defined an Eloquent model and database migration for the tasks table.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>Configured CORS to allow the Vue frontend to communicate with the Laravel API.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>Built Vue components using the Composition API to consume the API with Axios.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>Implemented full CRUD operations (Create, Read, Update, Delete) in a TaskManager component.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>Added authentication using Laravel Sanctum with token-based API protection.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>Covered deployment best practices for production environments.</span>
            </li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Full-Stack App with Laravel & Vue - Koeuk Dev'
})
const { t } = useI18n()

const codes = [
  `# Create a new Laravel project
composer create-project laravel/laravel laravel-vue-app

# Navigate into the project
cd laravel-vue-app

# Start the Laravel development server
php artisan serve`,
  `# Install Vue 3 and the Vite plugin
npm install vue@latest
npm install -D @vitejs/plugin-vue`,
  `import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
});`,
  `use Illuminate\\Support\\Facades\\Route;
use App\\Http\\Controllers\\Api\\TaskController;

Route::apiResource('tasks', TaskController::class);`,
  `php artisan make:controller Api/TaskController --api --model=Task`,
  `namespace App\\Http\\Controllers\\Api;

use App\\Http\\Controllers\\Controller;
use App\\Models\\Task;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\JsonResponse;

class TaskController extends Controller
{
    public function index(): JsonResponse
    {
        $tasks = Task::latest()->get();
        return response()->json($tasks);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'completed'   => 'boolean',
        ]);

        $task = Task::create($validated);
        return response()->json($task, 201);
    }

    public function show(Task $task): JsonResponse
    {
        return response()->json($task);
    }

    public function update(Request $request, Task $task): JsonResponse
    {
        $validated = $request->validate([
            'title'       => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'completed'   => 'boolean',
        ]);

        $task->update($validated);
        return response()->json($task);
    }

    public function destroy(Task $task): JsonResponse
    {
        $task->delete();
        return response()->json(null, 204);
    }
}`,
  `# Generate model with migration
php artisan make:model Task -m`,
  `use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->boolean('completed')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};`,
  `namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'completed',
    ];

    protected $casts = [
        'completed' => 'boolean',
    ];
}`,
  `# Run the migration
php artisan migrate`,
  `return [
    'paths' => ['api/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];`,
  `npm install axios`,
  `import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Add auth token to requests if available
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
        config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
});

export default apiClient;`,
  `import { createApp } from 'vue';
import App from './components/App.vue';

const app = createApp(App);
app.mount('#app');`,
  `<template>
  <div>
    <h2>Task List</h2>
    <p v-if="loading">Loading tasks...</p>
    <ul v-else>
      <li v-for="task in tasks" :key="task.id">
        <span :class="{ 'line-through': task.completed }">
          {{ task.title }}
        </span>
        <span v-if="task.description"> — {{ task.description }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import apiClient from '../api/axios';

const tasks = ref([]);
const loading = ref(true);

const fetchTasks = async () => {
  try {
    const response = await apiClient.get('/tasks');
    tasks.value = response.data;
  } catch (error) {
    console.error('Failed to fetch tasks:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchTasks);
<\/script>`,
  `<template>
  <div class="task-manager">
    <h2>Task Manager</h2>

    <!-- Create / Edit Form -->
    <form @submit.prevent="handleSubmit">
      <input
        v-model="form.title"
        placeholder="Task title"
        required
      />
      <input
        v-model="form.description"
        placeholder="Description (optional)"
      />
      <button type="submit">
        {{ editing ? 'Update' : 'Create' }} Task
      </button>
      <button v-if="editing" type="button" @click="cancelEdit">
        Cancel
      </button>
    </form>

    <!-- Task List -->
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input
          type="checkbox"
          :checked="task.completed"
          @change="toggleComplete(task)"
        />
        <span :class="{ 'line-through': task.completed }">
          {{ task.title }}
        </span>
        <button @click="editTask(task)">Edit</button>
        <button @click="deleteTask(task.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import apiClient from '../api/axios';

const tasks = ref([]);
const editing = ref(false);
const editingId = ref(null);
const form = reactive({ title: '', description: '' });

const fetchTasks = async () => {
  const res = await apiClient.get('/tasks');
  tasks.value = res.data;
};

const handleSubmit = async () => {
  if (editing.value) {
    await apiClient.put(\`/tasks/\${editingId.value}\`, form);
  } else {
    await apiClient.post('/tasks', form);
  }
  form.title = '';
  form.description = '';
  editing.value = false;
  editingId.value = null;
  await fetchTasks();
};

const editTask = (task) => {
  form.title = task.title;
  form.description = task.description || '';
  editing.value = true;
  editingId.value = task.id;
};

const cancelEdit = () => {
  form.title = '';
  form.description = '';
  editing.value = false;
  editingId.value = null;
};

const toggleComplete = async (task) => {
  await apiClient.put(\`/tasks/\${task.id}\`, {
    completed: !task.completed,
  });
  await fetchTasks();
};

const deleteTask = async (id) => {
  await apiClient.delete(\`/tasks/\${id}\`);
  await fetchTasks();
};

onMounted(fetchTasks);
<\/script>`,
  `# Install Sanctum
php artisan install:api

# Run migrations (creates personal_access_tokens table)
php artisan migrate`,
  `namespace App\\Http\\Controllers\\Api;

use App\\Http\\Controllers\\Controller;
use App\\Models\\User;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\JsonResponse;
use Illuminate\\Support\\Facades\\Hash;
use Illuminate\\Validation\\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'user'  => $user,
            'token' => $token,
        ]);
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    }

    public function user(Request $request): JsonResponse
    {
        return response()->json($request->user());
    }
}`,
  `use Illuminate\\Support\\Facades\\Route;
use App\\Http\\Controllers\\Api\\TaskController;
use App\\Http\\Controllers\\Api\\AuthController;

// Public routes
Route::post('/login', [AuthController::class, 'login']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    Route::apiResource('tasks', TaskController::class);
});`,
  `import { ref } from 'vue';
import apiClient from '../api/axios';

const user = ref(null);
const token = ref(localStorage.getItem('auth_token'));

export function useAuth() {
    const login = async (email, password) => {
        const res = await apiClient.post('/login', { email, password });
        token.value = res.data.token;
        user.value = res.data.user;
        localStorage.setItem('auth_token', token.value);
    };

    const logout = async () => {
        await apiClient.post('/logout');
        token.value = null;
        user.value = null;
        localStorage.removeItem('auth_token');
    };

    const fetchUser = async () => {
        try {
            const res = await apiClient.get('/user');
            user.value = res.data;
        } catch {
            token.value = null;
            localStorage.removeItem('auth_token');
        }
    };

    const isAuthenticated = () => !!token.value;

    return { user, token, login, logout, fetchUser, isAuthenticated };
}`,
  `# Build frontend assets for production
npm run build

# Optimize Laravel for production
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan optimize

# Run migrations on the server
php artisan migrate --force`,
]
</script>

<style scoped>
.qa-section { @apply mb-8 p-6 rounded-xl bg-gray-50 dark:bg-primary-light/50 border border-gray-200 dark:border-gray-700; }

.inline-code {
  @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-red-500 dark:text-red-400;
}
</style>
