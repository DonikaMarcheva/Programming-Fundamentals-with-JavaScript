function primeNumberChecker(num){
let count=0;
    for(let i=2; i<=num; i++){
    if(num%i==0 && i !=num){
        count++;
    }
}
console.log(count>=1 ? false : true)
}
primeNumberChecker(81)