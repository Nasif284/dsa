class Node {
    constructor(val) {
        this.value = val
        this.right = null
        this.left = null
    }
}

class BST{
    constructor() {
        this.root = null
    }
    insert(root, value) {
        if (root == null) {
            return new Node(value)
        }
        if (root.value > value) {
            root.left = this.insert(root.left,value)
        } else {
            root.right = this.insert(root.right,value)
        }
        return root
    }
    build(arr) {
        for (let i = 0; i < arr.length; i++){
                this.root = this.insert(this.root,arr[i])
        }
    }
    inOrder(root) {
        if (root == null) {
            return
        }
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
    }
    search(root, target) {
        if (!root) {
            return false
        }
        if (root.value == target) {
            return true
        }
        if (root.value > target) {
           return this.search(root.left,target)
        } else {
           return this.search(root.right,target)
        }
    }
    getSuccessor(root) {
        while (root.left !== null && root.right !== null) {
            root = root.left
        }
        return root
    }
    delete(root, target) {
        if (root == null) {
            return null
        }

        if (root.value > target) {
            root.left = this.delete(root.left,target)
        } else if (root.value < target) {
            root.right = this.delete(root.right,target)
        } else {
            if (root.left == null) {
                return root.right
            }else if (root.right == null) {
                return root.left
            } else {
                let s = this.getSuccessor(root.right)
                root.value = s
                root.right = this.delete(root.right,s.value)
            }
        }
        return root
    }
}
let bst = new BST()
bst.build([3, 2, 5, 4, 6, 1]);
bst.inOrder(bst.root)
console.log(bst.search(bst.root, 9))
bst.delete(bst.root, 2)
bst.inOrder(bst.root);