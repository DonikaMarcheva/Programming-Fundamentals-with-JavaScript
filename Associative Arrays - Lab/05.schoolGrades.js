function schoolGrade(input) {
    let schoolGrade = {};
    for (let data of input) {
        let token = data.split(' ');
        let name = token.shift();
        let grades = token.join(',');
        if (schoolGrade[name]) {
            schoolGrade[name] = schoolGrade[name] + ',' + grades;
        } else {
            schoolGrade[name] = grades;
        }
    }
    let schoolGradeArr = Object.entries(schoolGrade);
    let sortedSchoolGrades = schoolGradeArr.sort((a, b) => a[0].localeCompare(b[0]));
    for (let entry of sortedSchoolGrades) {
        let schoolName = entry[0];
        let gradesData = entry[1];
        let gradesArr = gradesData.split(',');
        let gradeSum = gradesArr.map(Number).reduce((a, c) => a + c, 0);
        let gradesDataLength = gradesArr.length;
        let averageGrade = gradeSum / gradesDataLength;
        console.log(`${schoolName}: ${averageGrade.toFixed(2)}`);
    }
}
schoolGrade(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)