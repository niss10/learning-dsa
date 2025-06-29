// Recursive implementation 
// time complexity is O(n) = Linear
// space complexity is O(n) = Linear
function factorial(n){
    console.log(`doing F(${n})!`);
    
if (n === 0){
 return 1;
}

f = (n*factorial(n-1));
console.log(`done F(${n})! = ${f}`);

return f
}

let n = 5;
console.log(` final output = ${factorial(n)}`);
