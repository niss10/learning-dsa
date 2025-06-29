// Recursive implementation 
// time complexity is O(2^n) = Exponential
// space complexity is O(2^n) = Exponential

// Iterative Implementation
// time complexity is O(n) = Linear
// space complexity is O(1) = Constant

function fibonacci(n){

// Recursive Implementation
    console.log(`doing fibonacci for ${n}`);
    
    if (n == 0){
        return 0
    }
    if (n == 1){
        return 1
    }

    fibo = fibonacci(n-1) + fibonacci(n-2)
    console.log(`done fibonacci for ${n} = ${fibo}`);
    
    return fibo
// Recursive Implementation End

// Iterative Implementation
    // console.log(`doing fibonacci for ${n}`);
    
    // if (n == 0){
    //     return 0
    // }
    // if (n == 1){
    //     return 1
    // }
    // let f1 = 0;
    // let f2 = 1;
    // let fibo
    // for (let i=2; i<=n+1; i++){
    //     fibo = f1 + f2;
    //     f2 = f1;
    //     f1 = fibo;

    // }

    
    // console.log(`done fibonacci for ${n} = ${fibo}`);
    
    return fibo
// Iterative Implementation End

    
}
let n = 10
fibo = fibonacci(n)

console.log(`Final fibonacci = ${fibo}`);