function curry(func) {
  return function nest(...args) {
    if (args.length === func.length) {
      return func(...args);
    }
    return (...nextArgs) => nest(...args, ...nextArgs);
  }
}

const multiply3 = (a, b, c) => a * b * c;

const getVolume = curry(multiply3);
console.log(getVolume(2, 3, 4));

const getArea = curry(multiply3)(1);
console.log(getArea(2, 3));

const getCircum = curry(multiply3)(Math.PI)(2);
console.log(getCircum(2));