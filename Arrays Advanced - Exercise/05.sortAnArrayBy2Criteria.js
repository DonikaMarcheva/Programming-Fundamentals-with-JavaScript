function sort(arr) {
    let sortedElements = arr.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length);
    console.log(sortedElements.join('\n'));
}
sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])