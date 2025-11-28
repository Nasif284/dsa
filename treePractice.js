class Node {
    constructor(val) {
        this.value = val
        this.left = null
        this.right = null
    }
}

class Tree{
    constructor() {
        this.root = null
        this.index = 0
    }

    buildTree(arr) {
        if (arr.length <= this.index) {
            return null
        }
        let val = arr[this.index]
        this.index++

        if (val == -1) {
            return null
        }

        let newNode = new Node(val)
        newNode.left = this.buildTree(arr)
        newNode.right = this.buildTree(arr)
        return newNode
    }

    createByPreOrder(arr) {
        this.index = 0
        this.root = this.buildTree(arr)
    }
    createByLevelOrder(arr) {
        if (arr.length == 0 || arr[0] == null) return null
        let root = new Node(arr[0])
        let queue = [root]
        let i = 1
        while (i < arr.length && queue.length > 0) {
            let curr = queue.shift()
            if (arr[i] !== null) {
                curr.left = new Node(arr[i])
                queue.push(curr.left)
            }
            i++
            if (arr[i] !== null) {
                curr.right = new Node(arr[i])
                queue.push(curr.right)
            }
            i++
        }
        this.root = root
    }
    insertElements(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return
        }
        let queue = [this.root]
        while (queue.length > 0) {
            let curr = queue.shift()
            if (!curr.left) {
                curr.left = newNode
                break
            } else {
                queue.push(curr.left)
            }

            if (!curr.right) {
                curr.right = newNode
                break
            } else {
                queue.push(curr.right)
            }
        }
    }
}

let t = new Tree()
// t.createByPreOrder([1, 2, -1, -1, 3, 4, -1, -1, 5]);
// t.createByLevelOrder([1, 2, 3, 4, 5, null, 6]);
t.insertElements(1)
t.insertElements(2);
t.insertElements(3);
t.insertElements(4);
t.insertElements(5);
t.insertElements(6);
console.log(t)