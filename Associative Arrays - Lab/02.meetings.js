function meetings(input) {
    let meetings = {};
    for (let line of input) {
        let [weekday, name] = line.split(' ');
        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            console.log(`Scheduled for ${weekday}`);
            meetings[weekday] = name;
        }
    }
    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)