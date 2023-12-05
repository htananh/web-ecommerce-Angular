import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { dataProduct } from 'src/Data/data';

import { iphone } from 'src/Data/iphone';
import { AuthComponent } from 'src/app/Module/auth/auth.component';
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
  optional:boolean = false;
  cmtInput:any;
  @ViewChild('Comment', {static: false }) Comment !: ElementRef;
  @ViewChild ('SelectOption', {static: false}) SelectOption !: ElementRef;
  constructor(private route: ActivatedRoute,
    private router:Router,
    private cartService: CartService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
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
    Capacity: {
      Capacity: '', quantity: 0, discountedPrice: 0
    },
    ColorType: '',

  };
  


  handleAddtoCart(item: Product ){
    if (!this.selectType || !this.selectColor) {
      this.optional = true;
      if (this.SelectOption) {
        if (!this.selectType && !this.selectColor) {
        
          
          this.SelectOption.nativeElement.innerHTML = "Vui lòng chọn dung lượng và màu";
        } else if (!this.selectType) {
          
          
          this.SelectOption.nativeElement.innerHTML = "Vui lòng chọn dung lượng";
        } else {
          
          
          this.SelectOption.nativeElement.innerHTML = "Vui lòng chọn màu";
        }
       
      }
      
     
      return;
    }
    else{
      this.optional = false;
     this.productType = {
      Capacity: this.selectType,
      ColorType: this.selectColor
    };
    console.log(this.productType);
    
    this.cartService.addToCart(item, this.productType)
    // console.log(this.cartService.getItems());
    // console.log(this.cartService.getType(item));
    // console.log(this.cartService.getTypea(this.productType));
    
    // console.log(this.cartService.getproductType(item));
    
    this.router.navigate(['cart']);
    // console.log( this.selectType,this.selectColor );
        }
  }
  onRadioChange(){
    // console.log(this.selectType);
  }
  NumberRandom= Math.floor((Math.random()*1000));
  handleCmt(){
    // let date = new Date();
    // let day = date.getDay();
    // let month = date.getMonth();
    // let year = date.getFullYear();
    // <p> Ngày ${day},tháng ${month},năm ${year}</p>
    const commentHtml = `
   
    <p class="font-bold">Khách hàng ${this.NumberRandom}</p>
    <p>${this.cmtInput}</p>`;
    this.Comment.nativeElement.innerHTML += commentHtml;
    // this.dialog.open(AuthComponent,{
   
     
    // })
  }


}
