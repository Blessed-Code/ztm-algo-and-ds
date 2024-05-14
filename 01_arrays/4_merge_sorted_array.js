function mergeSortedArray(array1, array2) {
  let result = [];

  let firstIdx = 0;
  let secondIdx = 0;

  while (firstIdx <= array1.length - 1 || secondIdx <= array2.length - 1) {
    if (firstIdx > array1.length - 1) {
      result.push(array2[secondIdx]);
      secondIdx++;
      continue;
    }

    if (secondIdx > array2.length - 1) {
      result.push(array1[firstIdx]);
      firstIdx++;
      continue;
    }

    if (array1[firstIdx] <= array2[secondIdx]) {
      result.push(array1[firstIdx]);
      firstIdx++;
    } else if (array1[firstIdx] >= array2[secondIdx]) {
      result.push(array2[secondIdx]);
      secondIdx++;
    }
  }

  console.log(firstIdx, "firstIdx");
  console.log(secondIdx, "secondIdx");

  return result;
}

// console.log(mergeSortedArray([0, 3, 4, 31], [4, 6, 30]));

// solution
function mergeSortedArraySolution(array1, array2) {
  const mergedArray = [];

  // checking types
  if (array1.length === 0) {
    return array2;
  }

  if (array2.length === 0) {
    return array1;
  }

  let array1Item = array1[0];
  let array2Item = array2[0];

  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    console.log(array1Item);
    console.log(array2Item);
    if (!array2Item || array1Item < array2Item) {
      console.log("masuk sini gak?");
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      console.log("masuk sini gak?");
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}

console.log(mergeSortedArraySolution([0, 3, 4, 31], [4, 6, 30, 90, 100]));
