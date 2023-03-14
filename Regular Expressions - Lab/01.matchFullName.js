function matchFullNames(text) {
    let pattern = /\b[A-Z]{1}[a-z]+[ ]\b[A-Z]{1}[a-z]+/g;
    let words = text.match(pattern);
    console.log(words.join(' '))
}
matchFullNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")