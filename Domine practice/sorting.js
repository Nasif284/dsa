const arr = [2, 5, 8, 1, 3, 9, 6, 7, 12, 10, 8];
function bubbleSort(arr) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
// bubbleSort(arr);
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let min = i
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min != i) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
}
// selectionSort(arr)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        let j = i - 1
        let key = arr[i]
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
}
// insertionSort(arr)
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
}
function merge(left, right) {
    let sorted = []
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i++])
        } else {
            sorted.push(right[j++])
        }

    }
    return sorted.concat(left.slice(i).concat(right.slice(j)))
}
// mergeSort(arr)
function quickSort(arr) {
    if(arr.length <= 1){
        return arr
    }
    let pivot = arr[0]
    let left = []
    let right = []
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort(arr))