// Time Complexity = O(log(n)); Space Complexity = O(1);
export function binarySearch(arr, target){
    // console.log('Input Array is = ', arr);
    arr.sort();
    // console.log('Sorted input array is = ', arr);
    let start = 0;
    let end = arr.length-1;
    while (start<=end){
        let mid = Math.floor((start + end)/2);
        if (arr[mid] === target){
            return mid;
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

// let arr = [5, 8, 2, 6, 3, 9, 1, 0];
// let target = 1;
// let result = binarySearch(arr, target);
// console.log(`${target} found at ${result}`);
