class TreeNode {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

class Tree {
  constructor() {
    this.index = 0;
  }

  buildTree(arr) {
    if (this.index >= arr.length) return null;

    let val = arr[this.index];
    this.index++;

    if (val == -1) return null;

    let root = new TreeNode(val);

    root.left = this.buildTree(arr);
    root.right = this.buildTree(arr);

    return root;
  }
  preOrder(root) {
    if (root == null) {
      return;
    }

    console.log(root);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }
  inOrder(root) {
    if (root == null) {
      return;
    }

    this.inOrder(root.left);
    console.log(root);
    this.inOrder(root.right);
  }
  postOrder(root) {
    if (root == null) {
      return;
    }

    this.postOrder(root.left);

    this.postOrder(root.right);
    console.log(root);
  }
  levelOrder(root) {
    let arr = [];
    arr.push(root);
    arr.push(null);

    while (arr.length > 0) {
      let curr = arr[0];
      arr.shift();
      if (curr == null) {
        if (arr.length > 0) {
            arr.push(null);
            console.log(".........")
          continue;
        } else {
          break;
        }
        }
         console.log(curr.value);
         if (curr.left) {
           arr.push(curr.left);
         }
         if (curr.right) {
           arr.push(curr.right);
         }
    }
  }
}

let bt = new Tree();
let root = bt.buildTree([1, 2, -1, -1, 3, 4, -1, -1, 5]);
bt.levelOrder(root);
