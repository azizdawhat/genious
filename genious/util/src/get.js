/**
 * For an array of value as path, returns the value of obj at the given path.
 * @param {?{}} obj
 * @returns {*}
 * @this Array
 */
function get(obj) {
  // eslint-disable-next-line array-callback-return, consistent-return, prefer-arrow-callback
  return this.reduce(function callbackFn(previousValue, currentValue) {
    if ((previousValue != null)) {
      return previousValue[currentValue];
    }
  }, obj);
}

export default get;
