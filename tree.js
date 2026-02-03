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
          console.log(".........");
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
  hight(root) {
    if (root == null) {
      return 0;
    }
    let left = this.hight(root.left);
    let right = this.hight(root.right);
    return Math.max(left, right) + 1;
  }
  countNodes(root) {
    if (root == null) {
      return 0;
    }
    return 1 + this.countNodes(root.left) + this.countNodes(root.right);
  }

  sum(root) {
    if (root == null) {
      return 0;
    }
    return this.sum(root.left) + this.sum(root.right) + root.value;
  }
  
  topView(root) {
    let map = new Map();
    let queue = [[root, 0]];
    while (queue.length) {
      let [node, hd] = queue.shift();
      if (!map.has(hd)) {
        map.set(hd, node.value);
      }
      if (node.left) {
        queue.push([node.left, hd - 1]);
      }
      if (node.right) {
        queue.push([node.right, hd + 1]);
      }
    }
    for (let [key, val] of map) {
      console.log(val);
    }
  }
  closestVal(root, val) {
    let closest = root.value;
    while (root !== null) {
      if (Math.abs(val - root.value) < Math.abs(val - closest)) {
        closest = root.value;
      }
      if (val < root.value) {
        root = root.left;
      } else {
        root = root.right;
      }
    }
    return closest;
  }
  isBalanced(root) {
    return this.validate(root) !== -1;
  }
  validate(root) {
    if (root == null) return 0
    
    let left = this.validate(root.left)
    if (left == -1) return -1
    
    let right = this.validate(root.right)
    if (right == -1) return -1
    
    if (Math.abs(left - right) > 1) return -1
    
    return Math.max(left,right)+1
  }
}

let bt = new Tree();
let root = bt.buildTree([1, 2, -1, -1, 3, 4, -1, -1, 5,3,-1,-1]);
// bt.levelOrder(root);
// console.log(bt.topView(root))
// bt.topView(root);
console.log(bt.isBalanced(root))
