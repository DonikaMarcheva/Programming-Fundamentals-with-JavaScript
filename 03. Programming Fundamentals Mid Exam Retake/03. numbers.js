function numbers(string){
    let sum=0;
    let array=string.split(' ').map(Number);
for(let i=0;i<array.length;i++){
    sum+=array[i];
}
let average=sum/(array.length);
let newArr=array.filter(x=>x>average);
if(newArr.length>0){
newArr.sort((a,b)=>b-a);
if(newArr.length>5){
let searchedNums=newArr.splice(5)
}
console.log(newArr.join(' '));
}

else{
console.log('No')
}
}

numbers('-1 -2 -3 -4 -5 -6')