function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4

console.log(binarySearch([-5, 2, 4, 6, 10], 6)); //3

console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1

// Big-O = O(logn)

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); //3

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1

//Big-O = O(logn)

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr); //[-6, -2, 4, 8, 20]
//Big-O = O(n^2)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInstert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInstert) {
      j = j - 1;
    }
    arr[j + 1] = numberToInstert;
  }
}

const arr = [8, 20, 4, -6];
insertionSort(arr);
console.log(arr); // [-6, 4, 8, 20]
// Big O = O(n^2)
