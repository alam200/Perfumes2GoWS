import { Component, OnInit } from "@angular/core";
import { VendorsService } from '../../../services/vendors.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { delay } from "rxjs/operators";
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AlertService } from '../../../common/alert/alert.service';

interface SKU{
  SKU: String,
}
interface vendor{
  SKU: String,
  vendorID: String,
  productDescription: String,
  purchaseDate: Date,
  lastPurchasePrice: Number,
  lastPurchasedQty: Number
}
@Component({
  selector: "app-add-vendor",
  templateUrl: "./add-vendor.component.html",
  styleUrls: ["./add-vendor.component.css"]
})
export class AddVendorComponent implements OnInit {
  modelSKU;
  ShouldupdateVendor= false;
  listSKU: SKU[];
  loading= false;
  vendor: vendor;
  vendorForm: FormGroup;
  constructor(private fb: FormBuilder, 
    private location: Location,
    private alertService: AlertService,
    private router: Router,
    private vendorService: VendorsService,
    private spinner: NgxSpinnerService,) {}

  ngOnInit() {
    this.getSKU();
    this.vendorForm = this.fb.group({
      SKU: '',
      vendorID: '',
      productDescription: '',
      purchaseDate: Date,
      lastPurchasePrice: null,
      lastPurchasedQty: null
    })
  }

  addTagPromise(SKU) {
    return new Promise((resolve) => {
      this.loading = true;
      setTimeout(() => {
            resolve({ SKU: SKU });
            this.loading = false;
        }, 1000);
    })
  }
  skuChange(sku){
    this.vendorForm.get('SKU').patchValue(this.modelSKU);
    const alreadyExist = this.listSKU.find(vendor => vendor === this.modelSKU );
    if (alreadyExist){
      this.getVendorDetails(alreadyExist);
      this.ShouldupdateVendor = true;
    } else {
      this.vendorForm.patchValue({
        vendorID: '',
        productDescription: '',
        purchaseDate: Date,
        lastPurchasePrice: null,
        lastPurchasedQty: null
      });
      this.ShouldupdateVendor = false;
    }
  }
  getVendorDetails(alreadyExist){
    this.spinner.show();
    this.vendorService.getUpdateVendor(alreadyExist).subscribe((res : vendor) => {
      this.spinner.hide();
      this.vendorForm.get('SKU').patchValue(res.SKU);
      this.vendorForm.get('vendorID').patchValue(res.vendorID);
      this.vendorForm.get('productDescription').patchValue(res.productDescription);
      let date = new Date(res.purchaseDate);
      this.vendorForm.get('purchaseDate').patchValue({year:date.getFullYear(), month: date.getMonth(), day:date.getDay()});
      this.vendorForm.get('lastPurchasePrice').patchValue(res.lastPurchasePrice);
      this.vendorForm.get('lastPurchasedQty').patchValue(res.lastPurchasedQty);

    })
  }
  getSKU() {
    this.vendorService.getSKU().pipe(delay(500)).subscribe(
      (response: SKU[]) => {
        this.listSKU = response;
      },
      e => {
        console.error(e);
      }
    )
  }

  createVendor(){
    this.spinner.show();
    let data = {};
    for (let field in this.vendorForm.value) {
      let formElement = this.vendorForm.get(`${field}`).value;
      if (field === 'SKU') {
        data[field] = formElement.SKU;
      } else {
        if (field === 'purchaseDate'){
          const {year, month, day} = formElement;
          data[field] = new Date(year, month, day);
        } else {
          data[field] = formElement;
        }
      }
    }
    this.vendorService.createVendor(data).subscribe(res => {
      this.spinner.hide();
      if (res["_id"]) {
        this.alertService.success('Vendor added successfully.', true);    
        this.router.navigate(['/vendors']);   
      }
    }, 
      e => {
        this.spinner.hide();
        this.alertService.error(e.statusText);
      }
    )
  }
  
  updateVendor(){
    this.spinner.show();
    let data = {};
    for (let field in this.vendorForm.value) {
      let formElement = this.vendorForm.get(`${field}`).value;
      if (field === 'purchaseDate'){
        const {year, month, day} = formElement;
        data[field] = new Date(year, month, day);
     } else {
        data[field] = formElement;
      }
    }    
    this.vendorService.updateVendor(this.modelSKU, data).subscribe(res => {
      this.spinner.hide();
      if (res["query"] === "done") {
        this.alertService.success('Vendor updated successfully.', true);       
        this.router.navigate(['/vendors']);   
      }
    },
    e => {
      this.spinner.hide();
      this.alertService.error(e.statusText);
    }
    );
  }
  cancel() {
    this.location.back();
  }
}

