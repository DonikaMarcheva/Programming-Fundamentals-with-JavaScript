function theHuntingGame(array) {
    let days = Number(array.shift());
    let playersCount = Number(array.shift());
    let energy = Number(array.shift());
    let waterPerDay = Number(array.shift());
    let foodPerDay = Number(array.shift());
    let water = waterPerDay * playersCount * days;
    let food = foodPerDay * playersCount * days;
    for(let i=1;i<=days;i++){
        energy-=array[i-1];
        if(energy<=0){
            break;
        }
        else{
            if (i % 2 === 0) {
                energy += 0.05 * energy;
                water -= 0.3 * water;
            }
            if (i % 3 === 0) {
                energy += 0.1 * energy;
                food -= (food / playersCount);
            }
        }
    }
    if (energy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`)
    }
}
theHuntingGame(["10",
"7",
"5035.5",
"11.3",
"7.2",
"942.3",
"500.57",
"520.68",
"540.87",
"505.99",
"630.3",
"784.20",
"321.21",
"456.8",
"330"])

