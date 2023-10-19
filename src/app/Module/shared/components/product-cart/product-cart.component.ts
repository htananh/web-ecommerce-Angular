import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent {
  @Input() product:any
  constructor( private router:Router){}
  navigateTo(path:string) {
    console.log(path);
    
    this.router.navigate([path]);
  }
}
