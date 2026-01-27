const arr = [2, 5, 8, 1, 3, 9, 6, 7, 12, 10,8]
const bubbleSort = (arr) => {
    let swapped = false
    do {
        swapped = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
    return arr
}
console.log(bubbleSort(arr))
const selectionSort = (arr) =>{
    for (let i = 0; i < arr.length; i++){
        let min = i
        for (let j = i + 1; j < arr.length; j++){
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        if (min != i) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}
// console.log(selectionSort(arr))

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let j = i - 1
        let key = arr[i]
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key 
    }
    return arr
}
// console.log(insertionSort(arr))

const mergeSort = (arr) => {
    if(arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

const merge = (left, right) => {
    let sorted = []
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            sorted.push(right[j++])
        } else {
            sorted.push(left[i++])
        }
    }
    return sorted.concat(left.slice(i).concat(right.slice(j)))
}
// console.log(mergeSort(arr))

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    let pivot = arr[0]
    let left = []
    let right = []
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > pivot) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort(arr))