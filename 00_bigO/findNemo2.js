const nemo = ['nemo'];
const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(1000).fill('nemo');

function findNemo (array) {
    // untuk test performance gak bagus cuma berdasar siapa yagn paling cepet. 
    // ada banyak faktor, kaya cpunya, languagenya dll. ini untuk measurement awal aja
    let t0 = performance.now();

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "nemo") {
            console.log("Found NEMO!");
        }
    }
    let t1 = performance.now();
    console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

// secara notasi bigO function findNemo ini O(n) - Linear Time
// maksudnya proses yang dilakukan sebanyak input diberikan
// jika ada 1 input maka jalan 1 kali, 100 jalan 100 kali, 1000 jalan 1000 kali
findNemo(large);