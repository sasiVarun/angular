import { Component} from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public product={
    Name:'OnePlus',
    Price:34000,
    Qty:3,
    mfd:new Date('2020/03/15'),
    isAvailable: true,
    Image:'./assets/Oneplus.jpg'
  };

}
