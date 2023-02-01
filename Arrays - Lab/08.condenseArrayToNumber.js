function condenseArray(array){
let condense=[];
while(array.length>1){
for(let i=0; i<array.length-1; i++){
        let condenseElement=array[i]+array[i+1];
        condense.push(condenseElement);
}
array=condense;
condense=[];
}
console.log(array.join());
}
condenseArray([1])