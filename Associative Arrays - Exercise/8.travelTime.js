function travelTime(input) {
    let countryToVisit = new Map();

    for (let line of input) {
        let [country, town, expences] = line.split(" > ");
        if (!countryToVisit.has(country)) {
            countryToVisit.set(country, new Map());
        }
        if (!countryToVisit.get(country).has(town) ||
            countryToVisit.get(country).has(town) &&
            countryToVisit.get(country).get(town) > Number(expences)) {

            countryToVisit.get(country).set(town, Number(expences));
        }
    }
    let sortedContries = Array.from(countryToVisit).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [country, data] of sortedContries) {
        let sortedExpences = Array.from(data).sort((a, b) => a[1] - b[1]);
        let townInfo = [];
        for (let town of sortedExpences) {
            let townExpences = town.join(" -> ");
            townInfo.push(townExpences);
        }
        console.log(`${country} -> ${townInfo.join(' ')}`);
    }
}
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]
)