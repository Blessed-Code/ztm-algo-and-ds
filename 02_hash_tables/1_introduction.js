let user = {
  age: 53,
  name: "kylie",
  magic: true,
  scream: function () {
    console.log("ahh!");
  },
};

user.age; // O(1) read
user.spell = "abra kadabra"; // O(1) insert
user.scream(); // O(1)

// kelemahannya dia ada collision
// dimana ada data yagn berbeda disimpe dimemori yang sama ulah si hash functionnya
// alhasil reading dan writing bisa jadi lemot O(n)

// hash table yang lain
// 1. map
// dia mirip kaya object biasa tapi dia mastiin data yang disimpen itu keorder,
// kalo object kan kesimpen di random memory address
// map juga bisa nyimpen key sesuai dengan data type aslinya (number, boolean, function dll)
// object cuma string doang keynya
const a = new Map();

// 2. Set
// mirip Map tapi dia cuma simpen keynya aja
const b = new Set();
