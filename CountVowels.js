// Write a program that counts the number of vowels in a sentence.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function VowelCounter(a) {
    var changeToLowerCase = a.toLowerCase();
    var vowelLetters = ['a', 'e', 'i', 'o', 'u'];
    return __spreadArray([], changeToLowerCase, true).filter(function (char) { return vowelLetters.includes(char); }).length;
}
var output = "Hello World";
console.log(VowelCounter(output));
