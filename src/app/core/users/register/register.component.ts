import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { AlertService } from '../../../common/alert/alert.service';
import { SessionService } from '../../../services/session.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  constructor(private usersService: UsersService,
    private alertService: AlertService,
    private session: SessionService,
    private spinner: NgxSpinnerService,
    private router: Router) { }
    public buttonLabel = 'Register';
    public isUserExists = false;

  ngOnInit() {
    if (this.session.retrieveUserData()) {
      this.model = JSON.parse(this.session.retrieveUserData());
      this.model.password = undefined;
      this.buttonLabel = 'Update';
      this.isUserExists = true;
    } else {
      this.buttonLabel = 'Register';
      this.isUserExists = false;
    }
  }

  onSubmit() {
    if (this.buttonLabel === 'Register') {
      /** spinner starts */
      this.spinner.show();
      this.model['category'] = 'Customer';
      this.model['priceLevel'] = 1;
      this.usersService.register(this.model).subscribe(
        (data: any) => {
          /** spinner ends */
          this.spinner.hide();
          this.alertService.success(data.message, true, 5000);
          this.router.navigate(['/user/login']);
        },
        error => {
          /** spinner ends */
          this.spinner.hide();
          console.log(error);
          this.alertService.error(error.message, true);
        });

    } else {
      /** spinner starts */
      this.spinner.show();
      this.usersService.updateUser(this.model, this.session.retrieveUserId()).subscribe(
        (data: any) => {
          /** spinner ends */
          this.spinner.hide();
          this.alertService.success('User updated successfully.', true);
          data.password = undefined;
          this.session.saveUserData(JSON.stringify(data));
          this.alertService.success('User Updated successfully.', true);
        },
        error => {
          /** spinner ends */
          this.spinner.hide();
          console.log('service down ', error);
          try {
            this.alertService.error(error.statusText);
          } catch (e) {
            console.log(e);
          }
        });
    }
  }
}
