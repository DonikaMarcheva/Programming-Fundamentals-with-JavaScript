function revealWords(text, sentence) {
    let wordsArr = text.split(', ');
    for (let word of wordsArr) {
        let hiddenWord = word.replace(word, "*".repeat(word.length));
        sentence = sentence.replace(hiddenWord, word);
    }
    console.log(sentence)
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
)