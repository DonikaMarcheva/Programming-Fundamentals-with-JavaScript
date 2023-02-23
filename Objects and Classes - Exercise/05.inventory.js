function inventory(list) {
    let heroes = [];
    list.forEach(line => {
        let [name, level, item] = line.split(' / ');
        let currentHero = {
            name,
            level: Number(level),
            item
        }
        heroes.push(currentHero);
    });
    heroes.sort((a, b) => a.level - b.level);
    heroes.forEach(element => {
        console.log(`Hero: ${element.name}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.item}`);
    });
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)