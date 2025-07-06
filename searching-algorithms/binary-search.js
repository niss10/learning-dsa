// Time Complexity = O(nlog(n)); Space Complexity = O(log(n));
function binarySearchHelper(arr, start, end, target){
    if (start > end){
        return "Not Found";
    }
    mid = Math.floor((start + end)/2);
    if (arr[mid] === target){
        return `${target} Found at index ${mid}`;
    }
    else if (target < arr[mid]){
        start = 0;
        end = mid - 1;
        return binarySearchHelper(arr, start, end, target);
    }
    else if (target > arr[mid]){
        start = mid + 1;
        end = arr.length - 1;
        return binarySearchHelper(arr, start, end, target);
    }
}

function binarySearch(arr, target){
    console.log('Input Array is = ', arr);
    
    arr.sort();
    console.log('Sorted input array is = ', arr);
    start = 0;
    end = arr.length-1;
    return binarySearchHelper(arr, start, end, target);
}

let arr = [5, 8, 2, 6, 3, 9, 1, 0];
let target = 3;
let result = binarySearch(arr, target);
console.log('result = ', result);
