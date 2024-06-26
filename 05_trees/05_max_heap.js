// Kompleksitas waktu penggunaan Min Heap atau Max Heap untuk metode yang berbeda adalah:

// Intip : O(1)
// Hapus: O(log N)
// Tambahkan : O(log N)

// max heap value terbesar semakin prioritas

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Helper Methods
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor(childIndex - 1) / 2;
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
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }

  // Removing an element will remove the
  // top element with highest priority then
  // heapifyDown will be called
  remove() {
    if (this.heap.length === 0) return null;
    const removedItem = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heapifyDown();
    return removedItem;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap[this.heap.length - 1];
    while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let biggerChildIdx = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
        biggerChildIdx = this.getRightChildIndex(index);
      }
      if (this.heap[index] > this.heap[biggerChildIdx]) {
        break;
      } else {
        this.swap(index, biggerChildIdx);
      }
      index = biggerChildIdx;
    }
  }
}

// // Creating The Priority Queue
// let PriQueue = new PriorityQueue();
// PriQueue.add(32);
// PriQueue.add(45);
// PriQueue.add(12);
// PriQueue.add(65);
// PriQueue.add(85);

// // Removing and Checking elements of highest Priority
// console.log(PriQueue.peek());
// console.log(PriQueue.remove());
// console.log(PriQueue.peek());
// console.log(PriQueue.remove());
// console.log(PriQueue.peek());
// console.log(PriQueue.remove());
