const pipeline = (...fs) =>
  value => fs.reduce((a, b) => b(a), value);
