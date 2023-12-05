import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { news } from 'src/Data/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  news:any;
  constructor(private router:Router){}
  ngOnInit() {
    this.news =news;
  }
  navigaToNewsDetails(num: number) {
    this.router.navigate(['news-details', num]);
    
    
  }

  navigateToProductsIphone(){
    this.router.navigate(['product/product/all'], {queryParams: {brand:'iphone'}});
  }
  navigateToProductsSamsung(){
    this.router.navigate(['product/product/all'], {queryParams: {brand:'samsung'}});
  }
  navigateToProductsOppo(){
    this.router.navigate(['product/product/all'], {queryParams: {brand:'oppo'}});
  }
  
}
