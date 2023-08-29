var employee = function () {
    var empId = 101;
    var empName = 'Sasi';
    var empStatus = true;
    function display() {
        console.log("Employee ID: ".concat(empId, "\n        Employee Name: ").concat(empName, "\n        Employee Status: ").concat(empStatus));
    }
};
var emp1 = new employee();
console.log(emp1.empId);
