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
          {{ t('blog.laravel.fullstack.title') }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Dec 20, 2025</p>
      </div>

      <!-- Content -->
      <article class="prose-content">
        <!-- 1. Introduction -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.fullstack.introTitle') }}</h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {{ t('blog.laravel.fullstack.introP1') }}
            </p>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ t('blog.laravel.fullstack.introP2') }}
            </p>
          </div>
        </section>

        <!-- 2. Project Setup -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.fullstack.setupTitle') }}</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ t('blog.laravel.fullstack.setupP1') }}
            </p>
            <CodeBlock :title="t('blog.laravel.fullstack.setupTerminalLaravel')" :code="codes[0]" />
            <p class="text-gray-600 dark:text-gray-300 mt-4 mb-4">
              {{ t('blog.laravel.fullstack.setupP2') }}
            </p>
            <CodeBlock :title="t('blog.laravel.fullstack.setupTerminalVite')" :code="codes[1]" />
            <p class="text-gray-600 dark:text-gray-300 mt-4 mb-4">
              {{ t('blog.laravel.fullstack.setupP3') }}
            </p>
            <CodeBlock title="vite.config.js" :code="codes[2]" />
          </div>
        </section>

        <!-- 3. Setting Up Laravel API Routes -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.fullstack.apiRoutesTitle') }}</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.laravel.fullstack.apiRoutesDesc')">
            </p>
            <CodeBlock title="routes/api.php" :code="codes[3]" />
          </div>
        </section>

        <!-- 4. Creating a RESTful Controller -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.fullstack.controllerTitle') }}</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.laravel.fullstack.controllerDesc')">
            </p>
            <CodeBlock title="Terminal" :code="codes[4]" />
            <p class="text-gray-600 dark:text-gray-300 mt-4 mb-4">
              {{ t('blog.laravel.fullstack.controllerP2') }}
            </p>
            <CodeBlock title="app/Http/Controllers/Api/TaskController.php" :code="codes[5]" />
          </div>
        </section>

        <!-- 5. Creating a Model and Migration -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.fullstack.modelTitle') }}</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ t('blog.laravel.fullstack.modelP1') }}
            </p>
            <CodeBlock title="Terminal" :code="codes[6]" />
            <CodeBlock class="mt-4" title="database/migrations/xxxx_create_tasks_table.php" :code="codes[7]" />
            <p class="text-gray-600 dark:text-gray-300 mt-4 mb-4">
              {{ t('blog.laravel.fullstack.modelP2') }}
            </p>
            <CodeBlock title="app/Models/Task.php" :code="codes[8]" />
            <CodeBlock class="mt-4" title="Terminal" :code="codes[9]" />
          </div>
        </section>

        <!-- 6. CORS Configuration -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.fullstack.corsTitle') }}</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ t('blog.laravel.fullstack.corsP1') }}
            </p>
            <CodeBlock title="config/cors.php" :code="codes[10]" />
            <p class="text-gray-600 dark:text-gray-300 mt-4" v-html="t('blog.laravel.fullstack.corsP2')">
            </p>
          </div>
        </section>

        <!-- 7. Vue Frontend Setup -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.fullstack.vueSetupTitle') }}</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ t('blog.laravel.fullstack.vueSetupP1') }}
            </p>
            <CodeBlock title="Terminal" :code="codes[11]" />
            <CodeBlock class="mt-4" title="resources/js/api/axios.js" :code="codes[12]" />
            <p class="text-gray-600 dark:text-gray-300 mt-4 mb-4">
              {{ t('blog.laravel.fullstack.vueSetupP2') }}
            </p>
            <CodeBlock title="resources/js/app.js" :code="codes[13]" />
          </div>
        </section>

        <!-- 8. Creating Vue Components to Consume API -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.fullstack.componentsTitle') }}</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.laravel.fullstack.componentsDesc')">
            </p>
            <CodeBlock title="resources/js/components/TaskList.vue" :code="codes[14]" />
          </div>
        </section>

        <!-- 9. CRUD Operations -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.fullstack.crudTitle') }}</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ t('blog.laravel.fullstack.crudDesc') }}
            </p>
            <CodeBlock title="resources/js/components/TaskManager.vue" :code="codes[15]" />
          </div>
        </section>

        <!-- 10. Authentication with Sanctum -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.fullstack.authTitle') }}</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ t('blog.laravel.fullstack.authP1') }}
            </p>
            <CodeBlock :title="t('blog.laravel.fullstack.authTerminalSanctum')" :code="codes[16]" />
            <p class="text-gray-600 dark:text-gray-300 mt-4 mb-4">
              {{ t('blog.laravel.fullstack.authP2') }}
            </p>
            <CodeBlock title="app/Http/Controllers/Api/AuthController.php" :code="codes[17]" />
            <p class="text-gray-600 dark:text-gray-300 mt-4 mb-4">
              {{ t('blog.laravel.fullstack.authP3') }}
            </p>
            <CodeBlock title="routes/api.php (updated)" :code="codes[18]" />
            <p class="text-gray-600 dark:text-gray-300 mt-4 mb-4">
              {{ t('blog.laravel.fullstack.authP4') }}
            </p>
            <CodeBlock title="resources/js/composables/useAuth.js" :code="codes[19]" />
          </div>
        </section>

        <!-- 11. Deployment Tips -->
        <section class="mb-12">
          <div class="qa-section">
            <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.laravel.fullstack.deployTitle') }}</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ t('blog.laravel.fullstack.deployDesc') }}
            </p>
            <CodeBlock :title="t('blog.laravel.fullstack.deployTerminal')" :code="codes[20]" />
            <ul class="space-y-2 text-gray-600 dark:text-gray-300 mt-4">
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-1">&#10003;</span>
                <span v-html="t('blog.laravel.fullstack.deployTip1')"></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-1">&#10003;</span>
                <span v-html="t('blog.laravel.fullstack.deployTip2')"></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-1">&#10003;</span>
                <span>{{ t('blog.laravel.fullstack.deployTip3') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-1">&#10003;</span>
                <span v-html="t('blog.laravel.fullstack.deployTip4')"></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-1">&#10003;</span>
                <span>{{ t('blog.laravel.fullstack.deployTip5') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-1">&#10003;</span>
                <span v-html="t('blog.laravel.fullstack.deployTip6')"></span>
              </li>
            </ul>
          </div>
        </section>

        <!-- Summary -->
        <section class="mb-12 qa-section">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.laravel.fullstack.summaryIntro') }}
          </p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.laravel.fullstack.sum1') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.laravel.fullstack.sum2') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.laravel.fullstack.sum3') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.laravel.fullstack.sum4') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.laravel.fullstack.sum5') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.laravel.fullstack.sum6') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.laravel.fullstack.sum7') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.laravel.fullstack.sum8') }}</span>
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
  `&lt;template&gt;
  &lt;div&gt;
    &lt;h2&gt;Task List&lt;/h2&gt;
    &lt;p v-if="loading"&gt;Loading tasks...&lt;/p&gt;
    &lt;ul v-else&gt;
      &lt;li v-for="task in tasks" :key="task.id"&gt;
        &lt;span :class="{ 'line-through': task.completed }"&gt;
          {{ task.title }}
        &lt;/span&gt;
        &lt;span v-if="task.description"&gt; — {{ task.description }}&lt;/span&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, onMounted } from 'vue';
import apiClient from '../api/axios';

const tasks = ref([]);
const loading = ref(true);

const fetchTasks = async () =&gt; {
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
&lt;/script&gt;`,
`&lt;template&gt;
  &lt;div class="task-manager"&gt;
    &lt;h2&gt;Task Manager&lt;/h2&gt;

    &lt;!-- Create / Edit Form --&gt;
    &lt;form @submit.prevent="handleSubmit"&gt;
      &lt;input
        v-model="form.title"
        placeholder="Task title"
        required
      /&gt;
      &lt;input
        v-model="form.description"
        placeholder="Description (optional)"
      /&gt;
      &lt;button type="submit"&gt;
        {{ editing ? 'Update' : 'Create' }} Task
      &lt;/button&gt;
      &lt;button v-if="editing" type="button" @click="cancelEdit"&gt;
        Cancel
      &lt;/button&gt;
    &lt;/form&gt;

    &lt;!-- Task List --&gt;
    &lt;ul&gt;
      &lt;li v-for="task in tasks" :key="task.id"&gt;
        &lt;input
          type="checkbox"
          :checked="task.completed"
          @change="toggleComplete(task)"
        /&gt;
        &lt;span :class="{ 'line-through': task.completed }"&gt;
          {{ task.title }}
        &lt;/span&gt;
        &lt;button @click="editTask(task)"&gt;Edit&lt;/button&gt;
        &lt;button @click="deleteTask(task.id)"&gt;Delete&lt;/button&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, reactive, onMounted } from 'vue';
import apiClient from '../api/axios';

const tasks = ref([]);
const editing = ref(false);
const editingId = ref(null);
const form = reactive({ title: '', description: '' });

const fetchTasks = async () =&gt; {
  const res = await apiClient.get('/tasks');
  tasks.value = res.data;
};

const handleSubmit = async () =&gt; {
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

const editTask = (task) =&gt; {
  form.title = task.title;
  form.description = task.description || '';
  editing.value = true;
  editingId.value = task.id;
};

const cancelEdit = () =&gt; {
  form.title = '';
  form.description = '';
  editing.value = false;
  editingId.value = null;
};

const toggleComplete = async (task) =&gt; {
  await apiClient.put(\`/tasks/\${task.id}\`, {
    completed: !task.completed,
  });
  await fetchTasks();
};

const deleteTask = async (id) =&gt; {
  await apiClient.delete(\`/tasks/\${id}\`);
  await fetchTasks();
};

onMounted(fetchTasks);
&lt;/script&gt;`,
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
