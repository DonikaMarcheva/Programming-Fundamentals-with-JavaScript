function replace(string1, char, string2){
let newString="";
    for (let i = 0; i < string1.length; i++) {
        let newChar=string1[i];
        if(newChar==='_'){
            newChar=char;
        }
        newString+=newChar;
    }
    console.log(newString===string2 ? "Matched" : "Not Matched");

}

replace('Str_ng', 'I', 'Strong')
replace('Str_ng', 'i', 'String')
