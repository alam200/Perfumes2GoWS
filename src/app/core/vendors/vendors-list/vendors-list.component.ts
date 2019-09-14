import { Component, OnInit } from '@angular/core';
import { VendorsService } from '../../../services/vendors.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SessionService } from './../../../services/session.service';
import { environment } from '../../../../environments/environment';

import { NgxSpinnerService } from 'ngx-spinner';

declare var $: any;
interface vendor{
  SKU: String,
  vendorID: String,
  productDescription: String,
  purchaseDate: string,
  lastPurchasePrice: Number,
  lastPurchasedQty: Number
}

@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.css']
})


export class VendorsListComponent implements OnInit {
  vendorToDelete: String;
  vendorID: String;
  vendorsOrig: vendor[];
  vendors: vendor[];
  constructor(private http: HttpClient, 
    private vendorService: VendorsService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getVendorsData();
    
  }

  dateFormater(time:string) {
    if(!time || time == ""){
      return "No data"
    }
    var date = new Date(time);
    var day = date.getDate();
    var month: Number | String = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    var year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  getVendorsData(){
    this.spinner.show();
    this.vendorService.getVendors().subscribe(
      (response: vendor[]) => {
        this.vendors = response.map(res => {
          res.purchaseDate = this.dateFormater(res.purchaseDate);
          return res;
        });
        this.vendorsOrig = this.vendors;
      },
      error => {
        console.log(error);
      }
    )
    
    this.spinner.hide();
  }

  Search(){
    if(this.vendors){
      this.vendors = this.vendorsOrig.filter(res =>{
        return res.vendorID.toLocaleLowerCase().match(this.vendorID.toLocaleLowerCase());
      });
    }
  }

  public closeModal() {
    $('#orderConfirmationModal').modal('hide');
    this.getVendorsData();
  }

  deleteTrue() {
    console.log(this.vendorToDelete);
    this.vendorService.deleteVendor(this.vendorToDelete).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      },
      () => this.closeModal()
    );
  }
  delete(id) {
    $("#orderConfirmationModal").modal("show");
    this.vendorToDelete = id;
  }
  
}
