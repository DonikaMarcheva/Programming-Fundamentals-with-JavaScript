function reverseInPlace(array){
    for(let i=0; i<array.length/2;i++){
        let newElement=array[i];
        array[i]=array[array.length-1-i];
        array[array.length-1-i]=newElement;
    }
    console.log(array.join(" "));

}
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])