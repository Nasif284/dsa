let arr = [1, 2, 3, 4, 5, 6, 9];

// let start = 0
// let end = arr.length - 1
// let target = 1
// while (start <= end) {
//     let mid = Math.floor((start + end) / 2)
//     if (target == arr[mid]) {
//         console.log("found at " + mid)
//     }
//     if (target > arr[mid]) {
//         start = mid+1
//     } else {
//         end = mid-1
//     }
// }

function binary(arr, target, start = 0, end = arr.length - 1) {
    let mid = Math.floor((start + end)/2)
    if (target == arr[mid]) {
        console.log("it is found at " + mid)
        return
    }
    if (target > arr[mid]) {
        start = mid + 1
    } else {
        end = mid -1
    }
    return binary(arr,target, start, end)
}
// binary(arr, 5,)

const fileSystem = {
  name: "root",
  files: ["file1.txt", "file2.txt"],
  folders: [
    {
      name: "docs",
      files: ["doc1.pdf", "doc2.pdf"],
      folders: [
        {
          name: "personal",
          files: ["resume.docx"],
          folders: [],
        },
      ],
    },
    {
      name: "images",
      files: ["photo1.jpg", "photo2.jpg"],
      folders: [],
    },
  ],
};

function displayFileName(folders) {
    if (!folders) {
        return
    }
   
    console.log(folders.files[0])
    if (folders.folders.length) {
      folders.folders.forEach((folder) => {
        return displayFileName(folder);
      });
    }
    
}

function sumOfDigits(n) {
    if (n == 0) {
        return 0
    }
    return sumOfDigits(Math.floor(n / 10)) + (n % 10);
}

// console.log(sumOfDigits(123))

function sumOfArr(arr) {
    if (!arr.length) {
        return 0
    }
    return arr[0] + sumOfArr(arr.slice(1))
}
// console.log(sumOfArr(arr))

function fibonacci(n) {
    if (n <= 1) {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
// console.log(fibonacci(6))

function rangeOfNums(start, end) {
    if (end < start) {
        return []
    } 
    const arr = rangeOfNums(start, end - 1)
    arr.push(end)
    return arr;
}

// console.log(rangeOfNums(1, 5))

function findFirstoccurrence(arr, target) {
    let start = 0, end = arr.length - 1
    let result;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (target == arr[mid]) {
            result = mid
            end = mid - 1
        }
        if (target > arr[mid]) {
            start = mid +1
        } else {
            end = mid-1
        }
    }
    return result
}
function findLastoccurrence(arr, target) {
  let start = 0,
    end = arr.length - 1;
  let result;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target == arr[mid]) {
      result = mid;
      start = mid + 1;
    }
    if (target >= arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}
console.log(findLastoccurrence([1,1,2,2,2,2,3,4],2))