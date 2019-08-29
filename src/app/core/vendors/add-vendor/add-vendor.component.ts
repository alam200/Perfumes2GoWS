import { Location } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../../services/products.service";

@Component({
  selector: "app-add-vendor",
  templateUrl: "./add-vendor.component.html",
  styleUrls: ["./add-vendor.component.css"]
})
export class AddVendorComponent implements OnInit {
  model: any = {};
  productCode: string;
  type: String;
  public productCodes = [];

  constructor(private productService: ProductsService, private location: Location) {}

  ngOnInit() {
    this.getProductCode();
  }

  getProductCode() {
    this.productService.getProductCodes().then(
      (data: any) => {
        let temp = data.filter(a => {
          return a.match(/M[\d -]{5}/) && a.length === 6;
        });
        this.productCodes = temp;
      },
      error => {
        console.log("service down ", error);
      }
    );
  }

  onChange(productCode) {
    console.log(productCode);
    this.productCode = productCode;
  }

  cancel() {
    this.location.back();
  }

  onSubmit() {
    console.log("ok");
  }
}
