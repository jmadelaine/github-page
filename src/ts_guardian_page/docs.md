Functional, composable, reliable type guards! 👍

There are already several great type guard packages, but `ts-guardian` takes it a step further - a functional approach to creating reliable, composable, type-safe type guards.

### Type guards?

A type guard is a function that takes any value, and returns a boolean that determines if the value is compatible with a specified type.

Type guards are used to confirm the structure of data. If your app deals with API responses, objects with optional members, or values that are unknown or change regularly, you'll benefit from `ts-guardian`.

### Core principles

- **Concise, human-readable syntax** - Type definitions can be complex. `ts-guardian`'s syntax is minimal, declarative, and reads like a sentence.
- **Composable** - Complex types are composed of a finite number of basic types. Similarly, type guards can be composed from other type guards due to `ts-guardian`'s functional approach.
- **Full TypeScript support** - Guards will type matching values with an auto-generated type, defined by the type-checking process, which can be implicitly cast to a user-defined type while retaining type-safety.
- **Reliable** - No false positives, no assumptions, and no TypeScript type assertions or inaccurate type predicates. `ts-guardian` is 100% type-safe.

## Installation

```
npm i ts-guardian
```

## API

### The `is` function

```ts
import { is } from 'ts-guardian'
```

Use `is` to create type guards. The `is` function takes a parameter that defines a type, and returns a guard for that type:

```ts
const isString = is('string') // guard for 'string'

isString('') // returns true
isString(0) // returns false
```

### Basic types

Pass a type as a string to create guards for basic types:

```ts
const isBoolean = is('boolean') // guard for 'boolean'
const isNull = is('null') // guard for 'null'
```

Basic types are the bread and butter of `ts-guardian`.

Here's the complete set of keys:

| Key                                          | Type                                       | Equivalent type check                                        |
| -------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------ |
| <code class="language-ts">'any'</code>       | <code class="language-ts">any</code>       | <code class="language-ts">true</code> (matches anything)     |
| <code class="language-ts">'boolean'</code>   | <code class="language-ts">boolean</code>   | <code class="language-ts">typeof value === 'boolean'</code>  |
| <code class="language-ts">'bigint'</code>    | <code class="language-ts">bigint</code>    | <code class="language-ts">typeof value === 'bigint'</code>   |
| <code class="language-ts">'function'</code>  | <code class="language-ts">Function</code>  | <code class="language-ts">typeof value === 'function'</code> |
| <code class="language-ts">'null'</code>      | <code class="language-ts">null</code>      | <code class="language-ts">value === null</code>              |
| <code class="language-ts">'number'</code>    | <code class="language-ts">number</code>    | <code class="language-ts">typeof value === 'number'</code>   |
| <code class="language-ts">'object'</code>    | <code class="language-ts">object</code>    | <code class="language-ts">typeof value === 'object'</code>   |
| <code class="language-ts">'string'</code>    | <code class="language-ts">string</code>    | <code class="language-ts">typeof value === 'string'</code>   |
| <code class="language-ts">'symbol'</code>    | <code class="language-ts">symbol</code>    | <code class="language-ts">typeof value === 'symbol'</code>   |
| <code class="language-ts">'undefined'</code> | <code class="language-ts">undefined</code> | <code class="language-ts">value === undefined</code>         |
| <code class="language-ts">'unknown'</code>   | <code class="language-ts">unknown</code>   | <code class="language-ts">true</code> (matches anything)     |

> When combined with other guards, the `any` and `unknown` type guards take precedence. These are useful in complex types where you can specify part of the type as `any` or `unknown`, for example, an object member.

> Basic type guards will return false for objects created with constructors. For example, <code class="language-ts">is('string')(new String())</code> returns `false`. Use `isInstanceOf` instead.

### Union types

Every type guard has an `or` method which has the same signature as the `is` function. Use `or` to create union types:

```ts
const isStringOrNumber = is('string').or('number') // guard for 'string | number'

isStringOrNumber('') // returns true
isStringOrNumber(0) // returns true
isStringOrNumber(true) // returns false
```

### Literal types

Pass a `number`, `string`, or `boolean` to the `isLiterally` function and the `orLiterally` method to create guards for literal types. You can also pass multiple arguments to create literal union type guards:

```ts
import { isLiterally } from 'ts-guardian'

const isCool = isLiterally('cool') // guard for '"cool"'
const is5 = isLiterally(5) // guard for '5'
const isTrue = isLiterally(true) // guard for 'true'
const is1OrTrue = isLiterally(1).orLiterally(true) // guard for '1 | true'
const isCoolOr5OrTrue = isLiterally('cool', 5, true) // guard for '"cool" | 5 | true'
```

### Array types

To check that every element in an array is of a specific type, use the `isArrayOf` function and the `orArrayOf` method:

