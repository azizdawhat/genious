import { chunk, nAry, pipe } from '@genious/util';

const { prototype: { call } } = Function;

const { MAX_SAFE_INTEGER } = Number;

class Red {
  /**
   * @param {number} [n=Number.MAX_SAFE_INTEGER]
   * @this {IterableIterator<*>}
   * @yields {Promise<any[]>}
   */
  static async* #chunk(n = MAX_SAFE_INTEGER) {
    yield* chunk.call((await Red.toArray.call(this)), n);
  }

  /**
   * @param {number} [depth=1]
   * @this {IterableIterator<*>}
   * @yields {Promise<*>}
   */
  static async* #flat(depth = 1) {
    yield* (await Red.toArray.call(this)).flat(depth);
  }

  /**
   * @param {function} callbackFn
   * @param {number} [n=Number.MAX_SAFE_INTEGER]
   * @param {?{}} [thisArg=undefined]
   * @this {IterableIterator<*>}
   * @yields {Promise<*>}
   */
  static async* filter(callbackFn, n = MAX_SAFE_INTEGER, thisArg = undefined) {
    // eslint-disable-next-line no-restricted-syntax
    for await (const A of Red.#chunk.call(this, n)) {
      yield* A.filter(nAry.bind(callbackFn, 1, thisArg));
    }
  }

  /**
   * @param {function} callbackFn
   * @param {number} [n=Number.MAX_SAFE_INTEGER]
   * @param {?{}} [thisArg=undefined]
   * @this {IterableIterator<*>}
   * @yields {Promise<*>}
   */
  static async* flatMap(callbackFn, n = MAX_SAFE_INTEGER, thisArg = undefined) {
    yield* pipe.call([Red.map, call.bind(Red.#flat)], this, callbackFn, n, thisArg);
  }

  /**
   * @param {function} callbackFn
   * @param {number} [n=Number.MAX_SAFE_INTEGER]
   * @param {?{}} [thisArg=undefined]
   * @this {IterableIterator<*>}
   * @yields {Promise<*>}
   */
  static async* map(callbackFn, n = MAX_SAFE_INTEGER, thisArg = undefined) {
    // eslint-disable-next-line no-restricted-syntax
    for await (const A of Red.#chunk.call(this, n)) {
      yield* A.map(nAry.bind(callbackFn, 1, thisArg));
    }
  }

  /**
   * @returns {Promise<any[]>}
   * @this {IterableIterator<*>}
   */
  static async toArray() {
    // eslint-disable-next-line no-array-constructor
    const A = Array();
    // eslint-disable-next-line no-restricted-syntax
    for await (const value of this) {
      A[A.length] = value;
    }

    return A;
  }
}

export default Red;
