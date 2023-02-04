function magicMatrices(input) {
    let sumCol = 0;
    let sumRow = 0;
    let rowArr = [];
    let colArr = [];
    for (let rows of input) {
        for (let row of rows) {
            sumRow += row;
        }
        rowArr.push(sumRow);
        sumRow = 0;
    }
    let i = 0;
    let row = input[0];
    while (i < row.length) {
        for (row of input) {
            sumCol += row[i];
        }
        colArr.push(sumCol);
        sumCol = 0;
        i++;
    }
    let areEqual = true;
    for (let row of rowArr) {
        for (let col of colArr) {
            if (row != col) {
                areEqual = false;
            }
        }
    }
    console.log(areEqual)
}
magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
)