class Students{
    getInfo(){
        return " Student Info "
    }
}

class stud1 extends Students{
    getInfo(){
        return " Student 1 Info "
    }
}

class stud2 extends Students{
    getInfo(){
        return " Student 2 Info "
    }
}

stud.forEach(stud=>console.log(stud.getInfo()));
const  stud=[new stud1(), new stud2()];
