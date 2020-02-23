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

  insertAt(position, data) {
    let previousNode = this.head
    let newNode = new SinglyLinkedListNode(data)

    const traverseList = (position, list, counter) => {
      if(counter === position - 1) {
        previousNode = list.next
        newNode.next = previousNode
        list.next = newNode
      } else {
        return traverseList(position, list.next, counter + 1)
      }
    }

    if(position === 1) {
      this.head = newNode
      this.head.next = previousNode
    } else if(position > this.count() + 1) {
      throw `Position too long, use less than ${this.count()}`
    } else {
      traverseList(position, this.head, 1)
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

  delete() {
    let previousNode = this.head
    let currentNode = this.head
    if(this.head === null) {
      throw `You can't delete an element in a Empty list`

    } else if(this.head.next === null) {
      this.head.data = null
    } else {
      while (currentNode.next != null) {
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previousNode.next = null
    }
  }
}

let auto = insertListSize(new SinglyLinkedList(), 7)


auto.delete()
auto.delete()
auto.delete()
auto.delete()
auto.delete()
auto.delete()
auto.delete()



printListValues(auto)
