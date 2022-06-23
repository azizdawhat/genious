const { MAX_SAFE_INTEGER } = Number;

/**
 * For an array, returns a new array containing subarrays of length length
 * @param {number} [length=Number.MAX_SAFE_INTEGER]
 * @returns {any[]}
 * @this Array
 */
function chunk(length = MAX_SAFE_INTEGER) {
  // eslint-disable-next-line no-array-constructor
  const A = Array();

  for (let start = 0; start < this.length; start += length) {
    A[A.length] = this.slice(start, (start + length));
  }

  return A;
}

export default chunk;
