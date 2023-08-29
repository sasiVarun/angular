var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Student;
}());
var s1 = new Student();
s1.firstName = 'Sasi';
s1.lastName = 'Maddi';
console.log(s1.getFullName());
var s2 = new Student();
s2.firstName = 'Sasi';
s2.lastName = 'Varun';
console.log(s2.getFullName());
