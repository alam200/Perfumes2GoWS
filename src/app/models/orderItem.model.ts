import { Product } from './product.model';
export class OrderItem {
    product: Product;
    quantity: number;
    subtotal: number;

    setOrderItem(product: Product, quantity: number, subtotal: number) {
      this.product = product;
      this.quantity = quantity;
      this.subtotal = subtotal;
    }
  }
