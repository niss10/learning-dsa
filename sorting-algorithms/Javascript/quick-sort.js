/* Quick sort is most efficiant algorithm as it take O(nlog(n)) time and O(log(n)) space complexity 
- We can avoid worst case by selecting pivot element as random element and then set it last element.
- Quick Sort is In-Place sorting algorithm we don't take extra memory to store array value but recursion take log(n) space in stack memory.

How quick Sort work:
    - First quick sort take array as input and start and end index then first it find partition so we divide array with left side values are always less then pivot element(Last element(we randomly select from array and swap with last element)). And right side always greater then pivot.
    - We repeat this pprocess self similar manner means recursivly calling quick sort again with left side and right side of Pivot element.
    - So it takes n times for partion and log(n) time for calling quick sort again with half element.
*/

// Time Complexity: O(nlog(n)) in wors case O(n^2); Space Complexity = O(log(n)) or O(n) in wors case
// Partition will make sure element before pivotIndex will always be less then pivot element
const partiotion = (arr, start, end) => {
    // console.log('arr received for partion is = ', arr);
    // Get a random index
    let randomIndex = Math.floor(Math.random() * (end - start + 1)) + start;

    // Swapping random value with last elment
    pivot = arr[randomIndex];
    arr[randomIndex] = arr[end];
    arr[end] = pivot

    // logic for partitioning
    let pivotIndex = start;
    for(let i=start;i<end;i++){ 
        if (arr[i] < pivot) {
            let temp = arr[pivotIndex];
            arr[pivotIndex] = arr[i];
            arr[i] = temp;
            pivotIndex++ 
        }
    }
    arr[end] = arr[pivotIndex];
    arr[pivotIndex]=pivot;

    return pivotIndex;
}
const quickSort = (arr, start, end) => {
    if (start < end){
        let pivotIndex = partiotion(arr, start, end);
        quickSort(arr, start, pivotIndex-1);
        quickSort(arr, pivotIndex+1, end);
    }
    
    return arr;
}

// let unsortedArray = [9,4,1,3,2,7];
let unsortedArray = [7,2,1,6,8,5,3,4];
let sortedArray = quickSort(unsortedArray, 0, (unsortedArray.length-1));
console.log(sortedArray);