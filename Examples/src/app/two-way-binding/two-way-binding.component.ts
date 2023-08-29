import {Component} from '@angular/core';

@Component({
  selector: 'twoway',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  public Name:string='';
  public Price:number=0;
  public ShippedTo:string='';
  public IsInStock:boolean=false;
}