```ts
import { is, isArrayOf } from 'ts-guardian'

const isStrArr = isArrayOf('string') // guard for 'string[]'
const isStrOrNumArr = isArrayOf(is('string').or('number')) // guard for '(string | number)[]'
const isStrArrOrNumArr = isArrayOf('string').orArrayOf('number') // guard for 'string[] | number[]'
const isStrArrOrUndefined = is('undefined').orArrayOf('string') // guard for 'string[] | undefined'
```

> Note the difference between <code class="language-ts">isArrayOf(is('string').or('number'))</code> which creates a guard for <code class="language-ts">(string | number)[]</code>, and <code class="language-ts">isArrayOf('string').orArrayOf('number')</code> which creates a guard for <code class="language-ts">string[] | number[]</code>.

### Tuple types

Guards for tuples are defined by passing an array to `is`:

```ts
const isStrNumTuple = is(['string', 'number']) // guard for '[string, number]'

isStrNumTuple(['high']) // returns false
isStrNumTuple(['high', 5]) // returns true
```

Guards for nested tuples can be defined by passing tuple guards to tuple guards:

```ts
const isStrAndNumNumTupleTuple = is(['string', is(['number', 'number'])]) // guard for '['string', [number, number]]'
```

### Object types

The basic type guard for the `object` type (<code class="language-ts">is('object')</code>) should be used rarely, if at all, due to it matching on `null`.

Instead, pass an object to `is`:

```ts
const isObject = is({}) // guard for '{}'

isObject({ some: 'prop' }) // returns true
isObject(null) // returns false
```

To create a guard for an object with specific members, define a guard for each member key:

```ts
const hasAge = is({ age: 'number' }) // guard for '{ age: number; }'

hasAge({ name: 'Bob' }) // returns false
hasAge({ name: 'Bob', age: 40 }) // returns true
```

### Intersection types

Every type guard has an `and` method which has the same signature as the `or` method. Use `and` to create intersection types:

```ts
const hasXOrY = is({ x: 'any' }).or({ y: 'any' }) // guard for '{ x: any; } | { y: any; }'
const hasXAndY = is({ x: 'any' }).and({ y: 'any' }) // guard for '{ x: any; } & { y: any; }'

hasXOrY({ x: '' }) // returns true
hasXOrY({ y: '' }) // returns true
hasXOrY({ x: '', y: '' }) // returns true
hasXAndY({ x: '' }) // returns false
hasXAndY({ y: '' }) // returns false
hasXAndY({ x: '', y: '' }) // returns true
```

### Instance types

Guards for object instances are defined by passing a constructor object to the `isInstanceOf` function and the `orInstanceOf` method:

```ts
const isDate = isInstanceOf(Date) // guard for 'Date'

isDate(new Date()) // returns true

const isRegExpOrUndefined = is('undefined').orInstanceOf(RegExp) // guard for 'RegExp | undefined'

isRegExpOrUndefined(/./) // returns true
isRegExpOrUndefined(new RegExp('.')) // returns true
isRegExpOrUndefined(undefined) // returns true
```

This works with user-defined classes too:

```ts
class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

const steve = new Person('Steve')

const isPerson = isInstanceOf(Person) // guard for 'Person'

isPerson(steve) // returns true
```

### User-defined types

Consider the following type and its guard:

```ts
type Book = {
  title: string
  author: string
}

const isBook = is({
  title: isString,
  author: isString,
})
```

If `isBook` returns `true` for a value, that value will be the primitive-based type:

```ts
{
  title: string
  author: string
}
```

Ideally, we want to type the value as `Book`, while avoiding type assertions and user-defined type predicates.

One way is with a parse function that utilizes TypeScript's implicit casting:

```ts
const parseBook = (input: any): Book | undefined => {
  return isBook(input) ? input : undefined
}
```

TypeScript will complain if the type predicate returned from `isBook` is not compatible with the `Book` type. This function is type-safe, but defining these functions over and over is a little tedious.

Instead, you can call the `parserFor` function:

```ts
import { parserFor } from 'ts-guardian'

const parseBook = parserFor<Book>(isBook)
```

The `parserFor` function takes a guard, and returns a function you can use to parse values.

This function acts in the same way as the previous `parseBook` function. It takes a value and passes it to the guard. If the guard matches, it returns the value typed as the supplied user-defined type. If the guard does not match, the function returns `undefined`:

```ts
const book = {
  title: 'Odyssey',
  author: 'Homer',
}

const film = {
  title: 'Psycho',
  director: 'Alfred Hitchcock',
}

parseBook(book) // returns book as type 'Book'
parseBook(film) // returns undefined
```

The `parserFor` function is also type-safe. TypeScript will complain if you try to create a parser for a user-defined type that isn't compatible with the supplied type guard:

