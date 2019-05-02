import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { InterceptorSkipHeader } from './http.request.interceptor';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public REGISTER_URL = environment.baseUrl + 'auth/register';
  public VERIFY_EMAIL = environment.baseUrl + 'auth/verify';
  public LOGIN_URL = environment.baseUrl + 'auth/login';
  public USERS_URL = environment.baseUrl + 'users';
  public ADD_ADDRESS_URL = environment.baseUrl + 'addresses';
  public ADDRESSES_URL = environment.baseUrl + 'addresses';
  public SEND_FORGOT_PASSWORD_URL = environment.baseUrl + 'auth/forgot';
  public RESET_PASSWORD_URL = environment.baseUrl + 'auth/reset';
  public RESEND_TOKEN_URL = environment.baseUrl + 'auth/resend';

  constructor(private httpClient: HttpClient) { }

  register(data) {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.httpClient.post(this.REGISTER_URL, data, { headers }).pipe(
      map(response => response),
      catchError((error: Response) => observableThrowError(error)));
  }

  login(data) {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.httpClient.post(this.LOGIN_URL, data, { headers }).pipe(
      map(response => response),
      catchError((error: Response) => observableThrowError(error)));
  }

  forgotPassword(email) {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.httpClient.post(this.SEND_FORGOT_PASSWORD_URL, { email: email }, { headers }).pipe(
      map(response => response),
      catchError((error: Response) => observableThrowError(error)));
  }

  resetPassword(token, model) {
    let params = new HttpParams();
    params = params.append('token', token);
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.httpClient.post(this.RESET_PASSWORD_URL, { password: model.password }, { headers: headers, params: params }).pipe(
      map(response => response),
      catchError((error: Response) => observableThrowError(error)));
  }


  getUserDetails(userId) {
    let params = new HttpParams();
    params = params.append('userId', userId);
    return this.httpClient.get(this.USERS_URL + '/' + userId).pipe(
      map(response => response),
      catchError(err => Promise.reject(err)));
  }

  updateUser(data, userId) {
    return this.httpClient.patch(this.USERS_URL + '/' + userId, data).pipe(
      map(response => response),
      catchError((error: Response) => observableThrowError(error)));
  }

  addAddress(data) {
    return this.httpClient.post(this.ADD_ADDRESS_URL, data).pipe(
      map(response => response),
      catchError((error: Response) => observableThrowError(error)));
  }

  updateAddress(data, addressId) {
    return this.httpClient.patch(this.ADDRESSES_URL + '/' + addressId, data).pipe(
      map(response => response),
      catchError((error: Response) => observableThrowError(error)));
  }

  getAddresses(userId) {
    let params = new HttpParams();
    params = params.append('userId', userId);
    return this.httpClient.get(this.ADDRESSES_URL, { params: params }).pipe(
      map(response => response),
      catchError(err => Promise.reject(err)));
  }

  getAddressDetails(addressId) {
    return this.httpClient.get(this.ADDRESSES_URL + '/' + addressId).pipe(
      map(response => response),
      catchError(err => Promise.reject(err)));
  }

  deleteAddress(addressId) {
    return this.httpClient.delete(this.ADDRESSES_URL + '/' + addressId).pipe(
      map(response => response),
      catchError((error: Response) => observableThrowError(error)));
  }

  verifyEmail(token) {
    return this.httpClient.get(this.VERIFY_EMAIL + '/' + token).pipe(
      map(response => response),
      catchError(err => Promise.reject(err)));
  }

  resendVerificationMail(email) {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.httpClient.post(this.RESEND_TOKEN_URL, { email: email }, { headers }).pipe(
      map(response => response),
      catchError(err => Promise.reject(err)));
  }
}
