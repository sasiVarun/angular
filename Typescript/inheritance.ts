class Employee{
    id:number;
    name:string;

    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
    }

    display(){
        console.log("Parent Class: " + this.id);
        console.log("Parent Class: " + this.name);
    }
}

class Lecture extends Employee{
    subject:string;

    constructor(p_id:number,p_name:string,subject:string){
        super(p_id,p_name);
        this.subject = subject;
    }

    display(){
        super.display();
        console.log(this.subject)
    }
}

let lec1:Lecture = new Lecture(256,'Ashish','Java');
lec1.display();

/* We can create object of parent class type too */
let lec2:Employee = new Lecture(313,'Ravi','CSS');
lec2.display();