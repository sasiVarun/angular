//1
import {Component} from '@angular/core'

//2
@Component({
    selector:'sample',
    templateUrl:'./sample.component.html',
    styleUrls:['./sample.component.css']
})

//3
export class Sample{
    public empId:number = 101;
    public empName:string = 'Raj';
    public empSalary:number = 2547;
}