function shoppingList(array) {
    let productList = array.shift().split('!');
    let commands = '';
    let i = 0;
    while (array[i] != "Go Shopping!") {
        commands = array[i];
        let command = commands.split(' ');
        let keyWord = command[0];
        let item = command[1];
        switch (keyWord) {
            case 'Urgent': urgent(item); break;
            case 'Unnecessary': unnecessary(item); break;
            case 'Correct': correct(item, command[2]); break;
            case 'Rearrange': rearrange(item); break;
        }
        i++;
    }
    console.log(productList.join(', '));

    function urgent(item) {
        if (!productList.includes(item)) {
            productList.unshift(item);
        }
    }
    function unnecessary(item) {
        if (productList.includes(item)) {
            let index = productList.indexOf(item);
            productList.splice(index, 1);
        }
    }
    function correct(item, newItem) {
        if (productList.includes(item)) {
            let index = productList.indexOf(item);
            productList.splice(index, 1, newItem)
        }
    }
    function rearrange(item) {
        if (productList.includes(item)) {
            let index = productList.indexOf(item);
            let changedItem = productList.splice(index, 1);
            productList.push(changedItem);
        }
    }
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

