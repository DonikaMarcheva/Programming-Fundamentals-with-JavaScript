function passwordGenerator(array) {
    let concatStrings = array[0].concat(array[1]);
    let word = array[2];
    let allVowel = 'aeoui';
    let vowelCounter = 0;
    let wordLength = word.length;
    let newText = '';
    let newReversedText = '';
    let j = 0;
    while (newText.length < concatStrings.length) {
        if (allVowel.includes(concatStrings[j])) {
            if (vowelCounter <= wordLength - 1) {
                newText += word[vowelCounter].toUpperCase();
                vowelCounter++;
            } else {
                newText += word[(vowelCounter % wordLength)].toUpperCase();
                vowelCounter++;
            }
        } else {
            newText += concatStrings[j];
        }
        j++;

    }
    for (let i = newText.length - 1; i >= 0; i--) {
        newReversedText += newText[i];
    }
    console.log(`Your generated password is ${newReversedText}`);
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]
)