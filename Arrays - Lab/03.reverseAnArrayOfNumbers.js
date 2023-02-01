function reverse(n,array){
    let newArray=[];
for(let i=n-1; i>=0; i--){
    let newElement=array[i];
    newArray.push(newElement);
}

console.log(newArray.join(" "));
}
reverse(3, [10, 20, 30, 40, 50])
reverse(4, [-1, 20, 99, 5])
reverse(2, [66, 43, 75, 89, 47])