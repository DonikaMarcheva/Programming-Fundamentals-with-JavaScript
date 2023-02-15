function inventory(array) {
    let items = array.shift().split(', ');
    let isEnd=false;
    for(let i=0;i<array.length;i++){
        let commands=array[i];
        let command=commands.split(' - ');
        let keyWord=command[0];
        switch(keyWord){
            case 'Craft!':isEnd=true;break;
            case 'Collect':add(command[1]);break;
            case 'Drop': drop(command[1]);break;
            case 'Combine Items': 
            let itemsToCombine=command[1].split(':');
            let oldItem=itemsToCombine[0];
            let newItem=itemsToCombine[1];
            combine(oldItem,newItem);
            break;
            case 'Renew':renew(command[1]);break;
        }
        if (isEnd===true){
            break;
        }
    }
    console.log(items.join(', '));

    function add(item) {
        if (!items.includes(item)) {
            items.push(item);
        }
    }
    function drop(item) {
        if (items.includes(item)) {
            let removedItemIndex = items.indexOf(item);
            items.splice(removedItemIndex, 1);
        }
    }
    function combine(oldItem,newItem){
        if (items.includes(oldItem)) {
            let oldItemIndex = items.indexOf(oldItem);
            items.splice(oldItemIndex+1, 0,newItem);
        }
    }
    function renew(item){
        if (items.includes(item)) {
            let removedItemIndex = items.indexOf(item);
           let removedItem=items.splice(removedItemIndex, 1);
           items.push(removedItem);
    }
}
}
inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]  
  )