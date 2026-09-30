import { Article } from '@/components/ui/Article'
import { Card } from '@/components/ui/Card'
import { CodeBlock } from '@/components/ui/CodeBlock'

export const metadata = {
  title: 'TypeScript Best Practices for 2026 | Koeuk Dev',
  description: 'TypeScript has become the standard for building scalable JavaScript applications.',
}

const codes = [
  `// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2022",
    "module": "ESNext"
  }
}`,

  `// Bad - unnecessary type annotation
const name: string = "Koeuk";
const age: number = 25;

// Good - let TypeScript infer
const name = "Koeuk";
const age = 25;

// Do annotate when the type isn't obvious
const response: ApiResponse<User> = await fetchUser(id);`,

  `// Use interface for object shapes
interface User {
  id: number;
  name: string;
  email: string;
}

// Interfaces can be extended
interface Admin extends User {
  role: "admin";
  permissions: string[];
}

// Use type for unions & utilities
type Status = "active" | "inactive" | "pending";
type ReadonlyUser = Readonly<User>;`,

  `interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

// Only some fields needed for creation
type CreatePost = Pick<Post, "title" | "content">;

// All fields optional for updates
type UpdatePost = Partial<Post>;

// Exclude specific fields
type PostPreview = Omit<Post, "content">;

// Record for key-value maps
type PostMap = Record<string, Post>;`,

  `type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: Error };

function handleState(state: AsyncState<User>) {
  switch (state.status) {
    case "loading":
      return "Loading...";
    case "success":
      return state.data.name; // TS knows data exists
    case "error":
      return state.error.message; // TS knows error exists
  }
}`,

  `// Generic API fetcher
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(\`HTTP error: \${response.status}\`);
  }
  return response.json() as Promise<T>;
}

// Usage - fully typed!
const user = await fetchData<User>("/api/user/1");
const posts = await fetchData<Post[]>("/api/posts");`,

  `// Without as const - type is string[]
const roles = ["admin", "user", "guest"];

// With as const - type is readonly ["admin", "user", "guest"]
const roles = ["admin", "user", "guest"] as const;

// Now you can derive types from it
type Role = (typeof roles)[number];
// Result: "admin" | "user" | "guest"`,

  `type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type ApiVersion = "v1" | "v2";

// Build dynamic route types
type ApiRoute = \`/api/\${ApiVersion}/\${string}\`;

const route1: ApiRoute = "/api/v1/users";    // OK
const route2: ApiRoute = "/api/v3/users";    // Error!

// Type-safe event handlers
type EventName = \`on\${Capitalize<"click" | "focus" | "blur">}\`;
// Result: "onClick" | "onFocus" | "onBlur"`,

  `type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "triangle"; base: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "triangle":
      return (shape.base * shape.height) / 2;
    default:
      // If you add a new shape and forget to handle it,
      // TypeScript will error here!
      const _exhaustive: never = shape;
      return _exhaustive;
  }
}`,

  `interface Fish { swim: () => void }
interface Bird { fly: () => void }

// Custom type guard
function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim(); // TS knows it's Fish
  } else {
    animal.fly();  // TS knows it's Bird
  }
}

// Also useful for filtering arrays
const animals: (Fish | Bird)[] = getAnimals();
const fishes: Fish[] = animals.filter(isFish);`,

  `type Colors = Record<string, string | number[]>;

// Problem with type annotation - loses specific type info
const palette: Colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: [0, 0, 255]
};
palette.red.toUpperCase(); // Error! TS thinks it might be number[]

// Solution with satisfies - keeps narrow types!
const palette = {
  red: "#ff0000",
  green: "#00ff00",
  blue: [0, 0, 255]
} satisfies Colors;

palette.red.toUpperCase();  // OK! TS knows red is string
palette.blue.map(x => x);  // OK! TS knows blue is number[]`,

  `// Make all properties optional and nullable
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// Create getter functions for each property
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<K & string>}\`]: () => T[K];
};

interface User {
  name: string;
  age: number;
}

type UserGetters = Getters<User>;
// Result: { getName: () => string; getAge: () => number }

// Create event handlers from a state type
type EventHandlers<T> = {
  [K in keyof T as \`on\${Capitalize<K & string>}Change\`]: (value: T[K]) => void;
};

type UserEvents = EventHandlers<User>;
// Result: { onNameChange: (value: string) => void; onAgeChange: (value: number) => void }`,

  `// Result type - no more try/catch guessing
type Result<T, E = Error> =
  | { ok: true; data: T }
  | { ok: false; error: E };

async function fetchUser(id: string): Promise<Result<User>> {
  try {
    const res = await fetch(\`/api/users/\${id}\`);
    if (!res.ok) {
      return { ok: false, error: new Error(\`Status: \${res.status}\`) };
    }
    const data = await res.json();
    return { ok: true, data };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e : new Error(String(e)) };
  }
}

// Usage - you MUST handle both cases
const result = await fetchUser("123");

if (result.ok) {
  console.log(result.data.name); // TS knows data exists
} else {
  console.error(result.error);   // TS knows error exists
}`,

  `// Create a brand using intersection with a unique symbol
type Brand<T, B> = T & { __brand: B };

type UserId = Brand<string, "UserId">;
type OrderId = Brand<string, "OrderId">;

function getUser(id: UserId) { /* ... */ }
function getOrder(id: OrderId) { /* ... */ }

// Factory functions to create branded values
const userId = "user_123" as UserId;
const orderId = "order_456" as OrderId;

getUser(userId);   // OK
getUser(orderId);  // Error! OrderId is not assignable to UserId

// Real-world use: validated types
type Email = Brand<string, "Email">;
type PositiveNumber = Brand<number, "Positive">;

function validateEmail(input: string): Email | null {
  return input.includes("@") ? input as Email : null;
}`,

  `// Extract return type of a function
type ReturnOf<T> = T extends (...args: any[]) => infer R ? R : never;

function createUser() { return { id: 1, name: "Koeuk" }; }
type User = ReturnOf<typeof createUser>;
// Result: { id: number; name: string }

// Extract Promise value type
type Unwrap<T> = T extends Promise<infer U> ? U : T;

type A = Unwrap<Promise<string>>; // string
type B = Unwrap<number>;           // number

// Extract array element type
type ElementOf<T> = T extends (infer E)[] ? E : never;

type C = ElementOf<string[]>;   // string
type D = ElementOf<number[]>;   // number`,
]

