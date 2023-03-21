function needForSpeed(input) {
    let carsNum = Number(input.shift());
    let cars = {};
    let carInfo = "";
    while (carsNum > 0) {
        carInfo = input.shift();
        let [carName, miles, fuel] = carInfo.split('|');
        if (!cars.hasOwnProperty(carName)) {
            cars[carName] = { "mileage": 0, "fuel": 0 }
        }
        cars[carName]["mileage"] = Number(miles);
        cars[carName]["fuel"] = Number(fuel);
        carsNum--;
    }
    let commandData = input.shift();

    while (commandData !== "Stop") {
        let commandArr = commandData.split(' : ');
        let command = commandArr.shift();
        let carName = commandArr.shift();

        if (command === "Drive") {
            let distance = Number(commandArr.shift());
            let fuel = Number(commandArr.shift());
            if (cars[carName]["fuel"] >= fuel) {
                cars[carName]["mileage"] += distance;
                cars[carName]["fuel"] -= fuel;
                console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if (cars[carName]["mileage"] >= 100000) {
                    delete cars[carName];
                    console.log(`Time to sell the ${carName}!`);
                }
            } else {
                console.log("Not enough fuel to make that ride");
            }
        }
        else if (command === "Refuel") {
            let fuel = Number(commandArr.shift());
            if (cars[carName]["fuel"] + fuel > 75) {
                fuel = 75 - cars[carName]["fuel"];
            }
            cars[carName]["fuel"] += fuel;
            console.log(`${carName} refueled with ${fuel} liters`);
        } else {
            let km = Number(commandArr.shift());
            cars[carName]["mileage"] -= km;
            if (cars[carName]["mileage"] < 10000) {
                cars[carName]["mileage"] = 10000;
            } else {
                console.log(`${carName} mileage decreased by ${km} kilometers`);
            }
        }

        commandData = input.shift();
    }
    for (const car in cars) {
        let carsInfoArr = Object.entries(cars[car]);
        let mileage = carsInfoArr[0][1];
        let fuel = carsInfoArr[1][1];
        console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])
console.log(`==========================`);

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]
)