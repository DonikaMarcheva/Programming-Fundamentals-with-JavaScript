function netherRealms(string) {
    let data = string.split(/[, ]+/g);
    let healthPattern = /[^0-9+\-*\/.]/g;
    let damagePattern = /\+?-?\d+[.\d+]*/g;
    let demons = {};

    for (let line of data) {
        let health = line.match(healthPattern);
        let healthNum = 0;
        if (health) {
            healthNum = health.map(x => x.charCodeAt()).map(Number).reduce((a, c) => a + c, 0);
        }
        let initialDamage = line.match(damagePattern);
        let damage = 0;
        if (initialDamage) {
            damage = initialDamage.map(Number).reduce((a, c) => a + c, 0);
            let symbols = line.split('').filter(x => x === "/" || x === "*");
            for (let symbol of symbols) {
                if (symbol === "*") {
                    damage *= 2;
                } else {
                    damage /= 2;
                }
            }
        }
        demons[line] = {};
        demons[line]["health"] = healthNum;
        demons[line]["damage"] = damage;
    }
    let demonsArr = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));
    for (let demon of demonsArr) {
        let name = demon[0];
        let healthDamageObj = demon[1];
        let health = Number(healthDamageObj["health"]);
        let damage = Number(healthDamageObj["damage"]);
        console.log(`${name} - ${health} health, ${damage.toFixed(2)} damage `);
    }
}

netherRealms('Gos/ho')