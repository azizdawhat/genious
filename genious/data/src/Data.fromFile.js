// eslint-disable-next-line import/no-extraneous-dependencies
import * as G9 from '@genious/g9';

// eslint-disable-next-line import/no-extraneous-dependencies
import { any, isString, type } from '@genious/red';

import { readFile } from 'node:fs/promises';

import Data from './Data.js';

const { dataName, dataToken = Symbol.for('Genious.dataToken') } = G9;

const { assign, is, prototype: { isPrototypeOf } } = Object;

const { prototype: url } = URL;

/**
 */
class Data_ extends Data {
  /**
   * @param path
   * @param metadata
   * @returns {Promise<void>}
   */
  static async fromFile(path, metadata = null) {
    if (!any.call([isPrototypeOf.bind(url), isString], null, path)) {
      throw new TypeError(`path must be of type String or URL. Received type: ${type(path)}!`);
    }

    return new (assign(Data_, Data))(dataToken, (await readFile((path.valueOf()))), path, metadata);
  }

  /**
   */
  #srcName;

  /**
   * @param token
   * @param view
   * @param name
   * @param metadata
   */
  constructor(token, view = null, name = null, metadata = null) {
    if (!is(dataToken, token)) {
      throw new Error('Data_() is private!');
    }

    super(view, name, metadata);

    this.#srcName = name.valueOf();
  }

  /**
   * @returns {*}
   */
  get [dataName]() {
    return this.#srcName;
  }
}

export default Data_.fromFile;
