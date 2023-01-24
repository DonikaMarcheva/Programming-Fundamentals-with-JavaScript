function printAndSum(num1, num2) {
    let nums= "";
    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        if (i==num2){
            nums+=i;
            sum+=i;
            continue;
        }
         nums+=i+" ";
        sum += i;
        
    }
    console.log(nums);
    console.log(`Sum: ${sum}`);
}
printAndSum(1, 3)