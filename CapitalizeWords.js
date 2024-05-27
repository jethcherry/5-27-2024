// Write a program that accepts a string as input, capitalizes the first letter of each word in the 
// string, and then returns the result string.
function firstLetter(firstword) {
    var words = firstword.split(" ");
    var capitalword = words.map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalword.join(" ");
}
var sentenceOutput = "hello world";
console.log(firstLetter(sentenceOutput));
