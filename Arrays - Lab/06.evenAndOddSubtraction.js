function evenOddSubstraction(input){
        let sumEven = 0;
        let sumOdd=0;
        for (let i = 0; i < input.length; i++) {
            if (Number(input[i]) % 2 == 0) {
                sumEven += Number(input[i]);
            }else{
                sumOdd+=Number(input[i]);
            }

        }
        console.log(sumEven-sumOdd);
    }

evenOddSubstraction([3,5,7,9])