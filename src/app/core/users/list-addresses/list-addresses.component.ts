import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from '../../../services/session.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { AlertService } from '../../../common/alert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-addresses',
  templateUrl: './list-addresses.component.html',
  styleUrls: ['./list-addresses.component.css']
})
export class ListAddressesComponent implements OnInit {
  addresses: any = [];
  constructor(private usersService: UsersService,
    private alertService: AlertService,
    private router: Router,
    private session: SessionService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getAddressesList();
  }

  getAddressesList() {
    const userId = this.session.retrieveUserId();
    this.spinner.show();
    this.usersService.getAddresses(userId).subscribe(
      (resp) => {
        this.spinner.hide();
        this.addresses = resp;
      },
      error => {
        this.spinner.hide();
        console.log('service down ', error);
        this.alertService.error(error.statusText);
      });
  }

  deleteAddress(addressId) {
    this.spinner.show();
    this.usersService.deleteAddress(addressId).subscribe(
      () => {
        // this.alertService.success('Address deleted successfully.');
        this.spinner.hide();
        this.addresses = this.addresses.filter(address => address._id !== addressId);
      },
      error => {
        this.spinner.hide();
        console.log('service down ', error);
        this.alertService.error(error.statusText);
      });
  }

}
