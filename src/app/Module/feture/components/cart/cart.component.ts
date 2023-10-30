import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  // cart=[1];
  cart = this.cartService.getItems();
  constructor(private router:Router,
  private cartService: CartService
    ){}
  navigateToCheckout(){
    this.router.navigate(['checkout']);
  }
}
