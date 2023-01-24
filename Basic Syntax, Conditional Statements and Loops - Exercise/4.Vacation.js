// Friday	Saturday	Sunday
// Students	8.45	9.80	10.46
// Business	10.90	15.60	16
// Regular	15	20	22.50

function vacation(quantity, typyOfTheGroup, dayOfTheWeek) {
    let price;

    switch (dayOfTheWeek) {
        case "Friday":
            if (typyOfTheGroup === "Students") {
                price=8.45;
            }
            else if (typyOfTheGroup==="Business"){
                price=10.90;
            }
            else{
                price=15;
            }
            break;

            case "Saturday":
                if (typyOfTheGroup === "Students") {
                    price=9.80;
                }
                else if (typyOfTheGroup==="Business"){
                    price=15.60;
                }
                else{
                    price=20;
                }
                break;
                case "Sunday":
                    if (typyOfTheGroup === "Students") {
                        price=10.46;
                    }
                    else if (typyOfTheGroup==="Business"){
                        price=16;
                    }
                    else{
                        price=22.50;
                    }
                    break;
    }
    let totalPrice=quantity*price;
    if (typyOfTheGroup==="Students" && quantity>=30){
        totalPrice-=0.15*totalPrice;
    }
    else if(typyOfTheGroup==="Business" && quantity>=100){
        totalPrice=(quantity-10)*price;
    }
    else if (typyOfTheGroup==="Regular" && (quantity>=10 && quantity<=20 )){
        totalPrice-=0.05*totalPrice;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30,
    "Students",
    "Sunday"        
    )