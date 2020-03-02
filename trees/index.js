class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  
  constructor() {
    this.root = null
  }

  insert(key) {
    let node = new Node(key)
    const insertNode = (node, key) => {
      let newNode = new Node(key)
      if (node.key > key) {
        if (node.left === null) {
          node.left = newNode
        } else {
          insertNode(node.left, key)
        }
      } else {
        if(node.right === null) {
          node.right = newNode
        } else {
          insertNode(node.right, key)
        }
      }
    }

    if(this.root === null) {
      this.root = node
    } else {
      insertNode(this.root, key)
    }
  }
}

let bst = new BinarySearchTree()

bst.insert(5)
bst.insert(4)
bst.insert(6)




console.log(bst.root)