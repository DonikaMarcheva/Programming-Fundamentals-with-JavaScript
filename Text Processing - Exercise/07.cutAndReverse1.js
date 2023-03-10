function cutReverse(text){
    let half=text.length/2;
    let firstWord="";
    let secondWord="";
    for(let i=half-1;i>=0;i--){
        firstWord+=text[i];
    }
    for(let j=text.length-1; j>=half;j--){
        secondWord+=text[j];
    }
    console.log(firstWord);
    console.log(secondWord);
}
cutReverse('tluciffiDsIsihTgnizamAoSsIsihT')