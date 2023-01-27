function digitSum(n){
    let stringN=n.toString();
    let sum=0;
   for (let i = 0; i < stringN.length; i++) {
   sum+=Number(stringN[i]);
   }
   console.log(sum);
}
digitSum(97561)