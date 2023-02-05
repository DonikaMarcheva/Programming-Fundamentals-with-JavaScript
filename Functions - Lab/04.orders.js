function orders(product, quantity) {
 
    let productPrice = 0;
    switch (product) {
        case "coffee": productPrice = quantity * 1.50;
            break;
        case "water": productPrice = quantity * 1.00;
            break;
        case "coke": productPrice = quantity * 1.40;
            break;
        case "snacks": productPrice = quantity * 2.00;
            break
    }
    return productPrice.toFixed(2)
}

let result=orders("water", 5);
console.log(result);