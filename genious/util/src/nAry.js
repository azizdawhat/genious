/**
 * For a function, call function using a subarray of arguments of length n
 * @param {number} n
 * @param {?{}} thisArg
 * @param {...*} args
 * @returns {*}
 * @this Function
 */
function nAry(n, thisArg, ...args) {
  return this.apply(thisArg, args.slice(0, n));
}

export default nAry;
