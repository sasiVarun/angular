/* Class: It is a user defined datatype */
class Employee{
    
    /* properties: Used to get/set the value */
    empId:number = 101;
    empName:string = 'Sasi';
    empSalary:number = 230989.89;

    /* function: Its is used for some logic */
    display(){
        /* this: refers to current object that is using current piece of code */
        console.log('Employee ID: ' + this.empId);
        console.log('Employee Name: ' + this.empName);
        console.log('Employee Salary: ' + this.empSalary);
    }
}

/* Object: It is an instance of the class, used to access the members of class */
let employee1:Employee = new Employee()
employee1.display();