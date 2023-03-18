function activationKeys(input) {
    let rowKey = input.shift();
    let entry = input.shift();

    while (entry !== "Generate") {
        let instructionArr = entry.split('>>>');
        let command = instructionArr[0];
        switch (command) {
            case "Contains":
                let substring = instructionArr[1];
                contains(substring);
                break;
            case "Flip":
                let letterType = instructionArr[1];
                let startIndex = instructionArr[2];
                let endIndex = instructionArr[3];
                flip(letterType, startIndex, endIndex);
                break;
            case "Slice":
                let start = instructionArr[1];
                let end = instructionArr[2];
                slice(start, end);
                break;
        }

        entry = input.shift();
    }
console.log(`Your activation key is: ${rowKey}`);

    function contains(string) {
        if (rowKey.includes(string)) {
            console.log(`${rowKey} contains ${string}`);
        } else {
            console.log("Substring not found!");
        }
    }
    function flip(letterType, startIndex, endIndex) {
        let substring = rowKey.substring(startIndex, endIndex);
        if (letterType === "Upper") {
            substring = substring.toUpperCase();
        } else {
            substring = substring.toLowerCase();
        }
        rowKey = rowKey.substring(0, startIndex) + substring + rowKey.substring(endIndex, rowKey.length + 1);
        console.log(rowKey);
    }
    function slice(startIndex, endIndex) {
        rowKey = rowKey.substring(0, startIndex) + rowKey.substring(endIndex, rowKey.length + 1);
        console.log(rowKey);
    }
}
activationKeys((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
)
console.log('---------------');
activationKeys((["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])
)