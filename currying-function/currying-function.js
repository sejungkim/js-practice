const add = (a, b, c) => a + b + c;

function curry(func) {
  return function nest(...args) {
    if (args.length === func.length) {
      return func(...args);
    }
    return (...nextArgs) => nest(...args, ...nextArgs);
  }
}

console.log(add(1, 2, 3) === curry(add)(1)(2)(3));
console.log(curry(add)(1, 2)(3));
console.log(curry(add)(1)(2, 3));
console.log(curry(add)(1, 2, 3));