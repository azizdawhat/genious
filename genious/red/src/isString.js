const { is } = Object;

/**
 * @param value
 * @returns {boolean}
 */
function isString(value) {
  if ((value == null)) {
    return false;
  }

  return is('string', (typeof (value.valueOf())));
}

export default isString;
