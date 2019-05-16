import { OrderItem } from '../../../models/orderItem.model';
import { CartService } from '../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { AuthenticationService } from '../../../services/authentication.service';

declare var $: any;

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})

export class CartDetailsComponent implements OnInit {
  total: number;
  quantity: number;
  orderItems: OrderItem[] = [];
  public isUserLoggedIn = false;
  public productImage;

  constructor(private cartService: CartService,
    private session: SessionService,
    private authService: AuthenticationService
  ) {
    this.authService.isLoggedIn.subscribe(value => {
      if (session.retrieveToken() != null || value) {
        this.isUserLoggedIn = true;
      } else {
        this.isUserLoggedIn = false;
      }
    });
  }

  ngOnInit() {
    this.orderItems = this.cartService.getCartItems();

    // This will help to retain cart data even after page refresh
    if (this.orderItems.length > 0) {
      this.session.saveCartData(JSON.stringify(this.orderItems));
    } else if (this.session.retrieveCartData()) {
      this.orderItems = JSON.parse(this.session.retrieveCartData());
      this.cartService.setCartItems(this.orderItems);
    }

    this.getTotalAndQuantity();
  }

  getTotalAndQuantity() {
    this.total = 0;
    this.quantity = 0;
    for (let i = 0; i < this.orderItems.length; i++) {
      this.quantity += Number.parseInt(this.orderItems[i].quantity.toString());
      this.total += this.orderItems[i].subtotal;
    }
  }

  public openModal(image, event) {
    if (image.indexOf('/product_placeholder.png') !== -1) {
      image = image.replace('product_placeholder.png', 'coming_soon.png');
    }

    this.productImage = image;
    $('#productImage').attr('src', image);
    $('#imageDialogModal').modal('show');
    event.stopPropagation(); // PREVENT multiple modals open
  }

}
