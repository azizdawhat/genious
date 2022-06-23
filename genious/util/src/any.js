/**
 * For an array of functions, returns true if any of the calls are satisfied
 * by the arguments otherwise returns false.
 * @param {?{}} thisArg
 * @param {...*} args
 * @returns {boolean}
 * @this Array
 */
function any(thisArg, ...args) {
  return this.some(function callbackFn(element) {
    return element.apply(this, args);
  }, thisArg);
}

export default any;
