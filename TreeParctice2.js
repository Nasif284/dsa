class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class Tree2 {
  constructor() {
    this.root = null;
    this.index = 0;
  }
  buildByPreOrder(arr) {
    if (this.index >= arr.length) {
      return null;
    }
    let val = arr[this.index];
    this.index++;
    if (val == -1) {
      return null;
    }
    let root = new TreeNode(val);
    root.left = this.buildByPreOrder(arr);
    root.right = this.buildByPreOrder(arr);
    return root;
  }
  buildByLevelOrder(arr) {
    if (arr[0] == null || arr.length < 0) {
      return null;
    }
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;
    while (i < arr.length && queue.length) {
      let curr = queue.shift();
      if (arr[i] !== null) {
        curr.left = new TreeNode(arr[i]);
        queue.push(curr.left);
      }
      i++;
      if (arr[i] !== null) {
        curr.right = new TreeNode(arr[i]);
        queue.push(curr.right);
      }
      i++;
    }
    return root;
  }
  buildByElements(val) {
    let node = new TreeNode(val);
    let queue = [this.root];
    if (!this.root) {
      this.root = node;
      return;
    }
    while (queue.length) {
      let cur = queue.shift();
      if (!cur.left) {
        cur.left = node;
        break;
      } else {
        queue.push(cur.left);
      }

      if (!cur.right) {
        cur.right = node;
        break;
      } else {
        queue.push(cur.right);
      }
    }
    return this.root;
  }
  preOrder(root) {
    if (root == null) {
      return;
    }
    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }
  inOrder(root) {
    if (root == null) {
      return;
    }
    this.inOrder(root.left);
    console.log(root.value);
    this.inOrder(root.right);
  }
  postOrder(root) {
    if (root == null) {
      return;
    }
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.value);
  }
}
let tree = new Tree2();
tree.root = tree.buildByPreOrder([1, 2, -1, -1, 3, 4, -1, -1, 5]);
console.log(tree.buildByLevelOrder([1,2,3,4,5,6,7]))
tree.buildByElements(1);
tree.buildByElements(2);
tree.buildByElements(3);
tree.buildByElements(4);tree.buildByElements(5);

tree.postOrder(tree.root);
