function heroRecruitment(input) {
    let heroes = {};
    let data = input.shift();
    while (data !== "End") {
        let commandArr = data.split(' ');
        let command = commandArr.shift();
        if (command === "Enroll") {
            let name = commandArr.shift();
            if (!heroes.hasOwnProperty(name)) {
                heroes[name] = new Set;
            } else {
                console.log(`${name} is already enrolled.`);
            }
        } else if (command === "Learn") {
            let name = commandArr.shift();
            let spell = commandArr.shift();
            if (!heroes.hasOwnProperty(name)) {
                console.log(`${name} doesn't exist.`);
            } else {
                if (heroes[name].has(spell)) {
                    console.log(`${name} has already learnt ${spell}.`);
                } else {
                    heroes[name].add(spell);
                }
            }
        } else {
            let name = commandArr.shift();
            let spell = commandArr.shift();
            if (!heroes.hasOwnProperty(name)) {
                console.log(`${name} doesn't exist.`);
            } else {
                if (!heroes[name].has(spell)) {
                    console.log(`${name} doesn't know ${spell}.`);
                } else {
                    heroes[name].delete(spell);
                }
            }
        }
        data = input.shift();
    }
    console.log("Heroes:");
    for (const name in heroes) {
        let spells = Array.from(heroes[name]);
        console.log(`== ${name}: ${spells.join(', ')}`)
    }
}

heroRecruitment(["Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn John ItShouldNotWork",
    "Unlearn George Dispel",
    "Unlearn Stefan ItShouldWork",
    "End"])

console.log("++++++++++++++++++");
heroRecruitment(["Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork",
    "Unlearn Stefan NotFound",
    "End"])

console.log("++++++++++++++++++++++");
heroRecruitment(["Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel",
    "End"])
