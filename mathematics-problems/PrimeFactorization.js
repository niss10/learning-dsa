// Prime Factorization is all factors of numbers are prime number means, break down number into factor that factor can not devide further.
// Example is 1) 36 = 2*2*3*3 2) 44 = 2*2*11

function primeFactorization(num){
let prime_factors = [];
for(let i=2; i<=Math.sqrt(num);i++){
    if(num%i==0){
        let count = 0;
        while(num%i==0){   
            count++;
            num = Math.floor(num/i);
        }    
        prime_factors.push([i, count]);
    }
}
if(num != 1){
    prime_factors.push([num, 1])
}
return prime_factors;
}

let num = 136;
prime_factors = primeFactorization(num);
console.log(`Prime factorization for number ${num} is :`);
console.log(prime_factors);
