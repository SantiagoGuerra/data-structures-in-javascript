const insertListSize = (list, size) => {  
  if(size === 0) {
    return list
  } else {
    list.insert(size)
    return insertListSize(list, size - 1)
  }
}

const printListValues = (list) => {
  if(list === null) {
    console.log(list)
  } else if(list.head) {
    console.log(list.head.data)
    return printListValues(list.head.next)
  } else {
    console.log(list.data)
    return printListValues(list.next)
  }
}

class SinglyLinkedListNode {
  constructor(data, singlyLinkedListNode = null) {
    this.data = data
    this.next = singlyLinkedListNode
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null 
  }

  insert(data) {
    let node = new SinglyLinkedListNode(data)
    let currentNode = this.head
    if(this.head === null) {
      this.head = node
    } else {
      while (currentNode.next != null) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
  }

  count() {
    let currentNode = this.head
    let counter = 0
    if(this.head === null) {
      return counter
    } else {
      while(currentNode != null) {
        counter += 1
        currentNode = currentNode.next
      }
      return counter
    }
  }
}


let auto = insertListSize(new SinglyLinkedList(), 10)
printListValues(auto)
