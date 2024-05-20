// Google Question
// Given an array = [2,5,1,2,3,5,1,2,5]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

// ini naive option dari video
const naiveFirstRecuffringChar = (input) => {
  // O(n^2) -> time  complexity
  // O (1) -> space complexity
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
};

// solution dari video
function solution(input) {
  let map = {};

  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}

// ini jawaban yoga
const firstReccuringChar = (array) => {
  // O(n) -> time complexity
  // O(n) -> space complexity
  if (!Array.isArray(array)) {
    return undefined;
  }

  let mySets = new Set();

  for (let i = 0; i < array.length; i++) {
    if (mySets.has(array[i])) {
      return array[i];
    }
    mySets.add(array[i]);
  }

  return undefined;
};

// challenge samain result dari yang naive ke yagn map
const revampNaive = (input) => {
  // O(n^2) -> time  complexity
  // O (1) -> space complexity
  for (let i = 0; i < input.length; i++) {
    let history = {};
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      } else {
        if (history[input[j]] !== undefined) {
          return input[j];
        } else {
          history[input[j]] = j;
        }
      }
    }
  }
  return undefined;
};

console.log(revampNaive([2, 3, 4, 5])); // kalo lu perhatiin, kalo pake naive solution, yang bakal keluar harusnya 2, tapi kalo pake cara yang map yang keluar 1 duluan. depend dari soal sih
