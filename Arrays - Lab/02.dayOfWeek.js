function dayOfWeek(day) {
    let week = ['Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'];
        if(day>=1 && day<=7){
        let searchedDay=week[day-1];
        console.log(searchedDay);
        }else{
            console.log("Invalid day!");
        }
}
dayOfWeek(11)