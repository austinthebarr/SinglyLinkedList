class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }


  push(val) {
    this.length++
    const tempNode = new Node(val)
    if (!this.head) {
      this.head = tempNode;
      this.tail = tempNode;
    } else {
      this.tail.next = tempNode;
      this.tail = tempNode;
    }

    return this;
  }

  pop() {
    let node = this.head;
    let previous = this.head;
    let returnNode = this.tail
    while (node) {
      if (node.next === this.tail) {
        previous = node;
        this.tail = previous;
        returnNode = node.next;
        node.next = null;

      }
      node = node.next;

    }

    return returnNode;

  }

  shift() {
    if (!this.head) {
      return null;
    }
    let returnNode = this.head;
    this.head = returnNode.next;
    return returnNode;
  }

  unshift(val) {
    let currentHead = this.head;
    this.length++;
    const tempNode = new Node(val);
    if (!this.head) {
      this.head = tempNode;
      this.tail = tempNode;
    } else {
      tempNode.next = currentHead;
      this.head = tempNode;
    }
  }

  get(index) {
    if (index < 0 || index > this.length) return null;
    var counter = 0;
    var tempNode = this.head;
    while (counter < index) {
      tempNode = tempNode.next;
      counter++;
    }

    return tempNode;
  }

  set(val, index) {
    const nodeFound = this.get(index);

    if (nodeFound !== null) {
      nodeFound.val = val;
      return true;
    } else {
      return false;
    }

  }

  insert(val, index) {
    if (index === 0) {
      return unshift(val);
    } else if (index === this.length - 1) {
      return;
    } else {
      const newNode = new Node(val);
      const previousNode = this.get(index - 1);
      newNode.next = previousNode.next;
      previousNode.next = newNode;
      this.length++;
      return true;
    }
    return false;

  }

}


const LinkedlistTest = new Linkedlist();

LinkedlistTest.push(1)

LinkedlistTest.push(3)
LinkedlistTest.push(4)
LinkedlistTest.push(9)
LinkedlistTest.push(10)

LinkedlistTest.insert(10, 3)
console.log(LinkedlistTest.shift());