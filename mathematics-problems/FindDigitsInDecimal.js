// Log 10 base n Time Complexity but compute works on binary so that may be O(logn) Eventually
function findDigitsInDecimal(num){
    let decimal_digits = [];
    let rem;
    while (num>0){
        rem = num % 10;
        decimal_digits.push(rem);
        num = Math.floor(num/10); 
    }
    return decimal_digits.reverse();
}

let num = 145678;

decimal_digits = findDigitsInDecimal(num);
console.log(`Decimal digit for decimal number ${num} is ${decimal_digits}`);
