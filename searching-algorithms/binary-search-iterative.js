// Time Complexity = O(log(n)); Space Complexity = O(1);
function binarySearch(arr, target){
    console.log('Input Array is = ', arr);
    arr.sort();
    console.log('Sorted input array is = ', arr);
    start = 0;
    end = arr.length-1;
    while (start<=end){
        mid = Math.floor((start + end)/2);
        if (arr[mid] === target){
            return `${target} Found at index ${mid} on sorted array`;
        }
        else if (target < arr[mid]){
            end = mid - 1;
        }
        else if (target > arr[mid]){
            start = mid + 1;
        }
    }
    
    return "Not Found";
}

let arr = [5, 8, 2, 6, 3, 9, 1, 0];
let target = 1;
let result = binarySearch(arr, target);
console.log('result = ', result);
