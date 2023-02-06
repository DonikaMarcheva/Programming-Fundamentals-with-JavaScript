function palindromeInt(array) {
    for (let element of array) {
        let numArr = element.toString().split('');
        let reverseNumArr = numArr.reverse();
        let num = Number(element);
        let reverseNum=Number(reverseNumArr.join(''));
        console.log(num===reverseNum?true:false);
    }
}
palindromeInt([123,323,421,121])