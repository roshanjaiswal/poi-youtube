import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isUserLogedIn = false;
  userName = "";
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.isUserLogedInSubject.subscribe(value => {
      this.userName = value.userName;
      this.isUserLogedIn = value.isUserLogedIn;
    });
    var userDetailFromSession = JSON.parse(sessionStorage.getItem( "userDetail"));
    if (userDetailFromSession && userDetailFromSession.isUserLogedIn){
      this.authService.isUserLogedInSubject.next(userDetailFromSession);
    }
  }

  logout(){
    this.authService.logOut();
  }

}
