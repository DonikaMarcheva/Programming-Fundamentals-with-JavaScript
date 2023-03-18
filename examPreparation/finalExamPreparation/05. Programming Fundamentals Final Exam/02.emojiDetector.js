function emojiDetector(input){
    let text=input[0];
let matchesCoolNum=text.matchAll(/\d+/g);
let numsToMultiply='';
let coolThreshold=1;
let emojiArr=[];
for (const num of matchesCoolNum) {
    numsToMultiply+=num;
}
for(let i=0;i<numsToMultiply.length;i++){
    coolThreshold*=Number(numsToMultiply[i]);
}
let emojies=text.matchAll(/::[A-Z][a-z]{2,}::|\*\*[A-Z][a-z]{2,}\*\*/g)
for (const emoji of emojies) {
    emojiArr.push(emoji);
}
console.log(`Cool threshold: ${coolThreshold}`);
console.log(`${emojiArr.length} emojis found in the text. The cool ones are:`);
    for (const emoji of emojiArr) {
        let emojiName=emoji[0].substring(2,emoji[0].length-2);
        let emojiASCIIsum=emojiName.split('').map(x=>x.charCodeAt()).reduce((a,c)=>a+c,0);
        if(emojiASCIIsum>=coolThreshold){
            console.log(emoji[0]);
        }
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])