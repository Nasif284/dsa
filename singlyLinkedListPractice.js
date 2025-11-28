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
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // let current = this.head
      // while (current.next) {
      //     current = current.next
      // }
      // current.next = newNode;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  unshift(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
  insertAt(index, value) {
    let newNode = new Node(value);
    let counter = 0;
    let current = this.head;
    if (index == 0) {
      this.unshift(value);
      return;
    }
    if (index == this.length) {
      this.append(value);
      return;
    }
    while (current) {
      if (counter == index - 1) {
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        break;
      }
      current = current.next;
      counter++;
    }
  }
  remove(index) {
    if (index < 0 || index > this.length) return;
    if (index == 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    if (index == this.length) {
      this.pop();
      return;
    }
    let counter = 0;
    let temp = this.head,
      prev = this.head;
    while (temp) {
      if (counter == index) {
        prev.next = temp.next;
        this.length--;
        break;
      }
      prev = temp;
      temp = temp.next;
      counter++;
    }
  }
  pop() {
    let prev = this.head;
    let temp = this.head;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    prev.next = null;
    this.tail = prev;
    this.length--;
  }
  reverse() {
    let temp = this.head;
    let next;
    this.head = this.tail;
    this.tail = temp;
    let prev = null;
    while (temp) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }
  findMiddle() {
    let mid = Math.floor(this.length / 2);
    let counter = 0;
    let current = this.head;
    while (current) {
      if (counter == mid) {
        return current;
      }
      counter++;
      current = current.next;
    }
  }
  deleteMiddle() {
    let mid = Math.floor(this.length / 2);
    let counter = 0;
    let current = this.head;
    while (current) {
      if (counter == mid - 1) {
        current.next = current.next.next;
        this.length--;
        break;
      }
      counter++;
      current = current.next;
    }
  }
  removeDuplicates() {
    let current = this.head;
    while (current) {
      let temp = current;
      while (temp.next) {
        if (temp.next.value == current.value) {
          temp.next = temp.next.next;
          this.length--;
        } else {
          temp = temp.next;
        }
      }
      current = current.next;
    }
  }
  removeDupsUsingSet() {
    let seen = new Set();
    let prev;
    let current = this.head;
    while (current) {
      if (seen.has(current.value)) {
        prev.next = current.next;
        this.length--;
      } else {
        seen.add(current.value);
        prev = current;
      }
      current = current.next;
    }
  }
  pallindrome() {
    let current = this.head;
    let values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    for (let i = 0; i < Math.floor(values.length / 2); i++) {
      if (values[i] !== values[values.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  oddAndEvenShift() {
    let oddHead = null,
      oddTail = null;
    let evenHead = null,
      evenTail = null;
    let current = this.head;
    while (current) {
      if (current.value % 2 == 0) {
        if (!evenHead) {
          evenHead = current;
          evenTail = current;
        } else {
          evenTail.next = current;
          evenTail = current;
        }
      } else {
        if (!oddHead) {
          oddHead = current;
          oddTail = current;
        } else {
          oddTail.next = current;
          oddTail = current;
        }
      }
      current = current.next;
    }
    if (oddTail) oddTail.next = evenHead;
    if (evenTail) evenTail.next = null;
    this.head = oddHead ? oddHead : evenHead;
    this.tail = evenTail ? evenTail : oddTail;
  }
  sort() {
    let swapped = false;
    do {
      let current = this.head;
      swapped = false;
      while (current.next) {
        if (current.value > current.next.value) {
          let temp = current.value;
          current.value = current.next.value;
          current.next.value = temp;
          swapped = true;
        }
        current = current.next;
      }
    } while (swapped);
  }
  formArray(arr) {
    for (let i = 0; i < arr.length; i++){
      let newNode = new Node(arr[i])
      if (!this.head) {
        this.head = newNode
        this.tail = newNode
        this.length++
      } else {
        this.tail.next = newNode
        this.tail = newNode
        this.length++;
      }
    }
  }
  
}
const linkedList = new LinkedList();
// linkedList.append(2);
// linkedList.unshift(1);
// linkedList.append(3);
// linkedList.append(4);
// linkedList.append(4);
// linkedList.append(4);
// linkedList.append(5);
// // linkedList.insertAt(1, 10);
// linkedList.reverse()
// linkedList.removeDuplicates()
// linkedList.append(1);
// linkedList.append(5);
// linkedList.append(3);
// linkedList.append(0);
// linkedList.append(4);
// linkedList.append(1);
// linkedList.oddAndEvenShift();
// linkedList.sort();
linkedList.formArray([1,2,3,4,5,6])
console.log(linkedList);
