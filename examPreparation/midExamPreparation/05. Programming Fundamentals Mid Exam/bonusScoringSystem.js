function bonusSystem(array){
    //{total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})
let studentsCount=Number(array.shift());
let lecturesNum=Number(array.shift());
let additionalBonus=Number(array.shift());
let bestBonus=0;
let bestAttendance=0;
for(let i=0;i<studentsCount;i++){
    let attendances=Number(array[i]);
let totalBonus=(attendances/lecturesNum)*(5+additionalBonus);
if(totalBonus>bestBonus){
    bestBonus=totalBonus;
    bestAttendance=attendances;
}
}
console.log(`Max Bonus: ${Math.ceil(bestBonus)}.`);
console.log(`The student has attended ${Math.ceil(bestAttendance)} lectures.`)
}
bonusSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])
  
