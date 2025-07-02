/* Merge sort is good algorithmn as time complexity is O(nlog(n)) but space complexity is O(n).
- Merge sort is recursive algorithm as it solve problem is self similar manner. and it follows divide and conqur principle to solve problem.

How it works:
    - First we take input as array and we divide it in left and right part with middle index and we divide till we get to the single element and single element is always sorted. now we start merging element for that we take those left and right element which are already sorted and we merge them in sorting order.
*/

// Time Complexity: O(nlog(n)); Space Complexity = O(nlog(n)) or O(n)
const merge = (left, right, arr) =>{
    console.log('Merge called with....');
    
    console.log("left = ", left);
    console.log("right = ", right);
    console.log("arr = ", arr);
    leftIndex = 0;
    rightIndex = 0;
    for(let i=0;i<arr.length;i++){
        if (leftIndex <= (left.length-1) && rightIndex<=(right.length-1)){
            if(left[leftIndex]<right[rightIndex]){
                arr[i] = left[leftIndex];
                leftIndex++;
            }
            else{
                arr[i] = right[rightIndex];
                rightIndex++;
            }
        }
        else if(leftIndex > (left.length-1)){
            arr[i] = right[rightIndex];
            rightIndex++;
        }
        else{
            arr[i]= left[leftIndex];
            leftIndex++;
        }
    }
    console.log('merge return with sorted arr = ', arr);
    
    return arr;
}

const mergeSort = (arr) =>{
    console.log('MergeSort called with arr = ', arr);
    
    if (arr.length == 1){
        return arr;
    }
    let midIndex = Math.floor(arr.length/2);   
    let end = arr.length;
    let left = mergeSort(arr.slice(0, midIndex));
    let right = mergeSort(arr.slice(midIndex, end))


    return merge(left, right, arr);
}

// let unsortedArray = [9,4,1,3,2,7];
let unsortedArray = [1,4,1,6,8,5,3,7];
let sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);