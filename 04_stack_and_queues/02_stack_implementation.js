class StackNode {
  // pakai linked list
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  // pakai linked list
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  isEmpty() {
    if (this.length) {
      return false;
    }
    return true;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new StackNode(value);
    if (!this.length) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;

      // solution yang bawah, tapi gua ngerasa sama
      // const holdingPointer = this.top;
      // this.top = newNode;
      // this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    this.top = this.top.next;
    if (this.length === 1) {
      this.bottom = null;
    }
    this.length--;
  }
}

// const newStack = new Stack();
// newStack.push(2);
// newStack.push(1);
// // newStack.pop();
// // newStack.pop();
// console.log(newStack.peek());

// console.log(JSON.stringify(newStack));

// stack using arrays

class ArrayStack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
    return this;
  }
  pop() {
    this.data.pop();
    return this;
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  isEmpty() {
    return this.data.length === 0;
  }
}

const myArrayStack = new ArrayStack();
console.log(myArrayStack.push("google"));
console.log(myArrayStack.push("udemy"));
console.log(myArrayStack.peek());
console.log(myArrayStack.pop());
console.log(myArrayStack.isEmpty());
