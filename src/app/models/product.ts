export interface Product {
    id: number;
    imageURL: string;
    brand: string;
    title: string;
    color: string;
    discountedPrice: string;
    price: string;
    discountPersent: string;
    type: ProductType[];
    quantity: number;
  }
export interface ProductType {
    Capacity: string;
    ColorType: string;
  }
  