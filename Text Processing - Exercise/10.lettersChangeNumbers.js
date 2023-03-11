function lettersChangeNumbers(string) {
    let stringArr = string.split(' ');
    let alphabet = '+abcdefghijklmnopqrstuvwxyz'
    let result = 0;
    for (let text of stringArr) {
        if (text.length > 1) {
            let firstLetter = text[0];
            let lastLetter = text[text.length - 1];
            let number = text.substring(1, text.length - 1);
            if (firstLetter === firstLetter.toUpperCase()) {
                firstLetter = firstLetter.toLowerCase();
                let index = alphabet.indexOf(firstLetter);
                result += number / index;
            } else {
                let index = alphabet.indexOf(firstLetter);
                result += number * index;
            }

            if (lastLetter === lastLetter.toUpperCase()) {
                lastLetter = lastLetter.toLowerCase();
                let index = alphabet.indexOf(lastLetter);
                result -= index;
            } else {
                let index = alphabet.indexOf(lastLetter);
                result += index;
            }
        }
    }
    console.log(result.toFixed(2));
}
lettersChangeNumbers('a1A')