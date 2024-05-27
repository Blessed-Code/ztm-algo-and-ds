let head = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// let first = this.head
let first = head;

// this.tail  = this.head
let tail = head;

// let second = first.next
let second = {
  value: 2,
  next: {
    value: 3,
    next: {
      value: 4,
      next: null,
    },
  },
};

// while second gak null ulang terus

// const temp = second.next
while (second) {
  const temp = second.next;
  second.next = first;
  console.log(JSON.stringify(second), "second.next = first");
  first = second;
  second = temp;

  console.log(JSON.stringify(head), "head");
  console.log(JSON.stringify(temp), "temp / second.next");
  console.log(JSON.stringify(second), "second");
  console.log(JSON.stringify(first), "first");
  console.log("test");
}
// end while
console.log(JSON.stringify(tail), "tail");
head.next = null;
console.log(JSON.stringify(tail), "tail");
console.log(JSON.stringify(first), "first end");
head = first;
console.log(JSON.stringify(head), "head end");
console.log(JSON.stringify(tail), "tail");
