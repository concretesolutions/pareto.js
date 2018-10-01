# ![pareto.js](http://i.imgur.com/Ucrl2kV.png)

### An extremely small, intuitive and fast functional utility library for JavaScript

- Only 14 core functions
- Written in TypeScript
- Encourages immutability
- Only [pure functions](https://en.wikipedia.org/wiki/Pure_function) (no side-effects)
- Smaller than [lodash](https://github.com/lodash/lodash)

![](http://img.badgesize.io/concretesolutions/pareto.js/master/dist/paretojs.min.js)
![](http://img.badgesize.io/concretesolutions/pareto.js/master/dist/paretojs.min.js?compression=gzip)
[![build](https://img.shields.io/travis/concretesolutions/pareto.js/master.svg)](https://travis-ci.org/concretesolutions/pareto.js)
[![downloads](https://img.shields.io/npm/dm/paretojs.svg)](https://www.npmjs.com/package/paretojs)
[![npm](https://img.shields.io/npm/v/paretojs.svg)](https://www.npmjs.com/package/paretojs)

## Example

```js
import { flatten, tail } from 'paretojs'

flatten([1, 2, [3, 4], 5]) // [1, 2, 3, 4, 5]
tail([1, 2, 3]) // [2, 3]
```
## Installation

To install the stable version:

```
npm install --save paretojs
```

This assumes that you’re using [npm](https://www.npmjs.com/) with a module bundler like [Webpack](http://webpack.github.io)

## How

**ES2015 or TypeScript:**

```js
import _ from 'paretojs'
```

or

```js
import { chunk, debounce } from 'paretojs'
```

**CommonJS:**

```js
var _ = require('paretojs');
```

or

```js
var chunk = require('paretojs').chunk;
var debounce = require('paretojs').debounce;
```

**UMD:**

```html
<script src="https://unpkg.com/paretojs/dist/paretojs.min.js"></script>
```

## API

* [chunk](#chunk)
* [compose](#compose)
* [curry](#curry)
* [debounce](#debounce)
* [deepCopy](#deepcopy)
* [flatMap](#flatmap)
* [flatten](#flatten)
* [get](#get)
* [matches](#matches)
* [memoize](#memoize)
* [pipe](#pipe)
* [prop](#prop)
* [sort](#sort)
* [tail](#tail)

### chunk

Returns the chunk of an array based on an integer n

```js
import { chunk } from 'paretojs';

chunk([1,2,3,4,5,6,7], 3); // [ [1,2,3], [4,5,6], [7] ]
```

### compose

Gets a composed function

```js
import { compose } from 'paretojs';

const toUpperCase = x => x.toUpperCase();
const exclaim = x => x + '!!!';

const angry = compose(toUpperCase, exclaim);

angry('stop'); // "STOP!!!"
```

### curry

Gets a curried function

```js
import { curry } from 'paretojs';

const add = (x, y) => x + y;

curry(add, 1, 2); // 3
curry(add)(1)(2); // 3
curry(add)(1, 2); // 3
curry(add, 1)(2); // 3
```

### debounce

Creates and returns a new debounced version of the passed function which will postpone its execution until after wait milliseconds have elapsed since the last time it was invoked.

```js
import { debounce } from 'paretojs';

let a = 1;
const fn = () => a = 42;

const debounce = debounce(fn, 500);
debounce();

console.log(a); // 1 before 500ms

setTimeout(() => {
  console.log(a); // 42 after 500ms
}, 600)
```

### deepCopy

Creates a deep copy of an object

```js
import { deepCopy } from 'paretojs';

const object = {
  a: 1,
  b: 2,
  c: {
    d: 3,
  },
};

deepCopy(object); // { a: 1, b: 2, c: { d: 3} }
```

### flatMap

Generates a flattened array by iterating through a collection and applying a function to each element

```js
import { flatMap } from 'paretojs';

const inc = n => n + 1;
flatMap([1, 2, 3], inc)); // [2, 3, 4]

const dup = n => [n, n];
flatMap([1, 2, 3], dup)); // [1, 1, 2, 2, 3, 3]

const sq = n => n ** 2;
flatMap([1, 2, 3], sq)) // [1, 4, 9]
```

### flatten

Flattens (recursively) an array

```js
import { flatten } from 'paretojs';

flatten([1, [2, 3], 4]); // [1, 2, 3, 4]
```

### get

Gets the value of an object property based on a string path provided. If the property is not found, the defaultValues is returned

```js
import { get } from 'paretojs';

get({ a: 1 }, "a")); // 1
get({ a: 1 }, "b", "default")); // "default"
get({ a: { b: 2 } }, "a")); // { b: 2 }
get({ a: { b: 2 } }, "a.b")); // 2
get({ a: { b: 2 } }, "a.c")); // undefined
```

### matches

Checks if an objects matches with some properties

```js
import { matches } from 'paretojs';

const object1 = { a: 1, b: 2 };

matches(object1, { a: 1 }); // true
matches(object1, { a: 1, b: 2 }); // true
matches(object1, { a: 3 }); // false
```

### memoize

Creates a function that memoizes (caches) the result

```js
import { memoize } from 'paretojs';

let count = 0;

const square = x => {
  count = count + 1;
  return x * x;
};

const memoSquare = memoize(square);

count; // 0
memoSquare(10); // 100
memoSquare(10); // 100
memoSquare(10); // 100
count; // 1
```

### pipe

Creates and returns a new function that performs a left-to-right function composition.

```js
import { pipe } from 'paretojs';

const increment = x => x + 1;
const decrement = x => x - 1;

const piped = pipe(increment, increment, decrement);
piped(0); // 1
```

### prop

Gets the property of an object

```js
import { prop } from 'paretojs';

const object = {
  label: 'custom label',
};

prop('label', object); // "custom label"
```

### sort

Sorts a collection based on a property

```js
import { sort } from 'paretojs';

const collection = [
  {
    id: 2,
  },
  {
    id: 1,
  },
];

sort(collection, 'id'); // [{ id: 1 }, { id: 2 }]
```

### tail

Gets all, except the first element of an array.

```js
import { tail } from 'paretojs';

tail([1, 2, 3]); // [2, 3]
```

## Misc

If you want to add a new function, please open an issue and explain why.

## Docs

* [Contributing](https://github.com/concretesolutions/pareto.js/blob/master/CONTRIBUTING.md)
* [Changelog](https://github.com/concretesolutions/pareto.js/blob/master/CHANGELOG.md)
* [Code of Conduct](https://github.com/concretesolutions/pareto.js/blob/master/CODE_OF_CONDUCT.md)
* [License](https://github.com/concretesolutions/pareto.js/blob/master/LICENSE.md)
