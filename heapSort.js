function heapSort(arr) {
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, i, n);
  }
  for (let i = n - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    heapify(arr, 0, i);
  }
}

function heapify(arr, i, n) {
  while (true) {
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    let largest = i;
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest === i) break;
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    i = largest;
  }
}
let arr = [2, 7, 4, 5, 3, 9, 7];
heapSort(arr);
console.log(arr);
