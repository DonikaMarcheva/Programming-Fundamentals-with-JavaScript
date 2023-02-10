function productList(list){
let sortedByName=list.sort();
for(let i=0;i<sortedByName.length;i++){
    console.log(`${i+1}.${sortedByName[i]}`);
}
}
productList(['Watermelon', 'Banana', 'Apples'])