function gladiatorInventory(array) {
    let inventory = array.shift().split(' ');

    for (let commands of array) {
        let command = commands.split(' ');
        let action = command[0];
        let equipment = command[1];
        switch (action) {
            case "Buy":
                buy(equipment);
                break;
            case "Trash":
                trash(equipment);
                break;
            case "Repair":
               repair(equipment);
                break;
            case "Upgrade":
                upgrade(equipment);
                break;
        }
        function buy(string){
            if(!inventory.includes(string)){
                inventory.push(string);
            }
        }
        function trash(string){
            if(inventory.includes(string)){
                let index=inventory.indexOf(string);
                inventory.splice(index,1);
            }
        }
        function repair(string){
            if(inventory.includes(string)){
                let index=inventory.indexOf(string);
                inventory.splice(index,1);
                inventory.push(string);
            }
        }
        function upgrade(string){
            let searchedWords=string.split('-')
            let equipmentToUpgrade=searchedWords[0];
            if(inventory.includes(equipmentToUpgrade)){
                let index=inventory.indexOf(equipmentToUpgrade);
                inventory.splice(index+1,0,string);
            }
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])

// gladiatorInventory(['SWORD Shield Spear',
// 'Trash Bow',
// 'Repair Shield',
// 'Upgrade Helmet-V'])