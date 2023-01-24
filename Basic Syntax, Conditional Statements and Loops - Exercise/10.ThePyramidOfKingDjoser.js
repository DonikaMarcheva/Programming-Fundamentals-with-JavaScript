function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let steps = 0;

    for (let i = base; i > 1; i - 2) {
        steps++;
        if(base<=2){
            break;
        }
        stone+= (base - 2) * (base - 2) * increment;
        let materialOutside = 4 * (base - 1) * increment;
        if (steps % 5 == 0) {
            
            lapis+= materialOutside;
        }
        else {
            marble+= materialOutside;
        }
        base -= 2;
    }
    
    gold+=base*base*increment;

    console.log(`Stone required: ${Math.round(stone)}`);
    console.log(`Marble required: ${Math.round(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.round(lapis)}`);
    console.log(`Gold required: ${Math.round(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(steps*increment)}`);


}
pyramid(2,1
    )