import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { AuthenticationService } from '../_core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted  =  false;
  invalidLogin =  true;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  		this.loginForm  =  this.formBuilder.group({
	        email: ['', Validators.required],
	        password: ['', Validators.required]
	    });
  }
  
  get formControls() { return this.loginForm.controls; } 

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    else{
      if(this.loginservice.authenticate(this.loginForm.value.email, this.loginForm.value.password)){
        this.router.navigate(['/ytList'])
        this.invalidLogin = false
      } else
        this.invalidLogin = true
      }
  }

}
