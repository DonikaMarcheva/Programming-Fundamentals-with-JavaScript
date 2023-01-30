function binaryToDecimal(binaryNum) {
    let stringBinary = binaryNum.toString();
    let decimalNum = 0;
    for (let i = 0; i < stringBinary.length; i++) {
        decimalNum = decimalNum * 2 + Number(stringBinary[i]);

    }
    console.log(decimalNum);
}
binaryToDecimal(00001001)