function factorial(num) {
  var result = 1;
  while (num > 1) {
    result *= num;
    num--;
  }
  console.log(result);
}

factorial(10);