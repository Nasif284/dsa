class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node
            this.tail = node
            this.length = 1
        } else {
            this.tail.next = node
            this.tail = node
            this.length++
        }
    }
    unshift(value) {
        let node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
            this.length = 1
        } else {
            let temp = this.head
            this.head = node
            node.next = temp
            this.length++
        }
    }
    pop() {
        let prev = this.head
        let current = this.head
        while (current.next) {
            prev = current
            current = current.next
        }
        prev.next = null
        this.tail = prev
        this.length--
    }
    shift() {
        this.head = this.head.next
        this.length--
    }
    insertInIndex(value, index) {
        let node = new Node(value)
        let i = 0
        let current = this.head
        if (index == 0) {
            this.unshift(value)
            return 
        }
        if (index == this.length) {
            this.push(value)
            return
        }
        while (current) {
            if (i == index-1) {
                node.next = current.next
                current.next = node
                this.length++
                break
            }
            current = current.next
            i++
        }
    }
    findMid() {
        let i = 0
        let mid = Math.floor((this.length-1 )/ 2)
        let current = this.head
        while (current) {
            if (i == mid) {
                return current.value
            }
            current = current.next
            i++
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
    sort() {
        let swapped = true
        do {
            let current = this.head;
            swapped = false
            while (current.next) {
                if (current.value > current.next.value) {
                    let temp = current.value
                    current.value = current.next.value
                    current.next.value = temp
                    swapped = true
                }
                    current = current.next
            }
        }while(swapped)
    }
    printValues() {
        let current = this.head
        while (current) {
            console.log(current.value)
            current= current.next
        }
    }
    reverse() {
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let next
        let prev = null
        while (temp) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp= next
        }
    }
}
let list = new LinkedList()
list.push(1)
list.push(2)
list.push(2);
list.push(3); 
list.push(3);
list.unshift(6)
list.unshift(6);
list.unshift(7);
list.insertInIndex(10, 5)
list.removeDupes()
list.sort()
list.reverse()
// console.log(list.findMid())
list.printValues()
console.log(list)