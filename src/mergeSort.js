// Sort array using merge sort algorithms recursively
function recursiveMergeSort(arr) {
  const length = arr.length;

  // Base case
  if (length <= 1) return arr;

  const middle = Math.floor(length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  return merge(recursiveMergeSort(leftArr), recursiveMergeSort(rightArr));

  function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    while (i < left.length) {
      result.push(left[i]);
      i++;
    }

    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
    return result;
  }
}

export { recursiveMergeSort };
