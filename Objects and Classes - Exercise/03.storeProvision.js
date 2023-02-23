function storeProrvision(currStock, orderedStock) {
    const allStocks = {};
    for (let i = 0; i < currStock.length; i += 2) {
        const currProduct = currStock[i];
        allStocks[currProduct] = Number(currStock[i + 1]);
    }
    for (let i = 0; i < orderedStock.length; i += 2) {
        const orderedProduct = orderedStock[i];
        if (!currStock.includes(orderedProduct)) {
            allStocks[orderedProduct] = 0;
        }
        allStocks[orderedProduct] += Number(orderedStock[i + 1])
    }
    for (const key in allStocks) {
        console.log(`${key} -> ${allStocks[key]}`);
    }
}

storeProrvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)