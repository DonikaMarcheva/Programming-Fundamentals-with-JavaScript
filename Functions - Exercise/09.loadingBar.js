function loadingBar(num) {
    let arrow = [];
    let repeatingPercentageCounter = num / 10;
    let repeatingDotsCounter = 10 - repeatingPercentageCounter;
    let str = '';
    for (let i = 0; i < repeatingPercentageCounter; i++) {
        str += '%';
    }
    for (let j = 0; j < repeatingDotsCounter; j++) {
        str += '.';
    }

    if (num === 100) {
        console.log('100% Complete!');
        console.log(`[${str}]`);
    }else{
    console.log(`${num}% [${str}]`);
    console.log('Still loading...');
    }
}
loadingBar(30)