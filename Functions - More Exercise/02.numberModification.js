function numModification(number) {
    let averageSum = 0;

    averageSum = sumOfNum(number) / numToStr(number).length;
    function numToStr(num) {
        return num.toString();
    }
    function sumOfNum(num) {
        let numToString = numToStr(num);
        let sum = 0;
        for (let i = 0; i <= numToString.length - 1; i++) {
            sum += Number(numToString[i]);
        }
        return sum;
    }
    function addNine(num) {
        let str = numToStr(number);
        let newNum = Number(str + '9');
        return newNum;
    }

    while (averageSum < 5) {
        number = addNine(number);
        averageSum = sumOfNum(number) / numToStr(number).length;
    }
    return number;
}
console.log(numModification(101))
