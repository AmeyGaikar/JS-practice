function reverse(str) {
 let reversedStr = " "

 for(let i = str.length - 1 ; i<str.length; i++) {
   reversedStr += str[i]
 }

 return str;
}

reverse("reverse");