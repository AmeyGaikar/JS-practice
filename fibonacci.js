function fibonacciArr(n) {
let firstNum = 0, secondNum=1, sumOfNums;

for(let i = 0;  i<n; i++) {
    console.log(firstNum);
    sumOfNums = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = sumOfNums
}
} 

console.log(fibonacciArr(7))