class Student {
    constructor(name) {
        this.name = name;
        this._marks = null;
    }

    setmarks(marks) {
        if (marks >= 0 && marks <= 100)
            this._marks = marks;
        else
            console.log("Invalid marks");
    }

    getmarks() {                 
        if (this._marks !== null)
            return `${this._marks}`;
        else
            return "not valid";
    }
}

const s1 = new Student("kousik");
s1.setmarks(85);
console.log(s1.getmarks());
s1.setmarks(150);






















































































