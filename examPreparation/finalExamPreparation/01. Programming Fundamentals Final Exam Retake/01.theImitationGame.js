function imitationGame(input){
    let message=input.shift();
    let command="";
    while(command !=="Decode"){
        command=input.shift();
        let commandArr=command.split('|');
        let commandWord=commandArr.shift();
        if(commandWord==="Move"){
            let leterCount=Number(commandArr.shift());
            let substring=message.substring(0,leterCount);
            message=message.substring(leterCount,message.length)+substring;
        }else if(commandWord==="Insert"){
            let index=Number(commandArr.shift());
            let value=commandArr.shift();
            message=message.substring(0,index)+value+message.substring(index,message.length);
        }else{
            let substring=commandArr.shift();
            let replacement=commandArr.shift();
            while(message.includes(substring)){
                message=message.replace(substring,replacement);
            }
        }
    }
console.log(`The decrypted message is: ${message}`);
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
)