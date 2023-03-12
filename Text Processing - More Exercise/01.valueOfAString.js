function valueString(array) {
    let text = array[0];
    let condition = array[1];
    let lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
    let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerASCII = [];
    let upperASCII = [];

    for (let ch of text) {
        if (condition === "UPPERCASE" && upperLetters.includes(ch)) {
            upperASCII.push(ch.charCodeAt());
        }
        if (condition === "LOWERCASE" && lowerLetters.includes(ch)) {
            lowerASCII.push(ch.charCodeAt());
        }
    }
    if (condition === "UPPERCASE") {
        console.log(`The total sum is: ${upperASCII.reduce((a, c) => a + c, 0)}`);
    } else {
        console.log(`The total sum is: ${lowerASCII.reduce((a, c) => a + c, 0)}`);
    }
}
valueString(['AC/DC',
    'UPPERCASE']
)