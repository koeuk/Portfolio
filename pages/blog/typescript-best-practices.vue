<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('blog.backToBlog') }}
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium">TypeScript</span>
          <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-xs rounded-full font-medium">JavaScript</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          {{ t('blog.ts.bestPractices.title') }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Jan 5, 2026</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ t('blog.ts.bestPractices.intro') }}
          </p>
        </section>

        <!-- 1. Use strict TypeScript Configuration -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.ts.bestPractices.s1Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.ts.bestPractices.s1Desc')"></p>
          <CodeBlock :title="t('blog.ts.bestPractices.s1Code')" :code="codes[0]" />
        </div>

        <!-- 2. Prefer Interfaces over Types for Object Shapes -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.ts.bestPractices.s2Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.ts.bestPractices.s2Desc')"></p>
          <CodeBlock :title="t('blog.ts.bestPractices.s2Code')" :code="codes[1]" />
        </div>

        <!-- 3. Use Type Inference -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.ts.bestPractices.s3Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.ts.bestPractices.s3Desc') }}</p>
          <CodeBlock :title="t('blog.ts.bestPractices.s3Code')" :code="codes[2]" />
        </div>

        <!-- 4. Use Discriminated Unions for State -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.ts.bestPractices.s4Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.ts.bestPractices.s4Desc')"></p>
          <CodeBlock :title="t('blog.ts.bestPractices.s4Code')" :code="codes[3]" />
        </div>

        <!-- 5. Use Zod or Valibot for Runtime Validation -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.ts.bestPractices.s5Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.ts.bestPractices.s5Desc')"></p>
          <CodeBlock :title="t('blog.ts.bestPractices.s5Code')" :code="codes[4]" />
        </div>

        <!-- 6. Use const assertions -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.ts.bestPractices.s6Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.ts.bestPractices.s6Desc')"></p>
          <CodeBlock :title="t('blog.ts.bestPractices.s6Code')" :code="codes[5]" />
        </div>

        <!-- 7. Generics -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.ts.bestPractices.s7Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.ts.bestPractices.s7Desc')"></p>
          <CodeBlock :title="t('blog.ts.bestPractices.s7Code')" :code="codes[6]" />
        </div>

        <!-- 8. Use Utility Types -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.ts.bestPractices.s8Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.ts.bestPractices.s8Desc') }}</p>
          <CodeBlock :title="t('blog.ts.bestPractices.s8Code')" :code="codes[7]" />
        </div>

        <!-- 9. Narrow Types with Type Guards -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.ts.bestPractices.s9Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.ts.bestPractices.s9Desc')"></p>
          <CodeBlock :title="t('blog.ts.bestPractices.s9Code')" :code="codes[8]" />
        </div>

        <!-- 10. Use Template Literal Types -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.ts.bestPractices.s10Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.ts.bestPractices.s10Desc') }}</p>
          <CodeBlock :title="t('blog.ts.bestPractices.s10Code')" :code="codes[9]" />
        </div>

        <!-- 11. Avoid any — Use unknown Instead -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3" v-html="t('blog.ts.bestPractices.s11Title')"></h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.ts.bestPractices.s11Desc')"></p>
          <CodeBlock :title="t('blog.ts.bestPractices.s11Code')" :code="codes[10]" />
        </div>

        <!-- 12. Use Enums Carefully -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.ts.bestPractices.s12Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.ts.bestPractices.s12Desc')"></p>
          <CodeBlock :title="t('blog.ts.bestPractices.s12Code')" :code="codes[11]" />
        </div>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.ts.bestPractices.sum1')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.ts.bestPractices.sum2')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span>{{ t('blog.ts.bestPractices.sum3') }}</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span>{{ t('blog.ts.bestPractices.sum4') }}</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span>{{ t('blog.ts.bestPractices.sum5') }}</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.ts.bestPractices.sum6')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span>{{ t('blog.ts.bestPractices.sum7') }}</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.ts.bestPractices.sum8')"></span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({ title: 'TypeScript Best Practices for 2026 - Koeuk Dev' })

