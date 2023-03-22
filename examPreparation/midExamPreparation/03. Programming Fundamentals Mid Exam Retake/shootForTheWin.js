function shoot(array) {
    let targets = array.shift().split(' ').map(Number);
    count=0;
    for (let el of array) {
        if (el === "End") {
            break;
        } else {
            let index = Number(el);
            if (index>= 0 && index<targets.length) {
                //finding value of the Target
                let ValueOfTheTarget = targets[index];
                if(ValueOfTheTarget===-1 & targets.length===1){
                    console.log(`Shot targets: 0 -> ${targets.join(' ')}`)
                    return;
                }else{
                //make target shooted-return to -1 and change other target's value
                returnToShooted(index);
                count++;
                //reduce and increase other according to conditions
                reduceValue(ValueOfTheTarget);
            }
        }
            }
    }
    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);

    function returnToShooted(index) {
        targets[index] = -1;
    }
    function reduceValue(num) {
        for (let i=0;i<targets.length;i++) {
            if (targets[i] !== -1 && targets[i] > num) {
               targets[i]-=num;
            } else if (targets[i] !== -1 && targets[i] <= num) {
                targets[i]+=num;
            }
        }
    }
}
shoot(["-1",
5,
    "End"])

