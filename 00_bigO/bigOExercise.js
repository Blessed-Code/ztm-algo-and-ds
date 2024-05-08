// What is the Big O of the below function? (Hint, you may want to go line by line)
// ini jawaban yoga
// function funChallenge(input) {
//     let a = 10; // O(1)
//     a = 50 + 3; // O(1)
  
//     for (let i = 0; i < input.length; i++) { // O(n)
//       anotherFunction(); // O(1)
//       let stranger = true; // O(1)
//       a++; // O(1)
//     }
//     return a;
// }
// let array = [1,2,3,4,5]
// funChallenge(array); // harusnya antara O(n * 3) atau O(n * 3 + 2)

// ini solution
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)
  
    for (let i = 0; i < input.length; i++) { // O(n) // satu looping itu udah diitung sendiri
      anotherFunction(); // O(n) // yang ada di dalem loopin ini diitungnya O(n) karena di dalem loopnya
      let stranger = true; // O(n)
      a++; // O(n)
    }
    return a; // O(1)
}
let array = [1,2,3,4,5]
funChallenge(array); 
// BIG O nya O(3 + 4n) atau bisa disebut sebagai O(n) aja