import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from '../../../common/alert/alert.service';
import { ProductsService } from '../../../services/products.service';

import {  FileUploader, FileSelectDirective, FileLikeObject } from 'ng2-file-upload/ng2-file-upload';
import { concat } from  'rxjs';

const URL = 'http://localhost:3000/api/upload';

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
  public isSKUEditable = true;

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'product'});
  public hasBaseDropZoneOver: boolean = false;


  constructor(private productService: ProductsService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private location: Location
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
    this.getProductCodes();
    this.model = {
      category: 'normal',
      productStatus: 'active'
    };

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      // let files = this.getFiles();
      // files.forEach((file) => {
      //  console.log(file.name) 
      //  this.model.image = file.name;
     

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

  getProductCodes() {
    this.productService.getProductCodes().then(
      (data: any) => {
        this.productCodes = data;
      },
      error => {
        console.log('service down ', error);
      });
  }

///get file name
fileOverBase(event):  void {
  this.hasBaseDropZoneOver  =  event;
}


getFiles(): FileLikeObject[] {
  return this.uploader.queue.map((fileItem) => {
    return fileItem.file;
  });
}
//

  onSubmit() {
    /** spinner starts */
    this.spinner.show();

    if (this.productCode) { // update product
      this.model.stock = this.model.stock;
      let files = this.getFiles();
      files.forEach((file) => {

        this.model.image = "/assets/upload_image/product_" + file.name;
        
      });
      this.productService.updateProduct(this.model, this.productCode).subscribe(
        (data: any) => {
          /** spinner ends */
          this.spinner.hide();
          this.alertService.success('Product updated successfully.', true);

          setTimeout(() => {
            this.location.back();
          }, 300);
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
