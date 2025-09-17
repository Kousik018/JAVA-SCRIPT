class Student {
  constructor(id, name, age, gender, phone, email) {
    Object.assign(this, { id, name, age, gender, phone, email });
  }

  info() {
    console.log(`ID: ${this.id}\nName: ${this.name}\nAge: ${this.age}\nGender: ${this.gender}\nPhone: ${this.phone}\nEmail: ${this.email}\n` );
  }
}

const students = [];

function addStudent(id, name, age, gender, phone, email) {
    return students.push(new Student(id, name, age, gender, phone, email));
}

function showAll() {
    return students.forEach(s => s.info());
}

addStudent("S1", "ko", 20, "F", "12345", "a@mail.com");
addStudent("S2", "kousik", 22, "M", "67890", "b@mail.com");
showAll();       

