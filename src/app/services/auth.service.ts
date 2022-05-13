import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  isAuthUpdated = new Subject<boolean>();

  constructor() { }

  signIn() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isAuth = true;
        this.isAuthUpdated.next(this.isAuth);
        resolve(true);
      }, 2000);
    })
  }

  signOut() {
    this.isAuth = false;
    this.isAuthUpdated.next(this.isAuth);
  }
}
