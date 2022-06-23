const { is } = Object;

/**
 * Returns true if value is of type function otherwise returns false.
 * @param {*} value
 * @returns {boolean}
 */
function isFunction(value) {
  return is('function', (typeof value));
}

export default isFunction;
