<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Back to Blog
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium">TypeScript</span>
          <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium">Interview</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          TypeScript Interview Questions
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Feb 10, 2026</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            TypeScript has become the standard for building large-scale JavaScript applications. Whether you are preparing for a frontend, backend, or full-stack interview, these 20 commonly asked TypeScript questions will help you solidify your understanding of the language and its type system.
          </p>
        </section>

        <!-- Q1 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">1. What is TypeScript? Why use it over JavaScript?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            TypeScript is a <strong>statically typed superset of JavaScript</strong> developed by Microsoft. It compiles down to plain JavaScript and runs anywhere JavaScript runs. You use it over JavaScript because it catches errors at compile time, provides better IDE support with autocompletion, makes refactoring safer, and improves code readability with explicit types.
          </p>
          <CodeBlock title="TypeScript vs JavaScript" :code="codes[0]" />
        </div>

        <!-- Q2 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">2. What are the basic types in TypeScript?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            TypeScript provides several primitive and structural types that form the foundation of its type system: <code class="inline-code">string</code>, <code class="inline-code">number</code>, <code class="inline-code">boolean</code>, <code class="inline-code">null</code>, <code class="inline-code">undefined</code>, <code class="inline-code">void</code>, <code class="inline-code">any</code>, <code class="inline-code">unknown</code>, <code class="inline-code">never</code>, arrays, tuples, and objects.
          </p>
          <CodeBlock title="Basic Types" :code="codes[1]" />
        </div>

        <!-- Q3 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">3. What is the difference between interface and type?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Both <code class="inline-code">interface</code> and <code class="inline-code">type</code> can describe object shapes, but they differ in flexibility. Interfaces support declaration merging and are extendable with <code class="inline-code">extends</code>. Types are more versatile and can represent unions, intersections, primitives, tuples, and mapped types.
          </p>
          <CodeBlock title="Interface vs Type" :code="codes[2]" />
          <div class="tip-box mt-4">
            <strong>Rule of thumb:</strong> Use <code class="inline-code">interface</code> for object shapes and class contracts. Use <code class="inline-code">type</code> when you need unions, intersections, or more complex type expressions.
          </div>
        </div>

        <!-- Q4 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">4. What are Generics? How to use them?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Generics allow you to write reusable, type-safe code that works with multiple types. Instead of using <code class="inline-code">any</code>, generics preserve type information through parameters like <code class="inline-code">&lt;T&gt;</code>.
          </p>
          <CodeBlock title="Generics" :code="codes[3]" />
        </div>

        <!-- Q5 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">5. What is the difference between any, unknown, and never?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <code class="inline-code">any</code> disables type checking entirely. <code class="inline-code">unknown</code> is the type-safe counterpart of <code class="inline-code">any</code> -- you must narrow the type before using it. <code class="inline-code">never</code> represents values that never occur, such as a function that always throws or an impossible type.
          </p>
          <CodeBlock title="any vs unknown vs never" :code="codes[4]" />
        </div>

        <!-- Q6 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">6. What are Enums?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Enums define a set of named constants. TypeScript supports numeric enums, string enums, and const enums. They help make code more readable by giving meaningful names to sets of values.
          </p>
          <CodeBlock title="Enums" :code="codes[5]" />
        </div>

        <!-- Q7 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">7. What are Union and Intersection types?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A <strong>union type</strong> (<code class="inline-code">A | B</code>) means the value can be either type A or type B. An <strong>intersection type</strong> (<code class="inline-code">A &amp; B</code>) combines multiple types into one -- the value must satisfy all types simultaneously.
          </p>
          <CodeBlock title="Union & Intersection Types" :code="codes[6]" />
        </div>

        <!-- Q8 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">8. What is Type Narrowing / Type Guards?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Type narrowing is the process of refining a broad type to a more specific one within a conditional block. TypeScript uses control flow analysis to narrow types automatically. Common guards include <code class="inline-code">typeof</code>, <code class="inline-code">instanceof</code>, <code class="inline-code">in</code>, and custom type predicates.
          </p>
          <CodeBlock title="Type Guards" :code="codes[7]" />
        </div>

        <!-- Q9 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">9. What are Utility Types (Partial, Required, Pick, Omit, Record)?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            TypeScript ships with built-in utility types that transform existing types. These save you from writing repetitive type definitions and make your code more expressive.
          </p>
          <CodeBlock title="Utility Types" :code="codes[8]" />
        </div>

        <!-- Q10 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">10. What is the keyof operator?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            The <code class="inline-code">keyof</code> operator takes an object type and produces a union of its keys as string literal types. It is commonly used with generics to create type-safe property access patterns.
          </p>
          <CodeBlock title="keyof Operator" :code="codes[9]" />
        </div>

        <!-- Q11 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">11. What are Mapped Types?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Mapped types let you create new types by transforming each property of an existing type. They iterate over keys using the <code class="inline-code">in</code> keyword and can modify property attributes like readonly or optionality.
          </p>
          <CodeBlock title="Mapped Types" :code="codes[10]" />
        </div>

        <!-- Q12 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">12. What are Conditional Types?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Conditional types select one of two types based on a condition, using the syntax <code class="inline-code">T extends U ? X : Y</code>. They enable powerful type-level programming and are the foundation of many advanced type patterns.
          </p>
          <CodeBlock title="Conditional Types" :code="codes[11]" />
        </div>

        <!-- Q13 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">13. What is the difference between abstract class and interface?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            An <strong>abstract class</strong> can contain both implemented methods and abstract method signatures. It exists at runtime as a JavaScript class. An <strong>interface</strong> is purely a compile-time construct with zero runtime footprint -- it only describes a shape.
          </p>
          <CodeBlock title="Abstract Class vs Interface" :code="codes[12]" />
        </div>

        <!-- Q14 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">14. What are Decorators?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Decorators are special declarations that can be attached to classes, methods, properties, or parameters. They are functions that modify or annotate the target at design time. Decorators require enabling <code class="inline-code">experimentalDecorators</code> in tsconfig.
          </p>
          <CodeBlock title="Decorators" :code="codes[13]" />
        </div>

        <!-- Q15 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">15. What is Declaration Merging?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Declaration merging is when the TypeScript compiler merges two or more separate declarations with the same name into a single definition. This works with interfaces, namespaces, and enums. It is commonly used to extend third-party library types.
          </p>
          <CodeBlock title="Declaration Merging" :code="codes[14]" />
        </div>

        <!-- Q16 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">16. What are Template Literal Types?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Template literal types build on string literal types by using template literal syntax to create new string types through concatenation. They allow you to model string patterns at the type level.
          </p>
          <CodeBlock title="Template Literal Types" :code="codes[15]" />
        </div>

        <!-- Q17 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">17. What is the infer keyword?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            The <code class="inline-code">infer</code> keyword is used within conditional types to declare a type variable that TypeScript will infer from the context. It lets you extract and reuse parts of complex types.
          </p>
          <CodeBlock title="infer Keyword" :code="codes[16]" />
        </div>

        <!-- Q18 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">18. What are Namespaces vs Modules?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <strong>Modules</strong> (ES modules) use <code class="inline-code">import</code>/<code class="inline-code">export</code> and are file-based -- each file is its own module. <strong>Namespaces</strong> are a TypeScript-specific way to organize code under a named scope. In modern TypeScript, modules are preferred over namespaces.
          </p>
          <CodeBlock title="Namespaces vs Modules" :code="codes[17]" />
        </div>

        <!-- Q19 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">19. What is strict mode in TypeScript?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Enabling <code class="inline-code">"strict": true</code> in tsconfig.json turns on a family of strict type-checking options including <code class="inline-code">strictNullChecks</code>, <code class="inline-code">noImplicitAny</code>, <code class="inline-code">strictFunctionTypes</code>, and more. It is strongly recommended for all new projects.
          </p>
          <CodeBlock title="Strict Mode" :code="codes[18]" />
        </div>

        <!-- Q20 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">20. What is the difference between == and === in TypeScript?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            This is inherited from JavaScript. <code class="inline-code">==</code> (loose equality) performs type coercion before comparison, while <code class="inline-code">===</code> (strict equality) compares both value and type without coercion. TypeScript encourages using <code class="inline-code">===</code> for predictable comparisons.
          </p>
          <CodeBlock title="== vs ===" :code="codes[19]" />
        </div>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">Summary</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span><strong>TypeScript</strong> adds static typing to JavaScript for safer, more maintainable code</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span><strong>Interfaces &amp; Types</strong> define object shapes and complex type expressions</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span><strong>Generics</strong> enable reusable, type-safe functions and classes</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span><strong>Type Guards</strong> narrow broad types for safe property access</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span><strong>Utility Types</strong> transform existing types without rewriting them</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span><strong>Mapped &amp; Conditional Types</strong> power advanced type-level programming</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span><strong>Strict mode</strong> catches more bugs at compile time and is recommended for all projects</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span><strong>Modules over Namespaces</strong> align with modern JavaScript standards</span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'TypeScript Interview Questions - Koeuk Dev' })

