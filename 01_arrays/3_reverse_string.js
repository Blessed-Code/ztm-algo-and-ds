function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

// solution
function reverse2(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  let backwards = [];

  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

function reverse3(str) {
  // kalo ditanya lebih readable
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  return str.split("").reverse().join("");
}

function reverse4(str) {
  // kalo ditanya lebih readable
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  return [...str].reverse().join("");
}

// console.log(reverse("Bernardus Joshua"));
// console.log(reverse2("Yoga"));
// console.log(reverse3("Yoga"));
console.log(reverse4("Yoga"));
