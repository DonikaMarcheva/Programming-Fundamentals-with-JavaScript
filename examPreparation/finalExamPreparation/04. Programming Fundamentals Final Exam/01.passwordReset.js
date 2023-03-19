function passwordReset(array){
    let password= array.shift();
    let command=array.shift();
    while(command !=="Done"){
        let commandInfo=command.split(' ');
        let commandWord=commandInfo.shift();
        if(commandWord==="TakeOdd"){
            let newOddPass="";
        for(let i=0;i<password.length;i++){
            if(i%2 !==0){
                newOddPass+=password[i];
            }
        }
        console.log(newOddPass);
        password=newOddPass;
        }
        else if(commandWord==="Cut"){
            let index= Number(commandInfo[0]);
            let length=Number(commandInfo[1]);
            password=password.substring(0,index)+password.substring(index+length,password.length);
            console.log(password);
        }else{
            let substring=commandInfo[0];
            let substitude=commandInfo[1];
            if(password.includes(substring)){
                let newPass='';
                let length=substring.length
                for (let i=0;i<password.length;i++) {
                    let word=password.substring(i,i+length);
                    if(word===substring){
                        newPass+=substitude;
                        i+=length-1;
                    }else{
                        newPass+=password[i];
                    }
                }
                password=newPass;
                console.log(password);
            }else{
                console.log("Nothing to replace!");
            }
        }
        command=array.shift();
    }
    console.log(`Your password is: ${password}`);
}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])

