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
      // ini merupakan implementasi divide and conquer. meskipun kita pake while, kita gak visit semua nodenya karena di tiap height kita make decision kiri apa kanan makanya O(logN)
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
      return "Value must be a number";
    }

    if (!this.root) {
      return "Root have no value";
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

  lookupSolution(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }

    return false;
  }
  remove(value) {
    if (!this.root) {
      return false;
    }

    // if (value === this.root.value) {
    //   if (this.root.right) {
    //     let successor = this.findLeftMostChild(this.root.right);
    //     successor.left = this.root.left;
    //     this.root = successor;
    //   } else {
    //     this.root = this.root.left;
    //   }
    //   return this;
    // }

    let currentNode = this.root;
    let parentTarget = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentTarget = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentTarget = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        //check is target a leaf or parent
        if (!currentNode.left && !currentNode.right) {
          // if leaf
          if (currentNode.value < parentTarget.value) {
            return (parentTarget.left = null);
          } else {
            return (parentTarget.right = null);
          }
        } else if (currentNode.left && !currentNode.right) {
          // if target has only left child
          let successor = currentNode.left;
          if (currentNode.value < parentTarget.value) {
            return (parentTarget.left = successor);
          } else {
            return (parentTarget.right = successor);
          }
        } else {
          // if target has right child
          let successor = this.findLeftMostChild(currentNode.right);

          if (currentNode.left) {
            successor.left = currentNode.left;
          }

          if (currentNode.value < parentTarget.value) {
            return (parentTarget.left = successor);
          } else {
            return (parentTarget.right = successor);
          }
        }
      }
    }
    return `Node with value ${value} not found`;
  }

  removeSolution(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // valuenay match

        // option1: no right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            // kalo parent < current value, make current left child a left child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
              // kalo parent > current value, make current left child a right child of parent
            } else {
              parentNode.right = currentNode.left;
            }
          }

          // option2: ada right child, tapi right childnya gak punya left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left; // anaknya current node harus jadi leftnya right child yang gapunya left child
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
          // option: 3 ada right child, dan right child punya left child;
        } else {
          // find the Right childs left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          // Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right; // jadiin right child si leftmost ke leftmost parent.left
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  findLeftMostChild(node) {
    // kalo si anak kanannya punya left child maka cari left most terus node target diganti sama si left most
    // tapi kalo gak punya si right child ini yang gantiin posisinya
    let successor = node;
    if (successor.left) {
      while (successor.left) {
        successor = successor.left;
      }
    }

    return successor;
  }
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
tree.removeSolution(9);
// console.log(tree.lookupSolution(20));
console.log(JSON.stringify(traverse(tree.root)));
