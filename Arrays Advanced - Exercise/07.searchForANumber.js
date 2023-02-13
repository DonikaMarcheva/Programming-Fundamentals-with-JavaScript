function searchNum(numbers,manipulatingNum){
let numberNeeded=numbers.slice(0,manipulatingNum[0]);
let delited=numberNeeded.splice(0,manipulatingNum[1]);
let counter=0;
for(let number of numberNeeded){
if(number===manipulatingNum[2]){
    counter++;
}
}
console.log(`Number ${manipulatingNum[2]} occurs ${counter} times.`)
}
searchNum([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    )