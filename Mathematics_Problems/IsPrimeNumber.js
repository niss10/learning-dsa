// Given number is prime if it divisable only by number it self or one.
// If number is not divisible till sqrt(num) it is prime number. After sqrt cofactor repeat itself.
// e.g 36 = {1,36}, {2,18}, {3,12}, {4, 9}, {6, 6}, {9, 4}, {12, 3}, {18, 2}, {36, 1}
// O(sqrt(n)) time complexity
function isPrime(num){
    let is_prime = true;
    for(i=2; i<=Math.sqrt(num); i++){
        if(num%i==0){
            is_prime = false;
        }
    }
    return is_prime;
}

let num = 36;
is_prime = isPrime(num);
console.log(`is prime = ${is_prime}`);
