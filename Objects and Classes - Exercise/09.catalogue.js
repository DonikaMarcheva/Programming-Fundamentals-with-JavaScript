function catalog(array) {
    let res = {};
    for (let line of array) {
        let [name, price] = line.split(' : ');
        res[name] = Number(price);
    }
    let sortedKeys = Object.keys(res).sort((a, b) => a.localeCompare(b));
    let firstLetter = "";
    for (let key of sortedKeys) {
        if (key[0] !== firstLetter) {
            firstLetter = key[0];
            console.log(firstLetter);
        }
        let price = res[key];
        console.log(` ${key}: ${price}`);
    }
}
catalog([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)