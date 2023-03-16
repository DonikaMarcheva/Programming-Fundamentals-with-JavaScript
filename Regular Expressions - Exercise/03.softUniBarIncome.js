function softUniBarIncome(input) {
    let pattern = /(?<name>%[A-Z][a-z]+%)[^|$%.]*(?<product><\w+>)[^|$%.]*(?<count>\|\d+\|)[^0-9|$%.]*(?<price>\d+\.*\d*\$)/g;
    let totalIncome = 0;

    let i = 0;
    while (input[i] !== 'end of shift') {
        let costumerInfo = input[i];
        let match = pattern.exec(costumerInfo);
        while (match) {
            let name = match.groups.name;
            name = name.substring(1, name.length - 1);
            let product = match.groups.product;
            product = product.substring(1, product.length - 1);
            let quantity = match.groups.count;
            quantity = quantity.substring(1, quantity.length - 1);
            let price = match.groups.price;
            price = price.substring(0, price.length - 1)
            let finalPrice = Number(price) * Number(quantity);
            console.log(`${name}: ${product} - ${finalPrice.toFixed(2)}`);
            totalIncome += finalPrice;
            match = pattern.exec(costumerInfo)
        }
        i++;
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
)