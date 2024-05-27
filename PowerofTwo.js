// Write a program that takes an integer as input and returns true if the input is a power of two
function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}
function power(integerInput) {
    return isPowerOfTwo(integerInput);
}
var integerInput = 8;
console.log(power(integerInput));
