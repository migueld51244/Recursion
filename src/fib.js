// Fibonacci using iterator
function iteratorFib(num) {
  if (Number.isNaN(num) || !Number.isInteger(num))
    return "Unexpected type of data";
  console.log("Printed iteratively");
  const totalNums = [];
  for (let i = 0; i < num; i++) {
    if (i === 0 || i === 1) {
      totalNums.push(i);
      continue;
    }
    totalNums.push(totalNums[i - 1] + totalNums[i - 2]);
  }
  return totalNums;
}

// Fibonacci using recursion
function recursiveFib(num) {
  if (Number.isNaN(num) || !Number.isInteger(num))
    return "Unexpected type of data";
  console.log("Printed recursively");
  const totalNums = [];
  function addNext(index) {
    if (index >= num) {
      return totalNums;
    }
    if (index < 2) {
      totalNums.push(index);
    } else {
      totalNums.push(totalNums[index - 1] + totalNums[index - 2]);
    }
    return addNext(index + 1);
  }
  return addNext(0);
}
