
let arr = [1,2,78,124,456,567,789,890,1000, 1234, 6789]
let start = 0
let end = arr.length - 1
target = 6789
count = 0

function binarySearch(arr, start, end, target){
    console.log(`Arrya we are looking is ${arr.slice(start, end+1)}`);
    
    mid = Math.floor((start + end)/2);
    console.log(`start index is ${start}`);
    console.log(`end index is ${end}`);
    console.log(`mid index is ${mid}`);
    console.log(`mid element is ${arr[mid]}`);
    count = count + 1;
    if(target === arr[mid]){
        console.log(`found ${arr[mid]} at ${mid}`);
        return mid;
    }
    else if((start > end) || (end < start)){
        return "Not found"
    }
    else if(target > arr[mid]){
        start = mid + 1;
        return binarySearch(arr, start, end, target);
    }
    else if(target < arr[mid]){
        end = mid - 1;
        return binarySearch(arr, start, end, target);
    }


}
let found = binarySearch(arr, start, end, target)
console.log(`index is ${found}`);
console.log(`count is ${count}`);