function reverseAndSquare(arr) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        
        let temp =  arr[start] *2
        arr[start] = arr[end] *2
        arr[end] = temp
        start++
        end--
    }
    return arr
}
let arr = [1,2,3,4,5]
// console.log(reverseAndSquare([1, 2, 3, 4, 5]));
function unshiftArr(arr) {
    for (let i = arr.length - 1; i >= 0; i--){
        arr[i+1] = arr[i]
    }
    arr[0] = 5
    return arr
}

console.log(unshiftArr(arr));
function findMissingNumber (arr){
    let n = arr.length + 1
    let sum1 = n * (n+1)/2
    let sum2 = arr.reduce((acc,curr) => acc+curr,0)
    return sum1 - sum2
}
console.log(findMissingNumber(arr))


