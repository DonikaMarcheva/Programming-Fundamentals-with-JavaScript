function ladybugs(input) {
    let size = Number(input[0]);
    let ladyBugIndexes = input[1].split(" ").map(i => Number(i));
    let array = Array(size).fill(0);
    for (let i of ladyBugIndexes) {
        if (i >= 0 && i < size) array[i] = 1;
    }

    for (let i = 2; i < input.length; i++) {
        let command = input[i].split(" ");
        let start = Number(command[0]);
        let direction = command[1];
        let fly = Number(command[2]);

        if (array[start] === 1) {
            array[start] = 0;
            let next = direction === 'right' ? start + fly : start - fly;
            while (next >= 0 && next < size && array[next] === 1) {
                next = direction === 'right' ? next + fly : next - fly;
            }
            if (next >= 0 && next < size) array[next] = 1;
        }
    }

    return array.join(" ");
}
ladybugs([ 3, '5 1 2',
'0 right 1',
'1 right 1' ]
)
