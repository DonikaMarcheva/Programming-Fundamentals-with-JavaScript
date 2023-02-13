
function bombNumbers(numarr, bomb) {
    let numSurched = bomb[0];
    let numbersErased = bomb[1];
    let sum = 0;
    while (numarr.includes(numSurched)) {
        for (let i = 0; i < numarr.length; i++) {
            if (numarr[i] === numSurched) {
                let index = i - numbersErased;
                if (index <= 0) {
                    numarr.splice(0, i + numbersErased + 1)
                } else {
                    numarr.splice(index, 2 * numbersErased + 1);
                }
            }
        }
    }
    for (let number of numarr) {
        sum += number;
    }
    console.log(sum)
}
bombNumbers([1, 4, 9, 4, 2, 8, 9, 1], [9, 3])

