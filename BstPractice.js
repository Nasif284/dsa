class TreeNode {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}
class BST2 {
  constructor() {
    this.root = null;
  }
  insert(val) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }
    let cur = this.root;
    while (true) {
      if (cur.value > val) {
        if (!cur.left) {
          cur.left = new TreeNode(val);
          break;
        }
        cur = cur.left;
      } else {
        if (!cur.right) {
          cur.right = new TreeNode(val);
          break;
        }
        cur = cur.right;
      }
    }
  }
  insertArr(root, val) {
    if (root == null) {
      return new TreeNode(val);
    }
    if (root.value > val) {
      root.left = this.insertArr(root.left, val);
    } else {
      root.right = this.insertArr(root.right, val);
    }
    return root;
  }
  formArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.root = this.insertArr(this.root, arr[i]);
    }
  }
  sortedBstBalanced(arr) {
    const build = (l, r) => {
      if (l > r) {
        return null;
      }
      let mid = Math.floor((l + r) / 2);
      let node = new TreeNode(arr[mid]);
      node.left = build(l, mid - 1);
      node.right = build(mid + 1, r);
      return node;
    };
    this.root = build(0, arr.length - 1);
  }
  fromPreOrder(arr) {
    let index = 0;
    const build = (min, max) => {
      if (index >= arr.length) return null;
      let val = arr[index];
      if (val < min || max < val) return null;
      index++;
      let node = new TreeNode(val);
      node.left = build(min, val);
      node.right = build(val, max);
      return node;
    };
    this.root = build(-Infinity, Infinity);
  }
  search(root, target) {
    if (root == null) {
      return false;
    }
    if (target == root.value) {
      return true;
    }
    if (target < root.value) {
      return this.search(root.left, target);
    } else {
      return this.search(root.right, target);
    }
  }
  levelOrderSearch(val) {
    let curr = this.root;
    while (curr !== null) {
      if (curr.value == val) {
        return true;
      }
      if (curr.value > val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return false;
  }
  getSuccessor(root) {
    while (root.left !== null) {
      root = root.left;
    }
    return root;
  }
  delete(root, val) {
    if (root == null) {
      return null;
    }
    if (root.value > val) {
      root.left = this.delete(root.left, val);
    } else if (root.value < val) {
      root.right = this.delete(root.right, val);
    } else {
      if (root.right == null) {
        root = root.left;
      } else if (root.left == null) {
        root = root.right;
      } else {
        let suc = this.getSuccessor(root.right);
        root.value = suc.value;
        root.right = this.delete(root.right, suc.value);
      }
    }
    return root;
  }
}

let bst = new BST2();
// bst.insert(4)
// bst.insert(3)
// bst.insert(5)
// bst.insert(10)
// bst.insert(1)
// bst.formArray([6, 1, 4, 9, 3, 7, 7, 9, 4]);
bst.fromPreOrder([6, 1, 4, 3, 9, 7, 8]);
bst.delete(bst.root, 1);
// console.log(bst.levelOrderSearch(9));
console.log(bst.root);
