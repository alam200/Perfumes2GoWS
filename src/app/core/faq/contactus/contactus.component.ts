import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AlertService } from '../../../common/alert/alert.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent implements OnInit {
  model: any = {};

  constructor(private usersService: UsersService,
    private alertService: AlertService,
    private session: SessionService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.session.isLoggedIn()) {
      this.router.navigate(['/user/login']);
    } else {
      if (this.session.retrieveUserData()) {
        const userdata = JSON.parse(this.session.retrieveUserData());
        this.model.firstName = userdata.firstName;
        this.model.lastName = userdata.lastName;
        this.model.email = userdata.email;
      }
    }
  }

  onSubmit() {
    console.log(this.model);
    this.alertService.error('working...');
    // /** spinner starts */
    // this.spinner.show();
    // this.usersService.updateUser(this.model, this.session.retrieveUserId()).subscribe(
    //   (data: any) => {
    //     /** spinner ends */
    //     this.spinner.hide();
    //     this.alertService.success('User updated successfully.', true);
    //     data.password = undefined;
    //     this.session.saveUserData(JSON.stringify(data));
    //     this.alertService.success('User Updated successfully.', true);
    //   },
    //   error => {
    //     /** spinner ends */
    //     this.spinner.hide();
    //     this.alertService.error(error.statusText);
    //     if (error.status === 0) {
    //       console.log('service down ', error);
    //     } else {
    //       this.alertService.error(error.statusText);
    //     }
    //   });
  }

}
