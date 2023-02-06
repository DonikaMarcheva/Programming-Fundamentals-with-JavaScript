function factorialDivision(firstNum, secondNum){
    let firstFactoriel=factoriel(firstNum);
    let secondFactoriel=factoriel(secondNum);
    return (firstFactoriel/secondFactoriel).toFixed(2);
function factoriel(num){
    let result=1;
    for(let i=num; i>=1;i--){
        result*=i;
    }
    return result;
}
}
console.log(factorialDivision(6,2))