import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isUserLogedInSubject = new BehaviorSubject<any>({});
  // private isUserLogedInAction = this.isUserLogedInSubject.asObservable();

  authenticate(username, password) {
    if ((username === "roshan@email.com" || username === "roshan") && password === "password") {
      var userDetails = {
        userName: "Roshan",
        role: "",
        isUserLogedIn: true
      };
      sessionStorage.setItem( "userDetail", JSON.stringify(userDetails));
      this.isUserLogedInSubject.next(userDetails);
      return true;
    } else if ((username === "admin@email.com" || username === "admin") && password === "admin") {
      var userDetails = {
        userName: "Roshan",
        role: "admin",
        isUserLogedIn: true
      };
      sessionStorage.setItem( "userDetail", JSON.stringify(userDetails));
      this.isUserLogedInSubject.next(userDetails);
      return true;
    }
     else {
      return false;
    }
  }



  // isUserLoggedIn() {
  //   return false;
  // }

  logOut() {
    var userDetails = {};
    this.isUserLogedInSubject.next(userDetails);
    sessionStorage.removeItem("userDetail");
  }
}
