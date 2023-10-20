import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { iphone } from 'src/Data/iphone';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  selectType:any;
  selectColor:any;
  iphone:any;
  constructor(private router:Router){}
  ngOnInit() {
    this.iphone=iphone.splice(0,8);
  }
  handleAddtoCart(){
    this.router.navigate(['cart']);
    console.log( this.selectType,this.selectColor );
  }
}
