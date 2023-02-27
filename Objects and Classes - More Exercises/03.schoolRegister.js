function schoolRegister(array) {
    let studentDetails = [];
    let names = [];
    let scores = [];
    for (let line of array) {
        let nameInfo = line.split(', ')[0];
        let name = nameInfo.split(': ')[1];
        let gradeInfo = line.split(', ')[1];
        let grade = gradeInfo.split(': ')[1]
        let scoreInfo = line.split(', ')[2];
        let score = scoreInfo.split(': ')[1];
        let reg = {
            name,
            grade: Number(grade),
            score: Number(score)
        }
        studentDetails.push(reg);
    }
    let students = studentDetails.filter(x => x.score > 3.00);
    students.sort((a, b) => a.grade - b.grade);
    let initialGrade = students[0].grade;
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade === initialGrade) {
            names.push(students[i].name);
            scores.push(students[i].score);

        }
        else {
            console.log(initialGrade + 1 + " " + "Grade");
            console.log(`List of students: ${names.join(", ")}`);
            console.log(`Average annual score from last year: ${((scores.reduce((a, c) => a + c, 0) / scores.length)).toFixed(2)}`);
            console.log(" ");
            initialGrade=students[i].grade;
            i -= 1;
            names = [];
            scores = [];
        }
    }
    console.log(initialGrade + 1 + " " + "Grade");
    console.log(`List of students: ${names.join(", ")}`);
    console.log(`Average annual score from last year: ${((scores.reduce((a, c) => a + c, 0) / scores.length)).toFixed(2)}`);
}
schoolRegister([
    'Student name: George, Grade: 5, Grduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ])