/*
 - This works on circularly sorted array and there must be no duplicate in array.
 - To solve this problem we can use binear search variation here.
 First we check if start element and last element if start element is smaller then last element we can say array is already sorted on it is not rotated.
 - Okay so now if let's assume array is rotated one or more then one times. 
 Then we need to find smallest element in array if previous element and next element is greater then current element we can say it is smallest element and all elements before are circularly shifted so index of that element is count of rotation.
 - Now to loop an find this condition we check start elment and mid element if start is less then mid element we can sure that all element before that mid element are sorted then we need to loop through right side of element. 
 - Else is start elment is greater then mid element we can say that our target element is in that portion start to mid.
 - So here every time we are dividing array in two parts. We never check sorted part. See the code you will get idea.
*/

// Time Complexity = O(log(n)); Space Complexity = O(1);
function binarySearchHelper(arr, start, end){
    while(start<end){
    if(arr[start] < arr[end]){
        return start;
    }
    let mid = Math.floor((start + end)/2);
    let length = end + 1; //total length
    let previous = (mid + end) % length
    let next = (mid + 1) % length
    if (arr[previous]> arr[mid] && arr[next]>arr[mid]){
        return mid;
    }
    else if(arr[start] < arr[mid]){
        start = mid + 1; // Discarding left part
    }
    else if(arr[start] > arr[mid]){
        end = mid - 1; // Discarding right part
    }
    }
    return -1;
}

function findRotationCount(arr){
    let start = 0;
    let end = arr.length-1;
    let targetIndex = binarySearchHelper(arr, start, end);
    let count = targetIndex;
    return count;
}

let arr = [2, 5, 6, 7];
let result = findRotationCount(arr);
console.log('Total rotation in Array is = ', result);