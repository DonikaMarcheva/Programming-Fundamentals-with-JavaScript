function cardGame(input) {
    let players = new Map();
    let cardTypeEnum = {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    }
    let cardPowerEnum = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1

    }
    for (let line of input) {
        let [playerName, cards] = line.split(': ');
        if (!players.has(playerName)) {
            players.set(playerName, new Set());
        }
        let cardsArr = cards.split(', ');
        for (let card of cardsArr) {
            players.get(playerName).add(card)
        }
    }
    for (let player of Array.from(players)) {
        let playerName = player[0];
        let cards = player[1];
        let sum = 0;
        for (let card of Array.from(cards)) {
            let cardInfo = card.split("");
            let powerAsString = cardInfo.splice(cardInfo.length - 1, 1).join('');
            let typeAsString = cardInfo.join('');
            let power = cardPowerEnum[powerAsString];
            let type = cardTypeEnum[typeAsString];
            sum += power * type;
        }
        console.log(`${playerName}: ${sum}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)