class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.data[index]) {
      // jan pernah lupa cek untuk available data
      this.data[index] = []; // inisiasinya dalam array biar ketika ada collision addres, kita masukin array value tadi di dalam array ini (array 3d total sama this.data)
    }
    this.data[index].push([key, value]);
    console.log(this.data);
  }

  get(key) {
    let index = this._hash(key);
    let currentBucket = this.data[index]; // untuk dapetin bucket dari address (array 2d)
    // check valuenya dulu ada apa kagak
    if (currentBucket) {
      // kalo current bucket ini ada valuenya / gak undefined
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined; // kalo current bucket kagak ada value kita langsung return undefined aja

    // kalo mau pake builtin function
    // let found = this.data[index].find((element) => element[0] == key);
    // return found[1];
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 20000);
myHashTable.set("mango", 30000);
myHashTable.set("watermelon", 40000);
myHashTable.set("banana", 50000);
console.log(myHashTable.get("banana"));
console.log(myHashTable.get("watermelon"));
console.log(myHashTable.get("mango"));
console.log(myHashTable.get("apples"));
console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("anjeng"));
