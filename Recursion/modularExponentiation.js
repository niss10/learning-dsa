// Smart recursive solution 
// time and space complexity will be O(logn)
function modular_exponentiation(base, pow, mod){
    console.log(`doing modular exponentiation for base = ${base}, power = ${pow}, and modulo = ${mod} `);
    
    if (pow==0){
        return 1;
    }

    else if (pow%2 == 0){
        intrim_value = modular_exponentiation(base, pow/2, mod);
        return intrim_value*intrim_value
    }
    else {
        return ((base%mod)*modular_exponentiation(base, pow-1, mod))%mod
    }

}

let base = 3;
let pow = 1;
let mod = 3;

modular_exponentiation_value = modular_exponentiation(base, pow, mod);
console.log(`final value will be ${modular_exponentiation_value}`);
