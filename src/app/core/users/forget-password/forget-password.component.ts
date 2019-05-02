import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { AlertService } from '../../../common/alert/alert.service';
import { SessionService } from '../../../services/session.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  email: string;
  requestType: string;
  constructor(private usersService: UsersService,
    private alertService: AlertService,
    private session: SessionService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(params => {
      this.requestType = params['type'];
    });
  }

  ngOnInit() {
    this.session.destroy();
  }

  onSubmit(form: NgForm, type) {
    /** spinner starts */
    this.spinner.show();
    if (type === 'reset') {
      this.usersService.forgotPassword(form.controls['email'].value).subscribe(
        (data: any) => {
          /** spinner ends */
          this.spinner.hide();
          this.alertService.success(data.message, true);
          this.router.navigate(['/user/login']);
        },
        error => {
          /** spinner ends */
          this.spinner.hide();
          console.log('error', error);
          this.alertService.error(error.error.message, true);
        });
    } else {
      this.usersService.resendVerificationMail(form.controls['email'].value).subscribe(
        (data: any) => {
          /** spinner ends */
          this.spinner.hide();
          this.alertService.success(data.message, true);
          this.router.navigate(['/user/login']);
        },
        error => {
          /** spinner ends */
          this.spinner.hide();
          console.log('error', error);
          this.alertService.error(error.error.message, true);
        });
    }
  }
}
