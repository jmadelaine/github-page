### Type guards?

Type guards validate the structure of data.

A type guard is a function that takes an unknown value and returns a boolean that indicates if that value is compatible with a specified type.

If your app deals with external data, API responses, or unknown values, you'll benefit from `ts-guardian`.

### Why `ts-guardian`?

- **Concise** - Types can be complex, so syntax is minimal and declarative to preserve legibility.
- **Composable** - Types can be composed from other types, so type guards allow similar composition.
- **Reliable** - [Type assertions][type-assertions] and [type predicates][type-predicates] make assumptions that cause runtime type errors, so these are avoided.

`ts-guardian` uses a _primitive-based type_ system to ensure accurate type validation.

## Overview

Here's an example of using `ts-guardian` to type check an API response:

```ts
import { is } from 'ts-guardian'

// Define a type guard
const isBook = is({ id: 'number', author: 'string', title: 'string' })

// Fetch a book ('response' is of type 'unknown')
const response = await fetchBook()

// Validate that 'response' is a book
if (isBook(response)) {
  // 'response' is the expected type
} else {
  // 'response' is not the expected type
}
```

_"But why not just use `typeof`?"_

Consider the following `User` type:

```ts
type User = {
  id: number
  name: string
  email?: string
  roles?: {
    id: number
    roleType: 'member' | 'admin' | 'restricted'
  }[]
}
```

Here's the `ts-guardian` type guard for a `User`:

```ts
const isUser = is({
  id: 'number',
  name: 'string',
  email: isStringOrUndefined,
  roles: isUndefined.orArrayOf({
    id: 'number',
    roleType: isLiterally('member', 'admin', 'restricted'),
  }),
})
```

and the equivalent `typeof` type guard:

```ts
const isUser = u =>
  typeof u === 'object' &&
  u !== null &&
  typeof u.id === 'number' &&
  typeof u.name === 'string' &&
  (typeof u.email === 'string' || u.email === undefined) &&
  ((Array.isArray(u.roles) &&
    u.roles.every(
      r =>
        typeof r === 'object' &&
        r !== null &&
        typeof r.id === 'number' &&
        (r.roleType === 'member' || r.roleType === 'admin' || r.roleType === 'restricted')
    )) ||
    u.roles === undefined)
```

`ts-guardian`'s syntax resembles the TypeScript type, is concise and easy to reason about, and implicitly types the value.

## Installation

```
npm i ts-guardian
```

## API

### The `is` function

```ts
import { is } from 'ts-guardian'
```

Use the `is` function to create type guards. `is` takes a **type definition** and returns the type guard:

```ts
const isString = is('string') // guard for 'string'

isString('') // true
isString(0) // false
```

A **type definition** can be a basic type string, an array, an object, or another type guard:

```ts
const isNumber = is('number') // guard for 'number'
const isStrNumTuple = is(['string', 'number']) // guard for '[string, number]'
const hasName = is({ name: 'string' }) // guard for '{ name: string; }'
const hasAuthor = is({ author: hasName }) // guard for '{ author: { name: string; }; }'
```

### Basic types

Pass a string to create guards for basic types:

```ts
const isBoolean = is('boolean') // guard for 'boolean'
const isNull = is('null') // guard for 'null'
const isObject = is('object') // guard for 'object'
const isAny = is('any') // guard for 'any'
```

Complex types are constructed from basic types, so you'll be using these a lot. Here's the complete list of keys:

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

> When combined with other type definitions, the `any` and `unknown` type guards take precedence. These are useful in complex types where you can specify part of the type as `any` or `unknown`, for example, an object member.

> Basic type guards will return `false` for objects created with constructors. For example, <span style="white-space: nowrap;"><code class="language-ts">is('string')(new String())</code></span> returns `false`. Use `isInstanceOf` instead.

> The `object` type guard matches `null` values. You probably want to use <code class="language-ts">is({})</code> instead.

### Tuple types

Pass an array to create guards for tuples:

```ts
const isStrNumTuple = is(['string', 'number']) // guard for '[string, number]'

isStrNumTuple(['high']) // false
isStrNumTuple(['high', 5]) // true
```

