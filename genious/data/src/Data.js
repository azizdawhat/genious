// eslint-disable-next-line import/no-extraneous-dependencies
import { any, isString, type } from '@genious/red';

const { prototype: buffer } = ArrayBuffer;

const { getPrototypeOf, prototype: { isPrototypeOf } } = Object;

const { iterator, toPrimitive, toStringTag } = Symbol;

const { prototype: typedArray } = getPrototypeOf(Uint8Array);

const { prototype: url } = URL;

/**
 */
class Data {
  /**
   * @type {TextDecoder}
   */
  static #decoder = new TextDecoder();

  /**
   * @type {TextEncoder}
   */
  static #encoder = new TextEncoder();

  /**
   * @param view
   * @param args
   * @returns {Data}
   */
  static from(view = null, ...args) {
    if (Data.isData(view)) {
      return new Data(view.view, view.name, view.metadata);
    }

    return new Data(view, ...args);
  }

  /**
   * @param value
   * @returns {boolean}
   */
  static isData(value) {
    return (value instanceof Data);
  }

  /**
   */
  #destName;

  /**
   * @type {{}}
   */
  #metadata = {};

  /**
   * @type {Uint8Array}
   */
  #view = new Uint8Array(0);

  /**
   * @param view
   * @param name
   * @param metadata
   */
  constructor(view = null, name = null, metadata = null) {
    this.metadata = metadata;

    if ((name != null)) {
      this.name = name;
    }

    if ((view != null)) {
      this.view = view;
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
   * @returns {Uint8Array}
   */
  get view() {
    return this.#view;
  }

  /**
   * @param value
   */
  set view(value) {
    // eslint-disable-next-line max-len
    if (!any.call([isPrototypeOf.bind(buffer), isPrototypeOf.bind(typedArray), isString], null, value)) {
      throw new TypeError(`view must be of type ArrayBuffer, String or TypedArray. Received type: ${type(value)}!`);
    }

    if (isString(value)) {
      this.#view = Data.#encoder.encode(value);
    } else {
      this.#view = new Uint8Array(value);
    }
  }

  /**
   * @returns {IterableIterator<Uint8Array>}
   */
  * [iterator]() {
    yield* this.#view;
  }

  /**
   * @returns {string}
   */
  [toPrimitive]() {
    return Data.#decoder.decode(this.#view);
  }

  /**
   * @returns {string}
   */// eslint-disable-next-line class-methods-use-this
  get [toStringTag]() {
    return 'Data';
  }
}

export default Data;
