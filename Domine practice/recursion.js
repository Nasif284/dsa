function multiply(nums,i= nums.length-1) {
    if (i < 0) {
        return 1;
    }
    return nums[i] * multiply(nums,i-1)
}
// console.log(multiply([1, 2, 3]))
function factorial(n) {
    if (n == 0) {
        return 1
    }
    return n * factorial(n-1)
}
// console.log(factorial(4))
function rangeOfNumbers(start, end) {
    if (start > end) {
        return []
    }
    let arr = rangeOfNumbers(start, end - 1)
    arr.push(end)
    return arr
}
// console.log(rangeOfNumbers(1,6))
function isPalindrome(str) {
    if (!str.length) {
        return true
    }
    if (str[0] != str[str.length - 1]) {
        return false
    } else {
        return isPalindrome(str.slice(1,str.length-1))
    }
}
// console.log(isPalindrome("MalayalaM"))
function febunachi(n) {
    if (n <= 1) {
        return n
    }
    return febunachi(n-1) + febunachi(n-2)
}
// console.log(febunachi(6))
function reverseStr(str) { 
    if (!str.length) {
        return ""
    }
    return reverseStr(str.slice(1))+str[0]
}
// console.log(reverseStr("cutp"))
function flatArr(arr) {
    let result = []
    for (let i of arr) {
        if (Array.isArray(i)) {
            result = result.concat(flatArr(i))
        } else {
            result.push(i)
        }
    }
    return result
}
// console.log(flatArr([1,[2,3],[4,5,6],[7]]))
function instanceRemove(str, s) {
    if (!str.length) {
        return ""
    }
    if (str[0] == s) {
        return instanceRemove(str.slice(1),s)
    } else {
        return  str[0] + instanceRemove(str.slice(1),s)
    }
}
console.log(instanceRemove("apple", "p"));