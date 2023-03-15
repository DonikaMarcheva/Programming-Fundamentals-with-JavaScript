function furniture(input){
    let pattern=/>>(?<name>[A-Za-z]+)<<(?<price>\d+\.*\d*)!(?<quantity>\d+)/g
    let totalPrice=0;
    let i=0;
    let data;
    console.log(`Bought furniture:`);
    while((data= input[i]) !=="Purchase"){
        let match=pattern.exec(data);
        while(match !==null){
            let furnitureName=match.groups.name;
            console.log(furnitureName);
            let price=match.groups.price;
            let quantity=match.groups.quantity;
            totalPrice+=price*quantity;
            match=pattern.exec(data);
        }
        i++
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
    }

furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
)