import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  private tokenKey = 'app_token';
  private userId = 'user_id';
  private userName = 'user_name';
  private cartData = 'cart_data';
  private userData = 'user_data';
  constructor() {
  }

  public saveToken(token) {
    sessionStorage.setItem(this.tokenKey, token);
  }

  public retrieveToken() {
    const storedToken: string = sessionStorage.getItem(this.tokenKey);
    return storedToken;
  }

  public saveUserId(token) {
    sessionStorage.setItem(this.userId, token);
  }

  public retrieveUserId() {
    const storedUserId: string = sessionStorage.getItem(this.userId);
    return storedUserId;
  }

  public saveCartData(cartData) {
    sessionStorage.setItem(this.cartData, cartData);
  }
  public retrieveCartData() {
    return sessionStorage.getItem(this.cartData);
  }
  public removeCartData() {
    sessionStorage.removeItem(this.cartData);
  }

  public saveUserData(userData) {
    sessionStorage.setItem(this.userData, userData);
  }
  public retrieveUserData() {
    return sessionStorage.getItem(this.userData);
  }

  public retrieveUserCategory() {
    if (this.retrieveUserData()) {
      return JSON.parse(this.retrieveUserData()).category;
    }
    return 'Customer';
  }

  public destroy(): void {
    sessionStorage.clear();
  }
}
