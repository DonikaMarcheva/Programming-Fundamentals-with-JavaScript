function addAndRemove(input) {
    let array = [];
    let newArr = [];

    for (let i = 1; i <= input.length; i++) {
        array.push(i);
    }
    for (let j = 0; j < input.length; j++) {
        if (input[j] === "add") {
            newArr.push(array[j]);
        } else {
            newArr.pop();
        }
    }
    if (newArr.length == 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join(" "));
    }

}
addAndRemove(['remove', 'remove', 'remove'])