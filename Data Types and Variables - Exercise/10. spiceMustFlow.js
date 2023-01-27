function spiceMustFlow(startingYield) {
    let extractedSpice = 0;
    daysCounter = 0;

    for (let i = startingYield; i >= 100; i-=10) {
        extractedSpice+= (i - 26);
        daysCounter++;
    }
    if(extractedSpice!=0){
    extractedSpice -= 26;
    }
    console.log(daysCounter);
    console.log(extractedSpice);
}
spiceMustFlow(450)