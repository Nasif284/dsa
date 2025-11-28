class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
    }
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }
  insert(value, index) {
    let newNode = new Node(value);
    if (index == 0) {
      this.unshift(value);
      return;
    }
    if (index == this.length) {
      this.append(value);
      return;
    }
    let current = this.head;
    let counter = 0;
    while (current) {
      if (counter == index) {
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
        this.length++;
        break;
      }
      current = current.next;
      counter++;
    }
  }
  pop() {
    if (!this.head) return;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
    this.length--;
  }
  remove(index) {
    if (!this.head) return;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    if (index == this.length) {
      this.pop();
      return;
    }
    let current = this.head;
    let counter = 0;
    while (current) {
      if (counter == index) {
        current.prev.next = current.next;
        current.next.prev = current.prev;
        this.length--;
        break;
      }
      current = current.next;
      counter++;
    }
  }
  reverse() {
    let current = this.head;
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    while (current) {
      let temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      current = current.prev;
    }
  }
  sort() {
    let swapped = false;
    do {
      let current = this.head;
      swapped = false;
      while (current.next) {
        if (current.value > current.next.value) {
            let temp = current.value
            current.value = current.next.value
            current.next.value = temp
          swapped = true;
        }
        current = current.next;
      }
    } while (swapped);
  }
}

const d = new DoublyLinkedList();
d.append(1);
d.append(2);
d.unshift(0);
d.insert(45, 1);
d.append(50);
d.reverse();
d.sort();
console.log(d);
