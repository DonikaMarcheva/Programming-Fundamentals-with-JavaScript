function treasureHunt(array) {
    let treasure = array.shift().split('|');
    let isEnd = false;
    for (let actions of array) {
        let battleActions = actions.split(' ');
        let keyWord = battleActions.shift(' ');
        switch (keyWord) {
            case "Loot":
                for (let treasures of battleActions) {
                    loot(treasures);
                }
                break;
            case "Drop":
                drop(battleActions);
                break;
            case "Steal":
                steal(battleActions);
                break;
            case "Yohoho!":
                isEnd = true;
                break;
        }
        if (isEnd === true) {
            break;
        }
        function loot(string) {
            if (!treasure.includes(string)) {
                treasure.unshift(string);
            }
        }
        function drop(num) {
            let index = Number(battleActions);
            if (index >= 0 && index <= treasure.length - 1) {
                let droppedTreasure = treasure.splice(index, 1);
                let itemToAdd = droppedTreasure.join('');
                treasure.push(itemToAdd);
            }
        }
        function steal(num) {
            let index = treasure.length - num;
            if (index >= 0) {
                let stolenTreasure = treasure.splice(index, num);
                console.log(stolenTreasure.join(', '))
            } else {
                index = 0;
                let stolenTreasure = treasure.splice(index, num);
                console.log(stolenTreasure.join(', '))
            }
        }
    }
    if (isEnd === true) {
        let finalLength = 0;
        for (let item of treasure) {
            finalLength += item.length;
        }
        let averageGain = finalLength / (treasure.length);
        if (treasure.length !== 0) {
            console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
        }
        else {
            console.log('Failed treasure hunt.');
        }
    }
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])

