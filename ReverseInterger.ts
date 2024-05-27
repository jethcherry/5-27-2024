// Write a program that takes an integer as input and returns an integer with reversed digit 
// ordering
function reverseInteger(input: number): number {
    let reversed = 0;
    while (input !== 0) {
        reversed = reversed * 10 + input % 10;
        input = Math.floor(input / 10);
    }
    return reversed;
}

const rcnumbers= 1235;
console.log(rcnumbers);
console.log(reverseInteger(rcnumbers));
