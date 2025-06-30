// O(log(n)) time complexity
function decimalToBinary(num){
binary_num = [];
let rem = 0
while (num>0){
    console.log(`number is ${num}`);
    console.log(`list is ${binary_num}`);
    rem = num%2;
    binary_num.push(rem);
    num = Math.floor(num/2);
}
return binary_num.reverse();
}

let num = 75;

binary_num = decimalToBinary(num);
console.log(`Decimal number ${num} to Binary is ${binary_num}`);
