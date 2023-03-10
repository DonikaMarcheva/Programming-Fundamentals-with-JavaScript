function cutReverse(text) {
    let firstHalf = text.substring(0, text.length / 2);
    let secondHalf = text.substring(text.length / 2, text.length)
    let firstPart = firstHalf.split('').reverse().join('');
    let secondPart = secondHalf.split('').reverse().join('');
    console.log(firstPart);
    console.log(secondPart);
}
cutReverse('tluciffiDsIsihTgnizamAoSsIsihT')