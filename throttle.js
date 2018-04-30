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
