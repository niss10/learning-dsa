/* Insertion sort is slow sorting algorithm it takes O(n^2) time complexity. But for best case Time Complexity: O(n); and also if we see practically logic of insertion sort it has less comprasaion and loop so it is quite better then selection and bubble sort.

How Insertion sort works:
    - First we take list of array and we assume left side is sorted,
    - We take each element make hole at that index we compare with previous (left side sorted array then we shift larger element in hole and make hole and repeat till we find appropiat hole for our current or targeted element)

*/

// Time Complexity: O(n^2); Space Complexity = O(1)
// While loop only execute based on some condition so for best case Time Complexity: O(n);
const insertionSort = (unsortedArray) =>{
    for (let i=0; i<unsortedArray.length;i++){
        hole = i;
        target = unsortedArray[i];
        while(hole>0 && unsortedArray[hole-1]>target){
                unsortedArray[hole] = unsortedArray[hole-1];
                hole--;
        }
        unsortedArray[hole] = target;
    }
    return unsortedArray;
}

// with for loop solution is; With for loop best case also gives O(n^2) time complexity
// const insertionSort = (unsortedArray) =>{
//     for (let i=0; i<unsortedArray.length;i++){
//         hole = i;
//         target = unsortedArray[i];
//         for(let j=i-1;j>=0;j--){
//             if (unsortedArray[j]>target) {
//                 unsortedArray[hole] = unsortedArray[j];
//                 hole=j;
//             }
//         }
//         unsortedArray[hole] = target;
//     }
//     return unsortedArray;
// }


let unsortedArray = [9,4,1,3,2,7];
let sortedArray = insertionSort(unsortedArray);
console.log(sortedArray);