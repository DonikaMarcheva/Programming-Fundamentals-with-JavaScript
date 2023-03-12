function serializeString(array) {
    let indexesObj = {};
    let string = array[0];

    for (let i = 0; i < string.length; i++) {
        let ch = string[i];
        if (!indexesObj.hasOwnProperty(ch)) {
            indexesObj[ch] = [];
        }
        indexesObj[ch].push(i);
    }
    for (let data in indexesObj) {
        console.log(`${data}:${indexesObj[data].join('/')}`);
    }
}
serializeString(["abababa"])