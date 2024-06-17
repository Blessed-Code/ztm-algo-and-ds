function reverseString(str) {
  let result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }
  return result.join("");
}

// console.log(reverseString("yoyo master"));

function reverseStringRecursive(str) {
  let array = [...str];
  let lastValue = array[array.length - 1];
  array.pop();
  // base case
  if (str.length === 1) {
    return str;
  }
  // recursive
  return lastValue + reverseStringRecursive(array.join(""));
}

function reverseStringRecursiveSolution(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursiveSolution(str.substr(1)) + str.charAt(0);
    // substr itu ngambil string start dari idx ke n.
  }
}

console.log(reverseStringRecursive("yoyo master"));
