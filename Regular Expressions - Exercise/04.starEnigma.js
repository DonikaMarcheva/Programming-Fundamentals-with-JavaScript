function starEnigma(array) {
    let lineNum = array.shift();
    let pattern = /[star]+/ig;
    let planetObj = {
        A: new Set(),
        D: new Set()
    };

    for (let i = 0; i < lineNum; i++) {
        let match = array[i].match(pattern);
        let surchedNum=0;
        if(match){
        surchedNum = (match.join('')).length;
        }
        let entry = array[i].split('');
        let ASCIImessage = entry.map(x => x.charCodeAt() - surchedNum);
        let decryppedMessage = ASCIImessage.map(x => String.fromCharCode(x)).join('');
        let planetPattern = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[A,D])![^@\-!:>]*->(?<soldierCount>\d+)/g
        let data = planetPattern.exec(decryppedMessage);
        if (data) {
            let planetName = data.groups.planetName;
            let attackType = data.groups.attackType;
            planetObj[attackType].add(planetName);
        }
    }
    let planetArr = Object.entries(planetObj);
    for (let planet of planetArr) {
        if (planet[0] === "A") {
            console.log(`Attacked planets: ${planet[1].size}`);
            let planetNames = Array.from(planet[1]).sort((a, b) => a.localeCompare(b));
            for (let name of planetNames) {
                console.log(`-> ${name}`);
            }
        }
        else if(planet[0] === "D"){
            console.log(`Destroyed planets: ${planet[1].size}`);
            let planetNames = Array.from(planet[1]).sort((a, b) => a.localeCompare(b));
            for (let name of planetNames) {
                console.log(`-> ${name}`);
            }
        }
    }
}

starEnigma(['3',
    "bbbbbbbbbbbbbbbbbbb",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
)