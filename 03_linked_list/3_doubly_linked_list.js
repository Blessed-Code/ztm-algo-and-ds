// 10->5->6

// harusnya node itu satu class sendiri
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head; // disini tail itu mereference si head
    this.length = 1;
  }

  append(value) {
    // insert value di node akhir
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };

    newNode.next = this.head;
    this.head.prev = newNode;
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
      prev: null,
    };
    const pre = this.traverseToNodeBeforeIndex(index);
    const aft = pre.next;
    newNode.prev = pre;
    newNode.next = aft;
    pre.next = newNode;
    aft.prev = newNode;

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
    let pre = this.head;

    for (let i = 0; i < index - 1; i++) {
      pre = pre.next;
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
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.insert(1, 20);
console.log(myDoublyLinkedList);
