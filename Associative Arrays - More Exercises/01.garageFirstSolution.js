function garage(input) {
    let garage = new Map();

    for (let line of input) {
        let [garageNumber, carInfo] = line.split(' - ');
        let newCarInfo=carInfo.replaceAll(':',' -');    
        if (!garage.has(garageNumber)) {
            garage.set(garageNumber, new Set());
        }
        garage.get(garageNumber).add(newCarInfo);
    }
    for (let garageNum of Array.from(garage)) {
        console.log(`Garage № ${garageNum[0]}`);
        for (let carInfo of Array.from(garageNum[1])) {
            console.log(`--- ${carInfo}`);
        }
    }
}
garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])