Pass tuple guards to tuple guards to create guards for nested tuples:

```ts
const isStrAndNumNumTupleTuple = is(['string', is(['number', 'number'])]) // guard for '[string, [number, number]]'
```

### Object types

Pass an object to create guards for objects:

```ts
const isObject = is({}) // guard for '{}'

isObject({}) // true
isObject(null) // false
```

Define a guard for each member key to create a guard for objects with specific members:

```ts
const hasAge = is({ age: 'number' }) // guard for '{ age: number; }'

hasAge({ name: 'Bob' }) // false
hasAge({ name: 'Bob', age: 40 }) // true
```

Pass nested objects to create guards for nested objects:

```ts
const hasAuthor = is({ author: { name: 'string' } }) // guard for '{ author: { name: string; }; }'

hasAuthor({ author: { name: 'Bob' } }) // true
```

### Union types

Every type guard has an `or` method with the same signature as the `is` function. Use `or` to create union types:

```ts
const isStringOrNumber = is('string').or('number') // guard for 'string | number'

isStringOrNumber('') // true
isStringOrNumber(0) // true
isStringOrNumber(true) // false
```

### Literal types

Pass a `number`, `string`, or `boolean` to `isLiterally` and `orLiterally` to create literal type guards. You can also pass multiple arguments to create union literal type guards:

```ts
import { isLiterally } from 'ts-guardian'

const isCool = isLiterally('cool') // guard for '"cool"'
const is5 = isLiterally(1) // guard for '1'
const isTrue = isLiterally(true) // guard for 'true'
const isNumberOrReset = is('number').orLiterally('reset') // guard for 'number | "reset"'
const isCoolOr5OrTrue = isLiterally('cool', 1, true) // guard for '"cool" | 1 | true'
```

### Array types

Use `isArrayOf` and `orArrayOf` to create array type guards:

```ts
import { is, isArrayOf } from 'ts-guardian'

const isStrArr = isArrayOf('string') // guard for 'string[]'
const isStrOrNumArr = isArrayOf(is('string').or('number')) // guard for '(string | number)[]'
const isStrArrOrNumArr = isArrayOf('string').orArrayOf('number') // guard for 'string[] | number[]'
```

> Note the difference between <code class="language-ts">isArrayOf(is('string').or('number'))</code> which creates a guard for <code class="language-ts">(string | number)[]</code>, and <code class="language-ts">isArrayOf('string').orArrayOf('number')</code> which creates a guard for <code class="language-ts">string[] | number[]</code>.

### Record types

Use `isRecordOf` and `orRecordOf` to create record type guards:

```ts
import { is, isRecordOf } from 'ts-guardian'

const isStrRecord = isRecordOf('string') // guard for 'Record<PropertyKey, string>'
const isStrOrNumRecord = isRecordOf(is('string').or('number')) // guard for 'Record<PropertyKey, string | number>'
const isStrRecordOrNumRecord = isRecordOf('string').orRecordOf('number') // guard for 'Record<PropertyKey, string> | Record<PropertyKey, number>'
```

### Instance types

Pass a constructor object to `isInstanceOf` and `orInstanceOf` to create guards for object instances:

```ts
const isDate = isInstanceOf(Date) // guard for 'Date'

isDate(new Date()) // true

const isRegExpOrUndefined = is('undefined').orInstanceOf(RegExp) // guard for 'RegExp | undefined'

isRegExpOrUndefined(/./) // true
isRegExpOrUndefined(new RegExp('.')) // true
isRegExpOrUndefined(undefined) // true
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

isPerson(steve) // true
```

### Intersection types

Every type guard has an `and` method with the same signature as `or`. Use `and` to create intersection type guards:

```ts
const hasXOrY = is({ x: 'any' }).or({ y: 'any' }) // guard for '{ x: any; } | { y: any; }'
const hasXAndY = is({ x: 'any' }).and({ y: 'any' }) // guard for '{ x: any; } & { y: any; }'

hasXOrY({ x: '' }) // true
hasXOrY({ y: '' }) // true
hasXOrY({ x: '', y: '' }) // true
hasXAndY({ x: '' }) // false
hasXAndY({ y: '' }) // false
hasXAndY({ x: '', y: '' }) // true
```

