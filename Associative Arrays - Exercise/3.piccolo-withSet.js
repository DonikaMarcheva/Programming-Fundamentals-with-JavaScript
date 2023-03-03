function piccolo(input) {
    let carLeft = new Set();
    for (let line of input) {
        let [direction, carNum] = line.split(', ');
        if (direction === "IN") {
            carLeft.add(carNum);
        } else {
            if (carLeft.has(carNum)) {
                carLeft.delete(carNum)
            }
        }
    }
    if (carLeft.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        let carLeftArr = Array.from(carLeft).sort((a, b) => a.localeCompare(b));
        for (let carNumber of carLeftArr) {
            console.log(carNumber);
        }
    }
}


piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)