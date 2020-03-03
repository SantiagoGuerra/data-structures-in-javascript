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


  preOrderTraverse(callback) {
    const preOrderTraverseNode = (node, callback) => {
      if(node != null) {
        callback(node.key)
        preOrderTraverseNode(node.left, callback)
        preOrderTraverseNode(node.right, callback)
      }
    }
    
    return preOrderTraverseNode(this.root, callback)
  }

  inOrderTraverse(callback) {
    const inOrderTraverseNode = (node, callback) => {
      if (node != null) {
        inOrderTraverseNode(node.left, callback)
        callback(node.key)
        inOrderTraverseNode(node.right, callback)
      }
    }

    return inOrderTraverseNode(this.root, callback)
  }

  postOrderTraverse(callback) {
    const postOrderTraverseNode = (node, callback) => {
      if(node != null) {
        postOrderTraverseNode(node.left, callback)
        postOrderTraverseNode(node.right, callback)
        callback(node.key)
      }
    }

    return postOrderTraverseNode(this.root, callback)
  }
}

let bst = new BinarySearchTree()

bst.insert(12)
bst.insert(6)
bst.insert(24)
bst.insert(3)
bst.insert(9)
bst.insert(18)
bst.insert(22)


bst.preOrderTraverse(key => console.log(key))
console.log('----------------------')
bst.inOrderTraverse(key => console.log(key))
console.log('----------------------')
bst.postOrderTraverse(key => console.log(key))

