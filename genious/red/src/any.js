/**
 * @param thisArg
 * @param args
 * @returns {boolean}
 */
function any(thisArg, ...args) {
  return this.some(function callbackFn(element) {
    return element.apply(this, args);
  }, thisArg);
}

export default any;
