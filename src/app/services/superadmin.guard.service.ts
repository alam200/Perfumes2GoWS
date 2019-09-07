import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SessionService } from './session.service';

@Injectable()
export class SuperAdminGuardService implements CanActivate {

  constructor(public session: SessionService, public router: Router) { }

  canActivate(): boolean {
    const user = this.session.retrieveUserData();
    const token = this.session.retrieveToken();
    if (token != null && JSON.parse(user).category === 'Superadmin') {
      return true;
    }
    this.router.navigate(['products']);
    return false;
  }
}
