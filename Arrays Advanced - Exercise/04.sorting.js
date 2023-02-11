function sorting(arr) {
    let sortedArr = [];
    let ascendingNum = arr.sort((a, b) => a - b)
    let lengthOfArr = arr.length
    for (let i = 0; i < lengthOfArr; i++) {
        if (i % 2 === 0) {
            let addedBiggestNum = ascendingNum.pop();
            sortedArr.push(addedBiggestNum);
        } else {
            let addedSmallestNum = ascendingNum.shift();
            sortedArr.push(addedSmallestNum);
        }
    }
    console.log(sortedArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])