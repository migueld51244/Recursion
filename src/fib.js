// Fibonacci using iterator
function iteratorFib(num) {
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
console.log("Printed iteratively");
console.log(iteratorFib(8));
