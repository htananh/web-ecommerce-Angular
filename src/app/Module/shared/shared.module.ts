import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCartComponent } from './components/product-cart/product-cart.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductCartComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ProductCartComponent
  ]
})
export class SharedModule { }
