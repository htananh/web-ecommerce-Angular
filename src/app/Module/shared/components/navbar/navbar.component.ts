import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog'
import { AuthComponent } from 'src/app/Module/auth/auth.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  isNewsSelected: boolean = false;
  navigateTo(cart:any){
    
  }
 
  constructor(private router:Router, private diaolog:MatDialog, private activeRouter:ActivatedRoute){
    
  }
  @Output() isform = new EventEmitter<boolean>();
  HandleLogin(){
    this.diaolog.open(AuthComponent,{
     width:"30%",
     height:"65%",
     
    })
  }
  navigateToProducts(){
    this.router.navigate(['product/product/all']);
  }
  navigateToHome(){
    this.router.navigate(['/']);
  }
  navigateToNews(){
    this.isNewsSelected=true;
    this.router.navigate(['news']);
  }
  navigateToContact(){
    this.router.navigate(['contact']);
  }
  navigateToCart(){
    this.router.navigate(['cart']);
  }
  handleToProduct(brand: string){
   this.router.navigate(['products/product/all'],{queryParams: {brand: brand}});
    
  }
}
