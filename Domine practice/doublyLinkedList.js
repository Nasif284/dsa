class Node{
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}
class List{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(value) {
        let node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
            this.length++
        } else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
            this.length++
        }
    }
}