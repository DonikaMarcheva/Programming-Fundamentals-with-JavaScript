function addAndSubtract(input) {
    let newArray = [];
    let sumOldArray = 0;
    let sumNewArray = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 === 0) {
            sumOldArray += input[i];
            let newElement = input[i] + i;
            sumNewArray += newElement;
            newArray.push(newElement);
        } else {
            sumOldArray += input[i];
            let newElement = input[i] - i;
            sumNewArray += newElement;
            newArray.push(newElement);
        }
    }
    console.log(newArray);
    console.log(sumOldArray);
    console.log(sumNewArray);

}
addAndSubtract([-5, 11, 3, 0, 2])