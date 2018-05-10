/**
 * Throttling limits the how often a function can be invoked. Useful for handling expensive scroll events. Throttling has a trialing behavior, meaning if the callback was invoked during the limit period, it will be appended after the next invocation of the callback.
 * @example
 * // Will only fire the foo function once every one and a half seconds.
 * window.addEventListener('scroll', throttle(foo, 1500));
 * @param {function} callback callback function to be invoked
 * @param {number} limit the rate in milliseconds to limit invocation of the callback function
 */
const throttle = (callback, limit, context) => {
  let c = context || this;
  let timeout = null;
  let callbackArgs = null;

  let later = () => {
    callback.apply(c, callbackArgs);
    timeout = null;
  };

  return function() {
    if (!timeout) {
      callbackArgs = arguments;
      timeout = setTimeout(later, limit);
    }
  };
};

export default throttle;
