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
          TypeScript Best Practices for 2026
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Jan 5, 2026</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            TypeScript has become the standard for building robust, scalable JavaScript applications. Whether you are working on a frontend framework like Vue or React, or a backend with Node.js, following best practices ensures your codebase stays maintainable and type-safe. Here are the top TypeScript best practices you should adopt in 2026.
          </p>
        </section>

        <!-- 1. Use strict TypeScript Configuration -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">1. Use Strict TypeScript Configuration</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">Always enable <code class="inline-code">strict: true</code> in your <code class="inline-code">tsconfig.json</code>. This enables a suite of strict checks including <code class="inline-code">noImplicitAny</code>, <code class="inline-code">strictNullChecks</code>, and <code class="inline-code">strictFunctionTypes</code>. Additionally, consider enabling <code class="inline-code">noUncheckedIndexedAccess</code> to catch potential undefined values when accessing arrays or objects by index.</p>
          <CodeBlock title="tsconfig.json — Strict Configuration" :code="codes[0]" />
        </div>

        <!-- 2. Prefer Interfaces over Types for Object Shapes -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">2. Prefer Interfaces over Types for Object Shapes</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">When defining object shapes, prefer <code class="inline-code">interface</code> over <code class="inline-code">type</code>. Interfaces support declaration merging, produce better error messages, and are more performant for the compiler. Use <code class="inline-code">type</code> for unions, intersections, mapped types, and other advanced constructs.</p>
          <CodeBlock title="Interface vs Type for Objects" :code="codes[1]" />
        </div>

        <!-- 3. Use Type Inference -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">3. Use Type Inference — Don't Over-Annotate</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">TypeScript has powerful type inference. You do not need to annotate every variable or return type. Let the compiler infer types when the value makes the type obvious. Annotate function parameters and public API boundaries, but avoid redundant annotations on simple assignments.</p>
          <CodeBlock title="Let TypeScript Infer Types" :code="codes[2]" />
        </div>

        <!-- 4. Use Discriminated Unions for State -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">4. Use Discriminated Unions for State</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">Discriminated unions are one of TypeScript's most powerful patterns. Use a shared literal property (the discriminant) to model different states. This allows TypeScript to narrow types automatically in <code class="inline-code">switch</code> or <code class="inline-code">if</code> blocks, making impossible states unrepresentable.</p>
          <CodeBlock title="Discriminated Unions for State Management" :code="codes[3]" />
        </div>

        <!-- 5. Use Zod or Valibot for Runtime Validation -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">5. Use Zod or Valibot for Runtime Validation</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">TypeScript types are erased at runtime. When dealing with external data (API responses, form inputs, environment variables), use a runtime validation library like <code class="inline-code">Zod</code> or <code class="inline-code">Valibot</code> to validate and parse data, ensuring your runtime types match your compile-time types.</p>
          <CodeBlock title="Runtime Validation with Zod" :code="codes[4]" />
        </div>

        <!-- 6. Use const assertions -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">6. Use const Assertions (as const)</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">The <code class="inline-code">as const</code> assertion tells TypeScript to infer the narrowest possible type for a value. This is especially useful for configuration objects, lookup tables, and anywhere you want literal types instead of widened primitives.</p>
          <CodeBlock title="const Assertions" :code="codes[5]" />
        </div>

        <!-- 7. Generics -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">7. Generics — Write Reusable, Type-Safe Functions</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">Generics allow you to write functions, classes, and interfaces that work with any type while preserving type safety. Use constraints with <code class="inline-code">extends</code> to limit what types are accepted. Avoid over-using generics — only add them when you need to preserve a relationship between input and output types.</p>
          <CodeBlock title="Generics with Constraints" :code="codes[6]" />
        </div>

        <!-- 8. Use Utility Types -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">8. Use Utility Types (Partial, Pick, Omit, Record, Required)</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">TypeScript provides built-in utility types that let you transform existing types without redefining them. Master these to keep your code DRY and avoid duplicating type definitions across your codebase.</p>
          <CodeBlock title="Built-in Utility Types" :code="codes[7]" />
        </div>

        <!-- 9. Narrow Types with Type Guards -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">9. Narrow Types with Type Guards</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">Type guards let you narrow a union type to a more specific type within a conditional block. Use <code class="inline-code">typeof</code>, <code class="inline-code">instanceof</code>, the <code class="inline-code">in</code> operator, or custom type predicates to safely handle different type variants.</p>
          <CodeBlock title="Type Guards and Narrowing" :code="codes[8]" />
        </div>

        <!-- 10. Use Template Literal Types -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">10. Use Template Literal Types</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">Template literal types let you create string types from combinations of other string literals. They are powerful for typing event names, CSS values, API routes, and any scenario where strings follow a predictable pattern.</p>
          <CodeBlock title="Template Literal Types" :code="codes[9]" />
        </div>

        <!-- 11. Avoid any — Use unknown Instead -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">11. Avoid `any` — Use `unknown` Instead</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">Using <code class="inline-code">any</code> disables all type checking and defeats the purpose of TypeScript. When you truly do not know a type, use <code class="inline-code">unknown</code> instead. It forces you to perform type checks before using the value, keeping your code safe.</p>
          <CodeBlock title="unknown vs any" :code="codes[10]" />
        </div>

        <!-- 12. Use Enums Carefully -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">12. Use Enums Carefully (Prefer const Objects)</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">TypeScript enums have quirks — numeric enums allow reverse mapping and can accept any number, and regular enums generate runtime code. In most cases, prefer <code class="inline-code">as const</code> objects or union types for a simpler, more predictable, and tree-shakeable alternative.</p>
          <CodeBlock title="Enums vs const Objects" :code="codes[11]" />
        </div>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">Summary</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span>Enable <code class="inline-code">strict: true</code> and <code class="inline-code">noUncheckedIndexedAccess</code> for maximum type safety.</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span>Prefer <code class="inline-code">interface</code> for object shapes and <code class="inline-code">type</code> for unions and complex types.</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span>Let TypeScript infer types — annotate parameters and public APIs, not obvious assignments.</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span>Model state with discriminated unions to make impossible states unrepresentable.</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span>Use Zod or Valibot for runtime validation of external data.</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span>Use <code class="inline-code">as const</code>, generics, and utility types to write DRY, type-safe code.</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span>Narrow types with type guards and template literal types for precise control.</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span>Avoid <code class="inline-code">any</code> — use <code class="inline-code">unknown</code>. Prefer const objects over enums.</span></li>
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
