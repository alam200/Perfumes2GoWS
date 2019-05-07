import { Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { SessionService } from '../../services/session.service';
import { AlertService } from '../alert/alert.service';
import { OrderItem } from '../../models/orderItem.model';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs/Subscription';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductsService } from '../../services/products.service';
import { saveAs } from 'file-saver';
import { async } from 'q';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  orderItems: OrderItem[] = [];
  productsQuantity: number;
  count: number;
  public showLogin = true;
  public showSignup = true;
  public showMyAccount = false;
  public showAddCart = true;
  public showCart = true;
  public showEditCart = false;
  public showBack = false;
  public showAddItem = false;
  public showOrders = false;
  public showUploadProducts = false;
  public showMenu = true;
  public isUserLoggedIn = false;
  public showFaqItem = false;
  public showMngData = false;
  public userName: string;
  private cartSubscription: Subscription;

  constructor(private cartService: CartService,
    private productsService: ProductsService,
    private session: SessionService,
    private alert: AlertService,
    private router: Router,
    private authService: AuthenticationService,
    public location: Location,
    private spinner: NgxSpinnerService
  ) {
    this.authService.isLoggedIn.subscribe(value => {
      if (session.retrieveToken() != null || value) {
        this.showLogin = false;
        this.showMyAccount = true;
        this.isUserLoggedIn = true;
      } else {
        this.showLogin = true;
        this.showMyAccount = false;
        this.isUserLoggedIn = false;
      }
      if (session.retrieveUserData() != null || value) {
        this.userName = JSON.parse(session.retrieveUserData()).firstName;
      }
      // RESET
      this.showFaqItem = false;
    });
  }

  ngOnInit() {
    this.cartSubscription = this.cartService.cartObservable.subscribe(action => {
      const orderItems: any[] = this.cartService.getCartItems();
      this.productsQuantity = 0;
      for (let index = 0; index < orderItems.length; index++) {
        this.productsQuantity += Number.parseInt(orderItems[index].quantity);
      }
    });
    this.orderItems = this.cartService.getCartItems();

    this.router.events.subscribe(() => {
      if (this.location.path() !== '') {
        this.showHideNavButtons(this.location.path());
      }
    });
  }

  showHideNavButtons(path: string) {
    if (path === '/products' || path === '/products/new' || path === '/products/special') {
      this.showBack = false;
      this.showAddCart = true;
    } else {
      this.showBack = true;
      this.showAddCart = false;
    }

    if (path === '/order') {
      this.showEditCart = true;
    } else {
      this.showEditCart = false;
    }

    if (this.isUserLoggedIn) {
      // this.showMenu = true;
      this.showLogin = false;
      this.showSignup = false;
      this.showMyAccount = true;
      if (path === '/user/details') {
        this.showMyAccount = false;
      }
      // FAQ item visibility
      const category = JSON.parse(this.session.retrieveUserData()).category;
      if (category === 'Customer') {
        this.showFaqItem = true;
      }
    } else {
      // this.showMenu = false;
      this.showLogin = true;
      this.showSignup = true;
      this.showMyAccount = false;
      if (path === '/user/login') {
        this.showMyAccount = false;
        this.showLogin = false;
        this.showAddCart = false;
      }
    }

    if (this.session.retrieveUserData()) {
      const userCategory = JSON.parse(this.session.retrieveUserData()).category;
      if (userCategory !== 'Customer') {
        this.showCart = false;
        this.showAddCart = false;
        this.showEditCart = false;
        this.showAddItem = true;
        this.showOrders = true;
        this.showUploadProducts = true;
        this.showMngData = true;
      } else {
        this.showCart = true;
        this.showAddItem = false;
        this.showOrders = false;
        this.showUploadProducts = false;
        this.showMngData = false;
      }
    } else {
      this.showAddItem = false;
      this.showOrders = false;
      this.showUploadProducts = false;
      this.showMngData = false;
    }
  }

  showCartDetails() {
    this.session.saveCartData(JSON.stringify(this.cartService.getCartItems()));
    this.router.navigate(['/order']);
  }

  promptExportCsv(event) {
    $('#exportDialogModal').modal('show');
    event.stopPropagation(); // PREVENT multiple modals open
  }
  
  downloadCsvFiles() {
    $('#exportDialogModal').modal('hide');
    this.spinner.show();
    const userId = this.session.retrieveUserId();
    const bFlagProducts: Boolean = true;
    const bFlagCustomers: Boolean = true;
    const bFlagOrders: Boolean = true;
    this.productsService.getExportData(userId, bFlagProducts, bFlagCustomers, bFlagOrders).then(
      (data: any) => {
        if (data.success) {
          try {
            const products = data.products;
            const customers = data.customers;
            const orders = data.orders;

            let blobArr: any = [];
            blobArr.push(this.getCsvBlob(products));
            blobArr.push(this.getCsvBlob(customers));
            blobArr.push(this.getCsvBlob(orders));
            const timestamp: String = this.getTimestampStr();
            const pathArr: any = [
              `export_products_${timestamp}.csv`,
              `export_customers_${timestamp}.csv`,
              `export_orders_${timestamp}.csv`
            ];
            this.spinner.hide();

            blobArr.forEach(async (blob, index) => {
              saveAs(blob, pathArr[index]);
              await new Promise(r => setTimeout(r, 1000));
            });
          } catch (e) {
            this.spinner.hide();
            console.log(e);
            this.alert.error('Failed to export CSV data');
          }
        } else {
          // exception handler | access denied
          this.spinner.hide();
        }
      },
      error => {
        this.spinner.hide();
        console.log('service down ', error);
      });
  }

  private getTimestampStr() {
    const tzoffset = (new Date()).getTimezoneOffset() * 60000; // offset in milliseconds
    return (new Date(Date.now() - tzoffset)).toISOString().slice(0, -5).replace(/-|:|T/g, '');
  }

  private getCsvBlob(params) {
    const replacer = (key, value) => value === null ? '' : value;
    const header = Object.keys(params[0]);
    // let csv = params.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    let csv = params.map(row => header.map(fieldName => {
      if (typeof row[fieldName] === 'object') {
        // multiline in a CSV field
        return `"${JSON.stringify(row[fieldName], replacer).replace(/"|{|}|\[|\]/g, '').replace(/,/g, '\r\n')}"`;
      } else {
        return JSON.stringify(row[fieldName], replacer);
      }
    }).join(','));
    csv.unshift(header.join(','));
    let csvArr = csv.join('\r\n');
    const BOM = '\uFEFF';
    csvArr = BOM + csvArr;
    return new Blob([csvArr], { type: 'text/csv;charset=utf-8' });
  }

  logout() {
    if (this.session.retrieveToken() != null) {
      this.session.destroy();
      this.cartService.clearCart();
      this.productsQuantity = 0; // clear cache
      this.authService.isLoggedIn.next(false);
      this.alert.success('Successfully signed out');
      this.router.navigate(['/user/login']);
    }
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
}
