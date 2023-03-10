function hardWord(array) {
    let letter = array[0];
    let missingWords = array[1];
    let i = 0;
    while (missingWords.length > 0) {
        let word = missingWords[i];
        let hiddenWord = "_".repeat(word.length);
        let index = letter.indexOf("_");
        let currentWord = "";
        while (letter[index] === "_") {
            currentWord += letter[index];
            index++;
        }
        if (hiddenWord === currentWord) {
            letter = letter.replace(currentWord, word);
            let wordIndex = missingWords.indexOf(word);
            missingWords.splice(wordIndex, 1);
            i = 0;
            continue;
        }
        i++;
    }
    console.log(letter)
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)