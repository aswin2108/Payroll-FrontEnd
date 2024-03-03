// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Password } from 'primeng/password';
import { Subject } from 'rxjs';
import { LoginService } from 'src/app/shared/loginService/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  loading:boolean=false
  userChange: Subject<boolean> = new Subject<boolean>();

  constructor(private fb:FormBuilder, private loginService:LoginService, private router: Router){}

  ngOnInit(): void {
      this.initializeLoginForm();
  }

  initializeLoginForm(){
    this.loginForm=this.fb.group({
      userName: this.fb.control(''),
      Password: this.fb.control(''),
    });
  }

  submitLogInForm(){
    this.loading=true;
    const logInStatus=this.loginService.loginAuthentication(this.loginForm.value);
    this.userChange.next(true);
    this.loading=false;
  }
}
