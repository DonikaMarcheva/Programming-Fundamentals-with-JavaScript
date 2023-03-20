function heroesOfCode(input) {
    let heroes = {};
    let heroCount = input.shift();
    let addedHero = 1;
    while (addedHero <= heroCount) {
        let heroData = input.shift();
        let [name, hp, mp] = heroData.split(' ');
        if (!heroes.hasOwnProperty(name)) {
            heroes[name] = { HP: 0, MP: 0 };
        }
        heroes[name]["HP"] = +Number(hp);
        heroes[name]["MP"] += Number(mp);
        if (heroes[name]["HP"] > 100) {
            heroes[name]["HP"] = 100;
        }
        if (heroes[name]["MP"] > 200) {
            heroes[name]["MP"] = 200;
        }

        addedHero++;
    }
    let actionData = input.shift();
    while (actionData !== "End") {
        let actionArr = actionData.split(' - ');
        let action = actionArr.shift();
        if (action === "CastSpell") {
            let heroName = actionArr.shift();
            let mpNeeded = actionArr.shift();
            let spellName = actionArr.shift();
            if (heroes[heroName]["MP"] >= Number(mpNeeded)) {
                heroes[heroName]["MP"] -= Number(mpNeeded);
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName]["MP"]} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        } else if (action === "TakeDamage") {
            let heroName = actionArr.shift();
            let damage = actionArr.shift();
            let attacker = actionArr.shift();
            heroes[heroName]["HP"] -= Number(damage);
            if (heroes[heroName]["HP"] > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName]["HP"]} HP left!`);
            } else {
                delete heroes[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`);
            }
        } else if (action === "Recharge") {
            let heroName = actionArr.shift();
            let amount = actionArr.shift();
            if (heroes[heroName]["MP"] + Number(amount) > 200) {
                amount = 200 - heroes[heroName]["MP"];
            }
            heroes[heroName]["MP"] += Number(amount);

            console.log(`${heroName} recharged for ${amount} MP!`);
        } else {
            let heroName = actionArr.shift();
            let amount = actionArr.shift();
            if (heroes[heroName]["HP"] + Number(amount) > 100) {
                amount = 100 - heroes[heroName]["HP"];
            }
            heroes[heroName]["HP"] += Number(amount);
            console.log(`${heroName} healed for ${amount} HP!`);
        }

        actionData = input.shift();
    }

    for (const key in heroes) {
        console.log(key);
        let pointsArr = Object.entries(heroes[key]);
        console.log(`HP: ${pointsArr[0][1]}`);
        console.log(`MP: ${pointsArr[1][1]}`);
    }
}
heroesOfCode([2,
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']
)
console.log('---------------------');
heroesOfCode([4,
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']
)