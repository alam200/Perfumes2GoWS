import { Subscription } from 'rxjs/Subscription';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../../services/session.service';
import { OrderItem } from '../../../models/orderItem.model';
import { CartService } from '../../../services/cart.service';
import { AlertService } from '../../../common/alert/alert.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  addresses: any = [];
  model: any = {};
  userId: string;
  addressId = 'select'; // default select value
  cartSubscription: Subscription;
  constructor(private usersService: UsersService,
    private alertService: AlertService,
    private cartService: CartService,
    private session: SessionService,
    private router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.userId = this.session.retrieveUserId();
    this.getAddressesList();
  }

  onSubmit() {
    const orderData = this.prepareOrderData();
    this.spinner.show();
    this.cartService.saveOrder(orderData).subscribe(
      () => {
        this.spinner.hide();
        this.alertService.success('Order placed successfully.');
        this.session.removeCartData();
        this.cartService.clearCart();
        this.router.navigate(['/order-placed']);
        this.cartService.cartObservable.next('cartUpdated');

      },
      error => {
        this.spinner.hide();
        if (error.status === 0) {
          console.log('service down ', error);
        } else {
          this.alertService.error(error.statusText);
        }
      });
  }

  getAddressesList() {
    this.spinner.show();
    this.usersService.getAddresses(this.userId).subscribe(
      (resp) => {
        this.spinner.hide();
        this.addresses = resp;
      },
      error => {
        this.spinner.hide();
        if (error.status === 0) {
          console.log('service down ', error);
        } else {
          this.alertService.error(error.statusText);
        }
      });
  }

  prepareOrderData() {
    const orderData: any = {};
    orderData['customerId'] = this.userId;
    orderData['addressId'] = this.model.addressId;
    orderData['userRemarks'] = this.model.userRemarks;

    const cartItems: OrderItem[] = this.cartService.getCartItems();
    let orderAmount = 0;
    const orderItems = [];
    for (let i = 0; i < cartItems.length; i++) {
      orderAmount += cartItems[i].subtotal;
      orderItems.push({ 'productId': cartItems[i].product._id, 'quantity': cartItems[i].quantity, 'SKU': cartItems[i].product.SKU });
    }

    orderData['orderItems'] = orderItems;
    orderData['orderAmount'] = orderAmount;
    orderData['orderStatus'] = 'Pending';

    return orderData;
  }
}
