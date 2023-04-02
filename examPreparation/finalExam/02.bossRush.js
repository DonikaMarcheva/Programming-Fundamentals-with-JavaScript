function bossRush(input) {
    let count = Number(input.shift());
    let pattern = /([\|])(?<name>[A-Z]{4,})\1:(#)(?<title>[A-Za-z]+ [A-Za-z]+)\3/g;
    for (let i = 1; i <= count; i++) {
        let text = input.shift();
        let match = pattern.exec(text);
        if (match !== null) {
            while (match !== null) {
                let name = match.groups.name;
                let title = match.groups.title;
                let strength = name.length;
                let armor = title.length;
                console.log(`${name}, The ${title}`);
                console.log(`>> Strength: ${strength}`);
                console.log(`>> Armor: ${armor}`);
                match = pattern.exec(text);
            }
        } else {
            console.log("Access denied!");
        }
    }
}

bossRush(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'])
console.log("++++++++++++++++++");
bossRush(['3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'])

