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
// console.log(instanceRemove("apple", "p"));
function sumOfArr(arr,i = arr.length-1) {
    if (i < 0) {
        return 0
    }
    return arr[i] + sumOfArr(arr,i-1)
}
// console.log(sumOfArr([1, 2, 3, 4, 5, 6]));
function countOfOcc(str, s) {
    if (!str.length) {
        return 0
    }
    return (str[0] == s ? 1 : 0) + countOfOcc(str.slice(1),s)
}
// console.log(countOfOcc("apple","p"))
function isSorted(arr, i = 0) {
    if (i > arr.length - 1) {
        return true
    }
    if (arr[i] > arr[i + 1]) return false
    else return isSorted(arr,i+1)
}
// console.log(isSorted([1,2,6,4]))
function printNum(n) {
    if (n == 0) {
        return
    }
    console.log(n);
    printNum(n - 1)
    
}
// console.log(printNum(9))
function sumOfDigits(num) {
    if (num == 0) {
        return 0
    }
    return (num%10) + sumOfDigits(Math.floor(num/10)) 
}
console.log(sumOfDigits(786))