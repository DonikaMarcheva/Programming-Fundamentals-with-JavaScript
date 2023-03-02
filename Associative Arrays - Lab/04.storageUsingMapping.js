function storage(input) {
    let storageMap = new Map();
    for (const entry of input) {
        let [product, quantity] = entry.split(' ');
        quantity = Number(quantity);
        if (storageMap.has(product)) {
            quantity += storageMap.get(product);
        }
        storageMap.set(product, quantity);
    }
    for (let [product, quantity] of storageMap) {
        console.log(`${product} -> ${quantity}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)