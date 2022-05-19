// eslint-disable-next-line import/no-extraneous-dependencies
import { any, isString, type } from '@genious/red';

// eslint-disable-next-line import/no-extraneous-dependencies
import * as Up from '@genious/up';

import { readFile } from 'node:fs/promises';

import Flo from './Flo.js';

const { is, prototype: { isPrototypeOf } } = Object;

const { prototype: url } = URL;

const { floName, floToken = Symbol.for('Genious.floToken') } = Up;

/**
 */
class Flo_ extends Flo {
  /**
   * @param path
   * @param metadata
   * @returns {Promise<Flo_>}
   */
  static async from(path, metadata = null) {
    if (!any.call([isPrototypeOf.bind(url), isString], null, path)) {
      throw new TypeError(`path must be of type String or URL. Received type: ${type(path)}!`);
    }

    return new Flo_(floToken, (await readFile((path.valueOf()))), path, metadata);
  }

  /**
   */
  #srcName;

  /**
   * @param token
   * @param data
   * @param name
   * @param metadata
   */
  constructor(token, data = null, name = null, metadata = null) {
    if (!is(floToken, token)) {
      throw new Error('Flo_() is private and only accessible via Flo.from()!');
    }

    super(data, name, metadata);

    this.#srcName = name.valueOf();
  }

  /**
   * @returns {*}
   */
  get [floName]() {
    return this.#srcName;
  }
}

export default Flo_.from;
