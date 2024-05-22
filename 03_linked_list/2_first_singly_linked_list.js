// 10->5->6

// harusnya node itu satu class sendiri
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head; // disini tail itu mereference si head
    this.length = 1;
  }

  append(value) {
    // insert value di node akhir
    // this._iterate(this.head, value); // cara yoga, lemot banget

    // solution
    const newNode = {
      // new node ini harusnya 1 kelas sendiri. karena buat lebih gampang dijelasin makanya dia pake object langsung
      value: value,
      next: null,
    };
    this.tail.next = newNode; // disini tail.next reference ke newNode dimana this.head.next juga jadi reference ke newNode
    console.log("tail 1", JSON.stringify(this.tail));
    console.log("head 1", JSON.stringify(this.head));
    this.tail = newNode; // disini langsung 1 tail refernce ke newNode yang mana juga update value dan next tail. kalo data ini dirubah dia ngereference yang yang reference sebelumnya. WKWKWK penjelasannya gitu tapi gua ngertilah
    console.log("tail 2", JSON.stringify(this.tail));
    console.log("head 2", JSON.stringify(this.head));
    this.length++;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null, // kenapa this.headnya gak langsung ditaro disini? jawban di line 45
    };

    // const newNode = new Node(value); // karena buat class baru harus pake newNode.next = this.head. jadi kalo this.head mau dimasukin di line 42 langusng valid2 aja

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index > this.length - 1) {
      this.append(value);
      return;
    }
    const newNode = {
      value: value,
      next: null,
    };
    const pre = this.traverseToNodeBeforeIndex(index);
    const aft = pre.next; // disini pre.next itu udah si value index yang sebelum diganti sama newNode; misal index yang kita pake 3 maka node dengan index 3 yang sebelum kita ganti
    newNode.next = aft; // kita referensikan newNode next dengan node index 3 yang sebelum diganti
    pre.next = newNode; // node.next index - 1 kita referensikan ke newNode

    this.length++;
  }

  remove(index) {
    if (index < 1) {
      this.head = this.head.next;
    } else if (index >= this.length - 1) {
      const pre = this.traverseToNodeBeforeIndex(this.length - 1);
      pre.next = null;
      this.tail = pre;
    } else {
      const pre = this.traverseToNodeBeforeIndex(index);
      const idxNode = pre.next;
      pre.next = idxNode.next;
    }
    this.length--;
  }

  traverseToNodeBeforeIndex(index) {
    let pre = this.head; // karena kita kagak ngerubah headnya, kita perlu bikin copyannya karena kita perlu akses dari head
    // kita cari node sebelum index
    for (let i = 0; i < index - 1; i++) {
      pre = pre.next; // kita majuin nodenya dengan ubah node parent pake node anaknya
    }
    return pre;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  // _iterate(obj, value) { // cara yoga, lemot banget
  //   for (const key in obj) {
  //     if (key === "next" && obj[key] === null) {
  //       obj[key] = {
  //         value: value,
  //         next: null,
  //       };
  //       this.tail = obj[key];
  //       break;
  //     }

  //     if (key === "next" && typeof obj[key] === "object") {
  //       this._iterate(obj[key], value);
  //     }
  //   }
  // }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.prepend(16);
console.log(myLinkedList);
myLinkedList.insert(2, 20);
// console.log(JSON.stringify(myLinkedList));
console.log(myLinkedList.printList());
myLinkedList.remove(1);
// myLinkedList.remove(0);
console.log(myLinkedList.printList());
// console.log(JSON.stringify(myLinkedList));
