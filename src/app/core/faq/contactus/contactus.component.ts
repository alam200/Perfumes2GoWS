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
      // no preinput
    } else {
      if (this.session.retrieveUserData()) {
        const userdata = JSON.parse(this.session.retrieveUserData());
        this.model.firstName = userdata.firstName;
        this.model.lastName = userdata.lastName;
        this.model.email = userdata.email;
        this.model.userId = userdata._id;
      }
    }
  }

  onSubmit() {
    /** spinner starts */
    this.spinner.show();
    this.usersService.sendContactMail(this.model).subscribe(
      (data: any) => {
        /** spinner ends */
        this.spinner.hide();
        this.alertService.success(data.message, true);
        // where to go after sending mail
        if (!this.session.isLoggedIn()) {
          this.router.navigate(['/user/login']);
        } else {
          this.router.navigate(['/products']);
        }
      },
      error => {
        /** spinner ends */
        this.spinner.hide();
        console.log(error);
        this.alertService.error(error.message, true);
      });
  }

}
