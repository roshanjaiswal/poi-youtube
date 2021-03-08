import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  getPosts() {
    this.http.get('http://localhost:3000/posts').subscribe(res => {
      console.log(JSON.stringify(res));
      
      
    },err => console.error('HTTP Error', err))
  }

  registerUser(userDeatil) {
    this.http.post('http://localhost:3000/register', userDeatil).subscribe(res => {
      console.log(JSON.stringify(res));
    },err => console.error('HTTP Error', err))
  }
}
