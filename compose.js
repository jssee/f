/** Returns the the composition of multiple functions from left to right.
 * @example
 * // returns 12
 * const plus1 = a => a + 1;
 * const mult2 = a => a * 2;
 * const addThenMult = compose(plus1, mult2);
 * addThenMult(5);
 * @param {function} fs the functions to be performed from left to right.
 */

const compose = (...fs) => value => fs.reduce((a, b) => b(a), value);

export default compose;