### User-defined types

Consider the following type and its guard:

```ts
type Book = { title: string; author: string }

const isBook = is({ title: 'string', author: 'string' })
```

If `isBook` returns `true` for a value, that value will be typed as the primitive-based type:

```ts
{
  title: string
  author: string
}
```

Ideally, we want to type the value as `Book`, while avoiding type assertions and user-defined type predicates.

One way is with a parse function that utilizes TypeScript's implicit casting:

```ts
const parseBook = (input: unknown): Book | undefined => (isBook(input) ? input : undefined)
```

TypeScript will complain if the type predicate returned from `isBook` is not compatible with the `Book` type.

This function is type-safe, but defining these functions over and over is tedious. Instead, you can use `parserFor`:

```ts
import { parserFor } from 'ts-guardian'

const parseBook = parserFor<Book>(isBook)
```

The `parserFor` function takes a guard and a type argument, and returns the parser function. `parserFor` is also type-safe, and TypeScript will complain if you try to create a parser for a user-defined type that isn't compatible with the supplied type guard.

```ts
const book = { title: 'Odyssey', author: 'Homer' }
const film = { title: 'Psycho', director: 'Alfred Hitchcock' }

parseBook(book) // returns book as type 'Book'
parseBook(film) // returns undefined
```

### Safe assertion

Use the `assertThat` function to throw an error if a value does not pass a type guard:

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
assertThat(value, isUser, `${String(value)} is not a user!`)
```

### Convenience guards

There are some guards you'll use frequently, so they're exported for convenience:

| Guard                   | Type                                                       | Equivalent to                                                   |
| ----------------------- | ---------------------------------------------------------- | --------------------------------------------------------------- |
| `isBoolean`             | <code class="language-ts">boolean</code>                   | <code class="language-ts">is('boolean')</code>                  |
| `isBooleanOrNull`       | <code class="language-ts">boolean &#124; null</code>       | <code class="language-ts">is('boolean').or('null')</code>       |
| `isBooleanOrUndefined`  | <code class="language-ts">boolean &#124; undefined</code>  | <code class="language-ts">is('boolean').or('undefined')</code>  |
| `isBigint`              | <code class="language-ts">bigint</code>                    | <code class="language-ts">is('bigint')</code>                   |
| `isBigintOrNull`        | <code class="language-ts">bigint &#124; null</code>        | <code class="language-ts">is('bigint').or('null')</code>        |
| `isBigintOrUndefined`   | <code class="language-ts">bigint &#124; undefined</code>   | <code class="language-ts">is('bigint').or('undefined')</code>   |
| `isFunction`            | <code class="language-ts">Function</code>                  | <code class="language-ts">is('function')</code>                 |
| `isFunctionOrNull`      | <code class="language-ts">Function &#124; null</code>      | <code class="language-ts">is('function').or('null')</code>      |
| `isFunctionOrUndefined` | <code class="language-ts">Function &#124; undefined</code> | <code class="language-ts">is('function').or('undefined')</code> |
| `isNull`                | <code class="language-ts">null</code>                      | <code class="language-ts">is('null')</code>                     |
| `isNullOrUndefined`     | <code class="language-ts">null &#124; undefined</code>     | <code class="language-ts">is('null').or('undefined')</code>     |
| `isNumber`              | <code class="language-ts">number</code>                    | <code class="language-ts">is('number')</code>                   |
| `isNumberOrNull`        | <code class="language-ts">number &#124; null</code>        | <code class="language-ts">is('number').or('null')</code>        |
| `isNumberOrUndefined`   | <code class="language-ts">number &#124; undefined</code>   | <code class="language-ts">is('number').or('undefined')</code>   |
| `isString`              | <code class="language-ts">string</code>                    | <code class="language-ts">is('string')</code>                   |
| `isStringOrNull`        | <code class="language-ts">string &#124; null</code>        | <code class="language-ts">is('string').or('null')</code>        |
| `isStringOrUndefined`   | <code class="language-ts">string &#124; undefined</code>   | <code class="language-ts">is('string').or('undefined')</code>   |
| `isSymbol`              | <code class="language-ts">symbol</code>                    | <code class="language-ts">is('symbol')</code>                   |
| `isSymbolOrNull`        | <code class="language-ts">symbol &#124; null</code>        | <code class="language-ts">is('symbol').or('null')</code>        |
| `isSymbolOrUndefined`   | <code class="language-ts">symbol &#124; undefined</code>   | <code class="language-ts">is('symbol').or('undefined')</code>   |
| `isUndefined`           | <code class="language-ts">undefined</code>                 | <code class="language-ts">is('undefined')</code>                |

## Primitive-based type guards

### User-defined type guards 👎

With TypeScript's [user-defined type guards][user-defined-type-guards], we could create an `isUser` function to confirm the data is of type `User`. It would probably look something like this:

```ts
// Returns user-defined type guard `input is User`
const isUser = (input: unknown): input is User => {
  const u = input as User
  return (
    typeof u === 'object' &&
    u !== null &&
    typeof u.id === 'number' &&
    typeof u.name === 'string' &&
    (typeof u.email === 'string' || u.email === undefined) &&
    ((Array.isArray(u.roles) &&
      u.roles.every(
        r =>
          typeof r === 'object' &&
          r !== null &&
          typeof r.id === 'number' &&
          (r.roleType === 'member' || r.roleType === 'admin' || r.roleType === 'restricted')
      )) ||
      u.roles === undefined)
  )
}
```

Hard to read and harder to reason about, but it works!

But what if we did this instead:

```ts
const isUser = (input: unknown): input is User => {
  return typeof input === 'object'
}
```

Clearly this function is not enough to confirm that `input` is of type `User`, but TypeScript doesn't complain at all, because _type predicates are type assertions._

We're relying on the skills of the developer to create an error-free type guard, with any mistakes resulting in runtime type errors.

So how do we _guarantee_ that a value is compatible with a user-defined type?

### Primitive-based type guards 👍

We make _no assumptions_ that the value is a user-defined type.

Instead, we define a **primitive-based type** of what a `User` object looks like, and let TypeScript determine if this primitive-based type is compatible with the `User` type:

> A primitive-based type is a type constructed from only primitive types (`string`, `number`, `undefined`, `any`, etc...).

```ts
import { is, isStringOrUndefined, isUndefined, isLiterally } from 'ts-guardian'

