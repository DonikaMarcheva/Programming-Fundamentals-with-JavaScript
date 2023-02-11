function houseParty(actions) {
    let list = [];

    for (let action of actions) {
        let goingOrNot = action.split(' ');
        if (!goingOrNot.includes('not') && !list.includes(goingOrNot[0])) {
            list.push(goingOrNot[0]);
        }
        else if (!goingOrNot.includes('not') && list.includes(goingOrNot[0])) {
            console.log(`${goingOrNot[0]} is already in the list!`);
        }
        else if (goingOrNot.includes('not') && list.includes(goingOrNot[0])) {
            let index = list.indexOf(goingOrNot[0]);
            list.splice(index, 1);
        }
        else if (goingOrNot.includes('not') && !list.includes(goingOrNot[0])) {
            console.log(`${goingOrNot[0]} is not in the list!`);
        }
    }
    console.log(list.join('\n'))
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)