import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay } from "rxjs/operators";
import { AlertService } from '../../../common/alert/alert.service';
import { ProductsService } from '../../../services/products.service';
import { VendorsService } from '../../../services/vendors.service';

interface SKU{
  SKU: String,
}
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form: FormGroup;
  model: any = {};
  productCode: string;
  public buttonLabel = 'Add Product';
  public brands = [];
  public types = [];
  public productCodes = [];
  public vendorCodes = [];
  public isSKUEditable = true;

  constructor(private productService: ProductsService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private location: Location,
    private vendorService: VendorsService,
  ) { }

  ngOnInit() {
    this.productCode = this.route.snapshot.paramMap.get('sku');
    if (this.productCode) {
      this.getProductDetails();
      this.buttonLabel = 'Update Product';
      this.isSKUEditable = false;
    }
    this.getBrands();
    this.getTypes();
    this.getSKU();
    this.getProductCode(this.productCode);
    this.model = {
      category: 'normal',
      productStatus: 'active'
    };
  }

  getBrands() {
    this.productService.getBrands().then(
      (data: any) => {
        this.brands = data;
      },
      error => {
        console.log('service down ', error);
      });
  }

  getTypes() {
    this.productService.getTypes().then(
      (data: any) => {
        this.types = data;
      },
      error => {
        console.log('service down ', error);
      });
  }

  getProductCode(productCode) {
    this.productService.getProductCodes().then(
      (data: any) => {
        let temp = data.filter(a => {
          return a.match(/M[\d -]{5}/) && a.length === 6;
        });
        if (!temp.length) {
          temp = ["M-0000"];
        }
        function nextSKU(sku: String) {
          if (!sku.match(/M[\d -]{5}/) && sku.length !== 6) {
            return "";
          }
          let _sku: String = (parseInt(sku.split("-")[1]) + 1).toString();
          while (_sku.length < 4) {
            _sku = "0" + _sku;
          }
          return "M-" + _sku;
        }
        const last = nextSKU(temp[temp.length - 1]);
        if (temp[0] === "M-0000") temp = [];
        if (!productCode) {
          this.model.SKU = last;
        }
        this.productCodes = [...temp, last];
      },
      error => {
        console.log('service down ', error);
      });
  }

  getSKU() {
    this.vendorService.getSKU().pipe(delay(500)).subscribe(
      (response: SKU[]) => {
        this.vendorCodes = response.map(res => {
          return res.SKU
        });
      },
      e => {
        console.log(e);
      }
    )
  }

  onSubmit() {
    /** spinner starts */
    this.spinner.show();

    if (this.productCode) { // update product
      this.model.stock = this.model.stock;
      this.productService.updateProduct(this.model, this.productCode).subscribe(
        (data: any) => {
          /** spinner ends */
          this.spinner.hide();
          this.alertService.success('Product updated successfully.', true);
          setTimeout(() => {
            this.location.back();
          }, 200);
        },
        error => {
          /** spinner ends */
          this.spinner.hide();
          console.log('service down ', error);
          this.alertService.error(error.statusText);
        });
    } else { // add product
      this.productService.addProduct(this.model).subscribe(
        () => {
          /** spinner ends */
          this.spinner.hide();
          this.alertService.success('Item added successfully.', true);
          this.router.navigate(['/products']);
        },
        error => {
          /** spinner ends */
          this.spinner.hide();
          console.log('service down ', error);
          this.alertService.error(error.statusText);
        });
    }
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64: any = reader.result;
        this.model['imageBase64'] = base64.split(',')[1];
      };
    }
  }

  cancel() {
    this.location.back();
  }

  onChange(productCode) {
    const isProductCodeExist = this.productCodes.indexOf(productCode) > -1;
    if (isProductCodeExist) {
      this.productCode = productCode;
      this.getProductDetails();
    }
  }

  getProductDetails() {
    this.spinner.show();
    this.productService.getProductDetails(this.productCode).subscribe((resp) => {
      this.spinner.hide();
      this.model = resp;
      this.buttonLabel = 'Update Product';
    },
      (err) => {
        this.spinner.hide();
        console.log('product details err', err);
      });
  }

  restrictNegativeValue(event) {
    if (+event.target.value < 0) {
      event.target.value = 0;
    }
  }
}
