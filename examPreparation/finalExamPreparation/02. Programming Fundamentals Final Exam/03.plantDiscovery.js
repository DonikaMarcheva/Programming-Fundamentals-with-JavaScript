function plantDiscovery(input) {
    let plantsRarity = {};
    let plantsRating = {};
    let count = Number(input.shift());
    let plantInfo = "";
    while (count > 0) {
        plantInfo = input.shift();
        let plantName = plantInfo.split('<->')[0];
        let rarity = Number(plantInfo.split('<->')[1]);
        plantsRarity[plantName] = rarity;
        plantsRating[plantName] = [];
        count--;

    }

    let commands = input.shift();
    while (commands !== "Exhibition") {
        let commandsArr = commands.split(': ');
        let command = commandsArr[0];

        if (command === "Rate") {
            let plantName = commandsArr[1].split(' - ')[0]
            let rating = Number(commandsArr[1].split(' - ')[1]);
            if (plantsRating.hasOwnProperty(plantName)) {
                plantsRating[plantName].push(rating);
            } else {
                console.log("error");
            }
        } else if (command === "Update") {
            let plantName = commandsArr[1].split(' - ')[0]
            let newRarity = Number(commandsArr[1].split(' - ')[1]);
            if (plantsRarity.hasOwnProperty(plantName)) {
                plantsRarity[plantName] = newRarity;
            } else {
                console.log("error");
            }
        } else {
            let plantName = commandsArr[1].split(' - ')[0]
            if (plantsRating.hasOwnProperty(plantName)) {
                plantsRating[plantName] = [];
            } else {
                console.log("error");
            }
        }
        commands = input.shift();
    }
    console.log("Plants for the exhibition:");
    for (const plantName in plantsRarity) {
        let plantData = `- ${plantName}; Rarity: ${plantsRarity[plantName]}; `;

        let rarityLength = plantsRating[plantName].length;
        let raritySum = plantsRating[plantName].reduce((a, c) => a + c, 0);
        let averageRating = (raritySum / rarityLength);
        if (rarityLength === 0) {
            averageRating = 0.00;
        }
        plantData += `Rating: ${averageRating.toFixed(2)}`
        console.log(plantData);

    }
}


plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
console.log("+++++++++++++++++++++++++++");
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])

