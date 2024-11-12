function insert(array = [], rightIndex, value) {
  let i = rightIndex;
  for (i; i >= 0 && array[i] > value; i--) {
    array[i + 1] = array[i];
  }

  array[i + 1] = value;
}

function insertionSort(array = []) {
  for (let i = 0; i < array.length - 1; i++) {
    insert(array, i, array[i + 1]);
  }
}

// const array = [3, 5, 7, 11, 13, 2, 9, 6];
const array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
console.log(array);
