/**
 * For an array of functions, reduce array by calling currentFunction
 * with the return value of previousFunction.
 * @param {?{}} thisArg
 * @param {...*} args
 * @returns {*}
 * @this Array
 */
function pipe(thisArg, ...args) {
  // eslint-disable-next-line prefer-arrow-callback
  return this.reduce(function callbackFn(previousValue, currentValue) {
    return currentValue.call(thisArg, previousValue);
  }, (this.shift()).apply(thisArg, args));
}

export default pipe;
