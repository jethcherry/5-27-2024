
// Write a program that accepts a string as input, capitalizes the first letter of each word in the 
// string, and then returns the result string.


function firstLetter(firstword: string): string {
    const words: string[] = firstword.split(" ");
    const capitalword: string[] = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalword.join(" ");
}


const  sentenceOutput = "hello world";
console.log(firstLetter(sentenceOutput))