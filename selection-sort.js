const array2 = [17, 19, 23, 37, 41, 2, 3, 29, 31, 5, 7, 11, 13];

function swap(array, firstIndex, secondIndex) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function findIdexOfMinimum(array, startIndex) {
  let minValue = array[startIndex];
  let minIndex = startIndex;

  for (let i = startIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }

  return minIndex;
}

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    const indexMin = findIdexOfMinimum(array, i);

    if (indexMin !== i) {
      swap(array, i, indexMin);
    }
    // console.log(array.slice(i));
  }
  return array;
}

// console.log(findIdexOfMinimum(array2, 2));
selectionSort(array2);
