function plunder(array) {
    let daysToPlunder = Number(array[0]);
    let dailyPlunder = Number(array[1]);
    let expectedPlunder = Number(array[2]);
    let totalPlunder = 0;
    for (let i = 1; i <= daysToPlunder; i++) {
        totalPlunder += dailyPlunder;
        if (i % 3 === 0) {
            totalPlunder += 0.5 * dailyPlunder;
        }
        if (i % 5 === 0) {
            totalPlunder -= 0.3 * totalPlunder;
        }
    }
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentageGained = (totalPlunder / expectedPlunder) * 100;
        console.log(`Collected only ${percentageGained.toFixed(2)}% of the plunder.`);
    }
}

plunder(["10",
    "20",
    "380"])
