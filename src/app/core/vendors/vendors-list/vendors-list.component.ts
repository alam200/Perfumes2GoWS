import { Component, OnInit } from '@angular/core';
import { VendorsService } from '../../../services/vendors.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from './../../../services/session.service';
import { environment } from '../../../../environments/environment';

import { NgxSpinnerService } from 'ngx-spinner';
interface vendor{
  SKU: String,
  vendorID: String,
  productDescription: String,
  purchaseDate: Date,
  lastPurchasePrice: Number,
  lastPurchasedQty: Number
}

@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.css']
})


export class VendorsListComponent implements OnInit {
  vendors: vendor[];
  constructor(private http: HttpClient, 
    private vendorService: VendorsService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getVendorsData();
  }

  getVendorsData(){
    this.spinner.show();
    this.vendorService.getVendors().subscribe(
      (response: vendor[]) => {
        this.vendors = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
    
    this.spinner.hide();
  }
}
