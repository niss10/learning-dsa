// Time Complexity = O(n); Space Complexity = O(1);
const linearSearch = (arr, target) =>{
    for(let i=0; i<arr.length;i++){
        if (arr[i] === target) {
            return `${target} Found at index ${i}`;
        }
    }
    return "Not Found";
}

let arr = [5, 8, 2, 6, 3, 9, 1, 0];
let target = 9;
let result = linearSearch(arr, target);
console.log(result);
