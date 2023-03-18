function seaBattle(array) {
    let pirateShipSum = 0;
    let warShipSum = 0;
    let isEnd = false;
    let youWon=false;
    //separate pirate ship,warship and maximum health and //return pirateship and warship sections into array
    let pirateShip = array.shift().split('>').map(Number);
    let warShip = array.shift().split('>').map(Number);
    let maxHealth = Number(array.shift());
    //separate war actions into arrays
    for (let actions of array) {
        let battleAction = actions.split(' ');
        // take keyWord to make certain action
        let keyWord = battleAction.shift();
        // convert indexes and sections into numbers
        let shipSections = battleAction.map(Number);
        // take actions

        switch (keyWord) {
            case "Fire":
                fire(shipSections[0], shipSections[1]);
                win(warShip);
                if(youWon===true){
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
                break;
            case "Defend":
                defend(shipSections[0], shipSections[1], shipSections[2]);
                win(pirateShip);
                if(youWon===true){
                    console.log("You lost! The pirate ship has sunken.");
                    return;
                }
                break;
            case "Repair":
                repair(shipSections[0], shipSections[1]);
                break;
            case "Status":
                status(pirateShip);
                break;
            case "Retire":
                isEnd = true;
                break;
        }
        if (isEnd == true) {
            break;
        }
        function fire(index, damage) {
            if (index >= 0 && index <= warShip.length - 1) {
               warShip[index]-=damage;
            }
        }
        function defend(startIndex, endIndex, damage) {
            if ((startIndex >= 0 && startIndex <= pirateShip.length - 1) && (endIndex >= 0 && endIndex <= pirateShip.length - 1)) {
                for (let i = startIndex;i<=endIndex;i++) {
                   pirateShip[i]-=damage;
                }
            }
        }
        function repair(index, num) {
            if (index >= 0 && index <= pirateShip.length - 1) {
                let addedHealth = Math.min(maxHealth - pirateShip[index], num);
                pirateShip[index]+=addedHealth;
            }
        }
        function status(array){
            let damagedSections=pirateShip.filter(x=>x<maxHealth*0.2);
            console.log(`${damagedSections.length} sections need repair.`);
            // let compareNumber=maxHealth*0.2;
            // let count=0;
            // for(let section of pirateShip){
            //     if(section<compareNumber){
            //         count++;
            //     }
            // }
            // console.log(`${count} sections need repair.`);
        }
        function win(array){
            for(let element of array){
                if(element<=0){
                    youWon=true;
                }
            }
        }
    }
    for (let section of pirateShip) {
        pirateShipSum += section;
    }
    for (let section of warShip) {
        warShipSum += section;
    }
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);
}

seaBattle(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])


