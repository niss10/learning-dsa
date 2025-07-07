/*
- To find total occurrence we need to first calculate first occurance of element and last occurrence then  we can get length of by subtracting last occurrence - first occurrence as all occurance is between first occurrence and last occurrence.
*/

// Time Complexity = O(log(n)); Space Complexity = O(1);
function binarySearchHelper(arr, target, firstOccurrence){
    let result = -1;
    let start = 0;
    let end = arr.length-1;
    while (start<=end){
        mid = Math.floor((start + end)/2);
        if (arr[mid] === target){
            result = mid;
            if(firstOccurrence){
                end = mid - 1;
            }
            else{
                start = mid + 1;
            }
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

function countTotalOccurrences(arr, target){
    let firstIndex = binarySearchHelper(arr, target, true);
    let lastIndex = binarySearchHelper(arr, target, false);
    if (firstIndex !=-1 && lastIndex!=-1) {
        return ((lastIndex - firstIndex) + 1)
    }
    return 0;
}

let arr = [1,1,3,3,5,5,5,5,5,9,9,11];
let target = 5;
let result = countTotalOccurrences(arr, target);
console.log('result = ', result);
