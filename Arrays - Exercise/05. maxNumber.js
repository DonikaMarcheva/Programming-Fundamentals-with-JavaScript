function maxNum(input) {
    let newInput = [];
    for (let i = 0; i < input.length; i++) {
        if (i === input.length-1) {
            newInput.push(input[i]);
        }
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] > input[j]) {
                if (j === input.length - 1) {
                    newInput.push(input[i]);
                }
                continue;
            } else {
                break;
            }
        }
    }
    console.log(newInput.join(" "));
}
maxNum([27, 19, 42, 2, 13, 45, 48])