export default function TypeScriptBestPracticesPage() {
  return (
    <Article
      title="TypeScript Best Practices for 2026"
      date="Jan 5, 2026"
      tags={['TypeScript', 'JavaScript']}
      backHref="/about-me/my-info?section=rean"
    >
      <p>
        TypeScript has become the standard for building scalable JavaScript applications. As we move into 2026, here
        are the best practices every developer should follow to write clean, maintainable, and type-safe code.
      </p>

      <h2>1. Always Enable Strict Mode</h2>
      <p>
        Enabling <code>strict: true</code> in your <code>tsconfig.json</code> catches more errors at compile time. This
        enables all strict type-checking options including <code>noImplicitAny</code>, <code>strictNullChecks</code>,
        and more.
      </p>
      <CodeBlock language="json" code={codes[0]} />

      <h2>2. Leverage Type Inference</h2>
      <p>
        TypeScript is smart enough to infer types in many cases. Don&apos;t over-annotate when the type is obvious from
        the assignment. Let the compiler do its job.
      </p>
      <CodeBlock language="typescript" code={codes[1]} />

      <h2>3. Prefer Interfaces Over Type Aliases for Objects</h2>
      <p>
        Interfaces are extendable and provide better error messages. Use <code>interface</code> for defining object
        shapes and <code>type</code> for unions, intersections, and utility types.
      </p>
      <CodeBlock language="typescript" code={codes[2]} />

      <h2>4. Master Utility Types</h2>
      <p>
        TypeScript provides powerful built-in utility types that help you transform and reuse existing types without
        duplicating code.
      </p>
      <CodeBlock language="typescript" code={codes[3]} />

      <h2>5. Use Discriminated Unions for State Management</h2>
      <p>
        Discriminated unions make it impossible to access data that doesn&apos;t exist in a given state. This pattern
        is especially useful for handling API responses and component states.
      </p>
      <CodeBlock language="typescript" code={codes[4]} />

      <h2>6. Write Reusable Code with Generics</h2>
      <p>Generics allow you to create flexible, reusable functions and classes while maintaining type safety.</p>
      <CodeBlock language="typescript" code={codes[5]} />

      <h2>7. Use Const Assertions</h2>
      <p>
        The <code>as const</code> assertion tells TypeScript to infer the narrowest possible type, making values
        readonly and literal.
      </p>
      <CodeBlock language="typescript" code={codes[6]} />

      <h2>8. Template Literal Types</h2>
      <p>
        Template literal types allow you to build string types dynamically, great for creating type-safe event names,
        CSS properties, or API routes.
      </p>
      <CodeBlock language="typescript" code={codes[7]} />

      <h2>9. Exhaustive Checking with Never</h2>
      <p>
        Use the <code>never</code> type to ensure all cases in a union are handled. If a new variant is added later,
        TypeScript will throw a compile error reminding you to handle it.
      </p>
      <CodeBlock language="typescript" code={codes[8]} />

      <h2>10. Custom Type Guards</h2>
      <p>
        Type guards narrow types at runtime while keeping full type safety. Use the <code>is</code> keyword to create
        reusable type narrowing functions.
      </p>
      <CodeBlock language="typescript" code={codes[9]} />

      <h2>11. The Satisfies Operator (Game Changer)</h2>
      <p>
        Introduced in TypeScript 4.9, <code>satisfies</code> validates that a value matches a type{' '}
        <strong>without widening it</strong>. This means you get both type checking AND the narrowest inferred type.
        It&apos;s one of the most important features in modern TypeScript.
      </p>
      <CodeBlock language="typescript" code={codes[10]} />
      <blockquote>
        <strong>Why this matters:</strong> Before <code>satisfies</code>, you had to choose between type safety
        (annotation) and type narrowing (inference). Now you get both. Use it whenever you want to validate a value
        against a type while keeping its specific inferred type.
      </blockquote>

      <h2>12. Mapped Types for Type Transformations</h2>
      <p>
        Mapped types let you create new types by transforming every property in an existing type. Combined with
        template literal types, they become incredibly powerful for building type-safe APIs.
      </p>
      <CodeBlock language="typescript" code={codes[11]} />

      <h2>13. Type-Safe Error Handling</h2>
      <p>
        JavaScript&apos;s <code>catch</code> clause types errors as <code>unknown</code>. Using a Result pattern gives
        you compile-time error handling without exceptions.
      </p>
      <CodeBlock language="typescript" code={codes[12]} />
      <blockquote>
        <strong>Why this matters:</strong> With try/catch, TypeScript can&apos;t know what errors a function throws. The
        Result pattern makes error handling explicit in the type system - the caller is <em>forced</em> to check for
        errors before accessing data.
      </blockquote>

      <h2>14. Branded Types for Extra Safety</h2>
      <p>
        Branded types prevent you from accidentally mixing up values that share the same underlying type. For example,
        a <code>UserId</code> and an <code>OrderId</code> are both strings, but passing one where the other is expected
        is a bug.
      </p>
      <CodeBlock language="typescript" code={codes[13]} />

      <h2>15. The Infer Keyword in Conditional Types</h2>
      <p>
        The <code>infer</code> keyword lets you extract types from within other types. Think of it as pattern matching
        for types - essential for building advanced type utilities.
      </p>
      <CodeBlock language="typescript" code={codes[14]} />

      <Card className="space-y-3">
        <h2 className="!mt-0">Common Mistakes to Avoid</h2>
        <ul>
          <li>
            <strong>
              Using <code>any</code> to silence errors
            </strong>
            <p>
              Use <code>unknown</code> and narrow the type, or use <code>// @ts-expect-error</code> with a comment
              explaining why.
            </p>
          </li>
          <li>
            <strong>
              Non-null assertions (<code>!</code>) everywhere
            </strong>
            <p>
              Each <code>!</code> is a potential runtime crash. Use optional chaining (<code>?.</code>) or proper null
              checks instead.
            </p>
          </li>
          <li>
            <strong>
              Type assertions (<code>as</code>) to force types
            </strong>
            <p>
              Assertions bypass the type checker. Use type guards or <code>satisfies</code> for safe validation instead.
            </p>
          </li>
          <li>
            <strong>
              Ignoring <code>strictNullChecks</code>
            </strong>
            <p>
              This is the single most valuable strict flag. Without it, <code>null</code> and <code>undefined</code>{' '}
              silently pass through every type.
            </p>
          </li>
          <li>
            <strong>Over-engineering types</strong>
            <p>
              If your type takes 20 lines to write and is hard to read, simplify it. Types should help your team, not
              intimidate them.
            </p>
          </li>
        </ul>
      </Card>

      <Card tone="main" className="space-y-3">
        <h2 className="!mt-0">Quick Tips</h2>
        <ol>
          <li>
            <strong>
              Avoid <code>any</code>
            </strong>{' '}
            - Use <code>unknown</code> instead when the type is truly unknown. It forces you to narrow the type before
            using it.
          </li>
          <li>
            <strong>
              Use <code>satisfies</code>
            </strong>{' '}
            - The <code>satisfies</code> operator validates a type without widening it:{' '}
            <code>{'const config = { ... } satisfies Config'}</code>.
          </li>
          <li>
            <strong>
              Prefer <code>Map</code> over objects
            </strong>{' '}
            - When keys are dynamic, <code>Map&lt;K, V&gt;</code> gives better type safety than index signatures.
          </li>
          <li>
            <strong>
              Use <code>readonly</code>
            </strong>{' '}
            - Mark arrays and properties as <code>readonly</code> when they shouldn&apos;t be mutated to catch
            accidental modifications.
          </li>
          <li>
            <strong>Avoid enums</strong> - Prefer union types or <code>as const</code> objects. Enums add runtime code
            and have quirky behavior with reverse mappings.
          </li>
          <li>
            <strong>Return types on public APIs</strong> - While inference is great internally, always annotate return
            types on exported functions to prevent accidental breaking changes.
          </li>
        </ol>
      </Card>

      <Card className="space-y-3">
        <h2 className="!mt-0">Summary</h2>
        <ul>
          <li>
            Enable <strong>strict mode</strong> for maximum type safety
          </li>
          <li>
            Let TypeScript <strong>infer types</strong> when possible
          </li>
          <li>
            Use <strong>interfaces</strong> for objects, <strong>types</strong> for unions
          </li>
          <li>
            Master <strong>utility types</strong> like Pick, Omit, Partial, Record
          </li>
          <li>
            Use <strong>discriminated unions</strong> for state management
          </li>
          <li>
            Write reusable code with <strong>generics</strong>
          </li>
          <li>
            Use <strong>const assertions</strong> for literal types
          </li>
          <li>
            Build dynamic types with <strong>template literal types</strong>
          </li>
          <li>
            Use <strong>exhaustive checking</strong> with <code>never</code>
          </li>
          <li>
            Create <strong>custom type guards</strong> for runtime narrowing
          </li>
          <li>
            Use <strong>satisfies</strong> for validation without type widening
          </li>
          <li>
            Transform types with <strong>mapped types</strong>
          </li>
          <li>
            Use the <strong>Result pattern</strong> for type-safe error handling
          </li>
          <li>
            Prevent ID mix-ups with <strong>branded types</strong>
          </li>
          <li>
            Extract types with the <strong>infer keyword</strong>
          </li>
        </ul>
      </Card>
    </Article>
  )
}
