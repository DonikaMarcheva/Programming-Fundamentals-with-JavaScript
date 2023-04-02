function stringGame(input) {
    let text = input.shift();
    let operations = input.shift();
    while (operations !== "Done") {
        let commandArr = operations.split(' ');
        let command = commandArr.shift();
        if (command === "Change") {
            let char = commandArr.shift();
            let substitution = commandArr.shift();
            while (text.includes(char)) {
                text = text.replace(char, substitution);
            }
            console.log(text);
        } else if (command === "Includes") {
            let substring = commandArr.shift();
            console.log(text.includes(substring) ? "True" : "False");
        } else if (command === "End") {
            let substring = commandArr.shift();
            console.log(text.endsWith(substring) ? "True" : "False");
        } else if (command === "Uppercase") {
            text = text.toUpperCase();
            console.log(text);
        } else if (command === "FindIndex") {
            let char = commandArr.shift();
            let index = text.indexOf(char);
            console.log(index);
        } else {
            let startIndex = Number(commandArr.shift());
            let count = Number(commandArr.shift());
            text = text.substring(startIndex, startIndex + count);
            console.log(text);
        }

        operations = input.shift();
    }
}
stringGame((["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"])
)
console.log("+++++++++++++++++++++++");
stringGame(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"])
