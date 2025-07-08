// O(n) time complexity
function binaryToDecimal(binary_num){
    let decimal_number = 0;
    binary_num = binary_num.reverse();
   for(let i=0; i<=binary_num.length; i++){
    if (binary_num[i] == 1){
        decimal_number = decimal_number + Math.pow(2, i);
        console.log(decimal_number);
        
    }
   }
   return decimal_number;
    
}

let binary_num = [1,0,0,1,0,1,1];

decimal_number = binaryToDecimal(binary_num);
console.log(`Decimal number is ${decimal_number}`);
