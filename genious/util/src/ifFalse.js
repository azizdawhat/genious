/**
 * For a function, if satisfied by value returns value
 * otherwise returns the result of falseFn call with value as argument.
 * @param {function} falseFn
 * @param {*} value
 * @returns {*}
 * @this Function
 */
function ifFalse(falseFn, value) {
  return (this.call(undefined, value) ? value : falseFn(value));
}

export default ifFalse;
