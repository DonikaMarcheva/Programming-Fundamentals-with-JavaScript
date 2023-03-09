function modernTimes(sentence) {
    let words = sentence.split(' ');

    for (let word of words) {

        if (word.startsWith('#') && word.length > 1 && isLetters(word)) {
            console.log(word.substring(1));
        }
    }

    function isLetters(string) {
        let isOnlyLetter = true;
        for (let i = 1; i < string.length; i++) {
            let char = string[i].toLowerCase().charCodeAt();
            if (char < 97 || char > 122) {
                isOnlyLetter = false;
                break;
            }
        }
        return isOnlyLetter;
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')