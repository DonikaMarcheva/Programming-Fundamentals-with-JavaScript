// function triangleArea(a,b,c){
// let area= 0.25* Math.sqrt((a+b+c)*(-a+b+c)*(a-b+c)*(a+b-c));
// console.log(area);
// }
// triangleArea(2,
//     3.5,
//     4
//     )
function triangleArea(a,b,c){
let s= (a+b+c)/2;
let area= Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(area);
}
triangleArea(2,
    3.5,
    4
    )