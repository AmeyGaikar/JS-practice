function fibonacci(numOfPal) {
  let num1 = 0;
  let num2 = 1;
  let num3;
  const arr = [num1, num2];

  for (let i = 0; i < numOfPal; i++) {
    num3 = num1 + num2;
    arr.push(num3);
    num1 = num2;
    num2 = num3;
  }

  return arr;
}

console.log(fibonacci(7));
