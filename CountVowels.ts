// Write a program that counts the number of vowels in a sentence.

function VowelCounter (a:string): number

{
    const changeToLowerCase = a.toLowerCase()
    const vowelLetters = ['a','e','i','o','u']
    return [...changeToLowerCase].filter(char =>vowelLetters.includes(char)).length
}
const output = "Hello World"
console.log(VowelCounter(output))