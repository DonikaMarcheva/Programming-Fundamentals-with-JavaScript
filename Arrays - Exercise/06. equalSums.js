function equalSums(input) {
    if (input.length == 1) {
        console.log(0);
        return;
    } else {
        for (let i = 1; i < input.length; i++) {
            let leftSum = 0;
            let rightSum = 0;
            for (let j = 0; j < i; j++) {
                leftSum += input[j];
            }
            for (let k = i + 1; k < input.length; k++) {
                rightSum += input[k];
            }
            if (leftSum == rightSum) {
                console.log(i);
                return;
            } else {
                continue;
            }
        }
    }
        console.log("no");
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])