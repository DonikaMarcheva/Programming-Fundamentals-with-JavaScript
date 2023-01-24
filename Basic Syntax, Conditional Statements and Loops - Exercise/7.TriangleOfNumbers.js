 function triangles(n) {
    let nums="";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            nums+=i+" ";
        }
        nums+="\n";
    }
    console.log(nums);
}
triangles(3)