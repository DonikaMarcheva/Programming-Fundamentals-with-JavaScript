function rounding(num,roundto){
if (roundto>=15){
    roundto=15
}
console.log(parseFloat(num.toFixed(roundto)));
}
rounding(10.5,3)