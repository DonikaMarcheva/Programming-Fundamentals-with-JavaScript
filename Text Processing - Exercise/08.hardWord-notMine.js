function hardWord(data) {
    let text = data[0].split(" ");
    let words = data[1];

    for (let i = 0; i < text.length; i++) {
        let searchedWord = text[i];
        if (searchedWord.includes("_")) {
            let substr = searchedWord.substring(searchedWord.indexOf("_"), searchedWord.lastIndexOf("_") + 1);
            let endElement = searchedWord.substring(searchedWord.lastIndexOf("_") + 1);
            for (let el of words) {
                if (el.length === substr.length) {
                    text[i] = el;
                    if (endElement) {
                        text[i] = el + endElement;
                    }
                }
            }
        }
    }
    console.log(text.join(" "));
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)