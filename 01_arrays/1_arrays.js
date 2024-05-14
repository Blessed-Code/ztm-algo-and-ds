const strings = ["a", "b", "c", "d"];

// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

// push
strings.push("e"); // O(1) karena dia langsung akses index paling terakhir

// pop
strings.pop();
strings.pop(); // O(1) juga langsung akses index paling terakhir

// unshift
strings.unshift("x"); // O(n) -> dia mo insert paling depan, oleh karena itu harus looping dari awal sampe akhir karena index array existing harus dimundurin satu2

// splice
strings.splice(2, 0, "alien"); // O(n/2) = O(n) -> meskipun awal akses index ke 2 itu langsung, tapi pas ke belakangnya melakukan looping

// at
// console.log(strings)[-2]; // kalo begini error
console.log(strings.at(-2)); // bisa akses value pake positif atau negatif
