function sumFirstLast(array) {
    let firstNum = Number(array.shift());
    let lastNum = Number(array.pop());
    console.log(firstNum + lastNum);
}
sumFirstLast(['20', '30', '40'])