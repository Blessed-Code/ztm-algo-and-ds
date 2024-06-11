// Kompleksitas waktu penggunaan Min Heap atau Max Heap untuk metode yang berbeda adalah:

// Intip : O(1)
// Hapus: O(log N)
// Tambahkan : O(log N)

// min heap value terkecil semakin prioritas

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // helper methods
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  // removing an element will remove the
  // top element with highest priority then
  // heapifyDown will be called
  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    // untuk traverse dari bawah ke atas kalo prioritas anaknya lebih tinggi
    let index = this.heap.length - 1; // ambil data yang paling terakhir masuk;
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      // selama index terakhir ini punya parent dan value parent lebih besar dari anaknya (disini semakin kecil value semaking tinggi prioritasnya)
      this.swap(this.getParentIndex(index), index); // kita swap parent dan anak
      index = this.getParentIndex(index); // index sekarang berganti pake index parent (intinya sama aja anak yang tadi)
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
}

// Creating The Priority Queue
let PriQueue = new PriorityQueue();

// Adding the Elements
PriQueue.add(32);
PriQueue.add(45);
PriQueue.add(12);
PriQueue.add(65);
PriQueue.add(85);

console.log(PriQueue.peek(), "peek()");
console.log(PriQueue.remove(), "remove()");
console.log(PriQueue.peek(), "peek()");
console.log(PriQueue.remove(), "remove()");
console.log(PriQueue.peek(), "peek()");
console.log(PriQueue.remove(), "remove()");
