// Write a program to generate the Fibonacci sequence up to 100.
// Function to generate Fibonacci series of a given length
// Function to generate Fibonacci series of a given length
function fibonaciSequence() {
    var sequence = [0, 1];
    while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= 100) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence;
}
console.log(fibonaciSequence());
