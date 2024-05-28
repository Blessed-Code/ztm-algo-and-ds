class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }
  enqueue(value) {
    const newQueueNode = new QueueNode(value);
    if (!this.length) {
      this.first = newQueueNode;
      this.last = this.first; // kalo ini valuenya pake newQueueNode juga bisa ternyata. karena tetap ngerefer ke yang sama
    } else {
      this.last.next = newQueueNode;
      this.last = newQueueNode;
    }

    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const queue = new Queue();
queue.enqueue("mark");
queue.enqueue("john");
queue.enqueue("doe");
queue.dequeue();
console.log(queue.peek());
console.log(queue);
