class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); 
    this.grade = grade;
  }
  study() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}
const student1 = new Student("kousik", 20, 10);
student1.introduce(); 
student1.study();     
