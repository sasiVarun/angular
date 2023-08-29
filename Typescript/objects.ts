let employee = function(){
    let empId:number = 101;
    let empName:string = 'Sasi';
    let empStatus:boolean = true;

    function display(){
        console.log(`Employee ID: ${empId}
        Employee Name: ${empName}
        Employee Status: ${empStatus}`)
    }
}

let emp1 = new employee();
console.log(emp1.empId);