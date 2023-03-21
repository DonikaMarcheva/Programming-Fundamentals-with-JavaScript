function secretChat(input) {
    let message = input.shift();
    let command = input.shift();
    while (command !== "Reveal") {
        let commandArr = command.split(':|:');
        let commandWord = commandArr.shift();
        if (commandWord === "InsertSpace") {
            let index = Number(commandArr.shift());
            message = message.substring(0, index) + " " + message.substring(index, message.length);
            console.log(message);
        } else if (commandWord === "Reverse") {
            let substringWord = commandArr.shift();
            if (message.includes(substringWord)) {
                message = message.replace(substringWord, "");
                let reversedWord = substringWord.split('').reverse().join('');
                message += reversedWord;
                console.log(message);
            } else {
                console.log('error');
            }
        } else {
            let searchedWord = commandArr.shift();
            let newWord = commandArr.shift();
            while(message.includes(searchedWord)){
                message=message.replace(searchedWord,newWord);
            }
            console.log(message);
        }

        command = input.shift();
    }
    console.log(`You have a new text message: ${message}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]
)
console.log(`---------------------`);
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]
)