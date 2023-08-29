import { Component} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  public studentId:number = 1110;
  public studentName:string = 'David';
  public studentMarks:number = 420;
  
}
