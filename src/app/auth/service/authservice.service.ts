import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { User } from '../model/user';
import { AuthData } from '../model/auth-data';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
private user: User;
public userAuthEvent: any = new Subject<boolean>();

  constructor(private router: Router) { }

  signUpUser(authData: AuthData) {
    if (authData != null) {
      this.user = {
        email: authData.email,
        userId: Math.round(Math.random() * 5000).toString()
      };
      this.userAuthEvent.next(true);
      this.router.navigate(['/']);
    }
  }

  login(authData: AuthData) {
    if (authData != null) {
      this.user = {
        email: authData.email,
        userId: Math.round(Math.random() * 5000).toString()
      };
      this.userAuthEvent.next(true);
      this.router.navigate(['/']);
    }
  }

  Logout() {
    if ( this.user !== null) {
      this.user = null;
    }
    this.userAuthEvent.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return {...this.user};
  }

  isAuthenticated() {
    return this.user != null;
  }

}
