function carWash(input){
let percentageCleaned=0;
let result=0;
for(let i=0;i<input.length;i++){
    result=commands(input[i]);
}
console.log(`The car is ${result.toFixed(2)}% clean.`)

function commands(action){
// •	soap – add 10 to the value
// •	water – increase the value by 20%
// •	vacuum cleaner – increase the value by 25%
// •	mud – decrease the value by 10%
switch(action){
case 'soap':
    percentageCleaned+=10;
break;
case 'water':
    percentageCleaned+=0.2*percentageCleaned;
    break;
    case 'vacuum cleaner':
        percentageCleaned+=0.25*percentageCleaned;
        break;
        case 'mud':
            percentageCleaned-=0.1*percentageCleaned;
            break;
}
return percentageCleaned;
}

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])