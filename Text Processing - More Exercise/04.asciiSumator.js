function asciiSumator(input) {
    let firstChar = input[0].charCodeAt();
    let secondChar = input[1].charCodeAt();
    let string = input[2];
    let sum = 0;
    let firstChASCII=Math.min(firstChar,secondChar);
    let secondChASCII=Math.max(firstChar,secondChar);

    for (let char of string) {
        if (char.charCodeAt() > firstChASCII && char.charCodeAt() < secondChASCII) {
            sum += char.charCodeAt();
        }
    }
    console.log(sum)
}
asciiSumator(['a',
'1',
'jfe392$#@j24ui9ne#@$']
)