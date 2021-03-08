import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'restaurant';
  constructor(private appService: AppService){

  }
  ngOnInit() {
    console.log("component getPosts");
    this.appService.getPosts();
    this.appService.registerUser({userName:"roshan", pwd:"password"});
  }
  
}
