function calculator(a, b, operator) {
    switch (operator) {
        case 'multiply':
            return  a * b;
            break;
        case 'divide':
            return a / b;
            break;
        case 'add':
            return  a + b;
            break;
        case 'subtract':
            return  a - b;
            break;
    }
}

