function aMinerTask(data) {
    let resources = {};
    for (let i = 0; i < data.length; i += 2) {
        let recourse = data[i];
        let quantity = data[i + 1];
        if (!resources.hasOwnProperty(recourse)) {
            resources[recourse] = Number(quantity);
        } else {
            resources[recourse] += Number(quantity);
        }
    }
    for (let [name, quantity] of Object.entries(resources)) {
        console.log(`${name} -> ${quantity}`);
    }
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
)