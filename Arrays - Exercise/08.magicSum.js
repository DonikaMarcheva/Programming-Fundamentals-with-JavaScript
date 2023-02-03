function magicSum(array, num) {
    for (let i = 0; i < array.length - 1; i++) {
        let firstNum = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let secondNum = array[j];
            if ((firstNum + secondNum) === num) {
                console.log(`${firstNum} ${secondNum}`);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23],
    8
)