function fancyBarcodes(input){
    let count=input.shift();
    let pattern= /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;
    for(let i=0;i<count;i++){
        let text=input[i];
        let match=text.match(pattern);
        if(match !==null && match.join('')===text){
            let digitMatch=text.match(/\d/g);
            if(digitMatch===null){
                console.log("Product group: 00");
            }else{
                console.log(`Product group: ${digitMatch.join('')}`);
            }           
        }else{
            console.log("Invalid barcode");
        }
    }
}
fancyBarcodes((["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
)
console.log('----------------------------');
fancyBarcodes((["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
)