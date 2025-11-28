class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }
  removeDupes() {
      let current = this.head
      while (current) {
          let temp = current.next
          let prev = current
          while (temp) {
              if (temp.value == current.value) {
                  prev.next = temp.next
                  this.length--
              }
              prev = temp
              temp = temp.next
          }
          current = current.next
      }
  }
}
let linked = new LinkedList();
linked.push(1);
linked.push(2);
linked.push(3);
linked.push(2);
linked.push(3);
linked.unshift(0);
linked.removeDupes();
console.log(linked);

function firstNonRe(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = (obj[str[i]] ? obj[str[i]] : 0) + 1
    }
    for (let key in obj) {
        if (obj[key] == 1) {
            return key
        }
    }
}
console.log(firstNonRe("swiss"));