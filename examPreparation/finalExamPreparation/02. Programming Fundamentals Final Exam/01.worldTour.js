function worldTour(input){
    let destinations=input.shift();
    let commandInfo=input.shift();
    while(commandInfo!=="Travel"){
        let command=commandInfo.split(':')[0];
        if(command==="Add Stop"){
            let index=Number(commandInfo.split(':')[1]);
            let newText=commandInfo.split(':')[2];
            if(index>=0&& index<destinations.length){
                destinations=destinations.substring(0,index)+newText+destinations.substring(index);
            }
            console.log(destinations);
        }else if(command==="Remove Stop"){
            let startIndex=Number(commandInfo.split(':')[1]);
            let endIndex=Number(commandInfo.split(':')[2]);
            if((startIndex>=0&&startIndex<destinations.length) && (endIndex>=0&&endIndex<destinations.length)){
                let textToRemove=destinations.substring(startIndex,endIndex+1);
                destinations=destinations.replace(textToRemove,"");
            }
            console.log(destinations);
        }else{
            let oldText=commandInfo.split(':')[1];
            let newText=commandInfo.split(':')[2];
            if(destinations.includes(oldText)){
                destinations=destinations.split(`${oldText}`).join(`${newText}`)
            }
            console.log(destinations);
        }
        commandInfo=input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${destinations}`);
}
worldTour((["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
)
console.log("++++++++++++++++++++++++++");
worldTour((["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])
)