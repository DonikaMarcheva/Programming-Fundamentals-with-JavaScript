function firstAndLast(array){
let howMuchNumbersNeeded=array.shift();
console.log(array.slice(0,howMuchNumbersNeeded).join(' '));
console.log(array.slice(array.length-howMuchNumbersNeeded).join(' '))
}
firstAndLast([2, 
    7, 8, 9]
    )