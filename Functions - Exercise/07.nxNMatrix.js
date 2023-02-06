function matrix(num){
    for (let i = 0; i < num; i++) {
    let string = "";
    for (let j = 0; j < num; j++) {
        if (j == num - 1) {
            string += num;
            break;
        }
        string += num + " ";
       
    }
    console.log(string)
}
    }
matrix(7)