function race(array){
    let racers=array.shift().split(', ');
    let patternName=/[A-Za-z]+/g;
    let patternNum=/\d+/g;
    let racerObj={};
    let i=0;
    while(array[i] !== 'end of race'){
        let data=array[i];
        let match=data.match(patternName).join('');
        let nums=data.match(patternNum).join('').split('').map(Number);
        let numSum=nums.reduce((a,c)=>a+c,0);
        for(let racer of racers){
            if(racer===match){
        if(!racerObj.hasOwnProperty(racer)){
            racerObj[racer]=numSum;
        }else{
            racerObj[racer]+=numSum;
        }
        }
    }
        i++;
    }
    let racerArr=Object.entries(racerObj).sort((a,b)=>b[1]-a[1]);
    console.log(`1st place: ${racerArr[0][0]}`)
    console.log(`2nd place: ${racerArr[1][0]}`)
    console.log(`3rd place: ${racerArr[2][0]}`)
}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
)