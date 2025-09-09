// Global variable
const passingMarks = 50;

function manageStudentGrades(students) {

    const upperCaseStudents = students.map(function (student) {
        return {
            name: student.name.toUpperCase(),
            marks: student.marks
        };
    });


    // 2. Filter students who scored 50 or above
    const passedStudents = upperCaseStudents.filter(student => student.marks >= passingMarks);

    // 3. Display each student's name and grade
    passedStudents.forEach(student => {

        let grade;
        if (student.marks >= 90) grade = "A+";
        else if (student.marks >= 75) grade = "A";
        else if (student.marks >= 60) grade = "B";
        else grade = "C";

        const shortName = student.name.slice(0, 3); // first 3 letters
        const hasA = student.name.includes("A"); // includes 'A'

        console.log(`Full Name: ${student.name}, Marks: ${student.marks}, Grade: ${grade} Includes 'A': ${hasA} `);


    });
}


const students = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 92 },
    { name: "Mark", marks: 45 },
    { name: "Sophia", marks: 76 }
];
manageStudentGrades(students);