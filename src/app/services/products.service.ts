import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { InterceptorSkipHeader } from './http.request.interceptor';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public PRODUCTS_URL = environment.baseUrl + 'products';
  public GET_BRAND = environment.baseUrl + 'products/brands';
  public GET_TYPES = environment.baseUrl + 'products/types';
  public GET_PRODUCT_CODE = environment.baseUrl + 'products';
  public GET_EXPORT_DATA = environment.baseUrl + 'products/exportcsv';
  public GET_PDF = environment.baseUrl + 'products/getPDF';
  public GET_EXCEL = environment.baseUrl + 'products/getExcel';
  public GET_DELETED_DATA = environment.baseUrl + 'products/delete/collection';

  constructor(private httpClient: HttpClient) { }

  addProduct(data) {
    return this.httpClient.post(this.PRODUCTS_URL, data).pipe(
      map(response => response),
      catchError((error: Response) => observableThrowError(error)));
  }

  getProducts(dataTablesParameters) {
    return this.httpClient.get(this.PRODUCTS_URL).toPromise()
      .then((data: any) => {
      })
      .catch(err => Promise.reject(err));
  }

  getExportData(userId) {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.httpClient.get(this.GET_EXPORT_DATA, {
      headers: headers,
      params: {
        userId: userId
      }
    }).toPromise().catch(err => Promise.reject(err));
  }

  getPDF(userId) {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.httpClient.get(this.GET_PDF, {
      headers: headers,
      params: {
        userId: userId
      }
    }).toPromise().catch(err => Promise.reject(err));
  }

  getExcel(userId) {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.httpClient.get(this.GET_EXCEL, {
      headers: headers,
      params: {
        userId: userId
      }
    }).toPromise().catch(err => Promise.reject(err));
  }

  retreiveDeleteData(userId, item) {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.httpClient.get(this.GET_DELETED_DATA, {
      headers: headers,
      params: {
        userId: userId,
        deleteCollection: item
      }
    }).toPromise().catch(err => Promise.reject(err));
  }

  getBrands() {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.httpClient.get(this.GET_BRAND, { headers: headers }).toPromise()
      .catch(err => Promise.reject(err));
  }

  getTypes() {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.httpClient.get(this.GET_TYPES, { headers: headers }).toPromise()
      .catch(err => Promise.reject(err));
  }

  getProductCodes() {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.httpClient.get(this.GET_PRODUCT_CODE, { headers: headers }).toPromise()
      .catch(err => Promise.reject(err));
  }

  getProductDetails(productCode) {
    return this.httpClient.get(this.PRODUCTS_URL + '/details/' + productCode).pipe(
      map(response => response),
      catchError(err => Promise.reject(err)));
  }

  updateProduct(data, productCode) {
    data._id = undefined;
    return this.httpClient.patch(this.PRODUCTS_URL + '/' + productCode, data).pipe(
      map(response => response),
      catchError((error: Response) => observableThrowError(error)));
  }

  removeProduct(productCode) {
    return this.httpClient.delete(this.PRODUCTS_URL + '/' + productCode).toPromise()
      .catch(err => Promise.reject(err));
  }
}
