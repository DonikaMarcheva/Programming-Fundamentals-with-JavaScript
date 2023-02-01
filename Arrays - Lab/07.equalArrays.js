function equalArrays(firstArray,secondArray){
    let sum=0;
for(let i=0; i<firstArray.length;i++){
        let element1=Number(firstArray[i]);
        let element2=Number(secondArray[i]);
        if(element1 != element2){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }else{
            sum+=element1;
        }
}
console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArrays(['1'], ['10'])