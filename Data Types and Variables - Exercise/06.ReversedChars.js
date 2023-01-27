function reverse(char1,char2,char3){
let initialString = char1+" "+char2+" "+char3;
let reversedString="";
for(let i =initialString.length-1 ; i>=0 ; i-- ){
reversedString+=initialString[i];
}

console.log(reversedString);
}
reverse('1',
'L',
'&')