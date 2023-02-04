function print(array) {
    let arrNElements = [];
    let lastElementIndex=array.length;
    let step=Number(array[lastElementIndex-1]);
    for (let i = 0; i < array.length - 1; i+= step) {
        arrNElements.push((array[i]));
    }
    console.log(arrNElements.join(" "));
}
print(['1', '2', '3', '4', '5', '6'])