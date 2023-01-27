function LetterType(letter){
let numASCII=letter.charCodeAt(0);
let upperCase=numASCII>=65 && numASCII<=90;
let lowerCase=numASCII>=97 && numASCII<=122
console.log(upperCase? 'upper-case' : "lower-case");
}
LetterType('f')