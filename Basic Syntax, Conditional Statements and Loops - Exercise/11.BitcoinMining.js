function mining(input) {

    let moneyEarned = 0;
    let dayOfFirstBitcoin = 0;
    let daysCount = 0;
    let boughtBitcoins = 0;

    for (let i = 0; i < input.length; i++) {
        let goldMining = Number(input[i]);
        daysCount++;
        if (daysCount % 3 == 0) {
            goldMining -= 0.3 * goldMining;
        }
        moneyEarned += goldMining * 67.51;
        while (moneyEarned >= 11949.16) {
            moneyEarned -= 11949.16;
            boughtBitcoins += 1;
            if (boughtBitcoins === 1) {
                dayOfFirstBitcoin = daysCount;
            }
        }
    }

    if (boughtBitcoins >= 1) {
        console.log(`Bought bitcoins: ${boughtBitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
        console.log(`Left money: ${moneyEarned.toFixed(2)} lv.`);
    }
    else {
        console.log(`Bought bitcoins: 0`);
        console.log(`Left money: ${moneyEarned.toFixed(2)} lv.`);
    }
}

mining([100, 200, 300])

