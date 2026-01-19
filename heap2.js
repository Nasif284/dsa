class Heap2 {
  constructor() {
    this.heap = [-1];
  }
  insert(val) {
    this.heap.push(val)
    let index = this.heap.length-1;
    while (index > 1) {
        let parent = Math.floor(index / 2)
        if (this.heap[parent] < this.heap[index]) {
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            index = parent
        } else {
            return
        }
    }
    }
    delete() {
        this.heap[1] = this.heap.pop()  
        let i = 1
        while (true) {
            let left = 2 * i
            let right = 2 * 1 + 1
            let largest = i
            if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
                largest = left
            }
            if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
                  largest = right;
            }

            if (i === largest) break
            
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]]
            i = largest
        }
    }
    heapify(i) {
        while (true) {
            let left = i * 2
            let right = i * 2 + 1
            let largest = i
            if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
                largest = left
            }
            if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
                  largest = right;
            }

            if (i === largest) break
            
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]]
            i = largest
        }
    }
    buildHeapFromArr(arr) {
        this.heap = [null,...arr]
        for (let i = Math.floor(arr.length / 2); i >= 1; i--){
            this.heapify(i)
        }
    }
}
let h = new Heap2();
h.insert(10);
h.insert(20)
h.buildHeapFromArr([7,3,5,10,8,2,4])
console.log(h.heap);
