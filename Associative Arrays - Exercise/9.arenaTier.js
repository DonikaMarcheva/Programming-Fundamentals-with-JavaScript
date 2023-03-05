function arenatTier(input) {
    let gladiators = new Map();
    let index = 0;
    let command = input[0];
    index++;

    while (command != 'Ave Cesar') {
        let action = command.split(" -> ");
        if (action.length === 3) {
            let [name, technique, skill] = action;
            if (!gladiators.has(name)) {
                gladiators.set(name, new Map());
            }
            if (!gladiators.get(name).has(technique) ||
                gladiators.get(name).has(technique) &&
                gladiators.get(name).get(technique) < skill) {
                gladiators.get(name).set(technique, Number(skill));
            }


        } else {
            let [gladiatorA, gladiatorB] = command.split(" vs ");
            if (gladiators.has(gladiatorA) && gladiators.has(gladiatorB)) {
                let techGladiatorA = gladiators.get(gladiatorA);
                let techGladiatorB = gladiators.get(gladiatorB);
                let biggerSkil = techGladiatorA.size > techGladiatorB.size ? techGladiatorA : techGladiatorB;
                let smallerSkil = techGladiatorA.size < techGladiatorB.size ? techGladiatorA : techGladiatorB;
                for (let [techName, skill] of Array.from(biggerSkil)) {
                    if (smallerSkil.has(techName)) {
                        if (techGladiatorA.get(techName) > techGladiatorB.get(techName)) {
                            techGladiatorB.delete(techName);
                        } else {
                            techGladiatorA.delete(techName);
                        }
                    }
                }
            }

        }

        command = input[index];
        index++;
    }
    let gladiatorPoints = new Map();

    for (let [name, technique] of Array.from(gladiators)) {
        let sum = 0;

        for (let [tech, skill] of Array.from(technique)) {
            sum += skill;
        }
        if (sum != 0) {
            gladiatorPoints.set(name, sum);
        }
    }
    let sortedGladiatorByPoints = Array.from(gladiatorPoints).sort((a, b) => { return b[1] - a[1] || a[0].localeCompare(b[0]) });
    for (let [name, point] of sortedGladiatorByPoints) {
        console.log(`${name}: ${point} skill`);

        let tech = Array.from(gladiators.get(name)).sort((a, b) => { return b[1] - a[1] || a[0].localeCompare(b[0]) });
        for (let [techName, skillPoints] of tech) {
            console.log(`- ${techName} <!> ${skillPoints}`)
        }
    }
}
arenatTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]
    )
    console.log("---------------------");
arenatTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]
)
