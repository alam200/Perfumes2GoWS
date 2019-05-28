import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from '../../../common/alert/alert.service';
import { UsersService } from '../../../services/users.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form: FormGroup;
  model: any = {};
  userCode: string;
  public buttonLabel = 'Add User';
  public brands = [];
  public types = [];
  public userCodes = [];
  
  constructor(private userService: UsersService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.userCode = this.route.snapshot.paramMap.get('userCode');
    if (this.userCode) {
      this.getUserDetails();
      this.buttonLabel = 'Update User';
    }
    this.getUserCodes();
    this.model = {
      category: 'normal',
      userStatus: 'active'
    };
  }

  getUserCodes() {
    this.userService.getUserCodes().then(
      (data: any) => {
        this.userCodes = data;
      },
      error => {
        console.log('service down ', error);
      });
  }

  onSubmit() {
    /** spinner starts */
    this.spinner.show();

    if (this.userCode) { // update user
      this.userService.updateUser(this.model, this.userCode).subscribe(
        (data: any) => {
          /** spinner ends */
          this.spinner.hide();
          this.alertService.success('User updated successfully.', true);
          setTimeout(() => {
            this.location.back();
          }, 1000);
        },
        error => {
          /** spinner ends */
          this.spinner.hide();
          console.log('service down ', error);
          this.alertService.error(error.statusText);
        });
    };
  }

  cancel() {
    this.location.back();
  }

  onChange(userCode) {
    const isUserCodeExist = this.userCodes.indexOf(userCode) > -1;
    if (isUserCodeExist) {
      this.userCode = userCode;
      this.getUserDetails();
    }
  }

  getUserDetails() {
    this.spinner.show();
    this.userService.getUserDetails(this.userCode).subscribe((resp) => {
      this.spinner.hide();
      this.model = resp;
      this.buttonLabel = 'Update User';
    },
      (err) => {
        this.spinner.hide();
        console.log('user details err', err);
      });
  }

  restrictNegativeValue(event) {
    if (+event.target.value < 0) {
      event.target.value = 0;
    }
  }
}
