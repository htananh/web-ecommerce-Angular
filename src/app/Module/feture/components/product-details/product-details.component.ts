import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id:any;
  constructor(private route: ActivatedRoute,private router:Router){}
  ngOnInit() {
    this.iphone=iphone;
    this.route.params.subscribe(params => {
      const idParams = parseInt(params['id'], 10);
      this.id = idParams;
      console.log(this.id);
    })
  }
  handleAddtoCart(){
    this.router.navigate(['cart']);
    console.log( this.selectType,this.selectColor );
  }
  onRadioChange(){
    console.log(this.selectType);
  }
}
