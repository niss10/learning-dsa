/*
- Here we are finding element in circularly rotated Array. To do this operation list must not have any duplicate element.
- Okay, now we do same as binary search there will be three case.

Case 1: we find mid index and compare element with target. if match we return index;
Case 2: Target Greater then mid element;
    - now element can be either left side or right side. And we are sure that one of the side will always be sorted(this is the key to find where we can go)
    Case 2A: if(mid element is less then end element this side is sorted)
        - now if target element is greater then mid element and less then end element now we can search in this segment
        - Else element is on left side.
    Case 2B: if we reach here means right side of mid element is not sorted so we check here
        - if element is in left side(sorted). if target is greater then start element and less then mid element
        - Else element is on right side.   
Case 3: Target is less then mid element;
    Case 3A: if(start element is less then mid element and target is also with in them)
        - We check if tartget is in left sorted part
        - Else it is on right side
    Case 3B: else target is right side but right side is sorted
        - we check if it in right side 
        - else it is on left side

See the code closely you will get idea it is complex yet very simple.
*/

// Time Complexity = O(log(n)); Space Complexity = O(1);
function findElemnetCircularArray(arr, target){
    let start = 0;
    let end = arr.length - 1;
    while(start<=end){
        let mid = Math.floor((start + end)/2);
        if (target == arr[mid]){ // Case 1: target is at mid element
            return mid;
        }
        else if(target > arr[mid]){ // Case 2: target is greater then mid
            if(arr[mid] < arr[end]){ // Case 2A: Right side is sorted
                if(target <= arr[end]){ // - checking if it is on right side (sorted part)
                    start = mid + 1;
                }
                else{ // it is on left side (unsorted)
                    end = mid - 1;
                }
            }
            else{ // Case 2B: left side is sorted 
                if(target < arr[mid] && target > arr[start]){ // - check if target is with left side sorted part
                    end = mid - 1;
                }
                else{ // Else it is on right side unsorted
                    start = mid + 1;
                }
            }
        }
        else if(target < arr[mid]){ // Case 3: Target is less then mid element 
            if(arr[start] < arr[mid]){ // Case 3A: left side is sorted
                if(target >= arr[start]){ // - cheking if element is in left side sorted part.
                    end = mid - 1;
                }
                else{ // else it is in right side (unsorted)
                    start = mid + 1
                }
            }
            else{ // Case 3B: Right side is sorted, left unsorted
                if(target > arr[mid] && target < arr[end]){ // - target is within right side sorted part
                    start = mid + 1
                }
                else{ // Else it is on left side unsorted part.
                    end = mid - 1
                }
            }
        }
        }
        return -1;
    }

let arr = [12, 14, 18, 21, 3, 6, 8, 9];
let target = 12;
let result = findElemnetCircularArray(arr, target);
if (result != -1){
    console.log(`Index of target ${target} on circular sorted list is ${result}`);
}
else{
    console.log("Element Not Found");
    
}
