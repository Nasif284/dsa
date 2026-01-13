class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
    this.length = 1;
    this.tail = this.head;
  }
  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
    return node;
  }

  pop() {
    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    return this;
  }

  shift() {
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
  }

  getFirst() {
    return this.head;
  }
  getLast() {
    return this.tail;
  }
  getNode(value) {
    let temp = this.head;
    while (temp) {
      if (temp.value == value) {
        return temp;
      }
      temp = temp.next;
    }
  }
  getByIndex(index) {
    let temp = this.head;
    let counter = 0;
    while (temp) {
      if (counter == index) {
        return temp;
      }
      counter++;
      temp = temp.next;
    }
  }
  set(index, value) {
    let temp = this.head;
    let counter = 0;
    while (temp) {
      if (counter == index) {
        temp.value = value;
        return temp;
      }
      counter++;
      temp = temp.next;
    }
  }
  insert(index, value) {
    const newNode = new Node(value);
    if (index == 0) {
      this.unshift(value)
    } else if (index >= this.length) {
      return this.push(value)
    } else  {
      let counter = 0;
      let node = this.head;
      while (node) {
        if (counter == index - 1) {
          let temp = node.next;
          node.next = newNode;
            newNode.next = temp;
        }
        node = node.next;
        counter++;
      }
    }
    this.length++;
  }
  removeDupesInSorted() {
    let current = this.head
    while (current.next) {
      if (current.value == current.next.value) {
        current.next = current.next.next
        this.length--
      } else {
        current = current.next
      }
    }
  }
  
  removeDupes() {
    let current = this.head
    while (current) {
      let temp = current
      while (temp.next) {
        if (temp.next.value == current.value) {
          temp.next = temp.next.next
          this.length--
        } else {
          temp = temp.next
        }
      }
      if (!current.next) {
        this.tail = current
      }
      current = current.next
    }
  }
}

const newLinkedList = new LinkedList(1);
// newLinkedList.unshift(23);
// console.log(newLinkedList);
// newLinkedList.shift()
// console.log(newLinkedList);
// newLinkedList.insert(0, 6);
newLinkedList.push(1)
newLinkedList.push(1);
newLinkedList.push(2);
newLinkedList.push(3);
newLinkedList.push(3);
newLinkedList.push(3);
newLinkedList.push(1);
newLinkedList.push(1);
newLinkedList.push(3);
newLinkedList.push(4);
newLinkedList.push(5);
newLinkedList.push(2);
newLinkedList.push(2);
// newLinkedList.removeDupesInSorted()
newLinkedList.removeDupes();

console.log(newLinkedList);
