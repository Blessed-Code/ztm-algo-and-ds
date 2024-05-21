// 10->5->6

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
// console.log(JSON.stringify(myLinkedList));
myLinkedList.append(5);
// console.log(JSON.stringify(myLinkedList));
myLinkedList.append(6);
// console.log(JSON.stringify(myLinkedList));
myLinkedList.append(16);
// console.log(JSON.stringify(myLinkedList));
