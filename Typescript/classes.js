var Employee = /** @class */ (function () {
    function Employee() {
        this.empId = 101;
        this.empName = 'Sasi';
        this.empSalary = 230989.89;
    }
    Employee.prototype.display = function () {
        console.log('Employee ID: ' + this.empId);
        console.log('Employee Name: ' + this.empName);
        console.log('Employee Salary: ' + this.empSalary);
    };
    return Employee;
}());
var employee1 = new Employee();
employee1.display();
