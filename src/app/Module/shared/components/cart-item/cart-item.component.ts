import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() item:any;
  updateItem(num:number){
    console.log(num);
  }
  removeCart(){
    console.log("removeCart");
    
  }
}
