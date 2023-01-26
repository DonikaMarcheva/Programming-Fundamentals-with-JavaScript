function amazingNum(num){
    num=num.toString();
let symbol="";
let sum=0;
for(let i=0; i<num.length; i++){
    symbol=num[i];
    let symbolInNum=Number(symbol);
    sum+=symbolInNum;
}
console.log(sum.toString().includes("9") ? `${num} Amazing? True` : `${num} Amazing? False`);

}
amazingNum(999)