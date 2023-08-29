var Student = /** @class */ (function () {
    /* Constructor: Used to initialize the data */
    function Student(id, name, marks) {
        this.studentId = id;
        this.studentName = name;
        this.marks = marks;
    }
    Student.prototype.display = function () {
        console.log("Student Id: ".concat(this.studentId, ", \n        Student Name: ").concat(this.studentName, " and Student Marks: ").concat(this.marks));
    };
    return Student;
}());
var std1 = new Student(233, 'Deepak', 39);
var std2 = new Student(455, 'Krishna', 57);
std1.display();
std2.display();
/* Optional parameter example */
var std3 = new Student(344, 'Nikhil');
std3.display();
