function passValidator(password) {
    let passwordLength = password.length;
    let digitsCounter = 0;
    let passwordIsValid = true;
    if (passwordLength < 6 || passwordLength > 10) {
        console.log("Password must be between 6 and 10 characters");
        passwordIsValid = false;
    }

    for (let i = 0; i < passwordLength; i++) {
        let charASCIIValue = password[i].charCodeAt();
        if (charASCIIValue < 48 || (charASCIIValue > 57 && charASCIIValue < 65) || (charASCIIValue > 90 && charASCIIValue < 97) || charASCIIValue > 122) {
            console.log("Password must consist only of letters and digits");
            passwordIsValid = false;
            break;
        }
        if (charASCIIValue >= 48 && charASCIIValue <= 57) {
            digitsCounter++;
        }
    }
    if (digitsCounter < 2) {
        console.log("Password must have at least 2 digits");
        passwordIsValid = false;
    }
    if (passwordIsValid === true) {
        console.log("Password is valid");
    }
}
passValidator('logIn')