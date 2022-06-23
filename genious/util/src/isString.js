const { is } = Object;

/**
 * Returns true if value is of type string otherwise returns false.
 * @param {*} value
 * @returns {boolean}
 */
function isString(value) {
  if ((value == null)) {
    return false;
  }

  return is('string', (typeof (value.valueOf())));
}

export default isString;
