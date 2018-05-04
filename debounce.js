/**
 * Debouncing will delay the invocation of a callback until the specified wait/delay period has ended. Useful in situations you want to wait for a user to finsih performing an action before performing a function. For example waiting for a user to finish typing a serach term before performing a data fetch. 
 * @param {callback} cb The callback function to be invoked
 * @param {number} delay the amount of time in milliseconds to wait for until the callback is fired again.
 */
const debounce = (cb, delay) => {
  let inDebounce;

  return function() {
    const context = this;
    const args = arguments;

    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => cb.apply(context, args), delay);
  };
};
