class Heap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }
  insert(val) {
    this.size = this.size + 1;
    let index = this.size;
    this.heap[index] = val;
    while (index > 1) {
      let parent = Math.floor(index / 2);
      if (this.heap[parent] < this.heap[index]) {
        [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
        index = parent;
      } else {
        return;
      }
    }
  }
  delete() {
    this.heap[1] = this.heap[this.size];
    this.heap.splice(this.size, 1);
    let i = 1;
    while (i < this.size) {
      let left = 2 * i;
      let right = 2 * i + 1;
      if (left < this.size && this.heap[i] < this.heap[left]) {
        [this.heap[left], this.heap[i]] = [this.heap[i], this.heap[left]];
        i = left;
      } else if (right < this.size && this.heap[i] < this.heap[right]) {
        [this.heap[right], this.heap[i]] = [this.heap[i], this.heap[right]];
        i = right;
      } else {
        return;
      }
    }
  }
  heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i;
    let right = 2 * i + 1;
    if (left < n && arr[largest] < arr[left]) {
      largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      this.heapify(arr, n, largest);
    }
  }
  heapSort(arr, n) {
      let s = n;
      for (let i = Math.floor(arr.length / 2) ; i > 0; i--){
          this.heapify(arr,n,i)
      }
    while (s > 1) {
      [arr[s], arr[1]] = [arr[1], arr[s]];
      s--;
      this.heapify(arr, s, 1);
    }
  }
}

let h = new Heap();
// h.insert(3)
// h.insert(8);
// h.insert(1);
// h.insert(4)
// h.delete()
let arr = [-1, 53, 55, 98, 67, 45];
// for (let i = Math.floor(arr.length / 2); i > 0; i--) {
//   h.heapify(arr, arr.length, i);
// }
h.heapSort(arr,arr.length-1)
console.log(arr);
// console.log(h.heap)
