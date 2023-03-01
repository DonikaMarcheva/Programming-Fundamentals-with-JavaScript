function storage(input) {
    let storage = {};
    for (let line of input) {
        let [product, quantity] = line.split(' ');
        if (storage[product]) {
            storage[product] += Number(quantity);
        } else {
            storage[product] = Number(quantity);
        }
    }
    for (const entry in storage) {
        console.log(`${entry} -> ${storage[entry]}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)