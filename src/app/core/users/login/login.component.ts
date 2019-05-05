import { Component, OnInit, Injectable } from '@angular/core';
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
@Injectable ()

export class LoginComponent implements OnInit {
  model: any = {};
  // ng-image-slider
  slideImage: Number = (window.innerWidth < 768) && 1 || 3;
  imageObject: Array<object> = [
    {
      image: 'assets/slider/1.jpg',
      thumbImage: 'assets/slider/1_min.jpg',
      title: 'NEW! Receive a Complimentary Deluxe'
    },
    {
      image: 'assets/slider/2.jpg',
      thumbImage: 'assets/slider/2_min.jpg',
      title: 'Giorgio Armani 2-Pc. Si Passione Gift Set'
    },
    {
      image: 'assets/slider/3.jpg',
      thumbImage: 'assets/slider/3_min.jpg',
      title: 'Giorgio Armani Si Eau de Parfum Spray, 3.4oz'
    },
    {
      image: 'assets/slider/4.jpg',
      thumbImage: 'assets/slider/4_min.jpg',
      title: 'DOLCE&GABBANA 3-Pc. Light Blue Eau de'
    },
    {
      image: 'assets/slider/5.jpg',
      thumbImage: 'assets/slider/5_min.jpg',
      title: 'DOLCE&GABBANA Light Blue Eau de'
    },
    {
      image: 'assets/slider/6.jpg',
      thumbImage: 'assets/slider/6_min.jpg',
      title: 'NEW! DOLCE&GABBANA The'
    },
    {
      image: 'assets/slider/7.jpg',
      thumbImage: 'assets/slider/7_min.jpg',
      title: 'COACH Floral Eau de Parfum Spray, 3oz.'
    },
    {
      image: 'assets/slider/8.jpg',
      thumbImage: 'assets/slider/8_min.jpg',
      title: 'DOLCE&GABBANA The Only One Eau de'
    },
    {
      image: 'assets/slider/9.jpg',
      thumbImage: 'assets/slider/9_min.jpg',
      title: 'NEW! Prada Candy Night Eau de Parfum'
    },
    {
      image: 'assets/slider/10.jpg',
      thumbImage: 'assets/slider/10_min.jpg',
      title: 'Versace 3-Pc. Bright Crystal Gift Set'
    },
    {
      image: 'assets/slider/11.jpg',
      thumbImage: 'assets/slider/11_min.jpg',
      title: 'MARC JACOBS 3-Pc. Daisy Love Gift Set'
    },
    {
      image: 'assets/slider/12.jpg',
      thumbImage: 'assets/slider/12_min.jpg',
      title: 'Gucci 3-Pc. Bloom Gift Set'
    },
  ];

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
