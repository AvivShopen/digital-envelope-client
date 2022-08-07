const pow = Math.pow,
  floor = Math.floor,
  abs = Math.abs,
  log = Math.log;
const abbrev = "kmb";

function round(n: number, precision: number) {
  var prec = Math.pow(10, precision);
  return Math.round(n * prec) / prec;
}

export const formatNumber = (n: number) => {
  var base = floor(log(abs(n)) / log(1000));
  var suffix = abbrev[Math.min(2, base - 1)];
  base = abbrev.indexOf(suffix) + 1;
  return suffix ? round(n / pow(1000, base), 2) + suffix : "" + n;
};
