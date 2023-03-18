function heardDelivery(array) {
    let houses = array.shift().split('@').map(Number);
    let i = 0;
    let j = 0;
    let currentCommand = '';
    let count = 0;
    while (array[i] != "Love!") {
        currentCommand = array[i];
        let heard = currentCommand.split(' ').pop();
        j += Number(heard);
        if (j <= houses.length - 1) {
            if (houses[j] === 0) {
                console.log(`Place ${j} already had Valentine's day.`);
                i++;
                continue;;
            }
            houses[j] -= 2;
            if (houses[j] === 0) {
                console.log(`Place ${j} has Valentine's day.`);
                count++;
            }
            i++;
        } else {
            j = 0;
            if (houses[j] === 0) {
                console.log(`Place ${j} already had Valentine's day.`);
                i++;
                continue;
            } else {
                houses[j] -= 2;
                if (houses[j] === 0) {
                    console.log(`Place ${j} has Valentine's day.`);
                    count++;
                }
            }
            i++;
        }
    }
    console.log(`Cupid's last position was ${j}.`)
    if (count === houses.length) {
        console.log("Mission was successful.");
    }
    else {
        console.log(`Cupid has failed ${houses.length - count} places.`)
    }
}
heardDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])


