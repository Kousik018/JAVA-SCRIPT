let students= [
        {stud: 'bob', marks: 80,},
          {stud: 'bobb', marks: 60,},
           {stud: 'bo', marks: 80,},
           { stud: 'bobbb', marks: 50,},
    ];

function cal(students){
    let total=0;
    for(i=0;i<students.length;i++){
        total=total+students[i].marks;
    }
    return total/students.length;
}
console.log(cal(students))


let findtopper=(students)=>{
    let toppers=students[0];
    for(i=1;i<students.length;i++){
        if(students[i].marks>=toppers.marks){
            toppers=students[i];
        }
    }
    return toppers;
}
console.log(findtopper(students).stud,findtopper(students).marks)










