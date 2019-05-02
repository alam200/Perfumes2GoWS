export class Product {
    _id: string;
    brand: string;
    type: string;
    SKU: string;
    productCode: string;
    stock: number;
    description: string;
    price: number;
    image: string;
    quantity: number;
    public constructor() {
      this.quantity = 0;
    }
  }


  // export class Product {
  //   _id: string;
  //   brand: string;
  //   type: string;
  //   SKU: string;
  //   stock: number;
  //   description: string;
  //   price: number;
  //   image: string;
  //   quantity: number;
  //   subtotal: number;
  //   createdAt: string;
  //   updatedAt: string;
  //   __v: number;
  //   productCode: string;
  //   category: string;
  //   productStatus: string;
  //   public constructor() {
  //     this.quantity = 0;
  //     this.image = '/products/product_placeholder.png';
  //     this.category = 'normal';
  //     this.productStatus = 'active';
  //   }
  // }

