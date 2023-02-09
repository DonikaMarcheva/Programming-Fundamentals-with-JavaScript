function lastKSequence(n,k){
let sequence=[1];
for(let i=1;i<n;i++){
    let index=Math.max(0,sequence.length-k);
    let lastElements=sequence.slice(index);
    let sum=0;
    for(let el of lastElements){
        sum+=el;
    }
    sequence.push(sum);
}
console.log(sequence.join(' '))
}
lastKSequence(6, 3)