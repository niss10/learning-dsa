function getMinIndex(arr, start, end){
while(start<end){
    if(arr[start] < arr[end]){
        return start;
    }
    let mid = Math.floor((start + end)/2);
    let nextIndex = (mid + 1) % arr.length;
    let prevIndex = (mid - 1) % arr.length;
    if(arr[prevIndex] > arr[mid] && arr[nextIndex] > arr[mid]){
        return mid;
    }
    else if(arr[start] > arr[mid]){
        end = mid - 1;
    }
    else if(arr[start] < arr[mid]){
        start = mid + 1;
    }
}
return -1;
}

function binarySearchHelper(arr, start, end, target){
    while(start<=end){
        let mid = Math.floor((start + end)/2);
        if (arr[mid] == target){
            return mid;
        }
        else if (target > arr[mid]){
            start =  mid + 1;
        }
        else if (target < arr[mid]){
            end = mid -1;
        }
    }
    return "Not Found";
}

function findElemnetCircularArray(arr, target){
let start = 0;
let end = arr.length -1;
let minIndex = getMinIndex(arr, start, end);
if(minIndex != -1){
    if (target == arr[minIndex]){
        return minIndex;
    }
    else if(target > arr[minIndex] && target <= arr[end]){
        return binarySearchHelper(arr, minIndex+1, end, target)
    }
    else {
        return binarySearchHelper(arr, start, minIndex-1, target)
    }
}
else {
    return "Not Found";
}
}

let arr = [12, 14, 18, 21, 3, 6, 8, 9];
let target = 21;
let result = findElemnetCircularArray(arr, target);
console.log(`Index of target ${target} on circular sorted list is ${result}`);