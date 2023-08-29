class Student{
    public stdId:number = 101;
    private stdName:string = 'Sasi';
    protected marks:number = 69;

    public display():void{
        console.log("Student Display");
        console.log(this.stdId);
        console.log(this.stdName);
        console.log(this.marks);
    }
}

class Test{

    f1(){
        let s1:Student = new Student();
        s1.display();
        s1.stdId;
    }
}

class C1 extends Student{

    constructor(){
        super();
        this.marks
    }
}