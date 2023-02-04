function nonDecreasingSubset(array){
    let newArr=[];
    let currentBig=array[0];
    newArr.push(currentBig);
for(let i=1; i<array.length; i++){
   if(array[i]>=currentBig){
    currentBig=array[i];
    newArr.push(currentBig)
   }
}
console.log(newArr.join(" "))
}
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1])