import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { RouterLinkActive, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductCartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLinkActive,
    RouterModule 
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ProductCartComponent,
    CartItemComponent
  ]
})
export class SharedModule { }