```ts
const parseBook = parserFor<Book>(isBook) // Fine

const parseBook = parserFor<Book>(isString) // TypeScript error - type 'string' is not assignable to type 'Book'
```

### Composition

Guards can be composed from existing guards:

```ts
const isString = is('string') // guard for 'string'
const isStringOrUndefined = isString.or('undefined') // guard for 'string | undefined'
```

You can even pass guards into `or`:

```ts
const isStrOrNum = is('string').or('number') // guard for 'string | number'
const isNullOrUndef = is('null').or('undefined') // guard for 'null | undefined'

// guard for 'string | number | null | undefined'
const isStrOrNumOrNullOrUndef = isStrOrNum.or(isNullOrUndef)
```

### Assertion

Use the `assertThat` function to throw an error if a value does not match against a guard:

```ts
import { is, assertThat } from 'ts-guardian'

const value = getSomeUnknownValue()

// Throws an error if type of value is not 'string'
// Error message: Type of 'value' does not match type guard.
assertThat(value, is('string'))

// Otherwise, type of value is 'string'
value.toUpperCase()
```

You can optionally pass an error message to `assertThat`:

```ts
import { isUser } from '../myTypeGuards/isUser'

assertThat(value, isUser, 'Value is not a user!')
```

### Convenience guards

There are a bunch of simple guards you'll tend to use frequently. `ts-guardian` exports these as convenience guards to make things easier:

| Guard                   | Type                                                       | Equivalent to                                                         |
| ----------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------- |
| `isBoolean`             | <code class="language-ts">boolean</code>                   | <code class="language-ts">is('boolean')</code>                        |
| `isBooleanOrNull`       | <code class="language-ts">boolean &#124; null</code>       | <code class="language-ts">is('boolean').or('null')</code>             |
| `isBooleanOrUndefined`  | <code class="language-ts">boolean &#124; undefined</code>  | <code class="language-ts">is('boolean').or('undefined')</code>        |
| `isBigint`              | <code class="language-ts">bigint</code>                    | <code class="language-ts">is('bigint')</code>                         |
| `isBigintOrNull`        | <code class="language-ts">bigint &#124; null</code>        | <code class="language-ts">is('bigint').or('null')</code>              |
| `isBigintOrUndefined`   | <code class="language-ts">bigint &#124; undefined</code>   | <code class="language-ts">is('bigint').or('undefined')</code>         |
| `isDate`                | <code class="language-ts">Date</code>                      | <code class="language-ts">isInstanceOf(Date)`</code>                  |
| `isDateOrNull`          | <code class="language-ts">Date &#124; null</code>          | <code class="language-ts">isInstanceOf(Date).or('null')</code>        |
| `isDateOrUndefined`     | <code class="language-ts">Date &#124; undefined</code>     | <code class="language-ts">isInstanceOf(Date).or('undefined')</code>   |
| `isFunction`            | <code class="language-ts">Function</code>                  | <code class="language-ts">is('function')</code>                       |
| `isFunctionOrNull`      | <code class="language-ts">Function &#124; null</code>      | <code class="language-ts">is('function').or('null')</code>            |
| `isFunctionOrUndefined` | <code class="language-ts">Function &#124; undefined</code> | <code class="language-ts">is('function').or('undefined')</code>       |
| `isNull`                | <code class="language-ts">null</code>                      | <code class="language-ts">is('null')</code>                           |
| `isNullOrUndefined`     | <code class="language-ts">null &#124; undefined</code>     | <code class="language-ts">is('null').or('undefined')</code>           |
| `isNumber`              | <code class="language-ts">number</code>                    | <code class="language-ts">is('number')</code>                         |
| `isNumberOrNull`        | <code class="language-ts">number &#124; null</code>        | <code class="language-ts">is('number').or('null')</code>              |
| `isNumberOrUndefined`   | <code class="language-ts">number &#124; undefined</code>   | <code class="language-ts">is('number').or('undefined')</code>         |
| `isRegExp`              | <code class="language-ts">RegExp</code>                    | <code class="language-ts">isInstanceOf(RegExp)`</code>                |
| `isRegExpOrNull`        | <code class="language-ts">RegExp &#124; null</code>        | <code class="language-ts">isInstanceOf(RegExp).or('null')</code>      |
| `isRegExpOrUndefined`   | <code class="language-ts">RegExp &#124; undefined</code>   | <code class="language-ts">isInstanceOf(RegExp).or('undefined')</code> |
| `isString`              | <code class="language-ts">string</code>                    | <code class="language-ts">is('string')</code>                         |
| `isStringOrNull`        | <code class="language-ts">string &#124; null</code>        | <code class="language-ts">is('string').or('null')</code>              |
| `isStringOrUndefined`   | <code class="language-ts">string &#124; undefined</code>   | <code class="language-ts">is('string').or('undefined')</code>         |
| `isSymbol`              | <code class="language-ts">Symbol</code>                    | <code class="language-ts">is('symbol')</code>                         |
| `isSymbolOrNull`        | <code class="language-ts">Symbol &#124; null</code>        | <code class="language-ts">is('symbol').or('null')</code>              |
| `isSymbolOrUndefined`   | <code class="language-ts">Symbol &#124; undefined</code>   | <code class="language-ts">is('symbol').or('undefined')</code>         |
| `isUndefined`           | <code class="language-ts">undefined</code>                 | <code class="language-ts">is('undefined')</code>                      |

