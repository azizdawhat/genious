// eslint-disable-next-line import/no-extraneous-dependencies
import { any, isString, type } from '@genious/red';

const { prototype: buffer } = ArrayBuffer;

const { getPrototypeOf, prototype: { isPrototypeOf } } = Object;

const { iterator, toPrimitive, toStringTag } = Symbol;

const { prototype: typedArray } = getPrototypeOf(Uint8Array);

const { prototype: url } = URL;

/**
 */
class Flo {
  /**
   * @type {TextDecoder}
   */
  static #decoder = new TextDecoder();

  /**
   * @type {TextEncoder}
   */
  static #encoder = new TextEncoder();

  /**
   * @param data
   * @param args
   * @returns {Flo}
   */
  static from(data = null, ...args) {
    if (Flo.isFlo(data)) {
      return new Flo(data.data, data.name, data.metadata);
    }

    return new Flo(data, ...args);
  }

  /**
   * @param value
   * @returns {boolean}
   */
  static isFlo(value) {
    return (value instanceof Flo);
  }

  /**
   * @type {Uint8Array}
   */
  #data = new Uint8Array(0);

  /**
   */
  #destName;

  /**
   * @type {{}}
   */
  #metadata = {};

  /**
   * @param data
   * @param name
   * @param metadata
   */
  constructor(data = null, name = null, metadata = null) {
    if ((data != null)) {
      this.data = data;
    }

    this.metadata = metadata;

    if ((name != null)) {
      this.name = name;
    }
  }

  /**
   * @returns {string}
   */
  get data() {
    return String(this);
  }

  /**
   * @param value
   */
  set data(value) {
    // eslint-disable-next-line max-len
    if (!any.call([isPrototypeOf.bind(buffer), isPrototypeOf.bind(typedArray), isString], null, value)) {
      throw new TypeError(`data must be of type ArrayBuffer, TypedArray or String. Received type: ${type(value)}!`);
    }

    if (isString(value)) {
      this.#data = Flo.#encoder.encode(value);
    } else {
      this.#data = new Uint8Array(value);
    }
  }

  /**
   * @returns {{}}
   */
  get metadata() {
    return this.#metadata;
  }

  /**
   * @param value
   */
  set metadata(value) {
    if ((value == null)) {
      this.#metadata = {};
    } else {
      this.#metadata = value;
    }
  }

  /**
   * @returns {*}
   */
  get name() {
    return this.#destName;
  }

  /**
   * @param value
   */
  set name(value) {
    if (!any.call([isPrototypeOf.bind(url), isString], null, value)) {
      throw new TypeError(`name must be of type String or URL. Received type: ${type(value)}!`);
    }

    this.#destName = value.valueOf();
  }

  /**
   * @returns {IterableIterator<Uint8Array>}
   */
  * [iterator]() {
    yield* this.#data;
  }

  /**
   * @returns {string}
   */
  [toPrimitive]() {
    return Flo.#decoder.decode(this.#data);
  }

  /**
   * @returns {string}
   */// eslint-disable-next-line class-methods-use-this
  get [toStringTag]() {
    return 'Flo';
  }
}

export default Flo;
