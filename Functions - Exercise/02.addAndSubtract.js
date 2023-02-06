function substract(num1, num2, num3) {
    function sum(num1, num2) {
        return num1 + num2;
    }
    let sumFirsTwoNumbers = sum(num1, num2);
    return sumFirsTwoNumbers - num3;
}
console.log(substract(1,
    17,
    30
))
