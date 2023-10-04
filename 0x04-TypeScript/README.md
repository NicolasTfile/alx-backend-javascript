# TypeScript Fundamentals

## 1. Basic Types in TypeScript

TypeScript provides several basic types, including `number`, `string`, `boolean`, `null`, and `undefined`.


```
let age: number = 30;
let name: string = "Alice";
let isValid: boolean = true;
let person: null = null;
let job: undefined = undefined;
```

## 2. Interfaces, Classes, and Functions

TypeScript allows you to define interfaces to describe object shapes, create classes for object blueprints, and write functions with typed parameters and return values.

```
interface Person {
  name: string;
  age: number;
}

class Employee implements Person {
  constructor(public name: string, public age: number) {}
}

function greet(person: Person): string {
  return `Hello, ${person.name}!`;
}

const employee = new Employee("Bob", 25);
console.log(greet(employee)); // Output: Hello, Bob!
```

## 3. Working with the DOM and TypeScript

You can use TypeScript to work with the DOM by querying and manipulating HTML elements in a type-safe manner.

```
const button = document.querySelector("#myButton") as HTMLButtonElement;
button.addEventListener("click", () => {
  alert("Button clicked!");
});
```

## 4. Generic Types

TypeScript supports generic types that allow you to create functions and classes that work with different data types while maintaining type safety.

```
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("Hello, TypeScript!");
```

## 5. Namespaces

Namespaces allow you to organize your code by grouping related functionality under a common name.

```
namespace Geometry {
  export function calculateArea(width: number, height: number): number {
    return width * height;
  }
}

const area = Geometry.calculateArea(5, 10);
```

## 6. Merging Declarations

TypeScript allows declaration merging, where you can add properties or methods to existing interfaces or classes.

```
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = { name: "Alice", age: 30 };
```

## 7. Ambient Namespace for External Libraries

When working with external libraries without TypeScript type definitions, you can use ambient namespaces to provide type information.

```
declare namespace jQuery {
  function ajax(url: string, settings?: any): void;
}

jQuery.ajax("https://example.com/api", { method: "GET" });
```

## 8. Basic Nominal Typing with TypeScript

TypeScript primarily uses structural typing, but you can create nominal types for stricter type checking.

```
type UserId = number & { readonly brand: unique symbol };

function createUserId(id: number): UserId {
  return id as UserId;
}

const userId: UserId = createUserId(123);
```

These fundamental concepts and features demonstrate how TypeScript provides static type checking and enhanced tooling for JavaScript development.
