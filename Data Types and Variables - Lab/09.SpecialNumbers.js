function specialNumbers(n){


for(let i=1; i<=n; i++){
    sum=0;
    let stringN=i.toString();
    for(j=0;j<stringN.length;j++ ){
        sum+=Number(stringN[j]);   
    }
    console.log((sum===5)||(sum===7)||(sum===11) ? `${i} -> True` : `${i} -> False`);
}

}
specialNumbers(15)