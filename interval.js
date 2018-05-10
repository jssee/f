/**
 * Identical functionality to setInterval() but more performant with the help of requestAnimationFrame
 * @example
 * // returns 1 plus 1 every half second.
 * const addOne = a => a + 1;
 * const oneAdded = addOne(1);
 * interval(oneAdded, 500);
 * @param {function} callback The callback function to be invoked once per delay period
 * @param {number} delay The amount of time in milliseconds to delay the invocation of the supplied callback
 */
const interval = (callback, delay) => {
  const tick = now => {
    if (now - start >= delay) {
      start = now;
      cb();
    }
    requestAnimationFrame(tick);
  };
  let start = performance.now();
  requestAnimationFrame(tick);
};

export default interval;
