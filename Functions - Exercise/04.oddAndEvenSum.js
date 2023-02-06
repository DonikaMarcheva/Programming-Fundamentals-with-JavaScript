function oddEvenSum(num) {
    let stringNum = num.toString();
    let array = stringNum.split('');
    let evens = array.filter(x => x % 2 === 0);
    let sumEvens=0;
    for(let even of evens){
        sumEvens+=Number(even);
    }
    let odds = array.filter(y => y % 2 !== 0);
    let sumOdds=0;
    for(let odd of odds){
        sumOdds+=Number(odd);
    }
console.log(`Odd sum = ${sumOdds}, Even sum = ${sumEvens}`)
}
oddEvenSum(1000435)