const codes = [
  // 0 - Strict Configuration
  `// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}

// With noUncheckedIndexedAccess:
const items = ["a", "b", "c"];
const first = items[0]; // type: string | undefined (not just string!)

// Forces you to handle the undefined case
if (first !== undefined) {
  console.log(first.toUpperCase()); // Safe!
}`,

  // 1 - Interfaces vs Types
  `// Prefer interface for object shapes
interface User {
  name: string;
  email: string;
  age: number;
}

// Interfaces support extends (cleaner than intersections)
interface Admin extends User {
  permissions: string[];
}

// Interfaces support declaration merging
interface User {
  avatar?: string; // Merged into the original User
}

// Use type for unions, intersections, and mapped types
type ID = string | number;
type Status = "active" | "inactive" | "pending";
type ReadonlyUser = Readonly<User>;

// Use type for function signatures
type Formatter = (value: string) => string;

// Use type for tuples
type Coordinate = [number, number];`,

  // 2 - Type Inference
  `// Bad: redundant annotations
const name: string = "Alice";
const age: number = 30;
const isActive: boolean = true;
const items: string[] = ["a", "b", "c"];

// Good: let TypeScript infer
const name = "Alice";      // inferred as string
const age = 30;            // inferred as number
const isActive = true;     // inferred as boolean
const items = ["a", "b"];  // inferred as string[]

// DO annotate function parameters
function greet(name: string, age: number) {
  return \`Hello, \${name}! You are \${age} years old.\`;
  // Return type is inferred as string — no need to annotate
}

// DO annotate public API / exported functions
export function fetchUser(id: string): Promise<User> {
  return api.get(\`/users/\${id}\`);
}

// DO annotate when inference is not what you want
const status: "active" | "inactive" = "active"; // Narrow type, not just string`,

  // 3 - Discriminated Unions
  `// Model UI states with discriminated unions
type RequestState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

function renderUI(state: RequestState<User[]>) {
  switch (state.status) {
    case "idle":
      return "Click to load";
    case "loading":
      return "Loading...";
    case "success":
      return \`Found \${state.data.length} users\`;  // data is available here
    case "error":
      return \`Error: \${state.error}\`;              // error is available here
  }
}

// Exhaustive checking — catch missing cases at compile time
function assertNever(value: never): never {
  throw new Error(\`Unexpected value: \${value}\`);
}

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "triangle"; base: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.side ** 2;
    case "triangle": return (shape.base * shape.height) / 2;
    default: return assertNever(shape); // Error if a case is missing
  }
}`,

  // 4 - Zod / Valibot Runtime Validation
  `import { z } from "zod";

// Define a schema — single source of truth for types AND validation
const UserSchema = z.object({
  id: z.number(),
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(0).max(150),
  role: z.enum(["admin", "user", "guest"]),
});

// Infer the TypeScript type from the schema
type User = z.infer<typeof UserSchema>;
// { id: number; name: string; email: string; age: number; role: "admin" | "user" | "guest" }

// Validate API response at runtime
async function fetchUser(id: string): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  const data = await response.json();

  // Throws if data doesn't match schema
  return UserSchema.parse(data);
}

// Safe parse — returns a result instead of throwing
const result = UserSchema.safeParse(unknownData);
if (result.success) {
  console.log(result.data.name); // Fully typed
} else {
  console.error(result.error.issues); // Detailed error info
}

// Environment variables validation
const EnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(["development", "production", "test"]),
});

export const env = EnvSchema.parse(process.env);`,

  // 5 - const assertions
  `// Without as const — types are widened
const config = {
  api: "https://api.example.com",
  timeout: 5000,
  retries: 3,
};
// type: { api: string; timeout: number; retries: number }

// With as const — types are narrowed to literals
const config = {
  api: "https://api.example.com",
  timeout: 5000,
  retries: 3,
} as const;
// type: { readonly api: "https://api.example.com"; readonly timeout: 5000; readonly retries: 3 }

// Great for lookup tables
const STATUS_CODES = {
  OK: 200,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
} as const;

type StatusCode = (typeof STATUS_CODES)[keyof typeof STATUS_CODES];
// type: 200 | 404 | 500

// Great for route definitions
const ROUTES = ["/home", "/about", "/contact"] as const;
type Route = (typeof ROUTES)[number];
// type: "/home" | "/about" | "/contact"

// as const satisfies — validate AND narrow
const theme = {
  colors: { primary: "#007bff", danger: "#dc3545" },
  spacing: { sm: 8, md: 16, lg: 24 },
} as const satisfies Record<string, Record<string, string | number>>;`,

  // 6 - Generics
  `// Generic function — preserves relationship between input and output
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

const num = first([1, 2, 3]);       // type: number | undefined
const str = first(["a", "b"]);      // type: string | undefined

// Generic with constraints
function merge<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}

const result = merge({ name: "Alice" }, { age: 30 });
// type: { name: string } & { age: number }

// Generic with keyof constraint
function pluck<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map((key) => obj[key]);
}

const user = { name: "Alice", age: 30, email: "alice@example.com" };
const values = pluck(user, ["name", "email"]);
// type: (string)[]

// Generic interface for API responses
interface ApiResponse<T> {
  data: T;
  status: number;
  timestamp: Date;
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const res = await fetch(url);
  const data = await res.json();
  return { data, status: res.status, timestamp: new Date() };
}

const users = await fetchData<User[]>("/api/users");
// users.data is User[]`,

  // 7 - Utility Types
  `interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: Date;
}

// Partial<T> — make all properties optional (great for updates)
function updateUser(id: number, updates: Partial<User>) {
  // updates can have any subset of User properties
}
updateUser(1, { name: "Bob" }); // OK — only updating name

// Pick<T, K> — select specific properties
type UserPreview = Pick<User, "id" | "name">;
// { id: number; name: string }

// Omit<T, K> — exclude specific properties
type CreateUserInput = Omit<User, "id" | "createdAt">;
// { name: string; email: string; role: "admin" | "user" }

// Record<K, V> — create an object type with known keys
type RolePermissions = Record<User["role"], string[]>;
const permissions: RolePermissions = {
  admin: ["read", "write", "delete"],
  user: ["read"],
};

// Required<T> — make all properties required
type RequiredUser = Required<Partial<User>>;

// Readonly<T> — make all properties readonly
type FrozenUser = Readonly<User>;

// Combining utility types
type UserFormData = Partial<Pick<User, "name" | "email" | "role">>;
// { name?: string; email?: string; role?: "admin" | "user" }`,

  // 8 - Type Guards
  `// typeof guard — for primitives
function format(value: string | number): string {
  if (typeof value === "string") {
    return value.trim().toUpperCase();
  }
  return value.toFixed(2);
}

// instanceof guard — for class instances
class ApiError {
  constructor(public message: string, public status: number) {}
}

function handleError(error: unknown) {
  if (error instanceof ApiError) {
    console.log(\`API Error \${error.status}: \${error.message}\`);
  } else if (error instanceof Error) {
    console.log(\`Error: \${error.message}\`);
  } else {
    console.log("Unknown error");
  }
}

// "in" operator guard — check for property existence
interface Fish { swim(): void }
interface Bird { fly(): void }

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim(); // TypeScript knows it's Fish
  } else {
    animal.fly();  // TypeScript knows it's Bird
  }
}

// Custom type predicate — reusable type guard
function isNonNull<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

const items = ["a", null, "b", undefined, "c"];
const filtered = items.filter(isNonNull);
// type: string[] — no more (string | null | undefined)[]`,

  // 9 - Template Literal Types
  `// Build string types from combinations
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type ApiVersion = "v1" | "v2";
type Endpoint = \`/api/\${ApiVersion}/users\`;
// "/api/v1/users" | "/api/v2/users"

// Event handler pattern
type DOMEvent = "click" | "focus" | "blur" | "change";
type EventHandler = \`on\${Capitalize<DOMEvent>}\`;
// "onClick" | "onFocus" | "onBlur" | "onChange"

// CSS utility type
type CSSUnit = "px" | "rem" | "em" | "vh" | "vw" | "%";
type CSSValue = \`\${number}\${CSSUnit}\`;

function setWidth(value: CSSValue) { /* ... */ }
setWidth("100px");    // OK
setWidth("2.5rem");   // OK
// setWidth("100");   // Error: not a valid CSSValue

// Dynamic key generation
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

interface Person { name: string; age: number }
type PersonGetters = Getters<Person>;
// { getName: () => string; getAge: () => number }

// String manipulation types
type SnakeCase = "user_name" | "first_name";
type CamelCase = {
  [K in SnakeCase as K extends \`\${infer A}_\${infer B}\`
    ? \`\${A}\${Capitalize<B>}\`
    : K
  ]: string;
};
// { userName: string; firstName: string }`,

  // 10 - unknown vs any
  `// BAD: any disables type checking entirely
function parseJSON_bad(json: string): any {
  return JSON.parse(json);
}

const data = parseJSON_bad('{"name":"Alice"}');
data.nonExistent.deep.property; // No error! Crashes at runtime

// GOOD: unknown forces you to check types first
function parseJSON(json: string): unknown {
  return JSON.parse(json);
}

const raw = parseJSON('{"name":"Alice"}');
// raw.name;  // Error: Object is of type 'unknown'

// Narrow with type guard before using
if (typeof raw === "object" && raw !== null && "name" in raw) {
  console.log((raw as { name: string }).name); // Safe
}

// Even better: combine unknown with Zod
import { z } from "zod";

const schema = z.object({ name: z.string() });

function safeParse(json: string) {
  const raw: unknown = JSON.parse(json);
  return schema.parse(raw); // Validated and typed
}

// Use unknown for catch blocks
try {
  throw new Error("Something failed");
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message); // Safe access
  }
}`,

  // 11 - Enums vs const Objects
  `// Problem with numeric enums — they accept any number
enum Status {
  Active = 0,
  Inactive = 1,
}

const s: Status = 999; // No error! Enums accept any number

// Problem with regular enums — they generate runtime code
enum Direction {
  Up = "UP",
  Down = "DOWN",
}
// Generates: var Direction; (function(Direction) { ... })(Direction || ...);

// Better: const object + type union
const STATUS = {
  Active: "active",
  Inactive: "inactive",
  Pending: "pending",
} as const;

type Status = (typeof STATUS)[keyof typeof STATUS];
// type: "active" | "inactive" | "pending"

function setStatus(status: Status) {
  console.log(status);
}

setStatus(STATUS.Active);   // OK
setStatus("active");        // OK
// setStatus("unknown");    // Error

// Benefits over enums:
// - No runtime code generated (just plain objects)
// - Tree-shakeable
// - Works with Object.values(), Object.keys()
// - No reverse mapping quirks
// - Compatible with plain JavaScript

// When enums ARE useful: const enums for pure compile-time constants
const enum HttpStatus {
  OK = 200,
  NotFound = 404,
}
// Inlined at compile time — no runtime object created`,
]
</script>

<style scoped>
:deep(.inline-code) { @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-blue-500 dark:text-blue-400; }
.qa-section { @apply mb-8 p-6 rounded-xl bg-gray-50 dark:bg-primary-light/50 border border-gray-200 dark:border-gray-700; }
</style>
