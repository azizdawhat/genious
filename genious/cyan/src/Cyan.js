// eslint-disable-next-line object-curly-newline
import { any, get, isFunction, pipe } from '@genious/util';

import Red from './Red.js';

const { of } = Array;

const { MAX_SAFE_INTEGER } = Number;

const { flatMap, map, toArray } = Red;

const { construct } = Reflect;

const { asyncIterator, iterator } = Symbol;

class Cyan {
  /**
   * For an async generator function, returns an instance of Cyan
   * containing the return values of async generator function.
   * @param {?{}} thisArg
   * @param {...*} args
   * @returns {Cyan}
   * @this Function
   */
  static cyanify(thisArg, ...args) {
    return pipe.call([this, of, construct.bind(null, Cyan)], thisArg, ...args);
  }

  /**
   * @type {Iterable<*>}
   */// eslint-disable-next-line no-array-constructor
  #iterable = Array();

  /**
   * Creates a new Cyan object.
   * @param {Iterable<*>} [iterable=Array()]
   */// eslint-disable-next-line no-array-constructor
  constructor(iterable = Array()) {
    if (!(any.call([
      pipe.bind([get.bind([asyncIterator]), isFunction], null),
      pipe.bind([get.bind([iterator]), isFunction], null),
    ], null, iterable))) {
      throw new TypeError(`${iterable} is not iterable!`);
    }

    this.#iterable = iterable;
  }

  /**
   * Returns a new instance of Cyan formed by mapped
   * and flattened values of called Cyan object.
   * @param {function} callbackFn
   * @param {number} [n=Number.MAX_SAFE_INTEGER]
   * @param {?{}} [thisArg]
   * @returns {Cyan}
   */
  flatMap(callbackFn, n = MAX_SAFE_INTEGER) {
    // eslint-disable-next-line prefer-rest-params
    return Cyan.cyanify.call(flatMap, this, callbackFn, n, arguments[2]);
  }

  /**
   * @param {function} callbackFn
   * @param {number} [n=Number.MAX_SAFE_INTEGER]
   * @param {?{}} [thisArg]
   * @returns {Cyan}
   */
  map(callbackFn, n = MAX_SAFE_INTEGER) {
    // eslint-disable-next-line prefer-rest-params
    return Cyan.cyanify.call(map, this, callbackFn, n, arguments[2]);
  }

  /**
   * Returns a Promise that resolves to an Array
   * with values of async iterable.
   * @returns {Promise<any[]>}
   */
  async toArray() {
    return toArray.call(this);
  }

  /**
   * Returns Cyan iterator with values of async iterable
   * @yields {Promise<any>}
   */
  async* [asyncIterator]() {
    yield* this.#iterable;
  }
}

export default Cyan;
