// rule 4 Drop non-dominant terms
function printAllNumberAndAllPairSums(numbers) {
    numbers.forEach(element => { // O(n)
        console.log(element);
    });

    numbers.forEach(element1 => { // O(n^2)
        numbers.forEach(element2 => {
            console.log(element1 + element2);
        });
    });
}

printAllNumberAndAllPairSums([1,2,3,4,5]); // O(n + n^2) = O(n^2)
// gimana kalau O(n^2 + 4n + 100 + n/2) = ?
// kalo sekilas harusnya yang paling gede itu 100 tapi kalo kita pikirkan scalability dimana inputntya tambah besar
// n^2 itu justru paling bahaya. oleh karena itu hasilnya tetap O(n^2)