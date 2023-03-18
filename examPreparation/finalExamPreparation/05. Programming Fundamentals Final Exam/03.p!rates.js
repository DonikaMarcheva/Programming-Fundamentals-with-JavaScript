function pirates(input) {
    let towns = {};

    let townInfo = input.shift();
    while (townInfo !== "Sail") {
        let [townName, population, gold] = townInfo.split('||');

        if (!towns.hasOwnProperty(townName)) {
            towns[townName] = { "population": 0, "gold": 0 };
        }
        towns[townName]["population"] += Number(population);
        towns[townName]["gold"] += Number(gold);

        townInfo = input.shift();
    }
    let actionInfo = input.shift();
    while (actionInfo !== "End") {
        let actionArr = actionInfo.split('=>');
        let action = actionArr.shift();
        if (action === "Plunder") {
            let town = actionArr.shift();
            let people = actionArr.shift();
            let gold = actionArr.shift();
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            towns[town]["population"] -= Number(people);
            towns[town]["gold"] -= Number(gold);
            if (towns[town]["population"] === 0 || towns[town]["gold"] === 0) {
                delete towns[town];
                console.log(`${town} has been wiped off the map!`);
            }
        } else {
            let town = actionArr.shift();
            let gold = Number(actionArr.shift());
            if (gold < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                towns[town]["gold"] += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${towns[town]["gold"]} gold.`);
            }
        }
        actionInfo = input.shift();
    }
    let townsArr = Object.entries(towns);
    if (townsArr.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${townsArr.length} wealthy settlements to go to:`);
        for (const townInfo of townsArr) {
            let townName = townInfo[0];
            let townDataArr = Object.entries(townInfo[1]);
            let population = townDataArr[0][1];
            let gold = townDataArr[1][1];
            console.log(`${townInfo[0]} -> Population: ${population} citizens, Gold: ${gold} kg`);
        }
    }
}
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])

