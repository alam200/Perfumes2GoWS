import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})

export class AboutusComponent implements OnInit {

  constructor(private session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.session.isLoggedIn()) {
      this.router.navigate(['/user/login']);
    }
  }

}
