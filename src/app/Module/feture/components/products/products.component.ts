import { Component } from '@angular/core';
import { filterSingle, filterMultiple } from './FilterData';
import { iphone } from 'src/Data/iphone';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  filterMuiltiple: any;
  filterSingle: any;
  products: any;
  constructor(private route:Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(){
    this.filterMuiltiple =filterMultiple;
    this.filterSingle =filterSingle;
    this.products=iphone;
   
    
    
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
}
