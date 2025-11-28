const arr = [2, 5, 8, 1, 3, 9, 6, 7, 12, 10, 8];
function bubbleSort(arr) {
    let swapped = false
    do {
        swapped = false
        for (let i = 0; i < arr.length; i++){
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                swapped = true
            }
        }
        
    } while (swapped)
    return arr
}
// console.log(bubbleSort(arr))
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        let key = arr[i]
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
 return arr
}
// console.log(insertionSort(arr))
function selectionSort(arr) {
    
    for (let i = 0; i < arr.length; i++){
        let min = i
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
    return arr
}
// console.log(selectionSort(arr))
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort( arr.slice(0, mid))
    let right =mergeSort( arr.slice(mid))
    return merge(left,right)
}
function merge(left, right) {
    let i = 0;
    let j = 0
    let sorted = []
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i++])
        } else {
            sorted.push(right[j++]);
        }
    }
    return sorted.concat(left.slice(i).concat(right.slice(j)))
}
// console.log(mergeSort(arr))

function quickSort(arr) {
       if (arr.length <= 1) {
         return arr;
    }
    let pivot = arr[0]
    let right = []
    let left = []
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
// console.log(quickSort(arr))