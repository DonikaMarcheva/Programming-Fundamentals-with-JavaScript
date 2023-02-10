function smallestTwoNum(array){
let smallestTwo=array.sort((a,b)=>a-b).slice(0,2);
console.log(smallestTwo.join(' '))
}
smallestTwoNum([30, 15, 50, 5])