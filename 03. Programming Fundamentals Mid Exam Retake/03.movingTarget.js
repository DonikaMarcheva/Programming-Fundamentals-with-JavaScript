function moovingTarget(array) {
    let targets = array.shift().split(' ').map(Number);
    let isEnd = false;
    for (let el of array) {
        let commands = el.split(' ');
        let keyWord = commands.shift();
        let moves = commands.map(Number);
        switch (keyWord) {
            case "Shoot":
                shoot(moves[0], moves[1]);
                break;
            case "Add":
                add(moves[0], moves[1]);
                break;
            case "Strike":
                strike(moves[0], moves[1]);
                break;
            case "End":
                isEnd = true;
        }
        if (isEnd === true) {
            break;
        }
    }
    console.log(targets.join('|'));

    function shoot(index, power) {
        if (index >= 0 && index <= targets.length - 1) {
            let shotedIndex = Number(targets.splice(index, 1));
            if (shotedIndex > 0) {
                shotedIndex -= power;
                targets.splice(index, 0, shotedIndex);
            } else {
                targets.splice(index, 1);
            }
            if (shotedIndex <= 0) {
                targets.splice(index, 1);
            }
        }
    }
    function add(index, value) {
        if (index >= 0 && index <= targets.length - 1) {
            targets.splice(index, 0, value)
        } else {
            console.log("Invalid placement!");
        }
    }
    function strike(index, radius) {
        if (index >= 0 && index <= targets.length - 1) {
            if ((index - radius >= 0) && index + 1 <= targets.length - radius) {
                targets.splice(index - radius, 2 * radius + 1)

            } else {
                console.log("Strike missed!");
            }
        } else {
            console.log("Strike missed!");
        }
    }
}
moovingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"])

