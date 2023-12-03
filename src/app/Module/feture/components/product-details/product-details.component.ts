import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dataProduct } from 'src/Data/data';

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
  dataProduct:any;
  id:any;
  cmtInput:any;
  @ViewChild('Comment', {static: false }) Comment !: ElementRef;
  constructor(private route: ActivatedRoute,
    private router:Router,
    private cartService: CartService
    ){}
  ngOnInit() {
    this.dataProduct=dataProduct;
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
    // console.log(this.selectType);
  }
  NumberRandom= Math.floor((Math.random()*1000));
  handleCmt(){
    const commentHtml = `
    <p class="font-bold">Khách hàng ${this.NumberRandom}</p>
    <p>${this.cmtInput}</p>`;
    this.Comment.nativeElement.innerHTML += commentHtml;

  }


}
