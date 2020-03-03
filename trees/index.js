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

  minimum() {
    const minimunNode = (node) => {
      let current = node
      while (current != null && current.left != null) {
        current = current.left
      }
      return current
    }

    return minimunNode(this.root)
  }

  maximum() {
    const maximunNode = (node) => {
      let current = node
      while (current != null && current.right != null) {
        current = current.right
      }
      return current
    }

    return maximunNode(this.root)
  }

  search(key) {
    const searchNode = (node, key) => {
      if (node == null) {
        return false
      }

      if(key < node.key ) {
        return searchNode(node.left, key)
      } else if(key > node.key) {
        return searchNode(node.right, key)
      } else {
        return true
      }

    }

    return searchNode(this.root, key)
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
bst.insert(0)


// bst.preOrderTraverse(key => console.log(key))
// console.log('----------------------')
// bst.inOrderTraverse(key => console.log(key))
// console.log('----------------------')
// bst.postOrderTraverse(key => console.log(key))

// console.log(bst.minimum())
// console.log(bst.maximum())
console.log(bst.search(-1))

class GenericNode {
  constructor(key) {
    this.firstChild = null
    this.key = key
    this.nextSibling = null
  }
}


// let root = new GenericNode(12)
// let children = root.firstChild = new GenericNode(6)
// let sibling = children.nextSibling = new GenericNode(7)
// sibling.nextSibling = new GenericNode(9)

// console.log(root)