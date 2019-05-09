import { AlertService } from '../../../common/alert/alert.service';
import { UsersService } from '../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  model: any = {};
  public token;
  constructor(private usersService: UsersService,
    private alertService: AlertService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(params => this.token = params.token);
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    /** spinner starts */
    this.spinner.show();
    this.usersService.resetPassword(this.token, this.model).subscribe(
      (data: any) => {
        /** spinner ends */
        this.spinner.hide();
        this.alertService.success(data.message, true);
        this.router.navigate(['/user/login']);
      },
      error => {
        /** spinner ends */
        this.spinner.hide();
        console.log(error);
        this.alertService.error(error.message, true);
      });
  }

}
