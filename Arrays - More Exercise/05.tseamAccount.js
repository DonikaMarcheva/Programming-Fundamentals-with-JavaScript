function tseamAccount(input) {
    // •	Install {game} - add the game at the last position in the account, but only if it isn't installed already.
    // •	Uninstall {game} - delete the game if it exists.
    // •	Update {game} - update the game if it exists and place it in the last position.
    // •	Expansion {game}-{expansion} - check if the game exists and insert after it the expansion in the following format: "{game}:{expansion}";

    let account = input[0].split(" ");
    for (let i = 1; i < input.length; i++) {
        if (input[i] === "Play!") {
            break;
        } else {
            let commands = input[i].split(" ");
            switch (commands[0]) {
                case "Install":
                    if (account.includes(commands[1])) {
                        continue;
                    } else {
                        account.push(commands[1]);
                    }
                    break;
                case "Uninstall":
                    if (account.includes(commands[1])) {
                        let index = account.indexOf(commands[1]);
                        account.splice(index, 1);
                    }
                    break;
                case "Update":
                    if (account.includes(commands[1])) {
                        let index = account.indexOf(commands[1]);
                        let gameToMove = commands[1];
                        account.splice(index, 1);
                        account.push(gameToMove);
                    }
                    break;
                case "Expansion":
                    let gameExpansion = commands[1].split("-");
                    if (account.includes(gameExpansion[0])) {
                        let index = account.indexOf(gameExpansion[0]);
                        account.splice(index + 1, 0, `${gameExpansion[0]}:${gameExpansion[1]}`)
                    }
                    break;
            }
        }
    }
    console.log(account.join(" "));
}
tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']



)