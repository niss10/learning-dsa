// This is Euclid Alogorith for finding GCD of two number; GCD is common maximum factor of two number;
// Example a = 36(4*9), b=40(4*10) => GCD is 4 because 4 is factor that divide both number and it is maximum.
// Normal Algorith Time Complexity is O(sqrt(n));
// Euclid Alorithm Time Complexity is O(digits of small number(b)) => O(log base 10 (b)) = > O(log(b)); Space Complexity will be O(1)

// function euclid_gcd(a, b){
//     let divided = a;
//     let divisor = b;
//     while(divisor != 0){
//         let reminder = divided % divisor;
//         divided = divisor;
//         divisor = reminder;
//     }
//     return divided;
// }

// Recursive Implementation
// Time Complexity = O(log(b); Space Complexity will be O(log(b))
function euclid_gcd(a, b){
    let divided = a;
    let divisor = b;
    if (divisor==0){
        return divided;
    }
    return euclid_gcd(divisor, divided % divisor)
}

let a = 120;
let b = 24;
let gcd = euclid_gcd(a, b);
console.log(`GCD of ${a} and ${b} is ${gcd}`);
