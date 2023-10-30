import { Injectable } from '@angular/core';
import { Product,ProductType } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  // productType: ProductType[] = [];
  constructor() { }

  addToCart(product: Product, productType: ProductType) {

    const updatedProduct: Product = {
      ...product,
      type: [productType] // Always create a new type array with the new productType
    };

    this.items.push(updatedProduct);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;}
}
