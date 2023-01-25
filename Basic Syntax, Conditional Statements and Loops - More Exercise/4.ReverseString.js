function reverseString(n){
    let str=n.toString();
    let reverseString="";

    for (let i = str.length-1; i >=0; i--) {
        reverseString+=str[i];      
    }
    console.log(reverseString);
    
}
reverseString(1234)