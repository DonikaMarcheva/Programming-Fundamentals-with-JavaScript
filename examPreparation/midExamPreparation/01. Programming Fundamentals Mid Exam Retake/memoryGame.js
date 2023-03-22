function mamoryGame(array) {
    let sequencoOfNum = array.shift().split(" ");
    let counter = 0;
    for (let el of array) {
        if (sequencoOfNum.length === 0) {
            console.log(`You have won in ${counter} turns!`);
            return;
        }
        counter++;
        let element = el.split(' ');
        if (element[0] !== "end") {
            let indexes = element.map(Number);
            let firstNum = sequencoOfNum[indexes[0]];
            let secondNum = sequencoOfNum[indexes[1]];

            if (indexes[0]===indexes[1] || indexes[0] < 0 || indexes[0] > sequencoOfNum.length - 1 || indexes[1] < 0 || indexes[1] > sequencoOfNum.length - 1) {
                console.log('Invalid input! Adding additional elements to the board');
                let middleIndex = sequencoOfNum.length / 2;
                let addedString = `-${counter}a`;
                sequencoOfNum.splice(middleIndex, 0, addedString, addedString);
                continue;
            }

            if (firstNum === secondNum) {
                let firstIndex = Math.min(indexes[0], indexes[1]);
                let secondIndex = Math.max(indexes[0], indexes[1]);
                sequencoOfNum.splice(firstIndex, 1);
                sequencoOfNum.splice(secondIndex - 1, 1);
                console.log(`Congrats! You have found matching elements - ${firstNum}!`);
                continue;
            } else {
                console.log("Try again!");
                continue;
            }

        } else {
            console.log("Sorry you lose :(");
            console.log(sequencoOfNum.join(' '));
        }

    }
}
mamoryGame( [
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]        
    )