/**
 * Throttling limits the how often a function can be invoked. Useful for handling expensive scroll events. Throttling has a trialing behavior, meaning if the callback was invoked during the limit period, it will be appended after the next invocation of the callback. 
 * @example
 * // Will only fire the foo function once every one and a half seconds.
 * window.addEventListener('scroll', throttle(foo, 1500));
 * @param {callback} cb callback function to be invoked
 * @param {number} limit the rate in milliseconds to limit invocation of the callback function
 */
const throttle = (cb, limit) => {
  let pf;
  let last;

  return function() {
    const ctx = this;
    const args = arguments;

    if (!last) {
      cb.apply(ctx, args);
      last = performance.now();
    } else {
      clearTimeout(pf);
      pf = setTimeout(() => {
        let now = performance.now();
        let timeElapsed = now - last;
        let inThrottle = timeElapsed >= limit;

        if (inThrottle) {
          cb.apply(ctx, args);
          last = performance.now();
        }
      }, limit - (performance.now() - last));
    }
  };
};
