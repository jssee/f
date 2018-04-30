const interval = (cb, delay) => {
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
