/*
- Binary search have many variation and can be applied in many problem and one problem is when we want to find first occurance of element in sorted array.

- to solve this problem we will not stop searching element when we find first time element instead if we will search again on left side and update our result inde every time we find lets see code everything will be clear seeing code.
*/

function binarySearchFirstOccurance(sortedArr, target){
    let result = "Not Found";
    let start = 0;
    let end = arr.length-1;
    while (start<=end){
        mid = Math.floor((start + end)/2);
        if (arr[mid] === target){
            result = mid;
            end = mid - 1;
        }
        else if (target < arr[mid]){
            end = mid - 1;
        }
        else if (target > arr[mid]){
            start = mid + 1;
        }
    }
    return result;
}

let arr = [1, 4, 9, 12, 12, 12, 18, 20, 21, 36];
let target = 12;
let result = binarySearchFirstOccurance(arr, target);
console.log(`first occurance of Target ${target} is at Index = `, result);