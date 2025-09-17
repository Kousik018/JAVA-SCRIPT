class Student {
    #marks = []; 

    constructor(id, name, age, gender, phone, email, status) {
        Object.assign(this, { id, name, age, gender, phone, email, status });
    }

    // Method to display student info
    info() {
console.log(`ID: ${this.id}Name: ${this.name}Age: ${this.age}Gender: ${this.gender}Phone: ${this.phone}
Email: ${this.email}Status: ${this.status}Marks: ${this.getMarks().join(", ") || "No marks yet"}---`);
    }

addMark(mark) {
    if (typeof mark === 'number' && mark >= 0 && mark <= 100) {
            this.#marks.push(mark);
    } else {
            throw new Error("Invalid mark. Must be a number between 0 and 100.");
    }
}
getMarks() {
        return [...this.#marks];                   
    }

}
const students = [];

const addStudent = (id, name, age, gender, phone, email, status) =>
    students.push(new Student(id, name, age, gender, phone, email, status));
const showAll = () => students.forEach(s => s.info());

addStudent("S1", "ko", 20, "F", "12345", "a@mail.com", "Single");
addStudent("S2", "kousik", 22, "M", "67890", "b@mail.com", "Married");
students[0].addMark(85);
students[0].addMark(90);
students[1].addMark(78);
showAll();

