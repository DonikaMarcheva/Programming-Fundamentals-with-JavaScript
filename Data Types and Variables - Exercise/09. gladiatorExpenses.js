function gladiatorExpenses(lostFightsCount,helmetPrice,swordPrice,shieldPrice,armorPrice){
    let helmetQuantity=0;
    let swordQuantity=0;
    let shieldQuantity=0;
    let armorQuantity=0;

    for(let i=1; i<=lostFightsCount;i++){
    if(i%2==0){
        helmetQuantity+=1;
    }if(i%3==0){
        swordQuantity+=1;
    }if(i%6==0){
        shieldQuantity  +=1;
    }if(i%12==0){
        armorQuantity+=1;
    }
    
}
let totalPrice=helmetPrice*helmetQuantity+swordPrice*swordQuantity+shieldPrice*shieldQuantity+armorPrice*armorQuantity;
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200    
    )