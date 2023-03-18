function theLift(array) {
    let waitingPeople = Number(array[0]);
    let wagoons = array[1].split(' ').map(Number);
    let currentFill = wagoons.reduce((a, c) => a + c, 0);
    while (currentFill < wagoons.length * 4) {
        if (waitingPeople === 0) {
            break;
        } else {
            for (let i = 0; i < wagoons.length; i++) {
                let leftSeats = 4 - wagoons[i];
                if (leftSeats > 0) {
                    wagoons[i] += Math.min(leftSeats, waitingPeople);
                    waitingPeople -= Math.min(leftSeats, waitingPeople);
                    currentFill = wagoons.reduce((a, c) => a + c, 0);
                }
            }
        }
    }
    if (currentFill === wagoons.length * 4 && waitingPeople > 0) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
        console.log(wagoons.join(' '));
    } else if (currentFill === wagoons.length * 4 && waitingPeople === 0) {
        console.log(wagoons.join(" "));
    } else {
        console.log("The lift has empty spots!");
        console.log(wagoons.join(' '));
    }
}
theLift([
    "0",
    "0"
]
)