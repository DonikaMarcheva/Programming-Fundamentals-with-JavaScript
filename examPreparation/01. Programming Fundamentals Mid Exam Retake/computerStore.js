function computerStore(array) {
    let priceWithoutTaxes = 0;
    let isSpecial = false;
    for (let price of array) {
        if (price === 'regular' || price === 'special') {
            if (price === 'special') {
                isSpecial = true;
            }
            break;
        } else {
            if (Number(price) < 0) {
                console.log('Invalid price!');
                continue;
            } else {
                priceWithoutTaxes += Number(price);
            }
        }
    }
    let taxes = 0.20 * priceWithoutTaxes;
    let totalPrice = priceWithoutTaxes + taxes;
    if (isSpecial === true) {
        totalPrice -= 0.1 * totalPrice;
    }
    if (totalPrice === 0) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPrice.toFixed(2)}$`)
    }
}
computerStore([
    '-5'
    ])
    