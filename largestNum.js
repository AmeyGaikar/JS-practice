function largestNum(arr) {
  let largestNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

console.log(largestNum([1, 10, 18, 3, 4]));
