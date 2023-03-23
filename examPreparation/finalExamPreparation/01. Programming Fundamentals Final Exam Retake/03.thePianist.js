function thePianist(input) {
    let initialCount = input.shift();
    let piecesInfo = '';
    let pieces = {};

    while (initialCount > 0) {
        piecesInfo = input.shift();
        let [piece, composer, key] = piecesInfo.split('|');
        pieces[piece] = {};
        pieces[piece]["composer"] = composer;
        pieces[piece]["key"] = key;
        initialCount--;
    }
    let commandInfo = input.shift();
    while (commandInfo !== "Stop") {
        let commandsArr = commandInfo.split('|');
        let command = commandsArr.shift();
        if (command === "Add") {
            let piece = commandsArr.shift();
            let composer = commandsArr.shift();
            let key = commandsArr.shift();
            if (!pieces.hasOwnProperty(piece)) {
                pieces[piece] = {};
                pieces[piece]["composer"] = composer;
                pieces[piece]["key"] = key;
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if (command === "Remove") {
            let piece = commandsArr.shift();
            if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else {
            let piece = commandsArr.shift();
            let newKey = commandsArr.shift();
            if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece]["key"];
                pieces[piece]["key"] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        commandInfo = input.shift();
    }
    for (const piece in pieces) {
        let pieceInfo = Object.entries(pieces[piece]);
        console.log(`${piece} -> Composer: ${pieceInfo[0][1]}, Key: ${pieceInfo[1][1]}`);
    }
}


thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)
console.log(`============================`);
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
)