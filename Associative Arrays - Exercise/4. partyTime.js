function partyTime(input) {
    let vip = [];
    let regular = [];
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        count++;
        let person = input[i];
        if (person != 'PARTY') {
            let firstChar = person[0];
            if (isNaN(firstChar)) {
                regular.push(person);
            } else {
                vip.push(person)
            }
        } else {
            break;
        }
    }
    for (let j = count; j < input.length; j++) {
        let person = input[j];
        if (regular.includes(person)) {
            let index = regular.indexOf(person);
            regular.splice(index, 1);
        } else if (vip.includes(person)) {
            let index = vip.indexOf(person);
            vip.splice(index, 1);
        }
    }
    let size = regular.length + vip.length;
    console.log(size);
    for (let outOfTheParty of vip) {
        console.log(outOfTheParty);
    }
    for (let outOfTheParty of regular) {
        console.log(outOfTheParty);
    }
}
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
)