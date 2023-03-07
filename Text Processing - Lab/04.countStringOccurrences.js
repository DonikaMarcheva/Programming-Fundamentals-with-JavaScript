function countWord(sentence, word) {
    let count = sentence.split(' ').filter(x => x === word).length;
    console.log(count);
}
countWord('This is a word and it also is a sentence',
    'is'
)