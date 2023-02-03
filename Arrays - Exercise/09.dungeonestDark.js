function dungeonestDark(array) {
    let health = 100;
    let coins = 0;
    let room = 0;
    let stingOfArray = array.join();
    let rooms = stingOfArray.split('|');
    let elements = rooms.join(' ').split(' ');
    //["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]
    for (let i = 0; i < elements.length; i+=2) {
        let itemOrMonster = elements[i];
        let helthOrCoins = elements[i + 1];
        room++;
        if (itemOrMonster =='potion') {
            health += Number(helthOrCoins);
            if (health >= 100) {
                health-=Number(helthOrCoins);
                helthOrCoins=100-health;
                health = 100;
            }
            console.log(`You healed for ${helthOrCoins} hp.`)
            console.log(`Current health: ${health} hp.`);
        } else if (itemOrMonster =='chest') {
            coins += Number(helthOrCoins);
            console.log(`You found ${helthOrCoins} coins.`);
        } else {
            health -= Number(helthOrCoins);
            if (health > 0) {
                console.log(`You slayed ${itemOrMonster}.`);
            }
            else {
                console.log(`You died! Killed by ${itemOrMonster}.`);
                console.log(`Best room: ${room}`);
                return;
            }
        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])