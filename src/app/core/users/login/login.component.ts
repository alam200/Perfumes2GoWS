import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { AlertService } from '../../../common/alert/alert.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { SessionService } from '../../../services/session.service';
import { UsersService } from '../../../services/users.service';

 @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private usersService: UsersService,
    private alertService: AlertService,
    private session: SessionService,
    private authService: AuthenticationService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.session.isLoggedIn()) {
      this.router.navigate(['/products']);
    } else {
      if (this.router.url !== '/user/login') {
        /** page not found */
        this.router.navigate(['/user/login']);
      }
      // stay here 2 authenticate
    }
  }

  onSubmit() {
    /** spinner starts */
    this.spinner.show();
    this.usersService.login(this.model).subscribe(
      (data: any) => {
        /** spinner ends */
        this.spinner.hide();
        this.session.saveToken(data.token['accessToken']);
        this.session.saveUserId(data.user['_id']);
        this.session.saveUserData(JSON.stringify(data.user));
        this.alertService.success('You are logged in successfully.', true);
        this.authService.isLoggedIn.next(true);
        if (this.session.retrieveCartData() && this.session.retrieveCartData().length > 0) {
          this.router.navigate(['/order']);
        } else {
          this.router.navigate(['/products']);
        }
      },
      error => {
        /** spinner ends */
        this.spinner.hide();
        if (error.status === 0) {
          console.log('service down ', error);
        } else {
          this.alertService.error(error.error.message);
        }
      });
  }
}
