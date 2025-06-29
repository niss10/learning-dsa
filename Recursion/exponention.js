// Implemented power function using RECURSION and ITERATIVE methods
// Recursive Time Complexity = O(n)
// Recursive Space Complexity = O(n)

// Smart Recursive solution Time and Space Complexity would be O(logn)

// Iterative Time Complexity = O(n)
// Iterative Space Complexity = O(1)


function power(base, pow){
    console.log(`Calculating for base ${base} power ${pow}`);

// Recursive solution

    // if (pow === 0){
    //     return 1;
    // }

    // intrim_value = base*power(base, (pow-1))
    // console.log(`done calculating for base ${base}, power ${pow} = ${intrim_value}`);
    // return intrim_value;

// Recursive solution End

// Smart Recursive solution O(logn)

    // Here we are doing x^n = x^n/2 * x^n/2 if n is even or x^n = x * x^(n-1) if n is odd
    if (pow === 0){
        return 1;
    }
    else if (pow%2==0){
        intrim_value = power(base, (pow/2))
        console.log(`done calculating for base ${base}, power ${pow} = ${intrim_value * intrim_value}`);
        return intrim_value*intrim_value;
    }
    intrim_value = base*power(base, (pow-1))
    console.log(`done calculating for base ${base}, power ${pow} = ${intrim_value}`);
    return intrim_value;

// Smart Recursive solution End
    
// Iterative solution

    // if (pow === 0){
    //     return 1;
    // }
    
    // let final_value = 1;
    // for (let i=1; i <=pow; i++){
    //     final_value = final_value*base;
    // }
    // return final_value

// iterative solution end

}

let base = 3;
let pow = 3;

let final_value = power(base, pow)
console.log(`Final value is ${final_value}`);

