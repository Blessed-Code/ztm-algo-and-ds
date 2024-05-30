class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (typeof value !== "number") {
      return this;
    }

    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (newNode.value < currentNode.value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (typeof value !== "number") {
      return this;
    }

    let node = this.root;
    let isFound = false;
    while (!isFound) {
      if (value === node.value) {
        return `value: ${value} found ${JSON.stringify(node)}`;
      } else if (value < node.value) {
        if (!node.left) {
          return `value: ${value} not found`;
        } else {
          node = node.left;
        }
      } else {
        if (!node.right) {
          return `value: ${value} not found`;
        } else {
          node = node.right;
        }
      }
    }
  }
  remove() {}
}

// ignore recursivenya dulu. ini buat testing biar bisa diliat
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(1));
// console.log(JSON.stringify(traverse(tree.root)));
