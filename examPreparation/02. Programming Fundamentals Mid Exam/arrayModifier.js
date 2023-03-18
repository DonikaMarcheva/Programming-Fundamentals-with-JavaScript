function arrayModifier(array) {
    let modifiedNumbersArray = array.shift().split(' ').map(Number);
    let isEnd = false;
    for (let commands of array) {
        let command = commands.split(' ');
        let keyWord = command.shift();
        let indexes = command.map(Number);

        switch (keyWord) {
            case "swap":
                swap(indexes[0], indexes[1]);
                break;
            case "multiply":
                multiply(indexes[0], indexes[1]);
                break;
            case "decrease":
                decrease(modifiedNumbersArray);
                break;
            case "end":
                isEnd = true;
        }
        if (isEnd === true) {
            break;
        }
    }
    console.log(modifiedNumbersArray.join(', '))
    function swap(firstIndex, secondIndex) {
        modifiedNumbersArray[firstIndex] = modifiedNumbersArray.splice(secondIndex, 1, modifiedNumbersArray[firstIndex]);
    }
    function multiply(firstIndex, secondIndex) {
        let firstNum = modifiedNumbersArray[firstIndex];
        let newNum = firstNum * modifiedNumbersArray[secondIndex];
        modifiedNumbersArray.splice(firstIndex, 1, newNum);
    }

    function decrease(array) {
        for (let i = 0; i < array.length; i++) {
            let takenNum = array.shift();
            array.push(takenNum - 1)
        }
    }
}

arrayModifier(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'])
    console.log('-------------')
    arrayModifier([
        '1 2 3 4',
        'swap 0 1',
        'swap 1 2',
        'swap 2 3',
        'multiply 1 2',
        'decrease',
        'end'
      ]
      )