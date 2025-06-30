// Factors of number is number divided by any number before it with reminder 0;
// e.g 36 = {1,36}, {2,18}, {3,12}, {4, 9}, {6, 6}, {9, 4}, {12, 3}, {18, 2}, {36, 1}
// Creating factor in sorted array which causing time complexity O(sqrt(n)*(f))
// If we sort after array using BST it will take O(sqrt(n)) + O(log(f))
function findFactorsOfNumber(num){
    let factors = [];
    factors.push(1);
    factors.push(num);
    for(let i=2, j=1;i<=Math.sqrt(num);i++){
        if(num%i==0){
            factors.splice(j, 0, i);
            if(i != Math.sqrt(num)){
            co_factor = num/i;
            factors.splice(j+1, 0, co_factor);
            }
            j++
        }
    }

    return factors;
}

let num = 1000;
let factors = findFactorsOfNumber(num);

console.log(`Factors for number ${num} is ${factors}`);
