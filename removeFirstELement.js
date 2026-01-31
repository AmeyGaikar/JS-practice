function removeFirstElement(arr) {
  const filteredArr = arr.filter((ele) => ele != arr[0]);

  return filteredArr;
}


console.log(removeFirstElement([1,2,3,4,5]))

