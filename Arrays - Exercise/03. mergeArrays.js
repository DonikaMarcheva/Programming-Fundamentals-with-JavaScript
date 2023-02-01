function mergeArrays(array1, array2) {
    let array3 = [];
    for (let i = 0; i < array1.length; i++) {

        if (i % 2 == 0) {
            let newElement = Number(array1[i]) + Number(array2[i]);
            array3.push(newElement);
        } else {
            let newElement = array1[i] + array2[i];
            array3.push(newElement);
        }
    }
    console.log(array3.join(' - '))

}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)