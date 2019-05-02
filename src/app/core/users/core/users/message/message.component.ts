import { UsersService } from './../../../../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message: string;
  token: string;
  constructor(private route: ActivatedRoute,
    private userService: UsersService) { }

  ngOnInit() {
    this.token = this.route.snapshot.params['token'];
    if (this.token) {
      this.verifyUserEmail();
    }
  }

  verifyUserEmail() {
    this.userService.verifyEmail(this.token).subscribe((data: any) => {
      this.message = data.message;
    },
      (err) => {
        this.message = err.error.message;
        console.log('product details err', err.error.message);
      });
  }

}
