function charRange(firstChar,secondChar){

    let charCodeValue=function(char){
        return utfCode=char.charCodeAt();
    }
    let firstCharValue=charCodeValue(firstChar);
    let secondCharValue=charCodeValue(secondChar);
    let range='';
    if(firstCharValue<secondCharValue){
        for(let i=firstCharValue+1; i<secondCharValue;i++){
            range+= String.fromCharCode(i)+ ' ';
        }
    }
    else{
        for(let j=secondCharValue+1;j<firstCharValue;j++){
            range+= String.fromCharCode(j)+ ' ';
        }
    }
    return range;
}
console.log(charRange('C',
'#'
))
