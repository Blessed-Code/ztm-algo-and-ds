function boooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log("booo!!");
    }
}

boooo([1,2,3,4,5]); 
// time comp. = O(n)
// space comp. = O(1) -> karena cuma let i aja yagn dipake

function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = "hi";
    }
    return hiArray
}

console.log(arrayOfHiNTimes(6));
// time comp. = O(n)
// space comp. = O(n) -> ada let i O(1) dan array ayng diloop n times O(n) O(n + 1) = O(n)