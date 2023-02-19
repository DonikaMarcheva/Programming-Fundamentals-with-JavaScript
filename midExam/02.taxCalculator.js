function taxCalculator(array) {
    let taxPerCar = 0;
    let allTaxes = 0;
    let carData = array.join('').split('>>');
    for (let carInfo of carData) {
        let carDetails = carInfo.split(' ');
        let carName = carDetails[0];
        let carYears = carDetails[1];
        let carKm = carDetails[2];
        if (carName !== "family" && carName !== "heavyDuty" && carName !== "sports") {
            console.log("Invalid car type.");
            continue;
        } else {
            if (carName === "family") {
                tax = Math.trunc(carKm / 3000) * 12 + (50 - carYears * 5);
            } else if (carName === "heavyDuty") {
                tax = Math.trunc(carKm / 9000) * 14 + (80 - carYears * 8);
            } else {
                tax = Math.trunc(carKm / 2000) * 18 + (100 - carYears * 9);
            }
            console.log(`A ${carName} car will pay ${tax.toFixed(2)} euros in taxes.`)
        }
        allTaxes += tax;
    }
    console.log(`The National Revenue Agency will collect ${allTaxes.toFixed(2)} euros in taxes.`)

}
taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012'])