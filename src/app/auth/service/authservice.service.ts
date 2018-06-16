import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { User } from '../model/user';
import { AuthData } from '../model/auth-data';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
private isValidUser = false;
public userAuthEvent: any = new Subject<boolean>();

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  signUpUser(authData: AuthData) {
    if (authData != null) {
      this.afAuth.auth.
      createUserWithEmailAndPassword(authData.email, authData.password).
        then(sucess => {
          console.log(sucess);
          this.UserProcessed();
        }).
        catch (error => {
          console.log(error);
        });
    }
  }

  login(authData: AuthData) {
    if (authData != null) {
      this.afAuth.auth.
      signInWithEmailAndPassword(authData.email, authData.password).
        then(sucess => {
          console.log(sucess);
          this.UserProcessed();
        }).
        catch (error => {
          console.log(error);
        });
    }
  }

  Logout() {
    this.isValidUser = false;
    this.userAuthEvent.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    // return {...this.user};
  }

  isAuthenticated() {
    return this.isValidUser;
  }

  private UserProcessed() {
    this.isValidUser = true;
    this.userAuthEvent.next(true);
    this.router.navigate(['/']);
  }

}
