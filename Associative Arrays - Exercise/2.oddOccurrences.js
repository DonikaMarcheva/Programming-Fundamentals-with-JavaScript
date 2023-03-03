function oddOccurences(string) {
    let words = new Map();
    let oddOccurences = [];
    let wordsArr = string.split(' ');
    for (let i = 0; i < wordsArr.length; i++) {
        let eachWord = wordsArr[i].toLowerCase();
        if (!words.has(eachWord)) {
            words.set(eachWord, 1);
        } else {
            words.set(eachWord, words.get(eachWord) + 1);
        }
    }
    let wordsAsArr = Array.from(words);
    for (let entry of wordsAsArr) {
        let key = entry[0];
        let searchedValue = Number(entry[1]);
        if (searchedValue % 2 != 0) {
            oddOccurences.push(key);
        }
    }
    console.log(oddOccurences.join(' '));
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')