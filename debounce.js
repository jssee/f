const debounce = (cb, delay) => {
  let inDebounce;

  return function() {
    const context = this;
    const args = arguments;

    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => cb.apply(context, args), delay);
  };
};
