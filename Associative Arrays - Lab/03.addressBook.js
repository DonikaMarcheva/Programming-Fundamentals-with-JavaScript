function addressBook(input) {
    let addressBook = {};
    for (let data of input) {
        let [name, address] = data.split(':');
        addressBook[name] = address;
    }
    let addressBookArr = Object.entries(addressBook);
    addressBookArr.sort((a, b) => a[0].localeCompare(b[0]));
    for (let entry of addressBookArr) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
)