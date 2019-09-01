import { Component, OnInit } from "@angular/core";
import { VendorsService } from '../../../services/vendors.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { delay } from "rxjs/operators";


interface SKU{
  SKU: String,
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  modelSKU;
  listSKU: SKU[];
  loading= false;
  actualSKU: SKU;
  vendorForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private location: Location,
    private vendorService: VendorsService) {}

  ngOnInit() {
    this.getSKU();
    this.vendorForm = this.fb.group({
      SKU: '',
      vendorID: '',
      productDescription: '',
      purchaseDate: Date,
      lastPurchasePrice: Date,
      lastPurchasedQty: Number
    })
    this.vendorForm.valueChanges.subscribe(console.log)
  }

  addTagPromise(SKU) {
    return new Promise((resolve) => {
      this.loading = true;
      // Simulate backend call.
      setTimeout(() => {
            this.actualSKU = SKU;
            console.log(this.actualSKU)
            resolve({ SKU: SKU });
            this.loading = false;
        }, 1000);
    })
  }
  skuChange(sku){
    this.vendorForm.get('SKU').patchValue(this.modelSKU);
  }
  onAddSKU(e){
    console.log(e)
  }
  getSKU() {
    this.vendorService.getSKU().pipe(delay(500)).subscribe(
      (response: SKU[]) => {
        this.listSKU = response;
      },
      e => {
        console.log(e);
      }
    )
  }

  cancel() {
    this.location.back();
  }
}

