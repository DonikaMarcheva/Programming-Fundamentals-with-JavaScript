function counterStrike(array){
    let energy=Number(array[0]);
    let i=1;
    let count=0;
    while(array[i] !=="End of battle"){
        if(energy<array[i]){
            console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
            return;
        }else{
            count++;
        energy-=Number(array[i]);
        if(count%3===0){
            energy+=count;
        }
    }
        
        i++;
    }
    console.log(`Won battles: ${count}. Energy left: ${energy}`)
}
counterStrike(['100',
'1',
"End of battle"])



