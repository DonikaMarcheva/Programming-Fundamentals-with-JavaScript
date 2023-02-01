function arrayRotation(array, num) {
    let count = 0;
    let newArray = [];

    while (count < num) {
        for (let i = 1; i < array.length ; i++) {
            newArray.push(array[i]);
        }
        newArray.push(array[0]);
        array = newArray;
        newArray = [];
        count++;
    }
    console.log(array.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)