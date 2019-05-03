import { Product } from './../models/product.model';
import { OrderItem } from './../models/orderItem.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private orderItems: OrderItem[] = [];
  public cartObservable: Subject<any> = new Subject<any>();

  public ORDERS_URL = environment.baseUrl + 'orders';
  constructor(private httpClient: HttpClient) { }

  updateCart(orderItem: OrderItem) {
        if (this.indexOf(orderItem) === -1) {
            if (orderItem.quantity !== 0) {
                this.orderItems.push(orderItem);
            }
        } else {
            const index = this.indexOf(orderItem);
            if (orderItem.quantity === 0) {
                this.orderItems.splice(index, 1);
            } else {
                this.orderItems.splice(index, 1, orderItem);
            }
        }
    }
  addItem(orderItem: OrderItem) {
      if (this.indexOf(orderItem) === -1) {
        orderItem.quantity = 1;
        orderItem.subtotal = orderItem.quantity * orderItem.product.price;
        this.orderItems.push(orderItem);
      } else {
          const index = this.indexOf(orderItem);
          this.orderItems[index].quantity++;
          this.orderItems[index].subtotal = this.orderItems[index].quantity * this.orderItems[index].product.price;
      }
  }

  removeItem(orderItem: OrderItem) {
    if (this.indexOf(orderItem) !== -1) {
        const index = this.indexOf(orderItem);
        if (this.orderItems[index].quantity > 1) {
            this.orderItems[index].quantity--;
            this.orderItems[index].subtotal = this.orderItems[index].product.price * this.orderItems[index].quantity;
        } else {
            this.orderItems.splice(index, 1);
        }
      }
  }

 indexOf(orderItem: OrderItem) {
    for (let index = 0; index < this.orderItems.length; index++) {
        if (this.orderItems[index].product.SKU === orderItem.product.SKU) {
            return index;
        }
    }
    return -1;
}

  getCartItems() {
      return this.orderItems;
  }

  setCartItems(cartItems: OrderItem[]) {
      const itemsCount = cartItems.length;
      for ( let i = 0; i < itemsCount ; i++) {
          this.orderItems.push(cartItems[i]);
      }
  }
  clearCart() {
      this.orderItems.splice(0, this.orderItems.length);
  }

  saveOrder(data) {
    return this.httpClient.post(this.ORDERS_URL, data).pipe(
      map(response => response),
      catchError((error: Response) => observableThrowError(error)));
  }

  getOrders(fromDate, toDate, orderStatus) {
     let params = new HttpParams();
     params = params.append('fromDate', fromDate);
     params = params.append('toDate', toDate);
     params = params.append('orderStatus', orderStatus);
     return this.httpClient.get(this.ORDERS_URL, {params: params}).pipe(
      map(response => response),
      catchError(err => Promise.reject(err)));
  }

  getOrderDetails(orderId) {
      return this.httpClient.get(this.ORDERS_URL + '/' + orderId).pipe(
          map(response => response),
          catchError(err => Promise.reject(err)));
  }

  updateOrder(data, orderId) {
    return this.httpClient.patch(this.ORDERS_URL + '/' + orderId, data).pipe(
      map(response => response),
      catchError((error: Response) => observableThrowError(error)));
  }
}
