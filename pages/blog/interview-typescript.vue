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
          <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium">Interview</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          {{ t('blog.itvw.ts.title') }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Feb 10, 2026</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ t('blog.itvw.ts.intro') }}
          </p>
        </section>

        <!-- Q1 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q1') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.ts.a1')"></p>
          <CodeBlock :title="t('blog.itvw.ts.q1c1')" :code="codes[0]" />
        </div>

        <!-- Q2 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q2') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.ts.a2')"></p>
          <CodeBlock :title="t('blog.itvw.ts.q2c1')" :code="codes[1]" />
        </div>

        <!-- Q3 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q3') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.ts.a3')"></p>
          <CodeBlock :title="t('blog.itvw.ts.q3c1')" :code="codes[2]" />
          <div class="tip-box mt-4" v-html="t('blog.itvw.ts.q3tip')"></div>
        </div>

        <!-- Q4 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q4') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.ts.a4')"></p>
          <CodeBlock :title="t('blog.itvw.ts.q4c1')" :code="codes[3]" />
        </div>

        <!-- Q5 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q5') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.ts.a5')"></p>
          <CodeBlock :title="t('blog.itvw.ts.q5c1')" :code="codes[4]" />
        </div>

        <!-- Q6 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q6') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.ts.a6') }}</p>
          <CodeBlock :title="t('blog.itvw.ts.q6c1')" :code="codes[5]" />
        </div>

        <!-- Q7 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q7') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.ts.a7')"></p>
          <CodeBlock :title="t('blog.itvw.ts.q7c1')" :code="codes[6]" />
        </div>

        <!-- Q8 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q8') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.ts.a8')"></p>
          <CodeBlock :title="t('blog.itvw.ts.q8c1')" :code="codes[7]" />
        </div>

        <!-- Q9 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q9') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.ts.a9') }}</p>
          <CodeBlock :title="t('blog.itvw.ts.q9c1')" :code="codes[8]" />
        </div>

        <!-- Q10 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q10') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.ts.a10')"></p>
          <CodeBlock :title="t('blog.itvw.ts.q10c1')" :code="codes[9]" />
        </div>

        <!-- Q11 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q11') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.ts.a11')"></p>
          <CodeBlock :title="t('blog.itvw.ts.q11c1')" :code="codes[10]" />
        </div>

        <!-- Q12 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q12') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.ts.a12')"></p>
          <CodeBlock :title="t('blog.itvw.ts.q12c1')" :code="codes[11]" />
        </div>

        <!-- Q13 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q13') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.ts.a13')"></p>
          <CodeBlock :title="t('blog.itvw.ts.q13c1')" :code="codes[12]" />
        </div>

        <!-- Q14 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q14') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.ts.a14')"></p>
          <CodeBlock :title="t('blog.itvw.ts.q14c1')" :code="codes[13]" />
        </div>

        <!-- Q15 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q15') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.ts.a15') }}</p>
          <CodeBlock :title="t('blog.itvw.ts.q15c1')" :code="codes[14]" />
        </div>

        <!-- Q16 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q16') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.ts.a16') }}</p>
          <CodeBlock :title="t('blog.itvw.ts.q16c1')" :code="codes[15]" />
        </div>

        <!-- Q17 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q17') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.ts.a17')"></p>
          <CodeBlock :title="t('blog.itvw.ts.q17c1')" :code="codes[16]" />
        </div>

        <!-- Q18 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q18') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.ts.a18')"></p>
          <CodeBlock :title="t('blog.itvw.ts.q18c1')" :code="codes[17]" />
        </div>

        <!-- Q19 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q19') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.ts.a19')"></p>
          <CodeBlock :title="t('blog.itvw.ts.q19c1')" :code="codes[18]" />
        </div>

        <!-- Q20 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.ts.q20') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.ts.a20')"></p>
          <CodeBlock :title="t('blog.itvw.ts.q20c1')" :code="codes[19]" />
        </div>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.ts.sum1')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.ts.sum2')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.ts.sum3')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.ts.sum4')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.ts.sum5')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.ts.sum6')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.ts.sum7')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.ts.sum8')"></span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

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
:deep(.inline-code) { @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-blue-500 dark:text-blue-400; }
.tip-box { @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300; }
.qa-section { @apply mb-8 p-6 rounded-xl bg-gray-50 dark:bg-primary-light/50 border border-gray-200 dark:border-gray-700; }
</style>
