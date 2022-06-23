const { prototype: { toString } } = Object;

/**
 * Returns type of value from stringTag
 * @param {*} obj
 * @returns {string}
 */
function type(obj) {
  return toString.call(obj).slice(8, -1);
}

export default type;
