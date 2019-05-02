import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-upload-products',
  templateUrl: './upload-products.component.html',
  styleUrls: ['./upload-products.component.css']
})
export class UploadProductsComponent implements OnInit, AfterViewInit {
  public uploader: FileUploader = new FileUploader({ url: environment.baseUrl + 'products/upload' });
  isFailed: Boolean = false;
  message: String = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
  }

  ngAfterViewInit() {
    this.uploader.onAfterAddingFile = (item => {
      item.withCredentials = false;
    });
  }

  onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    const data = JSON.parse(response); // success server response
    console.log('success', data);
    // this.message = data
    this.isFailed = false;
    if (data.error_code === 1) {
      this.isFailed = true;
      switch (data.err_desc.code) {
        case 11000:
          this.message = 'Same SKU cannot be used in multiple records';
          break;
        case 9300:
          this.message = 'Either you uploaded wrong file type or excel is corrupted';
          break;
        default:
          this.message = 'Something went wrong, plese try later';
      }
    } else {
      this.message = data.data;
      setTimeout(() => {
        this.router.navigate(['/products']);
      }, 2000);
    }
  }

  onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    const error = JSON.parse(response); // error server response
    console.log('error', error);
    switch (error.err_desc.code) {
      case 11000:
        this.message = 'Same SKU cannot be used in multiple records';
        break;
      default:
        this.message = 'Something went wrong, plese try later';
    }
    this.isFailed = true;
  }
}
