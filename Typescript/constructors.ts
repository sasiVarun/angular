class Student{
    studentId:number;
    studentName:string;
    marks:number;

    /* Constructor: Used to initialize the data */
    constructor(id:number,name:string,marks?:number){
        this.studentId = id;
        this.studentName = name;
        this.marks = marks;
    }

    display(){
        console.log(`Student Id: ${this.studentId}, 
        Student Name: ${this.studentName} and Student Marks: ${this.marks}`)
    }
}

let std1:Student = new Student(233,'Deepak',39);
let std2:Student = new Student(455,'Krishna',57);
std1.display();
std2.display();

/* Optional parameter example */
let std3:Student = new Student(344,'Nikhil');
std3.display();