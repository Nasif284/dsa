const multiply = (nums, i = nums.length - 1) => {
  if (i < 0) {
    return 1;
  }
  return nums[i] * multiply(nums, i - 1);
};

const factorial = (n) => {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

const rangeOfNumbers = (start, end) => {
  if (end < start) {
    return [];
  }
  const arr = rangeOfNumbers(start, end - 1);
  arr.push(end);
  return arr;
};

const isPalindrome = (str) => {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, str.length - 1));
};

const febunachi = (n) => {
    if (n <= 1) {
        return n
    }
    return febunachi(n-1) + febunachi(n-2)
}

const reverseString = (str) => {
    if (str == "") {
        return ""
    }
    return reverseString(str.slice(1)) + str[0];
}
// console.log(reverseString("hello"))
const isPallindrome = (str) => {
  if (str == "") {
    return true
  }
  if (str[0] !== str[str.length - 1]) {
    return false
  }
  return isPalindrome(str.slice(1,-1))
}

// console.log(isPalindrome("madam"))

function flattenArray(arr){
  let result = []
  for (let element of arr){
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element))
    } else {
      result.push(element)
    }
  }
  return result
}

// console.log(flattenArray([1, [2, [3, [4, 5]]]]))

function repllaceCharWithIndex(str) {
let s=""
  for (let i = 0; i < str.length; i++){
    s+=i
  }
  return s
}
// console.log(repllaceCharWithIndex("hello"))

let arr = [1, [2, [3, [4, [5]]]]];
function flatArr(arr) {
  let result = [];
  for (let a of arr) {
    if (Array.isArray(a)) {
      result = result.concat(flatArr(a));
    } else {
      result.push(a);
    }
  }
  return result;
}
// console.log(flatArr(arr));

function instanceRemove(str, s) {
  if (str == "") {
    return ""
  }
  if (str[0] == s) {
    return instanceRemove(str.slice(1),s)
  } else {
    return str[0] + instanceRemove(str.slice(1),s) 
  }
}

// console.log(instanceRemove("apple","p"));
function reverse(string) {
  if (string.length == 0) {
    return "";
  }
  return reverse(string.slice(1)) + string[0];
}

function reverseEach(sentence) {
  let words = sentence.split(" ");
  function helper(index) {
    if (index === words.length) return "";
    let reversed = reverse(words[index]);
    return reversed + " " + helper(index + 1);
  }
  return helper(0);
}

// console.log(reverseEach("Hello World"));

