// 1. identify the base case
// 2. identify the recursive case
// 3. get closer and closer and return when needed. usually you have 2 returns

let counter = 0;
function inception() {
  if (counter > 3) {
    return "done"; // base case
  }
  counter++;
  return inception(); // ini kalo kita kalo recursive callnya gak pake return yang ada hasil return yang paling dalem kagak bakal ketampil sampe function call terluar
}

inception();
