class Student {
  #fees; // private field 

  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.#fees = 0;
  }

  // Encapsulation
  setFees(amount) {
    if (amount > 0) {
      this.#fees = amount;
    } else {
      console.log("Invalid fee amount!");
    }
  }

  getFees() {
    return this.#fees;
  }

  // Abstraction
  #calculateDiscountedFees() {
    return this.#fees > 10000 ? this.#fees * 0.9 : this.#fees;
  }

  calculateFinalFees() {
    return this.#calculateDiscountedFees();
  }

  // Polymorphism
  getDetails() {
    return `${this.name}, Age: ${this.age}, Course: ${this.course}`;
  }
}

// Inheritance
class SchoolStudent extends Student {
  constructor(name, age, course) {
    super(name, age, course);
  }

  // Polymorphism: Overriding getDetails()
  getDetails() {
    return `School Student ${this.name} joined the course: ${this.course}`;
  }
}

// Inheritance: CollegeStudent extends Student
class CollegeStudent extends Student {
  constructor(name, age, course) {
    super(name, age, course);
  }
}

// Creating student objects
const s1 = new SchoolStudent("Ravi", 14, "Mathematics");
const s2 = new CollegeStudent("Anita", 19, "Computer Science");

s1.setFees(8000);
s2.setFees(15000);

console.log(s1.getDetails());
console.log("Fees to pay:", s1.calculateFinalFees());

console.log(s2.getDetails());
console.log("Fees to pay:", s2.calculateFinalFees());