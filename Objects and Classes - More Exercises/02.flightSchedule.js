function flightSchedule(array) {
    let changedStatus = [];
    let sameStatus = [];
    let flights = array[0];
    let statusToChange = array[1];
    let status = array[2];
    for (let line of flights) {
        let flightNumber = line.split(' ').shift();
        let city = line.split(' ').slice(1).join(" ");
        let obj = {
            flightNumber: flightNumber,
            city: city,
            status: "Ready to fly"
        }
        sameStatus.push(obj);
    }
    for (let line of statusToChange) {
        let [flightChanged, changingStatus] = line.split(' ');
        let foundChangedFlight = sameStatus.find(el => el.flightNumber === flightChanged);
        if (foundChangedFlight) {
            let obj = {
                flightNumber: foundChangedFlight.flightNumber,
                city: foundChangedFlight.city,
                status: changingStatus
            }
            changedStatus.push(obj);
            let index = sameStatus.indexOf(foundChangedFlight);
            sameStatus.splice(index, 1);
        }
    }
    changedStatus.sort((a, b) => a.city.localeCompare(b.city));
    if (status[0] === "Ready to fly") {
        for (let obj of sameStatus) {
            console.log(`{ Destination: '${obj.city}', Status: '${obj.status}' }`);
        }
    } else {
        for (let obj of changedStatus) {
            console.log(`{ Destination: '${obj.city}', Status: '${obj.status}' }`)
        }
    }
}

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]
)