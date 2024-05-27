// Write a program that takes an integer as input and returns true if the input is a power of two
function isPowerOfTwo(n: number): boolean {
    return n > 0 && (n & (n - 1)) === 0;
}

function power(integerInput: number): boolean {
    return isPowerOfTwo(integerInput);
}

const integerInput: number = 8;
console.log(power(integerInput));
