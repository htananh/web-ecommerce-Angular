export interface Product {
    id: number;
    imageURL: string;
    brand: string;
    title: string;
    color: string;
    discountedPrice: number;
    price: number;
    discountPersent: string;
    type: ProductType[];
    quantity: number;
  }
export interface ProductType {
    Capacity: string;
    ColorType: string;
  }
export interface PriceTotals{
  totalPrice: number;
}