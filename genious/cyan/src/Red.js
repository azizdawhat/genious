import { chunk, nAry, pipe } from '@genious/util';

const { prototype: { call } } = Function;

const { MAX_SAFE_INTEGER } = Number;

class Red {
  /**
   * @param {number} [n=Number.MAX_SAFE_INTEGER]
   * @this Iterable<*>
   * @yields {Promise<any[]>}
   */
  static async* #chunk(n = MAX_SAFE_INTEGER) {
    yield* chunk.call((await Red.toArray.call(this)), n);
  }

  /**
   * @param {number} [depth=1]
   * @this Iterable<*>
   * @yields {Promise<any>}
   */
  static async* #flat(depth = 1) {
    yield* (await Red.toArray.call(this)).flat(depth);
  }

  /**
   * @param {function} callbackFn
   * @param {number} [n=Number.MAX_SAFE_INTEGER]
   * @param {?{}} [thisArg]
   * @this Iterable<*>
   * @yields {Promise<any>}
   */
  static async* flatMap(callbackFn, n = MAX_SAFE_INTEGER) {
    // eslint-disable-next-line prefer-rest-params
    yield* pipe.call([Red.map, call.bind(Red.#flat)], this, callbackFn, n, arguments[2]);
  }

  /**
   * @param {function} callbackFn
   * @param {number} [n=Number.MAX_SAFE_INTEGER]
   * @param {?{}} [thisArg]
   * @this Iterable<*>
   * @yields {Promise<any>}
   */
  static async* map(callbackFn, n = MAX_SAFE_INTEGER) {
    // eslint-disable-next-line no-restricted-syntax
    for await (const A of Red.#chunk.call(this, n)) {
      // eslint-disable-next-line prefer-rest-params
      yield* A.map(nAry.bind(callbackFn, 1, arguments[2]));
    }
  }

  /**
   * @returns {Promise<any[]>}
   * @this Iterable<*>
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
