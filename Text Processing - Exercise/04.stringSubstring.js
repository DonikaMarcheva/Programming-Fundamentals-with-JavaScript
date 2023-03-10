function stringSubstraction(word, text){
    let words=text.toLowerCase().split(' ');

    console.log(words.includes(word)? word : `${word} not found!`);

}
stringSubstraction('javascript',
'JavaScript is the best programming language'
)