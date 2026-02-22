class Stack {
  constructor() {
    this.stack = [];
  }
  push(value) {
    return this.stack.push(value);
  }
  pop() {
    if (!this.stack.length) {
      return false;
    }
    return this.stack.pop();
  }
  peek() {
    if (!this.stack.length) {
      return undefined;
    }
    return this.stack[this.stack.length - 1];
  }
  size() {
    return this.stack.l
    ength;
  }
}
let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.pop();
console.log(s.size());
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
} 
class StackLinked {
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
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    }
    pop() {
        if (!this.head) {
            return undefined
        }
        if (this.length == 1) {
            this.head = null
            this.tail = null
            this.length = 0
            return
        }
        let current = this.head
        while (current.next.next) {
            current = current.next
        }
        current.next = null
        this.tail = current
        this.length--
    }
    
  
}
let st = new StackLinked()
st.push(1)
st.push(2)
st.pop()
st.pop();
console.log(st)
