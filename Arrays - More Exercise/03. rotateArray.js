function rotate(array) {
    let rotationNum = array[array.length - 1];
    array.pop();
    let count=0;
    let j = 0;
    while(count<rotationNum){
    while (j < array.length-1) {
        array.push(array[0]);
        array.shift();
        j++;
    }
    count++;
    j=0;
}
    console.log(array.join(" "));
}

rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15'])