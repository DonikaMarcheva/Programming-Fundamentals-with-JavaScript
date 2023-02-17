function reception(array){
    let receptionistCapacityPerHour=Number(array[0])+Number(array[1])+Number(array[2]);
    let students=Number(array[3]);
    let hours=0;
    while(students>0){
        hours++;
        students-=receptionistCapacityPerHour;
        if(hours%4===0){
            hours++;
            continue;
        }
    }
        console.log(`Time needed: ${hours}h.`);
}
reception(['3','2','5','40'])