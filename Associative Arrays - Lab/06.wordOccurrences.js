function wordOccurences(input) {
    let wordSaver = {};
    for (const word of input) {
        if (!wordSaver[word]) {
            wordSaver[word] = 0;
        }
        wordSaver[word] += 1;
    }
    let wordSaverArr = Object.entries(wordSaver);
    let sortedByOccurences = wordSaverArr.sort((a, b) => b[1] - a[1]);
    for (const [name, times] of sortedByOccurences) {
        console.log(`${name} -> ${times} times`)
    }
}
wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])