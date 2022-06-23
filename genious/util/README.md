# @genious/util

🎒	AnotherJavaScript library of utility functions.

* [Usage](#usage)
	* [any()](#any)
	* [chunk()](#chunk)
	* [get()](#get)
	* [pipe()](#pipe)
	* [nAry()](#nary)
	* [isFunction()](#isfunction)
	* [isString()](#isstring)
	* [type()](#type)

## Installation

Install **Util** using your favorite package manager.

```shell
$ npm i @genious/util
```

## Usage

To use a utility, e.g. `chunk`, import the submodule from the parent module.

```javascript
import { chunk } from '@genious/util';
```

Or import utility using the appropriate subpath.

```javascript
import chunk from '@genious/util/chunk';
```

#### any()

For an array of functions, returns true if any of the calls are satisfied by the arguments otherwise returns false.

* **param** `{?{}}` **thisArg**
* **param** `{...*}` **args**
* **returns** `{boolean}`
* **this** `Array`

```javascript
const isIterable = any.bind([
  pipe.bind([
    get.bind([Symbol.asyncIterator,]),
    isFunction,
  ], null),
  pipe.bind([
    get.bind([Symbol.iterator,]),
    isFunction,
  ], null),
], null);

console.log(isIterable({}));
// false
```

#### chunk()

For an array, returns a new array containing subarrays of length length.

* **param** `{number}` **[length=Number.MAX\_SAFE\_INTEGER]**
* **returns** `{any[]}`
* **this** `Array`

```javascript
const A = (chunk.call([], 1)).reduce(async function (previousValue, currentValue) {
  const A = currentValue.map(function (value) {
    return value();
  });

  return [
    ...(await previousValue),
    ...(await Promise.all(A)),
  ];
});

await Promise.all(A);
```

#### get()

For an array of value as path, returns the value of obj at the given path.

* **param** `{?{}}` **obj**
* **returns** `{*}`
* **this** `Array`

```javascript
const getIterator = get.bind([Symbol.iterator,]);

console.log(getIterator({}));
// undefined
```

#### pipe()

For an array of functions, reduce array by calling currentFunction with the return value of previousFunction.

* **param** `{?{}}` **thisArg**
* **param** `{...*}` **args**
* **returns** `{*}`
* **this** `Array`

```javascript
const isIterable = pipe.bind([
  get.bind([Symbol.iterator,]),
  isFunction,
], null);

console.log(isIterable({}));
// false
```

#### nAry()

For a function, call function using a subarray of arguments of length n.

* **param** `{number}` **n**
* **param** `{?{}}` **thisArg**
* **param** `{...*}` **args**
* **returns** `{*}`
* **this** `Function`

```javascript
const obj = {};

const values = Object.keys(obj).map(nAry.bind(function (key, {[key]: value,} = this) {
  return value;
}, 1, obj));
```

#### isFunction()

Returns true if value is of type function otherwise returns false.

* **param** `{*}` **value**
* **returns** `{boolean}`

```javascript
console.log(isFunction(function () {}));
// true
```

#### isString()

Returns true if value is of type string otherwise returns false.

* **param** `{*}` **value**
* **returns** `{boolean}`

```javascript
console.log(isString((new String('Hello, World!'))));
// true
```

#### type()

Returns type of value from stringTag.

* **param** `{*}` **obj**
* **returns** `{string}`

```javascript
console.log((Object.prototype.toString.call({})));
// [object Object]

console.log(type({}));
// Object
```

## Authors

Aziz Da <azizdawhat@gmail.com>

## License

[MPL-2.0]()
