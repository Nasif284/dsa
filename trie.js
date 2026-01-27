class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEnd = true;
  }
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEnd;
  }
  startWith(pre) {
    let node = this.root;
    for (let char of pre) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }
  collect(node, prefix, result) {
    if (node.isEnd) result.push(prefix);
    for (let ch in node.children) {
      this.collect(node.children[ch], prefix + ch, result);
    }
  }
  autoComplete(prefix) {
    let node = this.root;
    for (let ch of prefix) {
      if (!node.children[ch]) return [];
      node = node.children[ch];
    }
    let result = [];
    this.collect(node, prefix, result);
    return result;
  }
  longestPrefix() {
    
  }
}

let t = new Trie();
let arr = ["The", "Their", "Them", "Apple"];
for (let w of arr) {
  t.insert(w);
}
console.log(t.autoComplete("Th"));
