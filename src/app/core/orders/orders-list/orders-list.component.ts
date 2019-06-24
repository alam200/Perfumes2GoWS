import { CartService } from '../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

declare var $: any;

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  orders: any = [];
  orderStatuses = ['Pending', 'In Progress', 'Dispatched', 'Delivered', 'Cancelled'];
  fromDate: any;
  toDate: any;
  orderStatus = 'ALL';
  selectedOrder: any;

  constructor(
    private cartService: CartService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.fromDate = new Date();
    this.toDate = new Date();
    this.fromDate = new Date(this.fromDate.setDate(this.fromDate.getDate() - 15)); // date before 15 days

    this.fromDate = this.fromDate.getFullYear() + '-' + this.getInTwoDigit(this.fromDate.getMonth() + 1) + '-' +
      this.getInTwoDigit(this.fromDate.getDate());
    this.toDate = this.toDate.getFullYear() + '-' + this.getInTwoDigit(this.toDate.getMonth() + 1) + '-' +
      this.getInTwoDigit(this.toDate.getDate());

    this.getOrdersList();
  }

  getInTwoDigit(value) {
    if (value < 10) {
      return '0' + value;
    }
    return value;
  }

  getOrdersList() {
    /** spinner starts */
    this.spinner.show();
    this.cartService.getOrders(this.fromDate, this.toDate, this.orderStatus)
      .subscribe((response) => {
        /** spinner ends */
        this.spinner.hide();
        this.orders = response;
      }, (error) => {
        /** spinner ends */
        this.spinner.hide();
      });
  }

  orderStatusChanged(order, status, event) {
    this.selectedOrder = order;
    if (status.toLowerCase() === 'cancelled') {
      $('#orderConfirmationModal').modal('show');
      event.stopPropagation(); // PREVENT multiple modals open
      return;
    }
    /** spinner starts */
    this.spinner.show();
    if (status !== 'none') {
      order.orderStatus = status;
      const data = {
        'orderStatus': status,
        'orderItems': order.orderItems
      };
      this.cartService.updateOrder(data, order._id).subscribe(
        () => {
          /** spinner ends */
          this.spinner.hide();
          order.orderStatus = status;
        },
        (err) => {
          /** spinner ends */
          this.spinner.hide();
          console.log('order update error', err);
        }
      );
    }
  }

  public closeModal() {
    $('#orderConfirmationModal').modal('hide');
    this.getOrdersList();
  }

  deleteOrder() {
    const status = 'Cancelled';
    const data = {
      'orderStatus': status,
      'orderItems': this.selectedOrder.orderItems
    };
    this.cartService.updateOrder(data, this.selectedOrder._id).subscribe(
      () => {
        this.selectedOrder.orderStatus = status;
        $('#orderConfirmationModal').modal('hide');
      },
      (err) => {
        console.log('order update error', err);
      }
    );
  }

}
