// function triangle(n) {
//   for(let i = 1 ; i <= n; i++) {
//     let spaces = "";
//     let rows = ""

//     for(let j= 1; j<=i ; j++) {
//       spaces += "  "
//     }

//     for(let k=i; k<=n; k++) {
//       rows += "* "
//     }
//     console.log(spaces + rows)
//   }
// }

// triangle(5);


// function reverse(str) {
//  let reversedStr = ""

//  for(let i = str.length - 1 ; i<str.length; i++) {
//    reversedStr += str[i]
//  }

//  return str;
// }



function sort(arr) {
 return arr.sort((a, b) => {
    return a - b;
  });
}

sort([10, 23,2,3,56,8]);
