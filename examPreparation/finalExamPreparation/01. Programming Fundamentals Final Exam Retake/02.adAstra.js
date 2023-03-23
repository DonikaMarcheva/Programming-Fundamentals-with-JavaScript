function adAstra(input) {
    let text = input.shift();
    let pattern = /(\||#)(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>[0-9][0-9]{0,3}|10000)\1/g
    let match = pattern.exec(text);
    let totalCalories = 0;
    while (match !== null) {
        totalCalories += Number(match.groups.calories);
        match = pattern.exec(text)
    }
    console.log(`You have food to last you for: ${Math.trunc(totalCalories / 2000)} days!`);
    if (totalCalories !== 0) {
        let matches = text.matchAll(pattern);
        for (const match of matches) {
            console.log(`Item: ${match.groups.item}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`);
        }
    }
}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])
console.log("++++++++++++++++++++++++++++++++++++++");
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
console.log("++++++++++++++++++++++++++++++++++++++++");
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])