const isUser = is({
  id: 'number',
  name: 'string',
  email: isStringOrUndefined,
  roles: isUndefined.orArrayOf({
    id: 'number',
    roleType: isLiterally('member', 'admin', 'restricted'),
  }),
})
```

Not only is this more concise, but instead of `isUser` returning the type predicate `input is User`, it now returns a primitive-based type predicate, generated from our type checking, so we know it's accurate.

In this case, the type predicate looks like:

```ts
// Type predicate for our primitive-based type
input is {
    id: number;
    name: string | undefined;
    email: string | undefined;
    roles: {
        id: number;
        roleType: 'member' | 'admin' | 'restricted';
    }[] | undefined;
}
```

It's now up to TypeScript to tell us if this type is compatible with the `User` type:

```ts
const response = getUserFromApi()
// TypeScript complains if the primitive-based type predicate returned by `isUser` is not compatible with the 'User' type
const user: User | undefined = isUser(response) ? response : undefined
```

If the type predicate from `isUser` is not compatible with the `User` type, then we get a TypeScript compiler error. 🎉

[license-badge]: https://img.shields.io/badge/license-MIT-informational.svg
[license]: license.md
[npm]: https://npmjs.org/package/ts-guardian
[npm-badge]: https://badge.fury.io/js/ts-guardian.svg
[user-defined-type-guards]: https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
[typescript]: https://www.typescriptlang.org/docs
[functional-programming]: https://en.wikipedia.org/wiki/Functional_programming
[type-predicates]: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
[type-assertions]: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
