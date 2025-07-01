/* Selection is sort is slow sorting algorithm it takes O(n^2) time complexity
- In Selection sort at each iteration we select element comapare with other element and put the minimul element in ascdeing order for descnding we will do reverse.  

*/

// Time Complexity: O(n^2); Space Complexity = O(1)
const selectionSort = (unsortedArray) =>{
    for(let i=0; i<unsortedArray.length;i++){
        let min = unsortedArray[i];
        let indexToSwap = i;
        for(let j=i+1; j<unsortedArray.length;j++){
            if (unsortedArray[j]<min){
                indexToSwap=j;
                min=unsortedArray[j];
            }
        }
        unsortedArray[indexToSwap] = unsortedArray[i];
        unsortedArray[i]=min;
    }
    return unsortedArray;
}

let unsortedArray = [9,4,1,3,2,7];
let sortedArray = selectionSort(unsortedArray);
console.log(sortedArray);
