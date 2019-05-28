import { environment as env } from './../../environments/environment';
import { environment as envProd } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { InterceptorSkipHeader } from './http.request.interceptor';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public REGISTER_URL = `${isDevMode() && env.baseUrl || envProd.baseUrl}auth/register`;
  public VERIFY_EMAIL = `${isDevMode() && env.baseUrl || envProd.baseUrl}auth/verify`;
  public LOGIN_URL = `${isDevMode() && env.baseUrl || envProd.baseUrl}auth/login`;
  public USERS_URL = `${isDevMode() && env.baseUrl || envProd.baseUrl}users`;
  public ADD_ADDRESS_URL = `${isDevMode() && env.baseUrl || envProd.baseUrl}addresses`;
  public ADDRESSES_URL = `${isDevMode() && env.baseUrl || envProd.baseUrl}addresses`;
  public SEND_FORGOT_PASSWORD_URL = `${isDevMode() && env.baseUrl || envProd.baseUrl}auth/forgot`;
  public RESET_PASSWORD_URL = `${isDevMode() && env.baseUrl || envProd.baseUrl}auth/reset`;
  public RESEND_TOKEN_URL = `${isDevMode() && env.baseUrl || envProd.baseUrl}auth/resend`;
  public SEND_CONTACT_MAIL_URL = `${isDevMode() && env.baseUrl || envProd.baseUrl}auth/contactmail`;
  public GET_USER_CODE = `${isDevMode() && env.baseUrl || envProd.baseUrl}users/id`;

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
    return this.httpClient.get(this.USERS_URL + '/details/' + userId).pipe(
      map(response => response),
      catchError(err => Promise.reject(err)));
  }

  updateUser(data, userId) {
    return this.httpClient.patch(this.USERS_URL + '/updateUser/' + userId, data).pipe(
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

  sendContactMail(data) {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.httpClient.post(this.SEND_CONTACT_MAIL_URL, data, { headers }).pipe(
      map(response => response),
      catchError((error: Response) => observableThrowError(error)));
  }

  getUserCodes() {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.httpClient.get(this.GET_USER_CODE, { headers: headers }).toPromise()
      .catch(err => Promise.reject(err));
  }

  removeUser(userID) {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.httpClient.get(this.USERS_URL + '/removeUser/' + userID, { headers: headers }).toPromise()
      .catch(err => Promise.reject(err));
  }
}
