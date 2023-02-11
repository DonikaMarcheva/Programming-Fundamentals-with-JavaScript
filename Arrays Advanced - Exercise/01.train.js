function train(array) {
    let passengersInWagoons = array.shift().split(' ').map(Number);
    let maxCapacity = Number(array.shift());
    let arrayLength = array.length;

    for (let i = 0; i < array.length; i++) {
        let currentCommand = array[i].split(' ');
        if (currentCommand[0] === 'Add') {
            passengersInWagoons.push(Number(currentCommand[1]))
        } else {
            for (let j = 0; j < passengersInWagoons.length; j++) {
                let passingersInCurrentWagoon = passengersInWagoons[j];
                if (passingersInCurrentWagoon + Number(currentCommand) <= maxCapacity) {
                    passengersInWagoons[j] += Number(currentCommand);
                    break;
                }
            }
        }
    }
    console.log(passengersInWagoons.join(' '))

}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])
