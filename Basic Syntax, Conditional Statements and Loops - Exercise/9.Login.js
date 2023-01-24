 function login(input) {
    let i = 0;
    let userName = input[i];
    i++;
    let reversePass = '';
    for (let j = userName.length - 1; j >= 0; j--) {
        reversePass += userName[j];
    }
    let newWord = input[i];
    let count = 1;
    while (newWord != reversePass) {
        if (count == 4) {
            console.log(`User ${userName} blocked!`);
            return;
        }

        else {
            count++;
            console.log('Incorrect password. Try again.');
            i++;
            newWord = input[i];
        }
    }
    console.log(`User ${userName} logged in.`);

}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])