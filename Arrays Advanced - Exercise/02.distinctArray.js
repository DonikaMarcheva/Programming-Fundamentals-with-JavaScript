// function distinctArray(arr){
// let newArr=arr.filter((item, index) => arr.indexOf(item) === index);

// console.log(newArr.join(' '))
// }
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
function distinctArray(arr){
    let newArr=[];
    for (number of arr){
        if(!newArr.includes(number)){
            newArr.push(number);
        }
    }
    console.log(newArr.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])