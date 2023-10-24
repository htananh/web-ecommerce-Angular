import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  navigateTo(cart:any){
    
  }
 
  constructor(private router:Router){
    
  }
  @Output() isform = new EventEmitter<boolean>();
  Login(){
    const booleanValue = true;
    this.isform.emit(booleanValue);
  }
  navigateToProducts(){
    this.router.navigate(['product/product/all']);
  }
  navigateToHome(){
    this.router.navigate(['/']);
  }
  navigateToNews(){
    this.router.navigate(['news']);
  }
  navigateToContact(){
    this.router.navigate(['contact']);
  }
  navigateToCart(){
    this.router.navigate(['cart']);
  }
}
