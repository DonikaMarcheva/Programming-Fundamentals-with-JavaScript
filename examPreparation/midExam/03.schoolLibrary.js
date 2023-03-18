function schoolLibrary(array) {
    let booksList = array.shift().split('&');
    let command = array.shift().split(' | ');
    while (command[0] != "Done") {
        let action = command[0];
        switch (action) {
            case "Add Book": add(command[1]); break;
            case "Take Book": take(command[1]); break;
            case "Swap Books": swap(command[1], command[2]); break;
            case "Insert Book": insert(command[1]); break;
            case "Check Book": check(command[1]); break;
        }
        command = array.shift().split(' | ');
    }
    console.log(booksList.join(', '));
    function add(bookName) {
        if (!booksList.includes(bookName)) {
            booksList.unshift(bookName);
        }
    }
    function take(bookName) {
        let index = booksList.indexOf(bookName);
        if (index > -1) {
            booksList.splice(index, 1);
        }
    }
    function swap(firstBook, secondBook) {
        let firstIndex = booksList.indexOf(firstBook);
        let secondIndex = booksList.indexOf(secondBook);
        if (firstIndex > -1 && secondIndex > -1) {
            booksList[firstIndex] = booksList.splice(secondIndex, 1, booksList[firstIndex]);
        }
    }
    function insert(bookName) {
        if (!booksList.includes(bookName)) {
            booksList.push(bookName);
        }
    }
    function check(index) {
        if (index >= 0 && index < booksList.length) {
            console.log(booksList[index]);
        }
    }
}
schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"])

