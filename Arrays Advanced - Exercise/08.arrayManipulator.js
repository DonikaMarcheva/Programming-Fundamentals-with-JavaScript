function arrayManipulator(firstArr, secondArr) {
    for (let commands of secondArr) {
        let command = commands.split(' ')
        let actionWord = command[0];
        let elementToAdd = '';
        for (let j = 1; j < command.length; j++) {
            if (j === command.length - 1) {
                elementToAdd += command[j]
            } else {
                elementToAdd += `${command[j]},`;
            }
        }
        switch (actionWord) {
            case "add":
                add(elementToAdd);
                break;
            case "addMany":
                addMany(elementToAdd);
                break;
            case "contains":
                contain(elementToAdd);
                break;
            case "remove":
                remove(elementToAdd);
                break;
            case "shift":
                shift(elementToAdd);
                break;
            case "sumPairs":
                sumPairs(firstArr);
                break;
            case "print":
                console.log(firstArr.join(', '))
                break;
        }
    }
    function add(string) {
        let array = string.split(',')
        let index = Number(array[0]);
        let element = Number(array[1]);
        firstArr.splice(index, 0, element);
    }

    function addMany(string) {
        let array = string.split(',');
        let index = Number(array[0]);
        let element = array.shift();
        let sequenceOfElement = array.map(Number)
        for (let i = sequenceOfElement.length - 1; i >= 0; i--) {
            firstArr.splice(index, 0, sequenceOfElement[i]);
        }
    }
    function contain(string) {
        let element = Number(string);
        let index = firstArr.indexOf(element);
        console.log(index);
    }
    function remove(string) {
        let index = Number(string);
        firstArr.splice(index, 1);
    }
    function shift(string) {
        let rotatioNum = Number(string);
        for (let j = 0; j < rotatioNum; j++) {
            let takenNum = firstArr.shift();
            firstArr.push(takenNum);
        }
    }
    function sumPairs(array) {
        if (array.length % 2 === 0) {
            for (let i = 0; i < array.length; i++) {
                array[i] += array[i + 1];
                array.splice(i + 1, 1);
            }
        } else {
            for (let i = 0; i < array.length - 1; i++) {
                array[i] += array[i + 1];
                array.splice(i + 1, 1);
            }
        }
    }

}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print'])

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])



