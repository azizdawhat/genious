# @genious/cyan

⏰	Iterable object with methods to perform async operations with Concurrency control.

* [Usage](#usage)
	* [Cyan()](#cyan)
	* [Cyan.cyanify()](#cyancyanify)
	* [Cyan.prototype.filter()](#cyanprototypefilter)
	* [Cyan.prototype.flatMap()](#cyanprototypeflatmap)
	* [Cyan.prototype.map()](#cyanprototypemap)
	* [Cyan.prototype.toArray()](#cyanprototypetoarray)
	* [Cyan.prototype\[@@asyncIterator\]()](#cyanprototypeasynciterator)
	* [Cyan\[@@species\]](#cyanspecies)

## Installation

Install **Cyan** using your favorite package manager.

```shell
$ npm i @genious/cyan
```

## Usage

Import **Cyan**.

```javascript
import Cyan from '@genious/cyan';
```

#### Cyan()

Creates a new `Cyan` object.

* **@param** `{IterableIterator<*>}` **[iterable=Array()]**

```javascript
const iterable = new Cyan((Object.entries({})));
```

#### Cyan.cyanify()

For an async generator function, returns an instance of `Cyan` containing the return values of async generator function.

* **param** `{?{}}` **thisArg**
* **param** `{...*}` **args**
* **returns** `{Cyan}`
* **this** `Function`

```javascript
const func = Cyan.cyanify.bind(events.on);
```

#### Cyan.prototype.filter()

Returns a new `Cyan` instance containing the filtered values of the called `Cyan` object.

* **param** `{function}` **callbackFn**
* **param** `{number}` **[n=Number.MAX\_SAFE\_INTEGER]**
* **param** `{?{}}` **[thisArg=undefined]**
* **returns** `{Cyan}`

#### Cyan.prototype.flatMap()

Returns a new instance of `Cyan` formed by mapped and flattened values of called `Cyan` object.

* **param** `{function}` **callbackFn**
* **param** `{number}` **[n=Number.MAX\_SAFE\_INTEGER]**
* **param** `{?{}}` **[thisArg=undefined]**
* **returns** `{Cyan}`

```javascript
iterable.flatMap(async function ([eventName, listener,]) {
  return func(null, this, eventName).map(function () {
    return listener();
  }).toArray();
}, Number.MAX_SAFE_INTEGER, chokidar.watch([], {}));
```

#### Cyan.prototype.map()

Returns a new instance of `Cyan` formed by mapped values of called `Cyan` object.

* **param** `{function}` **callbackFn**
* **param** `{number}` **[n=Number.MAX\_SAFE\_INTEGER]**
* **param** `{?{}}` **[thisArg=undefined]**
* **returns** `{Cyan}`

#### Cyan.prototype.toArray()

Returns a `Promise` that resolves to an `Array` with values of async iterable.

* **returns** `{Promise<any[]>}`

```javascript
await iterable.toArray();
```

#### Cyan.prototype\[@@asyncIterator\]()

Returns `Cyan` iterator with values of async iterable.

* **@yields** `{Promise<*>}`

#### Cyan\[@@species\]

Returns `constructor` of `Cyan`.

* **returns** `{Cyan}`

## Authors

Aziz Da <azizdawhat@gmail.com>

## License

[MPL-2.0]()
