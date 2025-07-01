/* sort is slow sorting algorithm it takes O(n^2) time complexity.
- At each iteration we compare to adjusant element and swap them in sorted order at on full cycle of inner for loop the largest element will be bubble up.
- Here we scan list of elements till all are sorted and each scan largest wil be bubbled up to last, so every time n to n-i element will be sorted.
- For beat case if we use flag time complexity will be O(n);
*/

// Time Complexity: O(n^2); Space Complexity = O(1)
const bubbleSort = (unsortedArray) =>{
    for(let j=unsortedArray.length-1; j>=0; j--){
        let flag=0; // For sorted array we don't need to execute redundunt for loop
        for(let i=0;i<=j;i++){
            if(unsortedArray[i+1]<unsortedArray[i]){
                temp = unsortedArray[i+1];
                unsortedArray[i+1]=unsortedArray[i];
                unsortedArray[i]=temp
                flag = 1;
            }
        }
        // flag = 0 means array is sorted and he is no longer doing any swap
        if (flag==0){
            break;
        }
    }
    return unsortedArray;
}

let unsortedArray = [9,4,1,3,2,7];
let sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray);