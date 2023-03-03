function wordsTracker(input) {
    let searchedWords = input.shift().split(' ');
    let words = {};
    for (const word of searchedWords) {
        words[word] = 0;
    }
    for (const entry of input) {
        if (words.hasOwnProperty(entry)) {
            words[entry]++;
        }
    }
    let wordsArr = Object.entries(words);
    let sortedWords = wordsArr.sort((a, b) => b[1] - a[1]);
    for (const word of sortedWords) {
        console.log(`${word[0]} - ${word[1]}`);
    }
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)