## Why use `ts-guardian`?

`ts-guardian` provides type-safe type guards.

Consider the following problem:

### Problem

We fetch some data from an API. We expect the data to contain information about the current user. How can we guarantee the data is of the correct `User` type before we use it in our app?

Here is our `User` type:

```ts
type User = {
  id: number
  name: string
  email?: string
  phone?: {
    primary?: string
    secondary?: string
  }
}
```

### Solution 1 - User-defined type guards 👎

With TypeScript's [user-defined type guards][user-defined-type-guards], we could write an `isUser` function to confirm the value is of type `User`. It would probably look something like this:

```ts
// Returns user-defined type guard `input is User`
const isUser = (input: any): input is User => {
  const u = input as User
  return (
    typeof u === 'object' &&
    u !== null &&
    typeof u.id === 'number' &&
    typeof u.name === 'string' &&
    (typeof u.email === 'string' || u.email === undefined) &&
    ((typeof u.phone === 'object' &&
      u.phone !== null &&
      (typeof u.phone.primary === 'string' || u.phone.primary === undefined) &&
      (typeof u.phone.secondary === 'string' || u.phone.secondary === undefined)) ||
      u.phone === undefined)
  )
}
```

Not pretty, but it works!

Apart from being hard to read and harder to reason about, this function seems to get the job done. We have type safety around the `User` type. Great!

But what if we did this instead:

```ts
const isUser = (input: any): input is User => {
  return typeof input === 'object'
}
```

Clearly this function is not enough to confirm that `input` is of type `User`, but TypeScript doesn't complain at all, because _type predicates are effectively type assertions._

By saying to TypeScript "if I return `true`, consider `input` to be of type `User`", we lose type safety, and introduce potential **runtime errors** into our app. 😫

There is no connection between the result of `isUser` and the compatibility of the type of `input` with the `User` type, other than the assumption that our (obviously error-free) boolean logic accurately defines the type we are asserting. Sounds reliable.

_So how can we **guarantee** that a value is compatible with our user-defined type?_

Let's try something else...

### Solution 2 - Primitive-based type guards 👍

The solution is that _we make no assumptions that the value is a user-defined type._

Instead, we define a **primitive-based type** of what a `User` object looks like, and let TypeScript determine whether this **primitive-based type** is compatible with the `User` type:

> A _primitive-based type_ is a type constructed from only primitive TypeScript types (`string`, `number`, `undefined`, `any`, etc...).

```ts
import { is, isStringOrUndefined, isUndefined } from 'ts-guardian'

// We make no assumptions that the data is a user-defined type
const isUser = is({
  id: 'number',
  name: 'string',
  email: isStringOrUndefined,
  phone: isUndefined.or({
    primary: isStringOrUndefined,
    secondary: isStringOrUndefined,
  }),
})
```

Not only is this much more readable, but instead of `isUser` returning the type predicate `input is User`, it now returns a primitive-based type predicate that gets auto-generated from our type checking, so it's 100% accurate.

In this case, the type predicate looks like:

```ts
// Type predicate for our primitive-based type
input is {
    id: number;
    name: string;
    email: string | undefined;
    phone: {
        primary: string | undefined;
        secondary: string | undefined;
    } | undefined;
}
```

It's now up to TypeScript to tell us if this type is compatible with the `User` type:

```ts
// TypeScript complains if the primitive-based type predicate is not compatible with 'User'
const parseUser = parserFor<User>(isUser)
```

If the type predicate from `isUser` is not compatible with the `User` type, then we get a TypeScript compiler error telling us this. 🎉

Not only that, but the syntax is clean, concise, and readable. Nice! 😎

[license-badge]: https://img.shields.io/badge/license-MIT-informational.svg
[license]: license.md
[npm]: https://npmjs.org/package/ts-guardian
[npm-badge]: https://badge.fury.io/js/ts-guardian.svg
[user-defined-type-guards]: https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
[typescript]: https://www.typescriptlang.org/docs
[functional-programming]: https://en.wikipedia.org/wiki/Functional_programming
