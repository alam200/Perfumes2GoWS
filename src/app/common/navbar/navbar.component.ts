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
import { Workbook } from 'exceljs/dist/exceljs.min.js'; 
import * as fs from 'file-saver';
import { async } from 'q';

//declare var jsPDF: any;
declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');

const EXCEL_TYPE = 'application/vnd.openxmlformatsofficedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  orderItems: OrderItem[] = [];
  productsQuantity: number;
  subtotalQuantity: number;
  count: number;

  public showGetPDF = true;
  public showGetExcel = true;
  public showLogin = true;
  public showSignup = true;
  public showMyAccount = false;
  public showAddCart = true;
  public showCart = true;
  public showEditCart = false;
  public showBack = false;
  public showAddItem = false;
  public showOrders = false;
  public showUsers = false;
  public showUploadProducts = false;
  public showMenu = true;
  public isUserLoggedIn = false;
  public showAboutUs = true;
  public showContactUs = true;
  public showMngData = false;
  public userName: string;
  private cartSubscription: Subscription;

  radioSelected: String;
  radioSelectedStr: String;
  deleteItemList: any = [];

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
      this.showAboutUs = true;
      this.showContactUs = true;
    });
  }

  ngOnInit() {
    this.cartSubscription = this.cartService.cartObservable.subscribe(action => {
      const orderItems: any[] = this.cartService.getCartItems();
      this.productsQuantity = 0;
      this.subtotalQuantity = 0.00;
      for (let index = 0; index < orderItems.length; index++) {
        this.productsQuantity += Number.parseInt(orderItems[index].quantity);
        this.subtotalQuantity += Number.parseFloat(orderItems[index].subtotal);
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
      this.showGetPDF = true;
      this.showGetExcel = true;
    } else {
      this.showBack = true;
      this.showAddCart = false;
      this.showGetPDF = false;
      this.showGetExcel = false;
    }

    if (path === '/order') {
      this.showEditCart = true;
    } else {
      this.showEditCart = false;
    }

    if (this.isUserLoggedIn) {
      this.showLogin = false;
      this.showSignup = false;
      this.showMyAccount = true;
      // #navbarDropdown
      this.showMenu = true;
      if (path === '/user/details') {
        this.showMyAccount = false;
      }
      // FAQ item visibility
      const category = JSON.parse(this.session.retrieveUserData()).category;
      if (category === 'Customer') {
        if (path === '/aboutus') {
          this.showAboutUs = false;
        } else {
          this.showAboutUs = true;
        }
        if (path === '/contactus') {
          this.showContactUs = false;
        } else {
          this.showContactUs = true;
        }
      } else {
        this.showAboutUs = false;
        this.showContactUs = false;
      }
    } else {
      // GoBack is invisible when Logged Out
      this.showBack = false;
      this.showLogin = true;
      this.showSignup = true;
      this.showMyAccount = false;
      // #navbarDropdown
      if (window.innerWidth > 960) {
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }
      if (path === '/user/login') {
        this.showMyAccount = false;
        this.showLogin = false;
        this.showAddCart = false;
      }
      if (path === '/user/register') {
        this.showSignup = false;
      }
      // FAQ item visibility
      if (path === '/aboutus') {
        this.showAboutUs = false;
      } else {
        this.showAboutUs = true;
      }
      if (path === '/contactus') {
        this.showContactUs = false;
      } else {
        this.showContactUs = true;
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
        this.showUsers = true;
        this.showUploadProducts = true;
        this.showMngData = true;
        this.showGetPDF = false;
        this.showGetExcel = false;
      } else {
        this.showCart = true;
        this.showGetPDF = true;
        this.showGetExcel = true;
        this.showAddItem = false;
        this.showOrders = false;
        this.showUsers = false;
        this.showUploadProducts = false;
        this.showMngData = false;
      }
    } else {
      this.showGetPDF = false;
      this.showGetExcel = false;
      this.showAddItem = false;
      this.showOrders = false;
      this.showUsers = false;
      this.showUploadProducts = false;
      this.showMngData = false;
    }
  }

  onResize(evt) {
    // #navbarDropdown
    if (!this.isUserLoggedIn) {
      const w = evt.target.innerWidth;
      if (w > 960) {
        if (this.showMenu) {
          this.showMenu = false;
        }
      } else {
        if (!this.showMenu) {
          this.showMenu = true;
        }
      }
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

  promptGetPDF(event) {

    // Only pt supported (not mm or in)
    
    this.spinner.show();
    const userId = this.session.retrieveUserId();
    this.productsService.getPDF(userId).then(
      (data: any) => {
        if (data.success) {
          try {
            const columns = [
              {title: "Brand", dataKey: "brand", width: 30},
              {title: "Type", dataKey: "type", width: 30},
              {title: "SKU", dataKey: "SKU", width: 30},
              {title: "Description", dataKey: "description", width: 30},
              {title: "Price", dataKey: "price", width: 230},
              {title: "Stock", dataKey: "stock", width: 330}
              ];

            const products = data.products && data.products || [];
            
            let blobArr: any = [];
            blobArr.push(this.getCsvBlob(products));
            
//            const timestamp: String = this.getTimestampStr();
            const current_date : String = this.getDateStr();
            const pdfPath = `PriceList_${current_date}.pdf`;
            
            this.spinner.hide();
            var pdf = new jsPDF('l', 'pt', 'a4'); //('p', 'pt');
            pdf.cellInitialize();
            pdf.setFontSize(10);
            pdf.autoTable(columns, products, { 
              columnStyles: {
                brand: {cellWidth: 80},
                type: {cellWidth: 80},
                SKU: {cellWidth: 40},
                description: {cellWidth: 200},
                price: {cellWidth: 20},
                stock: {cellWidth: 20},
              },
              margin: {top: 30,left:15,right:15,bottom:20}});
            pdf.save(pdfPath);

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

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    //Excel Title, Header, Data
    const headersArray = ["Brand","Type","SKU","Description","Price","Stock"];
    const header = headersArray;
    const data = json;
    //Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet(excelFileName);
    //Add Header Row
    let headerRow = worksheet.addRow(header);
    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF2980BA' }
        //bgColor: { argb: 'FF0000FF' }
      },
      //cell.font = {
      //  name: 'Calibri', family: 4, size: 11, bold: false, strike: true 
      //},
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    })
    // Add Data and Conditional Formatting
    
    data.forEach((element) => {
      let eachRow = [];
      eachRow.push(element["brand"]);
      eachRow.push(element["type"]);
      eachRow.push(element["SKU"]);
      eachRow.push(element["description"]);
      eachRow.push(element["price"]);
      eachRow.push(element["stock"]);
      worksheet.addRow(eachRow);
    })
    //worksheet.properties.defaultRowHeight = 150;
    
    worksheet.getColumn(1).width = 32;
    worksheet.getColumn(2).width = 32;
    worksheet.getColumn(3).width = 16;
    worksheet.getColumn(4).width = 80;
    worksheet.getColumn(5).width = 10;
    worksheet.getColumn(6).width = 10;
    
    //Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: EXCEL_TYPE });
      fs.saveAs(blob, excelFileName + EXCEL_EXTENSION);
    })
    
  }
  
  promptGetExcel(event) {
    this.spinner.show();
    const userId = this.session.retrieveUserId();
    this.productsService.getExcel(userId).then(
      (data: any) => {
        if (data.success) {
          try {
            const products = data.products && data.products || [];
            const current_date : String = this.getDateStr();
            this.exportAsExcelFile(products,`PriceList__${current_date}`);
            /*
            let blobArr: any = [];
            blobArr.push(this.getCsvBlob(products));
            
            //const timestamp: String = this.getTimestampStr();
            const current_date : String = this.getDateStr();
            const pathArr: any = [
              `PriceList__${current_date}.csv`
            ];
            blobArr.forEach(async (blob, index) => {
              saveAs(blob, pathArr[index]);
              await new Promise(r => setTimeout(r, 1000));
            });
            */
            this.spinner.hide();
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
  
  downloadCsvFiles() {
    $('#exportDialogModal').modal('hide');
    this.spinner.show();
    const userId = this.session.retrieveUserId();
    this.productsService.getExportData(userId).then(
      (data: any) => {
        if (data.success) {
          try {
            const products = data.products && data.products || [];
            const customers = data.customers && data.customers || [];
            const orders = data.orders && data.orders || [];

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

  private getDateStr(){
    const tzoffset = (new Date()).getTimezoneOffset() * 60000; // offset in milliseconds
    return (new Date(Date.now() - tzoffset)).toISOString().slice(0, -13).replace(/-|:|T/g, '');
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

  promptDelete(event) {
    this.deleteItemList = [
      { name: 'radioProducts', caption: 'Products', value: 'products' },
      { name: 'radioCustomers', caption: 'Customers', value: 'customers' },
      { name: 'radioOrders', caption: 'Orders', value: 'orders' }
    ];
    this.radioSelected = 'products';
    this.getSelectedItem();

    $('#deleteDialogModal').modal('show');
    event.stopPropagation(); // PREVENT multiple modals open
  }

  getSelectedItem() {
    try {
      this.radioSelectedStr = this.deleteItemList.find(item => item.value === this.radioSelected).caption;
    } catch (e) {
      console.log(e);
    }
  }

  onRadioItemChange() {
    this.getSelectedItem();
  }

  deleteData(item) {
    $('#deleteDialogModal').modal('hide');
    this.spinner.show();
    const userId = this.session.retrieveUserId();
    this.productsService.retreiveDeleteData(userId, item).then(
      (data: any) => {
        if (data.success) {
          try {
            const retreival = data.retreival;
            if (retreival.length) {
              const blob = this.getCsvBlob(retreival);
              const filename = `${item}_deleted_${this.getTimestampStr()}.csv`;
              this.spinner.hide();
              saveAs(blob, filename);
              this.alert.success(`${this.radioSelectedStr} - Deleted`);
            } else {
              // no data to delete
              this.spinner.hide();
              this.alert.error(`${this.radioSelectedStr} - Nothing to Delete`);
            }
          } catch (e) {
            this.spinner.hide();
            console.log(e);
            this.alert.error(`${this.radioSelectedStr} - Failed to Delete`);
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
