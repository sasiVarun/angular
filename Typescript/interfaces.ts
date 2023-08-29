interface IStudent{
    firstName:string;
    lastName:string;
    getFullName():string;
}

class Student implements IStudent{
    firstName: string;
    lastName: string;
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

var s1:Student = new Student();
s1.firstName = 'Sasi';
s1.lastName = 'Maddi';
console.log(s1.getFullName());

/* We can create object of type Interface too */
var s2:IStudent = new Student();
s2.firstName = 'Sasi';
s2.lastName = 'Varun';
console.log(s2.getFullName());