/**
 * coret2an singly linkedlist =============
 */
class SingleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // nambahin node di akhir
  append(value) {
    let newNode = new SingleNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // nambahin node di awal
  prepend(value) {
    let newNode = new SingleNode(value);
    newNode.next = this.head; // untuk generate rangkaian node baru dengan newNode dipaling depan
    this.head = newNode; // head harus diupdate
    this.length++;
    return this;
  }

  insert(index, value) {
    let newNode = new SingleNode(value);
    const pre = this.traverseToBeforeIndex(index);
    const aft = pre.next; // kita simpen data index yang lama;
    pre.next = newNode;
    newNode.next = aft;
    this.length++;
    return this;
  }

  traverseToBeforeIndex(index) {
    let pre = this.head;
    for (let i = 0; i < index - 1; i++) {
      pre = pre.next;
    }
    return pre;
  }

  remove(index) {
    if (index < 1) {
      this.head = this.head.next;
    } else if (index > this.length - 1) {
      const pre = this.traverseToBeforeIndex(this.length - 1);
      pre.next = null;
      this.tail = pre;
    } else {
      const pre = this.traverseToBeforeIndex(index);
      const aft = pre.next;
      pre.next = aft.next;
    }

    this.length--;
    return this;
  }

  reverse() {
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}

// const singlyLinkedList = new SinglyLinkedList(10);
// singlyLinkedList.append(2);
// singlyLinkedList.prepend(3);
// singlyLinkedList.insert(2, 13);
// singlyLinkedList.remove(2);
// singlyLinkedList.reverse();
// console.log(JSON.stringify(singlyLinkedList));
/**
 * coret2an singly linkedlist end =============
 */

/**coret2an doubly linked list ===========*/
class DoubleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // nambahin node di akhir
  append(value) {
    let newNode = new DoubleNode(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // nambahin node di awal
  prepend(value) {
    let newNode = new DoubleNode(value);
    newNode.next = this.head; // untuk generate rangkaian node baru dengan newNode dipaling depan
    this.head.prev = newNode;
    this.head = newNode; // head harus diupdate
    this.length++;
    return this;
  }

  insert(index, value) {
    let newNode = new DoubleNode(value);
    const pre = this.traverseToBeforeIndex(index);
    const aft = pre.next; // kita simpen data index yang lama;
    pre.next = newNode;
    newNode.prev = pre;
    newNode.next = aft;
    aft.prev = newNode;
    this.length++;
    return this;
  }

  traverseToBeforeIndex(index) {
    let pre = this.head;
    for (let i = 0; i < index - 1; i++) {
      pre = pre.next;
    }
    return pre;
  }

  remove(index) {
    // besok aja ngantuk
    if (index < 1) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (index > this.length - 1) {
      const pre = this.traverseToBeforeIndex(this.length - 1);
      this.tail.prev = null;
      pre.next = null;
      this.tail = pre;
    } else {
      const pre = this.traverseToBeforeIndex(index);
      const aft = pre.next;
      const newAft = aft.next;
      pre.next = newAft;
      newAft.prev = pre;
    }

    this.length--;
    return this;
  }

  reverse() {
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }

  printList() {
    const list = [];
    let pre = this.head;
    while (pre) {
      list.push(pre.value);
      pre = pre.next;
    }
    console.log(list);
    return list;
  }
}
const doublyLinkedList = new DoublyLinkedList(2);
doublyLinkedList.append(3);
doublyLinkedList.prepend(1);
doublyLinkedList.remove(1);
doublyLinkedList.printList();
console.log(doublyLinkedList);
/**coret2an doubly linked list end ===========*/
