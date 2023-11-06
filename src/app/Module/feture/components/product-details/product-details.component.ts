import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { iphone } from 'src/Data/iphone';
import { Product,ProductType } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  selectType:any;
  selectColor:any;
  iphone:any;
  id:any;
  constructor(private route: ActivatedRoute,
    private router:Router,
    private cartService: CartService
    ){}
  ngOnInit() {
    this.iphone=iphone;
    this.route.params.subscribe(params => {
      const idParams = parseInt(params['id'], 10);
      this.id = idParams;
      console.log(this.id);
    })
  }
  
  productType: ProductType = {
    Capacity: '',
    ColorType: '',

  };
  
  handleAddtoCart(item: Product ){
     this.productType = {
      Capacity: this.selectType,
      ColorType: this.selectColor
    };
    this.cartService.addToCart(item, this.productType)
    console.log(this.cartService.getItems());
    
    this.router.navigate(['cart']);
    // console.log( this.selectType,this.selectColor );
  }
  onRadioChange(){
    console.log(this.selectType);
  }
}
