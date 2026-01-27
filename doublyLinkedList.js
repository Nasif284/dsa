class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.length = 1;
    this.tail = this.head;
  }
  push(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }
  pop() {
    let prev = this.tail.prev;
    prev.next = null;
    this.tail = prev;
    this.length--;
  }
  unshift(value) {
    let newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  
  shift() {
    this.head.next.prev = null;
    this.head = this.head.next;
    this.length--;
    }
    reverse() {
        let temp = this.head
        this.head = this.tail
        this.tail = temp

        let prev = null
        while (temp) {
            let next = temp.next
            temp.next = prev
            prev = temp
            temp = next 
        }
    }
}

const doublyLinkedList = new DoublyLinkedList(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
console.log(doublyLinkedList);
doublyLinkedList.reverse()
console.log(doublyLinkedList);
