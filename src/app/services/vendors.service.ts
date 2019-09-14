import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { InterceptorSkipHeader } from './http.request.interceptor';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {
  public VENDORS_URL = environment.baseUrl + 'vendors';
  public CREATE_VENDOR = environment.baseUrl + 'vendors/create';
  public GET_SKU = environment.baseUrl + 'vendors/sku';

  constructor(private httpCLient: HttpClient) { }
  getVendors(){
    return this.httpCLient.get(this.VENDORS_URL).pipe(
      map(response => response),
      catchError(err => Promise.reject(err))
    )
  }
  getSKU(){
    return this.httpCLient.get(this.GET_SKU).pipe(
      map(response => response),
      catchError(err => Promise.reject(err))
    )
  }
  getUpdateVendor(params){ 
    return this.httpCLient.get(this.VENDORS_URL + '/' + params.SKU +'/update').pipe(
      map(response => response),
      catchError(err => Promise.reject(err))
    )
  }
  updateVendor(sku, data){
    return this.httpCLient.post(this.VENDORS_URL + '/' + sku +'/update', data).pipe(
      map(response => response),
      catchError(err => Promise.reject(err))
    )
  }
  createVendor(data){
    return this.httpCLient.post(this.CREATE_VENDOR,  data).pipe(
      map(response => response),
      catchError(err => Promise.reject(err))
    )
  }
  deleteVendor(id){
    return this.httpCLient.post(this.VENDORS_URL + '/' + id + '/delete', id).pipe(
      map(response => response),
      catchError(err => Promise.reject(err))
    );
  }
}
