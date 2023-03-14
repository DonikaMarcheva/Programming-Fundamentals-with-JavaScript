function treasureFinder(input) {
    let key = input.shift().split(' ').join('');
    let i = 0;
    while (input[i] != "find") {
        let lineASCII = input[i].split('').map(x => x.charCodeAt());
        let asciiLength = lineASCII.length;
        for (let i = 0; i < asciiLength; i++) {
            if (i <= key.length - 1) {
                lineASCII[i] -= key[i];
            } else {
                lineASCII[i] -= key[i % key.length];
            }
        }
        i++;
        let newLine = '';
        for (let num of lineASCII) {
            let newChar = String.fromCharCode(num);
            newLine += newChar;
        }
        let firstIndex = newLine.indexOf("&");
        let nextIndex = newLine.lastIndexOf("&");
        let searchedTreasure = newLine.substring(firstIndex+1, nextIndex);

        let firstIndexCoordinate = newLine.indexOf("<");
        let nextIndexCoordinate = newLine.indexOf(">");
        let searchedCoordinate = newLine.substring(firstIndexCoordinate + 1, nextIndexCoordinate);

        console.log(`Found ${searchedTreasure} at ${searchedCoordinate}`);
    }
}
treasureFinder(["1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"]
)