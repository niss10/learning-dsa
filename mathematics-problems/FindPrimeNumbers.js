// Here for normal case time complexity would be O(n*sqrt(n))
// USing Sieve of Eratosthenes time complexity would be O(sqrt(n)*log(log(n))

function findPrimeNumbers(num){
    let prime_num_binary=[]
    let prime_num_digits=[]
    // Setting all number till num as prime
    for(let i=0;i<=num; i++){
        prime_num_binary.push(1);
    }
    prime_num_binary[0] = 0;
    prime_num_binary[1] = 0;

    for(let i=2; i<=Math.sqrt(num);i++){
        if(prime_num_binary[i]==1){
            for(let j=2; (i*j)<=num; j++){
                index = i*j;
                prime_num_binary[index] = 0;
            }
        }
    }
    for(let i=0; i<=prime_num_binary.length;i++){
    if (prime_num_binary[i]==1){
        prime_num_digits.push(i);
    }    
    }
    return prime_num_digits;
}

let num = 20;
let prime_num_digits = findPrimeNumbers(num);
console.log(`Prime numbers till num ${num} are ${prime_num_digits}`);