const codes = [
  // 0 - Q1: What is TypeScript?
  `// JavaScript — no type safety
function add(a, b) {
  return a + b;
}
add(5, "3"); // "53" — no error, silent bug!

// TypeScript — catches errors at compile time
function add(a: number, b: number): number {
  return a + b;
}
add(5, "3"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
add(5, 3);   // 8 — correct!`,

  // 1 - Q2: Basic types
  `// Primitives
let name: string = "Alice";
let age: number = 30;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Tuple — fixed-length array with specific types
let pair: [string, number] = ["Alice", 30];

// Object
let user: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};

// Void — function that returns nothing
function logMessage(msg: string): void {
  console.log(msg);
}

// Null and Undefined
let nothing: null = null;
let notDefined: undefined = undefined;`,

  // 2 - Q3: Interface vs Type
  `// Interface — describes object shapes, supports merging
interface User {
  name: string;
  age: number;
}

interface User {
  email: string; // Declaration merging: adds to existing User
}

// Extending interfaces
interface Admin extends User {
  role: string;
}

// Type — more flexible, supports unions & intersections
type ID = string | number;          // Union — not possible with interface
type Coordinates = [number, number]; // Tuple
type Status = "active" | "inactive"; // Literal union

// Type intersection (similar to extends)
type Employee = User & { company: string };

// Both work for object shapes:
interface Dog { breed: string; }
type Cat = { breed: string; };`,

  // 3 - Q4: Generics
  `// Without generics — loses type information
function identity(value: any): any {
  return value;
}

// With generics — preserves type
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42);    // type: number
const str = identity("hello");       // type: string (inferred)

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const userResponse: ApiResponse<{ name: string }> = {
  data: { name: "Alice" },
  status: 200,
  message: "OK",
};

// Generic constraints
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello");     // 5
getLength([1, 2, 3]);   // 3
getLength(123);          // Error: number doesn't have 'length'`,

  // 4 - Q5: any vs unknown vs never
  `// any — disables ALL type checking (avoid it!)
let a: any = "hello";
a.toFixed();    // No error at compile time, but crashes at runtime!

// unknown — safe alternative to any
let b: unknown = "hello";
b.toFixed();    // Error: Object is of type 'unknown'

// Must narrow the type first
if (typeof b === "string") {
  b.toUpperCase(); // OK — TypeScript knows it's a string
}

// never — represents impossible values
function throwError(msg: string): never {
  throw new Error(msg); // Function never returns
}

// Exhaustive checking with never
type Shape = "circle" | "square";

function getArea(shape: Shape) {
  switch (shape) {
    case "circle": return Math.PI * 10;
    case "square": return 100;
    default:
      const _exhaustive: never = shape; // Error if a case is missing
      return _exhaustive;
  }
}`,

  // 5 - Q6: Enums
  `// Numeric enum (default starts at 0)
enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right,   // 3
}

let move: Direction = Direction.Up;

// String enum
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
}

function setStatus(status: Status) {
  console.log(status);
}
setStatus(Status.Active); // "ACTIVE"

// Const enum — inlined at compile time (no runtime object)
const enum Color {
  Red = "#FF0000",
  Green = "#00FF00",
  Blue = "#0000FF",
}

let bg = Color.Red; // Compiled to: let bg = "#FF0000"`,

  // 6 - Q7: Union & Intersection types
  `// Union type — value can be one of several types
type ID = string | number;

function printId(id: ID) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

printId("abc"); // "ABC"
printId(42);    // "42.00"

// Discriminated union — powerful pattern matching
type Success = { status: "success"; data: string };
type Error = { status: "error"; message: string };
type Response = Success | Error;

function handleResponse(res: Response) {
  if (res.status === "success") {
    console.log(res.data);     // TypeScript knows it's Success
  } else {
    console.log(res.message);  // TypeScript knows it's Error
  }
}

// Intersection type — combines multiple types
type HasName = { name: string };
type HasAge = { age: number };
type Person = HasName & HasAge;

const person: Person = { name: "Alice", age: 30 }; // Must have both`,

  // 7 - Q8: Type Narrowing / Type Guards
  `// typeof guard
function double(value: string | number) {
  if (typeof value === "string") {
    return value.repeat(2);  // string methods available
  }
  return value * 2;          // number operations available
}

// instanceof guard
class Dog { bark() { return "Woof!"; } }
class Cat { meow() { return "Meow!"; } }

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    return animal.bark();
  }
  return animal.meow();
}

// "in" operator guard
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim(); // Fish
  } else {
    animal.fly();  // Bird
  }
}

// Custom type predicate
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function process(val: unknown) {
  if (isString(val)) {
    console.log(val.toUpperCase()); // TypeScript knows val is string
  }
}`,

  // 8 - Q9: Utility Types
  `interface User {
  name: string;
  email: string;
  age: number;
  role: string;
}

// Partial<T> — all properties become optional
type PartialUser = Partial<User>;
// { name?: string; email?: string; age?: number; role?: string }

// Required<T> — all properties become required
type RequiredUser = Required<PartialUser>;

// Pick<T, K> — select specific properties
type UserPreview = Pick<User, "name" | "email">;
// { name: string; email: string }

// Omit<T, K> — exclude specific properties
type UserWithoutRole = Omit<User, "role">;
// { name: string; email: string; age: number }

// Record<K, V> — create object type with specific key-value pairs
type UserRoles = Record<string, string[]>;
const roles: UserRoles = {
  admin: ["read", "write", "delete"],
  viewer: ["read"],
};

// Readonly<T> — all properties become readonly
type ReadonlyUser = Readonly<User>;
const user: ReadonlyUser = { name: "Alice", email: "a@b.com", age: 30, role: "admin" };
// user.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property`,

  // 9 - Q10: keyof operator
  `interface User {
  name: string;
  age: number;
  email: string;
}

// keyof creates a union of property names
type UserKeys = keyof User; // "name" | "age" | "email"

// Type-safe property access with generics
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { name: "Alice", age: 30, email: "a@b.com" };

const name = getValue(user, "name");  // type: string
const age = getValue(user, "age");    // type: number
getValue(user, "phone");               // Error: "phone" is not in keyof User

// keyof with mapped types
type Optional<T> = {
  [K in keyof T]?: T[K];
};`,

  // 10 - Q11: Mapped Types
  `// Basic mapped type
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

// Practical example
interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
// { readonly name: string; readonly age: number }

// Mapped type with transformation
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type NullableUser = Nullable<User>;
// { name: string | null; age: number | null }

// Mapped type with key remapping (TS 4.1+)
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

type UserGetters = Getters<User>;
// { getName: () => string; getAge: () => number }`,

  // 11 - Q12: Conditional Types
  `// Basic conditional type
type IsString<T> = T extends string ? "yes" : "no";

type A = IsString<string>;  // "yes"
type B = IsString<number>;  // "no"

// Practical: extract types from complex structures
type ArrayElement<T> = T extends (infer U)[] ? U : T;

type Elem = ArrayElement<string[]>;  // string
type NotArr = ArrayElement<number>;  // number

// Distributive conditional types — applied to each member of a union
type NonNullable<T> = T extends null | undefined ? never : T;

type Clean = NonNullable<string | null | undefined>; // string

// Conditional type with multiple conditions
type TypeName<T> =
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  T extends Function ? "function" :
  "object";

type T1 = TypeName<string>;    // "string"
type T2 = TypeName<() => void>; // "function"`,

  // 12 - Q13: Abstract Class vs Interface
  `// Abstract class — can have implementations
abstract class Animal {
  constructor(public name: string) {}

  // Implemented method — shared by all subclasses
  move(distance: number): void {
    console.log(\`\${this.name} moved \${distance}m\`);
  }

  // Abstract method — must be implemented by subclasses
  abstract makeSound(): string;
}

class Dog extends Animal {
  makeSound(): string {
    return "Woof!";
  }
}

// const animal = new Animal("x"); // Error: cannot instantiate abstract class
const dog = new Dog("Rex");
dog.move(10);       // "Rex moved 10m" — inherited
dog.makeSound();    // "Woof!" — implemented

// Interface — no implementation, no runtime cost
interface Serializable {
  serialize(): string;
  deserialize(data: string): void;
}

// A class can implement multiple interfaces
class User extends Animal implements Serializable {
  makeSound() { return "Hello!"; }
  serialize() { return JSON.stringify({ name: this.name }); }
  deserialize(data: string) { this.name = JSON.parse(data).name; }
}`,

  // 13 - Q14: Decorators
  `// Class decorator
function Sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@Sealed
class BugReport {
  title: string;
  constructor(t: string) { this.title = t; }
}

// Method decorator
function Log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(\`Calling \${key} with args: \${JSON.stringify(args)}\`);
    return original.apply(this, args);
  };
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(2, 3);
// Console: Calling add with args: [2,3]
// Returns: 5

// Property decorator
function MinLength(min: number) {
  return function (target: any, key: string) {
    let value: string;
    Object.defineProperty(target, key, {
      get: () => value,
      set: (v: string) => {
        if (v.length < min) throw new Error(\`\${key} must be at least \${min} chars\`);
        value = v;
      },
    });
  };
}`,

  // 14 - Q15: Declaration Merging
  `// Interface merging — same name interfaces are combined
interface Box {
  height: number;
  width: number;
}

interface Box {
  depth: number;
  color: string;
}

// Result: Box has all four properties
const box: Box = { height: 10, width: 20, depth: 30, color: "red" };

// Extending third-party types (e.g., Express)
declare namespace Express {
  interface Request {
    user?: { id: string; role: string };
  }
}

// Now req.user is available in Express handlers

// Enum merging
enum Status {
  Active = 1,
  Inactive = 2,
}

enum Status {
  Pending = 3, // Adds to existing enum
}

const s: Status = Status.Pending; // 3`,

  // 15 - Q16: Template Literal Types
  `// Basic template literal type
type Greeting = \`hello \${string}\`;
const g: Greeting = "hello world"; // OK
// const g2: Greeting = "hi world"; // Error

// Combining string literal unions
type Color = "red" | "blue";
type Size = "small" | "large";
type Shirt = \`\${Size}-\${Color}\`;
// "small-red" | "small-blue" | "large-red" | "large-blue"

// Event handler pattern
type EventName = "click" | "focus" | "blur";
type Handler = \`on\${Capitalize<EventName>}\`;
// "onClick" | "onFocus" | "onBlur"

// CSS unit type
type CSSUnit = "px" | "em" | "rem" | "%";
type CSSValue = \`\${number}\${CSSUnit}\`;

const width: CSSValue = "100px";   // OK
const height: CSSValue = "2.5rem"; // OK
// const bad: CSSValue = "100";    // Error

// Intrinsic string manipulation types
type Upper = Uppercase<"hello">;     // "HELLO"
type Lower = Lowercase<"HELLO">;     // "hello"
type Cap = Capitalize<"hello">;      // "Hello"
type Uncap = Uncapitalize<"Hello">;  // "hello"`,

  // 16 - Q17: infer keyword
  `// Extract return type of a function
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = () => string;
type Result = ReturnType<Fn>; // string

// Extract parameter types
type Parameters<T> = T extends (...args: infer P) => any ? P : never;

type Fn2 = (name: string, age: number) => void;
type Params = Parameters<Fn2>; // [string, number]

// Extract element type from array
type ElementOf<T> = T extends (infer E)[] ? E : never;
type Item = ElementOf<string[]>; // string

// Extract Promise value type
type Awaited<T> = T extends Promise<infer V> ? V : T;
type Value = Awaited<Promise<number>>; // number

// Nested inference
type UnpackPromise<T> = T extends Promise<infer U>
  ? U extends Promise<infer V>
    ? V
    : U
  : T;

type Deep = UnpackPromise<Promise<Promise<string>>>; // string`,

  // 17 - Q18: Namespaces vs Modules
  `// === Modules (recommended) ===
// math.ts — each file is a module
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

// app.ts — import what you need
import { add, subtract } from "./math";
console.log(add(2, 3)); // 5

// === Namespaces (legacy, avoid in new code) ===
namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }

  export function subtract(a: number, b: number): number {
    return a - b;
  }

  // Not exported — private to namespace
  function helper() { return 42; }
}

MathUtils.add(2, 3); // 5
// MathUtils.helper(); // Error: not exported

// Key differences:
// - Modules: file-based, standard ES imports, tree-shakeable
// - Namespaces: global scope, TS-specific, can span multiple files
// - Use modules for all new projects`,

  // 18 - Q19: Strict mode
  `// tsconfig.json
// "strict": true enables ALL of these:
{
  "compilerOptions": {
    "strict": true,
    // Equivalent to enabling all of the following:
    // "noImplicitAny": true,        — error on implicit 'any'
    // "strictNullChecks": true,      — null/undefined not assignable to other types
    // "strictFunctionTypes": true,   — stricter function type checking
    // "strictBindCallApply": true,   — strict bind/call/apply
    // "strictPropertyInitialization": true, — class properties must be initialized
    // "noImplicitThis": true,        — error on 'this' with implicit 'any' type
    // "alwaysStrict": true           — emit "use strict" in every file
  }
}

// Without strictNullChecks:
let name: string = null;  // OK (dangerous!)

// With strictNullChecks:
let name: string = null;  // Error!
let name: string | null = null; // OK — explicitly nullable

// Without noImplicitAny:
function greet(name) { }  // 'name' is implicitly 'any' — OK

// With noImplicitAny:
function greet(name) { }  // Error: Parameter 'name' implicitly has an 'any' type
function greet(name: string) { } // OK — explicit type`,

  // 19 - Q20: == vs ===
  `// == (loose equality) — performs type coercion
console.log(5 == "5");     // true  — string "5" coerced to number
console.log(0 == false);   // true  — false coerced to 0
console.log("" == false);  // true  — both coerced to 0
console.log(null == undefined); // true — special coercion rule

// === (strict equality) — no type coercion
console.log(5 === "5");     // false — different types
console.log(0 === false);   // false — number vs boolean
console.log("" === false);  // false — string vs boolean
console.log(null === undefined); // false — different types

// TypeScript helps catch == mistakes
let x: number = 5;
let y: string = "5";

if (x == y) { }  // TypeScript warning with strict checks
if (x === y) { } // Error: This comparison is always false
                  // (different types can never be ===)

// Best practice: always use === in TypeScript
function isValid(value: string | null): boolean {
  return value !== null && value.length > 0;
}`,
]
</script>

<style scoped>
.inline-code { @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-blue-500 dark:text-blue-400; }
.tip-box { @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300; }
.qa-section { @apply mb-8 p-6 rounded-xl bg-gray-50 dark:bg-primary-light/50 border border-gray-200 dark:border-gray-700; }
</style>
