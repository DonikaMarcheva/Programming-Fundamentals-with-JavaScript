function negativePositive(input){
    let newInput=[];
for(el of input){
    if(el<0){
    newInput.unshift(el);
    }else{
        newInput.push(el);
    }
}
console.log(newInput.join('\n'));
}
negativePositive(['7', '-2', '8', '9'])