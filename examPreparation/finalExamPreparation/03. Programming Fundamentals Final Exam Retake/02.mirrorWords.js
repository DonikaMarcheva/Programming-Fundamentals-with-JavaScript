function mirrorWords(input){
    let text=input[0];
    let pattern=/(@|#)(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g
    let mirrorWord=[];
    
    let matches=text.matchAll(pattern);
    let count=0;
    for (const match of matches) {
        count++;
        let reversedSecondWord=match.groups.secondWord.split('').reverse().join('');
        if(match.groups.firstWord===reversedSecondWord){
            let pair=`${match.groups.firstWord} <=> ${match.groups.secondWord}`;
            mirrorWord.push(pair)
        }
    }if(count>0){
    console.log(`${count} word pairs found!`);
    if(mirrorWord.length>0){
        console.log("The mirror words are:");
    console.log(mirrorWord.join(', '));
    }else{
        console.log("No mirror words!");
    }
    }else{
        console.log("No word pairs found!");
        console.log("No mirror words!");
    }
}
mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])