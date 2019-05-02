import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { AlertService } from '../../../common/alert/alert.service';
import { SessionService } from '../../../services/session.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  model: any = {};
  addressId: string;
  constructor(private usersService: UsersService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private location: Location,
    private session: SessionService
  ) {
    this.addressId = this.route.snapshot.paramMap.get('addressId');
  }

  ngOnInit() {
    if (this.addressId) {
      this.getAddress();
    }
  }

  onSubmit() {
    if (this.addressId) {
      this.updateAddress();
    } else {
      this.addAddress();
    }
  }

  addAddress() {
    this.model['userId'] = this.session.retrieveUserId();
    /** spinner starts */
    this.spinner.show();
    this.usersService.addAddress(this.model).subscribe(
      () => {
        /** spinner ends */
        this.spinner.hide();
        this.alertService.success('Address added successfully.');
        this.location.back();
      },
      error => {
        /** spinner ends */
        this.spinner.hide();
        if (error.status === 0) {
          console.log('service down ', error);
        } else {
          this.alertService.error(error.statusText);
        }
      });
  }

  updateAddress() {
    this.spinner.show();
    this.model['userId'] = this.session.retrieveUserId();
    this.usersService.updateAddress(this.model, this.addressId).subscribe(
      () => {
        this.spinner.hide();
        this.alertService.success('Address updated successfully.');
        this.location.back();
      },
      error => {
        this.spinner.hide();
        if (error.status === 0) {
          console.log('service down ', error);
        } else {
          this.alertService.error(error.statusText);
        }
      });
  }

  getAddress() {
    this.spinner.show();
    this.usersService.getAddressDetails(this.addressId).subscribe(
      (response) => {
        this.spinner.hide();
        this.model = response;
        this.model._id = undefined;
      },
      error => {
        this.spinner.hide();
        if (error.status === 0) {
          console.log('service down ', error);
        } else {
          this.alertService.error(error.statusText);
        }
      });
  }
}
