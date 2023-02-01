function sumEvenNum(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if (Number(input[i]) % 2 == 0) {
            sum += Number(input[i]);
        }
    }
    console.log(sum);
}
sumEvenNum([['3','5','7','9']])