import { Component } from '@angular/core';
import { filterMultipleColor, filterPrice, filterBrand } from './FilterData';
import { iphone } from 'src/Data/iphone';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { dataProduct } from 'src/Data/data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  filterColor: any;
  filterPrice: any;
  filterBrand: any;
  products: any;
  brand: any;
  colors: any;
  price: any;
  
  constructor(private route:Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(){
    this.filterColor =filterMultipleColor;
    this.filterPrice =filterPrice;
    this.filterBrand =filterBrand;
    this.products=dataProduct;
    this.activatedRoute.queryParams.subscribe((params: Params) =>{
      this.brand = params['brand'];
      this.colors = params['color']?.split(',');
      this.price = params['price'];
      console.log(this.price);
      
    });
   
    
    
  }


  
  handlefilterMuiltiple(value: string, sectionId: string){
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };

    
    const filterValues = queryParams[sectionId] ? queryParams[sectionId].split(',') : [];

    const valueIndex = filterValues.indexOf(value);

    
  if (valueIndex !== -1) {
    filterValues.splice(valueIndex, 1);
  } else {
    filterValues.push(value);
  }

  queryParams[sectionId] = filterValues.length > 0 ? filterValues.join(',') : undefined;
  
  this.route.navigate([], { queryParams });

  }
  handlefilterSimple(value: string, sectionId: string){
    const queryParams={ ...this.activatedRoute.snapshot.queryParams};

    queryParams[sectionId] = value;
  
    this.route.navigate([], { queryParams });
  }
  sortItems(value:string){
    if(value =='l2h'){
      this.products.sort((a:any, b:any) => Number(a.discountedPrice) - Number(b.discountedPrice));
    }else if(value =='h2l'){
      this.products.sort((a:any, b:any) => Number(b.discountedPrice) - Number(a.discountedPrice));
    }
  }
}
